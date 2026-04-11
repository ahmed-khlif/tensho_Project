"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Users, Award } from "lucide-react"

const academies = [
  {
    name: "Tunisian Institute of Martial Arts",
    location: "Tunis, Tunisia",
    students: "200+",
    specialization: "Traditional Karate",
  },
  {
    name: "Self-Defense Academy",
    instructor: "Haroun Deriss",
    location: "Sfax, Tunisia",
    students: "150+",
    specialization: "Self-Defense & Combat",
  },
  {
    name: "Tensho Sport Academy",
    location: "Sousse, Tunisia",
    students: "180+",
    specialization: "Mixed Martial Arts",
  },
]

export function AcademiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-4 bg-brand-dark-grey">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase text-text-light mb-4">
            Our <span className="text-brand-gold">Network</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Discover our partner academies across Tunisia and beyond.
          </p>
        </motion.div>

        {/* Academy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {academies.map((academy, index) => (
            <motion.div
              key={academy.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="relative h-full p-6 rounded-2xl bg-brand-black border border-white/5 overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-brand-red/20 group-hover:border-brand-red/30">
                {/* Academy Image Placeholder */}
                <div className="aspect-video rounded-xl bg-gradient-to-br from-brand-dark-grey to-brand-black mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={`/.jpg?height=200&width=350&query=${encodeURIComponent(academy.name + " martial arts dojo")}`}
                    alt={academy.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-semibold text-text-light mb-1">{academy.name}</h3>
                {academy.instructor && <p className="text-brand-gold text-sm mb-2">Led by {academy.instructor}</p>}

                <div className="flex flex-wrap gap-4 mt-4 text-sm">
                  <div className="flex items-center gap-1 text-text-muted">
                    <MapPin className="w-4 h-4" />
                    {academy.location}
                  </div>
                  <div className="flex items-center gap-1 text-text-muted">
                    <Users className="w-4 h-4" />
                    {academy.students}
                  </div>
                </div>

                <div className="mt-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-medium">
                  <Award className="w-3 h-3" />
                  {academy.specialization}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
