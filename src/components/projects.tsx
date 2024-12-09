"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projectsList } from "@/globals/info";
import { techs } from "@/globals/technologies";
import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import GitHubIcon from "./icons/GitHubIcon";
import { Badge } from "./ui/badge";

export default function Projects() {
  const t = useTranslations("projects");
  const a11y = useTranslations("accessibility");

  const projects = useMemo(
    () =>
      Object.entries(projectsList).map(([name, item]) => {
        const title = t(`projectsList.${name}.title`);
        const description = t(`projectsList.${name}.description`);
        return (
          <Card key={name} className="flex flex-col overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={item.image}
                alt={t(`projectsList.${name}.title`)}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
                sizes="(min-width: 640px) 33.3vw, (min-width: 1024px) 25vw, 50vw"
              />
            </div>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {item.techs.map((tech, techIndex) => {
                  const currentTech =
                    tech in techs ? techs[tech] : techs["code"];
                  return (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      <currentTech.icon className="h-3 w-3" />
                      {currentTech.name}
                    </Badge>
                  );
                })}
              </div>
            </CardContent>
            <CardFooter className="mt-auto flex justify-between">
              {item.repo ? (
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href={item.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={a11y("ariaLabel.github")}
                  >
                    <GitHubIcon className="mr-2 h-4 w-4" />
                    {t("repo")}
                  </Link>
                </Button>
              ) : (
                <div />
              )}
              {item.demo && (
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href={item.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={a11y("ariaLabel.demo")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {t("demo")}
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        );
      }),
    [t, a11y],
  );

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
          {projects}
        </div>
      </div>
    </section>
  );
}
