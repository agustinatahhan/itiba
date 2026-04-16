"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

const BLOCKS = [
  { image: "/images/home/07.jpg", reverse: false },
  { image: "/images/home/08.jpg", reverse: true },
  { image: "/images/home/05.jpg", reverse: false },
];

export default function StoryTeaser() {
  const t = useTranslations("home.manifesto");
  const locale = useLocale();

  const cards = [0, 1, 2].map((i) => ({
    title: t(`cards.${i}.title`),
    body: t(`cards.${i}.body`),
  }));

  return (
    <section className="w-full py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="flex flex-col gap-4">
          {cards.map((card, i) => {
            const block = BLOCKS[i];
            return (
              <motion.div
                key={i}
                className={`flex flex-col ${block.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-0`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
              >
                {/* Image column */}
                <div className="relative w-full md:w-[35%] shrink-0 overflow-hidden h-75">
                  <Image
                    src={block.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center"
                    unoptimized
                  />
                </div>

                {/* Text column */}
                <div className="flex-1 flex flex-col justify-center py-8 px-0 md:px-12 bg-cream">
                  <h3 className=" text-red-accent mb-3">
                    {card.title}
                  </h3>
                  <p className="">
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
