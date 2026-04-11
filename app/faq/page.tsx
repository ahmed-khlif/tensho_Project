import { Navbar } from "@/components/layout/navbar"
import { FAQSection } from "@/components/sections/faq-section"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/layout/back-to-top"

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Navbar />
      <FAQSection />
      <Footer />
      <BackToTop />
    </main>
  )
}