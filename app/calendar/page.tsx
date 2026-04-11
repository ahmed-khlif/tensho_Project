"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/layout/back-to-top"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  Users,
  Trophy,
  GraduationCap,
  Camera,
  Filter
} from "lucide-react"

const eventTypes = [
  { id: "all", label: "All Events", color: "bg-gray-500", icon: CalendarIcon },
  { id: "training", label: "Training", color: "bg-blue-500", icon: Users },
  { id: "competition", label: "Competition", color: "bg-red-500", icon: Trophy },
  { id: "graduation", label: "Graduation", color: "bg-green-500", icon: GraduationCap },
  { id: "seminar", label: "Seminar", color: "bg-purple-500", icon: Camera },
]

const calendarEvents = [
  {
    id: 1,
    title: "Advanced Kata Workshop",
    date: "2024-01-20",
    time: "10:00 AM - 2:00 PM",
    type: "training",
    location: "Main Dojo",
    instructor: "Master Hiroshi Tanaka",
    description: "Master advanced kata techniques and forms with our senior instructor.",
    capacity: 25,
    registered: 18,
    price: "Free for members"
  },
  {
    id: 2,
    title: "Regional Championship",
    date: "2024-01-25",
    time: "9:00 AM - 6:00 PM",
    type: "competition",
    location: "Sports Complex",
    instructor: "Multiple Judges",
    description: "Annual regional martial arts championship featuring all disciplines.",
    capacity: 200,
    registered: 156,
    price: "$25 entry"
  },
  {
    id: 3,
    title: "Black Belt Graduation",
    date: "2024-02-01",
    time: "6:00 PM - 8:00 PM",
    type: "graduation",
    location: "Main Dojo",
    instructor: "Grand Master Li Wei",
    description: "Celebrating the achievement of 5 new black belts.",
    capacity: 100,
    registered: 85,
    price: "By invitation"
  },
  {
    id: 4,
    title: "Self-Defense Seminar",
    date: "2024-02-10",
    time: "2:00 PM - 5:00 PM",
    type: "seminar",
    location: "Community Center",
    instructor: "Master Sarah Chen",
    description: "Essential self-defense techniques for everyday situations.",
    capacity: 50,
    registered: 42,
    price: "$15"
  },
  {
    id: 5,
    title: "Youth Training Camp",
    date: "2024-02-15",
    time: "9:00 AM - 4:00 PM",
    type: "training",
    location: "Main Dojo",
    instructor: "Sensei Marcus Rodriguez",
    description: "Intensive training camp for young practitioners aged 8-16.",
    capacity: 30,
    registered: 28,
    price: "$50"
  }
]

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedType, setSelectedType] = useState("all")
  const [selectedEvent, setSelectedEvent] = useState<typeof calendarEvents[0] | null>(null)

  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  // Generate calendar days
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day)
    }

    return days
  }

  const days = getDaysInMonth(currentDate)

  const filteredEvents = selectedType === "all"
    ? calendarEvents
    : calendarEvents.filter(event => event.type === selectedType)

  const getEventsForDay = (day: number) => {
    return filteredEvents.filter(event => {
      const eventDate = new Date(event.date)
      return eventDate.getDate() === day &&
             eventDate.getMonth() === currentMonth &&
             eventDate.getFullYear() === currentYear
    })
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev)
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

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
              <CalendarIcon className="w-4 h-4" />
              Event Calendar
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl font-bold uppercase text-text-light mb-6"
            >
              Upcoming <span className="text-brand-red">Events</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-muted text-lg max-w-2xl mx-auto"
            >
              Stay connected with our martial arts community. View upcoming training sessions, competitions, seminars, and special events.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col lg:flex-row items-center justify-between mb-12 gap-6"
        >
          {/* Month Navigation */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => navigateMonth('prev')}
              className="border-white/10 text-text-light hover:bg-white/5 hover:text-brand-red"
            >
              <ChevronLeft className="w-4 h-4 text-text-light" />
            </Button>
            <h2 className="text-2xl font-bold text-text-light min-w-[200px] text-center">
              {monthNames[currentMonth]} {currentYear}
            </h2>
            <Button
              variant="outline"
              onClick={() => navigateMonth('next')}
              className="border-white/10 text-text-light hover:bg-white/5 hover:text-brand-red"
            >
              <ChevronRight className="w-4 h-4 text-text-light" />
            </Button>
          </div>

          {/* Event Type Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {eventTypes.map((type) => {
              const Icon = type.icon
              return (
                <Button
                  key={type.id}
                  variant={selectedType === type.id ? "default" : "outline"}
                  onClick={() => setSelectedType(type.id)}
                  className={`flex items-center gap-2 ${
                    selectedType === type.id
                      ? "bg-brand-red hover:bg-brand-red/90 text-text-light"
                      : "border-white/10 text-text-light hover:bg-white/5 hover:text-brand-red"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {type.label}
                </Button>
              )
            })}
          </div>
        </motion.div>

        {/* Calendar Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-brand-dark-grey/50 rounded-3xl p-8 border border-white/5 backdrop-blur-sm mb-12"
        >
          {/* Day Headers */}
          <div className="grid grid-cols-7 gap-4 mb-6">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center text-text-muted font-medium py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-4">
            {days.map((day, index) => {
              const dayEvents = day ? getEventsForDay(day) : []
              const isToday = day === new Date().getDate() &&
                            currentMonth === new Date().getMonth() &&
                            currentYear === new Date().getFullYear()

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  className={`min-h-[120px] p-3 rounded-2xl border transition-all duration-300 ${
                    day
                      ? `border-white/5 hover:border-brand-gold/30 cursor-pointer ${
                          isToday ? 'bg-brand-gold/10 border-brand-gold/50' : 'bg-brand-black/30'
                        }`
                      : 'border-transparent'
                  }`}
                >
                  {day && (
                    <>
                      <div className={`text-sm font-medium mb-2 ${
                        isToday ? 'text-brand-gold' : 'text-text-light'
                      }`}>
                        {day}
                      </div>
                      <div className="space-y-1">
                        {dayEvents.slice(0, 2).map((event) => {
                          const eventType = eventTypes.find(type => type.id === event.type)
                          return (
                            <Dialog key={event.id}>
                              <DialogTrigger asChild>
                                <div
                                  className={`text-xs p-2 rounded-lg cursor-pointer hover:scale-105 transition-transform ${
                                    eventType?.color || 'bg-gray-500'
                                  } text-white truncate`}
                                  onClick={() => setSelectedEvent(event)}
                                >
                                  {event.title}
                                </div>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl bg-brand-black border-white/10">
                                <div className="space-y-6">
                                  <div>
                                    <h3 className="text-2xl font-bold text-text-light mb-2">{event.title}</h3>
                                    <div className="flex items-center gap-2 mb-4">
                                      <Badge className={`${eventType?.color} text-white`}>
                                        {eventType?.label}
                                      </Badge>
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-3">
                                      <div className="flex items-center gap-3 text-text-muted">
                                        <CalendarIcon className="w-5 h-5 text-brand-gold" />
                                        <span>{new Date(event.date).toLocaleDateString('en-US', {
                                          month: 'short',
                                          day: 'numeric',
                                          year: 'numeric'
                                        })}</span>
                                      </div>
                                      <div className="flex items-center gap-3 text-text-muted">
                                        <Clock className="w-5 h-5 text-brand-gold" />
                                        <span>{event.time}</span>
                                      </div>
                                      <div className="flex items-center gap-3 text-text-muted">
                                        <MapPin className="w-5 h-5 text-brand-gold" />
                                        <span>{event.location}</span>
                                      </div>
                                    </div>

                                    <div className="space-y-3">
                                      <div className="flex items-center gap-3 text-text-muted">
                                        <Users className="w-5 h-5 text-brand-gold" />
                                        <span>{event.registered}/{event.capacity} registered</span>
                                      </div>
                                      <div className="text-text-light font-medium">
                                        Instructor: {event.instructor}
                                      </div>
                                      <div className="text-brand-gold font-semibold">
                                        {event.price}
                                      </div>
                                    </div>
                                  </div>

                                  <p className="text-text-muted">{event.description}</p>

                                  <div className="flex gap-3">
                                    <Button className="flex-1 bg-brand-red hover:bg-brand-red/90">
                                      Register Now
                                    </Button>
                                    <Button variant="outline" className="border-white/10">
                                      Add to Calendar
                                    </Button>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          )
                        })}
                        {dayEvents.length > 2 && (
                          <div className="text-xs text-text-muted">
                            +{dayEvents.length - 2} more
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Upcoming Events List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-brand-dark-grey/50 rounded-3xl p-8 border border-white/5 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-text-light mb-6">Upcoming Events</h3>
          <div className="space-y-4">
            {filteredEvents.slice(0, 5).map((event, index) => {
              const eventType = eventTypes.find(type => type.id === event.type)
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-2xl bg-brand-black/30 border border-white/5 hover:border-brand-gold/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${eventType?.color}`}>
                      {eventType && <eventType.icon className="w-6 h-6 text-white" />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-light">{event.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-text-muted">
                        <span className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />
                          {new Date(event.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-text-muted mb-1">
                      {event.registered}/{event.capacity}
                    </div>
                    <Button size="sm" className="bg-brand-red hover:bg-brand-red/90">
                      Register
                    </Button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>

      <Footer />
      <BackToTop />
    </main>
  )
}