"use client"

import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  intensity?: number
  glare?: boolean
}

export function TiltCard({
  children,
  className = "",
  intensity = 15,
  glare = true
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [intensity, -intensity]), {
    stiffness: 300,
    damping: 30
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-intensity, intensity]), {
    stiffness: 300,
    damping: 30
  })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    mouseX.set((e.clientX - centerX) / (rect.width / 2))
    mouseY.set((e.clientY - centerY) / (rect.height / 2))
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: 1.02,
        z: 50
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25
      }}
    >
      {/* Glare effect */}
      {glare && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-lg pointer-events-none"
          style={{
            opacity: useTransform(mouseX, [-0.5, 0.5], [0, 0.3]),
          }}
        />
      )}

      {/* Content */}
      <div style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>

      {/* Shadow effect */}
      <motion.div
        className="absolute inset-0 bg-black/20 rounded-lg blur-xl -z-10"
        animate={{
          opacity: isHovered ? 0.3 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}