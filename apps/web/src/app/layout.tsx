import type { Metadata } from "next";
import ConstellationCanvas from "@/components/ConstellationCanvas";
import ScrollReset from "@/components/ScrollReset";
import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
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
  icons: {
    icon: [
      { url: "/navbar-logo.ico", type: "image/x-icon" },
      { url: "/navbar-logo.png", type: "image/png" },
    ],
    apple: "/navbar-logo.png",
    shortcut: "/navbar-logo.png",
  },
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white selection:bg-[var(--brand)] selection:text-white relative`}>
        <ConstellationCanvas />
        <ScrollReset />
        <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur-md">
          <Navigation />
        </header>
        <div className="relative z-10">
          {children}
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
