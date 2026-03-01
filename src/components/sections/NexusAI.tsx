import FadeIn from "@/components/FadeIn";

const architectureLayers = [
    { label: "React 19 Dashboard", sub: "Vite · Redux Toolkit · Tailwind CSS" },
    { label: "API Gateway", sub: "Rate Limiting · JWT Auth · Routing" },
    { label: "Node.js + Express", sub: "REST API · Joi Validation · Helmet Security" },
    { label: "AI Layer (Ollama)", sub: "Model Serving · Response Caching" },
    { label: "MongoDB + Mongoose", sub: "Database · ODM · Indexing" },
    { label: "Infrastructure", sub: "Redis · PM2 · Docker · Vercel" },
];

export default function NexusAI() {
    return (
        <section id="nexusai" className="bg-panel" aria-label="NexusAI SaaS Product">
            <div className="section-container">
                <FadeIn>
                    <h2 className="section-title">NexusAI</h2>
                    <p className="section-subtitle">
                        An enterprise AI-powered SaaS platform for intelligent conversations, data analytics, and business insights.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <FadeIn delay={100}>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-base font-semibold text-fg mb-2">Problem</h3>
                                <p className="text-sm text-muted leading-relaxed">
                                    Businesses need a unified platform for AI chat, data analytics,
                                    and enterprise insights — but existing tools are fragmented,
                                    expensive, and hard to integrate. NexusAI provides a
                                    production-ready, self-hostable solution with built-in auth,
                                    caching, and role-based access control.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold text-fg mb-2">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["React 19", "Vite", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Redis", "Ollama", "Tailwind CSS", "JWT"].map((tech) => (
                                        <span key={tech} className="tag">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold text-fg mb-2">Key Features</h3>
                                <ul className="space-y-2" role="list">
                                    {[
                                        "AI-powered chat with Ollama model serving and Redis response caching",
                                        "Interactive data analytics dashboards with Recharts visualisations",
                                        "JWT authentication with role-based access control (Admin/User)",
                                        "Redis caching layer for fast API responses and session management",
                                        "Production deployment with PM2 process management and Docker support",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-muted">
                                            <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex gap-3">
                                <a
                                    href="https://github.com/VigneshEilik/NexusAI"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary text-sm"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    View Source
                                </a>
                                <a
                                    href="https://nexus-ai-spartanz.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary text-sm"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={200}>
                        <div className="card">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-5">
                                Architecture Overview
                            </h3>
                            <div className="space-y-0">
                                {architectureLayers.map((layer, i) => (
                                    <div key={layer.label}>
                                        <div className="border border-line rounded-md px-4 py-3 bg-bg text-center">
                                            <p className="text-sm font-medium text-fg">{layer.label}</p>
                                            <p className="text-xs text-muted mt-0.5">{layer.sub}</p>
                                        </div>
                                        {i < architectureLayers.length - 1 && (
                                            <div className="flex justify-center py-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-line">
                                                    <line x1="12" y1="5" x2="12" y2="19" />
                                                    <polyline points="19 12 12 19 5 12" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
