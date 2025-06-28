"use client"

import { useState } from "react"

const brands = [
  { name: "Daikin", models: ["Comfora", "Emura", "Stylish", "Perfera", "Ururu Sarara"] },
  { name: "LG", models: ["ArtCool", "DualCool Premium"] },
  { name: "Samsung", models: ["WindFree series", "Luzon"] },
  { name: "Mitsubishi Heavy Industries", models: [] },
  { name: "Toshiba", models: ["Haori", "Daiseikai", "Kazumi", "Seiya"] },
  { name: "Tosot", models: ["Pular", "Clivia", "Cosmo"] }
]

export function BrandLogos() {
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null)

  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Specialist In Alle Topmerken
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Als <strong>airco specialist Limburg</strong> werken wij met alle A-merken. 
            Van <strong>Daikin airco Limburg</strong> tot <strong>Mitsubishi airco Limburg</strong>.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredBrand(brand.name)}
              onMouseLeave={() => setHoveredBrand(null)}
            >
              <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer h-full flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {brand.name}
                  </h3>
                  
                  {/* Show models on hover if available */}
                  {hoveredBrand === brand.name && brand.models.length > 0 && (
                    <div className="absolute z-10 top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg p-4 min-w-[200px]">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Modellen:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {brand.models.map((model, idx) => (
                          <li key={idx}>• {model}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ook specialist in mobiele airco's van LG en Tosot, plus airco covers in wit en antraciet
          </p>
          <div className="inline-flex items-center gap-2 bg-[#FFF7ED] text-[#C2410C] px-6 py-3 rounded-full font-semibold">
            <span>Alle merken • Beste prijzen • Professionele installatie</span>
          </div>
        </div>
      </div>
    </section>
  )
}