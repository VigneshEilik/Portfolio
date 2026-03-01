import FadeIn from "@/components/FadeIn";

const projects = [
    {
        title: "NexusAI — Enterprise AI SaaS Platform",
        problem:
            "Data teams lack a unified platform for AI-powered conversations, data analytics, and enterprise insights — forcing them to juggle fragmented tools.",
        stack: ["React 19", "Node.js", "MongoDB", "Redis", "Tailwind CSS", "Ollama"],
        impact: [
            "Full-stack SaaS with AI chat, data analytics, and admin dashboards",
            "JWT auth, Redis caching, and role-based access control",
            "Deployed on Vercel with PM2 process management in production",
        ],
        github: "https://github.com/VigneshEilik/NexusAI",
        demo: "#",
    },
    {
        title: "Customer Churn Prediction & Survival Analysis",
        problem:
            "Telecom companies losing customers with no predictive visibility into at-risk accounts, leading to high acquisition costs.",
        stack: ["Python", "Scikit-learn", "SHAP", "Flask", "Pandas", "Plotly"],
        impact: [
            "Survival analysis + churn prediction with explainability via SHAP",
            "Built interactive Flask app for individual customer risk scoring",
            "Identified top churn drivers to enable targeted retention campaigns",
        ],
        github: "https://github.com/VigneshEilik/Customer_churn_prediction",
        demo: "#",
    },
    {
        title: "Multi-Step Reasoning Agent",
        problem:
            "Standard LLM calls produce unreliable answers for complex multi-step problems, with no built-in verification or retry logic.",
        stack: ["Python", "LLM APIs", "Agent Architecture", "Retry Logic"],
        impact: [
            "Planner → Executor → Verifier architecture for validated answers",
            "Auto-retry up to 2x if verification fails, ensuring accuracy",
            "Safety-first design avoiding chain-of-thought leaking",
        ],
        github: "https://github.com/VigneshEilik/MultiReasoningAgent",
        demo: "#",
    },
    {
        title: "Personal Finance Analyser Using LLM",
        problem:
            "Individuals struggle to categorise expenses and gain actionable financial insights from raw transaction data.",
        stack: ["Python", "LLM", "Pandas", "Streamlit", "Data Analysis"],
        impact: [
            "LLM-powered expense categorisation and financial insight generation",
            "Automated analysis of spending patterns and budget recommendations",
            "Interactive dashboard for visualising personal finance trends",
        ],
        github: "https://github.com/VigneshEilik/Personal_Finance_Analyser_Using-_LLM",
        demo: "#",
    },
    {
        title: "Walmart Sales Analysis & Forecasting",
        problem:
            "Retail chains face revenue unpredictability due to seasonal demand fluctuations and lack of data-driven forecasting.",
        stack: ["Python", "Jupyter", "Pandas", "Matplotlib", "Scikit-learn", "Time Series"],
        impact: [
            "Comprehensive EDA uncovering seasonal trends and store-level patterns",
            "Time series forecasting models for demand prediction across stores",
            "Actionable insights for inventory optimisation and markdown strategies",
        ],
        github: "https://github.com/VigneshEilik/Walmart---Analysis-Forcasting",
        demo: "#",
    },
    {
        title: "Movie Recommendation System",
        problem:
            "Users are overwhelmed by massive content libraries with no personalised way to discover movies matching their taste.",
        stack: ["Python", "Scikit-learn", "NLP", "TF-IDF", "Cosine Similarity", "Streamlit"],
        impact: [
            "Content-based filtering using NLP on movie metadata and descriptions",
            "TF-IDF vectorisation with cosine similarity for accurate recommendations",
            "Interactive UI for real-time movie suggestions based on user input",
        ],
        github: "https://github.com/VigneshEilik/Movie_Recomending_System",
        demo: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" aria-label="Projects">
            <div className="section-container">
                <FadeIn>
                    <h2 className="section-title">Projects</h2>
                    <p className="section-subtitle">
                        End-to-end ML systems and AI-powered applications — built for real-world impact.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <FadeIn key={project.title} delay={i * 80}>
                            <article className="card h-full flex flex-col">
                                <h3 className="text-lg font-semibold text-fg mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-muted mb-4 leading-relaxed">
                                    {project.problem}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.stack.map((tech) => (
                                        <span key={tech} className="tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mb-5 flex-1">
                                    <p className="text-xs font-medium uppercase tracking-wider text-accent mb-2">
                                        Impact
                                    </p>
                                    <ul className="space-y-1.5" role="list">
                                        {project.impact.map((metric) => (
                                            <li
                                                key={metric}
                                                className="flex items-start gap-2 text-sm text-fg"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="mt-0.5 text-accent shrink-0"
                                                >
                                                    <polyline points="9 11 12 14 22 4" />
                                                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                                </svg>
                                                {metric}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex gap-3 pt-4 border-t border-line">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent transition-colors duration-200"
                                        aria-label={`View ${project.title} on GitHub`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        GitHub
                                    </a>
                                    {project.demo !== "#" && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent transition-colors duration-200"
                                            aria-label={`View live demo of ${project.title}`}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                <polyline points="15 3 21 3 21 9" />
                                                <line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </article>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
