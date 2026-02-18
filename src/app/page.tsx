import { Navbar } from "@/components/ui/Navbar";
import { HeroScene } from "@/components/3d/HeroScene";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { Projects } from "@/components/ui/Projects";
import { Experience } from "@/components/ui/Experience";
import { Certifications } from "@/components/ui/Certifications";
import { Accomplishments } from "@/components/ui/Accomplishments";
import { Education } from "@/components/ui/Education";
import { Footer } from "@/components/ui/Footer";
import { RESUME_DATA } from "@/data/resume";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-screen bg-black selection:bg-primary/20">
            <Navbar />

            {/* Hero Section */}
            <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
                <HeroScene />

                <div className="container px-4 md:px-6 z-10 text-center pt-20 md:pt-0">
                    <div className="inline-block px-3 py-1 mb-4 md:mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] md:text-xs font-medium tracking-wider text-gray-300">
                        AVAILABLE FOR HIRE
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                        {RESUME_DATA.name}.
                    </h1>
                    <p className="text-2xl md:text-4xl font-semibold text-gray-400 mb-8 max-w-2xl mx-auto">
                        {RESUME_DATA.role.split('&')[0]} <span className="text-primary text-glow">& {RESUME_DATA.role.split('&')[1]}</span>
                    </p>
                    <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
                        Building scalable web applications and intelligent AI solutions.
                        Focusing on MFE architecture, RAG pipelines, and creative development.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="#projects" className="px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                            View Work <ArrowRight size={18} />
                        </Link>
                        <Link href="#contact" className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors font-medium">
                            Contact Me
                        </Link>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-1 h-12 rounded-full bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
                </div>
            </section>

            <section id="about" className="py-24 bg-black/50">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">About Me.</h2>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            Experienced Software Engineer at Accenture specializing in full-stack development with the MEAN stack and cutting-edge Generative AI technologies.
                            <br /><br />
                            I bridge the gap between complex engineering problems and intuitive user experiences, leveraging AI-powered tools like GitHub Copilot and Azure OpenAI to deliver innovative solutions.
                        </p>
                    </div>
                </div>
            </section>

            <BentoGrid />
            <Projects />
            <Experience />
            <Certifications />
            <Accomplishments />
            <Education />
            <Footer />
        </main>
    );
}
