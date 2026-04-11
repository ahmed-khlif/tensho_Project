"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Trophy, Users, Globe, Award, Target, Calendar } from "lucide-react"

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Active Students", color: "brand-red" },
  { icon: Award, value: 50, suffix: "+", label: "Certified Instructors", color: "brand-gold" },
  { icon: Trophy, value: 25, suffix: "+", label: "Tournament Wins", color: "brand-red" },
  { icon: Globe, value: 3, suffix: "", label: "Academy Locations", color: "brand-gold" },
  { icon: Target, value: 98, suffix: "%", label: "Student Satisfaction", color: "brand-red" },
  { icon: Calendar, value: 10, suffix: "+", label: "Years Combined Experience", color: "brand-gold" },
]

function AnimatedCounter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value, isInView])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 px-4 bg-brand-black relative overflow-hidden">
      {/* Background Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-${stat.color}/10 mb-3 group-hover:scale-110 transition-transform`}
              >
                <stat.icon className={`w-6 h-6 text-${stat.color}`} />
              </div>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-text-light mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <p className="text-text-muted text-xs sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
