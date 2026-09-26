"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/layout/back-to-top"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Swords, Eye, EyeOff, Mail, Lock, User, Phone, Calendar, Trophy, UserPlus } from "lucide-react"

export default function LoginPage() {
  const { t } = useTranslation("common")
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt:", { email, password })
  }

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-brand-gold/5 rounded-full blur-[50px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-40 h-40 bg-brand-red/5 rounded-full blur-[60px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Page Header */}
      <section className="relative pt-32 pb-16 px-4 bg-gradient-to-b from-brand-black to-brand-dark-grey">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4 mb-8"
          >
            <div className="relative h-12 w-12 sm:h-16 sm:w-16">
              <img
                src="/tensho-logo.png"
                alt="Tensho Martial Arts crest"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-gold/20 to-brand-red/20 border border-brand-gold/30 text-brand-gold text-sm font-medium shadow-lg">
              <Swords className="w-5 h-5" />
              {t("auth.login.portalAccess")}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl font-bold uppercase text-text-light mb-6 leading-tight"
          >
            {t("auth.login.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted text-lg max-w-2xl mx-auto"
          >
            {t("auth.login.subtitle")}
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center gap-8 mt-12"
          >
            {[
              { value: "156", label: t("auth.login.stats.sessionsThisMonth") },
              { value: "12", label: t("auth.login.stats.dayStreak") },
              { value: "4.9", label: t("auth.login.stats.avgRating") },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-brand-red mb-1">{stat.value}</div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative bg-gradient-to-br from-brand-dark-grey/80 to-brand-black/80 rounded-3xl p-8 border border-white/10 backdrop-blur-sm shadow-2xl"
        >
          {/* Decorative Border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-gold/20 via-transparent to-brand-red/20 opacity-50" />
          <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-brand-black to-brand-dark-grey" />

          <div className="relative z-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-text-light font-medium">
                {t("auth.login.email")}
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                <Input
                  id="email"
                  type="email"
                  placeholder={t("auth.login.emailPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-brand-black/50 border-white/10 text-text-light placeholder:text-text-muted focus:border-brand-gold"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-text-light font-medium">
                {t("auth.login.password")}
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={t("auth.login.passwordPlaceholder")}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 bg-brand-black/50 border-white/10 text-text-light placeholder:text-text-muted focus:border-brand-gold"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-light transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-text-muted cursor-pointer hover:text-text-light transition-colors">
                <input
                  type="checkbox"
                  className="rounded border-white/10 bg-brand-black/50 text-brand-gold focus:ring-brand-gold"
                />
                {t("auth.login.remember")}
              </label>
              <Link
                href="#"
                className="text-brand-gold hover:text-brand-gold/80 transition-colors"
              >
                {t("auth.login.forgot")}
              </Link>
            </div>

            {/* Submit Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-brand-gold to-brand-gold/80 hover:from-brand-gold/90 hover:to-brand-gold/70 text-brand-black font-bold py-4 text-lg shadow-lg shadow-brand-gold/25"
              >
                <Swords className="w-5 h-5 mr-2" />
                {t("auth.login.submit")}
              </Button>
            </motion.div>
          </form>

          {/* Social Login Options */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full bg-white/10" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-brand-dark-grey px-2 text-text-muted">{t("auth.login.social")}</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="border-white/10 text-text-light hover:bg-white/5"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>
              <Button
                variant="outline"
                className="border-white/10 text-text-light hover:bg-white/5"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </Button>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-text-muted">
              {t("auth.login.newToTensho")}{" "}
              <Link
                href="/register"
                className="text-brand-gold hover:text-brand-gold/80 font-medium transition-colors"
              >
                {t("auth.login.createAccount")}
              </Link>
            </p>
          </div>
          </div>
        </motion.div>

        {/* Martial Arts Journey Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-light mb-4">{t("auth.login.continueJourneyTitle")}</h3>
            <p className="text-text-muted">{t("auth.login.continueJourneySubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Trophy,
                title: t("auth.login.benefits.trackProgress.title"),
                description: t("auth.login.benefits.trackProgress.description"),
                color: "from-yellow-500 to-yellow-600",
                bgColor: "bg-yellow-500/10"
              },
              {
                icon: Calendar,
                title: t("auth.login.benefits.bookClasses.title"),
                description: t("auth.login.benefits.bookClasses.description"),
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-500/10"
              },
              {
                icon: Swords,
                title: t("auth.login.benefits.masterTechniques.title"),
                description: t("auth.login.benefits.masterTechniques.description"),
                color: "from-brand-green to-brand-green-dark",
                bgColor: "bg-brand-green/10"
              },
              {
                icon: User,
                title: t("auth.login.benefits.community.title"),
                description: t("auth.login.benefits.community.description"),
                color: "from-purple-500 to-purple-600",
                bgColor: "bg-purple-500/10"
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className={`relative ${benefit.bgColor} rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 group`}
                >
                  <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-text-light mb-2 text-center">{benefit.title}</h4>
                  <p className="text-sm text-text-muted text-center leading-relaxed">{benefit.description}</p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              )
            })}
          </div>

          {/* Quick Access */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 bg-gradient-to-r from-brand-black/50 to-brand-dark-grey/50 rounded-3xl p-8 border border-white/5"
          >
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold text-text-light mb-2">{t("auth.login.quickAccess.title")}</h4>
              <p className="text-text-muted">{t("auth.login.quickAccess.subtitle")}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: t("auth.login.quickAccess.dashboard"), href: "/dashboard", color: "bg-brand-gold text-brand-black" },
                { label: t("auth.login.quickAccess.upcomingEvents"), href: "/calendar", color: "bg-brand-red text-text-light" },
                { label: t("auth.login.quickAccess.trainingGallery"), href: "/gallery", color: "bg-purple-500 text-text-light" }
              ].map((link, index) => (
                <Link key={link.label} href={link.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-xl ${link.color} font-semibold text-center transition-all duration-300 hover:shadow-lg`}
                  >
                    {link.label}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
      <BackToTop />
    </main>
  )
}
