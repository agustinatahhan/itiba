"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion, type Variants } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  // const titleLines = t("title").split("\n");

  return (
    <section className="relative h-screen min-h-150 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {/* Mobile */}
      <Image
        src="/images/home/homebgsmall.webp"
        alt="Homepage image - Tamal"
        fill
        priority
        className="object-cover md:hidden"
      />

      {/* Desktop */}
      <Image
        src="/images/home/homebg.webp"
        alt="Homepage image - Tamal"
        fill
        priority
        className="object-cover hidden md:block"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-void/30" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Title */}
        <motion.h1 variants={itemVariants} className=" text-cream mb-8">
          {/* {titleLines.map((line, i) => (
            <h5 key={i} className="block">
              {line}
            </h5>
          ))} */}
          {t("title")}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className=" text-cream opacity-80 max-w-xl mx-auto mb-12 no-justify text-center"
        >
          {t("subtitle")}
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-label={t("scroll")}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <HiChevronDown className="text-cream/40" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
