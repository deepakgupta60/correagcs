export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  seoTitle: string;
  seoDescription: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "construction-budget-planning-guide",
    title: "How to Plan a Construction Budget Without Surprises",
    excerpt:
      "Learn how to structure your budget for design, procurement, labor, contingencies, and closeout with confidence.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
    date: "May 2026",
    seoTitle: "Construction Budget Planning Guide | Correa Blog",
    seoDescription:
      "A practical guide to planning construction budgets with clear cost buckets, contingency strategy, and milestone controls.",
    content: [
      "A reliable construction budget starts with clear scope definition. Without scope clarity, estimates remain unstable and change orders become frequent.",
      "Break your budget into core buckets: design and permitting, civil or structural work, MEP, finishes, labor, supervision, and compliance. Allocate contingency based on project complexity.",
      "Use milestone-based reviews before procurement, midway execution, and pre-handover. These checkpoints reduce surprise costs and improve decision speed.",
      "At Correa General Contractors, we recommend budget dashboards shared with owners weekly so project visibility remains high across teams.",
    ],
  },
  {
    slug: "residential-vs-commercial-construction-timelines",
    title: "Residential vs Commercial Timelines: What Changes?",
    excerpt:
      "Compare permit windows, lead times, and trade sequencing so your schedule assumptions stay realistic.",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80",
    date: "May 2026",
    seoTitle: "Residential vs Commercial Construction Timelines",
    seoDescription:
      "Understand key timeline differences between residential and commercial construction projects, from approvals to execution.",
    content: [
      "Residential projects generally move faster through design iterations but can slow down due to client-side scope changes.",
      "Commercial projects often require deeper documentation, stricter compliance checks, and longer procurement windows for specialized systems.",
      "Trade sequencing also differs. Commercial projects usually run with tighter interdependencies across MEP, interiors, and external works.",
      "Successful scheduling in both categories depends on realistic lead-time assumptions and consistent coordination meetings.",
    ],
  },
  {
    slug: "pre-construction-checklist-dallas-owners",
    title: "Pre-Construction Checklist for Dallas Project Owners",
    excerpt:
      "A practical checklist for approvals, scope, risk review, and vendor strategy before construction starts.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    date: "April 2026",
    seoTitle: "Pre-Construction Checklist for Dallas Owners",
    seoDescription:
      "Use this pre-construction checklist to prepare permits, scope clarity, vendor strategy, and risk planning in Dallas projects.",
    content: [
      "Confirm land-use and permit requirements early. Local compliance delays can impact your schedule more than on-site execution issues.",
      "Freeze scope and priority outcomes. Define must-have versus optional elements before final procurement.",
      "Run a risk review for utility conflicts, lead items, weather, and approval dependencies. Plan mitigation in writing.",
      "A complete pre-construction workflow improves quality, cost control, and confidence for all stakeholders.",
    ],
  },
  {
    slug: "how-to-select-the-right-general-contractor",
    title: "How to Select the Right General Contractor",
    excerpt:
      "Use this qualification framework to evaluate communication, planning quality, and project delivery discipline.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80",
    date: "April 2026",
    seoTitle: "How to Select the Right General Contractor",
    seoDescription:
      "A practical framework to choose the right general contractor based on planning process, communication quality, and execution standards.",
    content: [
      "Do not select only on lowest bid. Evaluate pre-construction approach, communication cadence, and issue-resolution process.",
      "Review past projects similar in scale and complexity. Ask for references focused on schedule reliability and transparency.",
      "Check how the contractor manages subcontractors, quality inspections, and change-order documentation.",
      "The right partner provides clarity before construction starts and keeps delivery predictable throughout execution.",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
