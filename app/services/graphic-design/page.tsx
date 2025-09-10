import Image from "next/image";
import Link from "next/link";

export default function GraphicDesign() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* HERO */}
      <section className="w-full border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-16 grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest text-orange-400/90 uppercase mb-2">
              Service
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold">Graphic Design</h1>
            <p className="mt-4 text-neutral-300 max-w-prose">
              Posters, brochures, social creatives and ads that carry your brand
              consistently.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="/contact"
                className="rounded-2xl border border-orange-500/70 px-4 py-2 text-sm font-medium text-orange-300 hover:bg-orange-500/10 transition"
              >
                Get a Quote
              </Link>
              <Link
                href="/work"
                className="rounded-2xl border border-white/20 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition"
              >
                See Our Work
              </Link>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 aspect-[5/4] md:aspect-[4/3]">
              <Image
                src="/sample2.png"
                alt="Graphic Design"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="w-full bg-black">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">Deliverables</h2>
            <ul className="mt-4 space-y-2 text-sm text-neutral-300">
              <li>Print: posters, brochures, flyers</li>
              <li>Digital: social assets, ads, presentation decks</li>
              <li>Templates & brand-ready files</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">How we work</h2>
            <p className="mt-4 text-sm text-neutral-300">
              We design for context — channel specs, readability, and brand
              consistency first.
            </p>
          </div>
        </div>
      </section>

      {/* WIDE CTA */}
      <section className="mt-auto w-full bg-gradient-to-r from-orange-600/20 via-orange-500/10 to-transparent">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">
              Design that makes your brand unforgettable.
            </h3>
            <p className="mt-2 text-sm text-neutral-300 max-w-prose">
              From print posters to digital campaigns — we craft visuals that
              grab attention and stay true to your brand identity.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="rounded-2xl border border-orange-500/70 px-5 py-2 text-sm font-medium text-orange-300 hover:bg-orange-500/10 transition"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="rounded-2xl border border-white/20 px-5 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
