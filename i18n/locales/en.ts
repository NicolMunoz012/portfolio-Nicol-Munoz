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
    visitGithub: "Visit my GitHub",
    imagePlaceholder: "Image",
    items: [
      {
        title: "Project Title",
        description: "Personal concept focused on cinematic visuals and soft interactive details.",
        year: "2025",
      },
      {
        title: "Case Study",
        description: "Space reserved for a future detailed case study.",
        year: "2025",
      },
      {
        title: "More soon",
        description: "Placeholder ready for new work as your portfolio grows.",
        year: "2026",
      },
    ],
  },
  about: {
    bio1: "I'm Nicol Juliet Muñoz Ome, a Software Engineering student with a great curiosity to learn and explore different areas of technological development. I'm motivated by the idea that technology can generate a positive impact on people, so I enjoy working on projects that bring real value and solutions.",
    bio2: "Outside the world of development, I enjoy activities that also feed my creativity and curiosity, like reading, listening to music and learning about history through podcasts and videos. I also like to crochet, walk outdoors and spend time with dogs.",
    bio3: "I also actively participate in my Christian church as part of the dance group, an experience that has allowed me to strengthen skills like discipline, expression and teamwork.",
    recommendations: {
      playlist: "Fav Playlist",
      books: "Fav Books",
      podcast: "Fav Podcast",
    },
  },
  skills: {
    description: "Tools and technologies I feel most comfortable with in my current projects.",
  },
  experience: {
    academic: [
      {
        period: "20XX — Present",
        title: "Software Engineering",
        place: "University Name",
        description: "Short description of your degree and focus.",
      },
    ],
    work: [
      {
        period: "20XX — 20XX",
        title: "Job Title",
        place: "Company Name",
        description: "Brief description of your role.",
      },
    ],
  },
  testimonials: {
    items: [
      {
        quote: "Working with Nicol was a great experience. Clean design and attention to detail.",
        author: "— Name",
        role: "Role",
      },
      {
        quote: "Professional, creative and committed to the project. Highly recommend.",
        author: "— Name",
        role: "Role",
      },
    ],
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
      title: "About Me",
      subtitle: "A young designer and developer crafting cinematic digital experiences.",
    },
    projects: {
      title: "My Projects",
      subtitle: "Selected work that reflects my style and growth.",
    },
    skills: {
      title: "Tech Stack",
      subtitle: "Tools and disciplines that shape my creative process.",
    },
    contact: {
      title: "Contact",
      subtitle: "Let's connect and create something beautiful.",
    },
    testimonials: {
      title: "Testimonials",
      subtitle: "What others say about working with me.",
    },
    experience: {
      title: "Academic & Work Experience",
      subtitle: "Education and professional path.",
      academic: "Academic",
      work: "Professional",
    },
  },
  footer: {
    rights: "All rights reserved.",
    madeWith: "Made with",
    backToTop: "Back to top",
  },
} as const;

export type EnTranslations = typeof enTranslations;
