"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-brand-gold to-brand-red z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 bg-brand-red hover:bg-brand-red/90 rounded-full shadow-lg shadow-brand-red/25 flex items-center justify-center text-white z-40 relative overflow-hidden group"
        initial={{ scale: 0, opacity: 0, rotate: -180 }}
        animate={{
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 1 : 0,
          rotate: isVisible ? 0 : -180
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 30px rgba(208, 28, 28, 0.6), 0 0 60px rgba(208, 28, 28, 0.3)"
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        {/* Background gradient animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-brand-red via-brand-red to-brand-gold rounded-full opacity-0 group-hover:opacity-100"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        />

        {/* Outer ring pulse */}
        <motion.div
          className="absolute inset-0 border-2 border-brand-red/50 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />

        {/* Arrow with enhanced animation */}
        <motion.div
          className="relative z-10"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{
              y: [0, -3, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }}
            className="drop-shadow-lg"
          >
            <path d="m18 15-6-6-6 6" />
          </motion.svg>
        </motion.div>

        {/* Floating particles effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>
      </motion.button>
    </>
  )
}