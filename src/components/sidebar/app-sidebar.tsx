"use client";

import Image from "next/image";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { me } from "@/globals/info";

import AppSidebarContent from "./app-sidebar-content";
import AppSidebarFooterConfig from "./app-sidebar-footer-config";
import AppSidebarFooterContact from "./app-sidebar-footer-contact";

export function AppSidebar() {
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
          <Link href="#" className="text-2xl font-bold">
            {`${me.name} ${me.lastName}`}
          </Link>
        </SidebarHeader>
        <AppSidebarContent />
        <Separator />
        <AppSidebarFooterContact />
        <Separator />
        <AppSidebarFooterConfig />
      </Sidebar>
      <SidebarTrigger className="fixed left-4 top-4 z-50 md:hidden" />
    </>
  );
}
