"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Mission() {
  const t = useTranslations("mission");

  return (
    <section className="bg-cream">
      <div className="section-wrapper">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="section-tag">{t("tag")}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="gold-border-left mt-10"
          >
            <blockquote
              className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-green-deep"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t("quote")}
            </blockquote>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.22 }}
            className="body-text mt-10 max-w-2xl"
          >
            {t("description")}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
