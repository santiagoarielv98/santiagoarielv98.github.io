import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillsList } from "@/globals/skills";
import { techs } from "@/globals/technologies";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

export default function Skills() {
  const t = useTranslations("skills");
  const a11y = useTranslations("accessibility");

  const skills = useMemo(
    () =>
      Object.entries(skillsList).map(([key, item]) => {
        const title = t(`categories.${key}.title`);
        const description = t(`categories.${key}.description`);

        return (
          <Card key={key}>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <item.icon
                  className="h-6 w-6 text-primary"
                  aria-hidden="true"
                />
                <CardTitle aria-label={a11y(`ariaLabel.${key}`)}>
                  {title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{description}</p>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => {
                  const currentTech =
                    skill in techs ? techs[skill] : techs["code"];
                  return (
                    <Badge
                      key={skill}
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
          </Card>
        );
      }),
    [a11y, t],
  );

  return (
    <section
      id="skills"
      className="relative z-10 px-6 py-16"
      aria-labelledby="skills-title"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="skills-title" className="mb-8 text-center text-3xl font-bold">
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {skills}
        </div>
      </div>
    </section>
  );
}
