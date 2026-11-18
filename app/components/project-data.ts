export type ProjectItem = {
  slug: string;
  title: string;
  summary: string;
  description: string[];
  highlights: string[];
  heroImage: string;
  gallery: string[];
  video: string;
  location: string;
  date: string;
  category: string;
};

export const projectsData: ProjectItem[] = [
  {
    slug: "westhouse-apartment",
    title: "Westhouse Apartments",
    summary:
      "A large-scale multifamily community in Keller, TX with a brick, cast stone, and architectural stone exterior.",
    description: [
      "The Westhouse Apartments project in Keller, Texas shows our team's experience on large-scale multifamily construction in North Texas. The community features a sophisticated exterior that combines brick, cast stone, and architectural stone elements.",
      "Completed in December 2020, the project is defined by clean lines, durable craftsmanship, and a timeless look that holds up in the North Texas rental market. Careful sequencing of exterior trades and consistent quality checks delivered both curb appeal and long-term durability.",
    ],
    highlights: [
      "Multifamily residential community",
      "Brick, cast stone, and architectural stone exterior",
      "Completed December 2020",
      "Keller, TX (Dallas–Fort Worth)",
    ],
    heroImage: "/projects/westhouse/4.jpeg",
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
    video: "https://www.youtube-nocookie.com/embed/7iilW_Jzuak",
    location: "Keller, TX",
    date: "December 2020",
    category: "Multifamily Residential",
  },
  {
    slug: "the-cove-at-odessa",
    title: "The Cove at Odessa",
    summary:
      "A multifamily community in Odessa, TX with refined brickwork, cultured stone entries, and CMU structural walls.",
    description: [
      "The Cove is a multifamily residential community featuring refined brickwork, cultured stone entryways, and durable CMU (concrete masonry unit) structural walls.",
      "Designed for both appearance and longevity, the project shows our ability to deliver high-end finishes with precision and reliability on a multifamily schedule in West Texas.",
    ],
    highlights: [
      "Multifamily residential community",
      "Refined brickwork and cultured stone entryways",
      "CMU structural walls",
      "Completed October 2023",
    ],
    heroImage: "/projects/odessa/8.webp",
    gallery: [
      "/projects/odessa/1.jpg",
      "/projects/odessa/2.jpg",
      "/projects/odessa/3.jpg",
      "/projects/odessa/4.jpg",
      "/projects/odessa/5.jpg",
      "/projects/odessa/6.jpg",
      "/projects/odessa/7.jpg",
      "/projects/odessa/8.webp",
    ],
    video: "https://www.youtube-nocookie.com/embed/rYaxFawmjOM",
    location: "Odessa, TX",
    date: "October 2023",
    category: "Multifamily Residential",
  },
  {
    slug: "red-oak-duplex",
    title: "Red Oak Duplex",
    summary:
      "A contemporary residential duplex in Red Oak, TX combining modern design with quality construction.",
    description: [
      "This residential duplex blends modern design with traditional craftsmanship to create a distinctive living experience just south of Dallas.",
      "The build includes energy-efficient features and thoughtful floor plans that maximize comfort and everyday functionality for each unit.",
    ],
    highlights: [
      "Residential duplex",
      "Contemporary exterior design",
      "Energy-efficient features",
      "Red Oak, TX (Ellis County, south of Dallas)",
    ],
    heroImage: "/projects/redoak/red-oak.webp",
    gallery: [
      "/projects/redoak/1.jpg",
      "/projects/redoak/2.webp",
      "/projects/redoak/4.webp",
      "/projects/redoak/5.webp",
      "/projects/redoak/6.webp",
      "/projects/redoak/7.webp",
      "/projects/redoak/8.webp",
      "/projects/redoak/9.webp",
    ],
    video: "https://www.youtube-nocookie.com/embed/f4Uj71lFFu4",
    location: "Red Oak, TX",
    date: "2026",
    category: "Residential",
  },
];

export function getProjectBySlug(slug: string) {
  return projectsData.find((project) => project.slug === slug);
}
