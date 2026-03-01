import FadeIn from "@/components/FadeIn";

const posts = [
    {
        title: "Building Production ML Pipelines with Kubeflow",
        excerpt:
            "A deep dive into orchestrating end-to-end ML workflows — from data ingestion to model serving — using Kubeflow Pipelines on Kubernetes.",
        date: "Feb 2026",
        readTime: "8 min read",
        tags: ["MLOps", "Kubeflow", "Kubernetes"],
        href: "#",
    },
    {
        title: "Transformer Architecture: From Attention to GPT",
        excerpt:
            "Breaking down the Transformer architecture, multi-head attention mechanics, and how modern LLMs evolved from the original 2017 paper.",
        date: "Jan 2026",
        readTime: "12 min read",
        tags: ["Deep Learning", "NLP", "Transformers"],
        href: "#",
    },
    {
        title: "Feature Engineering That Actually Works",
        excerpt:
            "Practical feature engineering techniques that consistently improve model performance — with real-world examples and Python code.",
        date: "Dec 2025",
        readTime: "6 min read",
        tags: ["Machine Learning", "Python", "Best Practices"],
        href: "#",
    },
];

export default function Blog() {
    return (
        <section id="blog" className="bg-panel" aria-label="Technical blog">
            <div className="section-container">
                <FadeIn>
                    <h2 className="section-title">Technical Writing</h2>
                    <p className="section-subtitle">
                        Deep dives and practical guides on machine learning and system design.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {posts.map((post, i) => (
                        <FadeIn key={post.title} delay={i * 100}>
                            <a
                                href={post.href}
                                className="card block h-full group"
                                aria-label={`Read article: ${post.title}`}
                            >
                                <div className="flex items-center gap-3 text-xs text-muted mb-3">
                                    <span>{post.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-line" />
                                    <span>{post.readTime}</span>
                                </div>

                                <h3 className="text-base font-semibold text-fg mb-2 group-hover:text-accent transition-colors duration-200">
                                    {post.title}
                                </h3>

                                <p className="text-sm text-muted leading-relaxed mb-4">
                                    {post.excerpt}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {post.tags.map((tag) => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </a>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
