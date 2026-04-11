import { Navbar } from "@/components/layout/navbar"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { AcademiesSection } from "@/components/sections/academies-section"
import { PartnersSection } from "@/components/sections/partners-section"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/layout/back-to-top"

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Navbar />
      <TestimonialsSection />
      <AcademiesSection />
      <PartnersSection />
      <Footer />
      <BackToTop />
    </main>
  )
}