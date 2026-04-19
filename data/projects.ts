export interface ElementoItem {
  title: { es: string; en: string };
  description: { es: string; en: string };
}

export interface ProjectBlock {
  tag?: { es: string; en: string };
  text: { es: string; en: string };
  dark?: boolean;
}

export interface ProjectDetail {
  subtitle?: { es: string; en: string };
  description?: { es: string; en: string };
  quote?: { es: string; en: string; img: string };
  extra?: { es: string; en: string; img: string };
  link?: { link: string };
  blocks?: ProjectBlock[];
  elementos?: {
    tag?: { es: string; en: string };
    items: ElementoItem[];
  };
  tecnicas?: { es: string; en: string };
  galleryTitle?: { es: string; en: string };
  galleryImages?: string[];
}

export interface Project {
  id: string;
  category: { es: string; en: string };
  title: { es: string; en: string };
  description: { es: string; en: string };
  image: string;
  slug: string;
  detail?: ProjectDetail;
}

export const projects: Project[] = [
  {
    id: "1",
    category: { es: "Consultoría de Concepto", en: "Concept Consulting" },
    title: { es: "El Llamado de la Tierra", en: "The Call of the Earth" },
    description: {
      es: "Desarrollo integral del concepto culinario, narrativa de marca y estrategia de posicionamiento para un restaurante de alta cocina latinoamericana.",
      en: "Comprehensive development of the culinary concept, brand narrative, and positioning strategy for a Latin American haute cuisine restaurant.",
    },
    image: "/images/projects/06.webp",
    slug: "llamado-a-la-tierra",
    detail: {
      subtitle: {
        es: "Río San Juan, República Dominicana",
        en: "Río San Juan, Dominican Republic",
      },
      description: {
        es: "Llamado de la Tierra fue una cena pop-up de alta cocina celebrada en Río San Juan, en la costa norte de la República Dominicana. Una noche irrepetible donde Dayanny de la Cruz, volvió a casa — no como visita, sino como acto de responsabilidad y amor.",
        en: "The Call of the Earth was a high-cuisine pop-up dinner led by Dayanny de la Cruz, co-founder of Itibá, as a return to the land that shaped her. An act of responsibility, love, and culinary memory.",
      },
      quote: {
        es: "Tomamos la filosofía del Slow Food Movement y la adaptamos a la costa norte: cocinar desde el territorio, honrar los tiempos de la tierra y crear desde la raíz. Una cocina lenta, consciente y profundamente humana, que celebra lo que somos y lo que podemos llegar a ser.",
        en: "We took the Slow Food Movement philosophy and adapted it to the northern coast: cooking from the territory, honoring the rhythms of the land and creating from the root. A slow, conscious and deeply human cuisine that celebrates what we are and what we can become.",
        img: "/images/projects/06.webp",
      },
      extra: {
        es: "Una noche que no fue solo de Dayanny — sino de todos los que han caminado con ella. Chefs dominicanos, peruanos, mexicanos y caribeños vinieron a Río San Juan a acompañarla en este regreso, como socios, como guías, como familia culinaria.",
        en: "A night that was not just Dayanny's — but everyone who has walked alongside her. Dominican, Peruvian, Mexican, and Caribbean chefs came to Río San Juan to accompany her in this return, as partners, as guides, as culinary family.",
        img: "/images/gallery/022.webp",
      },

      elementos: {
        tag: {
          es: "Los cuatro elementos que guiaron la experiencia",
          en: "The four elements that guided the experience",
        },
        items: [
          {
            title: { es: "Tierra", en: "Earth" },
            description: {
              es: "Raíces, tubérculos, cacao y plantas recolectadas de la franja norte.",
              en: "Roots, tubers, cacao, and plants gathered from the northern strip.",
            },
          },
          {
            title: { es: "Fuego", en: "Fire" },
            description: {
              es: "Asados, ahumados y rituales de carbón y ceniza.",
              en: "Grilled dishes, smoked preparations, and rituals of charcoal and ash.",
            },
          },
          {
            title: { es: "Aire", en: "Air" },
            description: {
              es: "Fermentos, deshidrataciones, aromas e infusiones.",
              en: "Ferments, dehydrations, aromas, and infusions.",
            },
          },
          {
            title: { es: "Agua", en: "Water" },
            description: {
              es: "Mariscos, salinidad y extracciones en frío del Atlántico.",
              en: "Seafood, salinity, and cold extractions from the Atlantic.",
            },
          },
        ],
      },
      tecnicas: {
        es: "Cocción al carbón y leñas de zona · Carbón de coco · Fermentos y vinagres con frutas tropicales · Deshidratación con hierbas locales · Proteínas sous-vide · Aromáticos ahumados · Cero desperdicio",
        en: "Charcoal and local wood cooking · Coconut charcoal · Tropical fruit ferments and vinegars · Dehydration with local herbs · Sous-vide proteins · Smoked aromatics · Zero waste",
      },
      galleryTitle: {
        es: "Te mostramos lo que fue esa noche",
        en: "We show you what that night was like",
      },
      galleryImages: [
        "/images/gallery/030.webp",
        "/images/gallery/024.webp",
        "/images/gallery/019.webp",
        "/images/gallery/023.webp",
        "/images/gallery/025.webp",
        "/images/gallery/026.webp",
        "/images/gallery/028.webp",
        "/images/gallery/029.webp",
        "/images/gallery/031.webp",
      ],
    },
  },
  {
    id: "2",
    category: { es: "República Dominicana", en: "Dominican Republic" },
    title: {
      es: "Guía Gastronómica Dominicana",
      en: "Dominican Gastronomic Guide",
    },
    description: {
      es: "Un proyecto construido desde Itibá para dar visibilidad al sabor dominicano — sus recetas, sus regiones, sus guardianes y sus tendencias — en un solo lugar.",
      en: "A project built from Itibá to give visibility to Dominican flavor — its recipes, its regions, its guardians and its trends — all in one place.",
    },
    detail: {
      description: {
        es: "Un proyecto construido desde Itibá para dar visibilidad al sabor dominicano — sus recetas, sus regiones, sus guardianes y sus tendencias — en un solo lugar.",
        en: "Brand identity construction and visual storytelling for a chain of gastronomic experiences focused on local products.",
      },
      quote: {
        es: "La gastronomía dominicana es una celebración viva de nuestra identidad. Cada plato combina tradición, creatividad y el inconfundible sabor caribeño que nos distingue.",
        en: "Dominican cuisine is a living celebration of our identity. Each dish combines tradition, creativity and the unmistakable Caribbean flavor that sets us apart.",
        img: "/images/projects/guia/guia04.webp",
      },
      extra: {
        es: "La guía mapea la gastronomía dominicana por región, permitiendo explorar cada rincón del país a través de su cocina. Desde el norte hasta el sur, cada destino tiene su propia identidad culinaria — sus ingredientes, sus platos y sus productores.",
        en: "The guide maps Dominican gastronomy by region, allowing users to explore every corner of the country through its cuisine. From north to south, each destination has its own culinary identity — its ingredients, its dishes and its producers.",
        img: "/images/projects/guia/guia03.webp",
      },
      link: {
        link: "https://www.guiagastronomicadr.com/es",
      },
    },
    image: "/images/projects/guia/guia.webp",
    slug: "guia-gastronomica-dominicana",
  },
];
