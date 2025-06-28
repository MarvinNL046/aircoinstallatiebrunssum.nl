import { Metadata } from "next"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { CTAWithForm } from "@/components/sections/cta-with-form"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Airco Vragen? Direct Antwoord van Specialist Brunssum | FAQ",
  description: "Alle vragen over airco installatie Brunssum beantwoord. ✓ Kosten vanaf €11/maand ✓ Geen vergunning nodig ✓ Installatie in 1 dag. Expert advies: 046 202 1430",
  keywords: [
    "airco vragen brunssum",
    "wat kost airco brunssum",
    "airco installatie vragen",
    "airco vergunning limburg",
    "airco onderhoud brunssum",
    "beste airco brunssum",
    "airco stroomverbruik",
    "split airco vragen"
  ],
  alternates: {
    canonical: 'https://aircoinstallatiebrunssum.nl/faq'
  }
}

const faqs = [
  {
    question: "Wat kost een airco?",
    answer: "Een complete airco installatie kost gemiddeld €1.299 tot €2.500 voor een single-split systeem, inclusief montage en BTW. De exacte prijs hangt af van het vermogen (2.5 - 7 kW), het merk (budget tot premium) en de installatiecomplexiteit. Multi-split systemen beginnen vanaf €2.999. Vraag een gratis offerte aan voor een exacte prijs."
  },
  {
    question: "Hoeveel kost een airco per maand aan stroom?",
    answer: "Een moderne airco verbruikt gemiddeld €15-40 per maand bij normaal gebruik (4 uur koelen per dag). Voor verwarmen ligt dit tussen €30-80 per maand. Een airco met energielabel A+++ en een SCOP van 5.1 verbruikt ongeveer 500-1000 kWh per jaar. Dit is 60% zuiniger dan elektrische kachels."
  },
  {
    question: "Heb ik een vergunning nodig voor een airco?",
    answer: "In de meeste gevallen is geen vergunning nodig voor het plaatsen van een airco. Wel zijn er gemeentelijke regels over de plaatsing van de buitenunit. Wij adviseren u graag over de specifieke regelgeving in uw gemeente."
  },
  {
    question: "Hoe vaak moet een airco onderhouden worden?",
    answer: "Voor optimale prestaties en een lange levensduur adviseren wij jaarlijks onderhoud. Bij intensief gebruik kan vaker onderhoud nodig zijn. Tijdens een onderhoudsbeurt worden filters gereinigd, wordt het systeem gecontroleerd en wordt de werking geoptimaliseerd."
  },
  {
    question: "Wat is het energieverbruik van een airco?",
    answer: "Het energieverbruik hangt af van factoren zoals de grootte van de ruimte, de gewenste temperatuur en het type airco. Moderne systemen zijn zeer energiezuinig met energielabels tot A+++. Gemiddeld verbruikt een airco tussen de 0,5 en 2 kWh per uur."
  },
  {
    question: "Hoe lang gaat een airco mee?",
    answer: "Bij goed onderhoud gaat een kwalitatieve airco 10 tot 15 jaar mee. Factoren die de levensduur beïnvloeden zijn de gebruiksintensiteit, onderhoud en de kwaliteit van de installatie."
  }
]

export default function FAQPage() {
  const breadcrumbItems = [
    { label: "FAQ", href: "/faq" }
  ]

  // Generate FAQ Schema for better SERP visibility
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="container py-12">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="mb-8 text-4xl font-bold">Veelgestelde Vragen</h1>
        <p className="mb-12 text-xl text-muted-foreground">
          Vind snel antwoord op de meest gestelde vragen over airconditioning
        </p>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <CTAWithForm 
        title="Heeft u nog andere vragen?" 
        description="Neem contact met ons op voor persoonlijk advies"
      />
    </>
  )
}
