import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AirVent, Wrench, Settings, ArrowRight, Play } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: AirVent,
    title: "Installatie",
    description: "Professionele installatie van alle typen airconditioning systemen. Van single-split tot VRV systemen.",
    features: [
      "Gratis inmeting",
      "Binnen 48 uur geplaatst",
      "10 jaar garantie",
      "Alle merken"
    ],
    link: "/diensten"
  },
  {
    icon: Settings,
    title: "Onderhoud",
    description: "Regelmatig onderhoud voor optimale prestaties en langere levensduur van uw airco.",
    features: [
      "Jaarlijks onderhoud",
      "Filter reiniging",
      "Koudemiddel check",
      "Onderhoudscontract"
    ],
    link: "/diensten"
  },
  {
    icon: Wrench,
    title: "Reparatie",
    description: "Snelle en vakkundige reparatie bij storingen. Wij werken met alle merken en typen.",
    features: [
      "Snelle service",
      "Storing diagnose",
      "Originele onderdelen",
      "Garantie op reparatie"
    ],
    link: "/diensten"
  }
]

export function ServicesOptimized() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Onze Diensten
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Van installatie tot onderhoud, wij zijn uw complete partner voor airconditioning in heel Limburg
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300 bg-white">
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
                      <span className="w-1.5 h-1.5 bg-[#F97316] rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild 
                  variant="outline"
                  className="w-full border-[#F97316] text-[#F97316] hover:bg-[#FFF7ED] rounded-lg transition-all duration-200"
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
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Zie Ons In Actie
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Bekijk hoe onze gecertificeerde monteurs te werk gaan bij een professionele airco installatie. 
                Van intake tot oplevering, wij nemen u mee in het complete proces.
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
            
            <div className="relative h-full min-h-[300px] md:min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10" />
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/9m-jkGgfLog" 
                title="StayCool Airco Bedrijfsvideo" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}