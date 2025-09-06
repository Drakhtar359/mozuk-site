"use client";

import { useEffect, useRef, useState } from "react";

export default function PerformanceLineStat() {
  const [value, setValue] = useState(0);
  const [showText, setShowText] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const hasAnimatedRef = useRef(false);
  const revealTimeoutRef = useRef<number | null>(null);
  const fallbackTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            animate();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    // Fallback: start animation shortly after mount if observer never fires
    fallbackTimeoutRef.current = window.setTimeout(() => {
      if (!hasAnimatedRef.current) {
        hasAnimatedRef.current = true;
        animate();
      }
    }, 800);
    return () => {
      observer.disconnect();
      if (revealTimeoutRef.current) window.clearTimeout(revealTimeoutRef.current);
      if (fallbackTimeoutRef.current) window.clearTimeout(fallbackTimeoutRef.current);
    };
  }, []);

  function animate() {
    const durationMs = 2200;
    const target = 28;
    const start = performance.now();
    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
    function frame(now: number) {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = easeOutExpo(t);
      const current = eased * target;
      setValue(current);
      if (t < 1) {
        requestAnimationFrame(frame);
      } else {
        setValue(target);
        revealTimeoutRef.current = window.setTimeout(() => setShowText(true), 660);
      }
    }
    requestAnimationFrame(frame);
  }

  const width = 480; // shrink to fit side-by-side
  const height = 480;
  const pad = 48;
  const x0 = pad;
  const y0 = height - pad;
  const x1 = width - pad;
  const maxX = x1 - x0;
  const maxY = y0 - pad;

  const targetPctBase = 0.4;
  const targetPctBrand = 0.68;
  const endX = x0 + maxX * 0.92;
  const samples = 180;
  const pointsBase: Array<{ x: number; y: number }> = [];
  const pointsBrand: Array<{ x: number; y: number }> = [];
  for (let i = 0; i < samples; i++) {
    const p = i / (samples - 1);
    const x = x0 + (endX - x0) * p;
    const wobbleBase = (Math.sin(p * Math.PI * 4) + 0.4 * Math.sin(p * Math.PI * 7)) * (0.04 * (1 - p));
    const wobbleBrand = (Math.sin(p * Math.PI * 6) + 0.5 * Math.sin(p * Math.PI * 10)) * (0.06 * (1 - p));
    let percBase = targetPctBase * p + wobbleBase;
    let percBrand = targetPctBrand * p + wobbleBrand;
    percBase = Math.max(0, Math.min(targetPctBase, percBase));
    percBrand = Math.max(0, Math.min(targetPctBrand, percBrand));
    const minGap = 0.04;
    if (percBrand <= percBase + minGap) {
      percBrand = Math.min(targetPctBrand, percBase + minGap);
    }
    pointsBase.push({ x, y: y0 - maxY * percBase });
    pointsBrand.push({ x, y: y0 - maxY * percBrand });
  }

  const pNorm = Math.min(1, Math.max(0, value / 28));
  const currentIndex = Math.max(1, Math.min(pointsBrand.length - 1, Math.round(pNorm * (pointsBrand.length - 1))));
  const currentBrand = pointsBrand.slice(0, currentIndex + 1);
  const currentBase = pointsBase.slice(0, currentIndex + 1);

  return (
    <div ref={rootRef} className="relative flex items-center justify-center">
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="max-w-full">
        <path d={`M ${pointsBase.map((p, i) => (i === 0 ? `${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(" ")}`} stroke="currentColor" strokeOpacity={0.15} strokeWidth={3} fill="none" />
        <path d={`M ${currentBase.map((p, i) => (i === 0 ? `${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(" ")}`} stroke="currentColor" strokeOpacity={0.35} strokeWidth={3} fill="none" />
        <g className="text-[var(--brand)]">
          <path d={`M ${currentBase.map((p) => `${p.x} ${p.y}`).join(" L ")} ${currentBrand.length ? "L " + currentBrand.slice().reverse().map((p) => `${p.x} ${p.y}`).join(" L ") : ""} Z`} fill="currentColor" fillOpacity={0.12} stroke="none" />
          <path d={`M ${currentBrand.map((p, i) => (i === 0 ? `${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(" ")}`} stroke="currentColor" strokeWidth={4} fill="none" />
        </g>
        <line x1={x0} y1={y0} x2={x1} y2={y0} stroke="white" strokeWidth={2} />
        <line x1={x0} y1={y0} x2={x0} y2={pad} stroke="white" strokeWidth={2} />
      </svg>
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div className="relative">
          <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-900 ease-in-out ${showText ? "opacity-0" : "opacity-100"}`} aria-hidden={showText}>
            <div className="text-3xl sm:text-5xl font-extrabold">{Math.round(value)}%</div>
          </div>
          <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-900 ease-in-out ${showText ? "opacity-100" : "opacity-0"}`} aria-hidden={!showText}>
            <div className="text-center leading-tight px-3">
              <div className="whitespace-nowrap text-lg sm:text-2xl font-semibold">
                <span className="text-[var(--brand)] font-extrabold">28%</span> average increase
              </div>
              <div className="h-3" />
              <div className="whitespace-nowrap text-xs sm:text-sm opacity-70">in product performance after the first year.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


