"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, Phone, Calendar, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  const actions = [
    {
      icon: MessageCircle,
      label: "Live Chat",
      color: "bg-blue-500 hover:bg-blue-600",
      action: () => {
        // Open live chat
        console.log("Opening live chat...")
      }
    },
    {
      icon: Phone,
      label: "Call Now",
      color: "bg-green-500 hover:bg-green-600",
      action: () => {
        window.location.href = "tel:+1234567890"
      }
    },
    {
      icon: Calendar,
      label: "Book Session",
      color: "bg-purple-500 hover:bg-purple-600",
      action: () => {
        window.location.href = "/calendar"
      }
    }
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            {actions.map((action, index) => {
              const Icon = action.icon
              return (
                <motion.div
                  key={action.label}
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.8 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-brand-dark-grey/95 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2 text-sm text-text-light whitespace-nowrap">
                    {action.label}
                  </div>
                  <Button
                    size="icon"
                    className={`${action.color} shadow-lg hover:shadow-xl transition-all duration-300`}
                    onClick={() => {
                      action.action()
                      setIsOpen(false)
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </Button>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          size="icon"
          className={`w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
            isOpen
              ? "bg-brand-red hover:bg-brand-red/90 rotate-45"
              : "bg-gradient-to-r from-brand-red to-brand-gold hover:from-brand-red/90 hover:to-brand-gold/90"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-text-light" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6 text-text-light" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>
    </div>
  )
}