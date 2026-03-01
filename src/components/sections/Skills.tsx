import FadeIn from "@/components/FadeIn";

const skillGroups = [
    {
        title: "Machine Learning",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
        skills: [
            "Supervised & Unsupervised Learning",
            "Feature Engineering & Selection",
            "Model Evaluation & Tuning",
            "Ensemble Methods (XGBoost, Random Forest)",
            "Scikit-learn, MLflow, Optuna",
            "Time Series Forecasting",
        ],
    },
    {
        title: "Deep Learning",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M9 9h6v6H9z" />
                <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
            </svg>
        ),
        skills: [
            "CNNs, RNNs, Transformers",
            "TensorFlow & PyTorch",
            "NLP & Text Classification",
            "Computer Vision (Object Detection, Segmentation)",
            "Transfer Learning & Fine-tuning",
            "Model Compression & Optimization",
        ],
    },
    {
        title: "Data & Tools",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
        ),
        skills: [
            "Python, SQL, Pandas, NumPy",
            "Docker, Kubernetes, CI/CD",
            "AWS (SageMaker, Lambda, S3)",
            "PostgreSQL, MongoDB, Redis",
            "Airflow, Kubeflow Pipelines",
            "Git, DVC, Weights & Biases",
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="bg-panel" aria-label="Technical skills">
            <div className="section-container">
                <FadeIn>
                    <h2 className="section-title">Skills & Expertise</h2>
                    <p className="section-subtitle">
                        Core competencies across the ML lifecycle — from research to production.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {skillGroups.map((group, i) => (
                        <FadeIn key={group.title} delay={i * 100}>
                            <div className="card h-full">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="text-accent">{group.icon}</div>
                                    <h3 className="text-base font-semibold text-fg">
                                        {group.title}
                                    </h3>
                                </div>
                                <ul className="space-y-2.5" role="list">
                                    {group.skills.map((skill) => (
                                        <li
                                            key={skill}
                                            className="flex items-start gap-2 text-sm text-muted"
                                        >
                                            <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                                            {skill}
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
