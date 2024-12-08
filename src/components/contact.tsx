"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Phone,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Contact() {
  const { toast } = useToast();
  const t = useTranslations("contact");
  const a11y = useTranslations("accessibility");

  const contactInfo = [
    {
      icon: Github,
      label: a11y("ariaLabel.github"),
      value: "github.com/tuusuario",
      href: "https://github.com/tuusuario",
    },
    {
      icon: Linkedin,
      label: a11y("ariaLabel.linkedin"),
      value: "linkedin.com/in/tuusuario",
      href: "https://linkedin.com/in/tuusuario",
    },
    {
      icon: MessageCircle,
      label: a11y("ariaLabel.whatsapp"),
      value: "+1234567890",
      href: "https://wa.me/1234567890",
    },
    {
      icon: Phone,
      label: a11y("ariaLabel.phone"),
      value: "+1234567890",
      href: "tel:+1234567890",
    },
    {
      icon: Mail,
      label: a11y("ariaLabel.email"),
      value: "tu@email.com",
      href: "mailto:tu@email.com",
    },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí iría la lógica real de envío del formulario
    toast({
      title: t("formSuccessTitle"),
      description: t("formSuccessDescription"),
    });
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
                    <Button asChild variant="ghost">
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="space-x-2 text-sm"
                        aria-label={item.label}
                      >
                        <item.icon className="h-5 w-5" aria-hidden="true" />
                        <span>{item.label}:</span>
                        <span className="font-medium">{item.value}</span>
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
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="me  ssage" className="text-sm font-medium">
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
