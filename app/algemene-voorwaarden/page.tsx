import { Metadata } from "next"
import { Breadcrumb } from "@/components/navigation/breadcrumb"

export const metadata: Metadata = {
  title: "Algemene Voorwaarden",
  description: "Algemene voorwaarden van StayCool Airco Brunssum voor al onze diensten en producten.",
}

export default function AlgemeneVoorwaardenPage() {
  const breadcrumbItems = [
    { label: "Algemene Voorwaarden", href: "/algemene-voorwaarden" }
  ]

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />
      
      <article className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-8">Algemene Voorwaarden</h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          Versie: {new Date().toLocaleDateString('nl-NL')}
        </p>

        <h2>Artikel 1 - Definities</h2>
        <p>In deze algemene voorwaarden wordt verstaan onder:</p>
        <ul>
          <li><strong>Opdrachtnemer:</strong> StayCool Airco, gevestigd te Nieuwstadt</li>
          <li><strong>Opdrachtgever:</strong> de natuurlijke of rechtspersoon die met opdrachtnemer een overeenkomst aangaat</li>
          <li><strong>Overeenkomst:</strong> elke overeenkomst tussen opdrachtnemer en opdrachtgever</li>
        </ul>

        <h2>Artikel 2 - Toepasselijkheid</h2>
        <p>
          Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten tussen StayCool Airco en de opdrachtgever.
        </p>

        <h2>Artikel 3 - Offertes</h2>
        <ul>
          <li>Alle offertes zijn vrijblijvend, tenzij uitdrukkelijk anders vermeld</li>
          <li>Offertes zijn geldig gedurende 30 dagen</li>
          <li>Prijzen zijn exclusief BTW, tenzij anders aangegeven</li>
          <li>StayCool Airco kan niet aan offertes worden gehouden indien de opdrachtgever redelijkerwijs kan begrijpen dat de offerte een kennelijke vergissing bevat</li>
        </ul>

        <h2>Artikel 4 - Uitvoering van de werkzaamheden</h2>
        <ul>
          <li>StayCool Airco zal de werkzaamheden naar beste inzicht en vermogen uitvoeren</li>
          <li>De opdrachtgever draagt er zorg voor dat alle gegevens en toegang die StayCool Airco nodig heeft tijdig worden verstrekt</li>
          <li>Indien de aanvang of voortgang vertraging ondervindt door factoren waarvoor opdrachtgever verantwoordelijk is, dienen de daaruit voortvloeiende kosten door opdrachtgever te worden vergoed</li>
        </ul>

        <h2>Artikel 5 - Garantie</h2>
        <ul>
          <li>Op alle installaties geldt een garantie van 2 jaar op montage en arbeid</li>
          <li>Fabrieksgarantie op apparatuur conform opgave fabrikant</li>
          <li>Garantie vervalt bij ondeskundig gebruik of onderhoud door derden</li>
          <li>Geen garantie op verbruiksartikelen en slijtageonderdelen</li>
        </ul>

        <h2>Artikel 6 - Betaling</h2>
        <ul>
          <li>Betaling dient te geschieden binnen 14 dagen na factuurdatum</li>
          <li>Bij niet tijdige betaling is de opdrachtgever van rechtswege in verzuim</li>
          <li>Alle kosten van invordering komen voor rekening van opdrachtgever</li>
        </ul>

        <h2>Artikel 7 - Aansprakelijkheid</h2>
        <p>
          De aansprakelijkheid van StayCool Airco is beperkt tot het bedrag dat door de verzekeraar wordt uitgekeerd. Indien geen uitkering plaatsvindt, is de aansprakelijkheid beperkt tot het factuurbedrag.
        </p>

        <h2>Artikel 8 - Overmacht</h2>
        <p>
          StayCool Airco is niet gehouden tot nakoming van enige verplichting indien zij daartoe verhinderd wordt als gevolg van overmacht. Onder overmacht wordt mede verstaan: ziekte van personeel, stakingen, verkeersstoringen, niet tijdige levering door leveranciers.
        </p>

        <h2>Artikel 9 - Klachten</h2>
        <ul>
          <li>Klachten dienen binnen 8 dagen na constatering schriftelijk te worden gemeld</li>
          <li>Klachten schorten de betalingsverplichting niet op</li>
          <li>StayCool Airco zal binnen redelijke termijn de klacht onderzoeken en indien gegrond, kosteloos herstellen</li>
        </ul>

        <h2>Artikel 10 - Toepasselijk recht</h2>
        <p>
          Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen zullen worden voorgelegd aan de bevoegde rechter in het arrondissement waar StayCool Airco is gevestigd.
        </p>

        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <h3 className="font-semibold mb-2">Contact</h3>
          <address className="not-italic">
            StayCool Airco<br />
            Hoofdkantoor: Nieuwstadt<br />
            E-mail: info@staycoolairco.nl<br />
            Telefoon: 046 202 1430<br />
            KvK: [KvK nummer]
          </address>
        </div>
      </article>
    </div>
  )
}