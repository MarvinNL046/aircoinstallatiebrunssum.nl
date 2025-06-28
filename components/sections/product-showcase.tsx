"use client"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

const products = [
  {
    brand: "Daikin",
    model: "Perfera",
    slug: "daikin-perfera",
    image: "/images/products/daikin-perfera-wit.webp",
    features: ["Fluisterstil: 19 dB", "A+++ energie label", "WiFi standaard", "Luchtzuivering"],
    popular: true
  },
  {
    brand: "Daikin", 
    model: "Stylish",
    slug: "daikin-stylish",
    image: "/images/products/daikin-stylish-wit.webp",
    features: ["Design model", "Coanda effect", "Intelligent eye", "3 kleuren"],
  },
  {
    brand: "LG",
    model: "Artcool Gallery",
    slug: "lg-artcool",
    image: "/images/products/rac-eu-lg-artcool-black.webp",
    features: ["Kunstwerk design", "ThinQ app", "Dual Inverter", "10 jaar garantie"],
  },
  {
    brand: "Samsung",
    model: "WindFree",
    slug: "samsung-windfree",
    image: "/images/products/Samsung_Logo.svg",
    features: ["WindFree koeling", "AI Auto Cooling", "PM 1.0 filter", "SmartThings"],
  },
  {
    brand: "Mitsubishi",
    model: "Zen White",
    slug: "mitsubishi-zen",
    image: "/images/products/Mitsubishi heavy indus/srk50zs-wf-wit-single-split-airco-wandmodel-2.5-3.5-5kw-1.webp",
    features: ["Allergeenfilter", "Weekly timer", "Econo Cool", "Silent mode"],
  },
  {
    brand: "Tosot",
    model: "Clivia",
    slug: "tosot-clivia",
    image: "/images/products/724-clivia-wit-vooraanzicht.webp",
    features: ["Budget vriendelijk", "WiFi optioneel", "Turbo functie", "2 jaar garantie"],
  }
]

export function ProductShowcase() {

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Populaire Airco Modellen in Brunssum
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek onze selectie topmodellen van <strong>Daikin airco Limburg</strong>, <strong>Mitsubishi airco Limburg</strong> 
            en andere A-merken. Gratis advies voor de beste keuze!
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card 
              key={product.slug}
              className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-0"
            >
              {product.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Populair
                  </span>
                </div>
              )}
              
              {/* Product Image */}
              <div className="relative h-64 bg-gray-50">
                <Image
                  src={product.image}
                  alt={`${product.brand} ${product.model} airco installatie Brunssum`}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {product.brand} {product.model}
                </h3>
                
                <ul className="space-y-2 mt-4 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-[#F97316] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <Button
                    asChild
                    className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold"
                  >
                    <Link href="/offerte">
                      Vraag Prijs Op
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[#F97316] text-[#F97316] hover:bg-[#FFF7ED]"
                  >
                    <Link href={`/merken/${product.slug}`}>
                      Meer Info
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-[#F9FAFB] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Niet Zeker Welke Airco Het Beste Past?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Onze experts helpen u graag met persoonlijk advies. 
            Wij zijn specialist in alle merken en adviseren objectief de beste oplossing voor uw situatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-semibold shadow-lg"
            >
              <Link href="tel:0462021430">
                Bel Voor Advies: 046 202 1430
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white font-semibold"
            >
              <Link href="/diensten">
                Bekijk Alle Diensten
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}