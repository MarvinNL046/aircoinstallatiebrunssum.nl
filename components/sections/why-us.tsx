import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Users, Clock, Award, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"

const benefits = [
  {
    icon: Shield,
    title: "10 Jaar Garantie",
    description: "Uitgebreide fabrieksgarantie op alle installaties en onderdelen"
  },
  {
    icon: Users,
    title: "Gecertificeerde Monteurs",
    description: "F-gassen gecertificeerd en continu bijgeschoold in de nieuwste technieken"
  },
  {
    icon: Clock,
    title: "Snelle Service",
    description: "Binnen 24 uur reactie en binnen 48 uur geïnstalleerd"
  },
  {
    icon: Award,
    title: "180+ Tevreden Klanten",
    description: "4.9/5 sterren beoordeling van onze klanten in heel Limburg"
  }
]

export function WhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Waarom StayCool Airco?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Al meer dan 10 jaar de meest betrouwbare partner voor airconditioning in Brunssum en omgeving
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
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
        <div className="bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Klaar Om Te Beginnen?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Vraag vandaag nog een gratis offerte aan en ervaar het verschil
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
              className="bg-white text-[#1D4ED8] hover:bg-[#F3F4F6] border-0 rounded-lg transition-all duration-200"
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