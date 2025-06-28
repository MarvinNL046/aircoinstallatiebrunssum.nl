import Script from "next/script"

export function ReviewSchema() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Airco Installatie Brunssum",
    "description": "Professionele airco installatie in Brunssum en heel Limburg door erkend installateur",
    "brand": {
      "@type": "Organization",
      "name": "Airco Installatie Brunssum"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "163",
      "reviewCount": "163"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Jan de Vries"
        },
        "reviewBody": "Uitstekende service! Snelle installatie en vriendelijke monteurs. De airco werkt perfect en het team heeft alles netjes achtergelaten.",
        "datePublished": "2024-10-15"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Maria Janssen"
        },
        "reviewBody": "Zeer tevreden! Goede prijs-kwaliteit verhouding en professionele installatie. Aanrader voor iedereen in Brunssum!",
        "datePublished": "2024-09-28"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Peter Bakker"
        },
        "reviewBody": "Top bedrijf! Duidelijke communicatie, eerlijke prijzen en vakkundige installatie. Blij met onze nieuwe Daikin airco!",
        "datePublished": "2024-09-10"
      }
    ],
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": "1299",
      "highPrice": "2999",
      "offerCount": "4",
      "availability": "https://schema.org/InStock"
    }
  }

  return (
    <Script
      id="review-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
    />
  )
}