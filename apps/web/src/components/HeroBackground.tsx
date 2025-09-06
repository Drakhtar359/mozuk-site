"use client";

import { useEffect, useRef } from "react";

export default function HeroBackground() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let t = 0;
    const animate = () => {
      t += 0.003;
      const x = Math.sin(t) * 20;
      const y = Math.cos(t * 0.8) * 20;
      el.style.setProperty("--tx", `${x}px`);
      el.style.setProperty("--ty", `${y}px`);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>
      <style>{`
        .blob { position: absolute; filter: blur(48px); opacity: 0.2; border-radius: 9999px; }
        .blob-1 { width: 520px; height: 520px; left: -80px; top: -60px; background: radial-gradient(circle at 30% 30%, var(--brand), transparent 60%); animation: float1 12s ease-in-out infinite; }
        .blob-2 { width: 420px; height: 420px; right: -120px; top: 20%; background: radial-gradient(circle at 70% 40%, white, transparent 60%); animation: float2 14s ease-in-out infinite; }
        .blob-3 { width: 480px; height: 480px; left: 20%; bottom: -120px; background: radial-gradient(circle at 50% 50%, var(--brand), transparent 60%); animation: float3 16s ease-in-out infinite; }
        @keyframes float1 { 0%, 100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px, 20px) scale(1.05); } }
        @keyframes float2 { 0%, 100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-30px, -25px) scale(1.07); } }
        @keyframes float3 { 0%, 100% { transform: translate(0,0) scale(1); } 50% { transform: translate(25px, 40px) scale(1.04); } }
      `}</style>
    </div>
  );
}
