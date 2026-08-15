"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function PfpTransition({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [target, setTarget] = useState<string | null>(null);

  useEffect(() => {
    (window as any).__ramanTransition = (href: string) => {
      setTarget(href);
      setIsTransitioning(true);
    };
    return () => {
      delete (window as any).__ramanTransition;
    };
  }, []);

  useEffect(() => {
    if (!isTransitioning || !target) return;

    const timer = setTimeout(() => {
      window.location.href = target;
    }, 1450);

    return () => clearTimeout(timer);
  }, [isTransitioning, target]);

  return (
    <>
      {children}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <motion.div
              className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border border-white/15 shadow-[0_0_80px_rgba(255,255,255,0.06)]"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{
                scale: [0.6, 1.15, 1],
                opacity: 1,
              }}
              transition={{
                duration: 1.1,
                times: [0, 0.55, 1],
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Image
                src="/profile.png"
                alt=""
                fill
                className="object-cover"
                sizes="144px"
                priority
              />
            </motion.div>

            <motion.p
              className="absolute bottom-24 mono text-[10px] tracking-[0.3em] text-[#6b6b6b] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Entering workspace
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
