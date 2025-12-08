import ServicesCarousel from "@/components/ServicesCarousel";
import SatisfactionStat from "@/components/SatisfactionStat";
import PerformanceLineStat from "@/components/PerformanceLineStat";
import FundRaisedStat from "@/components/FundRaisedStat";
import ProjectsCompletedStat from "@/components/ProjectsCompletedStat";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-5 sm:px-8 pb-32">

      {/* Hero Section */}
      <section className="relative min-h-[90svh] flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] animate-fade-in-up">
          Build. Pitch. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand)] to-cyan-400 drop-shadow-[0_0_30px_rgba(4,168,154,0.5)]">Ship.</span>
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          We partner with teams to craft standout pitch decks, sharpen product strategy,
          and document products your users love.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
          <Link
            href="/mozuk-form"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-white to-gray-100 text-black font-bold text-lg hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]"
          >
            Start a Project
          </Link>
          <a
            href="#services"
            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-medium hover:bg-white/10 hover:border-white/30 transition-all shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          >
            Our Services
          </a>
        </div>
      </section>

      {/* Services Section - Advanced Liquid Glass */}
      <section id="services" className="mb-24">
        <div className="group relative rounded-[2.5rem] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.1)_inset]">
          {/* Multi-layer glass effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-[var(--brand)]/[0.08] via-transparent to-cyan-500/[0.05]"></div>
          <div className="absolute inset-0 backdrop-blur-3xl backdrop-saturate-150"></div>

          {/* Border gradient */}
          <div className="absolute inset-0 rounded-[2.5rem] border border-white/20 shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset]"></div>

          {/* Top highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-12">
            <h2 className="text-3xl font-bold mb-8 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Services</h2>
            <ServicesCarousel
              services={[
                { title: "Pitch Decks", description: "Investor-ready narratives and crisp visuals." },
                { title: "Product Strategy", description: "Clear roadmaps and sharp positioning." },
                { title: "Data Analysis", description: "Insights that drive confident decisions." },
                { title: "Product Documentation", description: "Docs that onboard and empower users." },
              ]}
              autoMs={5000}
            />
          </div>
        </div>
      </section>

      {/* Stats Section - Advanced Liquid Glass Grid */}
      <section className="mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12">
          {[
            <SatisfactionStat key="satisfaction" />,
            <PerformanceLineStat key="performance" />,
            <FundRaisedStat key="funds" />,
            <ProjectsCompletedStat key="projects" />
          ].map((Component, idx) => (
            <div key={idx} className="group relative rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_12px_48px_rgba(4,168,154,0.2),0_0_0_1px_rgba(4,168,154,0.2)_inset] transition-all duration-500">
              {/* Multi-layer glass background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-[var(--brand)]/[0.08] via-transparent to-cyan-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 backdrop-blur-3xl backdrop-saturate-150"></div>

              {/* Animated border gradient */}
              <div className="absolute inset-0 rounded-3xl border border-white/20 group-hover:border-[var(--brand)]/30 transition-colors duration-500 shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset]"></div>

              {/* Top highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

              {/* Content */}
              <div className="relative z-10 p-6">
                {Component}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Trigger */}
      <section id="contact" className="text-center py-20">
        <div className="inline-block p-[3px] rounded-full bg-gradient-to-r from-[var(--brand)] via-cyan-400 to-[var(--brand)] shadow-[0_0_40px_rgba(4,168,154,0.4)]">
          <Link href="/mozuk-form" className="block px-10 py-5 rounded-full bg-gradient-to-br from-black/90 to-black/70 hover:from-black/70 hover:to-black/50 transition-all text-white text-xl font-bold shadow-inner">
            Let's connect the dots &rarr;
          </Link>
        </div>
      </section>

      {/* Modern Contact Footer */}
      <div className="border-t border-white/10 pt-16 pb-8">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-white mb-2">Get in Touch</h3>
          <p className="text-white/60 text-sm">We're here to help bring your vision to life</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-4xl mx-auto">
          {/* Lebanon */}
          <a href="tel:+9617884799" className="group relative w-full sm:w-auto rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.05] hover:border-[var(--brand)]/30 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 p-5 flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand)]/20 to-cyan-500/20 flex items-center justify-center border border-[var(--brand)]/30">
                <svg className="w-6 h-6 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-white/50 uppercase tracking-wider font-medium">Lebanon</div>
                <div className="text-white font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">+961 7884 7997</div>
              </div>
            </div>
          </a>

          {/* Bulgaria */}
          <a href="tel:+359877282470" className="group relative w-full sm:w-auto rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.05] hover:border-[var(--brand)]/30 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 p-5 flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand)]/20 to-cyan-500/20 flex items-center justify-center border border-[var(--brand)]/30">
                <svg className="w-6 h-6 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-white/50 uppercase tracking-wider font-medium">Bulgaria</div>
                <div className="text-white font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">+359 87 7282470</div>
              </div>
            </div>
          </a>

          {/* Email */}
          <a href="mailto:info@mozuk.net" className="group relative w-full sm:w-auto rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.05] hover:border-[var(--brand)]/30 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 p-5 flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand)]/20 to-cyan-500/20 flex items-center justify-center border border-[var(--brand)]/30">
                <svg className="w-6 h-6 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-white/50 uppercase tracking-wider font-medium">Email</div>
                <div className="text-white font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">info@mozuk.net</div>
              </div>
            </div>
          </a>
        </div>

        <div className="text-center mt-12 text-white/40 text-xs">
          © MOZUK 2025 · Connecting dots that matter
        </div>
      </div>
    </main>
  );
}
