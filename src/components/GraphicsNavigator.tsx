"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  title: string;
}

interface GraphicsNavigatorProps {
  categories: Category[];
}

export function GraphicsNavigator({ categories }: GraphicsNavigatorProps) {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-50 flex flex-col items-end gap-3">
      {/* Expanded menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mb-1 w-52 rounded-2xl border border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            <div className="px-4 py-3 border-b border-white/5">
              <p className="mono text-[10px] tracking-[0.2em] text-[#6b6b6b] uppercase">
                Navigate
              </p>
            </div>

            <div className="py-2">
              <button
                onClick={scrollToTop}
                className="w-full text-left px-4 py-2.5 mono text-[11px] tracking-[0.12em] uppercase text-[#b0b0b0] hover:text-[#f5f5f5] hover:bg-white/[0.04] transition-colors"
              >
                Top
              </button>

              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollTo(cat.id)}
                  className="w-full text-left px-4 py-2.5 mono text-[11px] tracking-[0.12em] uppercase text-[#b0b0b0] hover:text-[#f5f5f5] hover:bg-white/[0.04] transition-colors"
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating trigger button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        className={cn(
          "w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/15 bg-[#0a0a0a]/90 backdrop-blur-xl",
          "flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.5)]",
          "hover:border-white/30 hover:bg-white/[0.06] transition-all duration-300",
          open && "border-white/25 bg-white/[0.06]"
        )}
      >
        <div className="relative w-5 h-5 flex items-center justify-center">
          {/* Grid / menu icon that morphs */}
          <span
            className={cn(
              "absolute w-3.5 h-px bg-[#e8e8e8] transition-all duration-300",
              open ? "rotate-45" : "-translate-y-1.5"
            )}
          />
          <span
            className={cn(
              "absolute w-3.5 h-px bg-[#e8e8e8] transition-all duration-300",
              open ? "opacity-0 scale-x-0" : "opacity-100"
            )}
          />
          <span
            className={cn(
              "absolute w-3.5 h-px bg-[#e8e8e8] transition-all duration-300",
              open ? "-rotate-45" : "translate-y-1.5"
            )}
          />
        </div>
      </button>
    </div>
  );
}
