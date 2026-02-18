"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { Trophy } from "lucide-react";

export function Accomplishments() {
    return (
        <section id="accomplishments" className="py-24">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    Accomplishments.
                </motion.h2>

                <div className="max-w-4xl mx-auto space-y-4">
                    {RESUME_DATA.accomplishments.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                        >
                            <div className="mt-1 p-2 rounded-full bg-primary/20 text-primary">
                                <Trophy size={20} />
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-base leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
