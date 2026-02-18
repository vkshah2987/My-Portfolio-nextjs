"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Home, User, Code, Briefcase, Mail, Award, Star, GraduationCap } from "lucide-react";
import clsx from "clsx";
import { useState, useEffect } from "react";

const navItems = [
    { name: "Home", icon: Home, to: "hero" },
    { name: "About", icon: User, to: "about" },
    { name: "Skills", icon: Code, to: "skills" },
    { name: "Projects", icon: Briefcase, to: "projects" },
    { name: "Certs", icon: Award, to: "certifications" }, // Shortened for fit
    { name: "Awards", icon: Star, to: "accomplishments" },
    { name: "Edu", icon: GraduationCap, to: "education" }, // Shortened for fit
    { name: "Contact", icon: Mail, to: "contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
        >
            <div
                className={clsx(
                    "pointer-events-auto flex items-center gap-1 p-2 rounded-full border border-white/10 transition-all duration-300 max-w-[calc(100vw-2rem)] overflow-x-auto no-scrollbar",
                    scrolled ? "bg-black/50 backdrop-blur-xl shadow-lg" : "bg-transparent backdrop-blur-sm"
                )}
            >
                {navItems.map((item) => (
                    <ScrollLink
                        key={item.name}
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className="group relative flex items-center justify-center p-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                    >
                        <span className="sr-only">{item.name}</span>
                        <item.icon size={20} className="text-gray-400 group-hover:text-white transition-colors" />

                        {/* Tooltip */}
                        <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-white bg-black/80 px-2 py-1 rounded">
                            {item.name}
                        </span>
                    </ScrollLink>
                ))}
            </div>
        </motion.div>
    );
}
