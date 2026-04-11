"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface ScrollTriggeredAnimationProps {
  children: React.ReactNode
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale" | "rotate"
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  },
  slideUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 }
  },
  slideLeft: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 }
  },
  slideRight: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 }
  },
  rotate: {
    initial: { opacity: 0, rotate: -10, scale: 0.9 },
    animate: { opacity: 1, rotate: 0, scale: 1 }
  }
}

export function ScrollTriggeredAnimation({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true
}: ScrollTriggeredAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("animate")
    }
  }, [isInView, controls])

  const selectedAnimation = animations[animation]

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="initial"
      animate={controls}
      variants={selectedAnimation}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  )
}

// Pre-built animation components for common use cases
export function FadeIn({ children, ...props }: Omit<ScrollTriggeredAnimationProps, "animation">) {
  return <ScrollTriggeredAnimation animation="fadeIn" {...props}>{children}</ScrollTriggeredAnimation>
}

export function SlideUp({ children, ...props }: Omit<ScrollTriggeredAnimationProps, "animation">) {
  return <ScrollTriggeredAnimation animation="slideUp" {...props}>{children}</ScrollTriggeredAnimation>
}

export function SlideLeft({ children, ...props }: Omit<ScrollTriggeredAnimationProps, "animation">) {
  return <ScrollTriggeredAnimation animation="slideLeft" {...props}>{children}</ScrollTriggeredAnimation>
}

export function SlideRight({ children, ...props }: Omit<ScrollTriggeredAnimationProps, "animation">) {
  return <ScrollTriggeredAnimation animation="slideRight" {...props}>{children}</ScrollTriggeredAnimation>
}

export function ScaleIn({ children, ...props }: Omit<ScrollTriggeredAnimationProps, "animation">) {
  return <ScrollTriggeredAnimation animation="scale" {...props}>{children}</ScrollTriggeredAnimation>
}

export function RotateIn({ children, ...props }: Omit<ScrollTriggeredAnimationProps, "animation">) {
  return <ScrollTriggeredAnimation animation="rotate" {...props}>{children}</ScrollTriggeredAnimation>
}