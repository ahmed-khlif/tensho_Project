"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Send, Loader2, CheckCircle, Facebook, Instagram, Youtube, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section ref={ref} className="py-24 px-4 bg-brand-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-sm font-medium mb-6">
            <Mail className="w-4 h-4" />
            Contact Now
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase text-text-light mb-4">
            Get In <span className="text-brand-red">Touch</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            Have questions? We would love to hear from you. Send us a message and we will respond as soon as possible.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-brand-dark-grey rounded-3xl p-8 sm:p-12 border border-white/5"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-text-light mb-2">Message Sent!</h3>
              <p className="text-text-muted">Thank you for contacting us. We will get back to you soon.</p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="mt-6 border-brand-red text-brand-red hover:bg-brand-red/10 bg-transparent"
              >
                Send Another Message
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-text-light text-sm font-medium mb-2">Name</label>
                  <Input
                    required
                    placeholder="Your name"
                    className="bg-brand-black border-white/10 text-text-light placeholder:text-text-muted focus:border-brand-red"
                  />
                </div>
                <div>
                  <label className="block text-text-light text-sm font-medium mb-2">
                    Email <span className="text-brand-red">*</span>
                  </label>
                  <Input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="bg-brand-black border-white/10 text-text-light placeholder:text-text-muted focus:border-brand-red"
                  />
                </div>
              </div>

              <div>
                <label className="block text-text-light text-sm font-medium mb-2">
                  Message <span className="text-brand-red">*</span>
                </label>
                <Textarea
                  required
                  rows={5}
                  placeholder="How can we help you?"
                  className="bg-brand-black border-white/10 text-text-light placeholder:text-text-muted focus:border-brand-red resize-none"
                />
              </div>

              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-semibold py-6 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          )}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-text-muted mb-4">Follow Us</p>
          <div className="flex justify-center gap-4">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-brand-dark-grey border border-white/10 flex items-center justify-center text-text-muted hover:text-brand-red hover:border-brand-red/30 transition-all"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
