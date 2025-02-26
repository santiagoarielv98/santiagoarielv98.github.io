import Image from "next/image";
import { useTranslations } from "next-intl";
import { me } from "@/globals/info";
import { aboutItems } from "@/globals/about";
import { Button } from "@/components/ui/button";

export default function About() {
  const t = useTranslations("about");
  const a11y = useTranslations("accessibility");
  return (
    <section
      id="about"
      className="relative z-10 px-6 py-16"
      aria-labelledby="about-title"
      aria-label={a11y("ariaLabel.about")}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="relative mx-auto h-48 w-48 lg:col-span-5 lg:h-72 lg:w-72">
            <Image
              className="h-auto w-full rounded-full"
              src={me.image.sm}
              alt={a11y("ariaLabel.profile")}
              priority
              width={350}
              height={350}
            />
          </div>
          <div className="flex w-full flex-col justify-center lg:col-span-7">
            <h2
              id="about-title"
              className="mb-4 text-center text-3xl font-bold lg:text-left"
            >
              {t("title")}
            </h2>
            <p className="mb-6 text-center text-lg md:text-left">
              {t("description")}
            </p>
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
              {aboutItems.map((item, index) => (
                <Button key={index} variant="ghost" className="justify-start">
                  <item.icon
                    className="h-5 w-5 text-primary"
                    aria-label={a11y(item.ariaLabel)}
                  />
                  <span>{t(item.title)}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
