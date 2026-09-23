// app/privacy-choices/page.tsx
import type { Metadata } from "next";
import {
  PrivacyOptOutToggle,
  CookieQuickPreset,
  GranularEditors,
} from "./PrivacyChoicesClient";

export const metadata: Metadata = {
  title: "Your Privacy Choices • AeroFlux Studio",
  description:
    "Manage CPRA/CCPA opt-out (Do Not Sell/Share) and update GDPR cookie preferences (analytics/marketing).",
  alternates: { canonical: "/privacy-choices" },
};

const UPDATED = "October 2025";
const CONTACT_EMAIL = "contact@aerofluxstudio.com";

export default function PrivacyChoicesPage() {
  return (
    <main className="prose prose-invert max-w-3xl mx-auto px-6 py-10">
      <h1>Your Privacy Choices</h1>
      <p className="text-sm text-neutral-400">Last updated: {UPDATED}[cite: 9]</p>

      <p>
        This page helps you exercise rights under California’s CCPA/CPRA and EU/UK GDPR. It complements our{" "}
        <a href="/privacy">Privacy &amp; Cookies</a> and <a href="/terms">Terms of Service</a>[cite: 9].
      </p>

      <section>
        <h2>U.S. (California) — “Do Not Sell or Share”</h2>
        <p>
          While we do not sell personal information in the traditional sense, some advertising or analytics
          technologies may be considered “sharing” under CPRA[cite: 9].
        </p>
        <div className="not-prose my-4 rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
          <PrivacyOptOutToggle />
        </div>
        <ul>
          <li>
            <strong>Global Privacy Control (GPC):</strong> If your browser sends a GPC signal, we treat it as an
            opt-out on this browser[cite: 9].
          </li>
          <li>
            <strong>Apps (Ignaro/Flamette/Blazero):</strong> You can also disable ad personalization in your device settings[cite: 9].
          </li>
          <li>
            <strong>Email:</strong> You may submit a request at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>[cite: 9].
          </li>
        </ul>
      </section>

      <section>
        <h2>EU/UK (GDPR) — Cookies & Personalization</h2>
        <p>
          Use the controls below to update your cookie preferences. These write to the same consent storage used by our
          banner, so your existing scripts will respect the change[cite: 9].
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
        Need help? Contact <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>[cite: 9].
      </p>

      <p className="text-neutral-400 text-sm">
        © {new Date().getFullYear()} AeroFlux Studio — Based in the United Kingdom. Available worldwide.
      </p>
    </main>
  );
}