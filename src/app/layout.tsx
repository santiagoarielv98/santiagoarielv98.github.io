import { Footer } from "@/components/footer"; // Import the Footer component
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Roboto } from "next/font/google";

import "./globals.css";

const roboto = Roboto({ weight: "400", subsets: ["latin-ext"] });

import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { getTranslations } from "next-intl/server";
import { ThemeProvider } from "./provider";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title: t("openGraphTitle"),
      description: t("openGraphDescription"),
      images: [{ url: "/hello-world.webp" }],
      url: "https://santiagoarielv98.vercel.app/",
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      siteName: "SV Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: [{ url: "/hello-world.webp" }],
      creator: "@santiagoarielv98",
    },
    robots: "index, follow",
    alternates: {
      canonical: "https://santiagoarielv98.vercel.app/",
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <GoogleAnalytics gaId="G-JKNJEKCSQH" />
      </head>
      <body className={roboto.className}>
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
                  <AppSidebar />
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
