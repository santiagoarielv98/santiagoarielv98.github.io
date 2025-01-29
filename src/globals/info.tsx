export const me = {
  name: "Santiago",
  middleName: "Ariel",
  lastName: "Villanueva",
  image: {
    xs: "/assets/img/profile-120x120.webp",
    sm: "/assets/img/profile-350x350.webp",
  },
  telephone: {
    value: "tel:+542202529223",
    label: "+54 220 252 9223",
  },
  email: {
    value: "mailto:santiagovillanuevaariel@gmail.com",
    label: "santiagovillanuevaariel@gmail.com",
  },
  location: {
    value: "Ituzaingó, Buenos Aires, Argentina",
    label: "Ituzaingó, Buenos Aires, Argentina",
  },
  github: {
    value: "github.com/santiagoarielv98",
    label: "santiagoarielv98",
    href: "https://github.com/santiagoarielv98",
  },
  whatsapp: {
    value: "wa.me/542202529223",
    label: "+54 220 252 9223",
    href: "https://wa.me/542202529223",
  },
  linkedin: {
    value: "linkedin.com/in/santiagoarielv",
    label: "santiagoarielv98",
    href: "https://linkedin.com/in/santiagoarielv/",
  },
  website: {
    old: {
      value: "https://santiagoarielv98.github.io/",
      label: "santiagoarielv98.github.io",
    },
    new: {
      value: "https://santiagoarielv98.vercel.app/",
      label: "santiagoarielv98.vercel.app",
    },
  },
  cv: {
    href: "/assets/docs/SantiagoArielVillanuevaResume.pdf",
    label: "Santiago Ariel Villanueva Resume",
    download: "SantiagoArielVillanuevaResume.pdf",
  },
};

export interface Project {
  repo?: string;
  demo?: string;
  image: string;
  techs: string[];
  meta?: Record<string, string>;
}

export const projectsList: Record<string, Project> = {
  mimap: {
    demo: "https://red.miituzaingo.gov.ar/mimap/",
    image: "/assets/img/projects/mimap.webp",
    techs: ["laravel", "react", "leaflet", "inertia"],
  },
  svblogs: {
    repo: "https://github.com/santiagoarielv98/sv-blogs",
    image: "/assets/img/projects/sv-blogs.webp",
    demo: "https://sv-blogs.vercel.app/",
    techs: ["nextjs", "shadcn", "prisma"],
  },
  gestiontarea: {
    repo: "https://github.com/santiagoarielv98/sv-gestion-tarea",
    image: "/assets/img/projects/sv-gestion-tarea.webp",
    demo: "https://sv-gestion-tarea.web.app/",
    techs: ["react", "tailwindcss", "tanstack"],
  },
  gestiontareaapi: {
    repo: "https://github.com/santiagoarielv98/sv-gestion-tarea-api",
    image: "/assets/img/projects/sv-gestion-tarea-api.webp",
    demo: "https://sv-gestion-tarea-api.vercel.app/",
    techs: ["nestjs", "supabase", "swagger"],
  },
  svworld: {
    repo: "https://github.com/santiagoarielv98/sv-country-app",
    image: "/assets/img/projects/sv-country.webp",
    demo: "https://sv-country-app.vercel.app/",
    techs: ["react", "bootstrap", "axios"],
  },
  cocheriaratti: {
    repo: "https://github.com/santiagoarielv98/sv-cocheria-ratti",
    image: "/assets/img/projects/sv-cocheria-ratti.webp",
    demo: "https://santiagoarielv98.github.io/sv-cocheria-ratti/",
    techs: ["html", "bootstrap"],
    meta: {
      href: "https://cocheriaratti.com.ar/",
    },
  },
  solucionesfrontendmentor: {
    repo: "https://github.com/santiagoarielv98/sv-frontmentor-solutions",
    image: "/assets/img/projects/sv-frontendmentor.webp",
    demo: "https://santiagoarielv98.github.io/sv-frontmentor-solutions/",
    techs: ["html", "tailwindcss", "javascript"],
  },
};
