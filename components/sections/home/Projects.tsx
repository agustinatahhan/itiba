"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

interface ProjectsGridProps {
  locale: string;
  viewMoreLabel?: string;
}

export default function ProjectsGrid({ locale }: ProjectsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
      {projects.map((project, i) => {
        const title = locale === "es" ? project.title.es : project.title.en;

        return (
          <Link
            key={project.id}
            href={`/${locale}/projects/${project.slug}`}
            className="block"
          >
            <motion.article
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative overflow-hidden group cursor-pointer min-h-96 md:min-h-130"
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
                <h4 className="text-cream leading-snug">{title}</h4>
              </div>
            </motion.article>
          </Link>
        );
      })}
    </div>
  );
}
