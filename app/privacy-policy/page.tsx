'use client'

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { useTranslation } from 'react-i18next'

export default function PrivacyPolicy() {
  const { t, i18n } = useTranslation('common')

  // Debug logging
  console.log('Current language:', i18n.language)
  console.log('Privacy title:', t('privacy.title'))
  console.log('Available languages:', i18n.languages)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-text-light mb-8">
            {t('privacy.title')}
          </h1>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-text-muted mb-6">
              {t('privacy.lastUpdated', { date: new Date().toLocaleDateString() })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-light mb-4">
                {t('privacy.introduction.title')}
              </h2>
              <p className="text-text-muted">
                {t('privacy.introduction.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-light mb-4">
                {t('privacy.collection.title')}
              </h2>
              <h3 className="text-xl font-medium text-text-light mb-2">
                {t('privacy.collection.personal.title')}
              </h3>
              <p className="text-text-muted mb-4">
                {t('privacy.collection.personal.content')}
              </p>
              <h3 className="text-xl font-medium text-text-light mb-2">
                {t('privacy.collection.automatic.title')}
              </h3>
              <p className="text-text-muted">
                {t('privacy.collection.automatic.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-light mb-4">
                {t('privacy.use.title')}
              </h2>
              <ul className="text-text-muted list-disc list-inside space-y-2">
                <li>{t('privacy.use.1')}</li>
                <li>{t('privacy.use.2')}</li>
                <li>{t('privacy.use.3')}</li>
                <li>{t('privacy.use.4')}</li>
                <li>{t('privacy.use.5')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-light mb-4">
                {t('privacy.sharing.title')}
              </h2>
              <p className="text-text-muted">
                {t('privacy.sharing.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-light mb-4">
                {t('privacy.security.title')}
              </h2>
              <p className="text-text-muted">
                {t('privacy.security.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-light mb-4">
                {t('privacy.cookies.title')}
              </h2>
              <p className="text-text-muted">
                {t('privacy.cookies.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-light mb-4">
                {t('privacy.rights.title')}
              </h2>
              <p className="text-text-muted mb-4">
                {t('privacy.rights.content')}
              </p>
              <ul className="text-text-muted list-disc list-inside space-y-2">
                <li>{t('privacy.rights.1')}</li>
                <li>{t('privacy.rights.2')}</li>
                <li>{t('privacy.rights.3')}</li>
                <li>{t('privacy.rights.4')}</li>
                <li>{t('privacy.rights.5')}</li>
                <li>{t('privacy.rights.6')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-light mb-4">
                {t('privacy.contact.title')}
              </h2>
              <p className="text-text-muted">
                {t('privacy.contact.content')}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}