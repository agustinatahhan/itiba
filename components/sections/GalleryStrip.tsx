import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
  aspect?: "wide" | "square" | "tall";
}

interface GalleryStripProps {
  images: GalleryImage[];
  height?: "sm" | "md" | "lg";
}

const aspectClasses = {
  wide: "aspect-video",
  square: "aspect-square",
  tall: "aspect-3/4",
};

const heightClasses = {
  sm: "h-48 md:h-64",
  md: "h-64 md:h-80",
  lg: "h-80 md:h-[480px]",
};

export default function GalleryStrip({ images, height = "md" }: GalleryStripProps) {
  return (
    <div className={`flex gap-0.5 bg-gold/10 overflow-hidden ${heightClasses[height]}`}>
      {images.map((img, i) => (
        <div
          key={i}
          className={`relative flex-1 min-w-0 overflow-hidden ${i === 0 && images.length === 3 ? "flex-[2]" : ""}`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
