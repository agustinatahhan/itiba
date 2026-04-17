import FadeIn from "@/components/animations/FadeIn";
import VisionBody from "@/components/sections/vision/VisionBody";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { BLUR } from "@/lib/blur-placeholders";

export default async function Vision() {
  const t = await getTranslations("vision");

  return (
    <>
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
            <h2 className="h2-heading">{t("title")}</h2>
          </FadeIn>
        </div>
      </section>
      <VisionBody />
    </>
  );
}
