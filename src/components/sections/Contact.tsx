"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formsubmit.co/ajax/vignesh2k02@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <section id="contact" className="bg-panel py-20" aria-label="Thank you message">
                <div className="section-container text-center">
                    <FadeIn>
                        <div className="card glass max-w-xl mx-auto py-16 flex flex-col items-center gap-6">
                            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center animate-pulse">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold text-fg">Thank You!</h2>
                            <p className="text-muted text-lg max-w-xs mx-auto">
                                Your message has been sent successfully. I&apos;ll get back to you soon.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="btn-secondary mt-4"
                            >
                                Send another message
                            </button>
                        </div>
                    </FadeIn>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="bg-panel" aria-label="Contact information">
            <div className="section-container">
                <FadeIn className="text-center">
                    <h2 className="section-title text-center">Get in Touch</h2>
                    <p className="section-subtitle text-center max-w-2xl mx-auto">
                        Looking for expert ML model building or data analytics insights? Let&apos;s collaborate on your next freelance project.
                    </p>
                </FadeIn>

                <div className="max-w-3xl mx-auto mt-12">
                    <FadeIn delay={200}>
                        <form
                            onSubmit={handleSubmit}
                            className="card bg-bg space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="John Doe"
                                        required
                                        className="w-full px-4 py-3 rounded-md bg-panel border border-line focus:border-accent focus:outline-none text-fg text-sm transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="john@example.com"
                                        required
                                        className="w-full px-4 py-3 rounded-md bg-panel border border-line focus:border-accent focus:outline-none text-fg text-sm transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="type" className="text-xs font-semibold uppercase tracking-wider text-muted">Project Type</label>
                                    <select
                                        name="service_type"
                                        id="type"
                                        className="w-full px-4 py-3 rounded-md bg-panel border border-line focus:border-accent focus:outline-none text-fg text-sm transition-colors appearance-none"
                                    >
                                        <option value="ml_model">ML Model Building</option>
                                        <option value="data_analytics">Data Analytics & Insights</option>
                                        <option value="ai_saas">AI SaaS Development</option>
                                        <option value="consultation">Technical Consultation</option>
                                        <option value="other">Other Inquiry</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-muted">Mobile Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        placeholder="+91 XXXXX XXXXX"
                                        className="w-full px-4 py-3 rounded-md bg-panel border border-line focus:border-accent focus:outline-none text-fg text-sm transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted">Your Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                    required
                                    className="w-full px-4 py-3 rounded-md bg-panel border border-line focus:border-accent focus:outline-none text-fg text-sm transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-primary w-full justify-center py-4 relative"
                            >
                                <span className={isSubmitting ? "opacity-0" : "flex items-center gap-2"}>
                                    Send Message
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="22" y1="2" x2="11" y2="13" />
                                        <polyline points="22 2 15 22 11 13 2 9 22 2" />
                                    </svg>
                                </span>
                                {isSubmitting && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    </div>
                                )}
                            </button>
                        </form>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

