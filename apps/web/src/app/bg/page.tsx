"use client";

import { useEffect } from "react";

export default function BgRedirect() {
  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      window.location.replace("/home-bg");
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <p className="opacity-80">Пренасочване към българската версия…</p>
      <noscript>
        <meta httpEquiv="refresh" content="0; url=/home-bg" />
        <a href="/home-bg">Отворете страницата на български</a>
      </noscript>
    </main>
  );
}


