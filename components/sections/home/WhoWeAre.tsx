"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  const t = useTranslations("home.whoWeAre");
  const pillars = [0, 1, 2].map((i) => ({
    name: t(`pillars.${i}.name`),
    description: t(`pillars.${i}.description`),
  }));

  return (
    <section className="w-full pady bg-cream">
      <div className="max-w-6xl padx">

        {/* Bloque 1 — párrafo introductorio, centrado */}
        <motion.h4
          className=" text-black text-center mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {t("intro")}
        </motion.h4>

      </div>
    </section>
  );
}
