import { HeroSection } from "@/components/hero-section"
import { StorytellingSection } from "@/components/storytelling-section"
import { DiferencialSection } from "@/components/diferencial-section"
import { EquitySection } from "@/components/equity-section"
import { ProcessTimeline } from "@/components/process-timeline"
import { TargetAudienceSection } from "@/components/target-audience-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { InscriptionForm } from "@/components/inscription-form"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StorytellingSection />
      <DiferencialSection />
      <ProcessTimeline />
      <EquitySection />
      <TargetAudienceSection />
      <FaqSection />
      <InscriptionForm />
      <FinalCtaSection />
    </main>
  )
}
