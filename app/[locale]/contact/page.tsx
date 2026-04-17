import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import { BLUR } from "@/lib/blur-placeholders";
import { FaInstagram } from "react-icons/fa";
import ContactForm from "@/components/sections/contact/ContactForm";

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
      <section className="imgbg">
        <Image
          src="/images/home/05.webp"
          alt="Contacto Itibá"
          fill
          className="object-cover object-center"
          priority
          placeholder="blur"
          blurDataURL={BLUR["home/05"]}
          sizes="(max-width: 768px) 100vw, 100vw"
          quality={70}
        />
        <div className="absolute inset-0 bg-void/55" />
        <div className="section-wrapper pt-0 pb-0 relative z-10 w-full">
          <FadeIn delay={0.1}>
            <h2 className=" h2-heading">{t("tag")}</h2>
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
                <h3 className="mb-8">{t("title")}</h3>
                <p className="mb-12 font-light">{t("subtitle")}</p>

                <div className="space-y-6">
                  <div>
                    <p className="section-tag mb-4 text-black/80">Email</p>
                    <div className="flex gap-4">
                      <a href={`mailto:${t("info.email")}`}>
                        <p className="text-[#4a2d1e] font-light hover:text-[#4a2d1e] transition-colors">
                          {t("info.email")}
                        </p>
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="section-tag mb-4 text-black/80">
                      {t("info.follow")}
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="https://www.instagram.com/itibaagencia/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="w-10 h-10 border border-[#4a2d1e]/40 flex items-center justify-center text-[#4a2d1e] hover:bg-brown hover:text-cream hover:border-brown transition-all"
                      >
                        <FaInstagram size={16} />
                      </a>
                      {/* <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="w-10 h-10 border border-gold/40 flex items-center justify-center text-black hover:bg-brown hover:text-cream hover:border-brown transition-all"
                      >
                        <FaLinkedinIn size={16} />
                      </a> */}
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
