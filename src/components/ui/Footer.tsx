"use client";

import { RESUME_DATA } from "@/data/resume";

export function Footer() {
    return (
        <footer id="contact" className="py-12 border-t border-white/5 bg-black/50 backdrop-blur-xl">
            <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center">
                <h2 className="text-2xl font-bold mb-6 text-glow">Let's Connect.</h2>
                <p className="text-gray-400 max-w-md mb-8">
                    Open to opportunities in Full Stack & GenAI engineering. Feel free to reach out.
                </p>

                <a
                    href={`mailto:${RESUME_DATA.contact.email}`}
                    className="text-xl md:text-5xl font-bold hover:text-primary transition-colors mb-12 block break-all"
                >
                    {RESUME_DATA.contact.email}
                </a>

                <div className="flex gap-8 mb-8">
                    {RESUME_DATA.contact.social.map((social) => (
                        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <social.icon size={24} />
                            <span className="sr-only">{social.name}</span>
                        </a>
                    ))}
                </div>

                <div className="text-gray-600 text-sm">
                    &copy; {new Date().getFullYear()} {RESUME_DATA.name}. Built with Next.js & Tailwind.
                </div>
            </div>
        </footer>
    );
}
