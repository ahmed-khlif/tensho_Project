"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/layout/back-to-top"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Swords, Eye, EyeOff, Mail, Lock, User, Phone, Calendar, Trophy, ChevronLeft, ChevronRight, Check } from "lucide-react"

const steps = [
  { id: 1, title: "Personal Info", icon: User },
  { id: 2, title: "Account Setup", icon: Lock },
  { id: 3, title: "Experience", icon: Trophy },
  { id: 4, title: "Confirmation", icon: Check }
]

export default function RegisterPage() {
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

  return (
    <main className="min-h-screen bg-brand-black relative overflow-hidden">
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
                src="/logo.png"
                alt="Tensho International"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-red/20 to-brand-gold/20 border border-brand-gold/30 text-brand-gold text-sm font-medium shadow-lg">
              <Swords className="w-5 h-5" />
              Join the Elite Ranks
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl font-bold uppercase text-text-light mb-6 leading-tight"
          >
            Begin Your <span className="text-brand-red">Legend</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted text-lg max-w-2xl mx-auto"
          >
            Join Tensho International and step into a world where discipline meets destiny. Transform your potential into mastery.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center gap-8 mt-12"
          >
            {[
              { value: "10K+", label: "Active Members" },
              { value: "50+", label: "Countries" },
              { value: "28+", label: "Years Excellence" },
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

      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative bg-gradient-to-br from-brand-dark-grey/90 to-brand-black/90 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-sm shadow-2xl"
        >
          {/* Decorative Border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-red/20 via-transparent to-brand-gold/20 opacity-50" />
          <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-brand-black to-brand-dark-grey" />

          <div className="relative z-10">
            {/* Stepper Header */}
            <div className="mb-8">
              <div className="flex items-center justify-center mb-8">
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
              <div className="text-center">
                <h2 className="text-xl font-bold text-text-light mb-2">
                  {steps.find(s => s.id === currentStep)?.title}
                </h2>
                <p className="text-text-muted">
                  Step {currentStep} of {steps.length}
                </p>
              </div>
            </div>

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
                        <h3 className="text-lg font-semibold text-text-light mb-2">Personal Information</h3>
                        <p className="text-text-muted">Tell us about yourself to get started</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-text-light font-medium">
                            First Name
                          </Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                            <Input
                              id="firstName"
                              type="text"
                              placeholder="John"
                              value={formData.firstName}
                              onChange={(e) => handleInputChange("firstName", e.target.value)}
                              className="pl-12 bg-brand-black/50 border-white/10 text-text-light placeholder:text-text-muted focus:border-brand-gold h-12"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-text-light font-medium">
                            Last Name
                          </Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                            <Input
                              id="lastName"
                              type="text"
                              placeholder="Doe"
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
                          Email Address
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="pl-12 bg-brand-black/50 border-white/10 text-text-light placeholder:text-text-muted focus:border-brand-gold h-12"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-text-light font-medium">
                          Phone Number
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+1 (555) 123-4567"
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
                        <h3 className="text-lg font-semibold text-text-light mb-2">Account Setup</h3>
                        <p className="text-text-muted">Create your secure account credentials</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-text-light font-medium">
                          Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a strong password"
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
                          Confirm Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                          <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
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
                        <h3 className="text-lg font-semibold text-text-light mb-2">Martial Arts Experience</h3>
                        <p className="text-text-muted">Share your background to personalize your journey</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="dateOfBirth" className="text-text-light font-medium">
                            Date of Birth
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
                            Experience Level
                          </Label>
                          <div className="relative">
                            <Trophy className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                            <select
                              id="experience"
                              value={formData.experience}
                              onChange={(e) => handleInputChange("experience", e.target.value)}
                              className="w-full pl-12 pr-4 py-3 bg-brand-black/50 border border-white/10 rounded-md text-text-light focus:border-brand-gold focus:outline-none h-12"
                            >
                              <option value="">Select level</option>
                              <option value="beginner">Beginner</option>
                              <option value="intermediate">Intermediate</option>
                              <option value="advanced">Advanced</option>
                              <option value="black-belt">Black Belt</option>
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
                        <h3 className="text-lg font-semibold text-text-light mb-2">Final Confirmation</h3>
                        <p className="text-text-muted">Review and confirm your registration</p>
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
                            I agree to the{" "}
                            <Link href="#" className="text-brand-gold hover:text-brand-gold/80">
                              Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="#" className="text-brand-gold hover:text-brand-gold/80">
                              Privacy Policy
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
                            Subscribe to our newsletter for training tips and event updates
                          </Label>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/10">
                  <Button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    variant="outline"
                    className="border-white/10 text-text-muted hover:text-text-light hover:bg-white/5 disabled:opacity-50"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>

                  <div className="flex space-x-2">
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
                      className="bg-brand-gold hover:bg-brand-gold/90 text-brand-black"
                    >
                      Next
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-brand-red to-brand-red/80 hover:from-brand-red/90 hover:to-brand-red/70 text-text-light font-bold px-8 py-3 shadow-lg shadow-brand-red/25 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!formData.agreeToTerms}
                      >
                        <Swords className="w-5 h-5 mr-2" />
                        Begin Your Martial Arts Journey
                      </Button>
                    </motion.div>
                  )}
                </div>

                {currentStep === steps.length && !formData.agreeToTerms && (
                  <p className="text-sm text-brand-gold text-center mt-4">
                    Please accept the terms to complete registration
                  </p>
                )}
              </form>
            </AnimatePresence>
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
                <Separator className="w-full bg-white/10" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-brand-dark-grey px-2 text-text-muted">Or register with</span>
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

          {/* Sign In Link */}
          <div className="mt-8 text-center">
            <p className="text-text-muted">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-brand-gold hover:text-brand-gold/80 font-medium transition-colors"
              >
                Sign in here
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
            <h3 className="text-2xl font-bold text-text-light mb-4">Your Path to Mastery</h3>
            <p className="text-text-muted">Join a legacy of warriors who transformed their lives through discipline and dedication</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Trophy,
                title: "Free Trial Class",
                description: "Experience authentic martial arts training",
                color: "from-yellow-500 to-yellow-600",
                bgColor: "bg-yellow-500/10"
              },
              {
                icon: User,
                title: "Personal Dashboard",
                description: "Track your journey and achievements",
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-500/10"
              },
              {
                icon: Swords,
                title: "Master Instruction",
                description: "Learn from legendary martial artists",
                color: "from-red-500 to-red-600",
                bgColor: "bg-red-500/10"
              },
              {
                icon: Calendar,
                title: "Event Access",
                description: "Exclusive tournaments and seminars",
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
              <h4 className="text-xl font-bold text-text-light mb-2">Success Stories</h4>
              <p className="text-text-muted">Real transformations from our community</p>
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