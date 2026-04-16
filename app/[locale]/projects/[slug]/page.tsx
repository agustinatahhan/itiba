import { notFound } from "next/navigation";
import { getTranslations, getLocale } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { projects } from "@/data/projects";

interface ProjectDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

const galleryImages = [
  "/images/gallery/01.webp",
  "/images/gallery/02.webp",
  "/images/gallery/03.webp",
  "/images/gallery/04.webp",
  "/images/gallery/05.webp",
  "/images/gallery/06.webp",
];

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const title = locale === "es" ? project.title.es : project.title.en;
  const description =
    locale === "es" ? project.description.es : project.description.en;
  return { title: `${title} — Itibá`, description };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { locale, slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const t = await getTranslations("projects");
  const title = locale === "es" ? project.title.es : project.title.en;
  const category =
    locale === "es" ? project.category.es : project.category.en;
  const description =
    locale === "es" ? project.description.es : project.description.en;

  return (
    <>
      {/* Hero */}
      <section className="imgbg">
        <Image
          src={project.image}
          alt={title}
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-void/60" />
        <div className="section-wrapper pt-0 pb-0 relative z-10 w-full">
          <h2 className="h2-heading">{title}</h2>
        </div>
      </section>

      {/* Description */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl padx">
          {/* <Link
            href={`/${locale}/projects`}
            className="nav-link flex items-center gap-2 font-medium uppercase text-olive hover:text-black transition-colors mb-12 w-fit"
          >
            <HiArrowLeft size={13} />
            {t("backToProjects")}
          </Link> */}

          <div className="max-w-7xl padx">
            <h4 className="text-center">
              {/* {description} */}
              No está terminado aún 🤓
            </h4>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-cream pb-20 md:pb-32">
        <div className="max-w-7xl padx">
          <div className="divider-gold mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="relative overflow-hidden aspect-square group"
              >
                <Image
                  src={src}
                  alt={`${title} ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
