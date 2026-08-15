"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/graphics", label: "Graphics" },
  { href: "/websites", label: "Websites" },
  { href: "/writing", label: "Writing" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Link
            href="/"
            className="heading text-sm sm:text-base tracking-tight text-[#f5f5f5] hover:text-white transition-colors"
          >
            RAMAN OLA
          </Link>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "mono text-[11px] uppercase tracking-[0.18em] transition-colors",
                  pathname === link.href
                    ? "text-[#e8e8e8]"
                    : "text-[#6b6b6b] hover:text-[#e8e8e8]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="ml-3 mono text-[11px] uppercase tracking-[0.18em] px-5 py-2.5 rounded-full border border-white/15 bg-white/5 text-[#f5f5f5] hover:bg-white/10 hover:border-white/25 transition-all"
            >
              Contact Me
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-full border border-white/10 bg-white/5"
          >
            <span
              className={cn(
                "absolute w-4 h-px bg-[#e8e8e8] transition-all duration-300",
                open ? "rotate-45" : "-translate-y-1.5"
              )}
            />
            <span
              className={cn(
                "absolute w-4 h-px bg-[#e8e8e8] transition-all duration-300",
                open ? "opacity-0 scale-x-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "absolute w-4 h-px bg-[#e8e8e8] transition-all duration-300",
                open ? "-rotate-45" : "translate-y-1.5"
              )}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/97 backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-9 px-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="heading text-2xl sm:text-3xl text-[#e8e8e8]"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
                className="mt-4"
              >
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="mono text-xs uppercase tracking-[0.22em] px-9 py-3.5 rounded-full border border-white/20 bg-white/5 text-[#f5f5f5]"
                >
                  Contact Me
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
