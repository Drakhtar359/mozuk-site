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
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-white drop-shadow-xl animate-fade-in-up">
          Build. Pitch. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand)] to-cyan-400">Ship.</span>
        </h1>
        <p className="text-xl sm:text-2xl text-white/60 mb-10 max-w-3xl mx-auto leading-relaxed">
          We partner with teams to craft standout pitch decks, sharpen product strategy,
          and document products your users love.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
          <Link
            href="/mozuk-form"
            className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Start a Project
          </Link>
          <a
            href="#services"
            className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur text-white font-medium hover:bg-white/10 transition"
          >
            Our Services
          </a>
        </div>
      </section>

      {/* Services Section - Glass Card */}
      <section id="services" className="mb-24">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 sm:p-12 overflow-hidden shadow-2xl">
          <h2 className="text-3xl font-bold mb-8 text-white">Services</h2>
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
      </section>

      {/* Stats Section - Floating Grid */}
      <section className="mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <SatisfactionStat />
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <PerformanceLineStat />
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <FundRaisedStat />
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <ProjectsCompletedStat />
          </div>
        </div>
      </section>

      {/* Contact Trigger */}
      <section id="contact" className="text-center py-20">
        <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-[var(--brand)] to-cyan-500">
          <Link href="/mozuk-form" className="block px-10 py-5 rounded-full bg-black hover:bg-white/10 transition text-white text-xl font-bold">
            Let's connect the dots &rarr;
          </Link>
        </div>
      </section>

      {/* Footer Info Area */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-white/50 border-t border-white/10 pt-10">
        <div className="flex gap-3 hover:text-white transition cursor-default">
          <div className="p-2 rounded bg-white/5 text-[var(--brand)]">LB</div>
          <div>
            <div className="font-bold text-white">Lebanon</div>
            <div>+961 7884 7997</div>
          </div>
        </div>
        <div className="flex gap-3 hover:text-white transition cursor-default">
          <div className="p-2 rounded bg-white/5 text-[var(--brand)]">BG</div>
          <div>
            <div className="font-bold text-white">Bulgaria</div>
            <div>+359 87 7282470</div>
          </div>
        </div>
        <div className="flex gap-3 hover:text-white transition cursor-default">
          <div className="p-2 rounded bg-white/5 text-[var(--brand)]">@</div>
          <div>
            <div className="font-bold text-white">Email</div>
            <div>info@mozuk.net</div>
          </div>
        </div>
      </div>
    </main>
  );
}
