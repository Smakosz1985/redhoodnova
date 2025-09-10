import Image from "next/image";
import Link from "next/link";

export default function SEO() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* HERO */}
      <section className="w-full border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-16 grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest text-orange-400/90 uppercase mb-2">
              Service
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold">
              SEO & Marketing
            </h1>
            <p className="mt-4 text-neutral-300 max-w-prose">
              Performance, technical SEO and content that actually targets
              demand. Measured and iterated.
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
                src="/sample6.png"
                alt="SEO & Marketing"
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
              <li>Technical SEO audit & fixes</li>
              <li>Content plan mapped to queries</li>
              <li>On-page optimization & schema</li>
              <li>Analytics & reporting setup</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">Process</h2>
            <p className="mt-4 text-sm text-neutral-300">
              We start with crawl & performance. Then content & internal links.
              No fluff, just compounding wins.
            </p>
          </div>
        </div>
      </section>

      {/* WIDE CTA */}
      <section className="mt-auto w-full bg-gradient-to-r from-orange-600/20 via-orange-500/10 to-transparent">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">
              Get found. Get clicks. Get results.
            </h3>
            <p className="mt-2 text-sm text-neutral-300 max-w-prose">
              From technical SEO to content strategy — we optimize your site for
              visibility, relevance and measurable growth.
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
