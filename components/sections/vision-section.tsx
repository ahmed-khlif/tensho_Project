"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Sparkles, Users, Trophy, Globe2 } from "lucide-react"

export function VisionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="py-24 px-4 bg-gradient-to-b from-brand-black to-brand-dark-grey relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Our Vision
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-text-light mb-8">
            Forging The <span className="text-brand-gold">Future</span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Our main vision is to unite martial artists all around the world, creating a global martial arts community
            built on discipline, respect, and honor. We promote martial arts as a way of life, empowering individuals to
            grow stronger in body, mind, and spirit while inspiring the next generation through advanced training,
            certification, and international opportunities.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-text-muted text-lg leading-relaxed max-w-3xl mx-auto mt-6"
          >
            By connecting clubs, instructors, and students under one banner, we foster true belonging and leadership. We
            are not just an association; we are a{" "}
            <span className="text-brand-gold font-semibold">Global Martial Arts Family</span> shaping a brighter future
            together.
          </motion.p>
        </motion.div>

        {/* Vision Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
        >
          {[
            { icon: Users, title: "Unite", desc: "Bringing martial artists together globally" },
            { icon: Trophy, title: "Empower", desc: "Building strength in body, mind, and spirit" },
            { icon: Globe2, title: "Inspire", desc: "Creating the next generation of leaders" },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-2xl bg-brand-black/50 border border-brand-gold/20 text-center group hover:border-brand-gold/40 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-gold/20 transition-colors">
                <item.icon className="w-7 h-7 text-brand-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-text-light mb-2">{item.title}</h3>
              <p className="text-text-muted text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
