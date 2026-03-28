'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { getTranslationArray } from "../i18n";
import { Reveal } from "../components/ui/Reveal";

type ExperienceItem = {
  period: string;
  title: string;
  place: string;
  description?: string;
};

function ExperienceCard({ period, title, place, description }: ExperienceItem) {
  return (
    <motion.article
      className="flex min-w-[280px] flex-col gap-3 rounded-2xl bg-[#f5ebe0] p-6 shadow-md sm:min-w-[320px]"
      whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(109, 11, 49, 0.15)" }}
      transition={{ duration: 0.3 }}
    >
      <span className="text-xs font-semibold uppercase tracking-wider text-[#8F1242]">
        {period}
      </span>
      <h4 className="font-display text-lg font-bold text-[#6D0B31]">{title}</h4>
      <p className="text-sm text-[#6D0B31]/70">{place}</p>
      {description ? (
        <p className="mt-2 text-sm leading-relaxed text-foreground/75">{description}</p>
      ) : null}
    </motion.article>
  );
}

type ScrollColumnProps = {
  heading: string;
  items: ExperienceItem[];
};

function ScrollColumn({ heading, items }: ScrollColumnProps) {
  const [scrollIndex, setScrollIndex] = useState(0);

  return (
    <div className="flex flex-col gap-5 rounded-3xl bg-[#f5ebe0] p-6 shadow-lg">
      <h3 className="font-display text-2xl font-bold text-[#6D0B31] text-center">
        {heading}
      </h3>
      
      {/* Scroll horizontal de tarjetas */}
      <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide">
        {items.map((item, i) => (
          <ExperienceCard key={i} {...item} />
        ))}
      </div>
      
      {/* Dots indicadores */}
      <div className="flex justify-center gap-2 pt-1">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setScrollIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === scrollIndex 
                ? "w-6 bg-[#8F1242]" 
                : "w-2 bg-[#8F1242]/30 hover:bg-[#8F1242]/50"
            }`}
            aria-label={`Go to item ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const { t, locale } = useLanguage();
  const academic = getTranslationArray(locale, "experience.academic");
  const work = getTranslationArray(locale, "experience.work");

  return (
    <section id="experience" className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 py-16">
      <div className="flex flex-col gap-10">
        {/* Encabezado centrado */}
        <Reveal direction="up">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-[#6D0B31]">
              {t("sections.experience.title")}
            </h2>
            <p className="max-w-2xl text-base text-foreground/70">
              {t("sections.experience.subtitle")}
            </p>
          </div>
        </Reveal>

        {/* Grid de dos columnas con scroll interno */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal direction="left" delay={0.2}>
            <ScrollColumn
              heading={t("sections.experience.academic")}
              items={academic}
            />
          </Reveal>
          
          <Reveal direction="right" delay={0.3}>
            <ScrollColumn
              heading={t("sections.experience.work")}
              items={work}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
