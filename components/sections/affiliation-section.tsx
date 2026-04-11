"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { UserPlus, Building2, Award, Handshake, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const affiliationOptions = [
  {
    icon: UserPlus,
    title: "Membership",
    subtitle: "Join Our Global Community",
    description: "Become a part of the worldwide martial arts family with exclusive benefits and recognition.",
    features: ["Digital Membership Certificate", "Event Certificates", "Professional Support", "Global Network Access"],
    cta: "Apply Now",
    color: "brand-red",
  },
  {
    icon: Building2,
    title: "Club Registration",
    subtitle: "Register Your Club",
    description: "Global recognition for your Club or Association with verified listing on the Tensho website.",
    features: ["Official Recognition", "Website Listing", "Certificate Issued", "Marketing Support"],
    cta: "Register Now",
    color: "brand-gold",
  },
  {
    icon: Award,
    title: "Belt Certification",
    subtitle: "Earn Your Rank",
    description: "Online merit-based testing from Yellow Belt to Black Belt with globally recognized certificates.",
    features: ["All Belt Levels", "Merit-Based Testing", "Global Recognition", "Fast Processing"],
    cta: "Apply For Test",
    color: "brand-red",
  },
  {
    icon: Handshake,
    title: "Club Affiliation",
    subtitle: "Partner With Us",
    description: "Open an official Tensho branch in your area with full operational and marketing support.",
    features: ["Brand Licensing", "Full Support", "Training Materials", "Revenue Sharing"],
    cta: "Become A Partner",
    color: "brand-gold",
  },
]

export function AffiliationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="affiliation" ref={ref} className="py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm font-medium mb-6">
            Clubs & Certifications
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase text-text-light mb-4">
            Partner With <span className="text-brand-gold">Tensho</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Multiple ways to join our global martial arts family and elevate your status in the community.
          </p>
        </motion.div>

        {/* Affiliation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {affiliationOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative p-6 rounded-2xl bg-brand-dark-grey border border-white/5 hover:border-${option.color}/30 transition-all duration-300 flex flex-col`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-${option.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <option.icon className={`w-7 h-7 text-${option.color}`} />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-bold text-text-light mb-1">{option.title}</h3>
              <p className={`text-${option.color} text-sm font-medium mb-3`}>{option.subtitle}</p>
              <p className="text-text-muted text-sm leading-relaxed mb-4 flex-grow">{option.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-text-muted">
                    <Check className={`w-4 h-4 text-${option.color}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  className={`w-full bg-${option.color}/10 hover:bg-${option.color}/20 text-${option.color} border border-${option.color}/30 font-semibold`}
                >
                  {option.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
