'use client';

import { useLanguage } from "../context/LanguageContext";
import {
  SiPython, SiSpringboot, SiNextdotjs,
  SiReact, SiTypescript, SiTailwindcss, SiFigma,
  SiKotlin, SiGit,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Skill = {
  name: string;
  Icon: IconType;
  color: string;
};

const SKILLS: Skill[] = [
  { name: "Python",      Icon: SiPython,      color: "#3776ab" },
  { name: "Kotlin",      Icon: SiKotlin,      color: "#7f52ff" },
  { name: "Spring Boot", Icon: SiSpringboot,  color: "#6db33f" },
  { name: "Next.js",     Icon: SiNextdotjs,   color: "currentColor" },
  { name: "React",       Icon: SiReact,       color: "#61dafb" },
  { name: "TypeScript",  Icon: SiTypescript,  color: "#3178c6" },
  { name: "Tailwind",    Icon: SiTailwindcss, color: "#06b6d4" },
  { name: "Figma",       Icon: SiFigma,       color: "#f24e1e" },
  { name: "Git",         Icon: SiGit,         color: "#f05032" },
];

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10">
      <div className="flex flex-col gap-8">
        {/* Título alineado a la izquierda */}
        <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] font-semibold tracking-tight text-foreground">
          {t("sections.skills.title")}
        </h2>

        {/* Iconos debajo, en grid centrado */}
        <div className="grid grid-cols-3 gap-8 sm:grid-cols-5 md:grid-cols-9">
          {SKILLS.map(({ name, Icon, color }) => (
            <div key={name} className="flex flex-col items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border/70 bg-surface-2/80 shadow-sm transition-transform hover:scale-105">
                <Icon style={{ color }} size={30} />
              </div>
              <span className="text-center text-[11px] text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
