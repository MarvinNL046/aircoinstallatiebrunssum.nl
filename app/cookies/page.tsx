import { Metadata } from "next"
import { Breadcrumb } from "@/components/navigation/breadcrumb"

export const metadata: Metadata = {
  title: "Cookiebeleid",
  description: "Cookiebeleid van StayCool Airco Brunssum. Lees hoe wij cookies gebruiken op onze website.",
}

export default function CookiesPage() {
  const breadcrumbItems = [
    { label: "Cookies", href: "/cookies" }
  ]

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />
      
      <article className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-8">Cookiebeleid</h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
        </p>

        <h2>Wat zijn cookies?</h2>
        <p>
          Cookies zijn kleine tekstbestanden die door websites op uw computer, tablet of mobiele telefoon worden geplaatst wanneer u deze websites bezoekt. Ze worden gebruikt om informatie op te slaan of om toegang te krijgen tot informatie die al op uw apparaat is opgeslagen.
        </p>

        <h2>Welke cookies gebruiken wij?</h2>
        
        <h3>1. Noodzakelijke cookies</h3>
        <p>
          Deze cookies zijn essentieel voor het functioneren van onze website. Ze stellen u in staat om door de website te navigeren en gebruik te maken van de functies.
        </p>

        <h3>2. Analytische cookies</h3>
        <p>
          We gebruiken Google Analytics om te begrijpen hoe bezoekers onze website gebruiken. Deze cookies verzamelen informatie over:
        </p>
        <ul>
          <li>Het aantal bezoekers op onze website</li>
          <li>Hoe lang bezoekers op onze website blijven</li>
          <li>Welke pagina's het meest worden bezocht</li>
          <li>Hoe bezoekers op onze website terechtkomen</li>
        </ul>

        <h3>3. Functionele cookies</h3>
        <p>
          Deze cookies onthouden uw voorkeuren en keuzes om uw ervaring te personaliseren.
        </p>

        <h2>Cookies beheren</h2>
        <p>
          U kunt cookies accepteren of weigeren door de instellingen in uw browser aan te passen. De meeste browsers accepteren cookies automatisch, maar u kunt uw browserinstellingen meestal wijzigen om cookies te weigeren als u dat wenst.
        </p>

        <h3>Cookies uitschakelen</h3>
        <p>
          U kunt cookies uitschakelen via uw browserinstellingen:
        </p>
        <ul>
          <li><strong>Chrome:</strong> Instellingen → Privacy en beveiliging → Cookies</li>
          <li><strong>Firefox:</strong> Opties → Privacy & Beveiliging → Cookies</li>
          <li><strong>Safari:</strong> Voorkeuren → Privacy → Cookies</li>
          <li><strong>Edge:</strong> Instellingen → Privacy, zoeken en services → Cookies</li>
        </ul>

        <p className="mt-6">
          Let op: als u cookies uitschakelt, kunnen sommige delen van onze website mogelijk niet correct functioneren.
        </p>

        <h2>Contact</h2>
        <p>
          Voor vragen over ons cookiebeleid kunt u contact met ons opnemen:
        </p>
        <address className="not-italic">
          StayCool Airco<br />
          Hoofdkantoor: Nieuwstadt<br />
          E-mail: info@staycoolairco.nl<br />
          Telefoon: 046 202 1430
        </address>
      </article>
    </div>
  )
}