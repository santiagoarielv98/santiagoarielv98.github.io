import GitHubIcon from "@/components/icons/GitHubIcon";
import LInkedlnIcon from "@/components/icons/LInkedlnIcon";
import WhatsappIcon from "@/components/icons/WhatsappIcon";
import { Mail, Phone } from "lucide-react";

export const me = {
  name: "Santiago",
  middleName: "Ariel",
  lastName: "Villanueva",
  image: {
    xs: "/assets/img/profile-120x120.webp",
    sm: "/assets/img/profile-350x350.webp",
  },
  telephone: {
    value: "+5491130529223",
    label: "+54 9 11 3052 9223",
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
    value: "santiagoarielv98",
    label: "github.com/santiagoarielv98",
    href: "https://github.com/santiagoarielv98",
  },
  whatsapp: {
    value: "+5491130529223",
    label: "WhatsApp",
    href: "https://wa.me/5491130529223",
  },
  linkedin: {
    value: "linkedin.com/in/santiagoarielv98",
    label: "linkedin.com/in/santiagoarielv98",
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
    value: me.github.value,
    href: me.github.href,
  },
  {
    icon: LInkedlnIcon,
    label: "ariaLabel.linkedin",
    value: me.linkedin.value,
    href: me.linkedin.href,
  },
  {
    icon: WhatsappIcon,
    label: "ariaLabel.whatsapp",
    value: me.whatsapp.value,
    href: me.whatsapp.href,
  },
  {
    icon: Phone,
    label: "ariaLabel.phone",
    value: me.telephone.value,
    href: `tel:${me.telephone.value}`,
  },
  {
    icon: Mail,
    label: "ariaLabel.email",
    value: me.email.value,
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
    techs: ["html", "bootstrap", "bootstrap"],
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
    skills: ["react", "nextjs", "tailwindcss", "typescript"],
  },
  backend: {
    skills: ["nodejs", "express", "mongodb", "postgresql"],
  },
  cloud: {
    skills: ["aws", "docker", "kubernetes", "vercel"],
  },
};
