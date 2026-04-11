"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const leaders = [
  {
    name: "SGM Ahmed Mansouri",
    title: "Founder & President",
    description: "A visionary leader with over 30 years of experience in martial arts.",
    image: "/martial-arts-master-portrait-professional.jpg",
    achievements: ["10th Dan Black Belt", "World Champion", "Hall of Fame"],
  },
  {
    name: "GM Karim Ben Ali",
    title: "Co-Founder & Director",
    description: "The strategic mind behind our operations and innovative advancement.",
    image: "/martial-arts-grand-master-portrait-professional.jpg",
    achievements: ["9th Dan Black Belt", "International Judge", "20+ Years Teaching"],
  },
  {
    name: "SM Youssef Trabelsi",
    title: "Secretary General",
    description: "Assists with organizational tasks and general rule maintenance.",
    image: "/martial-arts-senior-instructor-portrait.jpg",
    achievements: ["7th Dan Black Belt", "Operations Expert", "15+ Years Experience"],
  },
]

export function LeadershipSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-4 bg-brand-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Our Leadership
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase text-text-light mb-4">
            Meet The <span className="text-brand-gold">Masters</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            Guided by decades of experience and unwavering dedication to martial arts excellence.
          </p>
        </motion.div>

        {/* Leaders Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              {/* Image Container */}
              <div className="relative mb-6 rounded-2xl overflow-hidden aspect-square">
                <img
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />

                {/* Achievements Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    {leader.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="px-2 py-1 bg-brand-gold/20 backdrop-blur-sm text-brand-gold text-xs font-medium rounded-full"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <p className="text-brand-gold text-sm font-medium uppercase tracking-wider mb-2">{leader.title}</p>
                <h3 className="font-serif text-2xl font-bold text-text-light mb-2">{leader.name}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">{leader.description}</p>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-brand-gold/30 text-brand-gold hover:bg-brand-gold/10 bg-transparent"
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
