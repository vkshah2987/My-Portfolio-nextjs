"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { Award } from "lucide-react";

export function Certifications() {
    return (
        <section id="certifications" className="py-24 bg-zinc-900/30">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-glow text-center md:text-left"
                >
                    Certifications.
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {RESUME_DATA.certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-colors group"
                        >
                            <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Award size={24} />
                            </div>
                            <span className="font-medium text-gray-200 group-hover:text-white transition-colors">
                                {cert}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
