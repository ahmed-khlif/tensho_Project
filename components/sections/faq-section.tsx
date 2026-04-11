"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What age groups do you accept?",
    answer:
      "We welcome students of all ages! Our Kids program is designed for ages 5-12, teen classes for 13-17, and adult classes for 18+. We also have family programs where parents and children can train together.",
  },
  {
    question: "Do I need any prior experience to join?",
    answer:
      "Not at all! Most of our students start with zero martial arts experience. Our beginner-friendly programs are designed to teach you everything from the ground up, with patient instructors who adapt to your learning pace.",
  },
  {
    question: "How does the certification system work?",
    answer:
      "Our certification system is internationally recognized and blockchain-verified. Each certificate comes with a unique QR code that can be scanned to verify authenticity. We issue certificates for belt promotions, instructor credentials, and competition achievements.",
  },
  {
    question: "What martial arts styles do you teach?",
    answer:
      "We offer Traditional Karate, Self-Defense, Mixed Martial Arts (MMA), and specialized competition training. Each academy in our network may have different specializations, so you can choose based on your interests.",
  },
  {
    question: "How often should I train?",
    answer:
      "For beginners, we recommend 2-3 sessions per week. As you progress, you may want to increase to 4-5 sessions. Our instructors will work with you to create a training schedule that fits your goals and lifestyle.",
  },
  {
    question: "Can I transfer between academies?",
    answer:
      "Yes! One of the benefits of the Tensho network is seamless transfer between our partner academies. Your rank, certifications, and training records travel with you through our unified system.",
  },
]

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section ref={ref} className="py-24 px-4 bg-brand-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase text-text-light mb-4">
            Common <span className="text-brand-gold">Questions</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Everything you need to know before starting your martial arts journey.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full text-left">
                <div
                  className={`p-6 rounded-2xl border transition-all duration-300 ${
                    openIndex === index
                      ? "bg-brand-dark-grey border-brand-red/30"
                      : "bg-brand-dark-grey/50 border-white/5 hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          openIndex === index ? "bg-brand-red/20 text-brand-red" : "bg-white/5 text-text-muted"
                        }`}
                      >
                        <HelpCircle className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-text-light">{faq.question}</h3>
                    </div>
                    <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown className="w-5 h-5 text-text-muted" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 pl-14 text-text-muted leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
