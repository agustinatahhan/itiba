import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Hero from "@/components/sections/home/Hero";
import WhoWeAre from "@/components/sections/home/WhoWeAre";
import ProjectsPreview from "@/components/sections/home/ProjectsPreview";
import Team from "@/components/sections/home/Team";
import Divider from "@/components/sections/home/Divider";
import Gallery from "@/components/sections/home/Gallery";

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
      <Team />
      <ProjectsPreview />
      <Divider />
      <Gallery />
    
    </>
  );
}
