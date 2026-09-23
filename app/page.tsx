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
            className="group relative overflow-hidden bg-neutral-950 border-r border-b border-neutral-800 p-8 md:p-12 flex flex-col justify-end order-2 md:order-1 transition-all hover:bg-neutral-900 hover:border-cyan-500/50 min-h-[220px]"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="/sample1.png"
                alt="Copywriting & Content"
                fill
                sizes="(min-width:1024px) 38vw, 100vw"
                className="object-cover brightness-95 contrast-105 transition-transform duration-500 ease-out group-hover:scale-[1.12] will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/60 transition" />
            </div>

            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-cyan-200 transition">
                Copywriting & Content
              </h3>
              <p className="text-sm text-neutral-300 mt-2">Strategic words that convert and build brand authority.</p>
            </div>
          </Link>

          {/* CENTER (CTA) */}
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
            className="group relative overflow-hidden bg-neutral-950 border-l border-b border-neutral-800 p-8 md:p-12 flex flex-col justify-end order-3 md:order-3 transition-all hover:bg-neutral-900 hover:border-cyan-500/50 min-h-[220px]"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="/sample2.png"
                alt="Graphic Design"
                fill
                sizes="(min-width:1024px) 38vw, 100vw"
                className="object-cover brightness-95 contrast-105 transition-transform duration-500 ease-out group-hover:scale-[1.12] will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/60 transition" />
            </div>

            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-cyan-200 transition">
                Graphic Design
              </h3>
              <p className="text-sm text-neutral-300 mt-2">Unique visual identity and high-impact digital design.</p>
            </div>
          </Link>
        </div>

        {/* RZĄD 2: 4 kafle usługowe */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:flex-1">
          {/* Kafel 3: Web Design & Development */}
          <Link 
            href="/services/web" 
            className="group relative overflow-hidden bg-neutral-950 border-r border-b border-neutral-800 p-8 flex flex-col justify-end transition-all hover:border-cyan-500/50 min-h-[220px] md:min-h-0"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="/sample3.png"
                alt="Web Design & Development"
                fill
                sizes="(min-width:1024px) 25vw, 100vw"
                className="object-cover brightness-95 contrast-105 transition-transform duration-500 ease-out group-hover:scale-[1.12] will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/60 transition" />
            </div>

            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-200 transition mb-2">
                Web Design & Development
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Lightning-fast, modern websites and applications.
              </p>
            </div>
          </Link>

          {/* Pozostałe kafle (4, 5, 6) */}
          {[
            { title: "E-commerce", desc: "High-converting online stores built for scale.", href: "/services/ecommerce", src: "/sample4.png" },
            { title: "Branding", desc: "Comprehensive brand identity and strategic positioning.", href: "/services/branding", src: "/sample5.png" },
            { title: "SEO & Marketing", desc: "Search engine visibility and digital growth strategies.", href: "/services/seo", src: "/sample6.png" },
          ].map((t) => (
            <Link 
              key={t.title} 
              href={t.href} 
              className="group relative overflow-hidden bg-neutral-950 border-r border-b border-neutral-800 p-8 flex flex-col justify-end transition-all hover:border-cyan-500/50 min-h-[220px] md:min-h-0"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={t.src}
                  alt={t.title}
                  fill
                  sizes="(min-width:1024px) 25vw, 100vw"
                  className="object-cover brightness-95 contrast-105 transition-transform duration-500 ease-out group-hover:scale-[1.12] will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/60 transition" />
              </div>

              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-200 transition mb-2">
                  {t.title}
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
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