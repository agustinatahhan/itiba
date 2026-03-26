"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

export default function AboutPreview() {
  const t = useTranslations("home.aboutPreview");
  const locale = useLocale();

  return (
    <section
      className="relative overflow-hidden flex items-center justify-center"
      style={{ minHeight: "clamp(420px, 55vw, 620px)" }}
    >
      {/* Background photo */}
      <Image
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80"
        alt="Gastronomía con propósito"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Near-black warm overlay */}
      <div
        className="absolute inset-0 bg-void/55"
      />

      {/* Centered content */}
      <div className="relative z-10 text-center px-8 max-w-2xl mx-auto">
        <motion.span
          className="font-medium tracking-[0.22em] uppercase block mb-6 text-olive font-body text-[0.85rem]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("tag")}
        </motion.span>

        <motion.h2
          className="mb-6 font-heading text-cream"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          {t("title")}
        </motion.h2>

        <motion.p
          className="mb-10 font-body text-cream/65"
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
    </section>
  );
}
