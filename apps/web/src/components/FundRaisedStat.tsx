"use client";

import { useRef, useEffect, useState } from "react";

const TARGET = 900000;
const FAST_PCT = 90;
const END_PCT = 100;

export default function FundRaisedStat() {
  const [amount, setAmount] = useState(0);
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
    const fastDuration = 1200, slowDuration = 1200;
    const fastTarget = Math.round(TARGET * FAST_PCT / 100);
    const start = performance.now();
    // Fast part
    function fastFrame(now: number) {
      const t = Math.min(1, (now - start) / fastDuration);
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -8 * t);
      setAmount(Math.round(eased * fastTarget));
      if (t < 1) {
        requestAnimationFrame(fastFrame);
      } else {
        setAmount(fastTarget);
        // Slow tail
        const slowStart = performance.now();
        function slowFrame(now2: number) {
          const tt = Math.min(1, (now2 - slowStart) / slowDuration);
          const eased2 = 1 - Math.pow(2, -5 * tt);
          const val2 = fastTarget + eased2 * (TARGET - fastTarget);
          setAmount(Math.round(val2));
          if (tt < 1) {
            requestAnimationFrame(slowFrame);
          } else {
            setAmount(TARGET);
            setTimeout(() => setShowDesc(true), 600);
          }
        }
        requestAnimationFrame(slowFrame);
      }
    }
    requestAnimationFrame(fastFrame);
  }

  // Format number with commas
  function formatNumber(n: number) {
    return n.toLocaleString("en-US");
  }

  return (
    <div ref={rootRef} className="relative flex flex-col items-center justify-end min-h-[230px] sm:min-h-[300px] select-none ">
      <div className="flex flex-col items-center gap-2 w-full">
        <div className="leading-tight">
          <span className="text-2xl sm:text-[2rem] font-extrabold text-[var(--brand)]">${formatNumber(amount)}+</span>
          <span className="text-black dark:text-white text-lg sm:text-2xl font-bold ml-2">raised</span>
        </div>
        <div className={`text-xs sm:text-sm max-w-[180px] text-center mt-2 transition-opacity duration-700 ${showDesc ? "opacity-90" : "opacity-0"}`}>
          through amazing pitches, accurate data analysis<br />and delicate strategic decisions
        </div>
      </div>
    </div>
  );
}
