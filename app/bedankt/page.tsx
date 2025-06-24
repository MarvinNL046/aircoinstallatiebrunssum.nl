import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Phone, Mail, Clock, ArrowRight, Home } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Bedankt voor uw aanvraag | StayCool Airco Brunssum",
  description: "Uw offerte aanvraag is succesvol ontvangen. We nemen binnen 2 uur contact met u op.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function BedanktPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12">
      <div className="container max-w-3xl">
        <Card className="p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bedankt voor uw aanvraag!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            We hebben uw offerte aanvraag in goede orde ontvangen en nemen 
            <span className="font-semibold text-[#F97316]"> binnen 2 uur </span>
            contact met u op.
          </p>

          {/* What's Next Section */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-[#F97316]" />
              Wat gebeurt er nu?
            </h2>
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#F97316] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </span>
                <span>Onze specialist bekijkt uw aanvraag en bereidt een offerte op maat voor</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#F97316] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  2
                </span>
                <span>We nemen telefonisch contact op om uw wensen door te spreken</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#F97316] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  3
                </span>
                <span>Indien gewenst plannen we een gratis inmeting bij u thuis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#F97316] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  4
                </span>
                <span>U ontvangt een duidelijke offerte met vaste all-in prijzen</span>
              </li>
            </ol>
          </div>

          {/* Quick Contact */}
          <div className="border-t pt-8">
            <p className="text-gray-600 mb-4">
              Heeft u een dringende vraag? Neem gerust direct contact met ons op:
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild variant="outline" size="lg">
                <a href="tel:0462021430">
                  <Phone className="mr-2 h-5 w-5" />
                  046 202 1430
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="mailto:info@staycoolairco.nl">
                  <Mail className="mr-2 h-5 w-5" />
                  info@staycoolairco.nl
                </a>
              </Button>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#F97316] hover:bg-[#EA580C]">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Terug naar Home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/kennisbank">
                Lees meer over airco's
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Trust Message */}
          <div className="mt-12 p-6 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>StayCool Airco</strong> - Al meer dan 10 jaar de specialist in airconditioning voor heel Limburg. 
              Met 180+ tevreden klanten en een 4.9★ beoordeling staat kwaliteit bij ons voorop.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}