import FadeIn from "@/components/FadeIn";

export default function About() {
    return (
        <section id="about" aria-label="About Vignesh E">
            <div className="section-container">
                <FadeIn>
                    <h2 className="section-title">About</h2>
                    <p className="section-subtitle">
                        My approach to providing high-impact freelancing services.
                    </p>
                </FadeIn>

                <FadeIn delay={100}>
                    <div className="max-w-3xl space-y-5">
                        <p className="text-base text-fg leading-relaxed">
                            I&apos;m a <span className="text-accent">ML Engineer &amp; AI Full Stack Developer</span> specializing in
                            <span className="text-fg font-medium"> ML model building</span> and <span className="text-fg font-medium">data analytics insights</span>.
                            I help startups and enterprises bridge the gap between complex data and actionable intelligence through tailored, production-grade solutions.
                        </p>

                        <p className="text-base text-muted leading-relaxed">
                            My engineering philosophy is rooted in{" "}
                            <strong className="text-fg font-medium">systems thinking</strong>.
                            I don&apos;t just build models — I design end-to-end pipelines that
                            handle data quality, feature engineering, model training,
                            evaluation, deployment, and monitoring as a unified system.
                            Every component is built for reliability, reproducibility, and
                            scale.
                        </p>

                        <p className="text-base text-muted leading-relaxed">
                            I&apos;m particularly interested in the challenges of taking ML from
                            notebooks to production: model drift detection, A/B testing
                            frameworks, low-latency inference optimization, and building
                            ML platforms that empower entire data teams.
                        </p>

                        <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {[
                                { value: "8+", label: "Production Models" },
                                { value: "50+", label: "Concurrent Jobs" },
                                { value: "95%+", label: "Avg Accuracy" },
                                { value: "40%", label: "Latency Reduction" },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="text-center py-4 border border-line rounded-lg"
                                >
                                    <p className="text-2xl font-bold text-accent">{stat.value}</p>
                                    <p className="text-xs text-muted mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
