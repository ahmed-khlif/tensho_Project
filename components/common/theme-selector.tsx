"use client"

import { useEffect, useMemo, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown, Moon, Sun, Monitor } from 'lucide-react'

const themes = [
  {
    id: 'dark',
    name: 'Dark',
    icon: Moon,
    description: 'Dark theme'
  },
  {
    id: 'light',
    name: 'Light',
    icon: Sun,
    description: 'Light theme'
  },
  {
    id: 'system',
    name: 'Auto',
    icon: Monitor,
    description: 'Follow system'
  }
]

export function ThemeSelector() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = useMemo(() => {
    if (!mounted) {
      return themes[2]
    }
    return themes.find(t => t.id === theme) || themes[2]
  }, [mounted, theme])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 text-text-muted hover:text-text-light hover:bg-white/5 transition-colors"
        >
          <currentTheme.icon className="h-4 w-4" />
          <span className="hidden sm:inline text-sm font-medium">
            {currentTheme.name}
          </span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-40 bg-brand-dark-grey/95 backdrop-blur-md border-white/10"
      >
        {themes.map((themeOption) => (
          <DropdownMenuItem
            key={themeOption.id}
            onClick={() => setTheme(themeOption.id)}
            className={`flex items-center gap-3 px-3 py-2 cursor-pointer transition-colors ${
              theme === themeOption.id
                ? 'bg-brand-gold/20 text-brand-gold'
                : 'text-text-muted hover:text-text-light hover:bg-white/5'
            }`}
          >
            <themeOption.icon className="h-4 w-4" />
            <span className="text-sm font-medium">{themeOption.name}</span>
            {theme === themeOption.id && (
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
