import type { Metadata } from "next";
import HeroBackground from "@/components/HeroBackground";
import ScrollReset from "@/components/ScrollReset";
import Navigation from "@/components/Navigation";
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
          <Navigation />
        </header>
        {children}
        <footer className="fixed bottom-3 right-4 text-xs opacity-70 select-none">
          © MOZUK - 2025
        </footer>
      </body>
    </html>
  );
}
