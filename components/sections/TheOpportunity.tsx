"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface TheOpportunityProps {
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
    <section style={{ backgroundColor: "#efe8d7" }}>
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
            className="mt-4 font-light"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              color: "#951b0e",
              lineHeight: 1.2,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t("title")}
          </motion.h2>
        </div>

        {/* Stats — large, editorial */}
        <div className="grid grid-cols-3 gap-px" style={{ backgroundColor: "rgba(98, 61, 42, 0.12)" }}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
              className="px-8 py-12"
              style={{ backgroundColor: "#efe8d7" }}
            >
              <div
                className="font-light leading-none mb-3"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  color: "#3d2010",
                }}
              >
                {stat.value}
              </div>
              <p
                className="text-xs leading-relaxed tracking-wide"
                style={{ fontFamily: "var(--font-body)", color: "#798463" }}
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
