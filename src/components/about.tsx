import Image from "next/image";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");
  return (
    <section id="about" className="bg-muted px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full md:mx-0">
            <Image
              src="/next.svg"
              alt="Tu nombre"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="w-full flex-1">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-left">
              {t("title")}
            </h2>
            <p className="mb-6 text-center text-lg md:text-left">
              {t("description")}
            </p>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>{t("phone")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>{t("email")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>{t("location")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-primary" />
                <span>{t("website")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
