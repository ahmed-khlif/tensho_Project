"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Medal, Instagram, Facebook } from "lucide-react"
import { TiltCard } from "@/components/tilt-card"

const masters = [
  {
    name: "Grand Master Hiroshi Tanaka",
    title: "Chief Instructor",
    rank: "10th Dan Black Belt",
    specialization: "Traditional Karate",
    experience: "45+ years",
    image: "/martial-arts-grand-master-portrait-professional.jpg",
    achievements: ["Olympic Coach 1996-2004", "World Champion 1978", "Hall of Fame Inductee"],
  },
  {
    name: "Master Sarah Chen",
    title: "Head of Self-Defense",
    rank: "8th Dan Black Belt",
    specialization: "Mixed Martial Arts",
    experience: "32+ years",
    image: "/martial-arts-master-sensei-portrait-male.jpg",
    achievements: ["UFC Trainer", "International Judge", "Best Coach Award 2022"],
  },
  {
    name: "Sensei Marcus Rodriguez",
    title: "Competition Coach",
    rank: "9th Dan Black Belt",
    specialization: "Brazilian Jiu-Jitsu",
    experience: "38+ years",
    image: "/martial-arts-senior-master-certificate.jpg",
    achievements: ["IBJJF World Champion", "Black Belt Hall of Fame", "Author: 'The Way of Balance'"],
  },
  {
    name: "Grand Master Li Wei",
    title: "Master Instructor",
    rank: "10th Dan Black Belt",
    specialization: "Wushu & Kung Fu",
    experience: "50+ years",
    image: "/martial-arts-master-portrait-professional.jpg",
    achievements: ["Chinese National Team Coach", "UNESCO Martial Arts Ambassador", "Lifetime Achievement Award"],
  },
]

export function MastersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-4 bg-brand-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-brand-red/10 text-brand-red text-sm font-medium mb-4">
            Expert Guidance
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase text-text-light mb-4">
            Meet Our <span className="text-brand-red">Masters</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Learn from world-class instructors with decades of experience and proven track records.
          </p>
        </motion.div>

        {/* Masters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {masters.map((master, index) => (
            <motion.div
              key={master.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TiltCard className="h-full group">
                <div className="relative rounded-2xl overflow-hidden bg-brand-dark-grey border border-white/5 hover:border-brand-red/30 transition-all duration-300 h-full">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={master.image || "/placeholder.svg"}
                    alt={master.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />

                  {/* Rank Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-brand-gold/90 text-brand-black text-xs font-bold">
                    {master.rank.split(' ')[0]}
                  </div>

                  {/* Social Icons */}
                  <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href="#"
                      className="w-8 h-8 rounded-full bg-brand-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-brand-red transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href="#"
                      className="w-8 h-8 rounded-full bg-brand-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-brand-red transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-serif text-xl font-bold text-text-light mb-1">{master.name}</h3>
                  <p className="text-brand-red text-sm font-medium mb-1">{master.title}</p>
                  <p className="text-text-muted text-xs mb-3">
                    {master.specialization} • {master.experience}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-1">
                    {master.achievements.slice(0, 2).map((achievement) => (
                      <div key={achievement} className="flex items-center gap-2 text-xs text-text-muted">
                        <Medal className="w-3 h-3 text-brand-gold" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}