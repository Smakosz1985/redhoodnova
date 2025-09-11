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

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        {/* LOGO -> klikalne do Home */}
        <Link href="/" className="shrink-0" aria-label="Go to homepage">
          <Image
            src="/logoRED.png"
            alt="RedHoodNova"
            width={160}
            height={160}
            className="h-14 w-auto md:h-16"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={
                  active
                    ? "text-orange-400"
                    : "hover:text-orange-400 transition"
                }
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

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
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-sm">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={active ? "text-orange-400" : ""}
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
