"use client";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    enableGA?: () => void;
    gtag?: (...args: any[]) => void;
  }
}

export default function CookieBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // pokaż baner tylko gdy nie ma naszej zgody/odmowy
    const v = localStorage.getItem("rhn_cookie_consent_v1");
    if (!v) setOpen(true);
  }, []);

  if (!open) return null;

  function save(value: "accepted" | "rejected") {
    // nasz klucz do wersjonowania banera
    localStorage.setItem("rhn_cookie_consent_v1", value);

    // klucz zgodny z logiką w layout.tsx (tam czytasz rhn-consent)
    localStorage.setItem(
      "rhn-consent",
      JSON.stringify({ analytics: value === "accepted" })
    );

    // aktualizacja trybu zgody (jeśli używasz Consent Mode)
    if (value === "accepted") {
      // jeśli layout zdefiniował helpera – uruchomi GA i/lub consent update
      window.enableGA?.();
      // dodatkowo (bezpiecznie): wymuś granted
      window.gtag?.("consent", "update", { analytics_storage: "granted" });
    } else {
      window.gtag?.("consent", "update", { analytics_storage: "denied" });
    }

    // własny event – jeśli gdzieś nasłuchujesz
    window.dispatchEvent(new CustomEvent("rhn:consent", { detail: value }));
    setOpen(false);
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60]">
      <div className="mx-auto max-w-7xl px-6 pb-4">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-orange-600/20 via-orange-500/10 to-transparent p-5 backdrop-blur">
          <p className="text-xs md:text-sm text-neutral-300">
            We use essential cookies and, if you allow, analytics/marketing cookies to improve the site.
            <a href="/privacy" className="ml-1 underline hover:text-orange-300">Privacy & Cookies</a>.
          </p>
          <div className="mt-3 flex gap-2">
            <button
              onClick={() => save("rejected")}
              className="rounded-2xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
            >
              Reject all
            </button>
            <button
              onClick={() => save("accepted")}
              className="rounded-2xl border border-orange-500/70 px-4 py-2 text-sm font-medium text-orange-300 hover:bg-orange-500/10"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
