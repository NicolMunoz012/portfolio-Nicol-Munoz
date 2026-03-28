'use client';

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "../components/ui/Reveal";
import {
  SiPython, SiSpringboot, SiNextdotjs,
  SiReact, SiTypescript, SiTailwindcss, SiFigma,
  SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import type { IconType } from "react-icons";

type Skill = {
  name: string;
  Icon: IconType;
  color: string;
};

const SKILLS: Skill[] = [
  { name: "Java",        Icon: FaJava,        color: "#ed8b00" },
  { name: "Python",      Icon: SiPython,      color: "#3776ab" },
  { name: "Spring",      Icon: SiSpringboot,  color: "#6db33f" },
  { name: "Tailwind",    Icon: SiTailwindcss, color: "#06b6d4" },
  { name: "Next.js",     Icon: SiNextdotjs,   color: "currentColor" },
  { name: "React",       Icon: SiReact,       color: "#61dafb" },
  { name: "TypeScript",  Icon: SiTypescript,  color: "#3178c6" },
  { name: "Figma",       Icon: SiFigma,       color: "#f24e1e" },
  { name: "Git",         Icon: SiGit,         color: "#f05032" },
];

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 py-16">
      {/* Fondo beige */}
      <div className="absolute inset-0 bg-[#f5ebe0] -mx-[100vw] left-1/2 right-1/2 w-screen -translate-x-1/2" />
      
      <div className="relative flex flex-col gap-10">
        {/* Título centrado */}
        <Reveal direction="up">
          <h2 className="text-center font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-[#8F1242]">
            {t("sections.skills.title")}
          </h2>
        </Reveal>

        {/* Iconos en grid */}
        <Reveal direction="up" delay={0.2}>
          <div className="flex items-center justify-center gap-4">
            <div className="grid grid-cols-4 gap-8 sm:gap-12 md:gap-16">
              {SKILLS.slice(0, 4).map(({ name, Icon, color }, i) => (
                <motion.div
                  key={name}
                  className="flex flex-col items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <motion.div
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg sm:h-24 sm:w-24"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon style={{ color }} size={44} className="sm:text-[52px]" />
                  </motion.div>
                  <span className="text-center text-sm font-medium text-[#6D0B31]">{name}</span>
                </motion.div>
              ))}
            </div>

            {/* Flecha derecha */}
            <motion.button
              className="flex h-10 w-10 items-center justify-center text-[#8F1242] transition-colors hover:text-[#6D0B31]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Ver más tecnologías"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </motion.button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
