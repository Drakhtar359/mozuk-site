import ServicesCarousel from "@/components/ServicesCarousel";
import SatisfactionStat from "@/components/SatisfactionStat";
import PerformanceLineStat from "@/components/PerformanceLineStat";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-5">
      <section className="relative min-h-[100svh] flex flex-col justify-center py-12 sm:py-16">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
          Build, pitch, and ship with
          <span className="text-[var(--brand)]"> MOZUK</span>.
        </h1>
        <p className="mt-5 text-base sm:text-lg text-black/70 dark:text-white/70 max-w-2xl">
          We partner with teams to craft standout pitch decks, sharpen product strategy,
          analyze data for insight, and document products your users love.
        </p>
      </section>

      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center">
          <SatisfactionStat />
          <PerformanceLineStat />
        </div>
      </section>

      <section id="services" className="py-14 border-t border-black/10 dark:border-white/10">
        <h2 className="text-2xl font-semibold">Services</h2>
        <div className="mt-6">
          <ServicesCarousel
            services={[
              { title: "Pitch Decks", description: "Investor-ready narratives and crisp visuals." },
              { title: "Product Strategy", description: "Clear roadmaps and sharp positioning." },
              { title: "Data Analysis", description: "Insights that drive confident decisions." },
              { title: "Product Documentation", description: "Docs that onboard and empower users." },
            ]}
            autoMs={3000}
          />
        </div>
      </section>

      <section id="contact" className="py-20 border-t border-black/10 dark:border-white/10">
        <div className="rounded-2xl p-8 sm:p-10 bg-black text-white dark:bg-white dark:text-black">
          <h3 className="text-2xl font-semibold">Let’s collaborate</h3>
          <p className="mt-3 text-sm/6 opacity-80 max-w-prose">
            Tell us about your goals. We’ll reply within 1 business day.
          </p>
          <a href="mailto:hello@mozuk.co" className="mt-6 inline-flex items-center rounded-md bg-[var(--brand)] text-white px-5 py-3 text-sm font-medium shadow-sm hover:opacity-90 transition">
            hello@mozuk.co
          </a>
        </div>
      </section>
    </main>
  );
}
