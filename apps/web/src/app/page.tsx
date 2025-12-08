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
            className="px-8 py-4 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-md text-white font-medium hover:bg-white/20 hover:border-white/30 transition-all shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          >
            Our Services
          </a>
        </div>
      </section>

      {/* Services Section - Liquid Glass Card */}
      <section id="services" className="mb-24">
        <div className="relative rounded-[2.5rem] border-2 border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-3xl p-8 sm:p-12 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] before:absolute before:inset-0 before:rounded-[2.5rem] before:p-[2px] before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-white/10 before:-z-10">
          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand)]/5 via-transparent to-cyan-500/5 rounded-[2.5rem] pointer-events-none"></div>

          <h2 className="text-3xl font-bold mb-8 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] relative z-10">Services</h2>
          <div className="relative z-10">
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

      {/* Stats Section - Liquid Glass Grid */}
      <section className="mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12">
          <div className="group relative rounded-3xl border-2 border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_48px_rgba(4,168,154,0.2)] transition-all duration-500 overflow-hidden before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-[var(--brand)]/10 before:via-transparent before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100">
            <SatisfactionStat />
          </div>
          <div className="group relative rounded-3xl border-2 border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_48px_rgba(4,168,154,0.2)] transition-all duration-500 overflow-hidden before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-[var(--brand)]/10 before:via-transparent before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100">
            <PerformanceLineStat />
          </div>
          <div className="group relative rounded-3xl border-2 border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_48px_rgba(4,168,154,0.2)] transition-all duration-500 overflow-hidden before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-[var(--brand)]/10 before:via-transparent before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100">
            <FundRaisedStat />
          </div>
          <div className="group relative rounded-3xl border-2 border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_48px_rgba(4,168,154,0.2)] transition-all duration-500 overflow-hidden before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-[var(--brand)]/10 before:via-transparent before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100">
            <ProjectsCompletedStat />
          </div>
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
