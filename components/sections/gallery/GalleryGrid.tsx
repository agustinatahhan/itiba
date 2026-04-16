"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GalleryGrid({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((img, i) => (
        <motion.article
          key={img}
          className="relative overflow-hidden group cursor-pointer aspect-square"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
        >
          <Image
            src={img}
            alt={`gallery-${i}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.article>
      ))}
    </div>
  );
}