import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { CookieBanner } from "@/ux/CookieBanner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFC107",
};

export const metadata: Metadata = {
  title: {
    default: "Express Entrümpelungen Nürnberg | Festpreis | Kostenlose Besichtigung",
    template: "%s | Express Entrümpelungen",
  },
  description: "Professionelle Entrümpelung in Nürnberg ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ☎ 0172 8083459",
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
  openGraph: {
    title: "Express Entrümpelungen Nürnberg | Festpreis",
    description: "Professionelle Entrümpelung in Nürnberg ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ☎ 0172 8083459",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Express Entrümpelungen",
    "image": "https://www.express-entruempelungen.de/gallery/logo.png",
    "@id": "https://www.express-entruempelungen.de",
    "url": "https://www.express-entruempelungen.de",
    "telephone": "+491728083459",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Friesenstraße 25",
      "addressLocality": "Nürnberg",
      "postalCode": "90441",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.4319,
      "longitude": 11.0664
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "07:00",
      "closes": "20:00"
    }
  };

  return (
    <html
      lang="de"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-[#1A1A2E] text-[#1A1A2E] dark:text-white">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
