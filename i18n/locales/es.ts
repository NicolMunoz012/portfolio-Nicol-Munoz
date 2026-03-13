export const esTranslations = {
  nav: {
    name: "Nicol Muñoz",
    about: "Sobre mí",
    projects: "Proyectos",
    testimonials: "Testimonios",
    experience: "Experiencia",
    contact: "Contacto",
    settings: "Configuración",
  },
  hero: {
    eyebrow: "Portafolio",
    title: "¡Hola! soy Nicol",
    subtitle:
      "Estudiante de Ingeniería de Software con curiosidad constante por aprender y crear. Disfruto explorar diferentes áreas del desarrollo y construir soluciones tecnológicas que puedan generar un impacto positivo en las personas y en la sociedad.",
    cvButton: "Descargar CV",
    animationLabel: "Área de animación",
    animationPlaceholderTitle: "Reservado",
    animationPlaceholderBody:
      "Espacio para una futura animación o pieza interactiva.",
  },
  projects: {
    github: "GitHub",
    vercel: "Vercel",
    demo: "Demo",
  },
  settings: {
    title: "Configuración",
    themeLabel: "Tema",
    languageLabel: "Idioma",
    theme: {
      light: "Claro",
      dark: "Oscuro",
    },
    language: {
      en: "Inglés",
      es: "Español",
    },
  },
  sections: {
    about: {
      eyebrow: "Sobre",
      title: "Sobre mí",
      subtitle:
        "Una joven diseñadora y desarrolladora creando experiencias digitales cinematográficas.",
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Proyectos",
      subtitle:
        "Trabajo seleccionado que refleja mi estilo y crecimiento.",
    },
    skills: {
      eyebrow: "Tecnología",
      title: "Stack tecnológico",
      subtitle:
        "Herramientas y disciplinas que moldean mi proceso creativo.",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Contacto",
      subtitle:
        "Conectemos y creemos algo hermoso.",
    },
    testimonials: {
      eyebrow: "Testimonios",
      title: "Testimonios",
      subtitle: "Lo que otros dicen sobre trabajar conmigo.",
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Experiencia académica y laboral",
      subtitle: "Formación y trayectoria profesional.",
      academic: "Académico",
      work: "Laboral",
    },
  },
  footer: {
    rights: "Todos los derechos reservados.",
    madeWith: "Hecho con",
    backToTop: "Volver arriba",
  },
} as const;

export type EsTranslations = typeof esTranslations;

