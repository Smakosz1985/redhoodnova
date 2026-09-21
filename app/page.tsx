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
          {/* LEFT (animated) */}
          <Link
            href="/services/copywriting"
            className="group relative block overflow-hidden order-2 md:order-1"
          >
            <div className="relative w-full aspect-[16/9] md:aspect-auto md:h-full">
              <Image
                src="/sample1.png"
                alt="Copywriting"
                fill
                sizes="(min-width:1024px) 38vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.12] group-hover:-translate-y-0.5 group-hover:brightness-110 will-change-transform"
                priority
              />
            </div>
          </Link>

          {/* CENTER (CTA) — absolutnie wycentrowane, duże logo */}
          <div className="relative w-full aspect-[16/9] md:aspect-auto md:h-full bg-black flex flex-col items-center justify-center p-6 order-1 md:order-2">
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

          {/* RIGHT (animated) */}
          <Link
            href="/services/graphic-design"
            className="group relative block overflow-hidden order-3 md:order-3"
          >
            <div className="relative w-full aspect-[16/9] md:aspect-auto md:h-full">
              <Image
                src="/sample2.png"
                alt="Graphic Design"
                fill
                sizes="(min-width:1024px) 38vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.12] group-hover:-translate-y-0.5 group-hover:brightness-110 will-change-transform"
                priority
              />
            </div>
          </Link>
        </div>

        {/* RZĄD 2: 4 kafle */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:flex-1">
          {[
            { src: "/sample3.png", alt: "Web Design & Development", href: "/services/web" },
            { src: "/sample4.png", alt: "E-commerce",               href: "/services/ecommerce" },
            { src: "/sample5.png", alt: "Branding",                 href: "/services/branding" },
            { src: "/sample6.png", alt: "SEO & Marketing",          href: "/services/seo" },
          ].map((t) => (
            <Link key={t.src} href={t.href} className="group relative block overflow-hidden">
              <div className="relative w-full aspect-[16/9] md:aspect-auto md:h-full">
                <Image
                  src={t.src}
                  alt={t.alt}
                  fill
                  sizes="(min-width:1024px) 25vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.12] group-hover:-translate-y-0.5 group-hover:brightness-110 will-change-transform"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}