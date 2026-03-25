"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface TheSolutionProps {
  /** Translation namespace — "home.solution" (default) or "about.solution" */
  translationKey?: string;
}

export default function TheSolution({
  translationKey = "home.solution",
}: TheSolutionProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const t = useTranslations(translationKey as any);

  const pillars = [0, 1, 2].map((i) => ({
    number: t(`pillars.${i}.number`),
    title: t(`pillars.${i}.title`),
    description: t(`pillars.${i}.description`),
  }));

  return (
    <section className="bg-ivory">
      <div className="section-wrapper">
        {/* Header + editorial portrait image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
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

          <div className="relative w-full aspect-4/3 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&q=80"
              alt="Chef en cocina"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-0.5 bg-gold/10">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              className="bg-ivory px-8 py-10 group hover:bg-cream transition-colors duration-300"
            >
              <div
                className="text-4xl font-light text-gold/25 mb-6 group-hover:text-gold/50 transition-colors duration-300"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {pillar.number}
              </div>
              <h3
                className="text-lg font-light text-green-deep mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {pillar.title}
              </h3>
              <p
                className="text-sm text-green-deep/60 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
