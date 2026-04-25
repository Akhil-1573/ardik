import { SiteHeader } from "@/components/screens/site-header"
import { AnimatedHero } from "@/components/screens/animated-hero"
import { NetworkMap } from "@/components/ui/network-map"
import { ServicesSection } from "@/components/screens/services-section"
import { AdvantagesSection } from "@/components/screens/about-us-section"
import { TestimonialsSection } from "@/components/screens/testimonials-section"
import { JobsCarousel } from "@/components/screens/jobs-carousel"
import { CtaBanner } from "@/components/screens/cta-banner"
import { SiteFooter } from "@/components/screens/site-footer"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <AnimatedHero />
        <div className="relative isolate overflow-visible">
          <div
            className="pointer-events-none absolute inset-0 z-0 bg-mesh opacity-35"
            aria-hidden
          />

          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-20" aria-hidden/>

          <div className="relative z-10 overflow-visible">
          <NetworkMap />
          <div className="relative z-20">
            <ServicesSection />
            <AdvantagesSection />
            <TestimonialsSection />
          </div>
        </div>
        <div className="relative z-20">
        <JobsCarousel />
        <CtaBanner />
        </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
