import FadeIn from "@/components/FadeIn";

const experiences = [
    {
        role: "Freelance ML Engineer",
        period: "2024 — Present",
        description: "Building end-to-end ML solutions for startups and SMBs across healthcare, fintech, and e-commerce domains.",
        outcomes: [
            "Delivered 8+ production ML models with an average accuracy improvement of 23% over client baselines",
            "Reduced model inference latency by 40% through optimization and quantization techniques",
            "Built automated retraining pipelines that cut model refresh cycles from 2 weeks to 4 hours",
            "Architected NexusAI SaaS platform serving 50+ concurrent training jobs",
        ],
    },
    {
        role: "Data Science Consultant",
        period: "2023 — 2024",
        description: "Provided data strategy, model development, and deployment consulting for cross-functional teams.",
        outcomes: [
            "Designed churn prediction system that identified 34% more at-risk customers than existing methods",
            "Implemented SHAP-based explainability dashboards for non-technical stakeholders",
            "Migrated 3 batch-processing ML pipelines to real-time streaming with Apache Kafka",
            "Standardized MLOps practices (CI/CD, model versioning, monitoring) across 2 client organizations",
        ],
    },
    {
        role: "ML Research Intern",
        period: "2022 — 2023",
        description: "Focused on computer vision and NLP research with emphasis on transfer learning and model efficiency.",
        outcomes: [
            "Published research on lightweight CNN architectures achieving 92% accuracy with 60% fewer parameters",
            "Developed custom data augmentation pipeline that increased training data diversity by 5x",
            "Contributed to open-source TensorFlow model garden with 3 accepted pull requests",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" aria-label="Work experience">
            <div className="section-container">
                <FadeIn>
                    <h2 className="section-title">Experience</h2>
                    <p className="section-subtitle">
                        Professional journey across freelance, consulting, and research roles.
                    </p>
                </FadeIn>

                <div className="space-y-8">
                    {experiences.map((exp, i) => (
                        <FadeIn key={exp.role} delay={i * 100}>
                            <div className="card">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                    <h3 className="text-lg font-semibold text-fg">{exp.role}</h3>
                                    <span className="text-sm text-muted mt-1 sm:mt-0">{exp.period}</span>
                                </div>
                                <p className="text-sm text-muted mb-4 leading-relaxed">{exp.description}</p>
                                <ul className="space-y-2" role="list">
                                    {exp.outcomes.map((outcome) => (
                                        <li key={outcome} className="flex items-start gap-2 text-sm text-fg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 text-accent shrink-0">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                                <polyline points="22 4 12 14.01 9 11.01" />
                                            </svg>
                                            {outcome}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
