import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  return (
    <section className="py-24 px-6 text-center bg-[url('/next.svg')] bg-cover bg-center text-white">
      <div className="max-w-3xl mx-auto bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">{t("welcome")}</h1>
        <p className="text-xl mb-8">{t("description")}</p>
        <Button variant="secondary">{t("button")}</Button>
      </div>
    </section>
  );
}
