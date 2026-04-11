"use client"

import { motion } from "framer-motion"
import { Swords, Facebook, Instagram, Youtube, Twitter, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Affiliation", href: "#affiliation" },
    { label: "Club Registration", href: "#registration" },
    { label: "Events", href: "#events" },
    { label: "Blogs", href: "#blogs" },
  ],
  resources: [
    { label: "Student Portal", href: "#" },
    { label: "Certifications", href: "#" },
    { label: "Belt Rankings", href: "#" },
    { label: "Membership", href: "#registration" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
}

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.replace("#", ""))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer className="bg-brand-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-2 mb-4">
              <Swords className="h-8 w-8 text-brand-red" />
              <span className="font-serif text-2xl font-bold text-text-light">TENSHO</span>
            </motion.div>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Tensho International Sports Academy. Connecting Martial Artists Across the Globe.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Youtube, href: "#", label: "YouTube" },
                { icon: Twitter, href: "#", label: "Twitter" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{
                    scale: 1.2,
                    y: -3,
                    rotate: [0, -10, 10, 0]
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 300
                  }}
                  className="w-10 h-10 rounded-full bg-brand-dark-grey flex items-center justify-center text-text-muted hover:text-brand-red hover:bg-brand-red/10 transition-all duration-300 group relative overflow-hidden"
                  aria-label={social.label}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-brand-red/20 to-transparent rounded-full"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.3 }}
                  />
                  <social.icon className="w-5 h-5 group-hover:animate-pulse relative z-10" />
                  <motion.div
                    className="absolute inset-0 border border-brand-red/30 rounded-full"
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{
                      scale: 1.5,
                      opacity: 1,
                      borderColor: "rgba(208, 28, 28, 0.6)"
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-serif font-semibold text-text-light mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-text-muted hover:text-brand-red transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif font-semibold text-text-light mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-text-muted hover:text-brand-red transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-text-light mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-text-muted text-sm">
                <Mail className="w-4 h-4 text-brand-red flex-shrink-0" />
                contact@tensho.academy
              </li>
              <li className="flex items-center gap-2 text-text-muted text-sm">
                <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
                +216 XX XXX XXX
              </li>
              <li className="flex items-start gap-2 text-text-muted text-sm">
                <MapPin className="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0" />
                Tunis, Tunisia
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © 1997-2026 Tensho International Sports Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-text-muted hover:text-brand-red text-xs transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
