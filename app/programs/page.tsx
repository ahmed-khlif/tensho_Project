"use client"

import { Navbar } from "@/components/layout/navbar"
import { EcosystemSection } from "@/components/sections/ecosystem-section"
import { ProgramsSection } from "@/components/sections/programs-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { MastersSlider } from "@/components/sections/masters-slider"
import { Footer } from "@/components/layout/footer"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { BackToTop } from "@/components/layout/back-to-top"
import { motion } from "framer-motion"

export default function ProgramsPage() {
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
              Training <span className="text-brand-gold">Programs</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-muted text-lg max-w-2xl mx-auto"
            >
              Discover comprehensive martial arts training programs designed to develop skills, discipline, and character through traditional and modern techniques.
            </motion.p>
          </div>
        </div>
      </section>

      <EcosystemSection />
      <ProgramsSection />
      <HowItWorksSection />
      <MastersSlider />
      <Footer />
      <BackToTop />
    </main>
  )
}