"use client";

import { useRef, useEffect, useState } from "react";

const TARGET = 25;

export default function ProjectsCompletedStat() {
  const [activeCount, setActiveCount] = useState(0);
  const [showDesc, setShowDesc] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  // Generate 25 dots (5x5 grid)
  const dots = Array.from({ length: 25 }, (_, i) => i);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new window.IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        animateGrid();
      }
    }, { threshold: 0.6 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function animateGrid() {
    const totalDots = 25;
    const durationPerDot = 50; // ms per dot

    let current = 0;
    const interval = setInterval(() => {
      current++;
      setActiveCount(current);
      if (current >= totalDots) {
        clearInterval(interval);
        setTimeout(() => setShowDesc(true), 500);
      }
    }, durationPerDot);
  }

  return (
    <div ref={rootRef} className="relative flex flex-col items-center justify-center min-h-[230px] sm:min-h-[300px] select-none">
      <div className="flex flex-col items-center gap-6 w-full relative">


        <div className="flex flex-col items-center gap-1 z-10">
          <div className="leading-tight relative isolate">
            {/* 5x5 Grid - Absolute centered behind text area */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-5 gap-x-5 gap-y-2 sm:gap-x-8 sm:gap-y-4 opacity-20 pointer-events-none -z-10">
              {dots.map((i) => (
                <div
                  key={i}
                  className={`w-4 h-4 sm:w-6 sm:h-6 rounded-full transition-all duration-300 ${i < activeCount
                    ? "bg-[var(--brand)] scale-100 opacity-100"
                    : "bg-black/10 dark:bg-white/10 scale-75 opacity-50"
                    }`}
                />
              ))}
            </div>

            <span className="text-2xl sm:text-[2rem] font-extrabold text-[var(--brand)]">{TARGET}+</span>
            <span className="text-black dark:text-white text-lg sm:text-2xl font-bold ml-2">projects</span>
          </div>
          {/* Fixed height container for description to ensure alignment with neighbor */}
          <div className="h-10 sm:h-12 flex items-start justify-center">
            <div className={`text-xs sm:text-sm max-w-[280px] text-center transition-opacity duration-700 ${showDesc ? "opacity-90" : "opacity-0"}`}>
              delivered with excellence across multiple industries and regions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
