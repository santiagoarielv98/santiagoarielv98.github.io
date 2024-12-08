import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const t = useTranslations("projects");
  const a11y = useTranslations("accessibility");
  const keys = ["project1", "project2", "project3"];

  return (
    <section
      id="projects"
      className="px-6 py-16"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="projects-title" className="mb-8 text-center text-3xl font-bold">
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {keys.map((key, index) => (
            <Card key={index} className="flex flex-col overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/next.svg"
                  alt={t(`projectsList.${key}.title`)}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                  sizes="(min-width: 640px) 33.3vw, (min-width: 1024px) 25vw, 50vw"
                />
              </div>
              <CardHeader>
                <CardTitle>{t(`projectsList.${key}.title`)}</CardTitle>
                <CardDescription>
                  {t(`projectsList.${key}.description`)}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4 flex flex-wrap gap-2">
                  {/* {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="flex items-center gap-1">
                      <Code className="h-3 w-3" />
                      {tech}
                    </Badge>
                  ))} */}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={a11y("ariaLabel.github")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    {t("repo")}
                  </Link>
                </Button>
                {/* {project.demo && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={a11y("ariaLabel.demo")}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t('demo')}
                    </Link>
                  </Button>
                )} */}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
