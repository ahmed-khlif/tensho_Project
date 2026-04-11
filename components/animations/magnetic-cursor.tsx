"use client"

import { memo, useCallback, useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export const MagneticCursor = memo(function MagneticCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rafRef = useRef<number>()

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  useEffect(() => {
    // Check if device is mobile/touch
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768
    setIsMobile(isTouchDevice)

    if (isTouchDevice) return

    let mouseTimeout: number

    const updatePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX - 12)
      mouseY.set(e.clientY - 12)
      setIsVisible(true)

      clearTimeout(mouseTimeout)
      mouseTimeout = window.setTimeout(() => {
        setIsVisible(false)
        setIsHovering(false)
      }, 10000)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        updatePosition(e)
        rafRef.current = undefined
      })
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
      setIsHovering(false)
      clearTimeout(mouseTimeout)
    }

    // Check if hovering over interactive elements
    const handleMouseOver = useCallback((e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = target.closest('button, a, input, textarea, select, [role="button"], [data-magnetic], .magnetic, [onclick]') !== null ||
                           window.getComputedStyle(target).cursor === 'pointer'
      setIsHovering(isInteractive)
    }, [])

    // Always hide default cursor when component is active
    document.body.style.cursor = 'none'

    // Add event listeners with capture to ensure they work everywhere
    document.addEventListener("mousemove", handleMouseMove, { capture: true, passive: true })
    document.addEventListener("mouseover", handleMouseOver, { capture: true, passive: true })
    document.addEventListener("mouseleave", handleMouseLeave, { capture: true, passive: true })

    // Initial setup - show cursor immediately and set initial position
    setIsVisible(true)
    // Set initial position to center of screen
    mouseX.set(window.innerWidth / 2 - 12)
    mouseY.set(window.innerHeight / 2 - 12)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      clearTimeout(mouseTimeout)
      document.removeEventListener("mousemove", handleMouseMove, true)
      document.removeEventListener("mouseover", handleMouseOver, true)
      document.removeEventListener("mouseleave", handleMouseLeave, true)
      document.body.style.cursor = 'auto'
    }
  }, [mouseX, mouseY])

  // Don't render on mobile devices
  if (isMobile) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] select-none"
      style={{
        x: springX,
        y: springY,
        willChange: 'transform',
      }}
      animate={{
        scale: isVisible ? (isHovering ? 1.5 : 1) : 0,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 30,
      }}
      // Force render to ensure cursor is always visible
      key="magnetic-cursor"
    >
      {/* Main cursor dot */}
      <motion.div
        className="w-6 h-6 bg-brand-gold rounded-full shadow-lg shadow-brand-gold/50 relative"
        animate={{
          backgroundColor: isHovering ? "#d01c1c" : "#d4af37", // Switch to red on hover
          boxShadow: isHovering
            ? "0 0 20px rgba(208, 28, 28, 0.6), 0 0 40px rgba(208, 28, 28, 0.3)"
            : "0 0 20px rgba(212, 175, 55, 0.5), 0 0 40px rgba(212, 175, 55, 0.2)"
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        {/* Inner glow */}
        <motion.div
          className="absolute inset-1 bg-white rounded-full"
          animate={{
            opacity: isHovering ? 0.9 : 0.8,
            scale: isHovering ? 1.1 : 1
          }}
          transition={{ duration: 0.15 }}
        />
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 w-6 h-6 border-2 rounded-full"
          animate={{
            borderColor: isHovering ? "rgba(208, 28, 28, 0.6)" : "rgba(212, 175, 55, 0.4)",
            scale: isHovering ? 1.3 : 1,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
        {/* Hover indicator */}
        {isHovering && (
          <motion.div
            className="absolute inset-0 w-8 h-8 border border-brand-red/50 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          />
        )}
        {/* Pulse effect for visibility */}
        <motion.div
          className="absolute inset-0 w-6 h-6 border border-white/30 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  )
})