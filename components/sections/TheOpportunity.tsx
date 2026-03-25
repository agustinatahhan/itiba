"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface TheOpportunityProps {
  /** Translation namespace — "home.opportunity" (default) or "about.opportunity" */
  translationKey?: string;
}

export default function TheOpportunity({
  translationKey = "home.opportunity",
}: TheOpportunityProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const t = useTranslations(translationKey as any);

  const stats = [0, 1, 2].map((i) => ({
    value: t(`stats.${i}.value`),
    label: t(`stats.${i}.label`),
  }));

  return (
    <section className="bg-cream">
      <div className="section-wrapper">
        <div className="max-w-xl mb-16">
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
        </div>

        {/* Stats — large, minimal */}
        <div className="grid grid-cols-3 gap-px bg-gold/10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
              className="bg-cream px-8 py-12"
            >
              <div
                className="text-4xl md:text-5xl lg:text-6xl font-light text-green-deep mb-3 leading-none"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.value}
              </div>
              <p
                className="text-xs text-olive tracking-wide leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
