"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/layout/back-to-top"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import {
  Crown,
  Star,
  Zap,
  Check,
  Users,
  Trophy,
  Calendar,
  BookOpen,
  Award,
  Shield,
  Heart,
  Target,
  CreditCard,
  Gift
} from "lucide-react"

const membershipPlans = [
  {
    id: "basic",
    name: "Warrior",
    price: 49,
    period: "month",
    icon: Star,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    popular: false,
    features: [
      "Unlimited class access",
      "Basic equipment usage",
      "Member-only events",
      "Online training resources",
      "Community forum access",
      "Monthly progress tracking"
    ]
  },
  {
    id: "premium",
    name: "Champion",
    price: 89,
    period: "month",
    icon: Trophy,
    color: "from-brand-gold to-yellow-500",
    bgColor: "bg-brand-gold/10",
    borderColor: "border-brand-gold/50",
    popular: true,
    features: [
      "Everything in Warrior",
      "Private lesson (1/month)",
      "Priority event registration",
      "Advanced training programs",
      "Nutrition & fitness guidance",
      "Guest passes (2/month)",
      "Exclusive merchandise discounts"
    ]
  },
  {
    id: "elite",
    name: "Master",
    price: 149,
    period: "month",
    icon: Crown,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    popular: false,
    features: [
      "Everything in Champion",
      "Private lessons (4/month)",
      "Master class workshops",
      "Personal training assessment",
      "VIP event access",
      "Custom training plans",
      "Family member discounts",
      "Priority support"
    ]
  }
]

const membershipBenefits = [
  {
    icon: Users,
    title: "Expert Instruction",
    description: "Learn from world-class martial arts masters with decades of experience."
  },
  {
    icon: Trophy,
    title: "Competitive Edge",
    description: "Prepare for tournaments with specialized training and competition coaching."
  },
  {
    icon: Heart,
    title: "Community Support",
    description: "Join a supportive community of like-minded individuals on the same journey."
  },
  {
    icon: Target,
    title: "Personal Growth",
    description: "Develop discipline, confidence, and life skills beyond physical training."
  },
  {
    icon: Shield,
    title: "Self-Defense Skills",
    description: "Master practical self-defense techniques for real-world situations."
  },
  {
    icon: Award,
    title: "Achievement Recognition",
    description: "Earn belts, certificates, and recognition for your dedication and progress."
  }
]

const faqs = [
  {
    question: "Can I freeze my membership?",
    answer: "Yes, you can freeze your membership for up to 3 months per year for medical or travel reasons."
  },
  {
    question: "Are there any signup fees?",
    answer: "No signup fees for our standard memberships. Elite memberships include a one-time initiation fee."
  },
  {
    question: "Can I bring guests?",
    answer: "Premium and Elite members receive guest passes. Basic members can purchase day passes for guests."
  },
  {
    question: "What's the cancellation policy?",
    answer: "You can cancel anytime. Your membership remains active until the end of your billing period."
  }
]

export default function MembershipPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-brand-black">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-brand-black to-brand-dark-grey">
        <div className="max-w-6xl mx-auto">
          <Breadcrumb />
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm font-medium mb-6"
            >
              <Crown className="w-4 h-4" />
              Membership Plans
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl font-bold uppercase text-text-light mb-6"
            >
              Choose Your <span className="text-brand-red">Path</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-muted text-lg max-w-2xl mx-auto"
            >
              Join Tensho International and unlock your potential. Choose the membership that fits your journey and commitment to martial arts excellence.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Membership Plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {membershipPlans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-brand-gold text-brand-black font-bold px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card className={`relative overflow-hidden ${plan.bgColor} ${plan.borderColor} border-2 h-full`}>
                  <CardHeader className="text-center pb-8">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-text-light mb-2">{plan.name}</CardTitle>
                    <div className="text-4xl font-bold text-text-light">
                      ${plan.price}
                      <span className="text-lg text-text-muted font-normal">/{plan.period}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-text-muted text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className={`w-full mt-6 ${
                            plan.popular
                              ? 'bg-brand-gold hover:bg-brand-gold/90 text-brand-black font-bold'
                              : 'bg-brand-red hover:bg-brand-red/90 text-text-light'
                          }`}
                          onClick={() => setSelectedPlan(plan.id)}
                        >
                          Choose {plan.name}
                        </Button>
                      </DialogTrigger>

                      <DialogContent className="max-w-md bg-brand-black border-white/10">
                        <div className="text-center space-y-6">
                          <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>

                          <div>
                            <h3 className="text-2xl font-bold text-text-light mb-2">{plan.name} Membership</h3>
                            <p className="text-text-muted">
                              ${plan.price}/{plan.period} - Perfect for your martial arts journey
                            </p>
                          </div>

                          <div className="bg-brand-dark-grey/50 rounded-2xl p-6">
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-text-light">Subtotal</span>
                              <span className="text-text-light font-semibold">${plan.price}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-text-light">First month free</span>
                              <span className="text-green-500 font-semibold">-$49</span>
                            </div>
                            <hr className="my-4 border-white/10" />
                            <div className="flex items-center justify-between text-lg font-bold">
                              <span className="text-text-light">Today</span>
                              <span className="text-brand-gold">$0</span>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <Button className="w-full bg-brand-red hover:bg-brand-red/90 text-text-light font-semibold py-3">
                              <CreditCard className="w-4 h-4 mr-2" />
                              Start Free Trial
                            </Button>
                            <p className="text-xs text-text-muted">
                              Cancel anytime. No setup fees. 30-day money-back guarantee.
                            </p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-light mb-4">Why Choose Tensho?</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              More than just training - join a legacy of excellence and transformation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {membershipBenefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-brand-dark-grey/50 border border-white/5 hover:border-brand-gold/30 transition-colors"
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-red/20 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-brand-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-light mb-3">{benefit.title}</h3>
                  <p className="text-text-muted text-sm">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-brand-dark-grey/50 rounded-3xl p-8 border border-white/5"
        >
          <h2 className="text-3xl font-bold text-text-light text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg font-semibold text-text-light">{faq.question}</h3>
                <p className="text-text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20 bg-gradient-to-r from-brand-red/20 to-brand-gold/20 rounded-3xl p-12 border border-white/5"
        >
          <Gift className="w-16 h-16 mx-auto text-brand-gold mb-6" />
          <h2 className="text-3xl font-bold text-text-light mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-text-muted mb-8 max-w-2xl mx-auto">
            Start your martial arts journey today with our 30-day free trial. No commitment, no setup fees, just pure dedication to excellence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-brand-red hover:bg-brand-red/90 text-text-light font-semibold px-8 py-3">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white/10 text-text-light hover:bg-white/5 px-8 py-3">
              Schedule Visit
            </Button>
          </div>
        </motion.div>
      </div>

      <Footer />
      <BackToTop />
    </main>
  )
}