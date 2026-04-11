"use client"

import { Navbar } from "@/components/layout/navbar"
import { EventsSection } from "@/components/sections/events-section"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/layout/back-to-top"
import { motion } from "framer-motion"

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-brand-black to-brand-dark-grey">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl sm:text-6xl font-bold uppercase text-text-light mb-6"
          >
            Upcoming <span className="text-brand-gold">Events</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted text-lg max-w-2xl mx-auto"
          >
            Join us for tournaments, seminars, and special training sessions that bring the martial arts community together.
          </motion.p>
        </div>
      </section>

      <EventsSection />
      <Footer />
      <BackToTop />
    </main>
  )
}