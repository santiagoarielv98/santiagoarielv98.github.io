import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const a11y = useTranslations("accessibility");
  return (
    <section
      className="flex min-h-[90vh] items-center justify-center bg-cover bg-center px-6 py-24 text-center before:bg-[url('/assets/img/light.webp')] before:bg-cover before:bg-center before:opacity-30 before:absolute before:inset-0 before:z-[-1] before:dark:bg-[url('/assets/img/dark.webp')] relative z-0 before:blur-sm before:dark:blur-sm"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto max-w-3xl rounded-lg p-8">
        <h1 id="hero-title" className="mb-4 text-4xl font-bold">
          {t("welcome")}
        </h1>
        <p className="mb-8 text-xl">{t("description")}</p>
        <Button variant="secondary" aria-label={a11y("skipToContent")}>
          {t("button")}
        </Button>
      </div>
    </section>
  );
}
