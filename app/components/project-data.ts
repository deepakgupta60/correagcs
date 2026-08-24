export type ProjectItem = {
  slug: string;
  title: string;
  summary: string;
  description: string[];
  heroImage: string;
  gallery: string[];
  video: string;
  location: string;
  date: string;
  owner: string;
  category: string;
};

export const projectsData: ProjectItem[] = [
  {
    slug: "westhouse-apartment",
    title: "Westhouse Apartment",
    summary:
      "Premium residential apartment delivery with modern architecture and precision finish execution.",
    description: [
      "The Westhouse Apartments project in Keller, TX demonstrates Correa Masonry's proficiency in large-scale multi-family construction. This impressive development features a sophisticated exterior combining brick, cast stone, and architectural stone elements. Completed in 2020, the project showcases clean lines, durable craftsmanship, and a timeless aesthetic that enhances the North Texas rental market. Built with precision and attention to detail, Westhouse Apartments delivers both visual appeal and long-lasting quality.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "/projects/westhouse/1.jpeg",
      "/projects/westhouse/2.jpeg",
      "/projects/westhouse/3.jpeg",
      "/projects/westhouse/4.jpeg",
      "/projects/westhouse/5.jpeg",
      "/projects/westhouse/6.jpeg",
      "/projects/westhouse/7.jpeg",
      "/projects/westhouse/8.jpeg",
    ],

    video: "https://www.youtube.com/embed/7iilW_Jzuak",
    location: "Keller, TX",
    date: "Decemeber 2020",
    owner: "Westside Business Holdings",
    category: "Commercial",
  },

  {
    slug: "westside-corporate-hub",
    title: "Westside Corporate Hub",
    summary:
      "Multi-floor commercial office development designed for high-performance workspaces.",
    description: [
      "The corporate hub required tight schedule control, MEP coordination, and premium interior delivery across multiple departments.",
      "We executed phased handovers to reduce operational disruption and improve client transition readiness.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "/projects/westhouse/1.jpeg",
      "/projects/westhouse/2.jpeg",
      "/projects/westhouse/3.jpeg",
      "/projects/westhouse/4.jpeg",
      "/projects/westhouse/5.jpeg",
      "/projects/westhouse/6.jpeg",
      "/projects/westhouse/7.jpeg",
      "/projects/westhouse/8.jpeg",
    ],

    video: "https://www.youtube.com/embed/7iilW_Jzuak",
    location: "Keller, TX",
    date: "Decemeber 2020",
    owner: "Westside Business Holdings",
    category: "Commercial",
  },

  {
    slug: "summit-logistics-complex",
    title: "Summit Logistics Complex",
    summary:
      "Large-format industrial logistics facility with robust utility and circulation planning.",
    description: [
      "This project involved high-capacity operational planning for warehousing, loading flow, and service access zones.",
      "Our execution emphasized durability, safety, and clear milestone reporting for investor visibility.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "/projects/westhouse/1.jpeg",
      "/projects/westhouse/2.jpeg",
      "/projects/westhouse/3.jpeg",
      "/projects/westhouse/4.jpeg",
      "/projects/westhouse/5.jpeg",
      "/projects/westhouse/6.jpeg",
      "/projects/westhouse/7.jpeg",
      "/projects/westhouse/8.jpeg",
    ],

    // YouTube Video
    video: "https://www.youtube.com/embed/7iilW_Jzuak",

    location: "North Arlington, TX",
    date: "November 2025",
    owner: "Summit Industrial Partners",
    category: "Industrial",
  },
];

export function getProjectBySlug(slug: string) {
  return projectsData.find((project) => project.slug === slug);
}