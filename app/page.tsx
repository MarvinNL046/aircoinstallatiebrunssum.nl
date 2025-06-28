import { Metadata } from "next"
import { HeroOptimized } from "@/components/sections/hero-optimized"
import { ServicesOptimized } from "@/components/sections/services-optimized"
import { WhyUs } from "@/components/sections/why-us"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta-section"
import { BrandLogos } from "@/components/sections/brand-logos"
import { ContactSection } from "@/components/sections/contact-section"
import { ProductShowcase } from "@/components/sections/product-showcase"
import { NearMeSection } from "@/components/sections/near-me-section"
import { InternalLinksSection } from "@/components/sections/internal-links-section"
import { ReviewSchema } from "@/components/sections/review-schema"
import { generateOrganizationSchema } from "@/lib/schema"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Airco Brunssum → Nr.1 Specialist ★ Gratis Offerte binnen 24u',
  description: 'Airco installatie Brunssum vanaf €11/maand. ✓ 163 tevreden klanten (4.7★) ✓ Erkend F-gassen monteur ✓ Daikin, Mitsubishi, Samsung ✓ Direct bellen: 046 202 1430',
  keywords: [
    'airco brunssum',
    'airco installatie brunssum',
    'split airco brunssum',
    'airco specialist limburg',
    'airco service limburg',
    'airco heerlen',
    'airco sittard',
    'airco geleen',
    'airco kerkrade',
    'airco landgraaf',
    'airco parkstad',
    'airco zuid limburg',
    'klimaatbeheersing limburg',
    'airco onderhoud limburg',
    'daikin airco limburg',
    'mitsubishi airco limburg'
  ],
  openGraph: {
    title: 'Airco Installatie Brunssum | Direct Een Offerte? Bel 046 202 1430',
    description: 'Dé airco specialist van Brunssum en heel Limburg. ✓ Gratis advies ✓ Scherpe prijzen ✓ Gecertificeerde monteurs ✓ Alle topmerken',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://aircoinstallatiebrunssum.nl',
    siteName: 'Airco Installatie Brunssum',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Airco Installatie Brunssum - Specialist in Limburg'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airco Brunssum | Nr.1 Specialist in Limburg',
    description: 'Professionele airco installatie in Brunssum. Gratis offerte binnen 24 uur!'
  },
  alternates: {
    canonical: 'https://aircoinstallatiebrunssum.nl'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema()
  
  // Add AggregateOffer schema for pricing
  const aggregateOfferSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    "priceCurrency": "EUR",
    "lowPrice": "11",
    "highPrice": "2999",
    "priceValidUntil": new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().split('T')[0],
    "offerCount": "4",
    "offers": [
      {
        "@type": "Offer",
        "name": "Airco Onderhoud",
        "price": "11",
        "priceCurrency": "EUR",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "11",
          "priceCurrency": "EUR",
          "unitText": "maand"
        }
      },
      {
        "@type": "Offer",
        "name": "Split Airco Installatie",
        "price": "1299",
        "priceCurrency": "EUR"
      }
    ]
  }
  
  // Add HowTo schema for installation process
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Airco Laten Installeren in Brunssum",
    "description": "In 4 simpele stappen naar een perfect klimaat",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": "1299"
    },
    "totalTime": "P1D",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Gratis Adviesgesprek",
        "text": "Bel 046 202 1430 voor persoonlijk advies"
      },
      {
        "@type": "HowToStep", 
        "name": "Offerte op Maat",
        "text": "Binnen 24 uur een vrijblijvende offerte"
      },
      {
        "@type": "HowToStep",
        "name": "Professionele Installatie",
        "text": "Gecertificeerde monteurs installeren uw airco"
      },
      {
        "@type": "HowToStep",
        "name": "Service & Garantie",
        "text": "Onderhoud vanaf €11/maand, 5 jaar garantie"
      }
    ]
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="aggregate-offer-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateOfferSchema) }}
      />
      <Script
        id="how-to-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <ReviewSchema />
      
      <main>
        <HeroOptimized />
        <ServicesOptimized />
        <ProductShowcase />
        <WhyUs />
        <BrandLogos />
        <NearMeSection />
        <InternalLinksSection />
        <TestimonialsSection />
        <ContactSection />
        <CTASection />
      </main>
    </>
  )
}
