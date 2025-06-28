"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { HeroContactForm } from "@/components/forms/hero-contact-form"
import { Phone, Star, CheckCircle, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const headlines = [
  "Airco Installatie Brunssum",
  "Airco Specialist Limburg", 
  "Split Airco Brunssum",
  "Airco Service Limburg",
  "Airco Onderhoud Limburg",
  "Klimaatbeheersing Limburg",
  "Daikin • Mitsubishi • Samsung • LG"
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
    <section className="relative min-h-screen overflow-hidden">
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#1E3A8A] to-[#111827]">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-6">
            {/* Ribbon */}
            <div className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transition-colors duration-200">
              <Clock className="h-4 w-4" />
              <span>Binnen 24 uur reactie gegarandeerd</span>
            </div>

            {/* Typewriter Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className={`inline-block transition-all duration-300 ${isTyping ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                {headlines[currentHeadline]}
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-200 leading-relaxed">
              Professionele <strong>airco installatie Brunssum</strong> door gecertificeerde monteurs. 
              Specialist in <strong>airco service Limburg</strong> met uitstekende garantie.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#F97316] text-[#F97316]" />
                  ))}
                </div>
                <span className="font-semibold">4.7/5</span>
                <span className="text-gray-300">(163 Google reviews)</span>
              </div>
            </div>

            {/* Feature List */}
            <ul className="space-y-3">
              {[
                "Gratis offerte & vakkundig advies",
                "Gecertificeerde F-gassen monteurs",
                "Specialist in Daikin, Mitsubishi, Samsung & LG",
                "Uitstekende garantievoorwaarden",
                "Onderhoud vanaf €11 per maand"
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
                className="bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
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
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-200"
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
            <Card className="backdrop-blur-md bg-white/95 shadow-2xl border-0 p-6 md:p-8 rounded-2xl">
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