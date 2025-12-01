"use client";

import { useRef, useEffect, useState } from "react";

export default function FundRaisedStat() {
  const [fill, setFill] = useState(0);
  const [showText, setShowText] = useState(false);
  const barRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new window.IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        animate();
      }
    }, { threshold: 0.6 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function animate() {
    const duration = 1800;
    const target = 100;
    const start = performance.now();
    function frame(now: number) {
      const t = Math.min(1, (now - start) / duration);
      const eased = t < 1 ? 1 - Math.pow(2, -8 * t) : 1;
      setFill(eased * target);
      if (t < 1) {
        requestAnimationFrame(frame);
      } else {
        setFill(target);
        setTimeout(() => setShowText(true), 600);
      }
    }
    requestAnimationFrame(frame);
  }

  return (
    <div ref={rootRef} className="relative flex flex-col items-center justify-end min-h-[280px] lg:min-h-[350px] py-8">
      {/* Raised Amount Title */}
      <div className="mb-3 text-center">
        <span className="text-[2rem] sm:text-3xl font-extrabold text-[var(--brand)]">$3,300,000&nbsp;+</span>
        <span className="text-black dark:text-white text-2xl font-bold ml-1">raised</span>
      </div>
      {/* Bar Animation */}
      <div className="h-48 w-10 sm:w-14 bg-black/10 rounded-full flex items-end overflow-hidden border border-black/20 dark:border-white/10" ref={barRef}>
        <div
          className="w-full bg-[var(--brand)] rounded-b-full transition-all duration-300"
          style={{ height: `${fill}%` }}
        ></div>
      </div>
      {/* Description shown after fill animation */}
      <div className={`mt-4 text-xs sm:text-sm max-w-[170px] text-center opacity-0 transition-opacity duration-700 ${showText ? "opacity-100" : ""}`}>
        through amazing pitches, accurate data analysis<br />and delicate strategic decisions
      </div>
    </div>
  );
}
