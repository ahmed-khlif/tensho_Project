import { Navbar } from "@/components/layout/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { StatsSection } from "@/components/sections/stats-section"
import { ProgramsSection } from "@/components/sections/programs-section"
import { MastersSlider } from "@/components/sections/masters-slider"
import { AcademiesSection } from "@/components/sections/academies-section"
import { CertificateGallerySection } from "@/components/sections/certificate-gallery-section"
import { VerificationSection } from "@/components/sections/verification-section"
import { AffiliationSection } from "@/components/sections/affiliation-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { MembershipSection } from "@/components/sections/membership-section"
import { EventsSection } from "@/components/sections/events-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { BlogsSection } from "@/components/sections/blogs-section"
import { FAQSection } from "@/components/sections/faq-section"
import { ContactSection } from "@/components/sections/contact-section"
import { CTASection } from "@/components/sections/cta-section"
import { PartnersSection } from "@/components/sections/partners-section"
import { NewsletterSection } from "@/components/sections/newsletter-section"
import { EcosystemSection } from "@/components/sections/ecosystem-section"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/layout/back-to-top"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ProgramsSection />
      <MastersSlider />
      <AcademiesSection />
      <CertificateGallerySection />
      <VerificationSection />
      <AffiliationSection />
      <HowItWorksSection />
      <MembershipSection />
      <EventsSection />
      <TestimonialsSection />
      <EcosystemSection />
      <BlogsSection />
      <PartnersSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
      <NewsletterSection />
      <Footer />
      <BackToTop />
    </main>
  )
}
