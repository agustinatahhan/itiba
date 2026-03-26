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
    title: { es: "Origen — Restaurante de Autor", en: "Origen — Signature Restaurant" },
    description: {
      es: "Desarrollo integral del concepto culinario, narrativa de marca y estrategia de posicionamiento para un restaurante de alta cocina latinoamericana.",
      en: "Comprehensive development of the culinary concept, brand narrative, and positioning strategy for a Latin American haute cuisine restaurant.",
    },
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    slug: "origen-restaurante",
  },
  {
    id: "2",
    category: { es: "Narrativa de Marca", en: "Brand Storytelling" },
    title: { es: "Tierra & Fuego", en: "Tierra & Fuego" },
    description: {
      es: "Construcción de identidad de marca y storytelling visual para una cadena de experiencias gastronómicas con enfoque en productos locales.",
      en: "Brand identity construction and visual storytelling for a chain of gastronomic experiences focused on local products.",
    },
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    slug: "tierra-fuego",
  },
  {
    id: "3",
    category: { es: "Estrategia Financiera", en: "Financial Strategy" },
    title: { es: "Mesón del Valle — Expansión", en: "Mesón del Valle — Expansion" },
    description: {
      es: "Estructuración financiera y plan de expansión para un restaurante regional que buscaba escalar su modelo de negocio a nivel nacional.",
      en: "Financial structuring and expansion plan for a regional restaurant seeking to scale its business model nationally.",
    },
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&q=80",
    slug: "meson-del-valle",
  },
  {
    id: "4",
    category: { es: "Evento Culinario", en: "Culinary Event" },
    title: { es: "Cumbre Gastronómica Caribeña", en: "Caribbean Gastronomy Summit" },
    description: {
      es: "Producción y curaduría de una cumbre gastronómica internacional que reunió a 25 chefs de 12 países de la región caribeña.",
      en: "Production and curation of an international gastronomic summit that brought together 25 chefs from 12 Caribbean countries.",
    },
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
    slug: "cumbre-gastronomica",
  },
  {
    id: "5",
    category: { es: "Consultoría Digital", en: "Digital Consulting" },
    title: { es: "Chef Dayanny — Presencia Digital", en: "Chef Dayanny — Digital Presence" },
    description: {
      es: "Estrategia integral de presencia digital, contenido y comunidad para amplificar el alcance y la influencia de una chef de renombre internacional.",
      en: "Comprehensive digital presence, content, and community strategy to amplify the reach and influence of an internationally renowned chef.",
    },
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80",
    slug: "chef-dayanny-digital",
  },

];
