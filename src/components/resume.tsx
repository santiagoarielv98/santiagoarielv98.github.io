import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

function TimelineSection({ title, items }: { title: string; items: string[] }) {
  const t = useTranslations("resume");
  const a11y = useTranslations("accessibility");

  return (
    <div className="mb-8">
      <h3 className="mb-4 text-2xl font-bold" aria-label={title}>
        {title}
      </h3>
      <div className="space-y-4">
        {items.map((key, index) => (
          <Card key={index} className="relative">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle aria-label={a11y("ariaLabel.jobTitle")}>
                    {t(`${key}.title`)}
                  </CardTitle>
                  <p
                    className="text-sm text-muted-foreground"
                    aria-label={a11y("ariaLabel.organization")}
                  >
                    {t(`${key}.organization`)}
                  </p>
                </div>
                <Badge
                  variant="secondary"
                  aria-label={a11y("ariaLabel.period")}
                >
                  {t(`${key}.period`)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-2" aria-label={a11y("ariaLabel.description")}>
                {t(`${key}.description`)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default function Resume() {
  const t = useTranslations("resume");

  const workExperience = ["workExperienceList.job1", "workExperienceList.job2"];
  const education = ["educationList.degree1", "educationList.degree2"];

  return (
    <section id="resume" className="px-6 py-16" aria-labelledby="resume-title">
      <div className="mx-auto max-w-4xl">
        <h2 id="resume-title" className="mb-8 text-center text-3xl font-bold">
          {t("title")}
        </h2>
        <TimelineSection title={t("workExperience")} items={workExperience} />
        <TimelineSection title={t("education")} items={education} />
      </div>
    </section>
  );
}
