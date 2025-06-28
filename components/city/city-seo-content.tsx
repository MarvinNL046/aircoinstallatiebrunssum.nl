import { Card } from "@/components/ui/card"
import { MapPin, Clock, Star, Users, Phone, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CitySeoContentProps {
  city: string
  nearbyAreas?: string[]
}

// Stad-specifieke informatie
const citySpecificInfo: Record<string, {
  response: string
  projects: string
  popular: string[]
  areas: string[]
}> = {
  brunssum: {
    response: "Meestal binnen 2 uur ter plaatse",
    projects: "127 installaties in 2024",
    popular: ["Daikin Perfera", "Mitsubishi Heavy SRK", "LG Standard Plus"],
    areas: ["Centrum", "Brunssum-Noord", "Langeberg", "Schuttersveld"]
  },
  heerlen: {
    response: "Gemiddeld binnen 3 uur reactie",
    projects: "89 installaties in 2024",
    popular: ["Samsung WindFree", "Daikin Stylish", "Tosot Clivia"],
    areas: ["Heerlen-Centrum", "Heerlerbaan", "Hoensbroek", "Heerlerheide"]
  },
  sittard: {
    response: "Meestal binnen 4 uur beschikbaar",
    projects: "76 installaties in 2024",
    popular: ["LG Artcool", "Daikin Emura", "Mitsubishi Zen"],
    areas: ["Sittard-Centrum", "Geleen", "Born", "Limbrichterveld"]
  },
  kerkrade: {
    response: "Binnen 3 uur ter plaatse",
    projects: "65 installaties in 2024",
    popular: ["Daikin Comfora", "Samsung Luzon", "Toshiba Seiya"],
    areas: ["Kerkrade-West", "Kerkrade-Oost", "Chevremont", "Bleijerheide"]
  }
}

export function CitySeoContent({ city, nearbyAreas = [] }: CitySeoContentProps) {
  const cityKey = city.toLowerCase()
  const info = citySpecificInfo[cityKey] || {
    response: "Binnen 24 uur reactie",
    projects: "50+ installaties in 2024",
    popular: ["Daikin", "Mitsubishi", "LG"],
    areas: nearbyAreas.slice(0, 4)
  }

  return (
    <div className="space-y-12">
      {/* Local Service Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="p-6 text-center border-0 shadow-lg">
          <Clock className="h-8 w-8 text-[#F97316] mx-auto mb-3" />
          <p className="text-2xl font-bold text-gray-900">{info.response}</p>
          <p className="text-sm text-gray-600 mt-1">Reactietijd in {city}</p>
        </Card>
        
        <Card className="p-6 text-center border-0 shadow-lg">
          <MapPin className="h-8 w-8 text-[#F97316] mx-auto mb-3" />
          <p className="text-2xl font-bold text-gray-900">{info.projects}</p>
          <p className="text-sm text-gray-600 mt-1">Lokale installaties</p>
        </Card>
        
        <Card className="p-6 text-center border-0 shadow-lg">
          <Star className="h-8 w-8 text-[#F97316] mx-auto mb-3" />
          <p className="text-2xl font-bold text-gray-900">4.7/5</p>
          <p className="text-sm text-gray-600 mt-1">163 Google reviews</p>
        </Card>
        
        <Card className="p-6 text-center border-0 shadow-lg">
          <Users className="h-8 w-8 text-[#F97316] mx-auto mb-3" />
          <p className="text-2xl font-bold text-gray-900">10+ jaar</p>
          <p className="text-sm text-gray-600 mt-1">Ervaring in {city}</p>
        </Card>
      </div>

      {/* Populaire Modellen in deze stad */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Populaire Airco's in {city}
        </h3>
        <div className="bg-[#F9FAFB] rounded-xl p-6">
          <p className="text-gray-600 mb-4">
            Op basis van onze installaties in {city} zijn dit de meest gekozen modellen:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {info.popular.map((model, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white rounded-lg p-4">
                <CheckCircle className="h-5 w-5 text-[#F97316] flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">{model}</p>
                  <p className="text-sm text-gray-600">Veel gekozen in {city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Werkgebieden */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Werkgebieden in {city}
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Wijken waar wij actief zijn:</h4>
            <ul className="space-y-2">
              {info.areas.map((area, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4 text-[#F97316]" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Ook actief in omliggende plaatsen:</h4>
            <ul className="space-y-2">
              {nearbyAreas.slice(0, 4).map((area, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4 text-[#F97316]" />
                  <Link href={`/steden/${area.toLowerCase()}`} className="hover:text-[#F97316] transition-colors">
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Local CTA */}
      <Card className="p-8 bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white border-0">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">
            Direct Een Airco Laten Installeren in {city}?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Onze monteurs kennen {city} als hun broekzak. Vraag nu een gratis offerte aan!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#F97316] hover:bg-gray-100 font-semibold shadow-lg"
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
              className="border-2 border-white text-white hover:bg-white hover:text-[#F97316] font-semibold"
            >
              <Link href="/offerte">
                Gratis Offerte {city}
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}