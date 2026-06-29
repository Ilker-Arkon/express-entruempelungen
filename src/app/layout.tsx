import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { CookieBanner } from "@/ux/CookieBanner";
import { getSiteConfig } from "@/lib/site-config";
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

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteConfig();
  return {
    title: {
      default: config.seoTitle,
      template: "%s | Express Entrümpelungen",
    },
    description: config.seoDescription,
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
      title: config.seoOgTitle,
      description: config.seoOgDescription,
      locale: "de_DE",
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = await getSiteConfig();

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": config.companyName,
    "image": `https://www.express-entruempelungen.de${config.logoPath}`,
    "@id": "https://www.express-entruempelungen.de",
    "url": "https://www.express-entruempelungen.de",
    "telephone": config.phonePrimary,
    "priceRange": config.schemaPriceRange,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": config.street,
      "addressLocality": config.city,
      "postalCode": config.postalCode,
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": config.schemaGeoLat,
      "longitude": config.schemaGeoLng
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
      <body className="min-h-full flex flex-col bg-white text-[#1A1A2E]">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
