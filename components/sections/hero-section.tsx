"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useTranslation } from 'react-i18next'
import { MagneticButton } from "@/components/animations/magnetic-button"

export function HeroSection() {
  const { t } = useTranslation('common')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-dark-grey to-brand-black">
        {/* Abstract martial arts pattern overlay */}
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear"
          }}
        />
        {/* Radial glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-brand-gold/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-6 h-6 border border-brand-red/30 rounded-lg"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-3 h-3 bg-brand-gold/30 rounded-full"
          animate={{
            x: [0, 30, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-60 right-10 w-5 h-5 border border-brand-red/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20"
      >
        {/* Logo and Badge */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-col items-center gap-6">
            {/* Premium Logo Container */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Outer glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-gold/10 via-brand-red/5 to-brand-gold/10 rounded-full blur-xl animate-pulse" />

              {/* Main logo container */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/1 backdrop-blur-sm rounded-2xl p-4 border border-white/10 shadow-2xl">
                <motion.div
                  className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <img
                    src="/logo.png"
                    alt="Tensho International Logo"
                    className="h-full w-full object-contain drop-shadow-lg"
                  />

                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/5 to-transparent rounded-full" />
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced Badge */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/50 to-brand-red/50 rounded-full blur opacity-30" />
              <span className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-brand-black/95 to-brand-dark-grey/95 border border-brand-gold/50 text-brand-gold text-sm font-semibold shadow-xl backdrop-blur-md">
                <motion.span
                  className="w-3 h-3 bg-gradient-to-r from-brand-gold to-brand-red rounded-full shadow-lg"
                  animate={{ boxShadow: ["0 0 10px rgba(212, 175, 55, 0.5)", "0 0 20px rgba(208, 28, 28, 0.3)", "0 0 10px rgba(212, 175, 55, 0.5)"] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                {t('hero.badge')}
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-text-light leading-[0.95] text-balance"
        >
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {t('hero.title')}
          </motion.span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-lg sm:text-xl text-text-muted max-w-2xl mx-auto text-pretty"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <MagneticButton
            onClick={() => scrollToSection("registration")}
            className="font-semibold text-lg px-8 py-6 shadow-lg shadow-brand-red/25"
          >
            {t('hero.joinElite')}
          </MagneticButton>
          <MagneticButton
            variant="outline"
            onClick={() => scrollToSection("about")}
            className="border-2 border-brand-gold text-brand-gold font-semibold text-lg px-8 py-6"
          >
            {t('hero.whoWeAre')}
          </MagneticButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          {[
            { value: "28+", label: "Years of Excellence" },
            { value: "60+", label: "Registered Clubs" },
            { value: "50+", label: "Countries" },
            { value: "10K+", label: "Trained Students" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group cursor-pointer"
              whileHover={{
                scale: 1.1,
                y: -5
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              <motion.div
                className="font-serif text-3xl sm:text-4xl font-bold text-text-light relative"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 1.2 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
              >
                {stat.value}
                <motion.div
                  className="absolute -inset-2 bg-brand-gold/10 rounded-lg opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <motion.div
                className="text-xs sm:text-sm text-text-muted mt-1"
                whileHover={{ color: "#d4af37" }}
                transition={{ duration: 0.2 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection("about")}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="flex flex-col items-center gap-2 text-text-muted hover:text-text-light transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  )
}
