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
import { FaExternalLinkAlt } from "react-icons/fa";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "./ui/badge";

export default function Projects() {
  const t = useTranslations("projects");
  const a11y = useTranslations("accessibility");

  const projects = useMemo(
    () =>
      Object.entries(projectsList).map(([name, item]) => {
        const title = t(`projectsList.${name}.title`);
        const description = t.rich(`projectsList.${name}.description`, {
          link: (chuncks) => (
            <Link
              href={item.meta!.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={a11y("ariaLabel.demo")}
              className="text-blue-500 hover:underline"
            >
              {chuncks}
            </Link>
          ),
        });
        return (
          <Card
            key={name}
            className="mx-auto flex max-w-sm flex-col overflow-hidden"
          >
            <Image
              src={item.image}
              alt={t(`projectsList.${name}.title`)}
              width={360}
              height={180}
              className="h-48 w-full rounded-t-lg border-b object-cover"
            />
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
                      className="flex items-center gap-2"
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
                    <FaGithub className="mr-2 h-4 w-4" />
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
                    <FaExternalLinkAlt className="mr-2 h-4 w-4" />
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
      className="relative z-10 px-6 py-16"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="projects-title" className="mb-8 text-center text-3xl font-bold">
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {projects}
        </div>
      </div>
    </section>
  );
}
