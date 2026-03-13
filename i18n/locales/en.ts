export const enTranslations = {
  nav: {
    name: "Nicol Muñoz",
    about: "About Me",
    projects: "Projects",
    testimonials: "Testimonials",
    experience: "Experience",
    contact: "Contact",
    settings: "Settings",
  },
  hero: {
    eyebrow: "Portfolio",
    title: "Hi there, I'm Nicol",
    subtitle:
      "Software Engineering student with a constant curiosity to learn and create. I enjoy exploring different areas of development and building technological solutions that can have a positive impact on people and society.",
    cvButton: "Download CV",
    animationLabel: "Animation area",
    animationPlaceholderTitle: "Reserved",
    animationPlaceholderBody:
      "Space for a future animation or interactive piece.",
  },
  projects: {
    github: "GitHub",
    vercel: "Vercel",
    demo: "Demo",
  },
  settings: {
    title: "Settings",
    themeLabel: "Theme",
    languageLabel: "Language",
    theme: {
      light: "Light",
      dark: "Dark",
    },
    language: {
      en: "English",
      es: "Spanish",
    },
  },
  sections: {
    about: {
      eyebrow: "About",
      title: "About Me",
      subtitle:
        "A young designer and developer crafting cinematic digital experiences.",
    },
    projects: {
      eyebrow: "Projects",
      title: "Projects",
      subtitle:
        "Selected work that reflects my style and growth.",
    },
    skills: {
      eyebrow: "Stack",
      title: "Tech Stack",
      subtitle:
        "Tools and disciplines that shape my creative process.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact",
      subtitle:
        "Let's connect and create something beautiful.",
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "Testimonials",
      subtitle: "What others say about working with me.",
    },
    experience: {
      eyebrow: "Experience",
      title: "Academic & Work Experience",
      subtitle: "Education and professional path.",
      academic: "Academic",
      work: "Work",
    },
  },
  footer: {
    rights: "All rights reserved.",
    madeWith: "Made with",
    backToTop: "Back to top",
  },
} as const;

export type EnTranslations = typeof enTranslations;
