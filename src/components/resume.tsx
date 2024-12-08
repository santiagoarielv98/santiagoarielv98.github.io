import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

function TimelineSection({ title, items }: { title: string; items: string[] }) {
  const t = useTranslations("resume");

  return (
    <div className="mb-8">
      <h3 className="mb-4 text-2xl font-bold">{title}</h3>
      <div className="space-y-4">
        {items.map((key, index) => (
          <Card key={index} className="relative">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  {/* <CardTitle className="text-lg">{key.title}</CardTitle> */}
                  <CardTitle>{t(`${key}.title`)}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {t(`${key}.organization`)}
                  </p>
                </div>
                <Badge variant="secondary">{t(`${key}.period`)}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              {/* <p className="mb-2">{key.description}</p> */}
              <p className="mb-2">{t(`${key}.description`)}</p>
              {/* <div className="flex flex-wrap gap-2">
                {key.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline">{tag}</Badge>
                ))}
              </div> */}
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
    <section id="resume" className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-3xl font-bold">{t("title")}</h2>
        <TimelineSection title={t("workExperience")} items={workExperience} />
        <TimelineSection title={t("education")} items={education} />
      </div>
    </section>
  );
}
