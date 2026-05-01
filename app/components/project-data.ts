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
    slug: "oceanfront-luxury-villa",
    title: "Oceanfront Luxury Villa",
    summary: "Premium residential villa delivery with modern architecture and precision finish execution.",
    description: [
      "This custom villa project focused on contemporary design language with structural durability for a coastal environment.",
      "Our team managed planning, procurement, interior detailing, and quality checks to ensure premium handover standards.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509782-20d39509f26d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    ],
    video: "/project.mp4",
    location: "Dallas Waterfront District",
    date: "March 2026",
    owner: "Private Owner Group",
    category: "Residential",
  },
  {
    slug: "westside-corporate-hub",
    title: "Westside Corporate Hub",
    summary: "Multi-floor commercial office development designed for high-performance workspaces.",
    description: [
      "The corporate hub required tight schedule control, MEP coordination, and premium interior delivery across multiple departments.",
      "We executed phased handovers to reduce operational disruption and improve client transition readiness.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    ],
    video: "/project.mp4",
    location: "West Dallas, TX",
    date: "January 2026",
    owner: "Westside Business Holdings",
    category: "Commercial",
  },
  {
    slug: "summit-logistics-complex",
    title: "Summit Logistics Complex",
    summary: "Large-format industrial logistics facility with robust utility and circulation planning.",
    description: [
      "This project involved high-capacity operational planning for warehousing, loading flow, and service access zones.",
      "Our execution emphasized durability, safety, and clear milestone reporting for investor visibility.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    ],
    video: "/project.mp4",
    location: "North Arlington, TX",
    date: "November 2025",
    owner: "Summit Industrial Partners",
    category: "Industrial",
  },
];

export function getProjectBySlug(slug: string) {
  return projectsData.find((project) => project.slug === slug);
}
