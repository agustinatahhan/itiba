"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import Link from "next/link";
export default function Gallery() {
  const t = useTranslations("gallery");
  const images = [
    "/images/gallery/018.webp",
    "/images/gallery/019.webp",
    "/images/gallery/020.webp",
    "/images/gallery/021.webp",
  ];
  return (
    <section className="w-full pady bg-white">
      <div className="max-w-7xl padx">
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
              href={`/gallery`}
              className="nav-link flex items-center gap-2 font-medium uppercase group transition-colors text-olive hover:text-black"
            >
              {t("viewAll")}
              <HiArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
   {/* Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mb-32 ">
        {images.map((img, i) => (
          <motion.article
            key={img}
            className="relative overflow-hidden group cursor-pointer aspect-square"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Image
              src={img}
              alt={`gallery-${i}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.article>
        ))}
      </div>
      </div>
    </section>
  );
}
