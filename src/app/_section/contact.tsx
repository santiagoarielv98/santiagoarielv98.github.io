"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { contactInfo } from "@/globals/contact";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ContactForm } from "../../components/contact-form";

export default function Contact() {
  const t = useTranslations("contact");
  const a11y = useTranslations("accessibility");

  return (
    <section
      id="contact"
      className="relative z-10 px-6 py-16"
      aria-labelledby="contact-title"
      aria-label={a11y("ariaLabel.contact")}
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="contact-title" className="mb-8 text-center text-3xl font-bold">
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Card className="z-10 lg:col-span-5">
            <CardHeader>
              <CardTitle>{t("contactInfoTitle")}</CardTitle>
              <CardDescription>{t("contactInfoDescription")}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const ariaLabel = a11y(item.label);
                  return (
                    <li key={index}>
                      <Button asChild variant="ghost" className="flex">
                        <Link
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={ariaLabel}
                        >
                          <Icon className="h-5 w-5" aria-hidden="true" />
                          <span>{ariaLabel}:</span>
                          <span className="mr-auto truncate font-medium">
                            {item.value}
                          </span>
                          <FaExternalLinkAlt
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                        </Link>
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
          <Card className="z-10 lg:col-span-7">
            <CardHeader>
              <CardTitle>{t("formTitle")}</CardTitle>
              <CardDescription>{t("formDescription")}</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
