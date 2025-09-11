import "./globals.css";
import type { Metadata } from "next";
import CookieBar from "./components/CookieBar";
import AnalyticsGate from "./components/AnalyticsGate";
import Script from "next/script";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "RedHoodNova — Web Design & Branding",
  description: "Creative & Tech Studio based in the UK.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black">
      <body className="bg-black text-white antialiased min-h-screen flex flex-col">
        {/* Header globalny */}
        <Header />

        {/* Główna treść */}
        <div className="flex-1">{children}</div>

        {/* Footer globalny */}
        <Footer />

        {/* 🔎 Analytics – ładowanie GA tylko po zgodzie */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-boot" strategy="afterInteractive">
          {`
            (function () {
              function hasConsent() {
                try {
                  var raw = localStorage.getItem('rhn-consent');
                  if (raw) { var json = JSON.parse(raw); return !!(json && json.analytics); }
                } catch (_) {}
                return localStorage.getItem('rhn-cookie') === 'accepted';
              }
              function initGA() {
                if (window.__ga_inited) return;
                window.__ga_inited = true;
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { anonymize_ip: true });
              }
              if (hasConsent()) { initGA(); }
              window.enableGA = function () { initGA(); };
            })();
          `}
        </Script>

        {/* 🔎 Twoja istniejąca logika: gate + banner cookies */}
        <AnalyticsGate />
        <CookieBar />
      </body>
    </html>
  );
}
