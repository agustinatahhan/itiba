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
    <section className="bg-white">
      <div className="section-wrapper py-28 lg:py-36">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
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
              className="mt-3 font-light font-heading text-red-accent"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.2 }}
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
              className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase group transition-colors text-olive hover:text-brown font-body"
            >
              {t("viewAll")}
              <HiArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-1 lg:h-150">
          {featured.map((project, i) => {
            const title = locale === "es" ? project.title.es : project.title.en;
            const category = locale === "es" ? project.category.es : project.category.en;

            return (
              <article
                key={project.id}
                className={`relative overflow-hidden group cursor-pointer ${
                  i === 0 ? "lg:col-span-2 lg:row-span-2 min-h-100 lg:min-h-0" : "min-h-65 lg:min-h-0"
                }`}
              >
                {/* Photo */}
                <Image
                  src={project.image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 66vw, 50vw"
                />

                {/* Near-black overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(26,15,8,0.92) 0%, rgba(26,15,8,0.45) 40%, transparent 70%)",
                  }}
                />

                {/* Content — text animations here */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <motion.span
                    className="text-[0.6rem] font-medium tracking-[0.22em] uppercase block mb-2 text-olive font-body"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    {category}
                  </motion.span>
                  <motion.h3
                    className="font-light leading-snug mb-4 text-cream font-heading"
                    style={{ fontSize: i === 0 ? "clamp(1.25rem, 2.5vw, 2rem)" : "1.2rem" }}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 + 0.1 }}
                  >
                    {title}
                  </motion.h3>
                  <Link
                    href={`/${locale}/projects`}
                    className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase group/link transition-opacity opacity-70 hover:opacity-100 text-cream font-body"
                  >
                    {t("viewMore")}
                    <HiArrowRight
                      size={12}
                      className="transition-transform group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
