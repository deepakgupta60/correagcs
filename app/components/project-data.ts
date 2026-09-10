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
  // owner: string;
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
    category: "Commercial",
  },


  
  {
    slug: "the-cove-at-odessa",
    title: "The Cove at Odessa",
    summary:
      "Premium multifamily residential delivery with refined brickwork, cultured stone accents, and precision masonry execution",
    description: [
      "The Cove is a premium multifamily residential community featuring refined brickwork, cultured stone entryways, and durable CMU structural walls",
      "Designed for both beauty and longevity, this project showcases Correa Masonry's ability to deliver high-end finishes with precision and reliability across West Texas.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?auto=format&fit=crop&w=1600&q=80",
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

    video: "https://www.youtube.com/embed/rYaxFawmjOM",
    location: "Odessa, TX",
    date: "October 2023",
    // owner: "Westside Business Holdings",
    category: "Commercial",
  },

  {
    slug: "red-oak-duplex",
    title: "Red Oak Duplex",
    summary:
      "Contemporary residential development featuring modern design and high-quality construction.",
    description: [
      "This project showcases a blend of modern aesthetics and traditional craftsmanship, delivering a unique living experience.",
      "The development includes energy-efficient features and thoughtful layout designs to maximize comfort and functionality."
      
    ],
    heroImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "/projects/redoak/1.jpg",
      "/projects/redoak/2.webp",
      "/projects/redoak/3.webp",
      "/projects/redoak/4.webp",
      "/projects/redoak/5.webp",
      "/projects/redoak/6.webp",
      "/projects/redoak/7.webp",
      "/projects/redoak/8.webp",
    ],

    // YouTube Video
    video: "https://www.youtube.com/embed/f4Uj71lFFu4",
   

    location: "Red Oak, TX",
    date: "2026",
    // owner: "Summit Industrial Partners",
    category: "Commercial",
  },
];

export function getProjectBySlug(slug: string) {
  return projectsData.find((project) => project.slug === slug);
}