// components/CookieBanner.tsx
"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "aeroflux_cookie_consent_v1";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(CONSENT_KEY);
      if (!consent) {
        setShow(true);
      }
    } catch {
      // fallback
    }
  }, []);

  const handleConsent = (analytics: boolean, marketing: boolean) => {
    try {
      const data = { analytics, marketing, timestamp: Date.now() };
      localStorage.setItem(CONSENT_KEY, JSON.stringify(data));
      window.dispatchEvent(new CustomEvent("aeroflux:consent", { detail: data }));
    } catch {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <aside aria-label="Cookie consent" className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-4xl rounded-xl border border-cyan-500/30 bg-neutral-950/90 p-4 shadow-[0_0_25px_rgba(6,182,212,0.15)] backdrop-blur-md md:p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-neutral-300">
          <p className="leading-relaxed">
            We use essential cookies to make our site work. With your consent, we may also use analytics and marketing cookies to improve your experience. Read our{" "}
            <a href="/privacy" className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300 transition-colors">
              Privacy &amp; Cookies
            </a>{" "}
            policy.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            onClick={() => handleConsent(false, false)}
            className="rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 text-xs font-medium text-neutral-300 hover:bg-neutral-800 hover:text-white transition-all"
          >
            Reject non-essential
          </button>
          <button
            onClick={() => handleConsent(true, true)}
            className="rounded-lg bg-cyan-500 px-4 py-2 text-xs font-medium text-black shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:bg-cyan-400 transition-all"
          >
            Accept all
          </button>
        </div>
      </div>
    </aside>
  );
}