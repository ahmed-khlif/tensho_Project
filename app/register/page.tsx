"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/layout/back-to-top"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Swords, Eye, EyeOff, Mail, Lock, User, Phone, Calendar, Trophy, ChevronLeft, ChevronRight, Check } from "lucide-react"

export default function RegisterPage() {
  const { t } = useTranslation("common")
  const [currentStep, setCurrentStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    experience: "",
    agreeToTerms: false,
    subscribeNewsletter: true
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration logic here
    console.log("Registration attempt:", formData)
  }

  const steps = [
    { id: 1, title: t("auth.register.steps.personalInfo"), icon: User },
    { id: 2, title: t("auth.register.steps.accountSetup"), icon: Lock },
    { id: 3, title: t("auth.register.steps.experience"), icon: Trophy },
    { id: 4, title: t("auth.register.steps.confirmation"), icon: Check }
  ]

  const stepProgress = (currentStep / steps.length) * 100

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-brand-red/5 rounded-full blur-[50px]"
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
          className="absolute bottom-40 right-20 w-40 h-40 bg-brand-gold/5 rounded-full blur-[60px]"
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
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-red/20 to-brand-gold/20 border border-brand-gold/30 text-brand-gold text-sm font-medium shadow-lg">
              <Swords className="w-5 h-5" />
              {t("auth.register.joinEliteRanks")}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl font-bold uppercase text-text-light mb-6 leading-tight"
          >
            {t("auth.register.title")} <span className="text-brand-red">{t("auth.register.titleHighlight")}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted text-lg max-w-2xl mx-auto"
          >
            {t("auth.register.subtitle")}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center gap-8 mt-12"
          >
            {[
              { value: "10K+", label: t("auth.register.stats.activeMembers") },
              { value: "50+", label: t("auth.register.stats.countries") },
              { value: "28+", label: t("auth.register.stats.yearsExcellence") },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-brand-gold mb-1">{stat.value}</div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-10 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative bg-gradient-to-br from-brand-dark-grey/90 to-brand-black/90 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border border-white/10 backdrop-blur-sm shadow-2xl"
        >
          {/* Decorative Border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-red/20 via-transparent to-brand-gold/20 opacity-50" />
          <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-brand-black to-brand-dark-grey" />

          <div className="relative z-10">
            <div className="mb-6 sm:mb-8">
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-brand-gold to-brand-red"
                  initial={{ width: 0 }}
                  animate={{ width: `${stepProgress}%` }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Stepper Header */}
            <div className="mb-8">
              <div className="hidden md:flex items-center justify-center mb-8">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  const isCompleted = currentStep > step.id
                  const isCurrent = currentStep === step.id
                  const isUpcoming = currentStep < step.id

                  return (
                    <div key={step.id} className="flex items-center">
                      <motion.div
                        className={`relative flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                          isCompleted
                            ? 'bg-brand-gold border-brand-gold text-brand-black'
                            : isCurrent
                            ? 'border-brand-gold text-brand-gold bg-brand-gold/10'
                            : 'border-white/20 text-text-muted bg-white/5'
                        }`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {isCompleted ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          <Icon className="w-5 h-5" />
                        )}
                        {isCurrent && (
                          <motion.div
                            className="absolute inset-0 rounded-full border-2 border-brand-gold"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          />
                        )}
                      </motion.div>
                      {index < steps.length - 1 && (
                        <motion.div
                          className={`w-16 h-0.5 mx-4 rounded ${
                            isCompleted ? 'bg-brand-gold' : 'bg-white/20'
                          }`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: isCompleted ? 1 : 0 }}
                          transition={{ duration: 0.5 }}
                        />
                      )}
                    </div>
                  )
                })}
              </div>

              <div className="md:hidden flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold text-sm font-semibold">
                  {steps.find((s) => s.id === currentStep)?.title}
                </div>
                <span className="text-xs text-text-muted">{currentStep}/{steps.length}</span>
              </div>

              <div className="text-center">
                <h2 className="text-xl font-bold text-text-light mb-2">
                  {steps.find(s => s.id === currentStep)?.title}
                </h2>
                <p className="text-text-muted">
                  {t("auth.register.stepOf", { current: currentStep, total: steps.length })}
                </p>
              </div>
            </div>

            {/* Form with Animated Steps */}
            <form id="registration-form" onSubmit={handleSubmit} className="space-y-6">
              {/* Step Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <User className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-text-light mb-2">{t("auth.register.steps.personalInfo")}</h3>
                        <p className="text-text-muted">{t("auth.register.stepDescriptions.personalInfo")}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-text-light font-medium">
                            {t("auth.register.firstName")}
                          </Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                            <Input
                              id="firstName"
                              type="text"
                              placeholder={t("auth.register.placeholders.firstName")}
                              value={formData.firstName}
                              onChange={(e) => handleInputChange("firstName", e.target.value)}
                              className="pl-12 bg-brand-black/50 border-white/10 text-text-light placeholder:text-text-muted focus:border-brand-gold h-12"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-text-light font-medium">
                            {t("auth.register.lastName")}
                          </Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                            <Input
                              id="lastName"
                              type="text"
                              placeholder={t("auth.register.placeholders.lastName")}
                              value={formData.lastName}
                              onChange={(e) => handleInputChange("lastName", e.target.value)}
                              className="pl-12 bg-brand-black/50 border-white/10 text-text-light placeholder:text-text-muted focus:border-brand-gold h-12"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-text-light font-medium">
                          {t("auth.register.email")}
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                          <Input
                            id="email"
                            type="email"
                            placeholder={t("auth.register.placeholders.email")}
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="pl-12 bg-brand-black/50 border-white/10 text-text-light placeholder:text-text-muted focus:border-brand-gold h-12"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-text-light font-medium">
                          {t("auth.register.phone")}
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                          <Input
                            id="phone"
                            type="tel"
                            placeholder={t("auth.register.placeholders.phone")}
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="pl-12 bg-brand-black/50 border-white/10 text-text-light placeholder:text-text-muted focus:border-brand-gold h-12"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Account Setup */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <Lock className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-text-light mb-2">{t("auth.register.steps.accountSetup")}</h3>
                        <p className="text-text-muted">{t("auth.register.stepDescriptions.accountSetup")}</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-text-light font-medium">
                          {t("auth.register.password")}
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder={t("auth.register.placeholders.password")}
                            value={formData.password}
                            onChange={(e) => handleInputChange("password", e.target.value)}
                            className="pl-12 pr-12 bg-brand-black/50 border-white/10 text-text-light placeholder:text-text-muted focus:border-brand-gold h-12"
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

                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword" className="text-text-light font-medium">
                          {t("auth.register.confirmPassword")}
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                          <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder={t("auth.register.placeholders.confirmPassword")}
                            value={formData.confirmPassword}
                            onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                            className="pl-12 pr-12 bg-brand-black/50 border-white/10 text-text-light placeholder:text-text-muted focus:border-brand-gold h-12"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-light transition-colors"
                          >
                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Martial Arts Experience */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <Trophy className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-text-light mb-2">{t("auth.register.steps.experience")}</h3>
                        <p className="text-text-muted">{t("auth.register.stepDescriptions.experience")}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="dateOfBirth" className="text-text-light font-medium">
                            {t("auth.register.dateOfBirth")}
                          </Label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                            <Input
                              id="dateOfBirth"
                              type="date"
                              value={formData.dateOfBirth}
                              onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                              className="pl-12 bg-brand-black/50 border-white/10 text-text-light focus:border-brand-gold h-12"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="experience" className="text-text-light font-medium">
                            {t("auth.register.experienceLevel")}
                          </Label>
                          <div className="relative">
                            <Trophy className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                            <select
                              id="experience"
                              value={formData.experience}
                              onChange={(e) => handleInputChange("experience", e.target.value)}
                              className="w-full pl-12 pr-4 py-3 bg-brand-black/50 border border-white/10 rounded-md text-text-light focus:border-brand-gold focus:outline-none h-12"
                            >
                              <option value="">{t("auth.register.selectLevel")}</option>
                              <option value="beginner">{t("auth.register.levels.beginner")}</option>
                              <option value="intermediate">{t("auth.register.levels.intermediate")}</option>
                              <option value="advanced">{t("auth.register.levels.advanced")}</option>
                              <option value="black-belt">{t("auth.register.levels.blackBelt")}</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Confirmation */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <Check className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-text-light mb-2">{t("auth.register.steps.confirmation")}</h3>
                        <p className="text-text-muted">{t("auth.register.stepDescriptions.confirmation")}</p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Checkbox
                            id="terms"
                            checked={formData.agreeToTerms}
                            onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                            className="mt-1 border-white/10 data-[state=checked]:bg-brand-gold data-[state=checked]:border-brand-gold"
                          />
                          <Label htmlFor="terms" className="text-sm text-text-muted leading-relaxed">
                            {t("auth.register.iAgree")}{" "}
                            <Link href="#" className="text-brand-gold hover:text-brand-gold/80">
                              {t("auth.register.termsOfService")}
                            </Link>{" "}
                            {t("auth.register.and")}{" "}
                            <Link href="#" className="text-brand-gold hover:text-brand-gold/80">
                              {t("auth.register.privacyPolicy")}
                            </Link>
                          </Label>
                        </div>

                        <div className="flex items-start gap-3">
                          <Checkbox
                            id="newsletter"
                            checked={formData.subscribeNewsletter}
                            onCheckedChange={(checked) => handleInputChange("subscribeNewsletter", checked as boolean)}
                            className="mt-1 border-white/10 data-[state=checked]:bg-brand-gold data-[state=checked]:border-brand-gold"
                          />
                          <Label htmlFor="newsletter" className="text-sm text-text-muted">
                            {t("auth.register.newsletterLong")}
                          </Label>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 sm:items-center mt-8 pt-6 border-t border-white/10">
                <Button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  variant="outline"
                  className="w-full sm:w-auto border-white/10 text-text-muted hover:text-text-light hover:bg-white/5 disabled:opacity-50"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  {t("auth.register.previous")}
                </Button>

                <div className="flex justify-center space-x-2 order-first sm:order-none">
                  {steps.map((step) => (
                    <motion.div
                      key={step.id}
                      className={`w-2 h-2 rounded-full ${
                        currentStep === step.id ? 'bg-brand-gold' : 'bg-white/20'
                      }`}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>

                {currentStep < steps.length ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="w-full sm:w-auto bg-brand-gold hover:bg-brand-gold/90 text-brand-black"
                  >
                    {t("auth.register.next")}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full sm:w-auto bg-gradient-to-r from-brand-red to-brand-red/80 hover:from-brand-red/90 hover:to-brand-red/70 text-text-light font-bold px-8 py-3 shadow-lg shadow-brand-red/25 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!formData.agreeToTerms}
                    >
                      <Swords className="w-5 h-5 mr-2" />
                      {t("auth.register.submitJourney")}
                    </Button>
                  </motion.div>
                )}
              </div>

              {currentStep === steps.length && !formData.agreeToTerms && (
                <p className="text-sm text-brand-gold text-center mt-4">
                  {t("auth.register.acceptTermsWarning")}
                </p>
              )}
            </form>
          </div>
        </motion.div>

        {/* Social Registration Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8"
        >
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full bg-white/10" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-brand-dark-grey px-2 text-text-muted">{t("auth.register.social")}</span>
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
        </motion.div>

        {/* Sign In Link */}
        <div className="mt-8 text-center">
          <p className="text-text-muted">
            {t("auth.register.alreadyHaveAccount")}{" "}
            <Link
              href="/login"
              className="text-brand-gold hover:text-brand-gold/80 font-medium transition-colors"
            >
              {t("auth.register.signInHere")}
            </Link>
          </p>
        </div>

        {/* Martial Arts Journey Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-light mb-4">{t("auth.register.pathToMastery.title")}</h3>
            <p className="text-text-muted">{t("auth.register.pathToMastery.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Trophy,
                title: t("auth.register.benefits.freeTrial.title"),
                description: t("auth.register.benefits.freeTrial.description"),
                color: "from-yellow-500 to-yellow-600",
                bgColor: "bg-yellow-500/10"
              },
              {
                icon: User,
                title: t("auth.register.benefits.personalDashboard.title"),
                description: t("auth.register.benefits.personalDashboard.description"),
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-500/10"
              },
              {
                icon: Swords,
                title: t("auth.register.benefits.masterInstruction.title"),
                description: t("auth.register.benefits.masterInstruction.description"),
                color: "from-brand-green to-brand-green-dark",
                bgColor: "bg-brand-green/10"
              },
              {
                icon: Calendar,
                title: t("auth.register.benefits.eventAccess.title"),
                description: t("auth.register.benefits.eventAccess.description"),
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

          {/* Success Stories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 bg-gradient-to-r from-brand-black/50 to-brand-dark-grey/50 rounded-3xl p-8 border border-white/5"
          >
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold text-text-light mb-2">{t("auth.register.successStories.title")}</h4>
              <p className="text-text-muted">{t("auth.register.successStories.subtitle")}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { name: "Sarah K.", achievement: "Black Belt in 2 years", quote: "Tensho changed my life completely." },
                { name: "Mike R.", achievement: "Competition Champion", quote: "The discipline I learned here is invaluable." },
                { name: "Emma L.", achievement: "Master Instructor", quote: "From beginner to teaching others - incredible journey." }
              ].map((story, index) => (
                <div key={story.name} className="text-center p-4 rounded-xl bg-brand-black/30 border border-white/5">
                  <p className="text-text-light italic mb-2">"{story.quote}"</p>
                  <p className="font-semibold text-brand-gold">{story.name}</p>
                  <p className="text-sm text-text-muted">{story.achievement}</p>
                </div>
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
