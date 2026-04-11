"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { UserPlus, Search, GraduationCap, Award, ArrowRight } from "lucide-react"

const steps = [
  {
    step: "01",
    title: "Find Your Dojo",
    description: "Browse our network of certified academies and find the perfect location near you.",
    icon: Search,
  },
  {
    step: "02",
    title: "Register & Enroll",
    description: "Sign up online or visit in person. Choose the program that matches your goals.",
    icon: UserPlus,
  },
  {
    step: "03",
    title: "Train & Progress",
    description: "Learn from certified instructors, track your progress, and advance through the ranks.",
    icon: GraduationCap,
  },
  {
    step: "04",
    title: "Get Certified",
    description: "Earn internationally recognized certifications verified through our secure system.",
    icon: Award,
  },
]

export function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-4 bg-[#F4F6F8]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-brand-red/10 text-brand-red text-sm font-medium mb-4">
            Getting Started
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase text-brand-black mb-4">
            Your Journey <span className="text-brand-red">Begins Here</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Four simple steps to start your martial arts transformation.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-brand-red/20 via-brand-gold/20 to-brand-red/20 -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 h-full shadow-lg shadow-brand-black/5 border border-gray-100 hover:shadow-xl hover:shadow-brand-red/10 transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-5xl font-bold text-brand-red/10 group-hover:text-brand-red/20 transition-colors">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                      <step.icon className="w-6 h-6 text-brand-red group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-xl font-bold text-brand-black mb-2">{step.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow (between steps on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 w-8 h-8 items-center justify-center z-10">
                    <ArrowRight className="w-5 h-5 text-brand-gold" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
