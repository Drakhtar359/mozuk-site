"use client";

import { useRef, useEffect, useState } from "react";

const TARGET = 35;

export default function ProjectsCompletedStat() {
  const [count, setCount] = useState(0);
  const [showDesc, setShowDesc] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new window.IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        animateIncrement();
      }
    }, { threshold: 0.6 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function animateIncrement() {
    const duration = 2000;
    const start = performance.now();

    function frame(now: number) {
      const t = Math.min(1, (now - start) / duration);
      // Ease out expo
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

      setCount(Math.round(eased * TARGET));

      if (t < 1) {
        requestAnimationFrame(frame);
      } else {
        setCount(TARGET);
        setTimeout(() => setShowDesc(true), 500);
      }
    }
    requestAnimationFrame(frame);
  }

  return (
    <div ref={rootRef} className="relative flex flex-col items-center justify-end min-h-[230px] sm:min-h-[300px] select-none">
      <div className="flex flex-col items-center gap-2 w-full">
        <div className="leading-tight">
          <span className="text-2xl sm:text-[2rem] font-extrabold text-[var(--brand)]">{count}+</span>
          <span className="text-black dark:text-white text-lg sm:text-2xl font-bold ml-2">projects</span>
        </div>
        <div className={`text-xs sm:text-sm max-w-[180px] text-center mt-2 transition-opacity duration-700 ${showDesc ? "opacity-90" : "opacity-0"}`}>
          delivered with excellence across<br />multiple industries and regions
        </div>
      </div>
    </div>
  );
}
