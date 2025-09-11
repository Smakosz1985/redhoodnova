"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function ContactPage() {
  const [status, setStatus] =
    useState<"idle" | "loading" | "success" | "error">("idle");

  // --- Anti-spam: stempel czasu + token formularza
  const createdAt = useMemo(() => Date.now(), []);
  const formToken = useMemo(
    () => Math.random().toString(36).slice(2) + Date.now().toString(36),
    []
  );

  // prosta blokada floodu po stronie przeglądarki (20 s cooldown)
  function checkClientCooldown(): string | null {
    try {
      const raw = localStorage.getItem("rhn-last-submit");
      if (!raw) return null;
      const last = Number(raw);
      const diff = Date.now() - last;
      const min = 20_000; // 20 s
      if (diff < min) {
        const left = Math.ceil((min - diff) / 1000);
        return `Please wait ${left}s before sending again.`;
      }
    } catch {}
    return null;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    // blokada floodu
    const cd = checkClientCooldown();
    if (cd) {
      setStatus("error");
      alert(cd);
      return;
    }

    const form = e.currentTarget;
    const fd = new FormData(form);

    // honeypot
    const website = (fd.get("website") as string) || "";
    if (website) {
      setStatus("success");
      form.reset();
      return;
    }

    const payload = {
      name: (fd.get("name") as string) || "",
      email: (fd.get("email") as string) || "",
      subject: (fd.get("subject") as string) || "",
      message: (fd.get("message") as string) || "",
      // anti-spam pola:
      _createdAt: String(createdAt),
      _formToken: formToken,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        try {
          localStorage.setItem("rhn-last-submit", String(Date.now()));
        } catch {}
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      
      {/* HERO */}
      <section className="w-full border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-16 grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest text-orange-400/90 uppercase mb-3">
              Get in touch
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Contact Us
            </h1>
            <p className="mt-4 text-sm md:text-base text-neutral-300 max-w-prose">
              Tell us about your project. We&apos;ll get back to you within 1–2 business days.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 aspect-[5/4] md:aspect-[4/3]">
              <Image
                src="/contact-visual.png"
                alt="Email & Support Visual"
                fill
                sizes="(min-width:1024px) 60vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* FORM GRID */}
      <section className="w-full bg-black">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-16 grid lg:grid-cols-2 gap-6 items-stretch">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold">Project details</h2>
            <p className="mt-2 text-sm text-neutral-300">
              The more context, the better the plan we can propose. Share goals, timeline, and any references or inspirations.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-neutral-300">
              <li>• Websites & web apps (Next.js, e-commerce, headless CMS)</li>
              <li>• Branding & UI systems</li>
              <li>• Performance, accessibility, SEO</li>
            </ul>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 flex">
            <form onSubmit={handleSubmit} className="space-y-5 w-full flex flex-col">
              {/* honeypot */}
              <input name="website" type="text" autoComplete="off" tabIndex={-1} className="hidden" />

              {/* anti-spam hidden fields */}
              <input name="_createdAt" type="hidden" value={String(createdAt)} readOnly />
              <input name="_formToken" type="hidden" value={formToken} readOnly />

              <input
                name="name"
                type="text"
                placeholder="Your name or company"
                required
                className="w-full rounded-xl bg-black border border-white/20 px-4 py-3 text-sm focus:border-orange-500/70 focus:outline-none"
              />
              <input
                name="email"
                type="email"
                placeholder="Email address"
                required
                className="w-full rounded-xl bg-black border border-white/20 px-4 py-3 text-sm focus:border-orange-500/70 focus:outline-none"
              />
              <select
                name="subject"
                required
                className="w-full rounded-xl bg-black border border-white/20 px-4 py-3 text-sm focus:border-orange-500/70 focus:outline-none"
              >
                <option value="">Choose a topic…</option>
                <option value="I want a quote">I want a quote</option>
                <option value="I want to start a project">I want to start a project</option>
                <option value="Other inquiry">Other inquiry</option>
              </select>
              <textarea
                name="message"
                placeholder="Your message"
                required
                className="min-h-[180px] flex-1 w-full rounded-xl bg-black border border-white/20 px-4 py-3 text-sm focus:border-orange-500/70 focus:outline-none"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="self-start rounded-2xl border border-orange-500/70 px-6 py-3 text-sm font-medium text-orange-300 hover:bg-orange-500/10 transition disabled:opacity-50"
              >
                {status === "loading" ? "Sending…" : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-sm">Thanks, we&apos;ll get back to you soon.</p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm">
                  Something went wrong. Please try again or email us at contact@redhoodnova.com.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* WIDE CTA */}
      <section className="w-full bg-gradient-to-r from-orange-600/20 via-orange-500/10 to-transparent">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Ready to start the conversation?</h3>
            <p className="mt-2 text-sm text-neutral-300 max-w-prose">
              Send us a message and we’ll get back to you within 1–2 business days with next steps.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/services"
              className="rounded-2xl border border-white/20 px-5 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
