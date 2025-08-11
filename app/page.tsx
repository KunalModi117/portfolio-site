import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import TechStackSection from "@/components/tech-stack-section"
import AboutSection from "@/components/about-section"
import TestimonialsSection from "@/components/testimonials-section"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <TechStackSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
