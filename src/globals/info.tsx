import GitHubIcon from "@/components/icons/GitHubIcon";
import LInkedlnIcon from "@/components/icons/LInkedlnIcon";
import WhatsappIcon from "@/components/icons/WhatsappIcon";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

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

export const projects = [
  {
    title: "MiMap",
    description:
      "Mapa interactivo de Ituzaingó, que te permite ubicar locales, servicios e industrias",
    demo: "https://mimap.sharktech.com.ar/",
    image: "/assets/img/projects/mimap.webp",
    techs: ["laravel", "react", "leaflet", "inertiajs"],
  },
  {
    title: "Gestion de Tareas",
    description: "Aplicación web para gestionar tareas.",
    link: "https://github.com/santiagoarielv98/sv-gestion-tarea",
    image: "/assets/img/projects/sv-gestion-tarea.webp",
    demo: "https://sv-gestion-tarea.web.app/",
    techs: ["react", "tailwindcss", "tanstack"],
  },
  {
    title: "Gestion de Tareas API",
    description:
      "Documentación de la API de la aplicación de gestión de tareas.",
    link: "https://github.com/santiagoarielv98/sv-gestion-tarea-api",
    image: "/assets/img/projects/sv-gestion-tarea-api.webp",
    demo: "https://sv-gestion-tarea-api.vercel.app/",
    techs: ["nestjs", "supabase", "swagger"],
  },
  {
    title: "SV # World",
    description: "Aplicación web para buscar información de países.",
    link: "https://github.com/santiagoarielv98/sv-country-app",
    image: "/assets/img/projects/sv-country.webp",
    demo: "https://sv-country-app.vercel.app/",
    techs: ["react", "bootstrap", "axios"],
  },
  {
    title: "Cochería Ratti",
    description: (
      <>
        Rediseño de la página web de la{" "}
        <Link href="https://cocheriaratti.com.ar/" target="_blank">
          cocheriaratti.com.ar
        </Link>
      </>
    ),
    link: "https://github.com/santiagoarielv98/sv-cocheria-ratti",
    image: "/assets/img/projects/sv-cocheria-ratti.webp",
    demo: "https://santiagoarielv98.github.io/sv-cocheria-ratti/",
    techs: ["html", "bootstrap", "bootstrap-made"],
  },
  {
    title: "Soluciones Frontend Mentor",
    description: "Soluciones a desafíos de Frontend Mentor.",
    link: "https://github.com/santiagoarielv98/sv-frontmentor-solutions",
    image: "/assets/img/projects/sv-frontendmentor.webp",
    demo: "https://santiagoarielv98.github.io/sv-frontmentor-solutions/",
    techs: ["html", "tailwindcss", "js"],
  },
];

export const projectsList = {
  mimap: {
    repo: "https://github.com/santiagoarielv98/mimap",
    demo: "https://mimap.sharktech.com.ar/",
    image: "/assets/img/projects/mimap.webp",
    techs: ["laravel", "react", "leaflet", "inertiajs"],
  },
  gestiontarea: {
    link: "https://github.com/santiagoarielv98/sv-gestion-tarea",
    image: "/assets/img/projects/sv-gestion-tarea.webp",
    demo: "https://sv-gestion-tarea.web.app/",
    techs: ["react", "tailwindcss", "tanstack"],
  },
  gestiontareaapi: {
    link: "https://github.com/santiagoarielv98/sv-gestion-tarea-api",
    image: "/assets/img/projects/sv-gestion-tarea-api.webp",
    demo: "https://sv-gestion-tarea-api.vercel.app/",
    techs: ["nestjs", "supabase", "swagger"],
  },
  svworld: {
    link: "https://github.com/santiagoarielv98/sv-country-app",
    image: "/assets/img/projects/sv-country.webp",
    demo: "https://sv-country-app.vercel.app/",
    techs: ["react", "bootstrap", "axios"],
  },
  cocheriaratti: {
    link: "https://github.com/santiagoarielv98/sv-cocheria-ratti",
    image: "/assets/img/projects/sv-cocheria-ratti.webp",
    demo: "https://santiagoarielv98.github.io/sv-cocheria-ratti/",
    techs: ["html", "bootstrap", "bootstrap-made"],
  },
  solucionesfrontendmentor: {
    link: "https://github.com/santiagoarielv98/sv-frontmentor-solutions",
    image: "/assets/img/projects/sv-frontendmentor.webp",
    demo: "https://santiagoarielv98.github.io/sv-frontmentor-solutions/",
    techs: ["html", "tailwindcss", "js"],
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

export interface Tool {
  name: string;
  icon: string;
  color: string;
  bgColor?: string;
  textColor?: string;
  inverted?: boolean;
}

// export const frontendTools: Tool[] = [
//   {
//     name: "TypeScript",
//     icon: "typescript",
//     color: "#007ACC",
//   },
//   {
//     name: "React",
//     icon: "react-native",
//     color: "#61DAFB",
//   },
//   {
//     name: "Redux",
//     icon: "redux",
//     color: "#764ABC",
//   },
//   {
//     name: "MUI Core",
//     icon: "material-ui",
//     color: "#0081CB",
//   },
//   {
//     name: "SASS",
//     icon: "sass",
//     color: "#CC6699",
//   },
//   {
//     name: "Next.js",
//     icon: "nextjs",
//     color: "text.primary",
//     inverted: true,
//   },
//   {
//     name: "Angular",
//     icon: "angularjs",
//     color: "#DD0031",
//   },
//   {
//     name: "Figma",
//     icon: "figma",
//     color: "#F24E1E",
//   },
// ];

// export const backendTools: Tool[] = [
//   {
//     name: "Java",
//     icon: "java-coffee-cup-logo",
//     color: "#007396",
//   },
//   {
//     name: "Spring Boot",
//     icon: "spring-logo",
//     color: "#6DB33F",
//   },
//   {
//     name: "NestJS",
//     icon: "nestjs",
//     color: "#E0234E",
//   },
//   {
//     name: "Firebase",
//     icon: "firebase",
//     color: "#FFCA28",
//   },
//   {
//     name: "AWS",
//     icon: "amazon-web-services",
//     color: "#232F3E",
//   },
//   {
//     name: "Docker",
//     icon: "docker",
//     color: "#2496ED",
//   },
//   {
//     name: "MongoDB",
//     icon: "mongodb",
//     color: "#47A248",
//   },
//   {
//     name: "MySQL",
//     icon: "mysql-logo",
//     color: "#4479A1",
//   },
// ];

// export const cloudTools: Tool[] = [
//   {
//     name: "Google Cloud",
//     icon: "google-cloud-platform",
//     color: "#4285F4",
//   },
//   {
//     name: "Git",
//     icon: "git",
//     color: "#F05032",
//   },
//   {
//     name: "GitHub",
//     icon: "github--v1",
//     color: "text.primary",
//   },
//   {
//     name: "GitLab",
//     icon: "gitlab",
//     color: "#FCA326",
//   },
// ];
