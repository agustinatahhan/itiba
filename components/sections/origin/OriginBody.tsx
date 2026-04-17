"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function OriginBody() {
  const t = useTranslations("origin");

  return (
    <section className="w-full bg-cream">
      {/* INTRO */}
      <div className="max-w-7xl padx pady text-center">
        <motion.h4
          className="text-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("intro")}
        </motion.h4>
      </div>

      {/* IMÁGEN + TEXTO */}

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Imagen */}
        <div className="relative min-h-80 md:min-h-105 lg:min-h-full overflow-hidden group">
          <Image
            src="/images/origin/manos.webp"
            alt="Itibá"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Texto */}
        <div className="flex items-center bg-olive/80">
          <div className="py-16 md:py-30 max-w-2xl padx">
            <motion.h4
              className=" text-cream"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t("blockTitle")}
            </motion.h4>

            <motion.div
              className="mt-4 md:mt-8 text-cream/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p>{t("blockText1")}</p>
              <p>{t("blockText2")}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* PROYECTO DESTACADO */}
      <div className="w-full bg-cream text-black pady ">
        <div className="max-w-7xl grid md:grid-cols-2 gap-10 items-center padx">
          {/* Texto */}
          <div className="max-w-xl">
            <motion.p
              className="text-sm uppercase tracking-widest text-black/70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {t("projectTitle")}
            </motion.p>

            <motion.h4
              className="mt-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t("projectName")}
            </motion.h4>

            <motion.p
              className="mt-4 text-black/70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {t("projectDesc")}
            </motion.p>

            <motion.div
              className="flex gap-6 mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <button className="btn-outline hover:btn-hover">
                {t("ctaProject")}
              </button>
            </motion.div>
          </div>
          {/* Imagen */}
          <motion.div
            className="relative h-75 md:h-105 overflow-hidden group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/projects/06.webp"
              alt={t("projectName")}
              fill
              className="object-cover "
            />
          </motion.div>
        </div>
      </div>
      {/* CLIENTES */}
      {/* <div className="w-full bg-cream border-t border-brown/10">
        <div className="section-wrapper text-center pady max-w-5xl">
          <motion.h3
            className=" text-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("clientsTitle")}
          </motion.h3>

          <motion.p
            className="mt-4 text-black/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t("clientsText")}
          </motion.p>

          <motion.div
            className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-10 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {[
              { name: "brugal", src: "/images/origin/brugal.webp" },
              { name: "macarfi", src: "/images/origin/macarfii.webp" },
              { name: "adg", src: "/images/origin/adgg.webp" },
            ].map((client) => (
              <motion.div
                key={client.name}
                className="relative h-12 md:h-14 opacity-60 hover:opacity-100 transition"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 0.6, y: 0 },
                }}
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div> */}
    </section>
  );
}
