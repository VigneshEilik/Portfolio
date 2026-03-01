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

export default function Home() {
    return (
        <>
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
