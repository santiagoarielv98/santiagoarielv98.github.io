import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  return (
    <section className="bg-[url('/next.svg')] bg-cover bg-center px-6 py-24 text-center text-white">
      <div className="mx-auto max-w-3xl rounded-lg bg-black bg-opacity-50 p-8">
        <h1 className="mb-4 text-4xl font-bold">{t("welcome")}</h1>
        <p className="mb-8 text-xl">{t("description")}</p>
        <Button variant="secondary">{t("button")}</Button>
      </div>
    </section>
  );
}
