"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

export default function AboutPreview() {
  const t = useTranslations("home.aboutPreview");
  const locale = useLocale();

  return (
    <section className="bg-cream">
      <div className="section-wrapper">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          {/* Text */}
          <div className="max-w-xl">
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
              className="heading-lg mt-4 mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t("title")}
            </motion.h2>
            <motion.p
              className="text-green-deep/60 text-base leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t("description")}
            </motion.p>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="shrink-0"
          >
            <Link href={`/${locale}/about`} className="btn-primary group">
              {t("cta")}
              <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
