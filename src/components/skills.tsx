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
    <section id="skills" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{t("title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <category.icon className="h-6 w-6 text-primary" />
                  <CardTitle>{category.title}</CardTitle>
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
                    >
                      <span className="flex items-center justify-center bg-primary text-primary-foreground rounded-full p-1 w-5 h-5">
                        <skill.icon className="h-3 w-3" />
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
