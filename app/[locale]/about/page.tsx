import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import Team from "@/components/sections/Team";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function AboutPage() {
  const t = await getTranslations("about");

  return (
    <>
      {/* ── 1. HERO — same style as Projects page ────────────── */}
      <section className="relative flex items-end pt-32 pb-14 md:pt-52 md:pb-28 overflow-hidden min-h-[45vh] md:min-h-[65vh]">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
          alt="Itibá Gastronomic Agency"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-void/70" />
        <div className="section-wrapper pt-0 pb-0 relative z-10 w-full">
          <FadeIn>
            <span className="section-tag text-gold/70">{t("hero.tag")}</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="heading-xl text-cream mt-4">{t("hero.title")}</h2>
          </FadeIn>
        </div>
      </section>

      {/* ── 2. INTRO STATEMENT — centered, cream ─────────────── */}
      <section className="bg-white flex flex-col items-center justify-center py-30 px-6 text-center">
        <FadeIn>
          <p
            className="font-heading font-light text-body max-w-3xl mx-auto"
            style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)", lineHeight: 1.7 }}
          >
            {t("intro")}
          </p>
          <div className="mt-10 mx-auto w-15 h-px bg-olive" />
        </FadeIn>
      </section>

      {/* ── 3. EL VACÍO CREATIVO — image left, text right ────── */}
      <section className="flex flex-col md:flex-row min-h-150">
        {/* Image */}
        <div className="relative w-full md:w-1/2 min-h-100 md:min-h-150">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80"
            alt={t("gap.eyebrow")}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        {/* Text */}
        <div className="w-full md:w-1/2 bg-cream/50 flex items-center">
          <div className="py-20 px-8 md:px-18 max-w-xl">
            <FadeIn inView>
              <span
                className="block mb-4 uppercase tracking-[0.18em] text-olive"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem" }}
              >
                {t("gap.eyebrow")}
              </span>
            </FadeIn>
            <FadeIn delay={0.1} inView>
              <h2
                className="font-heading font-normal text-red-accent mb-6"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", lineHeight: 1.2 }}
              >
                {t("gap.title")}
              </h2>
            </FadeIn>
            <FadeIn delay={0.2} inView>
              <p
                className="text-body leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", fontSize: "1rem" }}
              >
                {t("gap.body")}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 4. LA OPORTUNIDAD — text left, image right ───────── */}
      <section className="flex flex-col md:flex-row-reverse min-h-150">
        {/* Image */}
        <div className="relative w-full md:w-1/2 min-h-100 md:min-h-150">
          <Image
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80"
            alt={t("opportunity.eyebrow")}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        {/* Text */}
        <div className="w-full md:w-1/2 bg-olive-dark flex items-center">
          <div className="py-20 px-8 md:px-18 max-w-xl">
            <FadeIn inView>
              <span
                className="block mb-4 uppercase tracking-[0.18em] text-cream/60"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem" }}
              >
                {t("opportunity.eyebrow")}
              </span>
            </FadeIn>
            <FadeIn delay={0.1} inView>
              <h2
                className="font-heading font-normal text-cream mb-6"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", lineHeight: 1.2 }}
              >
                {t("opportunity.title")}
              </h2>
            </FadeIn>
            <FadeIn delay={0.2} inView>
              <p
                className="text-cream/85 leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", fontSize: "1rem" }}
              >
                {t("opportunity.body")}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 5. LA SOLUCIÓN — image left, text right ──────────── */}
      <section className="flex flex-col md:flex-row min-h-150">
        {/* Image */}
        <div className="relative w-full md:w-1/2 min-h-100 md:min-h-150">
          <Image
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1200&q=80"
            alt={t("solution.eyebrow")}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        {/* Text */}
        <div className="w-full md:w-1/2 bg-brown flex items-center">
          <div className="py-20 px-8 md:px-18 max-w-xl">
            <FadeIn inView>
              <span
                className="block mb-4 uppercase tracking-[0.18em] text-cream/60"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem" }}
              >
                {t("solution.eyebrow")}
              </span>
            </FadeIn>
            <FadeIn delay={0.1} inView>
              <h2
                className="font-heading font-normal text-cream mb-6"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", lineHeight: 1.2 }}
              >
                {t("solution.title")}
              </h2>
            </FadeIn>
            <FadeIn delay={0.2} inView>
              <p
                className="text-cream/85 leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", fontSize: "1rem" }}
              >
                {t("solution.body")}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 6. TEAM ───────────────────────────────────────────── */}
      <Team />
    </>
  );
}
