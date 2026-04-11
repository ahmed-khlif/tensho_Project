"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Globe, QrCode, GraduationCap, Shield } from "lucide-react"

const ecosystemCards = [
  {
    title: "For Students",
    description: "Track your belt progression, attendance records, and training milestones in one place.",
    icon: GraduationCap,
    span: "col-span-2",
    gradient: "from-brand-red/20 to-transparent",
  },
  {
    title: "For Instructors",
    description: "Get accredited and gain global recognition for your expertise.",
    icon: Award,
    span: "col-span-1",
    gradient: "from-brand-gold/20 to-transparent",
  },
  {
    title: "Global Network",
    description: "Connect with dojos across Tunisia and international locations.",
    icon: Globe,
    span: "col-span-1",
    gradient: "from-brand-blue/20 to-transparent",
  },
  {
    title: "Certifications",
    description: "QR code verification for instant credential validation.",
    icon: QrCode,
    span: "col-span-1",
    highlight: true,
    gradient: "from-brand-gold/30 to-transparent",
  },
  {
    title: "Academy Management",
    description: "Complete tools for running your martial arts academy efficiently.",
    icon: Shield,
    span: "col-span-1",
    gradient: "from-brand-red/20 to-transparent",
  },
]

export function EcosystemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section ref={ref} className="py-24 px-4 bg-brand-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase text-text-light mb-4">
            One Platform. <span className="text-brand-red">Global Reach.</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            The Tensho ecosystem empowers students, instructors, and academies worldwide.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {ecosystemCards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className={`group relative ${card.span === "col-span-2" ? "sm:col-span-2 lg:col-span-2" : ""} ${
                card.highlight ? "ring-2 ring-brand-gold/50" : ""
              }`}
            >
              <div
                className={`relative h-full p-6 rounded-2xl bg-brand-dark-grey border border-white/5 overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-brand-red/10`}
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                      card.highlight ? "bg-brand-gold/20 text-brand-gold" : "bg-brand-red/20 text-brand-red"
                    }`}
                  >
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-text-light mb-2">{card.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{card.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
