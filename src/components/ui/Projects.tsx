"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Projects() {
    return (
        <section id="projects" className="py-24">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-glow text-center md:text-left"
                >
                    Projects.
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {RESUME_DATA.projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex flex-col justify-between p-8 rounded-3xl bg-card border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1 hover:shadow-2xl"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-xs font-bold tracking-wider text-primary uppercase">{project.category}</span>
                                    {project.link && (
                                        <Link href={project.link} target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                                            <ArrowUpRight size={16} />
                                        </Link>
                                    )}
                                </div>

                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                            </div>

                            <div>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Visual Placeholder - representing the project visual */}
                                <div className={cn(
                                    "w-full h-32 rounded-xl bg-gradient-to-br opacity-50 group-hover:opacity-80 transition-opacity",
                                    index === 0 ? "from-blue-900 to-cyan-900" :
                                        index === 1 ? "from-red-900 to-rose-900" : "from-purple-900 to-indigo-900"
                                )}></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
