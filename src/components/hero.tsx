"use client";

import { Button } from "@/components/ui/button";
import { me } from "@/globals/info";
import { toast } from "@/hooks/use-toast";
import { FaFileDownload } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const a11y = useTranslations("accessibility");

  return (
    <div className="relative z-10 border-b-2 bg-background">
      <section
        className="flex min-h-[90vh] items-center justify-center bg-cover bg-center px-6 py-24 text-center before:absolute before:inset-0 before:z-[-1] before:bg-[url('/assets/img/light.webp')] before:bg-cover before:bg-center before:opacity-30 before:blur-sm before:dark:bg-[url('/assets/img/dark.webp')] before:dark:blur-sm"
        aria-labelledby="hero-title"
        aria-label={a11y("ariaLabel.home")}
        id="hero"
      >
        <div className="mx-auto max-w-3xl rounded-lg md:p-8">
          <h1 id="hero-title" className="mb-4 text-4xl font-bold">
            {t("welcome")}
          </h1>
          <p className="mb-8 text-xl">{t("description")}</p>
          <Button variant="outline" aria-label={a11y("downloadCv")} asChild>
            <a
              download={me.cv.download}
              href={me.cv.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                toast({
                  variant: "success",
                  title: a11y("downloadingCV.title"),
                  description: a11y("downloadingCV.description"),
                });
              }}
            >
              <FaFileDownload className="h-5 w-5" aria-hidden="true" />
              {t("button")}
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
