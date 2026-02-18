"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
    return (
        <section id="experience" className="py-24 relative">
            <div className="container px-4 md:px-6 mx-auto max-w-5xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center text-glow"
                >
                    Experience.
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {RESUME_DATA.experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/50 hover:bg-white/5 transition-all duration-300"
                        >
                            {/* Icon Header */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 rounded-2xl bg-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                    <Briefcase size={28} />
                                </div>
                                <div className="text-right">
                                    <div className="inline-flex items-center gap-2 text-sm text-gray-400 bg-black/50 px-3 py-1 rounded-full border border-white/10 mb-2">
                                        <Calendar size={12} />
                                        {job.period}
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                {job.company}
                            </h3>
                            <p className="text-lg font-medium text-gray-300 mb-4">
                                {job.role}
                            </p>

                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                                <MapPin size={14} />
                                {job.location}
                            </div>

                            <ul className="space-y-3">
                                {job.description.map((desc, i) => (
                                    <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-primary transition-colors shrink-0" />
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
