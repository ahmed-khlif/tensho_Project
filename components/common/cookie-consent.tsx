"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Cookie, X } from "lucide-react"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasConsented, setHasConsented] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Show consent after a delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
      return () => clearTimeout(timer)
    } else {
      setHasConsented(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setHasConsented(true)
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setHasConsented(true)
    setIsVisible(false)
  }

  if (hasConsented) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
        >
          <div className="bg-brand-dark-grey/95 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5 text-brand-gold" />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-text-light font-semibold mb-2">Cookie Preferences</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  We use cookies to enhance your experience, analyze site traffic, and personalize content. By continuing to use our site, you agree to our use of cookies.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={acceptCookies}
                    className="bg-brand-gold hover:bg-brand-gold/90 text-brand-black font-semibold flex-1"
                  >
                    Accept All
                  </Button>
                  <Button
                    onClick={declineCookies}
                    variant="outline"
                    className="border-white/10 text-text-light hover:bg-white/5 flex-1"
                  >
                    Decline
                  </Button>
                </div>
              </div>

              <button
                onClick={() => setIsVisible(false)}
                className="text-text-muted hover:text-text-light transition-colors p-1"
                aria-label="Close cookie consent"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}