import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { techs } from "@/globals/technologies";
import { useTranslations } from "next-intl";

export interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  tags: string[];
  description: string;
}

function TimelineSection({
  title,
  items,
}: {
  title: string;
  items: TimelineItem[];
}) {
  const a11y = useTranslations("accessibility");

  return (
    <div className="mb-8">
      <h3 className="mb-4 text-2xl font-bold" aria-label={title}>
        {title}
      </h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <Card key={index} className="relative z-10">
            <CardHeader className="pb-2">
              <CardTitle aria-label={a11y("ariaLabel.jobTitle")}>
                {item.title}
              </CardTitle>
              <CardDescription aria-label={a11y("ariaLabel.organization")}>
                {item.organization}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary" aria-label={a11y("ariaLabel.period")}>
                {item.period}
              </Badge>
            </CardContent>
            <CardContent>
              {Array.isArray(item.description) ? (
                <ul className="list-inside list-disc">
                  {item.description.map((desc, descIndex) => (
                    <li
                      key={descIndex}
                      aria-label={a11y("ariaLabel.description")}
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
              ) : (
                <p aria-label={a11y("ariaLabel.description")}>
                  {item.description}
                </p>
              )}
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => {
                  const currentTech = tag in techs ? techs[tag] : techs["code"];
                  return (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="flex items-center gap-2"
                    >
                      <currentTech.icon className="h-3 w-3" />
                      {currentTech.name}
                    </Badge>
                  );
                })}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default function Resume() {
  const t = useTranslations("resume");

  const workExperience = t.raw("workExperienceList");
  const education = t.raw("educationList");

  return (
    <section id="resume" className="px-6 py-16" aria-labelledby="resume-title">
      <div className="mx-auto max-w-6xl">
        <h2 id="resume-title" className="mb-8 text-center text-3xl font-bold">
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <TimelineSection title={t("workExperience")} items={workExperience} />
          <TimelineSection title={t("education")} items={education} />
        </div>
      </div>
    </section>
  );
}
