"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { GraduationCap } from "lucide-react";

export function Education() {
    return (
        <section id="education" className="py-24 bg-zinc-900/30">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-glow text-center md:text-left"
                >
                    Education.
                </motion.h2>

                <div className="max-w-3xl mx-auto">
                    {RESUME_DATA.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row gap-6 items-start md:items-center p-8 rounded-3xl bg-card border border-white/5 hover:border-white/10 transition-colors"
                        >
                            <div className="p-4 rounded-full bg-white/5 text-white">
                                <GraduationCap size={32} />
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                                <p className="text-gray-400 text-lg mb-1">{edu.school}</p>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-2">
                                    <span>{edu.location}</span>
                                    <span>•</span>
                                    <span>{edu.period}</span>
                                    {edu.grade && (
                                        <>
                                            <span>•</span>
                                            <span className="text-primary font-medium">{edu.grade}</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
