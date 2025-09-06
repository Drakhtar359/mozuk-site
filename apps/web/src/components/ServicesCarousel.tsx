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
  const [pageIndex, setPageIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (numPages <= 1) return; // Nothing to swipe
    intervalRef.current = window.setInterval(() => {
      setPageIndex((idx) => (idx + 1) % numPages);
    }, autoMs);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [autoMs, numPages]);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ width: `${numPages * 100}%`, transform: `translateX(-${pageIndex * (100 / numPages)}%)` }}
      >
        {pages.map((pair, pageIdx) => (
          <div key={pageIdx} className="w-full shrink-0 px-0 sm:px-1" style={{ width: `${100 / numPages}%` }}>
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
      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm sm:text-base text-black/70 dark:text-white/70">{description}</p>
    </div>
  );
}


