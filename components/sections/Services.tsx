"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
  { src: "/images/home/01.jpg", alt: "" },
  { src: "/images/home/03.jpg", alt: "" },
  { src: "/images/home/04.jpg", alt: "" },
];

export default function Services() {
  const t = useTranslations("services");
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const items = [0, 1, 2, 3, 4].map((i) => ({
    number: t(`items.${i}.number`),
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
  }));

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* Right — rotating photos */}
      <div className="relative min-h-72 lg:min-h-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            <Image
              src={IMAGES[current].src}
              alt={IMAGES[current].alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Left — solid olive background with pillars */}
      <div className="bg-olive-dark order-first lg:order-0">
        <div className="px-10 lg:px-14 py-15">
          {/* Header */}
          <div className="mb-6">
            <motion.span
              className="section-tag block text-cream/60"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t("tag")}
            </motion.span>
            <motion.h2
              className="mt-2 font-heading text-cream"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t("title")}
            </motion.h2>
          </div>

          {/* Pillar rows */}
          <div>
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 py-3"
                style={{
                  borderTop: i === 0 ? "none" : "1px solid rgba(121, 132, 99, 0.3)",
                }}
              >
                {/* Number */}
                <span
                  className="shrink-0 font-light leading-none select-none mt-0.5 font-heading text-cream/25 text-[1.4rem]"
                >
                  {item.number}
                </span>

                {/* Title + description */}
                <div>
                  <motion.h3
                    className="font-heading text-cream"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.06 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    className="mt-1 font-body text-cream/60"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.06 + 0.1 }}
                  >
                    {item.description}
                  </motion.p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(121, 132, 99, 0.3)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
