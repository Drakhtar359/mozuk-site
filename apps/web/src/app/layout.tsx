import type { Metadata } from "next";
import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";
import ScrollReset from "@/components/ScrollReset";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MOZUK — Modern Product Partner",
  description:
    "Pitch Decks, Product Strategy, Data Analysis, Product Documentation.",
  metadataBase: new URL("https://mozuk.example"),
  openGraph: {
    title: "MOZUK",
    description:
      "Pitch Decks, Product Strategy, Data Analysis, Product Documentation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}>
        <div className="fixed inset-0 -z-10">
          <HeroBackground />
        </div>
        <ScrollReset />
        <header className="sticky top-0 z-40 border-b border-black/10 dark:border-white/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
          <nav className="mx-auto max-w-6xl w-full flex items-center justify-between px-5 py-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8">
                <img
                  src="/logo.svg"
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
            <div className="hidden sm:flex items-center gap-6 text-sm">
              <a href="#services" className="hover:text-[var(--brand)] transition-colors">Services</a>
              <a href="#contact" className="hover:text-[var(--brand)] transition-colors">Contact us</a>
            </div>
            <div className="sm:hidden" />
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
