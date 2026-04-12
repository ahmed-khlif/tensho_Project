"use client"

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'

const languages = [
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
    nativeName: 'English'
  },
  {
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷',
    nativeName: 'Français'
  },
  {
    code: 'ar',
    name: 'العربية',
    flag: '🇹🇳',
    nativeName: 'العربية'
  }
]

export function LanguageSelector() {
  const { i18n } = useTranslation()

  const currentLanguage = useMemo(() => {
    return languages.find((lang) => lang.code === i18n.language) ?? languages[0]
  }, [i18n.language])

  const handleLanguageChange = async (code: string) => {
    await i18n.changeLanguage(code)
    window.localStorage.setItem('tensho_lang', code)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 text-text-muted hover:text-text-light hover:bg-white/5 transition-colors"
        >
          <span className="text-base" aria-hidden="true">{currentLanguage.flag}</span>
          <span className="hidden sm:inline text-sm font-medium">
            {currentLanguage.code.toUpperCase()}
          </span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-48 bg-brand-dark-grey/95 backdrop-blur-md border-white/10"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => void handleLanguageChange(lang.code)}
            className={`flex items-center gap-3 px-3 py-2 cursor-pointer transition-colors ${
              currentLanguage.code === lang.code
                ? 'bg-brand-gold/20 text-brand-gold'
                : 'text-text-muted hover:text-text-light hover:bg-white/5'
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{lang.nativeName}</span>
              <span className="text-xs text-text-muted">{lang.name}</span>
            </div>
            {currentLanguage.code === lang.code && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="ml-auto w-2 h-2 bg-brand-gold rounded-full"
              />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
