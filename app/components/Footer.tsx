import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-base md:text-lg font-semibold text-white">
          Based in UK · <span className="text-neutral-400">Available worldwide</span>
        </p>
        <nav className="text-sm text-neutral-400 flex items-center gap-4">
          <Link href="/privacy" className="hover:text-white transition">
            Privacy & Cookies
          </Link>
          <span className="text-neutral-700">|</span>
          <Link href="/privacy-choices" className="hover:text-white transition">
            Privacy Choices
          </Link>
          <span className="text-neutral-700">|</span>
          <Link href="/terms" className="hover:text-white transition">
            Terms of Service
          </Link>
        </nav>
      </div>
      <div className="text-center text-xs text-neutral-500 pb-4">
        © {new Date().getFullYear()} AeroFlux Studio. All rights reserved.
      </div>
    </footer>
  );
}