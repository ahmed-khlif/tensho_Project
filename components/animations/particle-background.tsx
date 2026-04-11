"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      particlesRef.current = []
      const particleCount = Math.min(200, Math.floor((canvas.width * canvas.height) / 12000))

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2.5 + 0.5,
          opacity: Math.random() * 0.6 + 0.1
        })
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle, index) => {
        // Mouse interaction
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 120) {
          const force = (120 - distance) / 120
          particle.vx += (dx / distance) * force * 0.02
          particle.vy += (dy / distance) * force * 0.02
          particle.opacity = Math.min(0.9, particle.opacity + force * 0.1)
        } else {
          particle.opacity = Math.max(0.1, particle.opacity - 0.005)
        }

        // Apply velocity damping
        particle.vx *= 0.99
        particle.vy *= 0.99

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges with smooth transition
        if (particle.x < -10) particle.x = canvas.width + 10
        if (particle.x > canvas.width + 10) particle.x = -10
        if (particle.y < -10) particle.y = canvas.height + 10
        if (particle.y > canvas.height + 10) particle.y = -10

        // Draw particle with glow effect
        ctx.save()
        ctx.shadowColor = 'rgba(212, 175, 55, 0.5)'
        ctx.shadowBlur = particle.size * 2
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212, 175, 55, ${particle.opacity})`
        ctx.fill()
        ctx.restore()

        // Draw connections to nearby particles
        particlesRef.current.slice(index + 1).forEach(otherParticle => {
          const dx2 = particle.x - otherParticle.x
          const dy2 = particle.y - otherParticle.y
          const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)

          if (distance2 < 120) {
            const connectionOpacity = (0.15 * (1 - distance2 / 120) * (particle.opacity + otherParticle.opacity) / 2)
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(212, 175, 55, ${connectionOpacity})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        })

        // Special mouse connection
        if (distance < 150) {
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y)
          ctx.strokeStyle = `rgba(212, 175, 55, ${0.2 * (1 - distance / 150)})`
          ctx.lineWidth = 1.2
          ctx.stroke()
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createParticles()
    animate()

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}