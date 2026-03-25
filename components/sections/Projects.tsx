"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { projects } from "@/data/projects";

interface ProjectsGridProps {
  locale: string;
  viewMoreLabel: string;
}

export default function ProjectsGrid({ locale, viewMoreLabel }: ProjectsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-gold/10">
      {projects.map((project, i) => {
        const title = locale === "es" ? project.title.es : project.title.en;
        const category = locale === "es" ? project.category.es : project.category.en;
        const description =
          locale === "es" ? project.description.es : project.description.en;

        // Magazine layout: first card spans 2 columns on lg
        const isFeature = i === 0;

        return (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: (i % 3) * 0.1 }}
            className={`group relative bg-ivory overflow-hidden ${
              isFeature ? "lg:col-span-2" : ""
            }`}
          >
            {/* Image */}
            <div
              className={`relative overflow-hidden ${isFeature ? "aspect-[16/9]" : "aspect-[4/3]"}`}
            >
              <Image
                src={project.image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={
                  isFeature
                    ? "(max-width: 1024px) 100vw, 66vw"
                    : "(max-width: 768px) 100vw, 33vw"
                }
              />
              <div className="absolute inset-0 bg-green-deep/20 group-hover:bg-green-deep/10 transition-colors duration-300" />
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
                aria-label={`${viewMoreLabel}: ${title}`}
              >
                {viewMoreLabel}
                <HiArrowRight
                  size={12}
                  className="transition-transform group-hover/link:translate-x-1"
                />
              </Link>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
