"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
export default function ProjectBody() {
  const t = useTranslations("projects.llamadoDeLaTierra");

  return (
    <section className="w-full bg-cream text-black">
          <div className="max-w-7xl padx pady text-center">
        <motion.h4
          className="text-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("description")}
        </motion.h4>
      </div>
      <div className="w-full pady bg-red-accent/80">
        <div className="max-w-7xl padx">
          <motion.h4
            className=" text-cream text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {t("quote")}
          </motion.h4>
        </div>
      </div>

      <div className="border-t border-brown/10">
        <div className="max-w-7xl padx pady flex flex-col gap-24">
          {/* Nuestra mirada */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Imagen */}
            <div className="relative h-60 md:h-80 overflow-hidden">
              <Image
                src="/images/home/cacao.webp"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* Texto */}
            <div className="max-w-xl">
              <h4 className="mb-4">{t("quote")}</h4>
            </div>
          </motion.div>

          {/* Cómo trabajamos */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Texto */}
            <div className="max-w-xl md:order-1 order-2">
              <h4 className="mb-4">{t("processTitle")}</h4>
              <p className="text-black/80">{t("processText")}</p>
            </div>

            {/* Imagen */}
            <div className="relative h-60 md:h-80 overflow-hidden md:order-2 order-1">
              <Image
                src="/images/home/07.webp"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Lo que nos mueve */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Imagen */}
            <div className="relative h-60 md:h-80 overflow-hidden">
              <Image
                src="/images/gallery/010.webp"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* Texto */}
            <div className="max-w-xl">
              <h4 className="mb-4">{t("driveTitle")}</h4>
              <p className="text-black/80">{t("driveText")}</p>

              <div className="mt-8">
                <button className="btn-outline">{t("ctaProjects")}</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
