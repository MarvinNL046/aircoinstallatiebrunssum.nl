import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AirVent, Mail, MapPin, Phone, Clock, CheckCircle, Facebook, Instagram, Youtube } from "lucide-react"

const cities = [
  "Brunssum",
  "Heerlen", 
  "Kerkrade",
  "Landgraaf",
  "Sittard",
  "Geleen",
  "Voerendaal",
  "Hoensbroek",
  "Parkstad",
]

const services = [
  { name: "Alle Diensten", href: "/diensten" },
  { name: "Gratis Offerte", href: "/offerte" },
  { name: "Contact", href: "/contact" },
  { name: "Veelgestelde Vragen", href: "/faq" }
]


export function FooterOptimized() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#F97316] to-[#EA580C]">
        <div className="container py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Klaar voor een koel & comfortabel huis?</h3>
              <p className="text-white/90 text-lg">Vraag nu een gratis offerte aan - Binnen 24 uur reactie!</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-white text-[#F97316] hover:bg-gray-100 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <Link href="tel:0462021430">
                  <Phone className="mr-2 h-5 w-5" />
                  046 202 1430
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                className="bg-[#EA580C] text-white border-2 border-[#EA580C] hover:bg-[#C2410C] hover:border-[#C2410C] font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <Link href="/offerte">
                  Offerte Aanvragen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-[#F97316] rounded-lg">
                <AirVent className="h-6 w-6" />
              </div>
              <div>
                <span className="font-bold text-lg">StayCool Airco</span>
                <span className="text-sm text-gray-400 block">Brunssum & Heel Limburg</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Uw betrouwbare <strong>airco specialist Limburg</strong> voor installatie, onderhoud en reparatie. 
              Gecertificeerde monteurs, uitstekende garantie en 4.7/5 sterren op basis van 163 Google reviews.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-5 w-5 text-[#F97316]" />
                <span>F-gassen Cert.</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-5 w-5 text-[#F97316]" />
                <span>163 Google Reviews</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-5 w-5 text-[#F97316]" />
                <span>4.7★ Score</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/staycoolairconditioning" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-[#F97316] rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/staycoolairco" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-[#F97316] rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com/@staycoolairco" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-[#F97316] rounded-lg transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Onze Diensten</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-[#F97316] transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Werkgebied</h3>
            <ul className="space-y-2">
              {cities.map((city) => (
                <li key={city}>
                  <Link 
                    href={`/steden/${city.toLowerCase()}`}
                    className="text-gray-300 hover:text-[#F97316] transition-colors text-sm"
                  >
                    Airco {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="tel:0462021430" 
                  className="flex items-center gap-2 text-gray-300 hover:text-[#F97316] transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  046 202 1430
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/31636481054" 
                  className="flex items-center gap-2 text-gray-300 hover:text-[#F97316] transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  06 3648 1054 (WhatsApp)
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@staycoolairco.nl" 
                  className="flex items-center gap-2 text-gray-300 hover:text-[#F97316] transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  info@staycoolairco.nl
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  Heel Limburg<br />
                  <span className="text-xs text-gray-400">
                    Hoofdkantoor: Nieuwstadt
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <Clock className="h-4 w-4 mt-0.5" />
                <span>
                  Ma-vr: 09:00 - 17:00<br />
                  <span className="text-xs text-gray-400">Weekend gesloten</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              © {new Date().getFullYear()} StayCool Airco Brunssum. Alle rechten voorbehouden.
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-[#F97316] transition-colors">
                Privacy
              </Link>
              <Link href="/algemene-voorwaarden" className="hover:text-[#F97316] transition-colors">
                Voorwaarden
              </Link>
              <Link href="/cookies" className="hover:text-[#F97316] transition-colors">
                Cookies
              </Link>
              <a 
                href="https://staycoolairco.nl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#F97316] transition-colors"
              >
                Hoofdwebsite
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}