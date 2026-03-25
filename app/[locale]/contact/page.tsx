import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import ContactForm from "@/components/sections/ContactForm";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ContactPage() {
  const t = await getTranslations("contact");

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

      {/* Contact Content */}
      <section className="bg-cream">
        <div className="section-wrapper">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Info */}
            <FadeIn>
              <div>
                <div className="divider-gold" />
                <h2 className="heading-md mb-8">{t("title")}</h2>
                <p className="body-text mb-12">{t("subtitle")}</p>

                <div className="space-y-6">
                  <div>
                    <p
                      className="section-tag mb-2"
                      style={{ color: "#6B7A5C" }}
                    >
                      Email
                    </p>
                    <a
                      href={`mailto:${t("info.email")}`}
                      className="text-green-deep hover:text-gold transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {t("info.email")}
                    </a>
                  </div>

                  <div>
                    <p
                      className="section-tag mb-4"
                      style={{ color: "#6B7A5C" }}
                    >
                      {t("info.follow")}
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="w-10 h-10 border border-gold/40 flex items-center justify-center text-green-deep hover:bg-green-deep hover:text-cream hover:border-green-deep transition-all"
                      >
                        <FaInstagram size={16} />
                      </a>
                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="w-10 h-10 border border-gold/40 flex items-center justify-center text-green-deep hover:bg-green-deep hover:text-cream hover:border-green-deep transition-all"
                      >
                        <FaLinkedinIn size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right: Form */}
            <FadeIn delay={0.15}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
