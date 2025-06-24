"use client"

import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"
import Link from "next/link"

interface CTABannerProps {
  theme?: "light" | "dark"
}

export function CTABanner({ theme = "light" }: CTABannerProps) {
  const bgColor = theme === "light" ? "bg-[#F3F4F6]" : "bg-[#1E40AF]"
  const textColor = theme === "light" ? "text-gray-900" : "text-white"

  return (
    <div 
      className={`${bgColor} py-4`}
    >
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`${textColor} text-base font-semibold flex items-center gap-2`}>
            <span className="text-2xl">❄️</span> 
            <span>Laat uw airco installeren in Limburg en geniet van een korting tot wel € 250,-!</span>
          </p>
          <div className="flex flex-wrap gap-3">
            <Button 
              size="default" 
              className="bg-white text-[#F97316] hover:bg-gray-100 font-semibold shadow-md border border-gray-200"
              asChild
            >
              <Link href="tel:0462021430">
                <Phone className="mr-2 h-4 w-4" />
                Bel Direct
              </Link>
            </Button>
            <Button 
              size="default" 
              className="bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold shadow-md" 
              asChild
            >
              <Link href="/offerte">
                <Calendar className="mr-2 h-4 w-4" />
                Plan Afspraak
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
