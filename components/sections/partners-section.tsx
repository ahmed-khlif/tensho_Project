"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const partners = [
  { name: "Tunisian Institute", initials: "TI" },
  { name: "Tensho Sport", initials: "TS" },
  { name: "Self-Defense Academy", initials: "SD" },
  { name: "World Martial Arts Federation", initials: "WM" },
  { name: "International Karate Council", initials: "IK" },
]

export function PartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-4 bg-brand-black border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-center text-text-muted text-sm uppercase tracking-widest mb-10"
        >
          Trusted By Leading Institutions
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className="flex items-center justify-center w-24 h-16 sm:w-32 sm:h-20 rounded-xl bg-brand-dark-grey/50 border border-white/5 grayscale hover:grayscale-0 transition-all duration-300 group-hover:border-brand-red/30">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-text-muted group-hover:text-brand-red transition-colors">
                  {partner.initials}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
