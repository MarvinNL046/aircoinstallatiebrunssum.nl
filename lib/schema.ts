import { WithContext, Service, LocalBusiness, BreadcrumbList, Article } from "schema-dts"

export function generateOrganizationSchema(): WithContext<LocalBusiness> {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": "https://aircoinstallatiebrunssum.nl/#organization",
    name: "Airco Installatie Brunssum",
    alternateName: "StayCool Airco Brunssum",
    url: "https://aircoinstallatiebrunssum.nl",
    logo: "https://aircoinstallatiebrunssum.nl/logo.png",
    image: "https://aircoinstallatiebrunssum.nl/og-image.png",
    description: "Specialist in airco installatie Brunssum en heel Limburg. Erkend F-gassen installateur met 163 tevreden klanten.",
    telephone: "+31462021430",
    email: "info@staycoolairco.nl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Aan de Bogen 11",
      addressLocality: "Nieuwstadt",
      postalCode: "6118 AS",
      addressRegion: "Limburg",
      addressCountry: "NL"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.0384,
      longitude: 5.8635
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:00",
        closes: "16:00"
      }
    ],
    priceRange: "€€",
    paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
    currenciesAccepted: "EUR",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "163",
      bestRating: "5",
      worstRating: "1"
    },
    areaServed: [
      {
        "@type": "City",
        name: "Brunssum"
      },
      {
        "@type": "City",
        name: "Heerlen"
      },
      {
        "@type": "City",
        name: "Sittard"
      },
      {
        "@type": "City",
        name: "Geleen"
      },
      {
        "@type": "City",
        name: "Kerkrade"
      },
      {
        "@type": "State",
        name: "Limburg"
      }
    ],
    sameAs: [
      "https://www.facebook.com/staycoolairconditioning",
      "https://instagram.com/staycoolairco",
      "https://youtube.com/@staycoolairco"
    ]
  }
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  price: string;
}): WithContext<Service> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "StayCool Airco",
    },
    areaServed: {
      "@type": "State",
      name: "Limburg",
    },
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: service.price,
        priceCurrency: "EUR",
      },
    },
  }
}

export function generateLocalBusinessSchema(city: string): WithContext<LocalBusiness> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `StayCool Airco - Airco Installatie ${city}`,
    description: `Professionele airconditioning installatie en onderhoud in ${city} door StayCool Airco. Erkend en gecertificeerd installateur.`,
    url: `https://aircoinstallatiebrunssum.nl/steden/${city.toLowerCase()}`,
    telephone: "+31462021430",
    email: "info@staycoolairco.nl",
    areaServed: {
      "@type": "City",
      name: city,
      containedIn: {
        "@type": "State",
        name: "Limburg",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "Limburg",
      addressCountry: "NL",
    },
    priceRange: "€€",
  }
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://aircoinstallatiebrunssum.nl${item.item}`,
    })),
  }
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}): WithContext<Article> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished || new Date().toISOString(),
    dateModified: article.dateModified || new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: article.author || "StayCool Airco",
    },
    publisher: {
      "@type": "Organization",
      name: "StayCool Airco",
      logo: {
        "@type": "ImageObject",
        url: "https://staycoolairco.nl/logo.png",
      },
    },
  }
}
