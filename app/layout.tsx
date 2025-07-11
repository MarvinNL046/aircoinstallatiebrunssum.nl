import { Inter } from "next/font/google"
import { HeaderOptimized } from "@/components/layout/header-optimized"
import { FooterOptimized } from "@/components/layout/footer-optimized"
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"
import { GoogleAnalytics } from "@/components/analytics/google-analytics"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata = {
  metadataBase: new URL('https://aircoinstallatiebrunssum.nl'),
  title: {
    default: 'Airco Brunssum → Nr.1 Specialist Limburg | Bel 046 202 1430',
    template: '%s | Airco Installatie Brunssum'
  },
  description: 'Airco specialist Brunssum & Limburg. ✓ Installatie vanaf €11/maand ✓ 163 tevreden klanten (4.7★) ✓ Erkend monteur ✓ Gratis offerte. Direct contact: 046 202 1430',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icon-192.png' },
    ],
  },
  keywords: [
    // Primaire zoektermen
    'airco installatie brunssum',
    'airco installatie limburg',
    'airco specialist limburg',
    'airco monteur limburg',
    'airco bedrijf limburg',
    'airconditioning limburg',
    
    // Installatie en service
    'professionele airco installatie',
    'airco installatie kosten',
    'split airco installatie',
    'multisplit airco limburg',
    'airco onderhoud limburg',
    'airco storing oplossen',
    'snelle airco service',
    
    // Producten en systemen
    'energiezuinige airco',
    'split airco systemen',
    'multi-split airconditioning',
    'stille airco installatie',
    'airco met verwarming',
    
    // Doelgroep specifiek
    'airco voor woning',
    'airco voor bedrijf',
    'airco voor slaapkamer',
    'beste airco voor thuis',
    
    // Commercieel
    'airco kopen limburg',
    'airco limburg prijzen',
    'airco prijsvergelijking',
    'airco financiering',
    'goedkope airco installatie',
    
    // Expertise en advies
    'airco showroom limburg',
    'airco advies op maat',
    'gecertificeerde airco monteurs',
    'airco merken',
    'premium airco merken',
    
    // Conversie gericht
    'airco offerte aanvragen',
    'airco laten plaatsen',
    'airco installatie advies',
    
    // Seizoensgebonden
    'airco voor zomer en winter',
    'klimaatbeheersing',
    'duurzame koeling',
    'warmtepomp'
  ],
  authors: [{ name: 'StayCool Airco' }],
  creator: 'StayCool Airco',
  publisher: 'StayCool Airco',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
    openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: '/',
    siteName: 'Airco Installatie Brunssum',
    title: 'Airco Installatie Brunssum | StayCool Airco | Gratis Offerte Binnen 24 Uur ✓',
    description: 'Dé airco specialist in Limburg! ✓ Professionele installatie door StayCool Airco ✓ Erkend installateur ✓ Alle topmerken ✓ Binnen 24 uur reactie ✓ Beste prijs-kwaliteit',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Airco Installatie Brunssum - Professionele Airconditioning Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airco Installatie Brunssum | StayCool Airco | Gratis Offerte Binnen 24 Uur ✓',
    description: 'Dé airco specialist in Limburg! ✓ Professionele installatie door StayCool Airco ✓ Erkend installateur ✓ Alle topmerken ✓ Binnen 24 uur reactie',
    images: ['/opengraph-image'],
    creator: '@staycoolairco',
    site: '@staycoolairco'
  },
  alternates: {
    canonical: 'https://aircoinstallatiebrunssum.nl'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: ['F7ziqeuiZtQK3wDaKBZ65SgfDN61xAKq09v9PUpqQSY', 'MdrWkChgCAkLEzChgLv_KvDquI5UppXLSFI-WrxLS6E', 'N96MEbLpvVmVnNfxrbKpEgBPVi3cDL-gveDkknmwbvo'],
    yandex: 'verification_token',
    yahoo: 'verification_token',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://aircoinstallatiebrunssum.nl#webpage",
    "url": "https://aircoinstallatiebrunssum.nl",
    "name": "Airco Installatie Brunssum | Nr.1 Specialist in Limburg",
    "isPartOf": {
      "@id": "https://aircoinstallatiebrunssum.nl#website"
    },
    "primaryImageOfPage": {
      "@id": "https://aircoinstallatiebrunssum.nl#primaryimage"
    },
    "datePublished": "2023-01-01T00:00:00+01:00",
    "dateModified": new Date().toISOString(),
    "description": "Professionele airco installatie in Brunssum en heel Limburg. Erkend installateur met 163 tevreden klanten (4.7★). Gratis offerte binnen 24 uur.",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".hero-text", ".cta-button"]
    }
  }

  return (
    <html 
      lang="nl" 
      suppressHydrationWarning
      className="scroll-smooth antialiased"
    >
      <head>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
      </head>
      <body 
        className={`${inter.className} min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <HeaderOptimized />
            <main id="main-content" className="pt-[104px]">{children}</main>
            <FooterOptimized />
          </div>
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
