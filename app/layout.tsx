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


export const metadata: Metadata = {
  title: "Itibá",
  description:
    "Agencia de innovación culinaria — Gastronomía, Cultura, Evolución",
  openGraph: {
    title: "Itibá",
    description:
      "Transformamos conceptos culinarios en experiencias que trascienden.",
    type: "website",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
