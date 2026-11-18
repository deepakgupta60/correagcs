import type { Faq } from "../lib/seo";

export type LocationPageData = {
  city: string;
  path: string;
  linkLabel: string;
  eyebrow: string;
  h1: string;
  seoTitle: string;
  seoDescription: string;
  heroImage: string;
  answer: string;
  intro: string[];
  services: { title: string; text: string; href: string }[];
  localNotes: string[];
  nearby: string[];
  faqs: Faq[];
};

const coreServices = (city: string) => [
  { title: "Commercial construction", text: `Tenant improvements, office and retail build-outs, and ground-up commercial projects in ${city}.`, href: "/services/commercial" },
  { title: "Residential construction", text: `Custom homes, duplexes, multifamily, and additions for ${city} owners and investors.`, href: "/services/residential" },
  { title: "Design-build", text: "One contract and one team for design and construction, with faster delivery and earlier pricing.", href: "/services/design-build" },
  { title: "Renovation & remodeling", text: "Interior and exterior renovations, layout changes, and system upgrades.", href: "/services/renovation-remodeling" },
  { title: "Pre-construction planning", text: "Budgets, schedules, permit strategy, and long-lead procurement before you build.", href: "/services/pre-construction-planning" },
  { title: "Project consultation", text: "Feasibility, budget, and bid reviews from experienced builders.", href: "/services/project-consultation" },
];

export const locationPages: LocationPageData[] = [
  {
    city: "Frisco",
    path: "/general-contractor-in-frisco",
    linkLabel: "General Contractor in Frisco",
    eyebrow: "FRISCO, TX",
    h1: "General Contractor in Frisco, TX",
    seoTitle: "General Contractor in Frisco, TX",
    seoDescription:
      "Correa General Contractors is a general contractor serving Frisco, TX for commercial build-outs, tenant improvements, custom homes, and design-build projects.",
    heroImage: "/projects/westhouse/2.jpeg",
    answer:
      "Correa General Contractors serves Frisco, TX as a full-service general contractor for commercial tenant improvements, office and retail build-outs, custom homes, and design-build projects. Our Dallas-based team manages permitting with the City of Frisco, subcontractors, inspections, and schedules from start to finish.",
    intro: [
      "Frisco is one of the fastest-growing cities in North Texas, with steady demand for new office, retail, medical, and residential space. Growth brings opportunity, and tight schedules, competitive trades, and busy permit offices.",
      "We help Frisco owners, tenants, and developers plan realistically: early budgets, permit strategy, and procurement plans that keep openings and move-in dates on track.",
    ],
    services: coreServices("Frisco"),
    localNotes: [
      "Permits and inspections coordinated with the City of Frisco",
      "Retail, office, and medical tenant finish-outs",
      "Custom residential and investment properties",
      "Experience with HOA and landlord approval requirements",
    ],
    nearby: ["Plano", "McKinney", "Little Elm", "The Colony", "Prosper"],
    faqs: [
      { question: "Do you work in Frisco, TX?", answer: "Yes. Correa General Contractors serves Frisco and the surrounding Collin and Denton County communities from our Dallas office, providing commercial, residential, design-build, and renovation services." },
      { question: "Who handles permits for my Frisco project?", answer: "We do. We prepare permit submittals, respond to plan-review comments, and schedule inspections with the City of Frisco so approvals stay on schedule. Requirements vary by scope, and we confirm them early." },
      { question: "Can you build out a retail or office space in Frisco?", answer: "Yes. We build tenant improvements for retail, office, and medical tenants, coordinating landlord requirements, MEP work, inspections, and a schedule built backward from your opening date." },
    ],
  },
  {
    city: "Arlington",
    path: "/general-contractor-in-arlington",
    linkLabel: "General Contractor in Arlington",
    eyebrow: "ARLINGTON, TX",
    h1: "General Contractor in Arlington, TX",
    seoTitle: "General Contractor in Arlington, TX",
    seoDescription:
      "Need a general contractor in Arlington, TX? Correa builds commercial build-outs, renovations, custom homes, and multifamily projects with predictable schedules.",
    heroImage: "/projects/westhouse/6.jpeg",
    answer:
      "Correa General Contractors is a general contractor serving Arlington, TX for commercial build-outs, office renovations, custom homes, additions, and multifamily projects. We manage City of Arlington permits, subcontractors, inspections, and budgets with one dedicated project manager.",
    intro: [
      "Located between Dallas and Fort Worth in Tarrant County, Arlington has a diverse mix of commercial corridors, established neighborhoods, and new development. Projects here range from storefront refreshes to new residential construction.",
      "Our team brings the same disciplined planning to every Arlington project: transparent budgets, realistic schedules, and consistent on-site supervision.",
    ],
    services: coreServices("Arlington"),
    localNotes: [
      "Permits and inspections coordinated with the City of Arlington",
      "Commercial build-outs and office renovations",
      "Residential custom homes and additions",
      "Multifamily and investment property construction",
    ],
    nearby: ["Grand Prairie", "Mansfield", "Fort Worth", "Euless", "Irving"],
    faqs: [
      { question: "Do you serve Arlington, TX?", answer: "Yes. Correa General Contractors serves Arlington and surrounding Tarrant County cities from our Dallas office for commercial, residential, renovation, and design-build projects." },
      { question: "Do you remodel older buildings in Arlington?", answer: "Yes. We renovate older homes and commercial buildings, including layout changes and electrical, plumbing, and HVAC upgrades, and we plan contingencies for conditions found behind walls." },
      { question: "How do I start a project in Arlington?", answer: "Call (469) 854-0207 or submit our contact form with your project type, address, and timeline. We will review your scope and schedule a consultation." },
    ],
  },
  {
    city: "Denton",
    path: "/construction-company-in-denton",
    linkLabel: "Construction Company in Denton",
    eyebrow: "DENTON, TX",
    h1: "Construction Company in Denton, TX",
    seoTitle: "Construction Company in Denton, TX",
    seoDescription:
      "Trusted construction company and general contractor in Denton, TX for commercial, residential, design-build, and renovation projects with strong planning.",
    heroImage: "/projects/odessa/2.jpg",
    answer:
      "Correa General Contractors is a construction company and general contractor serving Denton, TX. We build commercial tenant improvements, ground-up commercial and residential projects, and renovations, managing City of Denton permits, trades, and inspections from concept through closeout.",
    intro: [
      "Denton, the county seat of Denton County and home to two major universities, combines a historic downtown with rapid residential and commercial growth along the I-35 corridors.",
      "Whether you are renovating a downtown property, building out a commercial suite, or developing residential units, our team brings local market understanding, disciplined scheduling, and transparent cost control.",
    ],
    services: coreServices("Denton"),
    localNotes: [
      "Permits and inspections coordinated with the City of Denton",
      "Ground-up residential and commercial construction",
      "Tenant improvements and space modernization",
      "Renovation and phased construction management",
    ],
    nearby: ["Corinth", "Lewisville", "Flower Mound", "Argyle", "Sanger"],
    faqs: [
      { question: "Do you build in Denton, TX?", answer: "Yes. Correa General Contractors serves Denton and surrounding Denton County communities for commercial, residential, renovation, and design-build construction." },
      { question: "Can you build student housing or multifamily in Denton?", answer: "Yes. Our portfolio includes multifamily communities such as Westhouse Apartments in Keller and The Cove in Odessa, and we bring that experience to residential and investment projects in Denton." },
      { question: "Do you offer design-build in Denton?", answer: "Yes. Our design-build service puts design and construction under one contract, which helps Denton owners get earlier pricing, faster schedules, and a single accountable team." },
    ],
  },
];

export function getLocationByPath(path: string) {
  const page = locationPages.find((location) => location.path === path);
  if (!page) throw new Error(`Unknown location page: ${path}`);
  return page;
}
