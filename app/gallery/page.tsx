"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/layout/back-to-top"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { X, Filter, Grid, List, Camera, Users, Trophy, GraduationCap } from "lucide-react"

const galleryImages = [
  // Training Sessions
  {
    id: 1,
    src: "/martial-arts-student-male-portrait.jpg",
    alt: "Young martial artist in training",
    category: "training",
    title: "Youth Training Session",
    description: "Dedicated young practitioners perfecting their forms"
  },
  {
    id: 2,
    src: "/adult-female-martial-artist-portrait.jpg",
    alt: "Adult female martial artist",
    category: "training",
    title: "Advanced Techniques",
    description: "Mastering complex kata movements"
  },
  {
    id: 3,
    src: "/martial-arts-philosophy-meditation-training.jpg",
    alt: "Meditation and philosophy training",
    category: "training",
    title: "Mindful Practice",
    description: "Balancing physical and mental discipline"
  },

  // Competitions
  {
    id: 4,
    src: "/martial-arts-competition-championship-tournament.jpg",
    alt: "Championship tournament",
    category: "competitions",
    title: "National Championship",
    description: "Intense competition showcasing skill and determination"
  },
  {
    id: 5,
    src: "/martial-arts-competition-coach-portrait-male.jpg",
    alt: "Competition coach",
    category: "competitions",
    title: "Coach's Guidance",
    description: "Strategic coaching during tournament preparation"
  },
  {
    id: 6,
    src: "/martial-arts-online-tournament-competition.jpg",
    alt: "Online tournament",
    category: "competitions",
    title: "Virtual Championships",
    description: "Connecting martial artists globally through digital platforms"
  },

  // Graduations
  {
    id: 7,
    src: "/martial-arts-belt-ceremony-dojo.jpg",
    alt: "Belt ceremony in dojo",
    category: "graduations",
    title: "Belt Promotion Ceremony",
    description: "Celebrating advancement and dedication"
  },
  {
    id: 8,
    src: "/martial-arts-belt-colors-ranking.jpg",
    alt: "Belt ranking system",
    category: "graduations",
    title: "Journey of Colors",
    description: "The path from white to black belt excellence"
  },

  // Events
  {
    id: 9,
    src: "/martial-arts-summit-conference-international.jpg",
    alt: "International martial arts summit",
    category: "events",
    title: "International Summit",
    description: "Global leaders gathering to advance martial arts"
  },
  {
    id: 10,
    src: "/placeholder.jpg",
    alt: "Community event",
    category: "events",
    title: "Community Outreach",
    description: "Sharing martial arts with the local community"
  },
  {
    id: 11,
    src: "/placeholder.svg",
    alt: "Special demonstration",
    category: "events",
    title: "Special Demonstrations",
    description: "Showcasing traditional and modern techniques"
  },
  {
    id: 12,
    src: "/placeholder-user.jpg",
    alt: "Workshop session",
    category: "events",
    title: "Master Workshops",
    description: "Learning from legendary instructors"
  }
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid")
  const { t } = useTranslation("common")

  const galleryCategories = [
    { id: "all", label: t("pages.gallery.categories.all"), icon: Grid },
    { id: "training", label: t("pages.gallery.categories.training"), icon: Users },
    { id: "competitions", label: t("pages.gallery.categories.competitions"), icon: Trophy },
    { id: "graduations", label: t("pages.gallery.categories.graduations"), icon: GraduationCap },
    { id: "events", label: t("pages.gallery.categories.events"), icon: Camera },
  ]

  const filteredImages = selectedCategory === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

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
              <Camera className="w-4 h-4" />
              {t("pages.gallery.badge")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl font-bold uppercase text-text-light mb-6"
            >
              {t("pages.gallery.title")} <span className="text-brand-red">{t("pages.gallery.titleHighlight")}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-muted text-lg max-w-2xl mx-auto"
            >
              {t("pages.gallery.subtitle")}
            </motion.p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Filters and View Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-6"
        >
          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {galleryCategories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? "bg-brand-red hover:bg-brand-red/90 text-text-light"
                      : "border-white/10 text-text-light hover:bg-white/5 hover:text-brand-red"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </Button>
              )
            })}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className={viewMode === "grid" ? "bg-brand-gold hover:bg-brand-gold/90 text-brand-black" : "border-white/10"}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "masonry" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("masonry")}
              className={viewMode === "masonry" ? "bg-brand-gold hover:bg-brand-gold/90 text-brand-black" : "border-white/10"}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className={`grid gap-6 ${
            viewMode === "grid"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl bg-brand-dark-grey cursor-pointer ${
                  viewMode === "masonry" ? "h-64 sm:h-80 lg:h-96" : "aspect-square"
                }`}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div
                      className="w-full h-full relative"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Overlay Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-text-light transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                        <p className="text-sm text-text-muted">{image.description}</p>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-red/90 text-text-light text-xs font-medium capitalize">
                        {image.category}
                      </div>
                    </div>
                  </DialogTrigger>

                  <DialogContent className="max-w-4xl bg-brand-black border-white/10">
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto rounded-lg"
                      />
                      <div className="mt-4">
                        <h3 className="text-xl font-bold text-text-light mb-2">{image.title}</h3>
                        <p className="text-text-muted">{image.description}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="px-3 py-1 rounded-full bg-brand-red/20 text-brand-red text-sm font-medium capitalize">
                            {image.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "500+", label: t("pages.gallery.stats.photosCaptured") },
            { value: "50+", label: t("pages.gallery.stats.eventsDocumented") },
            { value: "12", label: t("pages.gallery.stats.categories") },
            { value: "24/7", label: t("pages.gallery.stats.access") },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="p-6 rounded-2xl bg-brand-dark-grey/50 border border-white/5"
            >
              <div className="text-3xl font-bold text-brand-gold mb-2">{stat.value}</div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Footer />
      <BackToTop />
    </main>
  )
}
