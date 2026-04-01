"use client";

import Image from "next/image";
import Link from "next/link";
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

  const titleLines = t("title").split("\n");

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/home/bg2.jpg"
        alt="Fine dining restaurant ambiance"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-green-deep/55" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Decorative line */}
        {/* <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-12 bg-gold/60" />
          <span
            className="text-gold/80 text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Itibá Gastronomic Agency
          </span>
          <div className="h-px w-12 bg-gold/60" />
        </motion.div> */}

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-light text-ivory leading-none tracking-tight mb-8 font-heading"
        >
          {titleLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-ivory/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-12 font-body"
        >
          {t("subtitle")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* <Link href={`/${locale}/about`} className="btn-primary">
            {t("cta1")}
          </Link> */}
          <Link href={`/${locale}/projects`} className="btn-outline-light">
            {t("cta2")}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-label={t("scroll")}
      >
        {/* <span
          className="text-ivory/40 text-[0.6rem] tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {t("scroll")}
        </span> */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <HiChevronDown className="text-ivory/40" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
