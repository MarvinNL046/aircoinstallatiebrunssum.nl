"use client"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { MapPin, Calendar, Star } from "lucide-react"

const installations = [
  {
    id: 1,
    image: "/images/voorbeelden_onze_installaties/Airco/20241030_162118.jpg",
    location: "Brunssum",
    date: "Oktober 2024",
    type: "Daikin Perfera",
    description: "Split airco installatie woonkamer"
  },
  {
    id: 2,
    image: "/images/voorbeelden_onze_installaties/Airco/20241024_094508.jpg",
    location: "Heerlen",
    date: "Oktober 2024",
    type: "Mitsubishi Heavy",
    description: "Multi-split systeem 3 kamers"
  },
  {
    id: 3,
    image: "/images/voorbeelden_onze_installaties/Airco/20240906_125743.jpg",
    location: "Sittard",
    date: "September 2024",
    type: "LG Artcool",
    description: "Design airco slaapkamer"
  },
  {
    id: 4,
    image: "/images/voorbeelden_onze_installaties/Airco/20240629_122850.jpg",
    location: "Geleen",
    date: "Juni 2024",
    type: "Samsung WindFree",
    description: "Kantoor installatie"
  },
  {
    id: 5,
    image: "/images/voorbeelden_onze_installaties/Airco/20240628_125058.jpg",
    location: "Landgraaf",
    date: "Juni 2024",
    type: "Tosot Clivia",
    description: "Budget airco zolder"
  },
  {
    id: 6,
    image: "/images/voorbeelden_onze_installaties/Airco/20240605_093518.jpg",
    location: "Kerkrade",
    date: "Juni 2024",
    type: "Daikin Stylish",
    description: "Premium design model"
  }
]

export function InstallationGallery() {

  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Recente Airco Installaties in Limburg
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bekijk onze recent uitgevoerde <strong>airco installaties in Brunssum</strong>, Heerlen, 
            Sittard en heel Limburg. Vakwerk door gecertificeerde monteurs.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {installations.map((install) => (
            <Card 
              key={install.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-0"
            >
              <div className="relative h-64">
                <Image
                  src={install.image}
                  alt={`${install.type} airco installatie ${install.location}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-bold text-lg mb-1">{install.type}</h3>
                  <p className="text-sm opacity-90 mb-2">{install.description}</p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {install.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {install.date}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#F97316] mb-2">500+</div>
            <p className="text-gray-600">Installaties in 2024</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#F97316] mb-2">163</div>
            <p className="text-gray-600">Google Reviews</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#F97316] mb-2 flex items-center justify-center gap-1">
              4.7 <Star className="h-8 w-8 fill-[#F97316]" />
            </div>
            <p className="text-gray-600">Gemiddelde Score</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#F97316] mb-2">24u</div>
            <p className="text-gray-600">Reactietijd</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ook Een Professionele Airco Installatie?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Vraag direct een gratis offerte aan voor uw woning of bedrijf
          </p>
          <a 
            href="/offerte"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Gratis Offerte Aanvragen
          </a>
        </div>
      </div>
    </section>
  )
}