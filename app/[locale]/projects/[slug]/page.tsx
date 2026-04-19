import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/data/projects";
import FadeIn from "@/components/animations/FadeIn";
import ProjectBody from "@/components/sections/projects/ProjectBody";

interface ProjectDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

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

  const title = locale === "es" ? project.title.es : project.title.en;
  const subtitle = project.detail?.subtitle
    ? locale === "es"
      ? project.detail.subtitle.es
      : project.detail.subtitle.en
    : locale === "es"
      ? project.category.es
      : project.category.en;

  const galleryImages = project.detail?.galleryImages ?? [];
  return (
    <>
      {/* Hero */}
      <section className="imgbg">
        <Image
          src="/images/home/05.webp"
          alt={title}
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-void/70" />
        <div className="section-wrapper pt-0 pb-0 relative z-10 w-full">
          <FadeIn delay={0.1}>
            <h1 className="text-(--color-cream)">{title}</h1>
            <p className="section-tag mt-3">{subtitle}</p>
          </FadeIn>
        </div>
      </section>

      {project.detail ? (
        <ProjectBody
          detail={project.detail}
          galleryImages={galleryImages}
          projectTitle={title}
          backHref={`/${locale}/projects`}
        />
      ) : (
        <section className="w-full pady">
          <div className="max-w-7xl padx">
            <p className="text-body">
              {locale === "es"
                ? project.description.es
                : project.description.en}
            </p>
          </div>
        </section>
      )}
    </>
  );
}
