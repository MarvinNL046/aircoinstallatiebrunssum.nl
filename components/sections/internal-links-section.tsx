import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowRight, FileText, MapPin, Wrench, HelpCircle } from "lucide-react"

const linkCategories = [
  {
    title: "Populaire Diensten",
    icon: Wrench,
    links: [
      { href: "/diensten/airco-installatie", text: "Airco Installatie", description: "Vanaf €1299" },
      { href: "/diensten/airco-onderhoud", text: "Airco Onderhoud", description: "Vanaf €11/maand" },
      { href: "/diensten/airco-reparatie", text: "Airco Reparatie", description: "24/7 service" },
      { href: "/diensten/multi-split-systemen", text: "Multi-split Systemen", description: "Voor meerdere kamers" }
    ]
  },
  {
    title: "Service Gebieden",
    icon: MapPin,
    links: [
      { href: "/steden/brunssum", text: "Airco Brunssum", description: "Lokale specialist" },
      { href: "/steden/heerlen", text: "Airco Heerlen", description: "Snel ter plaatse" },
      { href: "/steden/sittard", text: "Airco Sittard", description: "Ervaren monteurs" },
      { href: "/steden/maastricht", text: "Airco Maastricht", description: "Heel Zuid-Limburg" }
    ]
  },
  {
    title: "Kennisbank",
    icon: FileText,
    links: [
      { href: "/kennisbank/beste-airco-merken", text: "Beste Airco Merken", description: "Vergelijk topmerken" },
      { href: "/kennisbank/airco-kosten", text: "Wat Kost een Airco?", description: "Prijzen & advies" },
      { href: "/kennisbank/verwarmen-met-airco", text: "Verwarmen met Airco", description: "Bespaar op energie" },
      { href: "/kennisbank/onderhoud-tips", text: "Onderhoud Tips", description: "Verleng levensduur" }
    ]
  },
  {
    title: "Veelgestelde Vragen",
    icon: HelpCircle,
    links: [
      { href: "/faq#vergunning", text: "Airco Vergunning", description: "Wat zijn de regels?" },
      { href: "/faq#kosten", text: "Airco Kosten", description: "Installatie & gebruik" },
      { href: "/faq#onderhoud", text: "Hoe Vaak Onderhoud?", description: "Onderhoudsschema" },
      { href: "/faq#levensduur", text: "Levensduur Airco", description: "10-15 jaar garantie" }
    ]
  }
]

export function InternalLinksSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ontdek Onze Services & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vind snel wat u zoekt - van installatie tot onderhoud, van Brunssum tot heel Limburg
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {linkCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="h-6 w-6 text-[#F97316]" />
                  <h3 className="font-bold text-lg text-gray-900">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link 
                        href={link.href}
                        className="group flex items-start gap-2 text-sm"
                      >
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#F97316] mt-0.5" />
                        <div>
                          <span className="font-medium text-gray-900 group-hover:text-[#F97316] transition-colors">
                            {link.text}
                          </span>
                          <p className="text-gray-600 text-xs">{link.description}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Meer informatie nodig?{" "}
            <Link href="/contact" className="text-[#F97316] hover:underline font-medium">
              Neem contact op
            </Link>{" "}
            of bel direct{" "}
            <a href="tel:0462021430" className="text-[#F97316] hover:underline font-medium">
              046 202 1430
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}