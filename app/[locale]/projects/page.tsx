import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import type { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import ProjectsGrid from "@/components/sections/home/Projects";
import Image from "next/image";

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects.meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ProjectsPage() {
  const t = await getTranslations("projects");
  const locale = await getLocale();

  return (
    <>
      <section className="imgbg">
        <Image
          src="/images/home/07.jpg"
          alt="Proyectos Itibá"
          fill
          className="object-cover object-center"
           sizes="(max-width: 768px) 100vw, 100vw"
          quality={70}
        />
        <div className="absolute inset-0 bg-void/55" />
        <div className="section-wrapper pt-0 pb-0 relative z-10 w-full">
          {/* <FadeIn>
            <span className="section-tag text-gold/70">{t("tag")}</span>
          </FadeIn> */}
          <FadeIn delay={0.1}>
            <h2 className="h2-heading">{t("title")}</h2>
          </FadeIn>
          {/* <FadeIn delay={0.2}>
            <p
              className="text-cream/60 mt-6 max-w-xl text-base leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t("subtitle")}
            </p>
          </FadeIn> */}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-cream py-14">
        <div className="section-wrapper">
          <ProjectsGrid locale={locale} viewMoreLabel={t("viewMore")} />
        </div>
      </section>
    </>
  );
}
