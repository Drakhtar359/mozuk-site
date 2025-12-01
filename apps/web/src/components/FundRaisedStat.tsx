"use client";

import { useRef, useEffect, useState } from "react";

export default function FundRaisedStat() {
  const [fill, setFill] = useState(0);
  const [showText, setShowText] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);
  // Animation values
  const quickFillPct = 90;
  const endFillPct = 100;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new window.IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        animateBar();
      }
    }, { threshold: 0.6 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function animateBar() {
    const quickDuration = 1200; // ms to get to 90%
    const slowDuration = 1200; // ms from 90% to 100%
    // Fast fill to 90%
    const start = performance.now();
    function quickFrame(now: number) {
      const t = Math.min(1, (now - start) / quickDuration);
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -8 * t);
      const val = eased * quickFillPct;
      setFill(val);
      if (t < 1) {
        requestAnimationFrame(quickFrame);
      } else {
        setFill(quickFillPct);
        // Continue slow to 100%
        const slowStart = performance.now();
        function slowFrame(now2: number) {
          const tt = Math.min(1, (now2 - slowStart) / slowDuration);
          // Extra slow for final part like SatisfactionStat
          const eased2 = 1 - Math.pow(2, -5 * tt);
          const val2 = quickFillPct + (endFillPct - quickFillPct) * eased2;
          setFill(val2);
          if (tt < 1) {
            requestAnimationFrame(slowFrame);
          } else {
            setFill(endFillPct);
            setTimeout(() => setShowText(true), 600);
          }
        }
        requestAnimationFrame(slowFrame);
      }
    }
    requestAnimationFrame(quickFrame);
  }

  return (
    <div ref={rootRef} className="relative flex flex-col items-center justify-end min-h-[250px] lg:min-h-[320px]">
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div className="relative w-full flex flex-col items-center justify-center">
          {/* Title always on top */}
          <div className="mb-2 text-center">
            <span className="text-2xl sm:text-[2rem] font-extrabold text-[var(--brand)]">$3,300,000&nbsp;+</span>
            <span className="text-black dark:text-white text-lg sm:text-2xl font-bold ml-1">raised</span>
          </div>
          {/* Description always on top */}
          <div className="text-xs sm:text-sm max-w-[170px] text-center mb-2 opacity-70">
            through amazing pitches, accurate data analysis<br />and delicate strategic decisions
          </div>
        </div>
      </div>
      {/* Animated Bar */}
      <div style={{height: 180, minHeight:100}} className="flex items-end w-full justify-center p-3 pt-16">
        <div className="h-full w-10 sm:w-14 bg-black/10 rounded-full flex items-end overflow-hidden border border-black/20 dark:border-white/10 relative">
          <div
            className="w-full bg-[var(--brand)] rounded-b-full transition-all duration-300 absolute bottom-0 left-0"
            style={{ height: `${fill}%`, minHeight:4 }}
          ></div>
        </div>
      </div>
    </div>
  );
}
