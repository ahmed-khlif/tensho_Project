"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/layout/back-to-top"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { X, Maximize2, ArrowUpRight, Grid, List, Camera, Users, Trophy, GraduationCap } from "lucide-react"

const galleryImages = [
  // Training Sessions
  {
    id: 1,
    src: "/haroun_pic/optimized/haroun-instructor-portrait.jpg",
    alt: "Haroun Driss, Tensho martial arts instructor, posing in a black training shirt",
    category: "training",
    title: "Instructor Portrait",
    description: "Meet the instructor behind Tensho's self-defense training",
    width: 1024,
    height: 1024,
  },
  {
    id: 2,
    src: "/haroun_pic/optimized/haroun-children-self-defense-poster.jpg",
    alt: "Arabic promotional poster showing children practicing self-defense at KA Gym",
    category: "training",
    title: "Children's Self-Defense",
    description: "Building confidence, discipline, and practical skills for young students",
    width: 1050,
    height: 1400,
  },
  {
    id: 3,
    src: "/haroun_pic/optimized/haroun-youth-training.jpg",
    alt: "Martial arts instructor training a group of children in a dojo",
    category: "training",
    title: "Youth Training Session",
    description: "Young practitioners developing focus and confidence together",
    width: 1050,
    height: 1400,
  },

  // Competitions
  {
    id: 4,
    src: "/haroun_pic/optimized/haroun-champion-trophy.jpg",
    alt: "Haroun Driss holding a championship trophy, medals, and a martial arts certificate",
    category: "competitions",
    title: "Championship Achievement",
    description: "Celebrating dedication, competition success, and martial arts excellence",
    width: 1355,
    height: 1400,
  },
  {
    id: 5,
    src: "/haroun_pic/optimized/haroun-tensho-profile.jpg",
    alt: "Haroun Driss portrayed in Tensho martial arts armor with the academy crest",
    category: "competitions",
    title: "Tensho Martial Arts Profile",
    description: "The Tensho spirit represented through discipline, tradition, and leadership",
    width: 960,
    height: 1200,
  },
  {
    id: 6,
    src: "/haroun_pic/optimized/haroun-instructor-team.jpg",
    alt: "Three martial arts instructors standing together with raised fists during training",
    category: "competitions",
    title: "Instructor Team",
    description: "Experienced practitioners united by a shared commitment to martial arts",
    width: 1050,
    height: 1400,
  },

  // Graduations
  {
    id: 7,
    src: "/haroun_pic/optimized/haroun-student-certificates.jpg",
    alt: "Children holding martial arts certificates after a group achievement ceremony",
    category: "graduations",
    title: "Student Certificates",
    description: "Recognizing the progress and dedication of young martial artists",
    width: 1600,
    height: 1200,
  },
  {
    id: 8,
    src: "/haroun_pic/optimized/haroun-certification-seminar.jpg",
    alt: "Martial artists and instructors gathered on a training mat during a certification seminar",
    category: "graduations",
    title: "Certification Seminar",
    description: "Learning and earning recognition through focused martial arts training",
    width: 788,
    height: 1400,
  },
  {
    id: 9,
    src: "/haroun_pic/optimized/haroun-team-certificates.jpg",
    alt: "Large martial arts team posing with certificates inside a dojo",
    category: "graduations",
    title: "Team Certification",
    description: "A community of practitioners celebrating shared achievement",
    width: 1600,
    height: 1200,
  },

  // Events
  {
    id: 10,
    src: "/haroun_pic/optimized/haroun-instructor-duo.jpg",
    alt: "Two martial arts instructors standing together in front of a training whiteboard",
    category: "events",
    title: "Instructor Workshop",
    description: "Sharing practical knowledge and martial arts experience across generations",
    width: 1050,
    height: 1400,
  },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
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
      <section className="pt-28 pb-12 px-4 bg-gradient-to-b from-brand-black to-brand-dark-grey">
        <div className="max-w-6xl mx-auto">
          <Breadcrumb />
          <div className="text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm font-medium mb-5">
              <Camera className="w-4 h-4" />
              {t("pages.gallery.badge")}
            </span>
            <h1 className="font-serif text-4xl font-bold uppercase tracking-tight text-text-light sm:text-6xl">
              {t("pages.gallery.title")} <span className="text-brand-red">{t("pages.gallery.titleHighlight")}</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
              {t("pages.gallery.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12">
        {/* Filters and View Controls */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Category Filters */}
          <div className="flex max-w-full gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {galleryCategories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  aria-pressed={selectedCategory === category.id}
                  className={`h-10 shrink-0 rounded-xl px-4 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? "bg-brand-green hover:bg-brand-green-dark text-white shadow-lg shadow-brand-green/20"
                      : "border-white/10 bg-transparent text-text-muted hover:bg-white/5 hover:text-text-light"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </Button>
              )
            })}
          </div>

          {/* View Mode Toggle */}
          <div className="flex shrink-0 items-center gap-1 rounded-xl border border-white/10 bg-brand-dark-grey/60 p-1">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              aria-label="Use grid view"
              aria-pressed={viewMode === "grid"}
              title="Grid view"
              className={viewMode === "grid" ? "bg-brand-gold hover:bg-brand-gold/90 text-brand-black" : "border-transparent bg-transparent text-text-muted hover:bg-white/5"}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "masonry" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("masonry")}
              aria-label="Use masonry view"
              aria-pressed={viewMode === "masonry"}
              title="Masonry view"
              className={viewMode === "masonry" ? "bg-brand-gold hover:bg-brand-gold/90 text-brand-black" : "border-transparent bg-transparent text-text-muted hover:bg-white/5"}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className={`grid gap-5 sm:gap-6 ${
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
                initial={false}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25 }}
                className={`group relative overflow-hidden rounded-2xl bg-brand-dark-grey cursor-pointer ${
                  viewMode === "masonry" ? "h-72 sm:h-80 lg:h-96" : "aspect-[4/3]"
                }`}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      aria-label={`Open ${image.title}`}
                      className="w-full h-full relative block text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-inset"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        loading={index < 4 ? "eager" : "lazy"}
                        decoding="async"
                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Overlay Content */}
                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-text-light">
                        <div className="min-w-0">
                          <h3 className="truncate font-semibold text-lg">{image.title}</h3>
                          <p className="mt-1 line-clamp-2 text-sm text-white/75">{image.description}</p>
                        </div>
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors group-hover:bg-brand-gold group-hover:text-brand-black">
                          <Maximize2 className="h-4 w-4" />
                        </span>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-red/90 text-text-light text-xs font-medium capitalize">
                        {image.category}
                      </div>
                    </button>
                  </DialogTrigger>

                  <DialogContent
                    showCloseButton={false}
                    className="w-[calc(100%-2rem)] max-w-5xl overflow-hidden rounded-3xl border-white/10 bg-brand-black p-0 text-text-light shadow-2xl shadow-black/40"
                  >
                    <div className="grid max-h-[calc(100vh-2rem)] min-h-0 grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)]">
                      <div className="relative flex min-h-[340px] items-center justify-center bg-black/85 p-4 sm:p-8 lg:min-h-0">
                        <img
                          src={image.src}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          loading="lazy"
                          decoding="async"
                          sizes="(min-width: 1024px) 650px, calc(100vw - 2rem)"
                          className="max-h-[56vh] w-auto max-w-full rounded-xl object-contain shadow-2xl lg:max-h-[calc(100vh-4rem)]"
                        />
                        <DialogClose
                          aria-label="Close image preview"
                          className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-brand-gold hover:text-brand-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                        >
                          <X className="h-5 w-5" />
                        </DialogClose>
                      </div>

                      <div className="flex min-h-0 flex-col justify-between overflow-y-auto border-t border-white/10 bg-brand-dark-grey px-5 py-6 sm:px-8 sm:py-8 lg:border-l lg:border-t-0">
                        <div>
                          <div className="mb-7 flex items-center justify-between gap-3">
                            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
                              Image {String(image.id).padStart(2, "0")}
                            </span>
                            <span className="rounded-full bg-brand-red/15 px-3 py-1 text-xs font-semibold capitalize text-brand-red">
                              {image.category}
                            </span>
                          </div>
                          <DialogTitle className="font-serif text-2xl font-bold leading-tight text-text-light sm:text-3xl">
                            {image.title}
                          </DialogTitle>
                          <DialogDescription className="mt-4 text-sm leading-7 text-text-muted sm:text-base">
                            {image.description}
                          </DialogDescription>
                          <div className="mt-8 border-t border-black/10 pt-5 dark:border-white/10">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">About this photo</p>
                            <p className="mt-2 text-sm leading-6 text-text-light/80">
                              A moment from the Tensho martial arts community, captured during training, certification, or competition.
                            </p>
                          </div>
                        </div>
                        <a
                          href={image.src}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-green px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                        >
                          Open full image
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
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
