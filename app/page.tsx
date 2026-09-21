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
            className="group relative overflow-hidden bg-neutral-950 border-r border-b border-neutral-800 p-8 md:p-12 flex flex-col justify-end order-2 md:order-1 transition-all hover:bg-neutral-900 hover:border-cyan-500/50"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition" />
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-medium mb-3">01 / Service</span>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-cyan-200 transition">
              Copywriting & Content
            </h3>
            <p className="text-sm text-neutral-400 mt-2">Strategic words that convert and build brand authority.</p>
          </Link>

          {/* CENTER (CTA) — Czyste tło, zero ramek, wielkie logo */}
          <div className="relative w-full aspect-[16/9] md:aspect-auto md:h-full bg-black flex flex-col items-center justify-center p-6 order-1 md:order-2 border-y md:border-y-0 md:border-x border-neutral-800">
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/logo.png"
                alt="AeroFlux Studio"
                width={280}
                height={110}
                className="w-56 md:w-72 h-auto object-contain"
                priority
              />
            </div>
            <Link
              href="/contact"
              className="rounded-xl border border-cyan-500/40 bg-cyan-950/30 px-6 py-2.5 text-xs md:text-sm font-medium text-cyan-200 hover:bg-cyan-500/20 hover:border-cyan-400 transition shadow-[0_0_20px_rgba(6,182,212,0.1)]"
            >
              Get a Quote
            </Link>
          </div>

          {/* RIGHT (Service 2) */}
          <Link
            href="/services/graphic-design"
            className="group relative overflow-hidden bg-neutral-950 border-l border-b border-neutral-800 p-8 md:p-12 flex flex-col justify-end order-3 md:order-3 transition-all hover:bg-neutral-900 hover:border-cyan-500/50"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition" />
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-medium mb-3">02 / Service</span>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-cyan-200 transition">
              Graphic Design
            </h3>
            <p className="text-sm text-neutral-400 mt-2">Unique visual identity and high-impact digital design.</p>
          </Link>
        </div>

        {/* RZĄD 2: 4 kafle usługowe */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:flex-1">
          {[
            { title: "Web Design & Dev", desc: "Lightning-fast, modern websites and applications.", href: "/services/web" },
            { title: "E-commerce", desc: "High-converting online stores built for scale.", href: "/services/ecommerce" },
            { title: "Branding", desc: "Comprehensive brand identity and strategic positioning.", href: "/services/branding" },
            { title: "SEO & Marketing", desc: "Search engine visibility and digital growth strategies.", href: "/services/seo" },
          ].map((t, idx) => (
            <Link 
              key={t.title} 
              href={t.href} 
              className="group relative overflow-hidden bg-black border-r border-b border-neutral-800 p-8 flex flex-col justify-between transition-all hover:bg-neutral-950 hover:border-cyan-500/50 min-h-[200px] md:min-h-0"
            >
              <span className="text-xs text-neutral-500 font-mono">0{idx + 3}</span>
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-200 transition mb-2">
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