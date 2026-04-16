"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { projects } from "@/data/projects";

export default function ProjectsPreview() {
  const t = useTranslations("projects");
  const locale = useLocale();

  const featured = projects.slice(0, 2); // ← solo 2 proyectos

  return (
    <section className="w-full py-20 md:py-28 bg-cream">
      <div className="max-w-7xl padx">
        {/* Header */}
        <div className="flex flex-row items-end justify-between gap-6 mb-14">
          <div>
            {/* <motion.span
              className="section-tag"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t("tag")}
            </motion.span> */}
            <motion.h2
              className="text-red-accent mt-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t("title")}
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href={`/${locale}/projects`}
              className="nav-link flex items-center gap-2 font-medium uppercase group transition-colors text-olive hover:text-black"
            >
              {t("viewAll")}
              <HiArrowRight
                size={13}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* Grid simétrico — 2 columnas iguales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {featured.map((project, i) => {
            const title = locale === "es" ? project.title.es : project.title.en;

            return (
              <Link key={project.id} href={`/${locale}/projects/${project.slug}`} className="block">
                <motion.article
                  className="relative overflow-hidden group cursor-pointer min-h-96 md:min-h-130"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                >
                  <Image
                    src={project.image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 overlay-gradient-bottom" />

                  {/* Contenido */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    {/* <span className="section-tag text-olive block mb-2">
                      {category}
                    </span> */}
                    <h4 className="text-cream leading-snug">{title}</h4>
                  </div>
                </motion.article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
