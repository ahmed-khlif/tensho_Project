"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Swords, Shield, Users, Zap, Clock, Target, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const programs = [
  {
    title: "Traditional Karate",
    description:
      "Master the ancient art of karate with our comprehensive curriculum covering kata, kumite, and philosophy.",
    icon: Swords,
    duration: "6-12 months per belt",
    level: "All Levels",
    color: "brand-red",
    features: ["Kata & Forms", "Sparring Training", "Belt Progression", "Competition Prep"],
  },
  {
    title: "Self-Defense Mastery",
    description: "Practical street-smart techniques combining multiple disciplines for real-world protection.",
    icon: Shield,
    duration: "3-6 months",
    level: "Beginner Friendly",
    color: "brand-gold",
    features: ["Situational Awareness", "Strike Defense", "Ground Techniques", "Escape Methods"],
  },
  {
    title: "Kids Martial Arts",
    description:
      "Build confidence, discipline, and physical fitness in a fun, safe environment for children ages 5-12.",
    icon: Users,
    duration: "Ongoing",
    level: "Ages 5-12",
    color: "brand-blue",
    features: ["Character Building", "Anti-Bullying", "Physical Fitness", "Focus Training"],
  },
  {
    title: "Elite Competition",
    description:
      "Advanced training for serious competitors looking to excel in national and international tournaments.",
    icon: Zap,
    duration: "Intensive",
    level: "Advanced",
    color: "brand-red",
    features: ["Tournament Strategy", "Strength Training", "Mental Conditioning", "Video Analysis"],
  },
]

export function ProgramsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-4 bg-brand-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-brand-red/10 text-brand-red text-sm font-medium mb-4">
            Training Programs
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase text-text-light mb-4">
            Choose Your <span className="text-brand-red">Path</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            From beginners to elite competitors, we have a program tailored to your goals and skill level.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative h-full p-6 rounded-2xl bg-brand-dark-grey border border-white/5 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-brand-red/10 group-hover:border-brand-red/20">
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-${program.color}`} />

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-${program.color}/10`}
                  >
                    <program.icon className={`w-7 h-7 text-${program.color}`} />
                  </div>
                  <div className="flex gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-brand-black/50 text-text-muted text-xs">
                      <Clock className="w-3 h-3" />
                      {program.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-brand-black/50 text-text-muted text-xs">
                      <Target className="w-3 h-3" />
                      {program.level}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl font-bold text-text-light mb-2">{program.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">{program.description}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {program.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-xs text-text-muted">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${program.color}`} />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant="ghost"
                  className="w-full justify-between text-text-light hover:text-brand-red hover:bg-brand-red/5 group/btn"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
