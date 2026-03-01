import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center pt-16 lg:pt-0 overflow-hidden"
            aria-label="Introduction"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-20">
                <Image
                    src="/hero-bg.jpg"
                    alt="Background"
                    fill
                    priority
                    className="object-cover opacity-30 dark:opacity-20 transition-opacity duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-bg/50 via-transparent to-bg" />
            </div>

            <div className="section-container w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="order-2 lg:order-1">
                    <FadeIn>
                        <p className="text-accent text-sm font-medium tracking-wide uppercase mb-4">
                            DATA SCIENTIST &bull; AI FULL STACK DEVELOPER
                        </p>
                    </FadeIn>

                    <FadeIn delay={100}>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-fg leading-tight mb-6">
                            Vignesh G
                        </h1>
                    </FadeIn>

                    <FadeIn delay={200}>
                        <p className="text-lg sm:text-xl text-muted max-w-2xl leading-relaxed mb-10">
                            I provide expert freelancing services in <span className="text-fg font-medium">ML model building</span> and <span className="text-fg font-medium">data analytics insights</span>.
                            Helping businesses transform raw data into intelligent, production-ready systems and measurable impact.
                        </p>
                    </FadeIn>

                    <FadeIn delay={300}>
                        <div className="flex flex-row flex-nowrap items-center gap-3">
                            <a href="#projects" className="btn-primary px-4 sm:px-6 whitespace-nowrap">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                                View Projects
                            </a>
                            <a href="#contact" className="btn-secondary px-4 sm:px-6 whitespace-nowrap">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                Contact Me
                            </a>
                            <a href="https://drive.google.com/file/d/1E3PqKQqh4vuSVmUTU4V3fb9F3ZeWtstF/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn-secondary px-4 sm:px-6 whitespace-nowrap">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Resume
                            </a>
                        </div>
                    </FadeIn>
                </div>

                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    <FadeIn delay={400} className="relative">
                        {/* More subtle, premium decorative background */}
                        <div className="absolute -inset-6 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-xl -z-10" />

                        <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-accent/10 p-2 group bg-bg shadow-inner">
                            <div className="w-full h-full rounded-full overflow-hidden border-2 border-line/20 shadow-2xl relative bg-panel">
                                <Image
                                    src="/profile.jpg"
                                    alt="Vignesh G"
                                    fill
                                    priority
                                    quality={100}
                                    sizes="(max-width: 768px) 288px, 384px"
                                    className="object-cover object-[center_15%] transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
