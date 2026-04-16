import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
// import Team from "@/components/sections/home/Team";
import AgencyBody from "@/components/sections/agency/AgencyBody";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("about");
  return {
    title: t("title"),
    description: t("intro"),
  };
}

export default async function AboutPage() {
  const t = await getTranslations("about");

  return (
    <>
      <section className="imgbg">
        <Image
          src="/images/home/05.jpg"
          alt="Itibá Gastronomic Agency"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          quality={70}
        />
        <div className="absolute inset-0 bg-void/55" />
        <div className="section-wrapper pt-0 pb-0 relative z-10 w-full">
          <FadeIn delay={0.1}>
            <h2 className=" h2-heading">{t("title")}</h2>
          </FadeIn>
        </div>
      </section>

      <AgencyBody />
      {/* <Team /> */}
    </>
  );
}
