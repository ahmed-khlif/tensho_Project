"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin, ArrowRight, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

const upcomingEvents = [
  {
    id: 1,
    title: "Tensho Games Online Competition 2026",
    subtitle: "Where champions rise in the digital arena",
    date: "TBA",
    time: "12:00 AM",
    location: "Online",
    status: "coming_soon",
    image: "/martial-arts-online-tournament-competition.jpg",
  },
  {
    id: 2,
    title: "International Belt Certification",
    subtitle: "Test your skills and earn your rank",
    date: "March 15, 2026",
    time: "10:00 AM",
    location: "Multiple Locations",
    status: "registration_open",
    image: "/martial-arts-belt-ceremony-dojo.jpg",
  },
  {
    id: 3,
    title: "World Martial Arts Summit 2026",
    subtitle: "Connecting masters from around the globe",
    date: "June 20-22, 2026",
    time: "9:00 AM",
    location: "Dubai, UAE",
    status: "announced",
    image: "/martial-arts-summit-conference-international.jpg",
  },
]

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const target = new Date(targetDate).getTime()
      const diff = target - now

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex gap-3">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="text-center">
          <div className="w-12 h-12 bg-brand-red/20 rounded-lg flex items-center justify-center">
            <span className="font-serif text-xl font-bold text-brand-red">{value.toString().padStart(2, "0")}</span>
          </div>
          <span className="text-[10px] text-text-muted uppercase mt-1 block">{key}</span>
        </div>
      ))}
    </div>
  )
}

export function EventsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "coming_soon":
        return { label: "Coming Soon", color: "bg-brand-gold text-brand-black" }
      case "registration_open":
        return { label: "Registration Open", color: "bg-green-500 text-white" }
      default:
        return { label: "Announced", color: "bg-brand-blue text-white" }
    }
  }

  return (
    <section id="events" ref={ref} className="py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            Upcoming Events
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase text-text-light mb-4">
            Stay <span className="text-brand-red">Connected</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            Join our exciting events, tournaments, and certification programs from around the world.
          </p>
        </motion.div>

        {/* Featured Event */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden mb-12 bg-gradient-to-r from-brand-dark-grey to-brand-black border border-white/10"
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold text-brand-black text-sm font-bold w-fit mb-4">
                <Bell className="w-4 h-4" />
                Coming Soon
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-text-light mb-3">
                Tensho Games Online Competition 2026
              </h3>
              <p className="text-text-muted text-lg mb-6">Where champions rise in the digital arena.</p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-text-muted">
                  <Calendar className="w-5 h-5 text-brand-gold" />
                  <span>TBA</span>
                </div>
                <div className="flex items-center gap-2 text-text-muted">
                  <MapPin className="w-5 h-5 text-brand-gold" />
                  <span>Online</span>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="bg-brand-red hover:bg-brand-red/90 text-text-light font-semibold px-8 py-6 text-lg w-fit">
                  Stay Tuned
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img
                src="/martial-arts-competition-championship-tournament.jpg"
                alt="Tensho Games"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-grey via-brand-dark-grey/50 to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Other Events */}
        <div className="grid md:grid-cols-2 gap-6">
          {upcomingEvents.slice(1).map((event, index) => {
            const badge = getStatusBadge(event.status)
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group bg-brand-dark-grey rounded-2xl overflow-hidden border border-white/5 hover:border-brand-red/30 transition-all"
              >
                <div className="relative h-48">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${badge.color}`}>
                      {badge.label}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-text-light mb-2 group-hover:text-brand-red transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-text-muted text-sm mb-4">{event.subtitle}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-text-muted">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-brand-red" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-brand-red" />
                      {event.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
