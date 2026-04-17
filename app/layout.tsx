import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { getLocale } from "next-intl/server";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});


const BASE_URL = "https://www.itiba.co";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Itibá — Agencia Gastronómica",
    template: "%s | Itibá",
  },
  description:
    "Itibá es una plataforma culinaria y cultural que nace desde el Caribe para repensar la gastronomía con identidad, método y visión de futuro. Gastronomía, Cultura, Evolución.",
  keywords: [
    "Itibá",
    "agencia gastronómica",
    "gastronomía caribeña",
    "consultoría culinaria",
    "cultura gastronómica",
    "innovación culinaria",
    "gastronomía identidad",
    "agencia culinaria",
  ],
  authors: [{ name: "Itibá Agencia Gastronómica" }],
  creator: "Itibá",
  openGraph: {
    title: "Itibá — Agencia Gastronómica",
    description:
      "Una plataforma culinaria y cultural que nace desde el Caribe. Gastronomía con identidad, método y visión de futuro.",
    type: "website",
    url: BASE_URL,
    siteName: "Itibá",
    locale: "es_DO",
    images: [
      {
        url: "/images/home/07.webp",
        width: 1200,
        height: 630,
        alt: "Itibá Agencia Gastronómica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Itibá — Agencia Gastronómica",
    description:
      "Una plataforma culinaria y cultural que nace desde el Caribe. Gastronomía con identidad, método y visión de futuro.",
    images: ["/images/home/07.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Itibá Agencia Gastronómica",
  url: "https://www.itiba.co",
  logo: "https://www.itiba.co/images/logo/logoitibadark.png",
  description:
    "Plataforma culinaria y cultural que nace desde el Caribe para repensar la gastronomía con identidad, método y visión de futuro.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["Spanish", "English"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={cormorant.variable}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
