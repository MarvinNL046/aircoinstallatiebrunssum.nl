"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Mail } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent" />
      <div className="container relative">
        <div className="mx-auto max-w-4xl">
          <div className="transform transition-all duration-300">
            <Card className="overflow-hidden p-8 sm:p-12 backdrop-blur-sm bg-white/95 shadow-2xl border-0">
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Direct Een <span className="text-[#F97316]">Airco Installatie Brunssum</span>?
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    Ontvang binnen 24 uur een vrijblijvende offerte van uw <strong>airco specialist Limburg</strong>. 
                    Actief in heel Zuid-Limburg!
                  </p>
                  <ul className="mt-6 space-y-3 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F97316] text-white">✓</span>
                      <span className="text-gray-700">Gratis inmeting & advies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F97316] text-white">✓</span>
                      <span className="text-gray-700">Gecertificeerde F-gassen monteurs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F97316] text-white">✓</span>
                      <span className="text-gray-700">Uitstekende garantievoorwaarden</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center gap-4">
                  <Button size="lg" className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200" asChild>
                    <Link href="/offerte">
                      <Mail className="mr-2 h-4 w-4" />
                      Offerte Aanvragen
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full border-2 border-[#F97316] text-[#F97316] hover:bg-[#FFF7ED] font-semibold" asChild>
                    <Link href="tel:0462021430">
                      <Phone className="mr-2 h-4 w-4" />
                      Bel 046 202 1430
                    </Link>
                  </Button>
                  <p className="mt-2 text-center text-sm text-gray-600">
                    <strong>Binnen 24 uur reactie</strong> • Vrijblijvend • 4.7★ (163 reviews)
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
