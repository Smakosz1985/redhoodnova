// app/services/graphic-design/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function GraphicDesign() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* HERO */}
      <section className="w-full border-b border-neutral-800 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-16 grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest text-cyan-400 uppercase mb-2">
              Service[cite: 9]
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold">Graphic Design[cite: 9]</h1>
            <p className="mt-4 text-neutral-300 max-w-prose">
              Posters, brochures, social creatives and ads that carry your brand
              consistently.[cite: 9]
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="/contact"
                className="rounded-xl border border-cyan-500/40 bg-cyan-950/30 px-5 py-2 text-sm font-medium text-cyan-200 hover:bg-cyan-500/20 hover:border-cyan-400 transition shadow-[0_0_20px_rgba(6,182,212,0.1)]"
              >
                Get a Quote
              </Link>
              <Link
                href="/work"
                className="rounded-xl border border-neutral-800 bg-neutral-950 px-5 py-2 text-sm font-medium text-neutral-200 hover:bg-neutral-900 hover:border-neutral-700 transition"
              >
                See Our Work
              </Link>
            </div>
          </div>

          {/* Ujednolicony rozmiar grafiki */}
          <div className="md:col-span-3 flex justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-neutral-800 aspect-[16/10]">
              <Image
                src="/sample2.png"
                alt="Graphic Design"
                fill
                sizes="(min-width:1024px) 40vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="w-full bg-black border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold">Deliverables[cite: 9]</h2>
            <ul className="mt-4 space-y-2 text-sm text-neutral-300">
              <li>• Print: posters, brochures, flyers[cite: 9]</li>
              <li>• Digital: social assets, ads, presentation decks[cite: 9]</li>
              <li>• Templates & brand-ready files[cite: 9]</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold">How we work[cite: 9]</h2>
            <p className="mt-4 text-sm text-neutral-300">
              We design for context — channel specs, readability, and brand
              consistency first.[cite: 9]
            </p>
          </div>
        </div>
      </section>

      {/* WIDE CTA */}
      <section className="mt-auto w-full bg-gradient-to-r from-cyan-950/40 via-cyan-900/10 to-transparent border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">
              Design that makes your brand unforgettable.[cite: 9]
            </h3>
            <p className="mt-2 text-sm text-neutral-300 max-w-prose">
              From print posters to digital campaigns — we craft visuals that
              grab attention and stay true to your brand identity.[cite: 9]
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="rounded-xl border border-cyan-500/40 bg-cyan-950/30 px-5 py-2 text-sm font-medium text-cyan-200 hover:bg-cyan-500/20 hover:border-cyan-400 transition shadow-[0_0_20px_rgba(6,182,212,0.1)]"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="rounded-xl border border-neutral-800 bg-neutral-950 px-5 py-2 text-sm font-medium text-neutral-200 hover:bg-neutral-900 hover:border-neutral-700 transition"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}