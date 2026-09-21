import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

/* ===== In-memory rate limit =====
   5 zgłoszeń na 60s / IP (wystarcza na Vercel Functions) */
const ipHits = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_HITS = 5;

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const arr = (ipHits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (arr.length >= MAX_HITS) return false;
  arr.push(now);
  ipHits.set(ip, arr);
  return true;
}

function makeTransport() {
  const host = process.env.ZOHO_HOST!;
  const port = Number(process.env.ZOHO_PORT || 465);
  const secure = String(process.env.ZOHO_SECURE) === "true"; // 465 = SSL
  const user = process.env.ZOHO_SMTP_USER!;
  const pass = process.env.ZOHO_SMTP_PASS!;
  if (!host || !user || !pass) throw new Error("SMTP env vars missing");
  return nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message, website, _createdAt, _formToken } = body ?? {};

    // 0) Rate limit per IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      (req as any).ip ||
      "unknown";
    if (!rateLimit(ip)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    // 1) Honeypot (front już wysyła 'website')
    if (typeof website === "string" && website.trim() !== "") {
      return new NextResponse(null, { status: 204 });
    }

    // 2) Timestamp + prosty token formularza
    const ts = Number(_createdAt);
    const now = Date.now();
    // odrzuć zgłoszenia wysłane < 2.5s po renderze lub > 24h
    if (!Number.isFinite(ts) || now - ts < 2500 || now - ts > 24 * 60 * 60 * 1000) {
      return new NextResponse(null, { status: 204 });
    }
    // token powinien istnieć i mieć oczekiwaną długość
    if (typeof _formToken !== "string" || _formToken.length < 10 || _formToken.length > 64) {
      return new NextResponse(null, { status: 204 });
    }

    // 3) Walidacja pól
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (String(name).length > 200 || String(message).length > 5000) {
      return NextResponse.json({ error: "Payload too large" }, { status: 413 });
    }
    // prosta heurystyka anty-spamowa
    const lower = String(message).toLowerCase();
    const linkCount = (lower.match(/https?:\/\//g) || []).length;
    if (linkCount > 5 || /viagra|casino|porn|crypto\s+investment/i.test(lower)) {
      return new NextResponse(null, { status: 204 });
    }

    // 4) Wysyłka e-maila
    const transporter = makeTransport();

    const info = await transporter.sendMail({
      from: `"${sanitize(name)}" <${process.env.ZOHO_SMTP_USER}>`,
      to: process.env.CONTACT_TO!,
      replyTo: email,
      subject: `📨 [Contact] ${subject ? sanitize(subject) : "New message"}`,
      text: `IP: ${ip}\nFrom: ${name} <${email}>\n\n${message}`,
      html: `
        <p><b>IP:</b> ${escapeHtml(ip)}</p>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Message:</b><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ ok: true, id: info.messageId });
  } catch (err: any) {
    console.error("contact send error:", err?.message || err);
    return NextResponse.json(
      { error: process.env.NODE_ENV === "development" ? err?.message : "Email failed" },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
function sanitize(s: string) {
  return String(s).replace(/[\r\n]+/g, " ").trim();
}
