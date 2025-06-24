import { Metadata } from "next"
import { Breadcrumb } from "@/components/navigation/breadcrumb"

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: "Privacyverklaring van StayCool Airco Brunssum. Lees hoe wij omgaan met uw persoonsgegevens.",
}

export default function PrivacyPage() {
  const breadcrumbItems = [
    { label: "Privacy", href: "/privacy" }
  ]

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />
      
      <article className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-8">Privacyverklaring</h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
        </p>

        <h2>1. Introductie</h2>
        <p>
          StayCool Airco, gevestigd in Nieuwstadt, is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.
        </p>

        <h2>2. Persoonsgegevens die wij verwerken</h2>
        <p>StayCool Airco verwerkt uw persoonsgegevens doordat u gebruik maakt van onze diensten en/of omdat u deze zelf aan ons verstrekt. Hieronder vindt u een overzicht van de persoonsgegevens die wij verwerken:</p>
        <ul>
          <li>Voor- en achternaam</li>
          <li>Adresgegevens</li>
          <li>Telefoonnummer</li>
          <li>E-mailadres</li>
          <li>Overige persoonsgegevens die u actief verstrekt in correspondentie en telefonisch</li>
        </ul>

        <h2>3. Doel en grondslag</h2>
        <p>StayCool Airco verwerkt uw persoonsgegevens voor de volgende doelen:</p>
        <ul>
          <li>Het afhandelen van uw betaling</li>
          <li>U te kunnen bellen of e-mailen indien dit nodig is om onze dienstverlening uit te kunnen voeren</li>
          <li>U te informeren over wijzigingen van onze diensten en producten</li>
          <li>Om goederen en diensten bij u af te leveren</li>
          <li>StayCool Airco verwerkt ook persoonsgegevens als wij hier wettelijk toe verplicht zijn</li>
        </ul>

        <h2>4. Bewaartermijn</h2>
        <p>
          StayCool Airco bewaart uw persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor uw gegevens worden verzameld. Wij hanteren de wettelijke bewaartermijnen.
        </p>

        <h2>5. Delen van persoonsgegevens met derden</h2>
        <p>
          StayCool Airco verstrekt uitsluitend aan derden en alleen als dit nodig is voor de uitvoering van onze overeenkomst met u of om te voldoen aan een wettelijke verplichting.
        </p>

        <h2>6. Uw rechten</h2>
        <p>U heeft het recht om:</p>
        <ul>
          <li>Uw persoonsgegevens in te zien</li>
          <li>Uw persoonsgegevens te corrigeren of te verwijderen</li>
          <li>Uw toestemming voor gegevensverwerking in te trekken</li>
          <li>Bezwaar te maken tegen de verwerking van uw persoonsgegevens</li>
          <li>Uw persoonsgegevens over te dragen</li>
        </ul>

        <h2>7. Contact</h2>
        <p>
          Als u vragen heeft over deze privacyverklaring, kunt u contact met ons opnemen via:
        </p>
        <address className="not-italic">
          StayCool Airco<br />
          Hoofdkantoor: Nieuwstadt<br />
          Werkgebied: Heel Limburg<br />
          E-mail: info@staycoolairco.nl<br />
          Telefoon: 046 202 1430
        </address>
      </article>
    </div>
  )
}