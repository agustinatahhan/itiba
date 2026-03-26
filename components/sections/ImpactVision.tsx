"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function ImpactVision() {
  const t = useTranslations("home.impact");
  const points = [0, 1, 2].map((i) => t(`points.${i}`));

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left — restaurant photo */}
      <div
        className="relative min-h-72 lg:min-h-0 order-2 lg:order-1"
        style={{ minHeight: "clamp(320px, 50vw, 650px)" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85"
          alt="Alta cocina y hospitalidad"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(26,15,8,0.35) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Right — white panel */}
      <div
        className="bg-white flex flex-col justify-center px-10 lg:px-16 xl:px-24 py-20 lg:py-0 order-1 lg:order-2"
        style={{ minHeight: "clamp(400px, 50vw, 650px)" }}
      >
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
          className="mt-4 mb-10 uppercase tracking-wide font-heading text-olive"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t("title")}
        </motion.h2>

        <div className="space-y-0">
          {points.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-5 py-6"
              style={{ borderTop: i > 0 ? "1px solid rgba(98, 61, 42, 0.12)" : "none" }}
            >
              <span className="shrink-0 text-xs font-medium tracking-widest mt-1 font-body text-body/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="shrink-0 mt-[0.6rem] w-8 h-px bg-red-accent" />
              <motion.div
                className="font-medium leading-snug font-heading text-body"
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 + i * 0.1 }}
              >
                {point}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
