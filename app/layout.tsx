import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieBar from "./components/CookieBar";
import AnalyticsGate from "./components/AnalyticsGate";

export const metadata: Metadata = {
  title: "RedHoodNova — Web Design & Branding",
  description: "Creative & Tech Studio based in the UK.",
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // np. G-XXXXXXX

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black">
      <body className="bg-black text-white antialiased min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />

        {GA_ID ? (
          <>
            {/* Loader gtag.js */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            {/* Inicjalizacja + helper enableGA + natychmiastowy page_view po zgodzie */}
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
                    // SPA: wysyłamy page_view ręcznie
                    gtag('config', '${GA_ID}', { send_page_view: false });
                  }

                  function sendPageView() {
                    if (!window.gtag) return;
                    window.gtag('event', 'page_view', {
                      page_location: location.href,
                      page_path: location.pathname + location.search,
                      page_title: document.title
                    });
                  }

                  if (hasConsent()) {
                    initGA();
                    sendPageView(); // jeśli zgoda była wcześniej
                  }

                  // helper wołany z CookieBar po "Accept"
                  window.enableGA = function () {
                    initGA();
                    window.gtag && window.gtag('consent', 'update', { analytics_storage: 'granted' });
                    sendPageView(); // pierwszy page_view po akceptacji
                    window.dispatchEvent(new CustomEvent('rhn:consent', { detail: 'accepted' }));
                  };
                })();
              `}
            </Script>

            {/* Nasłuch zmian trasy i ew. eventu zgody */}
            <AnalyticsGate />
          </>
        ) : null}

        {/* Upewnij się, że w CookieBar po "Accept" wołasz: window.enableGA?.() */}
        <CookieBar />
      </body>
    </html>
  );
}
