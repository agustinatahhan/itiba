import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import Team from "@/components/sections/Team";
import TheOpportunity from "@/components/sections/TheOpportunity";
import TheSolution from "@/components/sections/TheSolution";

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

  const gapPoints = [
    t("theGap.points.0"),
    t("theGap.points.1"),
    t("theGap.points.2"),
  ];

  const visionStatements = [
    t("vision.statements.0"),
    t("vision.statements.1"),
    t("vision.statements.2"),
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-40 pb-20">
        <div className="section-wrapper pt-0 pb-0">
          <FadeIn>
            <span className="section-tag">{t("hero.tag")}</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="heading-xl text-green-deep mt-4 max-w-3xl">
              {t("hero.title")}
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Who We Are — bold green block */}
      <section className="bg-green-deep">
        <div className="section-wrapper">
          <div className="max-w-3xl">
            <FadeIn>
              <span
                className="text-xs font-medium tracking-[0.25em] uppercase text-gold"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t("whoWeAre.tag")}
              </span>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p
                className="mt-6 text-2xl md:text-3xl font-light text-ivory/90 leading-[1.65]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {t("whoWeAre.description")}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Philosophy — Mission / Vision / Values */}
      <section className="bg-ivory">
        <div className="section-wrapper">
          <FadeIn>
            <span className="section-tag mb-12 block">{t("philosophy.tag")}</span>
          </FadeIn>
          <div>
            {(["mission", "vision", "values"] as const).map((key, i) => (
              <FadeIn key={key} delay={i * 0.1}>
                <div className="border-t border-gold/20 py-10 grid md:grid-cols-3 gap-6 md:gap-12">
                  <span
                    className="text-xs font-medium tracking-[0.2em] uppercase text-olive self-start pt-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {t(`philosophy.${key}.label`)}
                  </span>
                  <p
                    className="md:col-span-2 text-xl md:text-2xl font-light text-green-deep leading-relaxed"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {t(`philosophy.${key}.text`)}
                  </p>
                </div>
              </FadeIn>
            ))}
            <div className="border-t border-gold/20" />
          </div>
        </div>
      </section>

      {/* The Gap — inline (different data structure: string points) */}
      <section className="bg-cream">
        <div className="section-wrapper">
          <div className="mb-14">
            <FadeIn>
              <span className="section-tag">{t("theGap.tag")}</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="heading-lg mt-4">{t("theGap.title")}</h2>
            </FadeIn>
          </div>
          <div className="space-y-0">
            {gapPoints.map((point, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="border-t border-gold/20 py-8 flex items-start gap-5">
                  <span
                    className="shrink-0 text-xs font-medium tracking-widest text-gold/60 mt-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    0{i + 1}
                  </span>
                  <p
                    className="text-xl md:text-2xl font-light text-green-deep leading-snug"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {point}
                  </p>
                </div>
              </FadeIn>
            ))}
            <div className="border-t border-gold/20" />
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <TheOpportunity translationKey="about.opportunity" />

      {/* The Solution */}
      <TheSolution translationKey="about.solution" />

      {/* Team */}
      <Team />

      {/* Vision & Impact */}
      <section className="bg-cream">
        <div className="section-wrapper">
          <FadeIn>
            <span className="section-tag">{t("vision.tag")}</span>
            <h2 className="heading-lg mt-4 mb-14">{t("vision.title")}</h2>
          </FadeIn>
          <div>
            {visionStatements.map((statement, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="border-t border-gold/20 py-8 flex gap-5 items-start">
                  <span className="mt-3 shrink-0 w-1.5 h-1.5 rounded-full bg-gold" />
                  <p
                    className="text-2xl md:text-3xl font-light text-green-deep leading-relaxed"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {statement}
                  </p>
                </div>
              </FadeIn>
            ))}
            <div className="border-t border-gold/20" />
          </div>
        </div>
      </section>
    </>
  );
}
