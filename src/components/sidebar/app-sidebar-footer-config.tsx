"use client";

import React from "react";

import { setUserLocale } from "@/lib/locale";
import Image from "next/image";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarFooter } from "@/components/ui/sidebar";

import { useToast } from "@/hooks/use-toast";
import type { Locale } from "@/i18n/config";
import { useLocale, useTranslations } from "next-intl";

const AppSidebarFooterConfig = () => {
  const a11y = useTranslations("accessibility");
  const [isPending, startTransition] = React.useTransition();

  const { toast } = useToast();
  const locale = useLocale();

  const setLanguage = async (lang: Locale) => {
    if (lang === locale) return;
    startTransition(() => {
      setUserLocale(lang).then(() => {
        toast({
          variant: "success",
          title: a11y("languageChanged.title"),
          description: a11y("languageChanged.description"),
          duration: 2000,
        });
      });
    });
  };

  return (
    <SidebarFooter className="px-6 py-4">
      <div className="flex w-full items-center justify-between">
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="px-2" disabled={isPending}>
              <Image
                src={`https://flagcdn.com/24x18/${locale === "es" ? "es" : "gb"}.png`}
                alt={locale === "es" ? "Español" : "English"}
                width={24}
                height={18}
              />
              <span className="ml-2">{locale.toUpperCase()}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setLanguage("es")}>
              <Image
                src="https://flagcdn.com/24x18/es.png"
                alt="Español"
                width={24}
                height={18}
              />
              <span className="ml-2">ES</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLanguage("en")}>
              <Image
                src="https://flagcdn.com/24x18/gb.png"
                alt="English"
                width={24}
                height={18}
              />
              <span className="ml-2">EN</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </SidebarFooter>
  );
};

export default AppSidebarFooterConfig;
