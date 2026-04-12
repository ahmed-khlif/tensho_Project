"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { t } = useTranslation('common')

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex items-center justify-center min-h-[80vh] px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-brand-red mb-4">500</h1>
            <h2 className="text-3xl font-bold text-text-light mb-4">
              {t('error.500.title', 'Something went wrong')}
            </h2>
            <p className="text-lg text-text-muted mb-8">
              {t('error.500.description', 'We encountered an error. Please try again.')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton
              onClick={reset}
              className="font-semibold"
            >
              {t('error.tryAgain', 'Try Again')}
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