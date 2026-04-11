"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/layout/back-to-top"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Star, Award, Users, Calendar, Trophy, BookOpen, Shield, X, Download } from "lucide-react"
import { masters } from "@/lib/data"

const masterDetails = {
  "grand-master-hiroshi-tanaka": {
    ...masters[0],
    bio: "Grand Master Hiroshi Tanaka has dedicated over 45 years to the art of traditional Karate. Born in Okinawa, Japan, he began training at age 5 under the legendary Master Kenji Nakamura. His journey led him to become an Olympic coach and world champion, representing the pinnacle of traditional martial arts excellence.",
    philosophy: "Martial arts is not about fighting, it's about building character and discipline. Every technique teaches us about respect, perseverance, and the harmony between mind and body.",
    specialties: ["Shotokan Karate", "Kobudo Weapons", "Meditation Practices", "Traditional Forms"],
    certifications: ["10th Dan Black Belt", "Olympic Coaching License", "International Judging Certification"],
    notableStudents: ["Olympic Gold Medalists", "World Champions", "National Team Members"],
    publications: ["The Way of Traditional Karate", "Meditation in Martial Arts"],
    contact: "Available for seminars and advanced training sessions."
  },
  "master-sarah-chen": {
    ...masters[1],
    bio: "Master Sarah Chen revolutionized women's participation in martial arts through her pioneering work in Mixed Martial Arts. Starting from humble beginnings, she became the first female UFC trainer and has mentored countless champions while breaking gender barriers in combat sports.",
    philosophy: "Every student has potential. My role is to unlock it through dedication and proper guidance. Strength comes not just from the body, but from the spirit within.",
    specialties: ["Mixed Martial Arts", "Self-Defense Techniques", "Women's Combat Training", "Injury Prevention"],
    certifications: ["8th Dan Black Belt", "UFC Training Certification", "Sports Medicine License"],
    notableStudents: ["UFC Champions", "Self-Defense Instructors", "Law Enforcement Trainers"],
    publications: ["Empowerment Through Combat", "Women's Guide to MMA"],
    contact: "Specializes in women's self-defense and advanced MMA training."
  },
  "sensei-marcus-rodriguez": {
    ...masters[2],
    bio: "Sensei Marcus Rodriguez's journey from the streets of Rio to becoming a BJJ world champion exemplifies the transformative power of Brazilian Jiu-Jitsu. His technical mastery and teaching methodology have produced multiple world champions and revolutionized ground fighting techniques worldwide.",
    philosophy: "Technique without heart is empty. Heart without technique is blind. The true mastery comes when both are perfectly balanced.",
    specialties: ["Brazilian Jiu-Jitsu", "Ground Fighting", "Competition Training", "Self-Defense"],
    certifications: ["9th Dan Black Belt", "IBJJF Master Certification", "International Coaching License"],
    notableStudents: ["IBJJF World Champions", "UFC Fighters", "Law Enforcement Specialists"],
    publications: ["The Way of Balance", "Advanced Ground Fighting"],
    contact: "Offers private lessons and competition preparation."
  },
  "grand-master-li-wei": {
    ...masters[3],
    bio: "Grand Master Li Wei represents the living bridge between ancient Chinese martial traditions and modern competitive wushu. His 50-year dedication to preserving and evolving traditional techniques while adapting to contemporary needs has made him a UNESCO ambassador for martial arts cultural preservation.",
    philosophy: "The path of martial arts is a journey of self-discovery and continuous improvement. Each technique is a step toward understanding ourselves and the universe.",
    specialties: ["Wushu Forms", "Traditional Kung Fu", "Qigong Practices", "Cultural Preservation"],
    certifications: ["10th Dan Black Belt", "UNESCO Martial Arts Ambassador", "Cultural Heritage Expert"],
    notableStudents: ["National Team Members", "Cultural Ambassadors", "Traditional Masters"],
    publications: ["Harmony of Movement", "Preserving Ancient Wisdom"],
    contact: "Available for cultural seminars and traditional training."
  }
}

export default function MasterProfilePage() {
  const params = useParams()
  const slug = params.slug as string
  const master = masterDetails[slug as keyof typeof masterDetails]
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

  if (!master) {
    return (
      <main className="min-h-screen bg-brand-black">
        <Navbar />
        <div className="pt-32 pb-16 px-4 text-center">
          <h1 className="text-4xl font-bold text-text-light mb-4">Master Not Found</h1>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-brand-black">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-brand-black to-brand-dark-grey">
        <div className="max-w-6xl mx-auto">
          <Breadcrumb />
          <div className="text-center mb-8">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-sm font-medium mb-6"
            >
              <Shield className="w-4 h-4" />
              Verified Master Profile
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl font-bold uppercase text-text-light mb-6"
            >
              {master.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-brand-gold text-xl font-medium mb-4"
            >
              {master.title} • {master.specialty}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center gap-6 text-text-muted"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{master.experience} Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>1000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span>5.0 Rating</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Master Image & Quick Stats */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-24"
            >
              <div className="relative mb-6">
                <div className="w-full aspect-square rounded-2xl overflow-hidden border-4 border-brand-red/30 shadow-2xl">
                  <img
                    src={master.image || "/placeholder.svg"}
                    alt={master.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-brand-red text-text-light px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap shadow-lg">
                  {master.experience} Experience
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-brand-dark-grey/50 rounded-2xl p-6 border border-white/5 backdrop-blur-sm">
                <h3 className="text-text-light font-semibold mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Dan Level</span>
                    <span className="text-brand-gold font-bold">{master.title.split(' ')[0]}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Students</span>
                    <span className="text-brand-red font-bold">1000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Rating</span>
                    <span className="text-yellow-500 font-bold">5.0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Experience</span>
                    <span className="text-text-light font-bold">{master.experience}</span>
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <div className="mt-6">
                <Button className="w-full bg-brand-red hover:bg-brand-red/90 text-text-light font-semibold py-3">
                  Request Training Session
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Master Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Biography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-brand-dark-grey/50 rounded-2xl p-8 border border-white/5 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-text-light mb-4">Biography</h2>
              <p className="text-text-muted leading-relaxed mb-6">{master.bio}</p>
              <blockquote className="border-l-4 border-brand-gold pl-6 italic text-text-light text-lg">
                "{master.quote}"
              </blockquote>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="bg-brand-dark-grey/50 rounded-2xl p-8 border border-white/5 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-text-light mb-4">Certifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative group cursor-pointer">
                      <img
                        src="/martial-arts-certificate-gold-border-official.jpg"
                        alt={`${master.name} Certificate`}
                        className="w-full rounded-lg border border-white/10 hover:border-brand-gold transition-colors"
                      />
                      <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                        <button className="px-4 py-2 bg-brand-red text-text-light rounded-full text-sm font-medium hover:bg-brand-red/90 transition-colors">
                          View Certificate
                        </button>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl bg-brand-black border-white/10">
                    <div className="relative">
                      <img
                        src="/martial-arts-certificate-gold-border-official.jpg"
                        alt={`${master.name} Certificate`}
                        className="w-full h-auto rounded-lg"
                      />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Button
                          size="sm"
                          className="bg-brand-red hover:bg-brand-red/90 text-text-light"
                          onClick={() => {
                            // Simulate PDF download
                            const link = document.createElement('a')
                            link.href = '/martial-arts-certificate-gold-border-official.jpg'
                            link.download = `${master.name.replace(/\s+/g, '_')}_Certificate.jpg`
                            link.click()
                          }}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative group cursor-pointer">
                      <img
                        src="/japanese-martial-arts-certificate.jpg"
                        alt={`${master.name} Certificate`}
                        className="w-full rounded-lg border border-white/10 hover:border-brand-gold transition-colors"
                      />
                      <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                        <button className="px-4 py-2 bg-brand-red text-text-light rounded-full text-sm font-medium hover:bg-brand-red/90 transition-colors">
                          View Certificate
                        </button>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl bg-brand-black border-white/10">
                    <div className="relative">
                      <img
                        src="/japanese-martial-arts-certificate.jpg"
                        alt={`${master.name} Certificate`}
                        className="w-full h-auto rounded-lg"
                      />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Button
                          size="sm"
                          className="bg-brand-red hover:bg-brand-red/90 text-text-light"
                          onClick={() => {
                            // Simulate PDF download
                            const link = document.createElement('a')
                            link.href = '/japanese-martial-arts-certificate.jpg'
                            link.download = `${master.name.replace(/\s+/g, '_')}_Certificate.jpg`
                            link.click()
                          }}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <p className="text-text-muted text-sm mt-4">
                Official certificates and credentials of {master.name}.
              </p>
            </motion.div>

            {/* Certification Video */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-brand-dark-grey/50 rounded-2xl p-8 border border-white/5 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-text-light mb-4">Certification Ceremony</h2>
              <div className="aspect-video rounded-xl overflow-hidden bg-brand-black">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title={`${master.name} Certification Ceremony`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-text-muted text-sm mt-4">
                Watch {master.name}'s official certification ceremony and demonstration.
              </p>
            </motion.div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-brand-dark-grey/50 rounded-2xl p-8 border border-white/5 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-text-light mb-4">Philosophy</h2>
              <p className="text-text-muted leading-relaxed">{master.philosophy}</p>
            </motion.div>

            {/* Specialties */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-brand-dark-grey/50 rounded-2xl p-8 border border-white/5 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-text-light mb-4">Specialties</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {master.specialties.map((specialty, index) => (
                  <div key={index} className="flex items-center gap-3 text-text-muted">
                    <Award className="w-5 h-5 text-brand-gold flex-shrink-0" />
                    <span>{specialty}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-brand-dark-grey/50 rounded-2xl p-8 border border-white/5 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-text-light mb-4">Key Achievements</h2>
              <div className="space-y-3">
                {master.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 text-text-muted">
                    <Trophy className="w-5 h-5 text-brand-red flex-shrink-0" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-brand-dark-grey/50 rounded-2xl p-8 border border-white/5 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-text-light mb-4">Certifications</h2>
              <div className="space-y-3">
                {master.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 text-text-muted">
                    <Award className="w-5 h-5 text-brand-gold flex-shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Notable Students */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-brand-dark-grey/50 rounded-2xl p-8 border border-white/5 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-text-light mb-4">Notable Students</h2>
              <div className="space-y-3">
                {master.notableStudents.map((student, index) => (
                  <div key={index} className="flex items-center gap-3 text-text-muted">
                    <Users className="w-5 h-5 text-brand-red flex-shrink-0" />
                    <span>{student}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Publications */}
            {master.publications && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="bg-brand-dark-grey/50 rounded-2xl p-8 border border-white/5 backdrop-blur-sm"
              >
                <h2 className="text-2xl font-bold text-text-light mb-4">Publications</h2>
                <div className="space-y-3">
                  {master.publications.map((pub, index) => (
                    <div key={index} className="flex items-center gap-3 text-text-muted">
                      <BookOpen className="w-5 h-5 text-brand-gold flex-shrink-0" />
                      <span>{pub}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-brand-dark-grey/50 rounded-2xl p-8 border border-white/5 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-text-light mb-4">Training Availability</h2>
              <p className="text-text-muted mb-6">{master.contact}</p>
              <div className="flex gap-4">
                <Button className="bg-brand-red hover:bg-brand-red/90 text-text-light font-semibold">
                  Schedule Session
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

      </div>

      <Footer />
      <BackToTop />
    </main>
  )
}