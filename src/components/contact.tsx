"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo } from "@/globals/info";
import { useToast } from "@/hooks/use-toast";
import { ExternalLink, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Contact() {
  const { toast } = useToast();
  const t = useTranslations("contact");
  const a11y = useTranslations("accessibility");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({
      title: t("formSuccessTitle"),
      description: t("formSuccessDescription"),
    });
    event.currentTarget.reset();
  };

  return (
    <section
      id="contact"
      className="bg-muted px-6 py-16"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="contact-title" className="mb-8 text-center text-3xl font-bold">
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Card className="lg:col-span-5">
            <CardHeader>
              <CardTitle>{t("contactInfoTitle")}</CardTitle>
              <CardDescription>{t("contactInfoDescription")}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {contactInfo.map((item, index) => (
                  <li key={index}>
                    <Button asChild variant="ghost" className="flex">
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={a11y(item.label)}
                      >
                        <item.icon className="h-5 w-5" aria-hidden="true" />
                        <span>{a11y(item.label)}:</span>
                        <span className="mr-auto truncate font-medium">
                          {item.value}
                        </span>
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="lg:col-span-7">
            <CardHeader>
              <CardTitle>{t("formTitle")}</CardTitle>
              <CardDescription>{t("formDescription")}</CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                aria-labelledby="contact-form-title"
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {t("formLabels.name")}
                  </label>
                  <Input
                    id="name"
                    placeholder={t("formLabels.name")}
                    required
                    aria-required="true"
                    autoComplete="name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t("formLabels.email")}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t("formLabels.email")}
                    required
                    aria-required="true"
                    autoComplete="email"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {t("formLabels.message")}
                  </label>
                  <Textarea
                    id="message"
                    placeholder={t("formLabels.message")}
                    required
                    aria-required="true"
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="h-5 w-5" aria-hidden="true" />
                  {t("formSubmit")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
