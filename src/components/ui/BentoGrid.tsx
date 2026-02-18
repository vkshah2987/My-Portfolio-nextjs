"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { Cpu, Globe, Database, PenTool, Layout, Server, HardDrive } from "lucide-react";

export function BentoGrid() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 },
    };

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-glow text-center md:text-left"
                >
                    Skills.
                </motion.h2>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    {/* Frontend - Large Block */}
                    <motion.div variants={item} className="md:col-span-2 p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/50 transition-colors group relative overflow-hidden bg-[#161617]">
                        <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                            <Globe size={40} className="text-secondary group-hover:text-primary transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold mb-6">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {RESUME_DATA.skills.frontend.map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors border border-white/5">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Backend - Medium Block */}
                    <motion.div variants={item} className="md:col-span-1 p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/50 transition-colors group relative overflow-hidden bg-[#161617]">
                        <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                            <Server size={32} className="text-secondary group-hover:text-primary transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {RESUME_DATA.skills.backend.map((skill) => (
                                <span key={skill} className="px-2 py-1 bg-white/5 rounded-full text-xs block border border-white/5">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* GenAI - Medium Block */}
                    <motion.div variants={item} className="md:col-span-1 p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/50 transition-colors group relative overflow-hidden bg-[#161617]">
                        <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                            <Cpu size={32} className="text-secondary group-hover:text-primary transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold mb-4">GenAI</h3>
                        <div className="flex flex-wrap gap-2">
                            {RESUME_DATA.skills.ai.map((skill) => (
                                <span key={skill} className="px-2 py-1 bg-white/5 rounded-full text-xs block border border-white/5">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* UI/UX - Medium Block */}
                    <motion.div variants={item} className="md:col-span-1 p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/50 transition-colors group relative overflow-hidden bg-[#161617]">
                        <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                            <Layout size={32} className="text-secondary group-hover:text-primary transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold mb-4">UI/UX</h3>
                        <div className="flex flex-wrap gap-2">
                            {RESUME_DATA.skills.uiux.map((skill) => (
                                <span key={skill} className="px-2 py-1 bg-white/5 rounded-full text-xs block border border-white/5">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Cloud - Medium Block */}
                    <motion.div variants={item} className="md:col-span-1 p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/50 transition-colors group relative overflow-hidden bg-[#161617]">
                        <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                            <HardDrive size={32} className="text-secondary group-hover:text-primary transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold mb-4">Cloud</h3>
                        <div className="flex flex-wrap gap-2">
                            {RESUME_DATA.skills.cloud.map((skill) => (
                                <span key={skill} className="px-2 py-1 bg-white/5 rounded-full text-xs block border border-white/5">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Database - Medium Block */}
                    <motion.div variants={item} className="md:col-span-1 p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/50 transition-colors group relative overflow-hidden bg-[#161617]">
                        <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                            <Database size={32} className="text-secondary group-hover:text-primary transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold mb-4">Database</h3>
                        <div className="flex flex-wrap gap-2">
                            {RESUME_DATA.skills.database.map((skill) => (
                                <span key={skill} className="px-2 py-1 bg-white/5 rounded-full text-xs block border border-white/5">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Tools - Wide Block */}
                    <motion.div variants={item} className="md:col-span-2 p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/50 transition-colors group relative overflow-hidden bg-[#161617]">
                        <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                            <PenTool size={40} className="text-secondary group-hover:text-primary transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold mb-6">Tools</h3>
                        <div className="flex flex-wrap gap-2">
                            {RESUME_DATA.skills.tools.map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors border border-white/5">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
