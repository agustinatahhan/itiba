import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import type { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import ProjectsGrid from "@/components/sections/Projects";

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
      {/* Page Header */}
      <section className="bg-green-deep pt-40 pb-24">
        <div className="section-wrapper pt-0 pb-0">
          <FadeIn>
            <span className="section-tag text-gold/70">{t("tag")}</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="heading-xl text-cream mt-4">{t("title")}</h1>
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
      <section className="bg-cream">
        <div className="section-wrapper">
          <ProjectsGrid locale={locale} viewMoreLabel={t("viewMore")} />
        </div>
      </section>
    </>
  );
}
