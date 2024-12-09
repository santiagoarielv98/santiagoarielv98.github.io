import Link from "next/link";

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
