"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

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

      {!isHomePage && (
        <Link
          href="/"
          className="inline-flex items-center justify-center w-10 h-10 hover:opacity-80 transition"
          title="Home"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-[var(--brand)]"
          >
            <path
              d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 22V12H15V22"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      )}
    </nav>
  );
}
