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

  const featured = projects.slice(0, 3);

  return (
    <section className="bg-ivory">
      <div className="section-wrapper">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.span
              className="section-tag"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t("tag")}
            </motion.span>
            <motion.h2
              className="heading-lg mt-3"
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
              className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-olive hover:text-green-deep transition-colors group"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t("viewAll")}
              <HiArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-gold/10">
          {featured.map((project, i) => {
            const title = locale === "es" ? project.title.es : project.title.en;
            const category = locale === "es" ? project.category.es : project.category.en;
            const description = locale === "es" ? project.description.es : project.description.en;
            const isFeature = i === 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                className={`group relative bg-ivory overflow-hidden ${isFeature ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-green-deep/10 group-hover:bg-green-deep/5 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <span className="section-tag mb-3 block">{category}</span>
                  <h3 className="heading-md mb-3">{title}</h3>
                  <p className="body-text text-sm mb-6 line-clamp-2">{description}</p>
                  <Link
                    href={`/${locale}/projects`}
                    className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-olive hover:text-green-deep transition-colors group/link"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {t("viewMore")}
                    <HiArrowRight size={12} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
