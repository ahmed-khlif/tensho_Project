"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
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
    name: "warrior",
    price: 49,
    period: "month",
    icon: Star,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    popular: false,
    features: [
      "unlimitedClassAccess",
      "basicEquipmentUsage",
      "memberOnlyEvents",
      "onlineTrainingResources",
      "communityForumAccess",
      "monthlyProgressTracking"
    ]
  },
  {
    id: "premium",
    name: "champion",
    price: 89,
    period: "month",
    icon: Trophy,
    color: "from-brand-gold to-yellow-500",
    bgColor: "bg-brand-gold/10",
    borderColor: "border-brand-gold/50",
    popular: true,
    features: [
      "everythingInWarrior",
      "privateLessonMonthly",
      "priorityEventRegistration",
      "advancedTrainingPrograms",
      "nutritionAndFitnessGuidance",
      "guestPassesMonthly",
      "exclusiveMerchandiseDiscounts"
    ]
  },
  {
    id: "elite",
    name: "master",
    price: 149,
    period: "month",
    icon: Crown,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    popular: false,
    features: [
      "everythingInChampion",
      "privateLessonsFourPerMonth",
      "masterClassWorkshops",
      "personalTrainingAssessment",
      "vipEventAccess",
      "customTrainingPlans",
      "familyMemberDiscounts",
      "prioritySupport"
    ]
  }
]

const membershipBenefits = [
  {
    icon: Users,
    titleKey: "pages.membership.benefits.expertInstruction.title",
    descriptionKey: "pages.membership.benefits.expertInstruction.description"
  },
  {
    icon: Trophy,
    titleKey: "pages.membership.benefits.competitiveEdge.title",
    descriptionKey: "pages.membership.benefits.competitiveEdge.description"
  },
  {
    icon: Heart,
    titleKey: "pages.membership.benefits.communitySupport.title",
    descriptionKey: "pages.membership.benefits.communitySupport.description"
  },
  {
    icon: Target,
    titleKey: "pages.membership.benefits.personalGrowth.title",
    descriptionKey: "pages.membership.benefits.personalGrowth.description"
  },
  {
    icon: Shield,
    titleKey: "pages.membership.benefits.selfDefenseSkills.title",
    descriptionKey: "pages.membership.benefits.selfDefenseSkills.description"
  },
  {
    icon: Award,
    titleKey: "pages.membership.benefits.achievementRecognition.title",
    descriptionKey: "pages.membership.benefits.achievementRecognition.description"
  }
]

const faqs = [
  {
    questionKey: "pages.membership.faq.items.freeze.question",
    answerKey: "pages.membership.faq.items.freeze.answer"
  },
  {
    questionKey: "pages.membership.faq.items.signupFees.question",
    answerKey: "pages.membership.faq.items.signupFees.answer"
  },
  {
    questionKey: "pages.membership.faq.items.guests.question",
    answerKey: "pages.membership.faq.items.guests.answer"
  },
  {
    questionKey: "pages.membership.faq.items.cancellation.question",
    answerKey: "pages.membership.faq.items.cancellation.answer"
  }
]

export default function MembershipPage() {
  const { t } = useTranslation("common")
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
              {t("pages.membership.badge")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl font-bold uppercase text-text-light mb-6"
            >
              {t("pages.membership.title")} <span className="text-brand-red">{t("pages.membership.titleHighlight")}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-muted text-lg max-w-2xl mx-auto"
            >
              {t("pages.membership.subtitle")}
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
                      {t("pages.membership.mostPopular")}
                    </Badge>
                  </div>
                )}

                <Card className={`relative overflow-hidden ${plan.bgColor} ${plan.borderColor} border-2 h-full`}>
                  <CardHeader className="text-center pb-8">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-text-light mb-2">
                      {t(`pages.membership.plans.${plan.name}`)}
                    </CardTitle>
                    <div className="text-4xl font-bold text-text-light">
                      ${plan.price}
                      <span className="text-lg text-text-muted font-normal">/{t(`pages.membership.period.${plan.period}`)}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-text-muted text-sm">{t(`pages.membership.features.${plan.id}.${feature}`)}</span>
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
                          {t("pages.membership.choosePlan", { plan: t(`pages.membership.plans.${plan.name}`) })}
                        </Button>
                      </DialogTrigger>

                      <DialogContent className="max-w-md bg-brand-black border-white/10">
                        <div className="text-center space-y-6">
                          <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>

                          <div>
                            <h3 className="text-2xl font-bold text-text-light mb-2">
                              {t("pages.membership.membershipTitle", { plan: t(`pages.membership.plans.${plan.name}`) })}
                            </h3>
                            <p className="text-text-muted">
                              {t("pages.membership.modalSubtitle", {
                                price: plan.price,
                                period: t(`pages.membership.period.${plan.period}`),
                              })}
                            </p>
                          </div>

                          <div className="bg-brand-dark-grey/50 rounded-2xl p-6">
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-text-light">{t("pages.membership.subtotal")}</span>
                              <span className="text-text-light font-semibold">${plan.price}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-text-light">{t("pages.membership.firstMonthFree")}</span>
                              <span className="text-green-500 font-semibold">-$49</span>
                            </div>
                            <hr className="my-4 border-white/10" />
                            <div className="flex items-center justify-between text-lg font-bold">
                              <span className="text-text-light">{t("pages.membership.today")}</span>
                              <span className="text-brand-gold">$0</span>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <Button className="w-full bg-brand-red hover:bg-brand-red/90 text-text-light font-semibold py-3">
                              <CreditCard className="w-4 h-4 mr-2" />
                              {t("pages.membership.startFreeTrial")}
                            </Button>
                            <p className="text-xs text-text-muted">
                              {t("pages.membership.trialHint")}
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
            <h2 className="text-3xl font-bold text-text-light mb-4">{t("pages.membership.benefitsTitle")}</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              {t("pages.membership.benefitsSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {membershipBenefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.titleKey}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-brand-dark-grey/50 border border-white/5 hover:border-brand-gold/30 transition-colors"
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-red/20 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-brand-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-light mb-3">{t(benefit.titleKey)}</h3>
                  <p className="text-text-muted text-sm">{t(benefit.descriptionKey)}</p>
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
          <h2 className="text-3xl font-bold text-text-light text-center mb-8">{t("pages.membership.faq.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg font-semibold text-text-light">{t(faq.questionKey)}</h3>
                <p className="text-text-muted">{t(faq.answerKey)}</p>
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
          <h2 className="text-3xl font-bold text-text-light mb-4">{t("pages.membership.cta.title")}</h2>
          <p className="text-text-muted mb-8 max-w-2xl mx-auto">
            {t("pages.membership.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-brand-red hover:bg-brand-red/90 text-text-light font-semibold px-8 py-3">
              {t("pages.membership.cta.startFreeTrial")}
            </Button>
            <Button variant="outline" className="border-white/10 text-text-light hover:bg-white/5 px-8 py-3">
              {t("pages.membership.cta.scheduleVisit")}
            </Button>
          </div>
        </motion.div>
      </div>

      <Footer />
      <BackToTop />
    </main>
  )
}
