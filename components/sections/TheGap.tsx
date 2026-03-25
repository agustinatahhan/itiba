"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function TheGap() {
  const t = useTranslations("home.gap");

  const points = [0, 1, 2].map((i) => ({
    number: t(`points.${i}.number`),
    title: t(`points.${i}.title`),
    description: t(`points.${i}.description`),
  }));

  return (
    <section className="bg-ivory">
      <div className="section-wrapper">
        {/* Header + side image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
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
          </div>

          {/* Editorial image — proper aspect ratio, not fixed height */}
          <div className="relative w-full aspect-video overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1559847844-5315695dadae?w=1600&q=80"
              alt="Mercado de ingredientes"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Points */}
        <div className="grid md:grid-cols-3 gap-0.5 bg-gold/10">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              className="bg-ivory px-8 py-10"
            >
              <span
                className="text-xs font-medium tracking-[0.2em] text-gold/50 uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {point.number}
              </span>
              <h3
                className="text-xl font-light text-green-deep mt-3 mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {point.title}
              </h3>
              <p
                className="text-sm text-green-deep/60 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
