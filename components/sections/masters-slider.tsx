"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Star, Award, Users, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const masters = [
  {
    id: 1,
    slug: "grand-master-hiroshi-tanaka",
    name: "Grand Master Hiroshi Tanaka",
    title: "10th Dan Black Belt",
    specialty: "Traditional Karate",
    experience: "45+ years",
    image: "/martial-arts-grand-master-portrait-professional.jpg",
    achievements: [
      "Olympic Coach 1996-2004",
      "World Champion 1978",
      "Hall of Fame Inductee"
    ],
    quote: "Martial arts is not about fighting, it's about building character and discipline."
  },
  {
    id: 2,
    slug: "master-sarah-chen",
    name: "Master Sarah Chen",
    title: "8th Dan Black Belt",
    specialty: "Mixed Martial Arts",
    experience: "32+ years",
    image: "/martial-arts-master-sensei-portrait-male.jpg",
    achievements: [
      "UFC Trainer",
      "International Judge",
      "Best Coach Award 2022"
    ],
    quote: "Every student has potential. My role is to unlock it through dedication and proper guidance."
  },
  {
    id: 3,
    slug: "sensei-marcus-rodriguez",
    name: "Sensei Marcus Rodriguez",
    title: "9th Dan Black Belt",
    specialty: "Brazilian Jiu-Jitsu",
    experience: "38+ years",
    image: "/martial-arts-senior-master-certificate.jpg",
    achievements: [
      "IBJJF World Champion",
      "Black Belt Hall of Fame",
      "Author: 'The Way of Balance'"
    ],
    quote: "Technique without heart is empty. Heart without technique is blind."
  },
  {
    id: 4,
    slug: "grand-master-li-wei",
    name: "Grand Master Li Wei",
    title: "10th Dan Black Belt",
    specialty: "Wushu & Kung Fu",
    experience: "50+ years",
    image: "/martial-arts-master-portrait-professional.jpg",
    achievements: [
      "Chinese National Team Coach",
      "UNESCO Martial Arts Ambassador",
      "Lifetime Achievement Award"
    ],
    quote: "The path of martial arts is a journey of self-discovery and continuous improvement."
  }
]

export function MastersSlider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextMaster = () => {
    setCurrentIndex((prev) => (prev + 1) % masters.length)
  }

  const prevMaster = () => {
    setCurrentIndex((prev) => (prev - 1 + masters.length) % masters.length)
  }

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextMaster()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-b from-brand-dark-grey to-brand-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-brand-red/10 rounded-full blur-[50px]" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-brand-gold/10 rounded-full blur-[50px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-sm font-medium mb-4">
            Expert Guidance
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase text-text-light mb-4">
            Meet Our <span className="text-brand-red">Masters</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Learn from legendary martial artists who have dedicated their lives to perfecting the art and passing down centuries of wisdom.
          </p>
        </motion.div>

        {/* Masters Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-brand-black/50 rounded-3xl p-8 sm:p-12 border border-white/5 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                {/* Master Image & Basic Info */}
                <div className="order-2 lg:order-1">
                  <div className="relative mb-6">
                    <Link href={`/masters/${masters[currentIndex].slug}`}>
                      <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto rounded-full overflow-hidden border-4 border-brand-red/30 shadow-2xl cursor-pointer hover:border-brand-gold transition-colors">
                        <img
                          src={masters[currentIndex].image || "/placeholder.svg"}
                          alt={masters[currentIndex].name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                    </Link>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-brand-red text-text-light px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap shadow-lg">
                      {masters[currentIndex].experience} Experience
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-center gap-6 mb-6">
                    <div className="text-center">
                      <Award className="w-8 h-8 text-brand-gold mx-auto mb-2" />
                      <div className="text-2xl font-bold text-brand-gold">{masters[currentIndex].title.split(' ')[0]}</div>
                      <div className="text-sm text-text-muted">Dan Level</div>
                    </div>
                    <div className="text-center">
                      <Users className="w-8 h-8 text-brand-red mx-auto mb-2" />
                      <div className="text-2xl font-bold text-brand-red">1000+</div>
                      <div className="text-sm text-text-muted">Students</div>
                    </div>
                    <div className="text-center">
                      <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-yellow-500">5.0</div>
                      <div className="text-sm text-text-muted">Rating</div>
                    </div>
                  </div>
                </div>

                {/* Master Details */}
                <div className="order-1 lg:order-2 text-center lg:text-left">
                  <div className="mb-4">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-text-light mb-2">
                      {masters[currentIndex].name}
                    </h3>
                    <p className="text-brand-gold text-lg font-medium mb-1">{masters[currentIndex].title}</p>
                    <p className="text-brand-red text-base">{masters[currentIndex].specialty}</p>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-text-light text-lg italic mb-6 leading-relaxed">
                    "{masters[currentIndex].quote}"
                  </blockquote>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-text-light font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {masters[currentIndex].achievements.map((achievement, index) => (
                        <li key={index} className="flex items-center text-text-muted">
                          <Star className="w-4 h-4 text-brand-gold mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* View Profile Button */}
                  <Link href={`/masters/${masters[currentIndex].slug}`}>
                    <Button className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-semibold py-2">
                      View Full Profile
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/5">
              <div className="flex gap-2">
                {masters.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "w-10 bg-brand-red" : "bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevMaster}
                  className="border-white/10 text-text-light hover:bg-white/5 hover:text-brand-red bg-transparent"
                >
                  <ChevronLeft className="w-5 h-5 text-text-light" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextMaster}
                  className="border-white/10 text-text-light hover:bg-white/5 hover:text-brand-red bg-transparent"
                >
                  <ChevronRight className="w-5 h-5 text-text-light" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
