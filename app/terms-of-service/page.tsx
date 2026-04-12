'use client'

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { useTranslation } from 'react-i18next'

export default function TermsOfService() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-text-light mb-8">
            {t('terms.title', 'Terms of Service')}
          </h1>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-text-muted mb-6">
              {t('terms.lastUpdated', 'Last updated: {{date}}', { date: new Date().toLocaleDateString() })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-light mb-4">
                {t('terms.acceptance.title', 'Acceptance of Terms')}
              </h2>
              <p className="text-text-muted">
                {t('terms.acceptance.content', 'By accessing and using Tensho International Sports Academy services, you accept and agree to be bound by the terms and provision of this agreement.')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-light mb-4">
                {t('terms.services.title', 'Services')}
              </h2>
              <p className="text-text-muted">
                {t('terms.services.content', 'We provide martial arts training, certification, and dojo management services. All services are subject to availability and our discretion.')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-light mb-4">
                {t('terms.userConduct.title', 'User Conduct')}
              </h2>
              <p className="text-text-muted mb-4">
                {t('terms.userConduct.content', 'Users agree to:')}
              </p>
              <ul className="text-text-muted list-disc list-inside space-y-2">
                <li>{t('terms.userConduct.1', 'Respect instructors and fellow students')}</li>
                <li>{t('terms.userConduct.2', 'Maintain dojo etiquette and safety protocols')}</li>
                <li>{t('terms.userConduct.3', 'Provide accurate information during registration')}</li>
                <li>{t('terms.userConduct.4', 'Not engage in disruptive or harmful behavior')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-light mb-4">
                {t('terms.membership.title', 'Membership and Fees')}
              </h2>
              <p className="text-text-muted">
                {t('terms.membership.content', 'Membership fees are non-refundable except as required by law. We reserve the right to modify pricing with advance notice.')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-light mb-4">
                {t('terms.disclaimer.title', 'Disclaimer')}
              </h2>
              <p className="text-text-muted">
                {t('terms.disclaimer.content', 'Martial arts training involves physical activity and inherent risks. Participants assume all risks associated with training.')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-light mb-4">
                {t('terms.contact.title', 'Contact Information')}
              </h2>
              <p className="text-text-muted">
                {t('terms.contact.content', 'For questions about these terms, please contact us at legal@tenshoacademy.com.')}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}