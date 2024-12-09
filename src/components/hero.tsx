"use client";

import { Button } from "@/components/ui/button";
import { me } from "@/globals/info";
import { toast } from "@/hooks/use-toast";
import { Download } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const a11y = useTranslations("accessibility");
  const nav = useTranslations("nav");

  return (
    <section
      className="relative z-0 flex min-h-[90vh] items-center justify-center bg-cover bg-center px-6 py-24 text-center before:absolute before:inset-0 before:z-[-1] before:bg-[url('/assets/img/light.webp')] before:bg-cover before:bg-center before:opacity-30 before:blur-sm before:dark:bg-[url('/assets/img/dark.webp')] before:dark:blur-sm"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto max-w-3xl rounded-lg p-8">
        <h1 id="hero-title" className="mb-4 text-4xl font-bold">
          {t("welcome")}
        </h1>
        <p className="mb-8 text-xl">{t("description")}</p>
        <Button variant="secondary" aria-label={a11y("skipToContent")} asChild>
          <a
            download={me.cv.download}
            href={me.cv.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              toast({
                title: nav("downloadingCV.title"),
                description: nav("downloadingCV.description"),
              });
            }}
          >
            <Download className="h-5 w-5" aria-hidden="true" />
            {t("button")}
          </a>
        </Button>
      </div>
    </section>
  );
}
