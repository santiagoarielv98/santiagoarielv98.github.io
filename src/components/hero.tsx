import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const a11y = useTranslations("accessibility");
  return (
    <section
      className="flex min-h-[90vh] items-center justify-center bg-[url('/next.svg')] bg-cover bg-center px-6 py-24 text-center text-white"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto max-w-3xl rounded-lg bg-black bg-opacity-50 p-8">
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
