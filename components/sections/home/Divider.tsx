"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Divider() {
  const t = useTranslations("vision");

  return (
    <section className="w-full pady bg-olive/80">
      <div className="max-w-6xl padx">

        <motion.h4
          className=" text-cream text-center mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {t("visionText")}
        </motion.h4>

      </div>
    </section>
  );
}
