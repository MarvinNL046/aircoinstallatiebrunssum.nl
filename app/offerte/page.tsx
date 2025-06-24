import { Metadata } from "next"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { PriceCalculator } from "@/components/calculators/price-calculator"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Gratis Airco Offerte Brunssum | Binnen 2 Uur Reactie | StayCool",
  description: "✅ Vraag gratis een offerte aan voor uw airco. Binnen 2 uur reactie, vaste all-in prijzen vanaf €1.299. Geen verborgen kosten. 180+ tevreden klanten in Brunssum. Bel: 046 202 1430",
}

export default function OffertePage() {
  const breadcrumbItems = [
    { label: "Offerte", href: "/offerte" }
  ]

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Vraag een Vrijblijvende Offerte Aan
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Ontvang binnen 24 uur een offerte op maat voor uw airconditioning project
          </p>
          
          <PriceCalculator />
        </div>

        <div>
          <div className="sticky top-24">
            <h2 className="text-2xl font-bold mb-6">
              Direct Contact
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
