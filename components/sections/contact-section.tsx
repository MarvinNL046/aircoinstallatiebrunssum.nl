"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/forms/contact-form"

const contactInfo = [
  {
    icon: Phone,
    title: "Telefoon",
    details: ["046 202 1430", "Ma-vr: 09:00-17:00", "Za: Gesloten", "Zo: Gesloten"],
    action: { href: "tel:0462021430", text: "Bel Direct" }
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    details: ["06 3648 1054", "Snelle reactie", "Ook buiten kantooruren"],
    action: { href: "https://wa.me/31636481054", text: "Stuur Bericht" }
  },
  {
    icon: Calendar,
    title: "Thuis Afspraak",
    details: ["Online planning", "Kies zelf uw tijd", "Direct bevestiging"],
    action: { href: "https://afspraken.staycoolairco.nl/", text: "Plan Afspraak", external: true }
  },
  {
    icon: Mail,
    title: "E-mail",
    details: ["info@staycoolairco.nl", "Binnen 24 uur reactie"],
    action: { href: "mailto:info@staycoolairco.nl", text: "Stuur E-mail" }
  },
  {
    icon: MapPin,
    title: "Werkgebied",
    details: ["Heel Zuid-Limburg", "Brunssum, Heerlen, Sittard", "Geleen, Kerkrade, Landgraaf", "En omstreken"],
    action: null
  }
]

export function ContactSection() {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact - Airco Service Limburg
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Neem contact op met uw <strong>airco specialist Limburg</strong>. 
            Wij helpen u graag met al uw vragen over <strong>airco installatie Brunssum</strong> en omgeving.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Direct Contact
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-0">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-[#FFF7ED] rounded-lg flex-shrink-0">
                        <Icon className="h-6 w-6 text-[#F97316]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <div className="space-y-1">
                          {item.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-gray-600">
                              {idx === 0 ? <strong>{detail}</strong> : detail}
                            </p>
                          ))}
                        </div>
                        {item.action && (
                          <Button
                            asChild
                            size="sm"
                            className="mt-3 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-lg"
                          >
                            {item.action.external ? (
                              <a href={item.action.href} target="_blank" rel="noopener noreferrer">
                                {item.action.text}
                              </a>
                            ) : (
                              <Link href={item.action.href}>
                                {item.action.text}
                              </Link>
                            )}
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>

            {/* Opening Hours Card */}
            <Card className="mt-6 p-6 bg-[#DBEAFE] border-[#2563EB]/20">
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-[#2563EB] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Openingstijden</h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Maandag:</span>
                      <span className="font-medium">09:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dinsdag:</span>
                      <span className="font-medium">09:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Woensdag:</span>
                      <span className="font-medium">09:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Donderdag:</span>
                      <span className="font-medium">09:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Vrijdag:</span>
                      <span className="font-medium">09:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Weekend:</span>
                      <span className="font-medium text-gray-500">Gesloten</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8 shadow-xl border-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Vraag Een Gratis Offerte Aan
              </h3>
              <p className="text-gray-600 mb-6">
                Vul het formulier in en ontvang binnen 24 uur een offerte op maat
              </p>
              
              <ContactForm />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}