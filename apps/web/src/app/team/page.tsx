"use client";

import Link from "next/link";

export default function Team() {
    return (
        <main className="mx-auto max-w-7xl px-5 sm:px-8">
            {/* Hero Section */}
            <section className="relative min-h-[85svh] flex flex-col items-center justify-center text-center py-20">
                <div className="relative z-10 space-y-6 max-w-4xl">
                    {/* Premium badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] mb-4">
                        <span className="w-2 h-2 bg-[var(--brand)] rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-white/80">Our Team</span>
                    </div>

                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
                        The Minds Behind the <span className="text-[var(--brand)] drop-shadow-[0_0_30px_rgba(4,168,154,0.5)]">Signal</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                        MOZUK is a lean collective of specialists built to solve a single problem: the friction between a great idea and its execution. We combine high-level product strategy, rigorous technical architecture, and deep analytical intelligence to ensure your vision survives the transition from concept to market. We don't just advise; we institutionalize clarity.
                    </p>
                </div>
            </section>

            {/* Team Members Section */}
            <section className="py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        The <span className="text-[var(--brand)]">People</span>
                    </h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto">
                        Specialized in the architecture of clarity
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Team Member 1 */}
                    <div className="group relative rounded-3xl p-8 bg-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-[var(--brand)]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(4,168,154,0.15)] hover:-translate-y-2">
                        {/* Profile Image Placeholder */}
                        <div className="w-32 h-32 mb-6 rounded-full bg-gradient-to-br from-[var(--brand)]/20 to-[var(--brand)]/10 border-2 border-[var(--brand)]/30 flex items-center justify-center group-hover:scale-110 transition-transform mx-auto">
                            <svg className="w-16 h-16 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-white text-center">Michel Akl</h3>
                        <p className="text-[var(--brand)] text-center mb-3 font-medium">Architecting the Narrative</p>
                        <p className="text-white/70 leading-relaxed text-center">
                            Aligning business logic and vision to secure market authority and investor conviction.
                        </p>
                    </div>

                    {/* Team Member 2 */}
                    <div className="group relative rounded-3xl p-8 bg-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-[var(--brand)]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(4,168,154,0.15)] hover:-translate-y-2">
                        <div className="w-32 h-32 mb-6 rounded-full bg-gradient-to-br from-[var(--brand)]/20 to-[var(--brand)]/10 border-2 border-[var(--brand)]/30 flex items-center justify-center group-hover:scale-110 transition-transform mx-auto">
                            <svg className="w-16 h-16 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-white text-center">Anthony Bechay</h3>
                        <p className="text-[var(--brand)] text-center mb-3 font-medium">Engineering the Protocol</p>
                        <p className="text-white/70 leading-relaxed text-center">
                            Codifying technical complexity into scalable systems that ensure operational integrity.
                        </p>
                    </div>

                    {/* Team Member 3 */}
                    <div className="group relative rounded-3xl p-8 bg-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-[var(--brand)]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(4,168,154,0.15)] hover:-translate-y-2">
                        <div className="w-32 h-32 mb-6 rounded-full bg-gradient-to-br from-[var(--brand)]/20 to-[var(--brand)]/10 border-2 border-[var(--brand)]/30 flex items-center justify-center group-hover:scale-110 transition-transform mx-auto">
                            <svg className="w-16 h-16 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-white text-center">Radostina Bojinova</h3>
                        <p className="text-[var(--brand)] text-center mb-3 font-medium">Synthesizing the Truth</p>
                        <p className="text-white/70 leading-relaxed text-center">
                            Transforming fragmented data into analytical frameworks that drive evidence-based decisions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values or Mission Section */}
            <section className="py-20">
                <div className="relative rounded-[2.5rem] overflow-hidden p-12 sm:p-16 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm border border-white/10 text-center">
                    {/* Decorative gradient orb */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--brand)]/20 to-transparent rounded-full blur-3xl -z-10" />

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            Our <span className="text-[var(--brand)]">Mission</span>
                        </h2>
                        <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                            <p>
                                Our mission is to eliminate the noise that stalls growth. We bridge the gap between technical complexity and strategic narrative, ensuring that every product we touch has the clarity to lead, the data to prove it, and the structure to scale.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 text-center">
                <div className="inline-block p-[2px] rounded-[2rem] bg-gradient-to-r from-[var(--brand)] via-[var(--brand)] to-[var(--brand)] shadow-[0_0_60px_rgba(4,168,154,0.5)]">
                    <div className="rounded-[2rem] bg-black/90 backdrop-blur-xl px-12 py-10">
                        <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Want to Work With Us?</h3>
                        <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                            [Add your call-to-action description here]
                        </p>
                        <Link
                            href="/mozuk-form"
                            className="inline-flex items-center px-10 py-5 rounded-full bg-[var(--brand)] text-white text-xl font-bold shadow-[0_0_40px_rgba(4,168,154,0.4)] hover:shadow-[0_0_60px_rgba(4,168,154,0.6)] hover:scale-105 transition-all"
                        >
                            Get in Touch
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
