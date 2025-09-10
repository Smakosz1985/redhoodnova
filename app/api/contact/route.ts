import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

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
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (String(name).length > 200 || String(message).length > 5000) {
      return NextResponse.json({ error: "Payload too large" }, { status: 413 });
    }

    const transporter = makeTransport();

    const info = await transporter.sendMail({
      from: `"${sanitize(name)}" <${process.env.ZOHO_SMTP_USER}>`,
      to: process.env.CONTACT_TO!,
      replyTo: email,
      subject: `[Contact Form] ${subject ? sanitize(subject) : "New message"}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
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
