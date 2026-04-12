import type React from "react"
import type { Metadata, Viewport } from "next"
import { Oswald, Inter } from "next/font/google"
import Script from "next/script"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { ErrorBoundary } from "@/components/layout/error-boundary"
import { MagneticCursor } from "@/components/animations/magnetic-cursor"
import { ScrollProgress } from "@/components/layout/scroll-progress"
import { FloatingActionButton } from "@/components/animations/floating-action-button"
import { CookieConsent } from "@/components/common/cookie-consent"
import { I18nProvider } from "@/components/common/i18n-provider"
import { PWARegister } from "@/components/common/pwa-register"
// @ts-ignore
import "./globals.css"

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://tenshoacademy.com"),
  title: "Tensho International Sports Academy | Martial Arts Excellence",
  description:
    "The global standard for martial arts excellence, certification, and dojo management. Join our network of academies worldwide.",
  keywords: ["martial arts", "academy", "certification", "dojo", "training"],
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: 'website',
    url: 'https://tenshoacademy.com',
    title: 'Tensho International Sports Academy | Martial Arts Excellence',
    description: 'The global standard for martial arts excellence, certification, and dojo management. Join our network of academies worldwide.',
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Tensho International Sports Academy",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tensho International Sports Academy | Martial Arts Excellence',
    description: 'The global standard for martial arts excellence, certification, and dojo management. Join our network of academies worldwide.',
    images: ['/logo.png'],
  },
}

export const viewport: Viewport = {
  themeColor: "#111111",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`${oswald.variable} ${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <I18nProvider>
            <ErrorBoundary>
              <PWARegister />
              <Script
                id="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    name: "Tensho International Sports Academy",
                    url: "https://tenshoacademy.com",
                    logo: "https://tenshoacademy.com/logo.png",
                    description: "The global standard for martial arts excellence, certification, and dojo management.",
                    sameAs: [
                      "https://github.com/ahmedKhlif/tensho_Project"
                    ]
                  }),
                }}
              />
              <MagneticCursor />
              <ScrollProgress />
              {children}
              <FloatingActionButton />
              <CookieConsent />
            </ErrorBoundary>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
