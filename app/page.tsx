import { Metadata } from "next"
import { HeroOptimized } from "@/components/sections/hero-optimized"
import { ServicesOptimized } from "@/components/sections/services-optimized"
import { WhyUs } from "@/components/sections/why-us"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta-section"
import { generateOrganizationSchema } from "@/lib/schema"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Airco Installatie Brunssum €1.299 | Binnen 48u Geïnstalleerd | StayCool',
  description: '✅ Professionele airco installatie in Brunssum vanaf €1.299 all-in. ⚡ Binnen 48u geplaatst ⚡ 180+ tevreden klanten (4.9★) ⚡ 10 jaar garantie. Erkend installateur. Bel: 046 202 1430',
  alternates: {
    canonical: 'https://aircoinstallatiebrunssum.nl'
  }
}

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema()

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <main>
        <HeroOptimized />
        <ServicesOptimized />
        <WhyUs />
        <TestimonialsSection />
        <CTASection />
      </main>
    </>
  )
}
