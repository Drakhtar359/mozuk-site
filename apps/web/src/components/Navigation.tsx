"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const isFormPage = pathname === "/mozuk-form";

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
      
      {isFormPage ? (
        <Link 
          href="/" 
          className="inline-flex items-center rounded-md bg-[var(--brand)] text-white px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90 transition"
        >
          Home
        </Link>
      ) : (
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-[var(--brand)] transition-colors">Services</a>
          <a href="#contact" className="hover:text-[var(--brand)] transition-colors">Contact us</a>
        </div>
      )}
      
      <div className="sm:hidden" />
    </nav>
  );
}
