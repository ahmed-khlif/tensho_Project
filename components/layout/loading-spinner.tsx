"use client"

import { motion } from "framer-motion"

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-black">
      <div className="flex flex-col items-center gap-8">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="relative"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-red to-brand-gold flex items-center justify-center shadow-2xl shadow-brand-red/25">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-16 h-16 rounded-full border-4 border-transparent border-t-text-light border-r-text-light"
            />
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute inset-0 rounded-full border-2 border-brand-gold/30"
          />
        </motion.div>

        {/* Text Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="font-serif text-2xl font-bold text-text-light mb-2"
          >
            TENSHO
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-text-muted text-sm"
          >
            Loading Excellence...
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, delay: 1.1, ease: "easeInOut" }}
          className="w-48 h-1 bg-brand-dark-grey rounded-full overflow-hidden"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 2, delay: 1.1, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-brand-red to-brand-gold rounded-full"
          />
        </motion.div>
      </div>
    </div>
  )
}