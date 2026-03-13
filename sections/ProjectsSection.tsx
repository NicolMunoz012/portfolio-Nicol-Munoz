'use client';

import { Section } from "../components/ui/Section";
import { useLanguage } from "../context/LanguageContext";

type ProjectLink = {
  type: "github" | "vercel" | "demo";
  url: string;
};

type ProjectCardProps = {
  title: string;
  role: string;
  year: string;
  links?: ProjectLink[];
};

function ProjectCard({ title, role, year, links = [] }: ProjectCardProps) {
  const { t } = useLanguage();

  // Comentario: Tarjeta de proyecto con enlaces GitHub, Vercel y Demo.
  const linkLabels = { github: t("projects.github"), vercel: t("projects.vercel"), demo: t("projects.demo") };

  return (
    <article className="group grid grid-rows-[auto_auto_1fr_auto] gap-2 rounded-2xl border border-border/70 bg-surface/70 p-4 text-sm shadow-sm transition-transform transition-shadow hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.28)]">
      <header className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
          {year}
        </span>
      </header>
      <p className="text-xs text-muted">{role}</p>
      {links.length > 0 ? (
        <div className="mt-2 flex flex-wrap gap-2">
          {links.map(({ type, url }) => (
            <a
              key={type}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border/70 bg-surface-2/70 px-2.5 py-1 text-[10px] font-medium text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              {linkLabels[type]}
            </a>
          ))}
        </div>
      ) : (
        <p className="mt-2 text-[10px] text-muted">—</p>
      )}
    </article>
  );
}

const PROJECTS: Omit<ProjectCardProps, "links"> & { links?: ProjectLink[] }[] = [
  {
    title: "Project Title",
    role: "Personal concept focused on cinematic visuals and soft interactive details.",
    year: "2025",
    links: [
      { type: "github", url: "https://github.com" },
      { type: "vercel", url: "https://vercel.com" },
      { type: "demo", url: "#" },
    ],
  },
  {
    title: "Case Study",
    role: "Space reserved for a future detailed case study.",
    year: "2025",
    links: [
      { type: "github", url: "https://github.com" },
      { type: "demo", url: "#" },
    ],
  },
  {
    title: "More soon",
    role: "Placeholder ready for new work as your portfolio grows.",
    year: "2026",
  },
];

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <Section
      id="projects"
      eyebrow={t("sections.projects.eyebrow")}
      title={t("sections.projects.title")}
      subtitle={t("sections.projects.subtitle")}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            role={project.role}
            year={project.year}
            links={project.links}
          />
        ))}
      </div>
    </Section>
  );
}
