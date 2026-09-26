"use client"

import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: "default" | "outline"
  size?: "sm" | "lg"
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  variant = "default",
  size = "lg"
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 400, damping: 28 })
  const springY = useSpring(mouseY, { stiffness: 400, damping: 28 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate magnetic attraction (limited to button bounds)
    const deltaX = e.clientX - centerX
    const deltaY = e.clientY - centerY
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    const maxDistance = Math.max(rect.width, rect.height) / 2

    if (distance < maxDistance) {
      mouseX.set(deltaX * 0.3) // Magnetic pull strength
      mouseY.set(deltaY * 0.3)
    }
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <Button
        ref={buttonRef}
        size={size}
        variant={variant}
        onClick={onClick}
        className={`relative overflow-hidden transition-all duration-300 ${
          variant === "outline"
            ? "border-2 border-brand-gold text-brand-gold hover:bg-brand-gold/10"
            : "bg-brand-green hover:bg-brand-green-dark text-white"
        } ${className}`}
      >
        <motion.span
          className="relative z-10"
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {children}
        </motion.span>

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "100%" : "-100%" }}
          transition={{
            duration: isHovered ? 0.8 : 0,
            ease: "easeInOut"
          }}
        />

        {/* Magnetic field effect */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          animate={{
            boxShadow: isHovered
              ? variant === "outline"
                ? "0 0 30px rgba(212, 175, 55, 0.4)"
                : "0 0 20px rgba(6, 78, 59, 0.25)"
              : "0 0 0px rgba(0, 0, 0, 0)"
          }}
          transition={{ duration: 0.3 }}
        />
      </Button>
    </motion.div>
  )
}
