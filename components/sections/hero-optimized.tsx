"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { HeroContactForm } from "@/components/forms/hero-contact-form"
import { Phone, Star, CheckCircle, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const headlines = [
  "Airco Installatie Brunssum",
  "Airconditioning Specialist Limburg", 
  "Professionele Airco Monteur",
  "Airco Onderhoud & Reparatie",
  "Split Airco Vanaf €1.299",
  "Erkend Installateur F-gassen",
  "Daikin • Mitsubishi • Samsung"
]

export function HeroOptimized() {
  const [currentHeadline, setCurrentHeadline] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false)
      setTimeout(() => {
        setCurrentHeadline((prev) => (prev + 1) % headlines.length)
        setIsTyping(true)
      }, 200)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Gradient using StayCool colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#1E3A8A] to-gray-900" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-6">
            {/* Ribbon */}
            <div className="inline-flex items-center gap-2 bg-[#F97316] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
              <Clock className="h-4 w-4" />
              Binnen 24u reactie gegarandeerd
            </div>

            {/* Typewriter Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className={`inline-block transition-all duration-300 ${isTyping ? 'opacity-100' : 'opacity-0'}`}>
                {headlines[currentHeadline]}
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-200 leading-relaxed">
              Professionele airco installatie door gecertificeerde monteurs. 
              Met 10 jaar garantie en de beste prijs-kwaliteit in heel Limburg.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <span className="font-semibold">4.9/5</span>
                <span className="text-gray-300">(180+ reviews)</span>
              </div>
            </div>

            {/* Feature List */}
            <ul className="space-y-3">
              {[
                "Gratis offerte & advies aan huis",
                "Erkend F-gassen installateur",
                "Alle topmerken (Daikin, Mitsubishi, Samsung)",
                "10 jaar fabrieksgarantie"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#F97316] flex-shrink-0" />
                  <span className="text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                asChild
                size="lg"
                className="bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
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
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-6 py-3 rounded-lg transition-all duration-200"
              >
                <Link href="#offerte">
                  Gratis Offerte
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Form */}
          <div id="offerte">
            <Card className="backdrop-blur-md bg-white/95 shadow-2xl border-0 p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Vraag Direct Een Offerte Aan
                  </h3>
                  <p className="text-gray-600">
                    Vul het formulier in en ontvang binnen 2 uur een offerte op maat
                  </p>
                </div>

                <HeroContactForm />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}