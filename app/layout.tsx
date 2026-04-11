import type React from "react"
import type { Metadata, Viewport } from "next"
import { Oswald, Inter } from "next/font/google"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { ErrorBoundary } from "@/components/layout/error-boundary"
import { MagneticCursor } from "@/components/animations/magnetic-cursor"
import { ScrollProgress } from "@/components/layout/scroll-progress"
import { FloatingActionButton } from "@/components/animations/floating-action-button"
import { CookieConsent } from "@/components/common/cookie-consent"
import "./globals.css"
// import "../lib/i18n" // Temporarily disabled due to React 19 compatibility

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
  title: "Tensho International Sports Academy | Martial Arts Excellence",
  description:
    "The global standard for martial arts excellence, certification, and dojo management. Join our network of academies worldwide.",
  keywords: ["martial arts", "academy", "certification", "dojo", "training"],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-dark-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-light-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/icon.svg",
    apple: "/apple-icon.png",
  },
  openGraph: {
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Tensho International Sports Academy",
      },
    ],
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${oswald.variable} ${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
        >
          <ErrorBoundary>
            <MagneticCursor />
            <ScrollProgress />
            {children}
            <FloatingActionButton />
            <CookieConsent />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}
