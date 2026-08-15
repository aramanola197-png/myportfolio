import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 mt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="mono text-[11px] text-[#6b6b6b] tracking-wider">
          © {new Date().getFullYear()} Raman Ola
        </p>
        <Link
          href="/#contact"
          className="mono text-[11px] text-[#6b6b6b] hover:text-[#e8e8e8] transition-colors tracking-wider uppercase"
        >
          Contact Me
        </Link>
      </div>
    </footer>
  );
}
