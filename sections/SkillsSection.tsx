'use client';

import { Section } from "../components/ui/Section";
import { useLanguage } from "../context/LanguageContext";

type SkillPillProps = {
  label: string;
};

function SkillPill({ label }: SkillPillProps) {
  // Comentario: Pastilla de habilidad reutilizable para mantener coherencia visual.
  return (
    <span className="inline-flex items-center justify-center rounded-full border border-border/70 bg-surface/60 px-3 py-1 text-xs text-muted-foreground shadow-sm">
      {label}
    </span>
  );
}

export function SkillsSection() {
  const { t } = useLanguage();

  // Comentario: Sección de stack tecnológico con fondo diferenciado e iconos circulares.
  return (
    <Section
      id="skills"
      eyebrow={t("sections.skills.eyebrow")}
      title={t("sections.skills.title")}
      alignTitle="left"
    >
      <div className="flex flex-col gap-6">
        <p className="max-w-xl text-sm text-muted-foreground">
          Tools and technologies I feel most comfortable with in my
          current projects.
        </p>
        <div className="flex flex-wrap items-center gap-8">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Figma",
          ].map((label) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className="h-16 w-16 rounded-full bg-surface-2/80" />
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

