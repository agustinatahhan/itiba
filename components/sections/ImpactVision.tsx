"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function ImpactVision() {
  const t = useTranslations("home.impact");

  const points = [0, 1, 2].map((i) => t(`points.${i}`));

  return (
    <section className="bg-ivory">
      <div className="section-wrapper">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
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
              className="heading-lg mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t("title")}
            </motion.h2>
            <motion.p
              className="mt-5 text-sm text-green-deep/50 leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t("intro")}
            </motion.p>
          </div>

          {/* Bullet points — large editorial */}
          <div className="space-y-0 mt-2">
            {points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.12 }}
                className="flex items-start gap-5 border-t border-gold/20 py-7 first:border-t-0 first:pt-0"
              >
                {/* Gold dot marker */}
                <span className="mt-[0.45rem] shrink-0 w-1.5 h-1.5 rounded-full bg-gold" />
                <p
                  className="text-xl md:text-2xl font-light text-green-deep leading-snug"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {point}
                </p>
              </motion.div>
            ))}
            <div className="border-t border-gold/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
