"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/layout/back-to-top"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  User,
  Trophy,
  Calendar,
  Target,
  TrendingUp,
  Award,
  Clock,
  MapPin,
  Star,
  BookOpen,
  Users,
  BarChart3
} from "lucide-react"

// Mock student data
const studentData = {
  name: "Alex Johnson",
  belt: "Blue Belt",
  joinDate: "2022-03-15",
  totalSessions: 156,
  currentStreak: 12,
  nextBelt: "Purple Belt",
  progressToNext: 75,
  rank: 8,
  totalStudents: 234
}

const upcomingSessions = [
  {
    id: 1,
    title: "Advanced Grappling",
    date: "2024-01-20",
    time: "6:00 PM - 8:00 PM",
    instructor: "Sensei Marcus Rodriguez",
    location: "Main Dojo",
    type: "BJJ"
  },
  {
    id: 2,
    title: "Kata Practice",
    date: "2024-01-22",
    time: "5:00 PM - 7:00 PM",
    instructor: "Master Hiroshi Tanaka",
    location: "Main Dojo",
    type: "Karate"
  },
  {
    id: 3,
    title: "Competition Prep",
    date: "2024-01-25",
    time: "7:00 PM - 9:00 PM",
    instructor: "Master Sarah Chen",
    location: "Training Gym",
    type: "MMA"
  }
]

const achievements = [
  {
    id: 1,
    titleKey: "pages.dashboard.achievementItems.firstStripe.title",
    descriptionKey: "pages.dashboard.achievementItems.firstStripe.description",
    date: "2023-06-15",
    icon: "🎯",
  },
  {
    id: 2,
    titleKey: "pages.dashboard.achievementItems.perfectAttendance.title",
    descriptionKey: "pages.dashboard.achievementItems.perfectAttendance.description",
    date: "2023-08-20",
    icon: "📅",
  },
  {
    id: 3,
    titleKey: "pages.dashboard.achievementItems.competitionWinner.title",
    descriptionKey: "pages.dashboard.achievementItems.competitionWinner.description",
    date: "2023-09-10",
    icon: "🏆",
  },
  {
    id: 4,
    titleKey: "pages.dashboard.achievementItems.helperAward.title",
    descriptionKey: "pages.dashboard.achievementItems.helperAward.description",
    date: "2023-11-05",
    icon: "🤝",
  },
  {
    id: 5,
    titleKey: "pages.dashboard.achievementItems.techniqueMaster.title",
    descriptionKey: "pages.dashboard.achievementItems.techniqueMaster.description",
    date: "2023-12-01",
    icon: "⭐",
  },
  {
    id: 6,
    titleKey: "pages.dashboard.achievementItems.leadership.title",
    descriptionKey: "pages.dashboard.achievementItems.leadership.description",
    date: "2024-01-08",
    icon: "👑",
  },
]

const skillProgress = [
  { skillKey: "pages.dashboard.skills.grappling", progress: 85, levelKey: "pages.dashboard.levels.advanced" },
  { skillKey: "pages.dashboard.skills.striking", progress: 70, levelKey: "pages.dashboard.levels.intermediate" },
  { skillKey: "pages.dashboard.skills.kata", progress: 90, levelKey: "pages.dashboard.levels.expert" },
  {
    skillKey: "pages.dashboard.skills.selfDefense",
    progress: 65,
    levelKey: "pages.dashboard.levels.intermediate",
  },
  { skillKey: "pages.dashboard.skills.fitness", progress: 80, levelKey: "pages.dashboard.levels.advanced" },
]

export default function DashboardPage() {
  const { t, i18n } = useTranslation("common")
  const [activeTab, setActiveTab] = useState("overview")
  const joinDate = new Date(studentData.joinDate).toLocaleDateString(i18n.language || "en")

  const scheduleDays = Array.from({ length: 6 }, (_, i) =>
    new Date(2024, 0, i + 1).toLocaleDateString(i18n.language || "en", { weekday: "long" }),
  )

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
              <User className="w-4 h-4" />
              {t("pages.dashboard.badge")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl font-bold uppercase text-text-light mb-6"
            >
              {t("pages.dashboard.title")} <span className="text-brand-red">{studentData.name}</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-6 text-text-muted"
            >
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-brand-gold" />
                <span className="font-medium">{studentData.belt}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-brand-gold" />
                <span>{t("pages.dashboard.joined", { date: joinDate })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-brand-gold" />
                <span>{t("pages.dashboard.rank", { rank: studentData.rank, total: studentData.totalStudents })}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-brand-dark-grey/50 border border-white/5">
            <TabsTrigger value="overview" className="data-[state=active]:bg-brand-red data-[state=active]:text-text-light">
              {t("pages.dashboard.tabs.overview")}
            </TabsTrigger>
            <TabsTrigger value="progress" className="data-[state=active]:bg-brand-red data-[state=active]:text-text-light">
              {t("pages.dashboard.tabs.progress")}
            </TabsTrigger>
            <TabsTrigger value="schedule" className="data-[state=active]:bg-brand-red data-[state=active]:text-text-light">
              {t("pages.dashboard.tabs.schedule")}
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-brand-red data-[state=active]:text-text-light">
              {t("pages.dashboard.tabs.achievements")}
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  title: t("pages.dashboard.stats.totalSessions"),
                  value: studentData.totalSessions,
                  icon: Calendar,
                  color: "text-blue-500"
                },
                {
                  title: t("pages.dashboard.stats.currentStreak"),
                  value: t("pages.dashboard.days", { count: studentData.currentStreak }),
                  icon: TrendingUp,
                  color: "text-green-500"
                },
                {
                  title: t("pages.dashboard.stats.nextBeltProgress"),
                  value: `${studentData.progressToNext}%`,
                  icon: Target,
                  color: "text-brand-gold"
                },
                {
                  title: t("pages.dashboard.stats.globalRank"),
                  value: `#${studentData.rank}`,
                  icon: Trophy,
                  color: "text-purple-500"
                }
              ].map((stat, index) => (
                <Card key={stat.title} className="bg-brand-dark-grey/50 border-white/5">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-text-muted">{stat.title}</p>
                        <p className="text-2xl font-bold text-text-light">{stat.value}</p>
                      </div>
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            {/* Next Belt Progress */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-brand-dark-grey/50 rounded-2xl p-8 border border-white/5"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-text-light">
                  {t("pages.dashboard.progressTo", { belt: studentData.nextBelt })}
                </h3>
                <Badge className="bg-brand-gold text-brand-black">{studentData.progressToNext}%</Badge>
              </div>
              <Progress value={studentData.progressToNext} className="h-3 mb-4" />
              <p className="text-text-muted">
                {t("pages.dashboard.progressHint", { percent: 100 - studentData.progressToNext })}
              </p>
            </motion.div>

            {/* Upcoming Sessions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-brand-dark-grey/50 rounded-2xl p-8 border border-white/5"
            >
              <h3 className="text-xl font-bold text-text-light mb-6">{t("pages.dashboard.upcomingSessions")}</h3>
              <div className="space-y-4">
                {upcomingSessions.map((session, index) => (
                  <div key={session.id} className="flex items-center justify-between p-4 rounded-xl bg-brand-black/30 border border-white/5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-red/20 flex items-center justify-center">
                        <Users className="w-6 h-6 text-brand-red" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-light">{session.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-text-muted">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(session.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {session.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {session.location}
                          </span>
                        </div>
                        <p className="text-sm text-brand-gold mt-1">{t("pages.dashboard.withInstructor", { name: session.instructor })}</p>
                      </div>
                    </div>
                    <Button size="sm" className="bg-brand-red hover:bg-brand-red/90">
                      {t("pages.dashboard.join")}
                    </Button>
                  </div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progress" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* Skill Progress */}
              <Card className="bg-brand-dark-grey/50 border-white/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-text-light">
                    <BarChart3 className="w-5 h-5 text-brand-gold" />
                    {t("pages.dashboard.skillDevelopment")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skillProgress.map((skill, index) => (
                    <div key={skill.skillKey} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-text-light font-medium">{t(skill.skillKey)}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">{t(skill.levelKey)}</Badge>
                          <span className="text-sm text-text-muted">{skill.progress}%</span>
                        </div>
                      </div>
                      <Progress value={skill.progress} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Training Stats */}
              <Card className="bg-brand-dark-grey/50 border-white/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-text-light">
                    <TrendingUp className="w-5 h-5 text-brand-gold" />
                    {t("pages.dashboard.trainingStatistics")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 rounded-xl bg-brand-black/30">
                      <div className="text-2xl font-bold text-brand-gold mb-1">156</div>
                      <div className="text-sm text-text-muted">{t("pages.dashboard.stats.totalSessions")}</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-brand-black/30">
                      <div className="text-2xl font-bold text-green-500 mb-1">12</div>
                      <div className="text-sm text-text-muted">{t("pages.dashboard.stats.dayStreak")}</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-brand-black/30">
                      <div className="text-2xl font-bold text-blue-500 mb-1">89%</div>
                      <div className="text-sm text-text-muted">{t("pages.dashboard.stats.attendance")}</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-brand-black/30">
                      <div className="text-2xl font-bold text-purple-500 mb-1">4.9</div>
                      <div className="text-sm text-text-muted">{t("pages.dashboard.stats.avgRating")}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-brand-dark-grey/50 rounded-2xl p-8 border border-white/5"
            >
              <h3 className="text-xl font-bold text-text-light mb-6">{t("pages.dashboard.weeklySchedule")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {scheduleDays.map((day) => (
                  <div key={day} className="p-4 rounded-xl bg-brand-black/30 border border-white/5">
                    <h4 className="font-semibold text-text-light mb-3">{day}</h4>
                    <div className="space-y-2">
                      <div className="text-sm text-text-muted">{t("pages.dashboard.bjjFundamentals")}</div>
                      <div className="text-xs text-brand-gold">6:00 PM - 8:00 PM</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-brand-dark-grey/50 rounded-2xl p-6 border border-white/5 hover:border-brand-gold/30 transition-colors"
                >
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h4 className="font-semibold text-text-light mb-2">{t(achievement.titleKey)}</h4>
                  <p className="text-sm text-text-muted mb-3">{t(achievement.descriptionKey)}</p>
                  <div className="flex items-center gap-2 text-xs text-text-muted">
                    <Calendar className="w-4 h-4" />
                    {new Date(achievement.date).toLocaleDateString()}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
      <BackToTop />
    </main>
  )
}
