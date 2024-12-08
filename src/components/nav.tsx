'use client'

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Github, Linkedin, Phone, MessageCircle, Home, User, Code, Briefcase, FileText, Mail, Download } from 'lucide-react'
import Image from 'next/image'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useToast } from "@/hooks/use-toast"
import { useIsMobile } from "@/hooks/useIsMobile"

const navItems = [
  { name: "Inicio", href: "/", icon: Home },
  { name: "Sobre mí", href: "/#about", icon: User },
  { name: "Habilidades", href: "/#skills", icon: Code },
  { name: "Proyectos", href: "/#projects", icon: Briefcase },
  { name: "Trayectoria", href: "/#resume", icon: FileText },
  { name: "Contacto", href: "/#contact", icon: Mail },
]

const socialItems = [
  { icon: Github, href: "https://github.com/tuusuario" },
  { icon: Linkedin, href: "https://linkedin.com/in/tuusuario" },
  { icon: MessageCircle, href: "https://wa.me/1234567890" },
  { icon: Phone, href: "tel:+1234567890" },
]

export function Nav() {
  const pathname = usePathname()
  const { toast } = useToast()
  const [activeSection, setActiveSection] = React.useState("/")
  const [language, setLanguage] = React.useState<'es' | 'en'>('es')
  const { open, setOpen } = useSidebar()
  const isMobile = useIsMobile()

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace('/#', ''))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(`/#${currentSection}`)
      } else if (window.scrollY === 0) {
        setActiveSection("/")
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const NavContent = React.useCallback(() => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center text-sm font-medium text-muted-foreground rounded-md hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[active]:text-accent-foreground h-9 px-3 py-2",
            activeSection === item.href && "bg-accent/50 text-accent-foreground"
          )}
        >
          <item.icon className="mr-2 h-4 w-4" />
          {item.name}
        </Link>
      ))}
      <Link
        href="/path-to-your-cv.pdf"
        className="flex items-center text-sm font-medium text-muted-foreground rounded-md hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 h-9 px-3 py-2"
        download
        onClick={(e) => {
          e.preventDefault()
          toast({
            title: "Descargando CV",
            description: "Tu CV se está descargando.",
          })
          // Aquí iría la lógica real de descarga
        }}
      >
        <Download className="mr-2 h-4 w-4" />
        Descargar CV
      </Link>
    </>
  ), [activeSection, toast])

  return (
    <>
      <Sidebar>
        <SidebarHeader className="border-b px-6 py-4">
          <Link href="/" className="text-2xl font-bold">
            {language === 'es' ? 'Mi Portfolio' : 'My Portfolio'}
          </Link>
        </SidebarHeader>
        <SidebarContent className="px-4 py-6">
          <NavContent />
        </SidebarContent>
        <SidebarFooter className="border-t px-6 py-4">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex justify-center space-x-2">
              {socialItems.map((item, index) => (
                <Button key={index} variant="ghost" size="icon" asChild>
                  <Link href={item.href} target="_blank" rel="noopener noreferrer">
                    <item.icon className="h-5 w-5" />
                    <span className="sr-only">{item.icon.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
            <Separator />
            <div className="flex items-center justify-between w-full">
              <ThemeToggle />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="px-2">
                    <Image
                      // src={language === 'es' ? "/es-flag.png" : "/en-flag.png"}
                      // usar imagen de internet
                      src={`https://flagcdn.com/24x18/${language === 'es' ? 'es' : 'gb'}.png`}
                      alt={language === 'es' ? "Español" : "English"}
                      width={24}
                      height={24}
                    />
                    <span className="ml-2">{language.toUpperCase()}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setLanguage('es')}>
                    {/* <Image src="/es-flag.png" alt="Español" width={24} height={24} /> */}
                    <Image src="https://flagcdn.com/24x18/es.png" alt="Español" width={24} height={24} />
                    <span className="ml-2">ES</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('en')}>
                    {/* <Image src="/en-flag.png" alt="English" width={24} height={24} /> */}
                    <Image src="https://flagcdn.com/24x18/gb.png" alt="English" width={24} height={24} />
                    <span className="ml-2">EN</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarTrigger className="fixed top-4 left-4 z-50 md:hidden">
        <Button variant="outline" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SidebarTrigger>
    </>
  )
}

