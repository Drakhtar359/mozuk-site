"use client";

import { useEffect, useRef, useState } from "react";

export default function SatisfactionStat() {
  const [progress, setProgress] = useState(0);
  const [display, setDisplay] = useState(0);
  const [showText, setShowText] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimatedRef = useRef(false);
  const revealTimeoutRef = useRef<number | null>(null);
  const fallbackTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            animateTo100();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    // Fallback: start animation if observer doesn’t trigger soon
    fallbackTimeoutRef.current = window.setTimeout(() => {
      if (!hasAnimatedRef.current) {
        hasAnimatedRef.current = true;
        animateTo100();
      }
    }, 800);
    return () => {
      observer.disconnect();
      if (revealTimeoutRef.current) window.clearTimeout(revealTimeoutRef.current);
      if (fallbackTimeoutRef.current) window.clearTimeout(fallbackTimeoutRef.current);
    };
  }, []);

  function animateTo100() {
    const durationMs = 2200;
    const start = performance.now();
    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
    function frame(now: number) {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = easeOutExpo(t);
      const value = eased * 100;
      setProgress(value);
      setDisplay(Math.round(value));
      if (t < 1) {
        requestAnimationFrame(frame);
      } else {
        setProgress(100);
        setDisplay(100);
        revealTimeoutRef.current = window.setTimeout(() => setShowText(true), 660);
      }
    }
    requestAnimationFrame(frame);
  }

  const radius = 250;
  const stroke = 24;
  const size = radius * 2 + stroke * 2;
  const circumference = 2 * Math.PI * radius;
  const dash = (progress / 100) * circumference;

  return (
    <div ref={ref} className="relative flex flex-col items-center justify-center gap-6">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="shrink-0">
        <defs>
          <linearGradient id="satisfyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--brand)" stopOpacity="1" />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="currentColor" strokeWidth={stroke} className="opacity-15" fill="none" />
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="url(#satisfyGradient)" strokeWidth={stroke} strokeLinecap="round" strokeDasharray={`${dash} ${circumference}`} transform={`rotate(-90 ${size / 2} ${size / 2})`} fill="none" />
      </svg>
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div className="relative">
          <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-900 ease-in-out ${showText ? "opacity-0" : "opacity-100"}`} aria-hidden={showText}>
            <div className="text-3xl sm:text-5xl font-extrabold">{display}%</div>
          </div>
          <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-900 ease-in-out ${showText ? "opacity-100" : "opacity-0"}`} aria-hidden={!showText}>
            <div className="text-center leading-tight px-3">
              <div className="whitespace-nowrap text-lg sm:text-2xl font-semibold">
                <span className="text-[var(--brand)] font-extrabold">100%</span> satisfied customers
              </div>
              <div className="h-3" />
              <div className="whitespace-nowrap text-xs sm:text-sm opacity-70">Projects delivered with measurable impact and lasting partnerships.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


