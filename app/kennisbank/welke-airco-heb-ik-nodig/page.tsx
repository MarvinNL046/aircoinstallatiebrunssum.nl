"use client"

import { useState } from "react"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Home, Building2, Sun, Snowflake, Volume2, Euro, AlertCircle } from "lucide-react"
import Link from "next/link"


interface CalculatorData {
  roomType: string
  roomSize: number
  isolation: string
  sunExposure: string
  usage: string
  quietness: string
  budget: string
}

const initialData: CalculatorData = {
  roomType: "living",
  roomSize: 25,
  isolation: "average",
  sunExposure: "normal",
  usage: "cooling",
  quietness: "normal",
  budget: "medium"
}

export default function WelkeAircoHebIkNodigPage() {
  const [data, setData] = useState<CalculatorData>(initialData)
  const [showResults, setShowResults] = useState(false)

  const breadcrumbItems = [
    { label: "Kennisbank", href: "/kennisbank" },
    { label: "Welke Airco Heb Ik Nodig?", href: "/kennisbank/welke-airco-heb-ik-nodig" }
  ]

  const calculateRequiredPower = () => {
    let basePower = data.roomSize * 100 // Basic: 100W per m²
    
    // Adjust for isolation
    if (data.isolation === "poor") basePower *= 1.3
    if (data.isolation === "excellent") basePower *= 0.8
    
    // Adjust for sun exposure
    if (data.sunExposure === "high") basePower *= 1.2
    if (data.sunExposure === "low") basePower *= 0.9
    
    // Adjust for usage type
    if (data.usage === "both") basePower *= 1.1
    
    // Convert to kW and round
    return Math.round(basePower / 1000 * 10) / 10
  }

  const getRecommendations = () => {
    const power = calculateRequiredPower()
    const recommendations = []
    
    // Power recommendation
    if (power <= 2.5) {
      recommendations.push({
        type: "power",
        value: "2.5 kW",
        models: ["Daikin FTXM25", "Samsung AR09", "LG S09EQ"],
        price: "€1.299 - €1.799"
      })
    } else if (power <= 3.5) {
      recommendations.push({
        type: "power",
        value: "3.5 kW",
        models: ["Daikin FTXM35", "Samsung AR12", "Mitsubishi MSZ-LN35"],
        price: "€1.599 - €2.299"
      })
    } else if (power <= 5.0) {
      recommendations.push({
        type: "power",
        value: "5.0 kW",
        models: ["Daikin FTXM50", "Samsung AR18", "LG S18EQ"],
        price: "€1.999 - €2.799"
      })
    } else {
      recommendations.push({
        type: "power",
        value: "7.0 kW of Multi-split",
        models: ["Daikin FTXM71", "Multi-split systeem", "VRV systeem"],
        price: "€2.799 - €4.999+"
      })
    }
    
    // Brand recommendation based on requirements
    let brandRec = ""
    if (data.quietness === "very" && data.budget === "high") {
      brandRec = "Daikin of Mitsubishi Electric (stilste modellen)"
    } else if (data.budget === "low") {
      brandRec = "LG of Gree (beste prijs-kwaliteit)"
    } else {
      brandRec = "Samsung of Panasonic (goede balans)"
    }
    
    return { power, recommendations, brandRec }
  }

  const results = showResults ? getRecommendations() : null

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />
      
      <h1 className="text-4xl font-bold mb-6">
        Welke Airco Heb Ik Nodig? Bereken Het Direct!
      </h1>
      
      <p className="text-xl text-muted-foreground mb-8">
        Beantwoord 6 simpele vragen en ontdek binnen 2 minuten welke airco perfect bij uw situatie past. 
        Inclusief vermogen, prijsindicatie en merkadvies.
      </p>

      {!showResults ? (
        <Card className="p-8">
          <div className="space-y-8">
            {/* Room Type */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Home className="h-5 w-5" />
                1. Welke ruimte wilt u koelen/verwarmen?
              </h3>
              <RadioGroup value={data.roomType} onValueChange={(value) => setData({...data, roomType: value})}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="living" id="living" />
                    <Label htmlFor="living">Woonkamer</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bedroom" id="bedroom" />
                    <Label htmlFor="bedroom">Slaapkamer</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="office" id="office" />
                    <Label htmlFor="office">Kantoor/Studeerkamer</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="multiple" id="multiple" />
                    <Label htmlFor="multiple">Meerdere ruimtes</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Room Size */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                2. Hoe groot is de ruimte?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Oppervlakte: {data.roomSize} m²</span>
                  <Badge variant="secondary">{data.roomSize < 20 ? "Klein" : data.roomSize < 40 ? "Gemiddeld" : "Groot"}</Badge>
                </div>
                <Slider
                  value={[data.roomSize]}
                  onValueChange={(value) => setData({...data, roomSize: value[0]})}
                  min={10}
                  max={80}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>10 m²</span>
                  <span>80 m²</span>
                </div>
              </div>
            </div>

            {/* Isolation */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Home className="h-5 w-5" />
                3. Hoe goed is uw woning geïsoleerd?
              </h3>
              <RadioGroup value={data.isolation} onValueChange={(value) => setData({...data, isolation: value})}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="poor" id="poor" />
                    <Label htmlFor="poor">Matig (oud huis, enkel glas)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="average" id="average" />
                    <Label htmlFor="average">Gemiddeld (dubbel glas, basis isolatie)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="excellent" id="excellent" />
                    <Label htmlFor="excellent">Uitstekend (nieuwbouw, HR++ glas)</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Sun Exposure */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Sun className="h-5 w-5" />
                4. Hoeveel zonlicht krijgt de ruimte?
              </h3>
              <RadioGroup value={data.sunExposure} onValueChange={(value) => setData({...data, sunExposure: value})}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="low" id="low" />
                    <Label htmlFor="low">Weinig (noordkant, veel schaduw)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="normal" id="normal" />
                    <Label htmlFor="normal">Normaal (oost/west)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="high" id="high" />
                    <Label htmlFor="high">Veel (zuidkant, grote ramen)</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Usage */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Snowflake className="h-5 w-5" />
                5. Waarvoor wilt u de airco gebruiken?
              </h3>
              <RadioGroup value={data.usage} onValueChange={(value) => setData({...data, usage: value})}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cooling" id="cooling" />
                    <Label htmlFor="cooling">Alleen koelen</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="both" id="both" />
                    <Label htmlFor="both">Koelen én verwarmen</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Quietness */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Volume2 className="h-5 w-5" />
                6. Hoe belangrijk is een stille werking?
              </h3>
              <RadioGroup value={data.quietness} onValueChange={(value) => setData({...data, quietness: value})}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="normal" id="q-normal" />
                    <Label htmlFor="q-normal">Normaal belangrijk</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="very" id="q-very" />
                    <Label htmlFor="q-very">Zeer belangrijk (slaapkamer)</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <Button 
              onClick={() => setShowResults(true)}
              size="lg"
              className="w-full"
            >
              Bereken Mijn Airco Advies
            </Button>
          </div>
        </Card>
      ) : (
        <div className="space-y-6">
          <Card className="p-8 bg-primary text-primary-foreground">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6" />
              Uw Persoonlijke Airco Advies
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Benodigd Vermogen:</h3>
                <p className="text-3xl font-bold">{results?.recommendations[0].value}</p>
                <p className="text-sm opacity-90 mt-1">
                  Berekend op basis van {data.roomSize} m² met {
                    data.isolation === "poor" ? "matige" : 
                    data.isolation === "average" ? "gemiddelde" : "uitstekende"
                  } isolatie
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Geschatte Investering:</h3>
                <p className="text-3xl font-bold">{results?.recommendations[0].price}</p>
                <p className="text-sm opacity-90 mt-1">Inclusief installatie en BTW</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Aanbevolen Modellen</h3>
            <div className="space-y-3">
              {results?.recommendations[0].models.map((model, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium">{model}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <p className="text-sm">
                <strong>Merkadvies:</strong> {results?.brandRec}
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Belangrijke Overwegingen
            </h3>
            <ul className="space-y-2">
              {data.roomType === "bedroom" && (
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Voor slaapkamers adviseren we extra stille modellen (onder 20 dB)</span>
                </li>
              )}
              {data.roomType === "multiple" && (
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Voor meerdere ruimtes is een multi-split systeem vaak voordeliger</span>
                </li>
              )}
              {data.usage === "both" && (
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Voor verwarmen is een hoge COP-waarde (4+) belangrijk voor lage energiekosten</span>
                </li>
              )}
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span>Professionele installatie is essentieel voor optimale werking en garantie</span>
              </li>
            </ul>
          </Card>

          <div className="grid md:grid-cols-2 gap-4">
            <Button 
              onClick={() => setShowResults(false)}
              variant="outline"
              size="lg"
            >
              Opnieuw Berekenen
            </Button>
            <Button asChild size="lg">
              <Link href="/offerte">
                Gratis Offerte Aanvragen
              </Link>
            </Button>
          </div>

          <Card className="p-6 bg-gray-50 dark:bg-gray-900">
            <h3 className="text-xl font-semibold mb-4">Nog Vragen? Wij Helpen Graag!</h3>
            <p className="mb-4">
              Dit is een algemene berekening. Voor een exact advies komen onze experts graag 
              bij u langs voor een gratis inmeting en persoonlijk advies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="default">
                <Link href="tel:0462021430">
                  <Euro className="h-4 w-4 mr-2" />
                  Bel Direct: 046 202 1430
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">
                  Contact Opnemen
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}