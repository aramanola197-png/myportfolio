import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 mt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="mono text-[11px] text-[#6b6b6b] tracking-wider">
          © {new Date().getFullYear()} Raman Ola
        </p>
        <div className="flex items-center gap-8">
          <a
            href="https://x.com/Ramanx_1"
            target="_blank"
            rel="noopener noreferrer"
            className="mono text-[11px] text-[#6b6b6b] hover:text-[#e8e8e8] transition-colors tracking-wider"
          >
            X
          </a>
          <a
            href="https://t.me/ramanola_97"
            target="_blank"
            rel="noopener noreferrer"
            className="mono text-[11px] text-[#6b6b6b] hover:text-[#e8e8e8] transition-colors tracking-wider"
          >
            Telegram
          </a>
          <Link
            href="/#contact"
            className="mono text-[11px] text-[#6b6b6b] hover:text-[#e8e8e8] transition-colors tracking-wider"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
