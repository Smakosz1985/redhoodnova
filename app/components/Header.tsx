"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Our Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Styl "Get a Quote" używany do podświetlenia linków w menu
  const buttonStyle =
    "rounded-xl border border-cyan-500/40 bg-cyan-950/35 px-4 py-2 text-xs md:text-sm font-medium text-cyan-200 transition shadow-[0_0_15px_rgba(6,182,212,0.12)] hover:bg-cyan-500/20 hover:border-cyan-400";
  
  // Zwykły styl dla elementów nieaktywnych
  const defaultStyle =
    "rounded-xl border border-transparent px-4 py-2 text-xs md:text-sm font-medium text-neutral-400 hover:text-cyan-200 hover:bg-cyan-950/20 hover:border-cyan-500/30 transition";

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        {/* LOGO -> klikalne do Home */}
        <Link href="/" className="shrink-0" aria-label="Go to homepage">
          <Image
            src="/logo.png"
            alt="AeroFlux Studio"
            width={160}
            height={160}
            className="h-10 w-auto md:h-12"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={active ? buttonStyle : defaultStyle}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Przycisk CTA Get a Quote */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className={buttonStyle}
          >
            Get a Quote
          </Link>
        </div>

        {/* Burger (mobile only) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-4 flex flex-col gap-3 text-sm">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`py-2 px-3 rounded-lg ${active ? "bg-cyan-950/40 text-cyan-200 border border-cyan-500/30" : "text-neutral-400 hover:text-white"}`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}