"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

export default function AboutPreview() {
  const t = useTranslations("home.aboutPreview");
  const locale = useLocale();

  return (
    <section className="w-full relative overflow-hidden flex items-center justify-center min-h-120 md:min-h-140">
      {/* Background photo */}
      <Image
        src="/images/home/bg.jpg"
        alt="Gastronomía con propósito"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-void/45" />

      {/* Centered content */}
      <div className="relative z-10 w-full py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.span
            className="section-tag text-olive block mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t("tag")}
          </motion.span>

          <motion.h2
            className=" text-cream mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            {t("title")}
          </motion.h2>

          <motion.p
            className=" text-cream opacity-55 max-w-xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href={`/${locale}/about`} className="btn-outline-light">
              {t("cta")}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
