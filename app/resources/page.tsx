"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/layout/back-to-top"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Download,
  Video,
  FileText,
  Award,
  Target,
  Users,
  Calendar,
  Play,
  ExternalLink
} from "lucide-react"

type ResourceItem = {
  title: string
  description: string
  type: string
  size: string
}

type VideoItem = {
  title: string
  description: string
  duration: string
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels"
}

type BeltRequirement = {
  belt: string
  stripes: number
  requirements: string[]
}

const resources: {
  forms: ResourceItem[]
  guides: ResourceItem[]
  videos: VideoItem[]
} = {
  forms: [
    { title: "Membership Application", description: "Official membership registration form", type: "PDF", size: "245 KB" },
    { title: "Waiver & Release Form", description: "Required liability waiver for all students", type: "PDF", size: "180 KB" },
    { title: "Medical Information Form", description: "Health and medical history disclosure", type: "PDF", size: "156 KB" },
    { title: "Belt Testing Application", description: "Application for belt promotion testing", type: "PDF", size: "134 KB" },
    { title: "Private Lesson Request", description: "Schedule private training sessions", type: "PDF", size: "98 KB" }
  ],
  guides: [
    { title: "Beginner's Guide to Karate", description: "Everything you need to know to start your journey", type: "PDF", size: "2.1 MB" },
    { title: "Belt Ranking System", description: "Understanding belt colors and requirements", type: "PDF", size: "890 KB" },
    { title: "Dojo Etiquette & Rules", description: "Proper conduct and dojo guidelines", type: "PDF", size: "445 KB" },
    { title: "Self-Defense Basics", description: "Fundamental self-defense techniques", type: "PDF", size: "1.2 MB" },
    { title: "Training at Home", description: "Exercises and drills for home practice", type: "PDF", size: "756 KB" }
  ],
  videos: [
    { title: "Basic Stance Training", description: "Master the fundamental stances", duration: "15:32", level: "Beginner" },
    { title: "Punch Combinations", description: "Essential striking combinations", duration: "22:45", level: "Intermediate" },
    { title: "Kata Performance", description: "Complete Heian Shodan breakdown", duration: "28:17", level: "All Levels" },
    { title: "Self-Defense Techniques", description: "Practical defense against common attacks", duration: "31:08", level: "Advanced" },
    { title: "Breathing & Meditation", description: "Mindfulness practices for martial artists", duration: "18:55", level: "All Levels" }
  ]
}

const beltRequirements: BeltRequirement[] = [
  { belt: "White Belt", stripes: 0, requirements: ["Basic stances", "Front punch", "Bow etiquette", "Dojo rules"] },
  { belt: "Yellow Belt", stripes: 0, requirements: ["All white belt techniques", "Reverse punch", "Front kick", "Basic blocks"] },
  { belt: "Orange Belt", stripes: 0, requirements: ["All previous techniques", "Roundhouse kick", "Advanced blocks", "Kata basics"] },
  { belt: "Green Belt", stripes: 0, requirements: ["All previous techniques", "Spinning techniques", "Heian Shodan", "Self-defense basics"] },
  { belt: "Blue Belt", stripes: 0, requirements: ["All previous techniques", "Advanced combinations", "Heian Nidan", "Competition basics"] },
  { belt: "Purple Belt", stripes: 0, requirements: ["All previous techniques", "Complex combinations", "Heian Sandan", "Teaching basics"] },
  { belt: "Brown Belt", stripes: 3, requirements: ["All previous techniques", "Master-level katas", "Advanced self-defense", "Leadership skills"] },
  { belt: "Black Belt", stripes: 0, requirements: ["Complete mastery", "Teaching certification", "Competition excellence", "Lifetime commitment"] }
]

export default function ResourcesPage() {
  const { t } = useTranslation("common")
  const [activeTab, setActiveTab] = useState("forms")

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
              <BookOpen className="w-4 h-4" />
              {t("pages.resources.badge")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl font-bold uppercase text-text-light mb-6"
            >
              {t("pages.resources.title")} <span className="text-brand-red">{t("pages.resources.titleHighlight")}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted text-lg max-w-2xl mx-auto"
          >
            {t("pages.resources.subtitle")}
          </motion.p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-brand-dark-grey/50 border border-white/5 mb-12">
            <TabsTrigger value="forms" className="data-[state=active]:bg-brand-red data-[state=active]:text-text-light">
              <FileText className="w-4 h-4 mr-2" />
              {t("pages.resources.tabs.forms")}
            </TabsTrigger>
            <TabsTrigger value="guides" className="data-[state=active]:bg-brand-red data-[state=active]:text-text-light">
              <BookOpen className="w-4 h-4 mr-2" />
              {t("pages.resources.tabs.guides")}
            </TabsTrigger>
            <TabsTrigger value="videos" className="data-[state=active]:bg-brand-red data-[state=active]:text-text-light">
              <Video className="w-4 h-4 mr-2" />
              {t("pages.resources.tabs.videos")}
            </TabsTrigger>
            <TabsTrigger value="belts" className="data-[state=active]:bg-brand-red data-[state=active]:text-text-light">
              <Award className="w-4 h-4 mr-2" />
              {t("pages.resources.tabs.belts")}
            </TabsTrigger>
          </TabsList>

          {/* Forms Tab */}
          <TabsContent value="forms" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.forms.map((form, index) => (
                <motion.div
                  key={form.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-brand-dark-grey/50 border-white/5 hover:border-brand-gold/30 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-text-light">
                        <FileText className="w-5 h-5 text-brand-gold" />
                        {form.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-text-muted text-sm">{form.description}</p>
                      <div className="flex items-center justify-between text-xs text-text-muted">
                        <span>{form.type}</span>
                        <span>{form.size}</span>
                      </div>
                      <Button className="w-full bg-brand-red hover:bg-brand-red/90">
                        <Download className="w-4 h-4 mr-2" />
                        {t("pages.resources.download")}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Guides Tab */}
          <TabsContent value="guides" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.guides.map((guide, index) => (
                <motion.div
                  key={guide.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-brand-dark-grey/50 border-white/5 hover:border-brand-gold/30 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-text-light">
                        <BookOpen className="w-5 h-5 text-brand-gold" />
                        {guide.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-text-muted text-sm">{guide.description}</p>
                      <div className="flex items-center justify-between text-xs text-text-muted">
                        <span>{guide.type}</span>
                        <span>{guide.size}</span>
                      </div>
                      <Button className="w-full bg-brand-red hover:bg-brand-red/90">
                        <Download className="w-4 h-4 mr-2" />
                        {t("pages.resources.download")}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Videos Tab */}
          <TabsContent value="videos" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.videos.map((video, index) => (
                <motion.div
                  key={video.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-brand-dark-grey/50 border-white/5 hover:border-brand-gold/30 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-text-light">
                        <Video className="w-5 h-5 text-brand-gold" />
                        {video.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-text-muted text-sm">{video.description}</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-text-muted">{video.duration}</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          video.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                          video.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                          video.level === 'Advanced' ? 'bg-brand-gold/20 text-brand-gold' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {video.level}
                        </span>
                      </div>
                      <Button className="w-full bg-brand-red hover:bg-brand-red/90">
                        <Play className="w-4 h-4 mr-2" />
                        {t("pages.resources.watchVideo")}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Belt Requirements Tab */}
          <TabsContent value="belts" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-text-light mb-4">{t("pages.resources.beltRankingTitle")}</h3>
              <p className="text-text-muted max-w-2xl mx-auto">
                {t("pages.resources.beltRankingSubtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {beltRequirements.map((belt, index) => (
                <motion.div
                  key={belt.belt}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-brand-dark-grey/50 border-white/5">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between text-text-light">
                        <span>{belt.belt}</span>
                        {belt.stripes > 0 && (
                          <span className="text-sm text-brand-gold">
                            {t("pages.resources.stripeCount", { count: belt.stripes })}
                          </span>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {belt.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center gap-3 text-text-muted">
                            <Target className="w-4 h-4 text-brand-gold flex-shrink-0" />
                            <span className="text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Testing Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 bg-gradient-to-r from-brand-red/20 to-brand-gold/20 rounded-3xl p-8 border border-white/5"
            >
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-text-light mb-2">{t("pages.resources.testingInfo.title")}</h4>
                <p className="text-text-muted">{t("pages.resources.testingInfo.subtitle")}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Calendar className="w-8 h-8 text-brand-gold mx-auto mb-3" />
                  <h5 className="font-semibold text-text-light mb-2">{t("pages.resources.testingInfo.scheduleTitle")}</h5>
                  <p className="text-sm text-text-muted">{t("pages.resources.testingInfo.scheduleValue")}</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-brand-gold mx-auto mb-3" />
                  <h5 className="font-semibold text-text-light mb-2">{t("pages.resources.testingInfo.requirementsTitle")}</h5>
                  <p className="text-sm text-text-muted">{t("pages.resources.testingInfo.requirementsValue")}</p>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 text-brand-gold mx-auto mb-3" />
                  <h5 className="font-semibold text-text-light mb-2">{t("pages.resources.testingInfo.preparationTitle")}</h5>
                  <p className="text-sm text-text-muted">{t("pages.resources.testingInfo.preparationValue")}</p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button className="bg-brand-red hover:bg-brand-red/90">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {t("pages.resources.testingInfo.scheduleButton")}
                </Button>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
      <BackToTop />
    </main>
  )
}
