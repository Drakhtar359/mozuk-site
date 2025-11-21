export default function TheClarityAudit() {
  return (
    <main className="mx-auto max-w-6xl px-5">
      <section className="relative min-h-[100svh] flex flex-col justify-center py-12 sm:py-16">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight text-center">
          The Clarity
          <span className="text-[var(--brand)]"> Audit</span>
        </h1>
        <div className="mt-8 max-w-3xl mx-auto text-center space-y-4">
          <p className="text-lg sm:text-xl text-black/80 dark:text-white/80 font-medium">
            You are wasting time and capital on a product story that doesn't work. The Clarity Audit is the required, objective intervention.
          </p>
          <p className="mt-6 text-base sm:text-lg text-black/70 dark:text-white/70">
            This is not a feel-good consultation. It is a forensic deep-dive to challenge the foundational assumptions of your product narrative and communication strategy. We bypass surface-level fixes to identify the points of friction, misdirection, and conceptual weakness that are killing your traction.
          </p>
        </div>
      </section>

      <section className="py-14 border-t border-black/10 dark:border-white/10">
        <h2 className="text-2xl font-semibold mb-6">What we review</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-8 border border-black/10 dark:border-white/10 bg-background">
            <h3 className="text-xl font-semibold mb-3">Product Strategy</h3>
            <p className="text-sm/6 opacity-80">
              Evaluate your product roadmap, positioning, and strategic direction 
              for clarity and alignment with business goals.
            </p>
          </div>
          <div className="rounded-2xl p-8 border border-black/10 dark:border-white/10 bg-background">
            <h3 className="text-xl font-semibold mb-3">Documentation</h3>
            <p className="text-sm/6 opacity-80">
              Assess the clarity, completeness, and usability of your product 
              documentation and user guides.
            </p>
          </div>
          <div className="rounded-2xl p-8 border border-black/10 dark:border-white/10 bg-background">
            <h3 className="text-xl font-semibold mb-3">Communication</h3>
            <p className="text-sm/6 opacity-80">
              Review how effectively you communicate your value proposition 
              to stakeholders, users, and investors.
            </p>
          </div>
          <div className="rounded-2xl p-8 border border-black/10 dark:border-white/10 bg-background">
            <h3 className="text-xl font-semibold mb-3">Data & Insights</h3>
            <p className="text-sm/6 opacity-80">
              Analyze how you leverage data and insights to inform decisions 
              and communicate progress.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-black/10 dark:border-white/10">
        <h2 className="text-2xl font-semibold mb-6">Deliverables</h2>
        <div className="rounded-2xl p-8 sm:p-10 border border-black/10 dark:border-white/10 bg-background">
          <ul className="space-y-4 text-sm/6 opacity-80">
            <li className="flex items-start gap-3">
              <span className="text-[var(--brand)] font-semibold">•</span>
              <span>Comprehensive audit report with findings and recommendations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--brand)] font-semibold">•</span>
              <span>Prioritized action items for immediate improvement</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--brand)] font-semibold">•</span>
              <span>Best practices and industry benchmarks</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--brand)] font-semibold">•</span>
              <span>Follow-up consultation to discuss findings</span>
            </li>
          </ul>
        </div>
      </section>

      <section id="contact" className="py-20 border-t border-black/10 dark:border-white/10">
        <h2 className="text-2xl font-semibold mb-6">Get started</h2>
        <div className="rounded-2xl p-8 sm:p-10 border border-black/10 dark:border-white/10 bg-background">
          <h3 className="text-2xl font-semibold">Schedule your clarity audit</h3>
          <p className="mt-3 text-sm/6 opacity-80 max-w-prose">
            Tell us about your product and goals. We'll reply within 1 business day 
            to discuss how we can help bring clarity to your strategy and documentation.
          </p>
          <a href="/mozuk-form" className="mt-6 inline-flex items-center rounded-md bg-[var(--brand)] text-white px-5 py-3 text-sm font-medium shadow-sm hover:opacity-90 transition">
            Get started
          </a>
        </div>
      </section>
    </main>
  );
}

