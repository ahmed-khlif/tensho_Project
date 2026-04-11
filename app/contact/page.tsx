import { Navbar } from "@/components/layout/navbar"
import { ContactSection } from "@/components/sections/contact-section"
import { NewsletterSection } from "@/components/sections/newsletter-section"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/layout/back-to-top"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Navbar />
      <ContactSection />
      <NewsletterSection />
      <Footer />
      <BackToTop />
    </main>
  )
}