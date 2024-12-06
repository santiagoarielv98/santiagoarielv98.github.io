'use client'

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Github, Linkedin, Phone, MessageCircle } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Sobre mí", href: "/#about" },
  { name: "Habilidades", href: "/#skills" },
  { name: "Proyectos", href: "/#projects" },
  { name: "Trayectoria", href: "/#resume" },
  { name: "Contacto", href: "/#contact" },
]

const socialItems = [
  { icon: Github, href: "https://github.com/tuusuario" },
  { icon: Linkedin, href: "https://linkedin.com/in/tuusuario" },
  { icon: MessageCircle, href: "https://wa.me/1234567890" },
  { icon: Phone, href: "tel:+1234567890" },
]

export function Nav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  const NavContent = React.useCallback(() => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center text-sm font-medium text-muted-foreground rounded-md hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[active]:text-accent-foreground h-9 px-3 py-2",
            pathname === item.href && "bg-accent/50 text-accent-foreground"
          )}
        >
          {item.name}
        </Link>
      ))}
    </>
  ), [pathname])

  return (
    <>
      {/* Sidebar para pantallas grandes */}
      <Sidebar className="hidden lg:flex">
        <SidebarHeader className="border-b px-6 py-4">
          <Link href="/" className="text-2xl font-bold">
            Mi Portfolio
          </Link>
        </SidebarHeader>
        <SidebarContent className="px-4 py-6">
          <NavContent />
        </SidebarContent>
        <SidebarFooter className="border-t px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              {socialItems.map((item, index) => (
                <Button key={index} variant="ghost" size="icon" asChild>
                  <Link href={item.href} target="_blank" rel="noopener noreferrer">
                    <item.icon className="h-5 w-5" />
                    <span className="sr-only">{item.icon.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </SidebarFooter>
      </Sidebar>

      {/* Menú móvil */}
      <nav className="lg:hidden flex items-center justify-between p-4 bg-background">
        <Link href="/" className="text-2xl font-bold">
          Mi Portfolio
        </Link>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col space-y-4 mt-4">
                <NavContent />
                <div className="flex justify-around mt-6">
                  {socialItems.map((item, index) => (
                    <Button key={index} variant="ghost" size="icon" asChild>
                      <Link href={item.href} target="_blank" rel="noopener noreferrer">
                        <item.icon className="h-5 w-5" />
                        <span className="sr-only">{item.icon.name}</span>
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  )
}

