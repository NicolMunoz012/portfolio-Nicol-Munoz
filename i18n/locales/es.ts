export const esTranslations = {
  nav: {
    name: "Nicol Muñoz",
    about: "Sobre\u00A0mí",
    projects: "Proyectos",
    testimonials: "Testimonios",
    experience: "Experiencia",
    contact: "Contacto",
    settings: "Configuración",
  },
  hero: {
    eyebrow: "Portafolio",
    greeting: "¡Hola! soy",
    name: "Nicol Muñoz",
    subtitle:
      "Estudiante de Ingeniería de Software con curiosidad constante por aprender y crear. Disfruto explorar diferentes áreas del desarrollo y construir soluciones tecnológicas que puedan generar un impacto positivo en las personas y en la sociedad.",
    cvButton: "Descargar CV",
    animationLabel: "Área de animación",
    animationPlaceholderTitle: "Reservado",
    animationPlaceholderBody:
      "Espacio para una futura animación o pieza interactiva.",
  },
  projects: {
    code: "Código",
    demo: "Demo",
    github: "GitHub",
    vercel: "Vercel",
    visitGithub: "Visitar mi GitHub",
    imagePlaceholder: "Imagen",
    items: [
      {
        title: "Título del Proyecto",
        description: "Concepto personal enfocado en visuales cinematográficos y detalles interactivos suaves.",
        year: "2025",
      },
      {
        title: "Estudio de Caso",
        description: "Espacio reservado para un futuro estudio de caso detallado.",
        year: "2025",
      },
      {
        title: "Próximamente",
        description: "Tarjeta preparada para nuevos trabajos a medida que el portafolio crece.",
        year: "2026",
      },
    ],
  },
  about: {
    bio1: "Soy Nicol Juliet Muñoz Ome, actualmente estudiante de Ingeniería de Software con una gran curiosidad por aprender y explorar diferentes áreas del desarrollo tecnológico. Me motiva la idea de que la tecnología puede generar un impacto positivo en las personas, por lo que disfruto trabajar en proyectos que aporten valor y soluciones reales.",
    bio2: "Fuera del mundo del desarrollo, disfruto actividades que también alimentan mi creatividad y curiosidad, como leer, escuchar música y aprender sobre historia a través de podcasts y videos. También me gusta tejer a crochet, caminar al aire libre y pasar tiempo con los perros.",
    bio3: "Además, participo activamente en mi iglesia cristiana como parte del grupo de danza, una experiencia que me ha permitido fortalecer habilidades como la disciplina, la expresión y el trabajo en equipo.",
    recommendations: {
      playlist: "Playlist fav",
      books: "Libros fav",
      podcast: "Podcast fav",
    },
  },
  skills: {
    description: "Herramientas y tecnologías con las que me siento más cómoda en mis proyectos actuales.",
  },
  experience: {
    academic: [
      {
        period: "20XX — Presente",
        title: "Ingeniería de Software",
        place: "Nombre de la Universidad",
        description: "Breve descripción de tu carrera y enfoque.",
      },
    ],
    work: [
      {
        period: "20XX — 20XX",
        title: "Cargo",
        place: "Nombre de la Empresa",
        description: "Breve descripción de tu rol.",
      },
    ],
  },
  testimonials: {
    items: [
      {
        quote: "Trabajar con Nicol fue una gran experiencia. Diseño limpio y atención al detalle.",
        author: "— Nombre",
        role: "Rol",
      },
      {
        quote: "Profesional, creativa y comprometida con el proyecto. La recomiendo mucho.",
        author: "— Nombre",
        role: "Rol",
      },
    ],
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
      title: "Sobre mí",
      subtitle: "Una joven diseñadora y desarrolladora creando experiencias digitales cinematográficas.",
    },
    projects: {
      title: "Mis Proyectos",
      subtitle: "Trabajo seleccionado que refleja mi estilo y crecimiento.",
    },
    skills: {
      title: "Stack tecnológico",
      subtitle: "Herramientas y disciplinas que moldean mi proceso creativo.",
    },
    contact: {
      title: "Contacto",
      subtitle: "Conectemos y creemos algo hermoso.",
    },
    testimonials: {
      title: "Testimonios",
      subtitle: "Lo que otros dicen sobre trabajar conmigo.",
    },
    experience: {
      title: "Experiencia académica y laboral",
      subtitle: "Breve descripción sobre las experiencias vividas y el aprendizaje.",
      academic: "Académica",
      work: "Profesional",
    },
  },
  footer: {
    rights: "Todos los derechos reservados.",
    madeWith: "Hecho con",
    backToTop: "Volver arriba",
  },
} as const;

export type EsTranslations = typeof esTranslations;
