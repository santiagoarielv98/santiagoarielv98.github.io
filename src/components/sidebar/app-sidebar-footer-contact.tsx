"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SidebarFooter } from "@/components/ui/sidebar";
import { contactInfo } from "@/globals/contact";

const AppSidebarFooterContact = () => {
  return (
    <SidebarFooter className="py-4">
      <div className="flex justify-center space-x-2">
        {contactInfo.map((item, index) => {
          const Item = item.icon;
          return (
            <Button key={index} variant="ghost" size="icon" asChild>
              <Link href={item.href} target="_blank" rel="noopener noreferrer">
                <Item className="h-5 w-5" />
                <span className="sr-only">{item.icon.name}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </SidebarFooter>
  );
};

export default AppSidebarFooterContact;
