import { Navbar } from "@/components/layout/navbar"
import { AboutSection } from "@/components/sections/about-section"
import { VisionSection } from "@/components/sections/vision-section"
import { StatsSection } from "@/components/sections/stats-section"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/layout/back-to-top"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Navbar />
      <AboutSection />
      <VisionSection />
      <StatsSection />
      <Footer />
      <BackToTop />
    </main>
  )
}