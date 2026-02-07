import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { WhyUsSection } from "@/components/home/why-us-section"
import { CoursesPreview } from "@/components/home/courses-preview"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <WhyUsSection />
        <CoursesPreview />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
