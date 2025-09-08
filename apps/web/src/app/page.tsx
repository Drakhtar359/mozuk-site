import ServicesCarousel from "@/components/ServicesCarousel";
import SatisfactionStat from "@/components/SatisfactionStat";
import PerformanceLineStat from "@/components/PerformanceLineStat";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-5">
      <section className="relative min-h-[100svh] flex flex-col justify-center py-12 sm:py-16">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight text-center">
          Build, pitch and ship with
          <span className="text-[var(--brand)]"> MOZUK</span>.
        </h1>
        <p className="mt-5 text-base sm:text-lg text-black/70 dark:text-white/70 max-w-2xl text-center mx-auto">
          We partner with teams to craft standout pitch decks, sharpen product strategy,
          analyze data for insight, and document products your users love.
        </p>
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
            autoMs={5000}
          />
        </div>
      </section>

      <section className="py-16 border-t border-black/10 dark:border-white/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12 items-start">
          <SatisfactionStat />
          <PerformanceLineStat />
        </div>
      </section>

      <section id="contact" className="py-20 border-t border-black/10 dark:border-white/10">
        <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
        <div className="rounded-2xl p-8 sm:p-10 border border-black/10 dark:border-white/10 bg-background">
          <h3 className="text-2xl font-semibold">Let's collaborate</h3>
          <p className="mt-3 text-sm/6 opacity-80 max-w-prose">
            Tell us about your goals. We'll reply within 1 business day.
          </p>
          <a href="/mozuk-form" className="mt-6 inline-flex items-center rounded-md bg-[var(--brand)] text-white px-5 py-3 text-sm font-medium shadow-sm hover:opacity-90 transition">
            Get started
          </a>
        </div>
      </section>

      <section className="py-20 border-t border-black/10 dark:border-white/10">
        <h2 className="text-2xl font-semibold mb-8">Contact us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Lebanon */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="text-[var(--brand)]"
              >
                <path 
                  d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <circle 
                  cx="12" 
                  cy="10" 
                  r="3" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="text-[var(--brand)] font-medium">Lebanon</div>
              <div className="text-white text-sm opacity-80">+961 7884 7997</div>
            </div>
          </div>

          {/* Bulgaria */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="text-[var(--brand)]"
              >
                <path 
                  d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <circle 
                  cx="12" 
                  cy="10" 
                  r="3" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="text-[var(--brand)] font-medium">Bulgaria</div>
              <div className="text-white text-sm opacity-80">+359 87 7282470</div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="text-[var(--brand)]"
              >
                <path 
                  d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <polyline 
                  points="22,6 12,13 2,6" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="text-[var(--brand)] font-medium">Email</div>
              <div className="text-white text-sm opacity-80">info@mozuk.net</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
