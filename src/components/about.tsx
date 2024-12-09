import Image from "next/image";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import { me } from "@/globals/info";

export default function About() {
  const t = useTranslations("about");
  const a11y = useTranslations("accessibility");
  return (
    <section id="about" className="px-6 py-16" aria-labelledby="about-title">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="relative mx-auto h-48 w-48 lg:col-span-5 lg:h-72 lg:w-72">
            <Image
              className="relative z-10 h-auto w-full rounded-full"
              src={me.image.sm}
              alt="Mi Foto de Perfil"
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
              <div className="flex items-center space-x-2">
                <Phone
                  className="h-5 w-5 text-primary"
                  aria-label={a11y("ariaLabel.phone")}
                />
                <span>{t("phone")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail
                  className="h-5 w-5 text-primary"
                  aria-label={a11y("ariaLabel.email")}
                />
                <span>{t("email")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin
                  className="h-5 w-5 text-primary"
                  aria-label={a11y("ariaLabel.location")}
                />
                <span>{t("location")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe
                  className="h-5 w-5 text-primary"
                  aria-label={a11y("ariaLabel.website")}
                />
                <span>{t("website")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
