"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
            ? "bg-[#161616]/90 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Profile as logo */}
          <Link href="/" className="relative flex items-center gap-3 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-white/15 shadow-[0_0_20px_rgba(0,0,0,0.4)]">
              <Image
                src="/profile.png"
                alt="Raman Ola"
                fill
                className="object-cover protected-media"
                sizes="40px"
                priority
                draggable={false}
              />
            </div>
            <span className="sr-only">Raman Ola — Home</span>
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

          {/* Mobile toggle — rounded square */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg border border-white/12 bg-white/[0.04]"
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

      {/* Mobile side panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop blur — click to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-md lg:hidden"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Side panel ~1/4–ish width */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="fixed top-0 right-0 z-50 h-full w-[min(78vw,300px)] bg-[#161616]/98 border-l border-white/10 backdrop-blur-xl lg:hidden flex flex-col shadow-[-20px_0_60px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-between px-5 h-16 border-b border-white/5 shrink-0">
                <span className="mono text-[10px] tracking-[0.2em] text-[#6b6b6b] uppercase">
                  Menu
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]"
                >
                  <span className="relative w-3.5 h-3.5">
                    <span className="absolute inset-0 m-auto w-3.5 h-px bg-[#e8e8e8] rotate-45" />
                    <span className="absolute inset-0 m-auto w-3.5 h-px bg-[#e8e8e8] -rotate-45" />
                  </span>
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3.5 rounded-xl mono text-[12px] uppercase tracking-[0.14em] transition-colors",
                      pathname === link.href
                        ? "bg-white/[0.06] text-[#f5f5f5]"
                        : "text-[#9a9a9a] hover:bg-white/[0.04] hover:text-[#e8e8e8]"
                    )}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40" />
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="p-4 border-t border-white/5 shrink-0">
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 w-full mono text-[11px] uppercase tracking-[0.18em] px-5 py-3.5 rounded-xl border border-white/15 bg-white/5 text-[#f5f5f5]"
                >
                  Contact Me
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
