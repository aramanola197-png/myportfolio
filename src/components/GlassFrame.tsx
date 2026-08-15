"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface GlassFrameProps {
  src: string;
  alt: string;
  className?: string;
}

export function GlassFrame({ src, alt, className }: GlassFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const frame = frameRef.current;
    if (!canvas || !frame) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      o: number;
    }[] = [];

    const resize = () => {
      const rect = frame.getBoundingClientRect();
      canvas.width = rect.width * (window.devicePixelRatio || 1);
      canvas.height = rect.height * (window.devicePixelRatio || 1);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);

      particles.length = 0;
      const count = 14;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          r: Math.random() * 1.1 + 0.25,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.18,
          o: Math.random() * 0.35 + 0.08,
        });
      }
    };

    const draw = () => {
      const rect = frame.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > rect.width) p.vx *= -1;
        if (p.y < 0 || p.y > rect.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(190,190,190,${p.o})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(frame);

    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      ref={frameRef}
      className={cn(
        "relative group overflow-hidden rounded-[1.15rem] border border-white/10 bg-white/[0.025] backdrop-blur-md",
        "shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-1.5 hover:border-white/15",
        className
      )}
    >
      {/* Atmospheric particles live behind the image */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-60 z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 p-2.5 sm:p-3">
        <div className="relative overflow-hidden rounded-[0.9rem] bg-[#050505]">
          <Image
            src={src}
            alt={alt}
            width={900}
            height={700}
            className="w-full h-auto object-contain max-h-[380px] sm:max-h-[460px]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        </div>
      </div>

      {/* Soft inner glow on hover */}
      <div className="absolute inset-0 rounded-[1.15rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_50px_rgba(255,255,255,0.025)]" />
    </div>
  );
}
