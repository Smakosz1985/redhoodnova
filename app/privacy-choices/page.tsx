// app/privacy-choices/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Privacy Choices • RedHoodNova",
  description:
    "Manage CPRA/CCPA opt-out (Do Not Sell/Share) and update your GDPR cookie preferences for analytics and marketing.",
  alternates: { canonical: "/privacy-choices" },
};

const UPDATED = "October 2025";
const CONTACT_EMAIL = "contact@redhoodnova.com";

// Te same klucze co w Twoim banerze:
const CONSENT_KEY = "rhn_cookie_consent_v1"; // localStorage -> { analytics, marketing, timestamp }
const CPRA_KEY = "rhn_cpra_optout";          // "true" = opt-out (Do Not Sell/Share)

export default function PrivacyChoicesPage() {
  return (
    <main className="prose prose-invert max-w-3xl mx-auto px-6 py-10">
      <h1>Your Privacy Choices</h1>
      <p className="text-sm text-neutral-400">Last updated: {UPDATED}</p>

      <p>
        This page helps you exercise rights under California’s CCPA/CPRA and EU/UK GDPR. It complements our{" "}
        <a href="/privacy">Privacy &amp; Cookies</a> and <a href="/terms">Terms of Service</a>.
      </p>

      <section>
        <h2>U.S. (California) — “Do Not Sell or Share”</h2>
        <p>
          While we do not sell personal information in the traditional sense, some advertising or analytics
          technologies may be considered “sharing” under CPRA.
        </p>
        <div className="not-prose my-4 rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
          <PrivacyOptOutToggle />
        </div>
        <ul>
          <li><strong>Global Privacy Control (GPC):</strong> If your browser sends a GPC signal, we treat it as an opt-out on this browser.</li>
          <li><strong>Apps (Ignaro/Flamette/Blazero):</strong> You can also disable ad personalization in your device settings.</li>
          <li><strong>Email:</strong> You may submit a request at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</li>
        </ul>
      </section>

      <section>
        <h2>EU/UK (GDPR) — Cookies & Personalization</h2>
        <p>
          Use the controls below to update your cookie preferences. These write to the same consent storage used by our banner,
          so your existing scripts will respect the change.
        </p>
        <div className="not-prose grid gap-3 sm:grid-cols-2 my-4">
          <CookieQuickPreset preset="accept-all" label="Accept all cookies" />
          <CookieQuickPreset preset="reject-all" label="Reject non-essential" />
        </div>
        <div className="not-prose my-3">
          <GranularEditors />
        </div>
      </section>

      <h2>Questions</h2>
      <p>
        Need help? Contact <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <p className="text-neutral-400 text-sm">
        © {new Date().getFullYear()} RedHoodNova — Based in the United Kingdom. Available worldwide.
      </p>
    </main>
  );
}

/* ---------------- Client-side helpers (spójne z Twoim banerem) ---------------- */
"use client";
import { useEffect, useState } from "react";

type Consent = { analytics: boolean; marketing: boolean; timestamp: number };

function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function writeConsent(next: Consent) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(next));
  // Event jak w banerze – Twoje skrypty mogą zareagować:
  window.dispatchEvent(new CustomEvent("rhn:consent", { detail: next }));
}

function PrivacyOptOutToggle() {
  const [optedOut, setOptedOut] = useState(false);

  useEffect(() => {
    const gpc = typeof navigator !== "undefined" && (navigator as any).globalPrivacyControl ? true : false;
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(CPRA_KEY) : null;

    if (gpc) {
      setOptedOut(true);
      window.localStorage.setItem(CPRA_KEY, "true");
      document.cookie = `${CPRA_KEY}=true; Path=/; SameSite=Lax; Max-Age=31536000`;
    } else if (stored) {
      setOptedOut(stored === "true");
    }
  }, []);

  const toggle = () => {
    const next = !optedOut;
    setOptedOut(next);
    if (next) {
      window.localStorage.setItem(CPRA_KEY, "true");
      document.cookie = `${CPRA_KEY}=true; Path=/; SameSite=Lax; Max-Age=31536000`;
    } else {
      window.localStorage.removeItem(CPRA_KEY);
      document.cookie = `${CPRA_KEY}=; Path=/; SameSite=Lax; Max-Age=0`;
    }
    // Jeśli masz własne hooki pod CPRA – możesz tu dodać własny event
    // window.dispatchEvent(new CustomEvent("rhn:cpra", { detail: { optedOut: next } }));
  };

  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="font-semibold">Opt out of “sharing” (CPRA)</p>
        <p className="text-sm text-neutral-400">When enabled, we disable cross-context ads/trackers for this browser and honor GPC.</p>
      </div>
      <button
        onClick={toggle}
        className={`px-4 py-2 rounded-md border transition ${
          optedOut
            ? "border-green-500 text-green-400 hover:bg-green-500/10"
            : "border-neutral-700 text-neutral-300 hover:bg-neutral-800"
        }`}
        aria-pressed={optedOut}
      >
        {optedOut ? "Opted-out" : "Opt-out"}
      </button>
    </div>
  );
}

function CookieQuickPreset({ preset, label }: { preset: "accept-all" | "reject-all"; label: string }) {
  const apply = () => {
    const next: Consent =
      preset === "accept-all"
        ? { analytics: true, marketing: true, timestamp: Date.now() }
        : { analytics: false, marketing: false, timestamp: Date.now() };
    writeConsent(next);
    // Odśwież, jeśli skrypty ładujesz warunkowo na SSR/CSR:
    window.location.reload();
  };

  return (
    <button
      onClick={apply}
      className="w-full rounded-md border border-neutral-700 px-4 py-2 text-left hover:bg-neutral-800 transition"
    >
      {label}
    </button>
  );
}

function GranularEditors() {
  const [loaded, setLoaded] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const saved = readConsent();
    if (saved) {
      setAnalytics(!!saved.analytics);
      setMarketing(!!saved.marketing);
    }
    setLoaded(true);
  }, []);

  const save = () => {
    const next: Consent = { analytics, marketing, timestamp: Date.now() };
    writeConsent(next);
    window.location.reload();
  };

  if (!loaded) return null;

  return (
    <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-4">
      <p className="font-semibold mb-2">Granular controls</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked disabled className="accent-orange-500" />
          <span>Essential (required)</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={analytics}
            onChange={(e) => setAnalytics(e.target.checked)}
            className="accent-orange-500"
          />
          <span>Analytics</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={marketing}
            onChange={(e) => setMarketing(e.target.checked)}
            className="accent-orange-500"
          />
          <span>Marketing</span>
        </label>
      </div>
      <div className="mt-3 flex gap-2">
        <button
          onClick={save}
          className="rounded-md border border-white/20 px-3 py-2 text-sm hover:bg-white/10 transition"
        >
          Save choices
        </button>
        <button
          onClick={() => {
            const next: Consent = { analytics: false, marketing: false, timestamp: Date.now() };
            writeConsent(next);
            window.location.reload();
          }}
          className="rounded-md border border-white/20 px-3 py-2 text-sm hover:bg-white/10 transition"
        >
          Reject non-essential
        </button>
        <button
          onClick={() => {
            const next: Consent = { analytics: true, marketing: true, timestamp: Date.now() };
            writeConsent(next);
            window.location.reload();
          }}
          className="rounded-md border border-orange-500/70 px-3 py-2 text-sm font-medium text-orange-300 hover:bg-orange-500/10 transition"
        >
          Accept all
        </button>
      </div>
    </div>
  );
}
