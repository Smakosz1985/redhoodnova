// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* ===== MOSAIC ===== */}
      <section className="w-full bg-black flex flex-col px-0 md:flex-1">
        {/* RZĄD 1 */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1.4fr] gap-0 md:flex-1">
          {/* LEFT (Service 1) */}
          <Link
            href="/services/copywriting"
            className="group relative block overflow-hidden bg-neutral-950 border-r border-b border-neutral-800 p-8 flex flex-col justify-end order-2 md:order-1 transition hover:bg-neutral-900"
          >
            <span className="text-xs uppercase tracking-widest text-neutral-400 mb-2">01 / Usługa</span>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-neutral-200 transition">
              Copywriting & Content
            </h3>
            <p className="text-sm text-neutral-400 mt-2">Słowa, które sprzedają i budują autorytet marki.</p>
          </Link>

          {/* CENTER (CTA) — logo i przycisk */}
          <div className="relative w-full aspect-[16/9] md:aspect-auto md:h-full bg-black border-b border-neutral-800 flex flex-col items-center justify-center p-6 order-1 md:order-2">
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/logo.png"
                alt="AeroFlux Studio — Creative & Tech Studio"
                width={260}
                height={100}
                className="w-48 md:w-64 h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
            <Link
              href="/contact"
              className="rounded-2xl border border-white/40 px-5 py-2 text-xs md:text-sm font-medium text-white hover:bg-white/10 transition"
            >
              Get a Quote
            </Link>
          </div>

          {/* RIGHT (Service 2) */}
          <Link
            href="/services/graphic-design"
            className="group relative block overflow-hidden bg-neutral-950 border-l border-b border-neutral-800 p-8 flex flex-col justify-end order-3 md:order-3 transition hover:bg-neutral-900"
          >
            <span className="text-xs uppercase tracking-widest text-neutral-400 mb-2">02 / Usługa</span>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-neutral-200 transition">
              Graphic Design
            </h3>
            <p className="text-sm text-neutral-400 mt-2">Unikalna identyfikacja wizualna i kreacje graficzne.</p>
          </Link>
        </div>

        {/* RZĄD 2: 4 kafle usługowe */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:flex-1">
          {[
            { title: "Web Design & Dev", desc: "Nowoczesne, szybkie strony i aplikacje internetowe.", href: "/services/web" },
            { title: "E-commerce", desc: "Sklepy internetowe zoptymalizowane pod konwersję.", href: "/services/ecommerce" },
            { title: "Branding", desc: "Kompleksowa tożsamość i strategie marek.", href: "/services/branding" },
            { title: "SEO & Marketing", desc: "Widoczność w wyszukiwarkach i skalowanie biznesu.", href: "/services/seo" },
          ].map((t, idx) => (
            <Link 
              key={t.title} 
              href={t.href} 
              className="group relative block overflow-hidden bg-black border-r border-b border-neutral-800 p-8 flex flex-col justify-between transition hover:bg-neutral-950 min-h-[200px] md:min-h-0"
            >
              <span className="text-xs text-neutral-500">0{idx + 3}</span>
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-neutral-200 transition mb-2">
                  {t.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {t.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}