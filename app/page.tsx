// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">

      {/* ===== MOSAIC ===== */}
      {/* Bez bocznych marginesów; md+: wypełnia przestrzeń do stopki */}
      <section className="w-full bg-black flex flex-col px-0 md:flex-1">
        {/* RZĄD 1 */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1.6fr_1.2fr] gap-0 md:flex-1">
          {/* LEFT (animated) */}
          <Link href="/services/copywriting" className="group relative block overflow-hidden">
            <div className="relative w-full aspect-[16/9] md:aspect-auto md:h-full">
              <Image
                src="/sample1.png"
                alt="Copywriting"
                fill
                sizes="(min-width:1024px) 34vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.12] group-hover:-translate-y-0.5 group-hover:brightness-110 will-change-transform"
                priority
              />
            </div>
          </Link>

          {/* CENTER (bigger on md+, static, CTA na obrazie) */}
          <div className="relative w-full aspect-[16/9] md:aspect-auto md:h-full overflow-hidden bg-black">
            <Image
              src="/redhn.png"
              alt="RedHoodNova — Creative & Tech Studio"
              fill
              sizes="(min-width:1024px) 40vw, 100vw"
              className="object-cover"
              priority
            />
            <Link
              href="/contact"
              className="absolute left-4 bottom-4 md:left-6 md:bottom-6 z-10 rounded-2xl border border-orange-500/70 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-orange-300 hover:bg-orange-500/10 transition"
            >
              Get a Quote
            </Link>
          </div>

          {/* RIGHT (animated) */}
          <Link href="/services/graphic-design" className="group relative block overflow-hidden">
            <div className="relative w-full aspect-[16/9] md:aspect-auto md:h-full">
              <Image
                src="/sample2.png"
                alt="Graphic Design"
                fill
                sizes="(min-width:1024px) 34vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.12] group-hover:-translate-y-0.5 group-hover:brightness-110 will-change-transform"
                priority
              />
            </div>
          </Link>
        </div>

        {/* RZĄD 2: 4 kafle — mobile 2×2, md+ 4 w rządzie; stykają się i dochodzą do stopki */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 md:flex-1">
          {[
            { src: "/sample3.png", alt: "Web Design & Development", href: "/services/web" },
            { src: "/sample4.png", alt: "E-commerce",               href: "/services/ecommerce" },
            { src: "/sample5.png", alt: "Branding",                 href: "/services/branding" },
            { src: "/sample6.png", alt: "SEO & Marketing",          href: "/services/seo" },
          ].map((t) => (
            <Link key={t.src} href={t.href} className="group relative block overflow-hidden">
              <div className="relative w-full aspect-square md:aspect-auto md:h-full">
                <Image
                  src={t.src}
                  alt={t.alt}
                  fill
                  sizes="(min-width:1024px) 25vw, 50vw"
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

      