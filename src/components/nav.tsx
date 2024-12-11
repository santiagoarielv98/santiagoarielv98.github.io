"use client";

import { setUserLocale } from "@/lib/locale";
import {
  FaBriefcase,
  FaCode,
  FaFileDownload,
  FaFileAlt,
  FaHome,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { contactInfo } from "@/globals/contact";
import { me } from "@/globals/info";

import { useToast } from "@/hooks/use-toast";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";

const navItems = [
  { name: "home", href: "/#hero", icon: FaHome },
  { name: "about", href: "/#about", icon: FaUser },
  { name: "skills", href: "/#skills", icon: FaCode },
  { name: "resume", href: "/#resume", icon: FaFileAlt },
  { name: "projects", href: "/#projects", icon: FaBriefcase },
  { name: "contact", href: "/#contact", icon: FaEnvelope },
];

export function Nav() {
  const { openMobile, setOpenMobile } = useSidebar();
  const [, startTransition] = React.useTransition();

  const t = useTranslations("nav");
  const a11y = useTranslations("accessibility");

  const { toast } = useToast();
  const [activeSection, setActiveSection] = React.useState("/");
  const locale = useLocale();

  const setLanguage = async (lang: Locale) => {
    startTransition(() => {
      setUserLocale(lang);
    });
  };

  const handleNavItemClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (openMobile) {
      setOpenMobile(false);
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.name);
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return (
            rect.top <= window.innerHeight / 2.5 &&
            rect.bottom >= window.innerHeight / 2.5
          );
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(`/#${currentSection}`);
      } else if (window.scrollY === 0) {
        setActiveSection("/");
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavContent = React.useCallback(
    () => (
      <>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-label={a11y(`ariaLabel.${item.name}`)}
            className={cn(
              "flex h-9 items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[active]:text-accent-foreground",
              activeSection === item.href &&
                "bg-accent/50 text-accent-foreground",
            )}
            onClick={() => handleNavItemClick(item.href)}
          >
            <item.icon className="mr-2 h-4 w-4" />
            {t(`sections.${item.name}`)}
          </Link>
        ))}
        <Link
          href={me.cv.href}
          aria-label={t("downloadCV")}
          className="flex h-9 items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          download={me.cv.download}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            toast({
              title: a11y("downloadingCV.title"),
              description: a11y("downloadingCV.description"),
            });
          }}
        >
          <FaFileDownload className="mr-2 h-4 w-4" />
          {t("downloadCV")}
        </Link>
      </>
    ),
    [activeSection, t, a11y, toast, openMobile],
  );

  return (
    <>
      <Sidebar>
        <SidebarHeader className="flex flex-col items-center space-y-4 border-b py-4">
          <Image
            src={me.image.sm}
            width={96}
            height={96}
            alt="Mi Foto"
            className="h-24 w-24 rounded-full"
            priority
          />
          <Link href="/" className="text-2xl font-bold">
            {`${me.name} ${me.lastName}`}
          </Link>
        </SidebarHeader>
        <SidebarContent className="px-4 py-6">
          <NavContent />
        </SidebarContent>
        <Separator />
        <SidebarFooter className="py-4">
          <div className="flex justify-center space-x-2">
            {contactInfo.map((item, index) => (
              <Button key={index} variant="ghost" size="icon" asChild>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.icon.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </SidebarFooter>
        <Separator />
        <SidebarFooter className="px-6 py-4">
          <div className="flex w-full items-center justify-between">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="px-2">
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
      </Sidebar>
      <SidebarTrigger className="fixed left-4 top-4 z-50 md:hidden" />
    </>
  );
}
