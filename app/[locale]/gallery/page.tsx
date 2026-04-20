import FadeIn from "@/components/animations/FadeIn";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import GalleryGrid from "@/components/sections/gallery/GalleryGrid";
import { BLUR } from "@/lib/blur-placeholders";

export default async function Gallery() {
  const t = await getTranslations("gallery");

  const images = [
    // "/images/gallery/01.webp",
    "/images/gallery/03.webp",
    "/images/gallery/07.webp",
    "/images/gallery/08.webp",
    "/images/gallery/06.webp",
    "/images/gallery/05.webp",
    "/images/gallery/017.webp",
    "/images/gallery/02.webp",
    "/images/gallery/015.webp",

    "/images/gallery/019.webp",
    "/images/gallery/020.webp",
    "/images/gallery/021.webp",
    "/images/gallery/018.webp",

    "/images/gallery/09.webp",
    "/images/gallery/010.webp",
    "/images/gallery/011.webp",
    "/images/gallery/012.webp",
  ];

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

      <section className="bg-cream">
        <div className="max-w-7xl pady padx">
          <GalleryGrid images={images} />
        </div>
      </section>
    </>
  );
}
