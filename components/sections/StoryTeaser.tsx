"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

export default function StoryTeaser() {
  const t = useTranslations("home.storyTeaser");
  const locale = useLocale();

  const items = [0, 1, 2].map((i) => ({
    tag: t(`items.${i}.tag`),
    headline: t(`items.${i}.headline`),
    num: String(i + 1).padStart(2, "0"),
  }));

  return (
    <section className="bg-ivory">
      <div className="section-wrapper py-28 lg:py-36">
        {/* 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col">
            

              {/* Accent line */}
              <div className="w-8 h-px bg-red-accent mb-5" />

              {/* Tag */}
              <span className="text-[0.6rem] tracking-[0.25em] uppercase font-body text-brown/50 mb-4">
                {item.tag}
              </span>

              {/* Body — animation on the text */}
              <motion.p
                className="font-light font-heading text-brown leading-relaxed"
                style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)" }}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, ease: "easeOut", delay: i * 0.12 }}
              >
                {item.headline}
              </motion.p>
            </div>
          ))}
        </div>

        {/* Divider + CTA */}
        <div className="border-t border-brown/15 mt-14 pt-12 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href={`/${locale}/about`} className="btn-outline">
              {t("cta")}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
