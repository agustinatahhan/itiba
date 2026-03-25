"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const memberImages = [
  "/images/about/dyanny.png",
  "/images/about/noe.png",
  "/images/about/oneida.png",
];

export default function Team() {
  const t = useTranslations("about.team");

  const members = [0, 1, 2].map((i) => ({
    name: t(`members.${i}.name`),
    title: t(`members.${i}.title`),
    role: t(`members.${i}.role`),
    description: t(`members.${i}.description`),
    quote: t(`members.${i}.quote`),
  }));

  return (
    <section className="bg-ivory">
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-tag">{t("tag")}</span>
          <h2 className="heading-lg mt-4">{t("title")}</h2>
        </motion.div>

        {/* 3-column grid — smaller, clean portraits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
              className="group"
            >
              {/* Portrait — square crop */}
              <div className="relative aspect-square overflow-hidden mb-5">
                <Image
                  src={memberImages[i]}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Info */}
              <span
                className="text-xs font-medium tracking-widest uppercase text-olive"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {member.role}
              </span>
              <motion.h3
                className="text-xl font-light text-green-deep mt-1 mb-0.5"
                style={{ fontFamily: "var(--font-heading)" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              >
                {member.name}
              </motion.h3>
              <p
                className="text-xs font-medium tracking-wider uppercase text-gold mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {member.title}
              </p>
              <p
                className="text-sm text-green-deep/60 leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {member.description}
              </p>
              <p
                className="text-sm font-light text-green-deep/50 italic border-l border-gold/30 pl-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                &ldquo;{member.quote}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
