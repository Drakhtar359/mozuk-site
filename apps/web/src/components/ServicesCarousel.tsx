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
      }, 720);
      return () => window.clearTimeout(timeout);
    }
  }, [pageIndex, numPages]);

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex ease-in-out ${instant ? '' : 'transition-transform duration-700'}`}
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
    <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6 sm:p-8 hover:shadow-sm transition bg-background">
      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--brand)]">{title}</h3>
      <p className="mt-2 text-sm sm:text-base text-black/70 dark:text-white/70">{description}</p>
    </div>
  );
}


