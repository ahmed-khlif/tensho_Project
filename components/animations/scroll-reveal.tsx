"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right" | "fade"
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  distance?: number
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  distance = 50
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once,
    margin: "-100px 0px -100px 0px"
  })

  const getInitialVariant = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance }
      case "down":
        return { opacity: 0, y: -distance }
      case "left":
        return { opacity: 0, x: distance }
      case "right":
        return { opacity: 0, x: -distance }
      case "fade":
        return { opacity: 0 }
      default:
        return { opacity: 0, y: distance }
    }
  }

  const getAnimateVariant = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 }
      case "left":
      case "right":
        return { opacity: 1, x: 0 }
      case "fade":
        return { opacity: 1 }
      default:
        return { opacity: 1, y: 0 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitialVariant()}
      animate={isInView ? getAnimateVariant() : getInitialVariant()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}