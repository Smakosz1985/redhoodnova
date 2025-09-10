// app/services/layout.tsx
import Image from "next/image";
import Link from "next/link";

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
          <div className="shrink-0">
            <Image src="/logoRED.png" alt="RedHoodNova" width={160} height={160} className="h-14 w-auto md:h-16" priority />
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="hover:text-orange-400 transition">Home</Link>
            <Link href="/about" className="hover:text-orange-400 transition">About</Link>
            <Link href="/work" className="hover:text-orange-400 transition">Our Work</Link>
            <Link href="/services" className="text-orange-400">Services</Link>
            <Link href="/contact" className="hover:text-orange-400 transition">Contact</Link>
          </nav>
        </div>
      </header>

      {children}
    </main>
  );
}