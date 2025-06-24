import { Metadata } from "next"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, CheckCircle2, XCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { generateArticleSchema } from "@/lib/schema"
import Script from 'next/script'

export const metadata: Metadata = {
  title: "Beste Airco Merken 2024 | Top 10 Vergelijking + Prijzen | Expert Review",
  description: "✅ Ontdek de beste airco merken van 2024! Onafhankelijke vergelijking van Daikin, Mitsubishi, Samsung & meer. Inclusief prijzen, voor- en nadelen. Gratis advies: 046 202 1430",
  keywords: [
    "beste airco",
    "beste airco merken",
    "top 10 airco merken",
    "airco merken vergelijken",
    "welke airco is het beste",
    "slechte airco merken",
    "goede airco merken",
    "airco test 2024"
  ],
  alternates: {
    canonical: 'https://aircoinstallatiebrunssum.nl/kennisbank/beste-airco-merken'
  }
}

const aircoMerken = [
  {
    rank: 1,
    merk: "Daikin",
    score: 9.2,
    prijsrange: "€1.299 - €3.500",
    pros: ["Japanse kwaliteit", "Zeer stil", "Lange levensduur", "Uitgebreid dealernetwerk"],
    cons: ["Hogere aanschafprijs", "Duurdere onderdelen"],
    geschiktVoor: "Woningen waar kwaliteit en stilte belangrijk zijn"
  },
  {
    rank: 2,
    merk: "Mitsubishi Electric",
    score: 9.0,
    prijsrange: "€1.399 - €3.800",
    pros: ["Betrouwbaar", "Energiezuinig", "Goede garantie", "Stille werking"],
    cons: ["Premium prijsklasse", "Beperkt design"],
    geschiktVoor: "Lange termijn investering met lage energiekosten"
  },
  {
    rank: 3,
    merk: "Samsung",
    score: 8.5,
    prijsrange: "€999 - €2.800",
    pros: ["Modern design", "Wind-Free technologie", "Goede prijs-kwaliteit", "Smart home integratie"],
    cons: ["Kortere levensduur dan Japanse merken", "Service kan beter"],
    geschiktVoor: "Moderne woningen met smart home systemen"
  },
  {
    rank: 4,
    merk: "LG",
    score: 8.3,
    prijsrange: "€899 - €2.500",
    pros: ["Betaalbaar", "Dual Inverter", "10 jaar compressor garantie", "Snel koelen"],
    cons: ["Iets meer geluid", "Design basis"],
    geschiktVoor: "Budget-bewuste kopers die kwaliteit zoeken"
  },
  {
    rank: 5,
    merk: "Panasonic",
    score: 8.2,
    prijsrange: "€1.199 - €3.200",
    pros: ["Nanoe-X luchtzuivering", "Betrouwbaar", "Energiezuinig", "Stille nachtstand"],
    cons: ["Minder bekend in NL", "Beperkt dealernetwerk"],
    geschiktVoor: "Mensen met allergie of luchtwegproblemen"
  },
  {
    rank: 6,
    merk: "Toshiba",
    score: 7.8,
    prijsrange: "€899 - €2.400",
    pros: ["Goede prijs", "Betrouwbaar", "Hybrid Inverter", "Compact design"],
    cons: ["Minder features", "Basis afstandsbediening"],
    geschiktVoor: "Eenvoudige installaties zonder poespas"
  },
  {
    rank: 7,
    merk: "Gree",
    score: 7.5,
    prijsrange: "€699 - €1.800",
    pros: ["Zeer betaalbaar", "Wereldwijd grootste producent", "WiFi standaard", "5 jaar garantie"],
    cons: ["Chinese kwaliteit", "Hogere storingskans", "Luidruchtig"],
    geschiktVoor: "Tijdelijke oplossingen of verhuurwoningen"
  },
  {
    rank: 8,
    merk: "Tosot",
    score: 7.2,
    prijsrange: "€599 - €1.500",
    pros: ["Budget optie", "Basis functies aanwezig", "Snel leverbaar", "Eenvoudige installatie"],
    cons: ["Kortere levensduur", "Beperkte service", "Basis kwaliteit"],
    geschiktVoor: "Zeer krappe budgetten of tijdelijk gebruik"
  }
]

export default function BesteAircoMerkenPage() {
  const breadcrumbItems = [
    { label: "Kennisbank", href: "/kennisbank" },
    { label: "Beste Airco Merken 2024", href: "/kennisbank/beste-airco-merken" }
  ]

  const articleSchema = generateArticleSchema({
    title: "Beste Airco Merken 2024: Complete Vergelijking",
    description: metadata.description || "",
    datePublished: "2024-01-15",
    dateModified: new Date().toISOString().split('T')[0]
  })

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <div className="container py-12">
        <Breadcrumb items={breadcrumbItems} />
        
        <article className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-6">
            Beste Airco Merken 2024: Onafhankelijke Top 10 Vergelijking
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Na het installeren van 500+ airco's in Limburg delen we onze eerlijke ervaring met verschillende merken. 
            Ontdek welke airco het beste bij uw situatie past.
          </p>

          <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <AlertCircle className="h-6 w-6" />
              Snel Antwoord: Onze Top 3
            </h2>
            <ol className="space-y-2">
              <li><strong>Beste Algemeen:</strong> Daikin - Japanse kwaliteit, zeer stil, lange levensduur</li>
              <li><strong>Beste Prijs-Kwaliteit:</strong> Samsung - Modern, betaalbaar, goede features</li>
              <li><strong>Beste Budget:</strong> LG - Betrouwbaar, 10 jaar garantie, scherpe prijs</li>
            </ol>
          </div>

          <h2 className="text-3xl font-semibold mt-12 mb-6">Complete Merken Vergelijking</h2>
          
          <div className="grid gap-6 mb-12">
            {aircoMerken.map((merk) => (
              <Card key={merk.merk} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="default" className="text-lg px-3 py-1">
                        #{merk.rank}
                      </Badge>
                      <h3 className="text-2xl font-bold">{merk.merk}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{merk.score}/10</span>
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-primary mb-2">
                      {merk.prijsrange}
                    </p>
                    <p className="text-muted-foreground italic">
                      Geschikt voor: {merk.geschiktVoor}
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Voordelen
                    </h4>
                    <ul className="space-y-1">
                      {merk.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-red-600" />
                      Nadelen
                    </h4>
                    <ul className="space-y-1">
                      {merk.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <section className="mt-12">
            <h2 className="text-3xl font-semibold mb-6">Welke Airco Past Bij U?</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">Voor Kwaliteit & Stilte</h3>
                <p className="mb-3">Kies voor <strong>Daikin</strong> of <strong>Mitsubishi Electric</strong> als:</p>
                <ul className="space-y-2">
                  <li>• U een slaapkamer wilt koelen</li>
                  <li>• Geluid een belangrijke factor is</li>
                  <li>• U 15+ jaar probleemloos wilt genieten</li>
                  <li>• Budget minder belangrijk is dan kwaliteit</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">Voor Prijs-Kwaliteit</h3>
                <p className="mb-3">Kies voor <strong>Samsung</strong> of <strong>LG</strong> als:</p>
                <ul className="space-y-2">
                  <li>• U een goede balans zoekt</li>
                  <li>• Modern design belangrijk is</li>
                  <li>• U smart home features wilt</li>
                  <li>• U binnen budget wilt blijven</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">Voor Laagste Prijs</h3>
                <p className="mb-3">Kies voor <strong>Gree</strong> of <strong>Tosot</strong> als:</p>
                <ul className="space-y-2">
                  <li>• Budget zeer beperkt is</li>
                  <li>• Tijdelijke oplossing nodig is</li>
                  <li>• Voor verhuur of verkoop</li>
                  <li>• Basis koeling volstaat</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">Voor Allergie & Gezondheid</h3>
                <p className="mb-3">Kies voor <strong>Panasonic</strong> met Nanoe-X als:</p>
                <ul className="space-y-2">
                  <li>• U last heeft van allergie</li>
                  <li>• Luchtkwaliteit belangrijk is</li>
                  <li>• U huisdieren heeft</li>
                  <li>• U rookt binnenshuis</li>
                </ul>
              </Card>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-semibold mb-6">Veelgestelde Vragen</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Waarom zijn Japanse merken duurder?</h3>
                <p>
                  Japanse merken zoals Daikin en Mitsubishi gebruiken hoogwaardige componenten, 
                  hebben strengere kwaliteitscontroles en investeren meer in R&D. Dit resulteert 
                  in stillere units, langere levensduur (15-20 jaar) en lagere storingskans.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Zijn Chinese merken zoals Gree slecht?</h3>
                <p>
                  Niet per se. Gree is 's werelds grootste airco producent en levert aan vele 
                  A-merken. Voor tijdelijk gebruik of krappe budgetten zijn ze prima. Ze gaan 
                  echter minder lang mee (7-10 jaar) en hebben vaker onderhoud nodig.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Welk merk adviseren jullie het meest?</h3>
                <p>
                  Voor 80% van onze klanten adviseren we Samsung of LG vanwege de uitstekende 
                  prijs-kwaliteit verhouding. Voor slaapkamers raden we Daikin aan vanwege het 
                  lage geluidsniveau.
                </p>
              </div>
            </div>
          </section>

          <div className="bg-primary text-primary-foreground p-8 rounded-lg mt-12">
            <h2 className="text-2xl font-bold mb-4">
              Gratis Persoonlijk Advies Nodig?
            </h2>
            <p className="mb-6">
              Twijfelt u nog welk merk het beste bij uw situatie past? Onze experts helpen u graag 
              met een vrijblijvend advies op maat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="tel:0462021430" 
                className="bg-white text-primary px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
              >
                Bel Direct: 046 202 1430
              </Link>
              <Link 
                href="/offerte" 
                className="bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
              >
                Vraag Gratis Offerte Aan
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}