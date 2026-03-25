"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const serviceImages = [
  "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&q=80",
  "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  "https://images.unsplash.com/photo-1454944338482-a69bb95894af?w=600&q=80",
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80",
];

export default function Services() {
  const t = useTranslations("services");

  const items = [0, 1, 2, 3, 4].map((i) => ({
    number: t(`items.${i}.number`),
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
  }));

  return (
    <section className="bg-ivory">
      <div className="section-wrapper">
        {/* Header */}
        <div className="mb-14">
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
            className="heading-lg mt-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t("title")}
          </motion.h2>
        </div>

        {/* Service items — full-width editorial rows */}
        <div>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.07 }}
              className="group border-t border-gold/20 py-8 grid grid-cols-12 gap-4 items-center hover:bg-cream/60 transition-colors duration-300 -mx-6 px-6"
            >
              {/* Number */}
              <div className="col-span-1">
                <span
                  className="text-xs font-medium tracking-[0.2em] text-gold/50 group-hover:text-gold transition-colors duration-300"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.number}
                </span>
              </div>

              {/* Title */}
              <div className="col-span-5 md:col-span-4">
                <h3
                  className="text-xl md:text-2xl font-light text-green-deep group-hover:text-brown-warm transition-colors duration-300"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div className="col-span-5 md:col-span-5 hidden md:block">
                <p
                  className="text-sm text-green-deep/50 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.description}
                </p>
              </div>

              {/* Arrow reveal */}
              <div className="col-span-1 flex justify-end">
                <div className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-gold">
                    <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-gold/20" />
        </div>
      </div>
    </section>
  );
}
