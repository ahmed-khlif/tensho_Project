"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { useTranslation } from 'react-i18next'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex items-center justify-center min-h-[80vh] px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-brand-gold mb-4">404</h1>
            <h2 className="text-3xl font-bold text-text-light mb-4">
              {t('error.404.title', 'Page Not Found')}
            </h2>
            <p className="text-lg text-text-muted mb-8">
              {t('error.404.description', 'The page you are looking for does not exist.')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton
              onClick={() => window.history.back()}
              className="font-semibold"
            >
              {t('error.goBack', 'Go Back')}
            </MagneticButton>
            <MagneticButton
              variant="outline"
              onClick={() => window.location.href = '/'}
              className="border-brand-gold text-brand-gold font-semibold"
            >
              {t('error.goHome', 'Go Home')}
            </MagneticButton>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}