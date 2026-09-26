"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Send, Mail, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus("loading")
    setTimeout(() => {
      setStatus("success")
    }, 1500)
  }

  return (
    <section ref={ref} className="py-16 px-4 bg-brand-dark-grey border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-sm font-medium mb-3">
              <Mail className="w-4 h-4" />
              Stay Updated
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-text-light mb-2">
              Join the Tensho Newsletter
            </h3>
            <p className="text-text-muted">
              Get training tips, event updates, and exclusive offers delivered to your inbox.
            </p>
          </div>

          {/* Form */}
          <div className="w-full lg:w-auto">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-3 px-6 py-4 rounded-xl bg-green-500/10 border border-green-500/20"
              >
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-text-light font-medium">You are subscribed!</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 w-full sm:w-72 bg-brand-black border-white/10 text-text-light placeholder:text-text-muted focus:ring-brand-red focus:border-brand-red"
                  required
                />
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="h-12 px-6 bg-brand-green hover:bg-brand-green-dark text-white font-semibold w-full sm:w-auto"
                  >
                    {status === "loading" ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <Send className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <>
                        Subscribe
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
