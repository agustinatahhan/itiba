"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import type { ProjectDetail } from "@/data/projects";

interface ProjectBodyProps {
  detail: ProjectDetail;
  galleryImages: string[];
  projectTitle: string;
  backHref: string;
}

export default function ProjectBody({
  detail,
  galleryImages,
  projectTitle,
}: ProjectBodyProps) {
  const locale = useLocale();
  const t = useTranslations("projects");
  const l = <T,>(field: { es: T; en: T }) =>
    locale === "es" ? field.es : field.en;

  return (
    <section className="w-full bg-cream">
      {/* Descripción */}

      {detail.description && (
        <div className="max-w-7xl padx pady text-center">
          <motion.h4
            className="text-black text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {l(detail.description)}
          </motion.h4>
          {/* Link externo */}
          {/* {detail.link && (
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <a
                href={detail.link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                {t("visitProject")}
              </a>
            </motion.div>
          )} */}
        </div>
      )}

      {/* quote */}
      {detail.quote && detail.quote.img && (
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Imagen */}
          <div className="relative min-h-80 md:min-h-105 lg:min-h-full overflow-hidden group">
            <Image
              src={detail.quote.img}
              alt="Itibá"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Texto */}
          <div className="flex items-center bg-olive/80">
            <div className="py-16 md:py-30 max-w-2xl padx ">
              <motion.h4
                className=" text-cream text-center md:text-left"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {l(detail.quote)}
              </motion.h4>
            </div>
          </div>
        </div>
      )}

      {/* Extra */}
      {detail.extra && (
        <div className="max-w-7xl padx pady grid md:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div className="">
            <motion.h4
              className="text-center md:text-left text-black"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {l(detail.extra)}
            </motion.h4>
          </div>
          <motion.div
            className="relative h-75 md:h-105 overflow-hidden group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={detail.extra.img}
              alt="Imagen copas brindando"
              fill
              className="object-cover "
            />
          </motion.div>
        </div>
      )}
      {/* Grid de elementos */}
      {detail.elementos && (
        <div className="w-full pady relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/home/08.webp"
              alt="Leñas"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="relative max-w-7xl padx">
            {detail.elementos.tag && (
              <h4 className="section-tag text-cream mb-10 text-center md:text-left">
                {l(detail.elementos.tag)}
              </h4>
            )}
            <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-cream/20">
              {detail.elementos.items.map((el, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="py-6 md:py-4 md:px-8 md:first:pl-0 md:last:pr-0"
                >
                  <h4 className="text-cream">{l(el.title)}</h4>
                  <p className="opacity-60 mt-2 text-cream text-sm">
                    {l(el.description)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Técnicas */}
      {/* {detail.tecnicas && (
        <div className="w-full pady bg-cream">
          <div className="max-w-7xl padx">
            <p className="section-tag text-olive">{l(detail.tecnicas)}</p>
          </div>
        </div>
      )} */}

      {/* Galería */}
      {galleryImages.length > 0 && (
        <div className="w-full pady bg-cream">
          <div className="max-w-7xl padx">
            <motion.h4
              className="text-body mb-3"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {detail.galleryTitle ? l(detail.galleryTitle) : t("galleryTitle")}
            </motion.h4>
            <div className="divider-gold" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10">
              {galleryImages.map((src, i) => (
                <motion.div
                  key={i}
                  className="relative w-full h-75 md:h-100 overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                >
                  <Image
                    src={src}
                    alt={`${projectTitle} ${i + 1}`}
                    fill
                    quality={90}
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
