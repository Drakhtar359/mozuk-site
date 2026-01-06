import SatisfactionStat from "@/components/SatisfactionStat";
import PerformanceLineStat from "@/components/PerformanceLineStat";
import FundRaisedStat from "@/components/FundRaisedStat";
import ProjectsCompletedStat from "@/components/ProjectsCompletedStat";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-5 sm:px-8">

      {/* Hero Section */}
      <section className="relative min-h-[90svh] flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] animate-fade-in-up">
          Build. Pitch. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand)] to-cyan-400 drop-shadow-[0_0_30px_rgba(4,168,154,0.5)]">Scale.</span>
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

      {/* Services Section - Grid */}
      <section id="services" className="mb-24">
        <div className="relative rounded-[2.5rem] overflow-hidden">
          {/* Content */}
          <div className="relative z-10 p-8 sm:p-12">
            <h2 className="text-3xl font-bold mb-8 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-center">Services</h2>

            {/* 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Service 1: The Clarity Audit */}
              <Link href="/clarityaudit" className="block hover:scale-[1.02] transition-transform duration-300">
                <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 sm:p-8 hover:bg-white/[0.05] hover:border-[var(--brand)]/30 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.2)] h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                  <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--brand)] drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] mb-2 text-center">The Clarity Audit</h3>
                    <p className="text-sm sm:text-base text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] mb-4">We strip away the noise to find the core of your product story.</p>
                    <ul className="space-y-2 text-sm text-white/80">
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-[var(--brand)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Narrative Stress-Test</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-[var(--brand)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Strategic Fix Roadmap</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-[var(--brand)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Refined Value Proposition</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>

              {/* Service 2: The Capital Alignment */}
              <Link href="/capitalalignment" className="block hover:scale-[1.02] transition-transform duration-300">
                <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 sm:p-8 hover:bg-white/[0.05] hover:border-[var(--brand)]/30 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.2)] h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                  <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--brand)] drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] mb-2 text-center">The Capital Alignment</h3>
                    <p className="text-sm sm:text-base text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] mb-4">We bridge the gap between your vision and investor logic.</p>
                    <ul className="space-y-2 text-sm text-white/80">
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-[var(--brand)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>High-Conviction Pitch Deck</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-[var(--brand)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Defensible Valuation Model</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-[var(--brand)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Investor-Ready Data Room</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>

              {/* Service 3: The Precision Protocol */}
              <Link href="/technicalstandard" className="block hover:scale-[1.02] transition-transform duration-300">
                <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 sm:p-8 hover:bg-white/[0.05] hover:border-[var(--brand)]/30 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.2)] h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                  <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--brand)] drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] mb-2 text-center">The Precision Protocol</h3>
                    <p className="text-sm sm:text-base text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] mb-4">We build the blueprints that allow your product and team to scale.</p>
                    <ul className="space-y-2 text-sm text-white/80">
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-[var(--brand)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Technical Product Blueprints</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-[var(--brand)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Professional Product Datasheets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-[var(--brand)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Scalable Internal Documentation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>

              {/* Service 4: The Insight Synthesis */}
              <Link href="/insightsynthesis" className="block hover:scale-[1.02] transition-transform duration-300">
                <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 sm:p-8 hover:bg-white/[0.05] hover:border-[var(--brand)]/30 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.2)] h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                  <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--brand)] drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] mb-2 text-center">The Insight Synthesis</h3>
                    <p className="text-sm sm:text-base text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] mb-4">We transform raw data into the evidence you need to move with confidence.</p>
                    <ul className="space-y-2 text-sm text-white/80">
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-[var(--brand)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>High-Signal Performance Dashboards</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-[var(--brand)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>User Behavior Mapping</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-[var(--brand)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Data-Driven Decision Frameworks</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Optimized Blur */}
      <section className="mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12">
          {[
            <SatisfactionStat key="satisfaction" />,
            <PerformanceLineStat key="performance" />,
            <FundRaisedStat key="funds" />,
            <ProjectsCompletedStat key="projects" />
          ].map((Component, idx) => (
            <div key={idx} className="group relative rounded-3xl overflow-hidden transition-all duration-300">

              {/* Content */}
              <div className="relative z-10 p-6">
                {Component}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Trigger - Reduced spacing */}
      <section id="contact" className="text-center py-12">
        <div className="inline-block p-[3px] rounded-full bg-gradient-to-r from-[var(--brand)] via-cyan-400 to-[var(--brand)] shadow-[0_0_40px_rgba(4,168,154,0.4)]">
          <Link href="/mozuk-form" className="block px-10 py-5 rounded-full bg-gradient-to-br from-black/90 to-black/70 hover:from-black/70 hover:to-black/50 transition-all text-white text-xl font-bold shadow-inner">
            Let's connect the dots &rarr;
          </Link>
        </div>
      </section>

      {/* Modern Minimalist Contact Footer */}
      <div className="border-t border-white/10 pt-16 pb-12">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-2">Get in Touch</h3>
          <p className="text-white/60 text-sm">We're here to help bring your vision to life</p>
        </div>

        {/* Modern Minimalist Contact Links */}
        <div className="max-w-2xl mx-auto space-y-1">
          {/* Lebanon */}
          <a
            href="tel:+9617884799"
            className="group flex items-center justify-between px-6 py-4 hover:bg-white/[0.02] transition-all duration-300 rounded-xl border border-transparent hover:border-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[var(--brand)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-left">
                <div className="text-xs text-white/40 uppercase tracking-wider font-medium mb-0.5">Lebanon</div>
                <div className="text-white/90 font-medium group-hover:text-white transition-colors">+961 7884 7997</div>
              </div>
            </div>
          </a>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

          {/* Bulgaria */}
          <a
            href="tel:+359877282470"
            className="group flex items-center justify-between px-6 py-4 hover:bg-white/[0.02] transition-all duration-300 rounded-xl border border-transparent hover:border-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[var(--brand)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-left">
                <div className="text-xs text-white/40 uppercase tracking-wider font-medium mb-0.5">Bulgaria</div>
                <div className="text-white/90 font-medium group-hover:text-white transition-colors">+359 87 7282470</div>
              </div>
            </div>
          </a>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

          {/* Email */}
          <a
            href="mailto:info@mozuk.net"
            className="group flex items-center justify-between px-6 py-4 hover:bg-white/[0.02] transition-all duration-300 rounded-xl border border-transparent hover:border-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[var(--brand)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-left">
                <div className="text-xs text-white/40 uppercase tracking-wider font-medium mb-0.5">Email</div>
                <div className="text-white/90 font-medium group-hover:text-white transition-colors">info@mozuk.net</div>
              </div>
            </div>
          </a>
        </div>

        <div className="text-center mt-16 text-white/40 text-xs">
          © 2025 MOZUK · Connecting the dots that matter
        </div>
      </div>
    </main>
  );
}
