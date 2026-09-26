"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Globe, Shield, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Award,
    title: "Excellence Since 2024",
    description: "Built on discipline, honor, and strength, shaping the next generation of martial artists.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Expanding across multiple countries, uniting clubs and representatives under one banner.",
  },
  {
    icon: Shield,
    title: "Certified Programs",
    description: "Advanced training, belt certification, and networking opportunities worldwide.",
  },
  {
    icon: Heart,
    title: "More Than Training",
    description: "We are a Global Martial Arts Family, fostering discipline, respect, and leadership.",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-24 px-4 bg-brand-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, var(--brand-red) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-sm font-medium mb-6">
              Who We Are
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase text-text-light mb-6 leading-tight">
              Dominance Through
              <br />
              <span className="text-brand-red">Dedication</span>
            </h2>

            <p className="text-text-muted text-lg leading-relaxed mb-6">
              Tensho International Sports Academy is the fastest-growing global martial arts association, shaping
              excellence since 2024. We empower individuals through advanced training, belt certification, and
              networking opportunities, making Tensho a trusted name worldwide.
            </p>

            <p className="text-text-muted leading-relaxed mb-8">
              With dedication and passion, we have expanded into multiple countries, uniting clubs and representatives
              under one banner of achievement. More than 500 students have trained through our programs, carrying
              forward the spirit of leadership, respect, and discipline.
            </p>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button className="bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-8 py-6 text-lg">
                Learn More About Us
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-brand-dark-grey border border-white/5 hover:border-brand-red/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center mb-4 group-hover:bg-brand-red/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-brand-red" />
                </div>
                <h3 className="font-serif font-semibold text-text-light mb-2">{feature.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
