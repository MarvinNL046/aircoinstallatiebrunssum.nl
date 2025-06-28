import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AirVent, Wrench, Settings, ArrowRight, Play } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: AirVent,
    title: "Installatie",
    description: "Professionele airco installatie Brunssum en omgeving. Specialist in split airco's en multi-split systemen.",
    features: [
      "Gratis inmeting & advies",
      "Snelle installatie",
      "Uitstekende garantie",
      "Daikin, Mitsubishi, Samsung, LG"
    ],
    link: "/diensten"
  },
  {
    icon: Settings,
    title: "Onderhoud",
    description: "Airco service Limburg voor optimale prestaties. Onderhoud vanaf €11 per maand of €149 voor losse beurt.",
    features: [
      "Vanaf €11 per maand",
      "Complete systeemcheck",
      "Filter reiniging",
      "Preventief onderhoud"
    ],
    link: "/diensten"
  },
  {
    icon: Wrench,
    title: "Reparatie",
    description: "Vakkundige reparatie door airco specialist Limburg. Ervaring met alle merken en modellen.",
    features: [
      "Snelle diagnose",
      "Professionele reparatie",
      "Originele onderdelen",
      "Garantie op herstel"
    ],
    link: "/diensten"
  }
]

export function ServicesOptimized() {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Airco Service Limburg - Onze Diensten
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uw <strong>airco specialist Limburg</strong> voor installatie, onderhoud en reparatie. 
            Actief in Brunssum, Heerlen, Sittard, Geleen en heel Zuid-Limburg.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 bg-white border-0 hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 bg-[#DBEAFE] rounded-lg mb-6">
                  <Icon className="h-8 w-8 text-[#2563EB]" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-1.5 h-1.5 bg-[#F97316] rounded-full mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild 
                  variant="outline"
                  className="w-full border-[#F97316] text-[#F97316] hover:bg-[#FFF7ED] hover:border-[#EA580C] hover:text-[#EA580C] font-semibold rounded-lg transition-all duration-200"
                >
                  <Link href={service.link}>
                    Meer informatie
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            )
          })}
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Zie Onze Airco Monteurs In Actie
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Bekijk hoe onze gecertificeerde monteurs een <strong>airco installatie Brunssum</strong> uitvoeren. 
                Van advies tot oplevering, wij zijn uw betrouwbare <strong>aircospecialist Limburg</strong>.
              </p>
              <Button 
                asChild
                className="bg-[#F97316] hover:bg-[#EA580C] text-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                size="lg"
              >
                <a 
                  href="https://www.youtube.com/watch?v=9m-jkGgfLog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Bekijk Video
                </a>
              </Button>
            </div>
            
            <div className="relative h-full min-h-[300px] md:min-h-[400px] bg-gray-100">
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 pointer-events-none" />
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/9m-jkGgfLog" 
                title="StayCool Airco Installatie Brunssum - Bedrijfsvideo" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}