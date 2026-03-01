import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import NexusAI from "@/components/sections/NexusAI";
import Experience from "@/components/sections/Experience";
import Blog from "@/components/sections/Blog";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vignesh G",
    "jobTitle": "Data Scientist & AI Full Stack Developer",
    "url": "https://vignesheilik.github.io",
    "sameAs": [
        "https://github.com/vignesheilik",
        "https://linkedin.com/in/vignes-g"
    ],
    "knowsAbout": [
        "Machine Learning",
        "Data Science",
        "Artificial Intelligence",
        "Full Stack Development",
        "Python",
        "Deep Learning"
    ],
    "description": "Professional portfolio of Vignesh G, a Data Scientist and AI Full Stack Developer specializing in production-grade ML systems."
};

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <main>
                <Hero />
                <Skills />
                <Projects />
                <NexusAI />
                <Experience />
                {/* <Blog /> */}
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
