"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function VisionBody() {
  const t = useTranslations("vision");

  return (
    <section className="w-full bg-cream text-black">
      {/* INTRO */}
      <div className="max-w-7xl padx pady grid md:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <div className="">
          <motion.h4
            className="text-center md:text-left text-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t("intro")}
          </motion.h4>
        </div>
        <motion.div
          className="relative h-75 md:h-105 overflow-hidden group"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/gallery/01.webp"
            alt="Imagen copas brindando"
            fill
            className="object-cover "
          />
        </motion.div>
      </div>
      {/* BLOQUE IMAGEN + TEXTO */}
      <div className="w-full pady bg-olive/80">
        <div className="max-w-7xl padx">
          <motion.h4
            className=" text-cream text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {t("visionText")}
          </motion.h4>
        </div>
      </div>
      {/* ÁREAS */}
      <div className="border-t border-brown/10">
        <div className="max-w-7xl pady padx">
          <div className="grid md:grid-cols-2 gap-x-24 gap-y-16">
            {["creative", "events", "consulting", "education", "alliances"].map(
              (key, index) => (
                <motion.div
                  key={key}
                  className="flex flex-col md:flex-row gap-3 md:gap-5 items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  {/* Número */}
                  <span className="text-2xl md:text-3xl font-light text-brown/30 leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Contenido */}
                  <div>
                    <h4 className="mb-2 md:mb-3 leading-snug">
                      {t(`${key}.title`)}
                    </h4>

                    <p className="text-black/80 leading-relaxed">
                      {t(`${key}.text`)}
                    </p>

                    <div className="mt-4 md:mt-6 w-16 h-px bg-brown/30"></div>
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </div>{" "}
   
    </section>
  );
}
