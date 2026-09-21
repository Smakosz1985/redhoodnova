// app/services/page.tsx
import Link from "next/link";
import Image from "next/image";

const items = [
  { href: "/services/copywriting",     title: "Copywriting",         img: "/sample1.png", alt: "Copywriting" },
  { href: "/services/graphic-design",  title: "Graphic Design",      img: "/sample2.png", alt: "Graphic design" },
  { href: "/services/web",             title: "Web Design & Dev",    img: "/sample3.png", alt: "Web design" },
  { href: "/services/ecommerce",       title: "E-commerce",          img: "/sample4.png", alt: "E-commerce" },
  { href: "/services/branding",        title: "Branding",            img: "/sample5.png", alt: "Branding" },
  { href: "/services/seo",             title: "SEO & Marketing",     img: "/sample6.png", alt: "SEO & Marketing" },
];

export default function ServicesIndex() {
  return (
    <>
      <section className="w-full border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <h1 className="text-3xl md:text-5xl font-semibold">Services</h1>
          <p className="mt-4 text-neutral-300 max-w-prose">
            Strategy, design and engineering — pick a capability or combine a few. Every engagement ends with something
            useful shipped and easy to maintain.
          </p>
        </div>
      </section>

      {/* Siatka kafli jak na Home (edge-to-edge) */}
      <section className="w-full bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {items.map((s) => (
            <Link key={s.href} href={s.href} className="group relative block aspect-[16/9] overflow-hidden">
              <Image src={s.img} alt={s.alt} fill sizes="33vw" className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08] group-hover:brightness-110" />
              <div className="absolute inset-0 bg-black/20 opacity-0 transition group-hover:opacity-100" />
              <span className="absolute left-4 bottom-3 text-sm font-medium">{s.title}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-gradient-to-r from-orange-600/20 via-orange-500/10 to-transparent">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Not sure where to start?</h3>
            <p className="mt-2 text-sm text-neutral-300 max-w-prose">Tell us the goal and constraints — we’ll suggest the right mix and timeline.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="rounded-2xl border border-orange-500/70 px-5 py-2 text-sm font-medium text-orange-300 hover:bg-orange-500/10 transition">
              Get a Quote
            </Link>
            <Link href="/work" className="rounded-2xl border border-white/20 px-5 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition">
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
