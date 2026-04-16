export interface Project {
  id: string;
  category: { es: string; en: string };
  title: { es: string; en: string };
  description: { es: string; en: string };
  image: string;
  slug: string;
}

export const projects: Project[] = [
  {
    id: "1",
    category: { es: "Consultoría de Concepto", en: "Concept Consulting" },
    title: { es: "El LLamado de la Tierra", en: "Origen — Signature Restaurant" },
    description: {
      es: "Desarrollo integral del concepto culinario, narrativa de marca y estrategia de posicionamiento para un restaurante de alta cocina latinoamericana.",
      en: "Comprehensive development of the culinary concept, brand narrative, and positioning strategy for a Latin American haute cuisine restaurant.",
    },
    image:
      "/images/projects/06.jpg",
    slug: "origen-restaurante",
  },
  {
    id: "2",
    category: { es: "Narrativa de Marca", en: "Brand Storytelling" },
    title: { es: "Guía Gastronómica Dominicana", en: "Dominican Gastronomic Guide" },
    description: {
      es: "Construcción de identidad de marca y storytelling visual para una cadena de experiencias gastronómicas con enfoque en productos locales.",
      en: "Brand identity construction and visual storytelling for a chain of gastronomic experiences focused on local products.",
    },
    image:
      "/images/projects/guia.jpeg",
    slug: "tierra-fuego",
  }
];
