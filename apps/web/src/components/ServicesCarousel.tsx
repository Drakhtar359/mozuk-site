"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Service = {
  title: string;
  description: string;
};

type ServicesCarouselProps = {
  services: Service[];
  autoMs?: number;
};

export default function ServicesCarousel({ services, autoMs = 3000 }: ServicesCarouselProps) {
  const chunkSize = 2;
  const pages = useMemo(() => chunkIntoPages(services, chunkSize), [services]);
  const numPages = pages.length;
  const rendered = useMemo(() => (numPages > 0 ? [...pages, pages[0]] : []), [pages, numPages]);
  const length = rendered.length; // numPages + 1 (clone of the first)
  const [pageIndex, setPageIndex] = useState(0);
  const [instant, setInstant] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (numPages <= 1) return; // Nothing to swipe
    intervalRef.current = window.setInterval(() => {
      setPageIndex((idx) => idx + 1);
    }, autoMs);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [autoMs, numPages]);

  // When we reach the cloned last slide, jump back to 0 without a visible reverse motion
  useEffect(() => {
    if (numPages <= 1) return;
    if (pageIndex === numPages) {
      const timeout = window.setTimeout(() => {
        setInstant(true);
        setPageIndex(0);
        // Re-enable transition on the next frame
        requestAnimationFrame(() => setInstant(false));
      }, 1000);
      return () => window.clearTimeout(timeout);
    }
  }, [pageIndex, numPages]);

  const goToPage = (idx: number) => {
    setPageIndex(idx);
    // Reset auto-advance timer
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(() => {
        setPageIndex((idx) => idx + 1);
      }, autoMs);
    }
  };

  const displayIndex = pageIndex >= numPages ? 0 : pageIndex;

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className={`flex ease-in-out ${instant ? '' : 'transition-transform duration-1000'}`}
          style={{ width: `${length * 100}%`, transform: `translateX(-${pageIndex * (100 / length)}%)` }}
        >
          {rendered.map((pair, pageIdx) => (
            <div key={pageIdx} className="w-full shrink-0 px-0 sm:px-1" style={{ width: `${100 / length}%` }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pair.map((svc, idx) => (
                  <ServiceCard key={idx} title={svc.title} description={svc.description} />)
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Navigation Dots */}
      {numPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: numPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx)}
              className={`transition-all duration-300 rounded-full ${idx === displayIndex
                  ? 'w-8 h-2 bg-[var(--brand)] shadow-[0_0_10px_rgba(4,168,154,0.5)]'
                  : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function chunkIntoPages<T>(items: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 sm:p-8 hover:bg-white/[0.05] hover:border-[var(--brand)]/30 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>

      <div className="relative z-10">
        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--brand)] drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">{title}</h3>
        <p className="mt-2 text-sm sm:text-base text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">{description}</p>
      </div>
    </div>
  );
}
