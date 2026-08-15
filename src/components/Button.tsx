"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  /** Triggers the special PFP workspace transition */
  transition?: boolean;
}

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  external = false,
  type = "button",
  transition = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 mono text-[11px] uppercase tracking-[0.18em] rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4";

  const variants = {
    primary:
      "px-6 py-3 border border-white/20 bg-white/5 text-[#f5f5f5] hover:bg-white/10 hover:border-white/30",
    secondary:
      "px-6 py-3 border border-white/10 text-[#b0b0b0] hover:text-[#e8e8e8] hover:border-white/20",
    ghost: "px-4 py-2 text-[#6b6b6b] hover:text-[#e8e8e8]",
  };

  const classes = cn(base, variants[variant], className);

  const handleClick = (e: React.MouseEvent) => {
    if (transition && href && !external && typeof window !== "undefined") {
      e.preventDefault();
      const trigger = (window as any).__ramanTransition;
      if (trigger) {
        trigger(href);
        return;
      }
    }
    onClick?.();
  };

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
