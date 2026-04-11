"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Swords, LogIn, UserPlus, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

const moreLinks = [
  { label: "Leadership", href: "/leadership" },
  { label: "Certificates", href: "/certificates" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Blogs", href: "/blogs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Calendar", href: "/calendar" },
  { label: "Resources", href: "/resources" },
  { label: "Shop", href: "/shop" },
  { label: "Membership", href: "/membership" },
  { label: "Dashboard", href: "/dashboard" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position for hash links
      const hashSections = navLinks.filter(link => link.href.startsWith("#")).map((link) => link.href.replace("#", ""))
      for (const section of hashSections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      // If on home page, scroll to section
      if (window.location.pathname === "/") {
        const element = document.getElementById(href.replace("#", ""))
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      } else {
        // If on other pages, redirect to home page with hash
        window.location.href = "/" + href
      }
    }
    setMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[95%] max-w-6xl rounded-full px-4 sm:px-6 py-3 transition-all duration-300 ${scrolled
            ? "backdrop-blur-xl bg-brand-black/95 shadow-lg shadow-brand-red/10 border border-white/5"
            : "backdrop-blur-md bg-brand-black/80"
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.02 }}>
            <div className="relative">
              <Swords className="h-7 w-7 text-brand-red" />
            </div>
            <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-text-light">TENSHO</span>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => {
              const isActive = link.href.startsWith("#")
                ? activeSection === link.href.replace("#", "")
                : false

              return link.href.startsWith("/") ? (
                <Link key={link.label} href={link.href}>
                  <motion.div
                    className={`px-3 py-2 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer relative overflow-hidden ${isActive
                        ? "text-brand-red bg-brand-red/10"
                        : "text-text-muted hover:text-text-light hover:bg-white/5"
                      }`}
                    whileHover={{
                      scale: 1.05,
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 300
                    }}
                  >
                    <motion.span
                      className="relative z-10"
                      whileHover={{ x: 1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {link.label}
                    </motion.span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                </Link>
              ) : (
                <motion.button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-full transition-all duration-300 relative overflow-hidden ${isActive
                      ? "text-brand-red bg-brand-red/10"
                      : "text-text-muted hover:text-text-light hover:bg-white/5"
                    }`}
                  whileHover={{
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300
                  }}
                >
                  <motion.span
                    className="relative z-10"
                    whileHover={{ x: 1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {link.label}
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              )
            })}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  className="px-3 py-2 text-sm font-medium rounded-full transition-all duration-300 text-text-muted hover:text-text-light hover:bg-white/5 flex items-center gap-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  More <ChevronDown className="w-4 h-4" />
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-brand-dark-grey border-white/10">
                {moreLinks.map((link) => (
                  <DropdownMenuItem
                    key={link.label}
                    asChild
                    className="text-text-muted hover:text-text-light hover:bg-white/5 cursor-pointer"
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block relative group"
            >
              <Link href="/login">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 text-text-muted hover:text-text-light hover:bg-transparent relative overflow-hidden"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <LogIn className="h-4 w-4 relative z-10" />
                  <span className="hidden md:inline relative z-10">Login</span>
                </Button>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(208, 28, 28, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Link href="/register">
                <Button size="sm" className="bg-brand-red hover:bg-brand-red/90 text-text-light font-medium px-4 relative overflow-hidden">
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <UserPlus className="h-4 w-4 sm:mr-2 relative z-10" />
                  <span className="hidden sm:inline relative z-10">Join</span>
                </Button>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-text-muted hover:text-text-light"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-40 bg-brand-dark-grey/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden lg:hidden"
          >
            <div className="p-4 space-y-1">
              {navLinks.map((link, index) => {
                const isActive = link.href.startsWith("#")
                  ? activeSection === link.href.replace("#", "")
                  : false

                return link.href.startsWith("/") ? (
                  <Link key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${isActive
                          ? "text-brand-red bg-brand-red/10"
                          : "text-text-muted hover:text-text-light hover:bg-white/5"
                        }`}
                    >
                      {link.label}
                    </motion.div>
                  </Link>
                ) : (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive
                        ? "text-brand-red bg-brand-red/10"
                        : "text-text-muted hover:text-text-light hover:bg-white/5"
                      }`}
                  >
                    {link.label}
                  </motion.button>
                )
              })}
              <div className="border-t border-white/10 pt-3 mt-3">
                <p className="text-text-muted text-xs font-medium mb-2 px-4">More</p>
                {moreLinks.map((link, index) => (
                  <Link key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (navLinks.length + index) * 0.05 }}
                      className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all text-text-muted hover:text-text-light hover:bg-white/5 cursor-pointer"
                    >
                      {link.label}
                    </motion.div>
                  </Link>
                ))}
              </div>
              <div className="pt-3 border-t border-white/10 mt-3">
                <Link href="/login">
                  <Button variant="ghost" className="w-full justify-start text-text-muted hover:text-text-light">
                    <LogIn className="h-4 w-4 mr-2" />
                    Student Login
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
