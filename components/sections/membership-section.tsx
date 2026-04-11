"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check, Star, Crown, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "One Year Membership",
    price: "$10",
    period: "Processing Fee Only",
    icon: Zap,
    popular: false,
    features: [
      { text: "Official Recognition: Digital Membership Certificate issued immediately", included: true },
      { text: "Event Certificates: Receive certificates for all Tensho events", included: true },
      { text: "Professional Support: Guidance from senior masters", included: true },
      { text: "Tech Team Access: Web, SEO & Graphic Design assistance", included: true },
      { text: "Global Network: Become a Part of Global Martial Arts Family", included: true },
    ],
    cta: "Join Now",
    color: "brand-red",
  },
  {
    name: "Lifetime Membership",
    price: "$100",
    period: "One Time Payment",
    icon: Crown,
    popular: true,
    features: [
      { text: "Exclusive Special Certificate: Receive special edition certificate", included: true },
      { text: "Lifetime Validity: One-time fee, never expires", included: true },
      { text: "Legacy Status: Permanent listing in the Global Registry", included: true },
      { text: "Priority Certification: Fast-track issuance for all certificates", included: true },
      { text: "Global Network: Lifetime Member of Global Martial Arts Family", included: true },
      { text: "All Free Benefits Included", included: true },
    ],
    cta: "Get Lifetime Access",
    color: "brand-gold",
  },
]

export function MembershipSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="registration" ref={ref} className="py-24 px-4 bg-brand-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-sm font-medium mb-6">
            Select Your Plan
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase text-text-light mb-4">
            Join The <span className="text-brand-red">Elite</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            Unlock your potential with Tensho International. Rise, Lead, and Inspire.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative p-8 rounded-3xl ${
                plan.popular
                  ? "bg-gradient-to-b from-brand-gold/10 to-brand-dark-grey border-2 border-brand-gold/50"
                  : "bg-brand-dark-grey border border-white/10"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-brand-gold text-brand-black text-sm font-bold">
                    <Star className="w-4 h-4 fill-current" />
                    BEST VALUE
                  </span>
                </div>
              )}

              {/* Icon & Name */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-${plan.color}/10 flex items-center justify-center`}>
                  <plan.icon className={`w-6 h-6 text-${plan.color}`} />
                </div>
                <h3 className="font-serif text-xl font-bold text-text-light">{plan.name}</h3>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className={`font-serif text-5xl font-bold text-${plan.color}`}>{plan.price}</span>
                </div>
                <p className="text-text-muted text-sm mt-1">{plan.period}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full bg-${plan.color}/20 flex items-center justify-center mt-0.5`}>
                      {plan.popular ? (
                        <Star className={`w-3 h-3 text-${plan.color}`} />
                      ) : (
                        <Check className={`w-3 h-3 text-${plan.color}`} />
                      )}
                    </div>
                    <span className="text-text-muted text-sm leading-relaxed">{feature.text}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  className={`w-full py-6 text-lg font-semibold ${
                    plan.popular
                      ? "bg-brand-gold hover:bg-brand-gold/90 text-brand-black"
                      : "bg-brand-red hover:bg-brand-red/90 text-text-light"
                  }`}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
