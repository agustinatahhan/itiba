"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  const t = useTranslations("home.whoWeAre");

  return (
    <section className="bg-green-deep">
      <div className="section-wrapper">
        <div className="max-w-4xl">
          <motion.span
            className="text-xs font-medium tracking-[0.25em] uppercase text-gold"
            style={{ fontFamily: "var(--font-body)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t("tag")}
          </motion.span>

          <motion.p
            className="mt-8 text-2xl md:text-3xl lg:text-[2.1rem] font-light text-ivory/90 leading-[1.6] tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {t("description")}
          </motion.p>

          {/* Decorative gold line */}
          <motion.div
            className="mt-12 h-px bg-gold/30 max-w-xs"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>
    </section>
  );
}
