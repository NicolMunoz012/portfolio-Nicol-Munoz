'use client';

import { Section } from "../components/ui/Section";
import { useLanguage } from "../context/LanguageContext";

type ExperienceItemProps = {
  period: string;
  title: string;
  place: string;
  description?: string;
};

function ExperienceItem({ period, title, place, description }: ExperienceItemProps) {
  return (
    <article className="flex flex-col gap-1 rounded-2xl border border-border/70 bg-surface/60 p-4 text-sm">
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent/90">{period}</span>
      <h3 className="font-semibold text-foreground">{title}</h3>
      <p className="text-muted">{place}</p>
      {description ? <p className="mt-2 text-xs text-muted-foreground">{description}</p> : null}
    </article>
  );
}

const ACADEMIC: ExperienceItemProps[] = [
  {
    period: "20XX — Present",
    title: "Software Engineering",
    place: "University Name",
    description:
      "Short description of your degree and focus.",
  },
];

const WORK: ExperienceItemProps[] = [
  {
    period: "20XX — 20XX",
    title: "Job Title",
    place: "Company Name",
    description: "Brief description of your role.",
  },
];

export function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <Section
      id="experience"
      eyebrow={t("sections.experience.eyebrow")}
      title={t("sections.experience.title")}
      subtitle={t("sections.experience.subtitle")}
      alignTitle="right"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {t("sections.experience.academic")}
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {ACADEMIC.map((item, index) => (
              <ExperienceItem key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {t("sections.experience.work")}
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {WORK.map((item, index) => (
              <ExperienceItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
