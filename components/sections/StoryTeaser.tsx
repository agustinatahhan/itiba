"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

const BLOCKS = [
  {
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    reverse: false, // image LEFT, text RIGHT
  },
  {
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    reverse: true,  // image RIGHT, text LEFT
  },
  {
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&q=80",
    reverse: false, // image LEFT, text RIGHT
  },
];

export default function StoryTeaser() {
  const t = useTranslations("home.manifesto");
  const locale = useLocale();

  const cards = [0, 1, 2].map((i) => ({
    title: t(`cards.${i}.title`),
    body: t(`cards.${i}.body`),
  }));

  return (
    <section style={{ backgroundColor: "#efe8d7" }}>
      <div className="section-wrapper">

        {/* Centered eyebrow */}
        {/* <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="uppercase tracking-[0.18em]"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "#798463" }}
          >
            {t("eyebrow")}
          </span>
        </motion.div> */}

        {/* 3 alternating blocks */}
        <div>
          {cards.map((card, i) => {
            const block = BLOCKS[i];
            return (
              <motion.div
                key={i}
                className={`flex flex-col md:flex-row${block.reverse ? "-reverse" : ""} items-center`}
                style={{ paddingTop: "16px", paddingBottom: "16px" }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
              >
                  {/* Image column — 35% on desktop, full width 200px on mobile */}
                  <div
                    className="relative w-full md:w-[35%] shrink-0 overflow-hidden"
                    style={{ height: "200px" }}
                  >
                    <Image
                      src={block.image}
                      alt={card.title}
                      fill
                      className="object-cover object-center"
                      unoptimized
                    />
                  </div>

                  {/* Text column — 65% on desktop */}
                  <div
                    className="flex-1 flex flex-col justify-center"
                    style={{
                      backgroundColor: "#efe8d7",
                      padding: "32px 48px",
                    }}
                  >
                    <h3
                      className="font-heading mb-2.5 leading-snug text-red-accent"
                    >
                      {card.title}
                    </h3>
                    <p style={{ color: "#5a3e2b" }}>
                      {card.body}
                    </p>
                  </div>
                </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href={`/${locale}/about`} className="btn-primary">
            {t("cta")}
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
