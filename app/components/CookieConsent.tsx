"use client";
import { useEffect, useState } from "react";

type Consent = {
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
};

const CONSENT_KEY = "rhn_cookie_consent_v1";

function getStoredConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const saved = getStoredConsent();
    if (!saved) setOpen(true); // pokaż baner tylko gdy brak decyzji
  }, []);

  function saveConsent(next: Consent) {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(next));
    // dispatch event – żeby inne części appki (np. GA) mogły zareagować
    window.dispatchEvent(new CustomEvent("rhn:consent", { detail: next }));
  }

  function acceptAll() {
    const c = { analytics: true, marketing: true, timestamp: Date.now() };
    saveConsent(c);
    setOpen(false);
  }
  function rejectAll() {
    const c = { analytics: false, marketing: false, timestamp: Date.now() };
    saveConsent(c);
    setOpen(false);
  }
  function savePrefs() {
    const c = { analytics, marketing, timestamp: Date.now() };
    saveConsent(c);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60]">
      <div className="mx-auto max-w-7xl px-6 pb-4">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-orange-600/20 via-orange-500/10 to-transparent p-5 md:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="max-w-2xl">
              <h4 className="text-base md:text-lg font-semibold">Cookies & privacy</h4>
              <p className="mt-1 text-xs md:text-sm text-neutral-300">
                Używamy wyłącznie niezbędnych cookies oraz – jeśli się zgodzisz – analitycznych/marketingowych
                do mierzenia ruchu i ulepszania strony. Możesz zmienić ustawienia w każdej chwili.
                <a href="/privacy" className="ml-1 underline hover:text-orange-300">Privacy & Cookies</a>.
              </p>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
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
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3 md:pt-1">
              <button onClick={rejectAll}
                className="rounded-2xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10 transition">
                Reject all
              </button>
              <button onClick={savePrefs}
                className="rounded-2xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10 transition">
                Save choices
              </button>
              <button onClick={acceptAll}
                className="rounded-2xl border border-orange-500/70 px-4 py-2 text-sm font-medium text-orange-300 hover:bg-orange-500/10 transition">
                Accept all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
