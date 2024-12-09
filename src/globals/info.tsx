import GitHubIcon from "@/components/icons/GitHubIcon";
import LInkedlnIcon from "@/components/icons/LInkedlnIcon";
import WhatsappIcon from "@/components/icons/WhatsappIcon";
import { Mail, Phone, Code, Server, Cloud } from "lucide-react";
// 02202 52-9223

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
    value: "linkedin.com/in/santiagoarielv98",
    label: "santiagoarielv98",
    href: "https://linkedin.com/in/santiagoarielv98",
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
};

export const contactInfo = [
  {
    icon: GitHubIcon,
    label: "ariaLabel.github",
    value: me.github.label,
    href: me.github.href,
  },
  {
    icon: LInkedlnIcon,
    label: "ariaLabel.linkedin",
    value: me.linkedin.label,
    href: me.linkedin.href,
  },
  {
    icon: WhatsappIcon,
    label: "ariaLabel.whatsapp",
    value: me.whatsapp.label,
    href: me.whatsapp.href,
  },
  {
    icon: Phone,
    label: "ariaLabel.phone",
    value: me.telephone.label,
    href: me.telephone.value,
  },
  {
    icon: Mail,
    label: "ariaLabel.email",
    value: me.email.label,
    href: me.email.value,
  },
];

export interface Project {
  repo?: string;
  demo?: string;
  image: string;
  techs: string[];
}

export const projectsList: Record<string, Project> = {
  mimap: {
    demo: "https://mimap.sharktech.com.ar/",
    image: "/assets/img/projects/mimap.webp",
    techs: ["laravel", "react", "leaflet", "inertia"],
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
  },
  solucionesfrontendmentor: {
    repo: "https://github.com/santiagoarielv98/sv-frontmentor-solutions",
    image: "/assets/img/projects/sv-frontendmentor.webp",
    demo: "https://santiagoarielv98.github.io/sv-frontmentor-solutions/",
    techs: ["html", "tailwindcss", "javascript"],
  },
};

export const skillsList = {
  frontend: {
    icon: Code,
    skills: [
      "typescript",
      "react",
      "redux",
      "mui",
      "sass",
      "nextjs",
      "angular",
      "figma",
      "html",
      "tailwindcss",
      "bootstrap",
      "inertia",
      "leaflet",
      "tanstack",
      "javascript",
    ],
  },
  backend: {
    icon: Server,
    skills: [
      "java",
      "spring",
      "nestjs",
      "firebase",
      "aws",
      "docker",
      "mongodb",
      "mysql",
      "postgresql",
      "gcp",
      "laravel",
      "supabase",
      "swagger",
      "axios",
    ],
  },
  cloud: {
    icon: Cloud,
    skills: ["aws", "gcp", "firebase", "supabase", "docker"],
  },
};
