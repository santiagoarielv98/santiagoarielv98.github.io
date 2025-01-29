import {
  FaAws,
  FaBootstrap,
  FaCode,
  FaFigma,
  FaGit,
  FaGitlab,
  FaHtml5,
  FaJava,
  FaLaravel,
  FaReact,
  FaSass,
  FaUsers,
} from "react-icons/fa";
import type { IconType } from "react-icons/lib";
import {
  SiAngular,
  SiAxios,
  SiDocker,
  SiFirebase,
  SiGooglecloud,
  SiGraphql,
  SiInertia,
  SiJavascript,
  SiLeaflet,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiReactquery,
  SiRedux,
  SiSpring,
  SiSupabase,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiPrisma,
  SiShadcnui
} from "react-icons/si";

export interface Tech {
  [key: string]: {
    name: string;
    icon: IconType;
  };
}

export const techs: Tech = {
  typescript: {
    name: "TypeScript",
    icon: SiTypescript,
  },
  react: {
    name: "React",
    icon: FaReact,
  },
  redux: {
    name: "Redux",
    icon: SiRedux,
  },
  mui: {
    name: "MUI Core",
    icon: SiMui,
  },
  sass: {
    name: "SASS",
    icon: FaSass,
  },
  nextjs: {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  angular: {
    name: "Angular",
    icon: SiAngular,
  },
  figma: {
    name: "Figma",
    icon: FaFigma,
  },
  java: {
    name: "Java",
    icon: FaJava,
  },
  spring: {
    name: "Spring Boot",
    icon: SiSpring,
  },
  nestjs: {
    name: "NestJS",
    icon: SiNestjs,
  },
  firebase: {
    name: "Firebase",
    icon: SiFirebase,
  },
  aws: {
    name: "AWS",
    icon: FaAws,
  },
  docker: {
    name: "Docker",
    icon: SiDocker,
  },
  mongodb: {
    name: "MongoDB",
    icon: SiMongodb,
  },
  mysql: {
    name: "MySQL",
    icon: SiMysql,
  },
  postgresql: {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  gcp: {
    name: "Google Cloud",
    icon: SiGooglecloud,
  },
  github: {
    name: "GitHub",
    icon: FaGit,
  },
  gitlab: {
    name: "GitLab",
    icon: FaGitlab,
  },
  laravel: {
    name: "Laravel",
    icon: FaLaravel,
  },
  supabase: {
    name: "Supabase",
    icon: SiSupabase,
  },
  html: {
    name: "HTML",
    icon: FaHtml5,
  },
  tailwindcss: {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  axios: {
    name: "Axios",
    icon: SiAxios,
  },
  bootstrap: {
    name: "Bootstrap",
    icon: FaBootstrap,
  },
  inertia: {
    name: "Inertia",
    icon: SiInertia,
  },
  leaflet: {
    name: "Leaflet",
    icon: SiLeaflet,
  },
  tanstack: {
    name: "TanStack",
    icon: SiReactquery,
  },
  swagger: {
    name: "Swagger",
    icon: SiSwagger,
  },
  javascript: {
    name: "JavaScript",
    icon: SiJavascript,
  },
  code: {
    name: "code",
    icon: FaCode,
  },
  graphql: {
    name: "GraphQL",
    icon: SiGraphql,
  },
  scrum: {
    name: "Scrum",
    icon: FaUsers,
  },
  prisma: {
    name: "Prisma",
    icon: SiPrisma,
  },
  shadcn: {
    name: "shadcn/ui",
    icon: SiShadcnui
  }
};
