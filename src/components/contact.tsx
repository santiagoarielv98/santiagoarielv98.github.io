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
import { Github, Linkedin, Phone, Mail, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslations } from "next-intl";

const contactInfo = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/tuusuario",
    href: "https://github.com/tuusuario",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/tuusuario",
    href: "https://linkedin.com/in/tuusuario",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+1234567890",
    href: "https://wa.me/1234567890",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+1234567890",
    href: "tel:+1234567890",
  },
  {
    icon: Mail,
    label: "Email",
    value: "tu@email.com",
    href: "mailto:tu@email.com",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const t = useTranslations("contact");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí iría la lógica real de envío del formulario
    toast({
      title: t("formSuccessTitle"),
      description: t("formSuccessDescription"),
    });
  };

  return (
    <section id="contact" className="py-16 px-6 bg-muted">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{t("title")}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>{t("contactInfoTitle")}</CardTitle>
              <CardDescription>{t("contactInfoDescription")}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {contactInfo.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}:</span>
                      <span className="font-medium">{item.value}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{t("formTitle")}</CardTitle>
              <CardDescription>{t("formDescription")}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {t("formLabels.name")}
                  </label>
                  <Input
                    id="name"
                    placeholder={t("formLabels.name")}
                    required
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
                  />
                </div>
                <Button type="submit" className="w-full">
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
