import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import WhoWeAre from "@/components/sections/WhoWeAre";
import Services from "@/components/sections/Services";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import ImpactVision from "@/components/sections/ImpactVision";
import AboutPreview from "@/components/sections/AboutPreview";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  return {
    title: "Itibá Agencia Gastronómica",
    description: t("subtitle"),
  };
}

export default async function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Services />
      <ProjectsPreview />
      <ImpactVision />
      <AboutPreview />
    </>
  );
}
