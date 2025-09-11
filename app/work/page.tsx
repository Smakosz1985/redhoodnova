// app/work/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function WorkPage() {
  const projects = [
    { src: "/work-1.png", title: "E-commerce Revamp", tag: "E-commerce" },
    { src: "/work-2.png", title: "SaaS Landing", tag: "Web" },
    { src: "/work-3.png", title: "Brand Identity", tag: "Branding" },
    { src: "/work-4.png", title: "Portfolio Site", tag: "Web" },
    { src: "/work-5.png", title: "Design System", tag: "Design" },
    { src: "/work-6.png", title: "Poster / Flyer Design", tag: "Design" },
    { src: "/work-7.png", title: "Marketing Microsite", tag: "Web" },
    { src: "/work-8.png", title: "Product Launch", tag: "Campaign" },
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">


      {/* INTRO */}
      <section className="w-full border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-16 grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Selected work.
            </h1>
            <p className="mt-4 text-sm md:text-base text-neutral-300 max-w-prose">
              A mix of brand identities, product sites, e-commerce and design systems.
              Clean builds, measurable outcomes, and a consistent visual language.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="/contact"
                className="rounded-2xl border border-orange-500/70 px-4 py-2 text-sm font-medium text-orange-300 hover:bg-orange-500/10 transition"
              >
                Get a Quote
              </Link>
              <Link
                href="/services"
                className="rounded-2xl border border-white/20 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Featured visual */}
          <div className="md:col-span-2">
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 aspect-[16/10] md:aspect-[4/3]">
              <Image
                src="/work-hero.png" // optional hero visual, replace or remove
                alt="Project collage"
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

      {/* GRID — edge-to-edge like Home */}
      <section className="w-full bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {projects.map((p) => (
            <article key={p.src} className="group relative aspect-[16/9] overflow-hidden">
              <Image
                src={p.src}
                alt={p.title}
                fill
                sizes="(min-width:1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.12] group-hover:-translate-y-0.5 group-hover:brightness-110 will-change-transform"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute left-4 bottom-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[11px]">
                  {p.tag}
                </span>
                <div className="mt-2 text-sm font-medium">{p.title}</div>
              </div>
              <Link href="#" className="absolute inset-0" aria-label={`Open ${p.title}`} />
            </article>
          ))}
        </div>
      </section>

      {/* FEATURED CASE STUDY */}
      <section className="w-full border-t border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 aspect-[16/9]">
            <Image
              src="/work-featured.png"
              alt="Featured project"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs tracking-widest text-orange-400/90 uppercase mb-2">Case study</p>
            <h2 className="text-2xl md:text-3xl font-semibold">Scaling an e-commerce storefront</h2>
            <p className="mt-3 text-sm md:text-base text-neutral-300">
              We redesigned the IA, refreshed the brand, and rebuilt the storefront on
              a modern stack. Faster pages, clearer flows, higher conversion.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-neutral-300">
              <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">UX/UI & IA</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">Next.js + CMS</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">Performance</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">SEO & Analytics</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Link
                href="#"
                className="rounded-2xl border border-white/20 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition"
              >
                View details
              </Link>
              <Link
                href="/contact"
                className="rounded-2xl border border-orange-500/70 px-4 py-2 text-sm font-medium text-orange-300 hover:bg-orange-500/10 transition"
              >
                Start a project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-gradient-to-r from-orange-600/20 via-orange-500/10 to-transparent">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Have something in mind?</h3>
            <p className="mt-2 text-sm text-neutral-300 max-w-prose">
              Share a goal and a timeline — we’ll come back with a scope and a clear plan.
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
