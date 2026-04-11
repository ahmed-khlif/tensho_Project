"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { testimonials } from "@/lib/data"

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="py-24 px-4 bg-brand-dark-grey relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-brand-red/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-brand-gold/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase text-text-light mb-4">
            What Our <span className="text-brand-gold">Warriors</span> Say
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Real stories from real students who have transformed their lives through martial arts.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-brand-black rounded-3xl p-8 sm:p-12 border border-white/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center"
              >
                {/* Quote Content */}
                <div className="lg:col-span-3 order-2 lg:order-1">
                  <Quote className="w-12 h-12 text-brand-red/30 mb-4" />
                  <p className="text-xl sm:text-2xl text-text-light font-light leading-relaxed mb-6">
                    {testimonials[currentIndex].quote}
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>

                  {/* Author */}
                  <div>
                    <h4 className="font-serif text-lg font-bold text-text-light">{testimonials[currentIndex].name}</h4>
                    <p className="text-text-muted text-sm">{testimonials[currentIndex].role}</p>
                    <p className="text-brand-red text-sm">{testimonials[currentIndex].academy}</p>
                  </div>
                </div>

                {/* Image & Achievement */}
                <div className="lg:col-span-2 order-1 lg:order-2 flex flex-col items-center">
                  <div className="relative mb-4">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-brand-red/20">
                      <img
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-gold text-brand-black text-xs font-bold whitespace-nowrap">
                      {testimonials[currentIndex].achievement}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/5">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "w-8 bg-brand-red" : "bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="border-white/10 text-text-light hover:bg-white/5 hover:text-brand-red bg-transparent"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="border-white/10 text-text-light hover:bg-white/5 hover:text-brand-red bg-transparent"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
