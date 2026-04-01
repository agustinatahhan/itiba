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
    <section className="bg-cream/50">
      <div className="section-wrapper">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-tag">{t("tag")}</span>
          <h2
            className="mt-4 font-heading text-red-accent"
          >
            {t("title")}
          </h2>
        </motion.div>

        {/* 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.12 }}
              className="flex flex-col bg-white"
            >
              {/* Photo */}
              <div className="relative aspect-3/4 overflow-hidden">
                <Image
                  src={memberImages[i]}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Info */}
              <div className="p-8 flex flex-col flex-1">
                <span className="section-tag mb-3">{member.role}</span>

                <h3
                  className="font-heading text-body mb-1"
                >
                  {member.name}
                </h3>

                <p
                  className="mb-5 uppercase tracking-wider text-olive section-tag"
                >
                  {member.title}
                </p>

                <p
                  className="text-body/60 leading-relaxed mb-5 flex-1"
                  style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem" }}
                >
                  {member.description}
                </p>

                {/* <p
                  className="text-sm italic text-body/45 border-l-2 border-red-accent/30 pl-3 leading-relaxed font-heading"
                >
                  &ldquo;{member.quote}&rdquo;
                </p> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
