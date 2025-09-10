// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
          <div className="shrink-0">
            <Image
              src="/logoRED.png"
              alt="RedHoodNova"
              width={160}
              height={160}
              className="h-14 w-auto md:h-16"
              priority
            />
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="hover:text-orange-400 transition">Home</Link>
            <Link href="/about" className="text-orange-400">About</Link>
            <Link href="/work" className="hover:text-orange-400 transition">Our Work</Link>
            <Link href="/services" className="hover:text-orange-400 transition">Services</Link>
            <Link href="/contact" className="hover:text-orange-400 transition">Contact</Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="w-full border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-16 grid md:grid-cols-5 gap-10 items-center">
          {/* Tekst */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest text-orange-400/90 uppercase mb-3">
              About RedHoodNova
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Creative studio and engineering partner.
            </h1>
            <p className="mt-4 text-sm md:text-base text-neutral-300 max-w-prose">
              We blend strategy, branding, design and development to ship products
              and websites that look great and perform even better. Small, focused
              team. Clear process. No hype.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
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

          {/* Obraz */}
          <div className="md:col-span-3">
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 aspect-[5/4] md:aspect-[4/3]">
              <Image
                src="/about-hero.png"
                alt="Creative studio workspace"
                fill
                sizes="(min-width:1024px) 60vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="w-full border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 pb-12 md:pb-16 pt-12 md:pt-16">
          <h2 className="text-3xl md:text-4xl font-semibold">Why teams work with us</h2>
          <p className="mt-3 text-neutral-300 max-w-2xl text-sm md:text-base">
            We keep it simple: understand the goal, design for outcomes, and build
            with modern, maintainable tech.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Strategic design",
                desc: "Clear information architecture, tight UX/UI, and brand systems that scale across touchpoints.",
              },
              {
                title: "Full-stack delivery",
                desc: "Next.js, TypeScript, Tailwind, headless CMS, e-commerce, analytics and SEO in one flow.",
              },
              {
                title: "Iterative process",
                desc: "Weekly sprints, open communication, and visible progress at every step.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
              >
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES STRIP */}
      <section className="w-full bg-black">
        <div className="grid md:grid-cols-3 gap-0">
          {[
            { src: "/about-cap-1.png", alt: "Web" },
            { src: "/about-cap-2.png", alt: "Branding" },
            { src: "/about-cap-3.png", alt: "E-commerce" },
          ].map((t) => (
            <div key={t.src} className="group relative aspect-[16/9] overflow-hidden">
              <Image
                src={t.src}
                alt={t.alt}
                fill
                sizes="(min-width:1024px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08] group-hover:brightness-110"
              />
              {/* stały overlay + mocniejszy na hover */}
              <div className="absolute inset-0 bg-black/25 transition-opacity duration-300 group-hover:bg-black/40" />
              <span className="absolute left-4 bottom-3 text-sm font-medium">
                {t.alt}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="w-full border-t border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">How we work</h2>
          <ol className="mt-6 grid md:grid-cols-4 gap-5">
            {[
              {
                k: "01",
                t: "Discovery",
                d: "Objectives, scope, priorities and constraints. We collect insights and align.",
              },
              {
                k: "02",
                t: "Design",
                d: "IA, UX/UI, prototyping and a cohesive visual system.",
              },
              {
                k: "03",
                t: "Build",
                d: "Development, integrations, performance, accessibility and SEO.",
              },
              {
                k: "04",
                t: "Launch & iterate",
                d: "Release, measure, A/B where useful, and keep improving.",
              },
            ].map((s) => (
              <li
                key={s.k}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-orange-400/90 text-xs tracking-widest">
                  {s.k}
                </div>
                <div className="mt-1 text-lg font-semibold">{s.t}</div>
                <p className="mt-2 text-sm text-neutral-300">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WIDE CTA */}
      <section className="w-full bg-gradient-to-r from-orange-600/20 via-orange-500/10 to-transparent">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">
              Have a project? Let's make it work hard for you.
            </h3>
            <p className="mt-2 text-sm text-neutral-300 max-w-prose">
              Tell us about the goal and timeline — we'll reply with a plan and a
              quote.
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
