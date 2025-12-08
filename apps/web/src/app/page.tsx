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

      {/* Footer Info Area */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-white/70 border-t border-white/20 pt-10">
        <div className="flex gap-3 hover:text-white transition cursor-default">
          <div className="p-2 rounded bg-gradient-to-br from-white/10 to-white/5 text-[var(--brand)] font-bold border border-white/10">LB</div>
          <div>
            <div className="font-bold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">Lebanon</div>
            <div className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">+961 7884 7997</div>
          </div>
        </div>
        <div className="flex gap-3 hover:text-white transition cursor-default">
          <div className="p-2 rounded bg-gradient-to-br from-white/10 to-white/5 text-[var(--brand)] font-bold border border-white/10">BG</div>
          <div>
            <div className="font-bold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">Bulgaria</div>
            <div className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">+359 87 7282470</div>
          </div>
        </div>
        <div className="flex gap-3 hover:text-white transition cursor-default">
          <div className="p-2 rounded bg-gradient-to-br from-white/10 to-white/5 text-[var(--brand)] font-bold border border-white/10">@</div>
          <div>
            <div className="font-bold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">Email</div>
            <div className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">info@mozuk.net</div>
          </div>
        </div>
      </div>
    </main>
  );
}
