"use client"

import { Navbar } from "@/components/layout/navbar"
import { LeadershipSection } from "@/components/sections/leadership-section"
import { AffiliationSection } from "@/components/sections/affiliation-section"
import { MembershipSection } from "@/components/sections/membership-section"
import { Footer } from "@/components/layout/footer"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { BackToTop } from "@/components/layout/back-to-top"
import { motion } from "framer-motion"

export default function LeadershipPage() {
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
              Leadership <span className="text-brand-gold">Team</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-muted text-lg max-w-2xl mx-auto"
            >
              Meet the visionary leaders guiding Tensho International Sports Academy toward excellence in martial arts education and certification worldwide.
            </motion.p>
          </div>
        </div>
      </section>

      <LeadershipSection />
      <AffiliationSection />
      <MembershipSection />
      <Footer />
      <BackToTop />
    </main>
  )
}