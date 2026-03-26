import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import type { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import ProjectsGrid from "@/components/sections/Projects";
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
      <section className="relative flex items-end pt-32 pb-14 md:pt-52 md:pb-28 overflow-hidden min-h-[45vh] md:min-h-[65vh]">
        <Image
          src="/images/projects/platostipicos.jpg"
          alt="Proyectos Itibá"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-void/70" />
        <div className="section-wrapper pt-0 pb-0 relative z-10 w-full">
          <FadeIn>
            <span className="section-tag text-gold/70">{t("tag")}</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="heading-xl text-cream mt-4">{t("title")}</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p
              className="text-cream/60 mt-6 max-w-xl text-base leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t("subtitle")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white py-14">
        <div className="section-wrapper">
          <ProjectsGrid locale={locale} viewMoreLabel={t("viewMore")} />
        </div>
      </section>
    </>
  );
}
