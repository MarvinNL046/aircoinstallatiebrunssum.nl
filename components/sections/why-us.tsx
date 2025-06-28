import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Users, Phone, ArrowRight, Euro, Headphones } from "lucide-react"
import Link from "next/link"

const benefits = [
  {
    icon: Euro,
    title: "Gratis Offerte",
    description: "Vrijblijvend advies en offerte op maat zonder kosten"
  },
  {
    icon: Users,
    title: "Gecertificeerde Monteurs",
    description: "F-gassen gecertificeerd en specialist in alle topmerken"
  },
  {
    icon: Headphones,
    title: "Uitstekende Service",
    description: "Ma-vr bereikbaar van 09:00-17:00 voor al uw vragen"
  },
  {
    icon: Shield,
    title: "Volledige Garantie",
    description: "Uitgebreide garantie op installatie en onderdelen"
  }
]

export function WhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Waarom Kiezen Voor StayCool Airco?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uw betrouwbare <strong>airco installateur Limburg</strong> met 4.7/5 sterren op basis van 163 Google reviews
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 bg-[#FFF7ED] rounded-full mx-auto mb-4">
                  <Icon className="h-8 w-8 text-[#F97316]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
          <h3 className="text-3xl font-bold mb-4">
            Direct Een Airco Laten Installeren?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Vraag vandaag nog een gratis offerte aan voor uw <strong>airco installatie Brunssum</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              <Link href="tel:0462021430">
                <Phone className="mr-2 h-5 w-5" />
                Bel Direct: 046 202 1430
              </Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-[#1D4ED8] hover:bg-[#F3F4F6] border-0 rounded-lg font-semibold transition-all duration-200"
            >
              <Link href="/offerte">
                Gratis Offerte Aanvragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}