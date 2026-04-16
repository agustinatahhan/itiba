"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const memberImages = ["/images/about/dyanny.png", "/images/about/noee.png"];

export default function TeamCompact() {
  const t = useTranslations("about.team");

  const members = [0, 1].map((i) => ({
    name: t(`members.${i}.name`),
    description: t(`members.${i}.description`),
  }));

  return (
    <section className="bg-brown/95 py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-cream text-4xl md:text-5xl mb-20 tracking-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ADN
        </motion.h2>

        <div className="flex flex-col gap-24 md:gap-32">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Contenedor de Imagen */}
              <div className="w-full md:w-1/2 aspect-square relative grayscale  transition-all duration-700 ease-in-out border border-cream/10">
                <Image
                  src={memberImages[i]}
                  alt={member.name}
                  fill
                  className="object-cover p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Contenedor de Texto */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h4 className="text-cream md:text-4xl mb-1">{member.name}</h4>

                <p className="text-cream/80 font-light max-w-md mb-8">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
