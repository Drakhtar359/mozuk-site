"use client";

import Link from "next/link";

export default function TechnicalStandard() {
    return (
        <main className="mx-auto max-w-7xl px-5 sm:px-8">
            {/* Hero Section with Animated Gradient */}
            <section className="relative min-h-[85svh] flex flex-col items-center justify-center text-center py-20">

                <div className="relative z-10 space-y-6 max-w-4xl">
                    {/* Premium badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] mb-4">
                        <span className="w-2 h-2 bg-[var(--brand)] rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-white/80">Premium Service</span>
                    </div>

                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
                        The <span className="text-[var(--brand)] drop-shadow-[0_0_30px_rgba(4,168,154,0.5)]">Precision</span> Protocol
                    </h1>

                    <p className="text-xl sm:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                        Complexity is the enemy of scale. We codify your product's DNA into high-signal documentation that aligns engineering, empowers sales, and establishes immediate technical authority.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                        <a
                            href="#deliverables"
                            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-medium hover:bg-white/10 hover:border-[var(--brand)]/30 transition-all"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            {/* Deliverables Section */}
            <section id="deliverables" className="py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        What You <span className="text-[var(--brand)]">Get</span>
                    </h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto">
                        Utility and scalability, not just pages of text
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {/* Card 1 */}
                    <div className="group relative rounded-3xl p-8 bg-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-[var(--brand)]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(4,168,154,0.15)] hover:-translate-y-2">
                        {/* Icon */}
                        <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-[var(--brand)]/20 to-[var(--brand)]/10 border border-[var(--brand)]/30 flex items-center justify-center group-hover:scale-110 transition-transform mx-auto">
                            <svg className="w-7 h-7 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white text-center">Structural Blueprints</h3>
                        <p className="text-white/70 leading-relaxed">
                            We translate complex system architectures into clear, visual, and written frameworks. From user flows to API logic, we create the "Source of Truth" that ensures your team builds with intent, not guesswork.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative rounded-3xl p-8 bg-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-[var(--brand)]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(4,168,154,0.15)] hover:-translate-y-2">
                        <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-[var(--brand)]/20 to-[var(--brand)]/10 border border-[var(--brand)]/30 flex items-center justify-center group-hover:scale-110 transition-transform mx-auto">
                            <svg className="w-7 h-7 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white text-center">Commercial Specifications</h3>
                        <p className="text-white/70 leading-relaxed">
                            Technical products often fail because sales teams can't explain them. We craft product catalogs and technical datasheets that bridge the gap between engineering "features" and buyer "benefits."
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group relative rounded-3xl p-8 bg-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-[var(--brand)]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(4,168,154,0.15)] hover:-translate-y-2">
                        <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-[var(--brand)]/20 to-[var(--brand)]/10 border border-[var(--brand)]/30 flex items-center justify-center group-hover:scale-110 transition-transform mx-auto">
                            <svg className="w-7 h-7 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white text-center">Continuity Assets</h3>
                        <p className="text-white/70 leading-relaxed">
                            Don't let your product knowledge leave when a developer does. We build robust internal documentation and onboarding guides that preserve your IP and reduce the friction of scaling your team.
                        </p>
                    </div>
                </div>
            </section>

            {/* Outcome Section */}
            <section className="py-20">
                <div className="relative rounded-[2.5rem] overflow-hidden p-12 sm:p-16 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm border border-white/10 text-center">
                    {/* Decorative gradient orb */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--brand)]/20 to-transparent rounded-full blur-3xl -z-10" />

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            Credibility Through <span className="text-[var(--brand)]">Clarity</span>
                        </h2>
                        <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                            <p>
                                In the high-stakes world of B2B and Deep Tech, your documentation is your handshake. The Precision Protocol replaces ambiguity with professional rigor.
                            </p>
                            <ul className="text-left space-y-3 max-w-2xl mx-auto">
                                <li className="flex items-start gap-3">
                                    <span className="text-[var(--brand)] font-bold mt-1">•</span>
                                    <span><span className="text-white font-semibold">Zero Ambiguity:</span> A unified language for developers and stakeholders.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[var(--brand)] font-bold mt-1">•</span>
                                    <span><span className="text-white font-semibold">Shortened Sales Cycles:</span> Technical buyers get the answers they need instantly.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[var(--brand)] font-bold mt-1">•</span>
                                    <span><span className="text-white font-semibold">Investor Confidence:</span> Professional documentation proves you are a mature organization, not just a chaotic startup.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 text-center">
                <div className="inline-block p-[2px] rounded-[2rem] bg-gradient-to-r from-[var(--brand)] via-[var(--brand)] to-[var(--brand)] shadow-[0_0_60px_rgba(4,168,154,0.5)]">
                    <div className="rounded-[2rem] bg-black/90 backdrop-blur-xl px-12 py-10">
                        <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Transform your complexity into a competitive advantage.</h3>
                        <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                            Elevate your technical narrative from confusing to commanding.
                        </p>
                        <Link
                            href="/mozuk-form"
                            className="inline-flex items-center px-10 py-5 rounded-full bg-[var(--brand)] text-white text-xl font-bold shadow-[0_0_40px_rgba(4,168,154,0.4)] hover:shadow-[0_0_60px_rgba(4,168,154,0.6)] hover:scale-105 transition-all"
                        >
                            Standardize My Product
                            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <div className="text-center mt-16 pb-12 text-white/40 text-xs">
                © 2025 MOZUK · Connecting the dots that matter
            </div>
        </main>
    );
}
