"use client";

import Image from "next/image";
// import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

// const IMAGES = [
//   { src: "/images/home/01.jpg", alt: "" },
//   { src: "/images/home/03.jpg", alt: "" },
//   { src: "/images/home/04.jpg", alt: "" },
// ];

export default function Services() {
  const t = useTranslations("services");
  const locale = useLocale();

  // const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % IMAGES.length);
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, []);

  const items = [0, 1, 2, 3, 4].map((i) => ({
    number: t(`items.${i}.number`),
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
  }));

  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2">
      {/* Columna imagen — rotating photos */}
      <div className="relative min-h-96 lg:min-h-0 overflow-hidden order-2 lg:order-1">
        {/* <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            <Image
              src={IMAGES[current].src}
              alt={IMAGES[current].alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </AnimatePresence> */}
        <Image
          src="/images/home/huevo02.jpg"
          alt="Imágen de huevo"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Columna contenido — fondo olive-dark */}
      <div className="bg-cream py-20 md:py-28 px-6 md:px-12 order-1 lg:order-2">
        {/* Header */}
{/* 
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6">
          <div>
            <motion.h2
              className="text-black mt-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t("title")}
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href={`/${locale}/vision`}
              className="nav-link flex items-center gap-2 font-medium uppercase group transition-colors text-olive hover:text-black"
            >
              {t("viewAll")}
              <HiArrowRight
                size={13}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div> */}
        {/* Pillar rows */}
        <div>
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 py-3 ${i > 0 ? "border-t border-brown/10" : ""}`}
            >
              <span className=" text-black/25 shrink-0 font-light leading-none select-none mt-0.5">
                {item.number}
              </span>

              <div>
                <motion.p
                  className=" text-black font-heading"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: i * 0.06,
                  }}
                >
                  {item.title}
                </motion.p>
                {/* <motion.p
                  className=" text-black opacity-60 mt-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 + 0.1 }}
                >
                  {item.description}
                </motion.p> */}
              </div>
            </div>
          ))}
          {/* <div className="border-t border-olive/30" /> */}
        </div>
      </div>
    </section>
  );
}
