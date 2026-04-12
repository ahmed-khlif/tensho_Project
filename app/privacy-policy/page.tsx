import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { useTranslation } from 'react-i18next'

export default function PrivacyPolicy() {
  const { t } = useTranslation('common')

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-text-light mb-8">
            {t('privacy.title', 'Privacy Policy')}
          </h1>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-text-muted mb-6">
              {t('privacy.lastUpdated', 'Last updated: {{date}}', { date: new Date().toLocaleDateString() })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-light mb-4">
                {t('privacy.introduction.title', 'Introduction')}
              </h2>
              <p className="text-text-muted">
                {t('privacy.introduction.content', 'Tensho International Sports Academy ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-light mb-4">
                {t('privacy.collection.title', 'Information We Collect')}
              </h2>
              <h3 className="text-xl font-medium text-text-light mb-2">
                {t('privacy.collection.personal.title', 'Personal Information')}
              </h3>
              <p className="text-text-muted mb-4">
                {t('privacy.collection.personal.content', 'We may collect personal information that you provide directly to us, such as your name, email address, phone number, and any other information you choose to provide when registering for our services or contacting us.')}
              </p>
              <h3 className="text-xl font-medium text-text-light mb-2">
                {t('privacy.collection.automatic.title', 'Automatically Collected Information')}
              </h3>
              <p className="text-text-muted">
                {t('privacy.collection.automatic.content', 'We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and browsing behavior. We use cookies and similar technologies to enhance your experience.')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-light mb-4">
                {t('privacy.use.title', 'How We Use Your Information')}
              </h2>
              <ul className="text-text-muted list-disc list-inside space-y-2">
                <li>{t('privacy.use.1', 'To provide and maintain our services')}</li>
                <li>{t('privacy.use.2', 'To communicate with you about our services')}</li>
                <li>{t('privacy.use.3', 'To improve our website and services')}</li>
                <li>{t('privacy.use.4', 'To comply with legal obligations')}</li>
                <li>{t('privacy.use.5', 'To protect our rights and prevent fraud')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-light mb-4">
                {t('privacy.sharing.title', 'Information Sharing')}
              </h2>
              <p className="text-text-muted">
                {t('privacy.sharing.content', 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-light mb-4">
                {t('privacy.security.title', 'Data Security')}
              </h2>
              <p className="text-text-muted">
                {t('privacy.security.content', 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-light mb-4">
                {t('privacy.cookies.title', 'Cookies')}
              </h2>
              <p className="text-text-muted">
                {t('privacy.cookies.content', 'We use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-light mb-4">
                {t('privacy.rights.title', 'Your Rights')}
              </h2>
              <p className="text-text-muted mb-4">
                {t('privacy.rights.content', 'Depending on your location, you may have certain rights regarding your personal information, including:')}
              </p>
              <ul className="text-text-muted list-disc list-inside space-y-2">
                <li>{t('privacy.rights.1', 'Access to your personal information')}</li>
                <li>{t('privacy.rights.2', 'Correction of inaccurate information')}</li>
                <li>{t('privacy.rights.3', 'Deletion of your personal information')}</li>
                <li>{t('privacy.rights.4', 'Restriction of processing')}</li>
                <li>{t('privacy.rights.5', 'Data portability')}</li>
                <li>{t('privacy.rights.6', 'Objection to processing')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-light mb-4">
                {t('privacy.contact.title', 'Contact Us')}
              </h2>
              <p className="text-text-muted">
                {t('privacy.contact.content', 'If you have any questions about this Privacy Policy, please contact us at privacy@tenshoacademy.com.')}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}