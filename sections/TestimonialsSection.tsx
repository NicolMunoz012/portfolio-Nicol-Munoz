'use client';

import { Section } from "../components/ui/Section";
import { useLanguage } from "../context/LanguageContext";

type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
};

function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <blockquote className="flex flex-col gap-3 rounded-2xl border border-border/70 bg-surface/60 p-4 text-sm shadow-sm">
      <p className="text-pretty text-muted-foreground">&ldquo;{quote}&rdquo;</p>
      <footer className="flex flex-col gap-0.5">
        <cite className="not-italic font-semibold text-foreground">{author}</cite>
        <span className="text-[11px] text-muted">{role}</span>
      </footer>
    </blockquote>
  );
}

const TESTIMONIALS: TestimonialCardProps[] = [
  {
    quote:
      "Working with Nicol was a great experience. Clean design and attention to detail.",
    author: "— Name",
    role: "Role",
  },
  {
    quote:
      "Professional, creative and committed to the project. Highly recommend.",
    author: "— Name",
    role: "Role",
  },
];

export function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <Section
      id="testimonials"
      eyebrow={t("sections.testimonials.eyebrow")}
      title={t("sections.testimonials.title")}
      subtitle={t("sections.testimonials.subtitle")}
      alignTitle="left"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TESTIMONIALS.map((item, index) => (
          <TestimonialCard key={index} quote={item.quote} author={item.author} role={item.role} />
        ))}
      </div>
    </Section>
  );
}
