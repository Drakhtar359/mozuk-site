"use client";

import { useEffect } from "react";

export default function ScrollReset() {
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in history) {
      // Prevent browser from restoring scroll on reload/navigation
      history.scrollRestoration = "manual";
    }
    // Ensure we land at the very top on first load
    const id = window.requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
    return () => window.cancelAnimationFrame(id);
  }, []);

  return null;
}
