import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { SocialProof } from "@/components/social-proof"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { MethodologySection } from "@/components/methodology-section"
import { ServicesSection } from "@/components/services-section"
import { DifferentialsSection } from "@/components/differentials-section"
import { ResultsSection } from "@/components/results-section"
import { ProcessSection } from "@/components/process-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTA } from "@/components/final-cta"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSection />
        <SolutionSection />
        <MethodologySection />
        <ServicesSection />
        <DifferentialsSection />
        <ResultsSection />
        <ProcessSection />
        <FAQSection />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
      <FloatingElements />
    </>
  )
}
