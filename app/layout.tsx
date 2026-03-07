import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";

export const metadata: Metadata = {
  title: {
    default: "PitStop Polish | Mobile Detailing Toronto — We Come to You",
    template: "%s | PitStop Polish",
  },
  description:
    "Professional mobile detailing in Toronto. Interior & exterior detailing at your driveway or location. 5-star rated. Book now or call (647) 823-7338.",
  openGraph: {
    title: "PitStop Polish | Mobile Detailing Toronto",
    description: "Professional mobile detailing at your doorstep. 5-star rated. Book or call (647) 823-7338.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "PitStop Polish",
  description:
    "Professional mobile detailing in Toronto. Interior and exterior detailing at your driveway or location.",
  telephone: "+16478237338",
  url: "https://pitstoppolish.com",
  areaServed: [
    "Toronto",
    "East York",
    "Danforth",
    "Downtown Toronto",
    "Leslieville",
    "Riverdale",
    "Scarborough",
    "North York",
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "13",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 pb-24 md:pb-0">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
