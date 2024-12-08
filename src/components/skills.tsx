import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Cloud } from "lucide-react";
import { useTranslations } from "next-intl";

type Skill = {
  name: string;
  icon: React.ElementType;
};

type SkillCategory = {
  title: string;
  description: string;
  icon: React.ElementType;
  skills: Skill[];
};

export default function Skills() {
  const t = useTranslations("skills");
  const a11y = useTranslations("accessibility");
  const skillsData: SkillCategory[] = [
    {
      title: t("categories.frontend.title"),
      description: t("categories.frontend.description"),
      icon: Code,
      skills: [
        { name: "React", icon: Code },
        { name: "Next.js", icon: Code },
        { name: "Tailwind CSS", icon: Code },
        { name: "TypeScript", icon: Code },
      ],
    },
    {
      title: t("categories.backend.title"),
      description: t("categories.backend.description"),
      icon: Server,
      skills: [
        { name: "Node.js", icon: Server },
        { name: "Express", icon: Server },
        { name: "MongoDB", icon: Server },
        { name: "PostgreSQL", icon: Server },
      ],
    },
    {
      title: t("categories.cloud.title"),
      description: t("categories.cloud.description"),
      icon: Cloud,
      skills: [
        { name: "AWS", icon: Cloud },
        { name: "Docker", icon: Cloud },
        { name: "Kubernetes", icon: Cloud },
        { name: "Vercel", icon: Cloud },
      ],
    },
  ];

  return (
    <section id="skills" className="px-6 py-16" aria-labelledby="skills-title">
      <div className="mx-auto max-w-6xl">
        <h2 id="skills-title" className="mb-8 text-center text-3xl font-bold">
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <category.icon
                    className="h-6 w-6 text-primary"
                    aria-hidden="true"
                  />
                  <CardTitle
                    aria-label={a11y(
                      `ariaLabel.${category.title.toLowerCase()}`,
                    )}
                  >
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="flex items-center gap-1 px-2 py-1"
                      aria-label={skill.name}
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary p-1 text-primary-foreground">
                        <skill.icon className="h-3 w-3" aria-hidden="true" />
                      </span>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
