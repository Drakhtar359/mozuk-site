"use client";

import { useRef, useEffect, useState } from "react";

const COINS_TOTAL = 10;
const FAST_FILL_PCT = 90;
const END_FILL_PCT = 100;

export default function FundRaisedStat() {
  const [fill, setFill] = useState(0); // out of 100
  const [showText, setShowText] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new window.IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        animatePile();
      }
    }, { threshold: 0.6 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function animatePile() {
    const quickDuration = 1200;
    const slowDuration = 1200;
    // Fast fill to 90%
    const start = performance.now();
    function quickFrame(now: number) {
      const t = Math.min(1, (now - start) / quickDuration);
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -8 * t);
      const val = eased * FAST_FILL_PCT;
      setFill(val);
      if (t < 1) {
        requestAnimationFrame(quickFrame);
      } else {
        setFill(FAST_FILL_PCT);
        // Continue slow to 100%
        const slowStart = performance.now();
        function slowFrame(now2: number) {
          const tt = Math.min(1, (now2 - slowStart) / slowDuration);
          const eased2 = 1 - Math.pow(2, -5 * tt);
          const val2 = FAST_FILL_PCT + (END_FILL_PCT - FAST_FILL_PCT) * eased2;
          setFill(val2);
          if (tt < 1) {
            requestAnimationFrame(slowFrame);
          } else {
            setFill(END_FILL_PCT);
            setTimeout(() => setShowText(true), 600);
          }
        }
        requestAnimationFrame(slowFrame);
      }
    }
    requestAnimationFrame(quickFrame);
  }

  // How many coins should be visible for the current fill?
  const coinsDisplayed = Math.round((fill / 100) * COINS_TOTAL);
  // Coin display (bottom up)
  const coinSvgs = Array.from({ length: COINS_TOTAL }).map((_, idx) => {
    // Coins stack from bottom (idx 0 is bottom)
    const show = idx < coinsDisplayed;
    // Animate with slight vertical offset
    return (
      <svg
        key={idx}
        width={36}
        height={18}
        viewBox="0 0 36 18"
        style={{
          opacity: show ? 1 : 0.1,
          transform: show ? `translateY(-${4 * (COINS_TOTAL - idx - 1)}px)` : `translateY(10px)`,
          transition: "opacity 0.15s, transform 0.3s cubic-bezier(.72,1.6,.56,1)",
        }}
        className="mx-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.21)]"
      >
        <ellipse
          cx="18"
          cy="9"
          rx="16"
          ry="7"
          fill="var(--brand)"
        />
        <ellipse
          cx="18"
          cy="9"
          rx="14"
          ry="6"
          fill="#19f7cc"
          fillOpacity={0.16}
        />
        <ellipse
          cx="20"
          cy="8"
          rx="7"
          ry="3"
          fill="#fff"
          fillOpacity={0.28}
        />
        <ellipse
          cx="13"
          cy="13"
          rx="3"
          ry="1"
          fill="#fff"
          fillOpacity={0.14}
        />
        <ellipse
          cx="26"
          cy="12"
          rx="2"
          ry="0.8"
          fill="#fff"
          fillOpacity={0.10}
        />
        <ellipse
          cx="17"
          cy="15"
          rx="10"
          ry="2"
          fill="#000"
          fillOpacity={0.09}
        />
        <ellipse
          cx="18"
          cy="9"
          rx="16"
          ry="7"
          stroke="#06574e"
          strokeWidth="1.5"
          fill="none"
          opacity={0.28}
        />
      </svg>
    );
  });

  return (
    <div ref={rootRef} className="relative flex flex-col items-center justify-end min-h-[250px] lg:min-h-[320px] select-none ">
      {/* Title always on top */}
      <div className="mb-2 text-center">
        <span className="text-2xl sm:text-[2rem] font-extrabold text-[var(--brand)]">$3,300,000&nbsp;+</span>
        <span className="text-black dark:text-white text-lg sm:text-2xl font-bold ml-1">raised</span>
      </div>
      <div className="text-xs sm:text-sm max-w-[170px] text-center mb-2 opacity-70">
        through amazing pitches, accurate data analysis<br />and delicate strategic decisions
      </div>
      {/* Coins pile animation (SVG stacked) */}
      <div style={{height: 200, minHeight:100}} className="w-14 flex flex-col justify-end items-center relative select-none">
        {coinSvgs.map((coin,i) => (
          <div key={i} className="w-full" style={{ position: 'absolute', bottom: 4 + 16*i }}>{coin}</div>
        ))}
      </div>
    </div>
  );
}
