import { Card } from "@/components/ui/card"
import { MapPin, Navigation, Clock } from "lucide-react"
import Link from "next/link"

const nearbySearches = [
  { query: "airco installateur in de buurt", location: "Brunssum", distance: "0-5 km" },
  { query: "airco monteur dichtbij", location: "Heerlen", distance: "5-10 km" },
  { query: "airco service in mijn buurt", location: "Sittard-Geleen", distance: "10-15 km" },
  { query: "airco onderhoud in de buurt", location: "Landgraaf", distance: "5-10 km" },
  { query: "airco specialist dichtbij", location: "Kerkrade", distance: "5-10 km" },
  { query: "airco bedrijf in de omgeving", location: "Voerendaal", distance: "10-15 km" }
]

const serviceAreas = [
  { 
    region: "Parkstad Limburg",
    cities: ["Brunssum", "Heerlen", "Landgraaf", "Kerkrade", "Simpelveld", "Voerendaal"],
    responseTime: "Binnen 2 uur"
  },
  {
    region: "Westelijke Mijnstreek",
    cities: ["Sittard", "Geleen", "Beek", "Stein", "Elsloo", "Urmond"],
    responseTime: "Binnen 3 uur"
  },
  {
    region: "Heuvelland",
    cities: ["Valkenburg", "Gulpen", "Wittem", "Mechelen", "Vaals", "Eijsden"],
    responseTime: "Binnen 4 uur"
  },
  {
    region: "Midden-Limburg",
    cities: ["Roermond", "Weert", "Echt", "Susteren", "Maasbracht"],
    responseTime: "Zelfde dag"
  }
]

export function NearMeSection() {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Airco Service in de Buurt - Heel Limburg
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zoekt u een <strong>airco installateur in de buurt</strong> of <strong>airco monteur dichtbij</strong>? 
            Wij zijn altijd in uw omgeving met snelle service in heel Limburg!
          </p>
        </div>

        {/* Service Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {serviceAreas.map((area, idx) => (
            <Card key={idx} className="p-6 hover:shadow-xl transition-all duration-300 border-0">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-6 w-6 text-[#F97316] flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{area.region}</h3>
                  <p className="text-sm text-[#F97316] font-medium">{area.responseTime}</p>
                </div>
              </div>
              <ul className="space-y-1">
                {area.cities.map((city, cityIdx) => (
                  <li key={cityIdx} className="text-sm text-gray-600">
                    <Link 
                      href={`/steden/${city.toLowerCase()}`}
                      className="hover:text-[#F97316] transition-colors"
                    >
                      • {city}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Popular Near Me Searches */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Populaire Lokale Zoekopdrachten
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {nearbySearches.map((search, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-[#F9FAFB] rounded-lg">
                <Navigation className="h-5 w-5 text-[#F97316] flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-sm">{search.query}</p>
                  <p className="text-xs text-gray-600">
                    {search.location} ({search.distance})
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Distance CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white px-6 py-3 rounded-full font-semibold mb-4">
            <Clock className="h-5 w-5" />
            <span>Altijd Binnen 24 Uur Reactie, Overal in Limburg!</span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Of u nu zoekt naar een airco installateur in de buurt van Brunssum, Heerlen, Sittard of elders in Limburg - 
            wij zijn uw lokale specialist met de snelste service en beste prijzen.
          </p>
        </div>
      </div>
    </section>
  )
}