"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface TheSolutionProps {
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
    <section style={{ backgroundColor: "#efe8d7" }}>
      <div className="section-wrapper">
        {/* Header + image */}
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
        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(98, 61, 42, 0.12)" }}>
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              className="px-8 py-10 group transition-colors duration-300"
              style={{ backgroundColor: "#efe8d7" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e5dcc8")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#efe8d7")}
            >
              <div
                className="font-light mb-6 leading-none select-none"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "3rem",
                  color: "rgba(61, 32, 16, 0.12)",
                }}
              >
                {pillar.number}
              </div>
              <h3
                className="font-light mb-2"
                style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", color: "#3d2010" }}
              >
                {pillar.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "rgba(61, 32, 16, 0.6)" }}
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
