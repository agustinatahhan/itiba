"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  const t = useTranslations("home.whoWeAre");

  return (
    <section className="bg-white">
      <div className="section-wrapper py-28 lg:py-36">
        <div className="max-w-2xl mx-auto text-center">
          <motion.span
            className="section-tag"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("tag")}
          </motion.span>

          <motion.p
            className="mt-6 font-light font-heading text-body"
            style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)", lineHeight: 1.65 }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {t("description")}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
