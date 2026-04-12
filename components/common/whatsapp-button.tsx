"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'

export function WhatsAppButton() {
  const { t } = useTranslation()

  const handleClick = () => {
    window.open('https://wa.me/58318124', '_blank')
  }

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={t('contact.whatsapp', 'Contact via WhatsApp')}
    >
      <MessageCircle className="w-6 h-6" />
    </motion.button>
  )
}