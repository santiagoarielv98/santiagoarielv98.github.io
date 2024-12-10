import { Nav } from "@/components/nav";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/contexts/LanguageContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Footer } from "@/components/footer"; // Import the Footer component

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  title: "SV ~ Portfolio",
  description:
    "Bienvenido a mi portfolio, aquí podrás encontrar información sobre mi experiencia, proyectos y habilidades.",
  keywords:
    "santiago villanueva, portfolio, frontend developer, web developer, react, javascript, typescript, html, css",
  openGraph: {
    title: "Portafolio de Santiago Villanueva",
    description:
      "Portafolio de Santiago Villanueva, desarrollador full stack especializado en React, Angular, Java y Spring Boot.",
    images: [{ url: "/hello-world.webp" }],
    url: "https://santiagoarielv98.vercel.app/",
    type: "website",
    locale: "es_ES",
    siteName: "SV Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portafolio de Santiago Villanueva",
    description:
      "Portafolio de Santiago Villanueva, desarrollador full stack especializado en React, Angular, Java y Spring Boot.",
    images: [{ url: "/hello-world.webp" }],
    creator: "@santiagoarielv98",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://santiagoarielv98.vercel.app/",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <LanguageProvider>
              <SidebarProvider>
                <div className="flex min-h-screen w-full">
                  <Nav />
                  <div className="flex flex-1 flex-col">
                    <main className="flex-1">{children}</main>
                    <Footer />
                  </div>
                </div>
              </SidebarProvider>
            </LanguageProvider>
          </ThemeProvider>
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
