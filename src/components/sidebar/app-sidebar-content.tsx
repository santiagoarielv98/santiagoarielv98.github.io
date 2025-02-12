"use client";

import Link from "next/link";
import * as React from "react";
import { FaFileDownload } from "react-icons/fa";

import {
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { me } from "@/globals/info";

import { navItems } from "@/globals/nav";
import { useToast } from "@/hooks/use-toast";
import { useTranslations } from "next-intl";

export function AppSidebarContent() {
  const { openMobile, setOpenMobile } = useSidebar();

  const t = useTranslations("nav");
  const a11y = useTranslations("accessibility");

  const { toast } = useToast();
  const [activeSection, setActiveSection] = React.useState("#hero");

  const handleNavItemClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href") || "#hero";

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
      const sections = navItems.map((item) => item.href);
      const currentSection = sections.find((section) => {
        const element = document.querySelector(section);
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
        setActiveSection(currentSection);
      } else if (window.scrollY === 0) {
        setActiveSection("#hero");
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SidebarContent className="px-4 py-6">
      <SidebarMenu>
        {navItems.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton
              asChild
              size="lg"
              isActive={activeSection === item.href}
            >
              <Link href={item.href} onClick={handleNavItemClick}>
                <item.icon />
                <span>{t(`sections.${item.name}`)}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
        {/* download cv */}
        <SidebarMenuItem>
          <SidebarMenuButton asChild size="lg">
            <Link
              href={me.cv.href}
              aria-label={t("downloadCV")}
              download={me.cv.download}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                toast({
                  variant: "success",
                  title: a11y("downloadingCV.title"),
                  description: a11y("downloadingCV.description"),
                });
              }}
            >
              <FaFileDownload className="mr-2 h-4 w-4" />
              {t("downloadCV")}
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarContent>
  );
}

export default AppSidebarContent;
