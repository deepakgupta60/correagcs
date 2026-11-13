export type ServiceDetail = {
  slug: string;
  title: string;
  shortDescription: string;
  seoTitle: string;
  seoDescription: string;
  heroImage: string;
  heroVideo: string;
  gallery: string[];
  points: string[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "general-contracting",
    title: "General Contracting",
    shortDescription:
      "End-to-end construction execution from planning and procurement to delivery.",
    seoTitle: "General Contracting Services in Dallas",
    seoDescription:
      "Professional general contracting in Dallas for residential and commercial projects with schedule and budget control.",
    heroImage:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80",
    heroVideo:
      "https://videos.pexels.com/video-files/4496268/4496268-uhd_2732_1440_24fps.mp4",
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
    ],
    points: [
      "Pre-construction planning and scope validation",
      "Vendor and subcontractor coordination",
      "On-site quality assurance and safety control",
      "Milestone tracking and progress reporting",
    ],
  },
  {
    slug: "design-build",
    title: "Design Build",
    shortDescription:
      "Integrated design + construction model for faster project delivery.",
    seoTitle: "Design Build Construction in Dallas",
    seoDescription:
      "Design build services in Dallas with one accountable team for architecture, engineering, and construction.",
    heroImage:
      "https://images.unsplash.com/photo-1523419409543-0f3d884e1f83?auto=format&fit=crop&w=1600&q=80",
    heroVideo:
      "https://videos.pexels.com/video-files/3244425/3244425-uhd_2732_1440_25fps.mp4",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    ],
    points: [
      "Single-point responsibility from concept to completion",
      "Faster decision cycles and fewer change-order delays",
      "Unified cost engineering and budget clarity",
      "Higher design alignment with build feasibility",
    ],
  },
  {
    slug: "renovation-remodeling",
    title: "Renovation & Remodeling",
    shortDescription:
      "Transform outdated spaces into high-functioning modern environments.",
    seoTitle: "Renovation and Remodeling Services in Dallas",
    seoDescription:
      "Residential and commercial renovation in Dallas with structural upgrades, interior refresh, and modern finishes.",
    heroImage:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
    heroVideo:
      "https://videos.pexels.com/video-files/5585946/5585946-uhd_2732_1440_25fps.mp4",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=1200&q=80",
    ],
    points: [
      "Interior and exterior upgrades",
      "Space planning for better usability",
      "MEP and structural modernization",
      "Premium materials and finish execution",
    ],
  },
  {
    slug: "project-consultation",
    title: "Project Consultation",
    shortDescription:
      "Expert guidance for feasibility, budgeting, risk, and execution strategy.",
    seoTitle: "Construction Project Consultation in Dallas",
    seoDescription:
      "Get expert construction consultation in Dallas for planning, budgeting, scheduling, and risk mitigation.",
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    heroVideo:
      "https://videos.pexels.com/video-files/7691706/7691706-hd_1920_1080_25fps.mp4",
    gallery: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
    ],
    points: [
      "Feasibility and constructability review",
      "Cost and schedule benchmarking",
      "Procurement and contractor strategy",
      "Risk assessment and mitigation roadmap",
    ],
  },
];
