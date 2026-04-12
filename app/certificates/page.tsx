"use client"

import { Navbar } from "@/components/layout/navbar"
import { CertificateGallerySection } from "@/components/sections/certificate-gallery-section"
import { VerificationSection } from "@/components/sections/verification-section"
import { Footer } from "@/components/layout/footer"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { BackToTop } from "@/components/layout/back-to-top"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

export default function CertificatesPage() {
  const { t } = useTranslation("common")

  return (
    <main className="min-h-screen bg-brand-black">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-brand-black to-brand-dark-grey">
        <div className="max-w-6xl mx-auto">
          <Breadcrumb />
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl sm:text-6xl font-bold uppercase text-text-light mb-6"
            >
              {t("pages.certificates.title")} <span className="text-brand-gold">{t("pages.certificates.titleHighlight")}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-muted text-lg max-w-2xl mx-auto"
            >
              {t("pages.certificates.subtitle")}
            </motion.p>
          </div>
        </div>
      </section>

      <CertificateGallerySection />
      <VerificationSection />
      <Footer />
      <BackToTop />
    </main>
  )
}
