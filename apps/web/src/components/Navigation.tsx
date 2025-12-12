"use client";

import Link from "next/link";

export default function Navigation() {

  return (
    <nav className="mx-auto max-w-6xl w-full flex items-center justify-between px-5 py-3">
      <Link href="/" className="flex items-center gap-2">
        <div className="relative h-8 w-8">
          <img
            src="/navbar-logo.png"
            alt="MOZUK logo"
            className="absolute inset-0 h-full w-full object-contain"
            width={32}
            height={32}
          />
        </div>
        <span className="text-[18px] font-semibold tracking-wide">
          MOZ<span className="text-[var(--brand)]">U</span>K
        </span>
      </Link>
    </nav>
  );
}
