"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Swords } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-br from-brand-red to-brand-red/80 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute -top-20 -right-20 w-64 h-64 border border-white/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute -bottom-32 -left-32 w-96 h-96 border border-white/10 rounded-full"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm mb-8"
          >
            <Swords className="w-10 h-10 text-white" />
          </motion.div>

          {/* Headline */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white mb-6 text-balance">
            Ready to Begin Your
            <br />
            <span className="text-brand-gold">Warrior Journey?</span>
          </h2>

          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Join hundreds of students who have transformed their lives through the discipline of martial arts. Your
            first class is free.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white text-brand-red hover:bg-white/90 font-semibold text-lg px-8 py-6 shadow-xl"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Find Nearest Academy
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6 bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </Button>
            </motion.div>
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex items-center justify-center gap-6 text-white/60 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Enrolling Now
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div>No Long-Term Contracts</div>
            <div className="w-px h-4 bg-white/20" />
            <div>First Class Free</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
