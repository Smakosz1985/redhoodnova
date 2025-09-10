"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

export default function AnalyticsGate() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("rhn_cookie_consent_v1");
    if (consent === "accepted") setEnabled(true);

    const handler = (e: any) => {
      if (e.detail === "accepted") setEnabled(true);
      if (e.detail === "rejected") setEnabled(false);
    };
    window.addEventListener("rhn:consent", handler);
    return () => window.removeEventListener("rhn:consent", handler);
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Google Analytics 4 – podmień Measurement ID */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXX', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
