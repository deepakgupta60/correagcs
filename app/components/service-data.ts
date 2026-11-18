import type { Faq } from "../lib/seo";

export type ServiceDetail = {
  slug: string;
  title: string;
  h1: string;
  serviceType: string;
  seoTitle: string;
  seoDescription: string;
  shortDescription: string;
  heroImage: string;
  /** Direct 40–60 word answer shown first on the page (AEO / AI overviews). */
  answer: string;
  intro: string[];
  included: { title: string; text: string }[];
  process: { title: string; text: string }[];
  idealFor: string[];
  faqs: Faq[];
  relatedProjects: string[];
  category: "core" | "market";
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "general-contracting",
    title: "General Contracting",
    h1: "General Contracting Services in Dallas, TX",
    serviceType: "General contracting",
    seoTitle: "General Contracting Services in Dallas, TX",
    seoDescription:
      "Full-service general contracting in Dallas for commercial and residential projects: permits, subcontractor management, scheduling, budget control, and closeout.",
    shortDescription:
      "End-to-end construction management, from permits and procurement to subcontractor coordination, quality control, and closeout.",
    heroImage: "/images/services/general-contracting.webp",
    answer:
      "A general contractor in Dallas manages your entire construction project: pricing the work, pulling permits, hiring and scheduling subcontractors, buying materials, running the jobsite safely, passing inspections, and handing over a finished building. Correa General Contractors provides this for commercial and residential projects across Dallas–Fort Worth.",
    intro: [
      "Correa General Contractors acts as the single accountable party for your project. Instead of coordinating a dozen trades yourself, you work with one dedicated project manager who owns the schedule, the budget, and the quality of the finished work.",
      "With 15+ years of experience and 200+ completed projects across Dallas–Fort Worth, our team knows how local permitting, inspections, trade availability, and North Texas weather affect a schedule, and we plan around them before they become delays.",
    ],
    included: [
      { title: "Estimating & budgeting", text: "Detailed, line-item estimates with clear allowances and contingency so you know where every dollar goes." },
      { title: "Permits & inspections", text: "We prepare submittals, coordinate with the city, and schedule inspections so approvals don't stall the job." },
      { title: "Subcontractor management", text: "We pre-qualify, schedule, and supervise 20+ core trades, from sitework and concrete to MEP and finishes." },
      { title: "Procurement", text: "Long-lead items are identified early and ordered on time to protect the schedule." },
      { title: "Site safety & quality control", text: "Daily supervision, milestone quality checks, and a clean, safe jobsite." },
      { title: "Reporting & closeout", text: "Weekly owner updates, documented change orders, and a complete closeout package with warranties." },
    ],
    process: [
      { title: "Consultation & scope review", text: "We walk the site or review drawings, confirm goals, and define scope." },
      { title: "Estimate & schedule", text: "You receive a transparent estimate and a realistic construction timeline." },
      { title: "Permits & mobilization", text: "Permits are secured, trades are booked, and the site is set up." },
      { title: "Construction & updates", text: "Your project manager runs the build and reports progress every week." },
      { title: "Punch list & handover", text: "Final walkthrough, punch-list completion, and closeout documents." },
    ],
    idealFor: [
      "Commercial tenant improvements and office build-outs",
      "Retail and restaurant finish-outs",
      "Multifamily and residential construction",
      "Owners who want one accountable partner",
    ],
    faqs: [
      { question: "What does a general contractor do in Dallas?", answer: "A general contractor manages the whole build: estimating, permits, hiring and scheduling subcontractors, ordering materials, supervising the jobsite, passing city inspections, and delivering the finished project. You get one point of contact and one party responsible for schedule, cost, and quality." },
      { question: "Do you handle both commercial and residential projects?", answer: "Yes. Correa General Contractors builds commercial projects such as tenant improvements, office, and retail build-outs, as well as residential projects including custom homes, duplexes, and multifamily communities across Dallas–Fort Worth." },
      { question: "Will you pull the building permits?", answer: "Yes. We prepare and submit permit applications, respond to plan-review comments, and schedule all required inspections with the City of Dallas or the city where your project is located." },
      { question: "How do I get an estimate?", answer: "Call (469) 854-0207 or submit the form on our contact page with your project type, location, and timeline. We review the scope and follow up to schedule a consultation and prepare a detailed estimate." },
    ],
    relatedProjects: ["westhouse-apartment", "the-cove-at-odessa", "red-oak-duplex"],
    category: "core",
  },
  {
    slug: "commercial",
    title: "Commercial Construction",
    h1: "Commercial Construction & Tenant Improvements in Dallas",
    serviceType: "Commercial construction",
    seoTitle: "Commercial Contractor in Dallas, TX",
    seoDescription:
      "Commercial general contractor in Dallas for tenant improvements, office and retail build-outs, renovations, and ground-up commercial construction across DFW.",
    shortDescription:
      "Tenant improvements, office and retail build-outs, and ground-up commercial construction delivered on schedule.",
    heroImage: "/images/services/general-contracting.webp",
    answer:
      "Correa General Contractors is a commercial contractor in Dallas that builds tenant improvements (TI), office and retail finish-outs, restaurant spaces, and ground-up commercial buildings. We manage permits, MEP coordination, and phased schedules so your business can open or reopen on time.",
    intro: [
      "Commercial projects live and die by the schedule: a late opening means lost rent and lost revenue. Our team plans commercial work around your move-in or opening date, identifying long-lead equipment, permit requirements, and landlord approvals up front.",
      "We work with business owners, landlords, property managers, developers, and design teams on projects ranging from a single-suite finish-out to multi-phase construction in occupied buildings.",
    ],
    included: [
      { title: "Tenant improvements (TI)", text: "Finish-outs for office, medical, retail, and restaurant tenants, including demising walls, ceilings, MEP, and finishes." },
      { title: "Office build-outs", text: "Open offices, private offices, conference rooms, and break areas built to your layout and brand." },
      { title: "Retail & restaurant spaces", text: "Storefronts, sales floors, and kitchens coordinated with your opening date." },
      { title: "Ground-up commercial", text: "New commercial buildings from site preparation through certificate of occupancy." },
      { title: "Renovations in occupied buildings", text: "Phased work, after-hours scheduling, and dust and noise control so operations continue." },
      { title: "Code & permit coordination", text: "Accessibility, life-safety, and permit requirements addressed before construction starts." },
    ],
    process: [
      { title: "Site & lease review", text: "We review the space, the drawings, and landlord work-letter requirements." },
      { title: "Budget & schedule", text: "Line-item pricing and a schedule built backward from your opening date." },
      { title: "Permitting", text: "Permit submittal, plan-review responses, and landlord approvals." },
      { title: "Build-out", text: "Trade coordination, MEP rough-in, inspections, and finishes." },
      { title: "Certificate of occupancy", text: "Final inspections, punch list, and handover so you can open." },
    ],
    idealFor: [
      "Businesses moving into or expanding a lease space",
      "Landlords preparing vacant suites",
      "Developers building new commercial properties",
      "Owners renovating occupied buildings",
    ],
    faqs: [
      { question: "What is a commercial tenant improvement?", answer: "A tenant improvement (TI), also called a finish-out or build-out, is construction work that customizes a leased commercial space for a specific tenant, such as walls, ceilings, lighting, HVAC, plumbing, flooring, and finishes. It is often partly funded by a landlord TI allowance." },
      { question: "How long does a commercial build-out take in Dallas?", answer: "It depends on the size of the space, the complexity of mechanical and electrical work, permit review times, and lead times on equipment. Smaller office finish-outs move faster than restaurants or medical spaces. We provide a project-specific schedule after reviewing your drawings." },
      { question: "Can you work while our business stays open?", answer: "Yes. We regularly phase commercial renovations, schedule noisy work after hours, and use dust and safety barriers so your staff and customers can keep using the building during construction." },
      { question: "Do you work with our architect?", answer: "Yes. We can build from your architect's construction documents, or provide design-build services where we bring the design team and builder together under one contract." },
    ],
    relatedProjects: ["westhouse-apartment", "the-cove-at-odessa"],
    category: "market",
  },
  {
    slug: "residential",
    title: "Residential Construction",
    h1: "Residential Construction & Custom Homes in Dallas–Fort Worth",
    serviceType: "Residential construction",
    seoTitle: "Custom Home & Residential Builder in Dallas",
    seoDescription:
      "Residential general contractor in Dallas–Fort Worth for custom homes, duplexes, multifamily, additions, and whole-home remodels with transparent pricing.",
    shortDescription:
      "Custom homes, duplexes, multifamily communities, additions, and whole-home remodels across Dallas–Fort Worth.",
    heroImage: "/projects/redoak/red-oak.webp",
    answer:
      "Correa General Contractors builds custom homes, duplexes, multifamily communities, home additions, and whole-home remodels across Dallas–Fort Worth. We manage design coordination, permits, trades, and inspections, with a dedicated project manager and weekly updates from groundbreaking to move-in.",
    intro: [
      "Building or remodeling a home is one of the largest investments you will make. Our residential process is built around clear pricing, realistic schedules, and frequent communication, so you always know what is happening on site and what decisions are coming next.",
      "Our residential portfolio ranges from contemporary duplexes such as the Red Oak Duplex to large multifamily communities like Westhouse Apartments in Keller and The Cove in Odessa.",
    ],
    included: [
      { title: "Custom homes", text: "Ground-up homes built to your plans, lot, and finish selections." },
      { title: "Duplexes & multifamily", text: "Investment and rental properties from duplexes to multi-building communities." },
      { title: "Additions", text: "Room additions and second stories that tie in cleanly with the existing structure." },
      { title: "Whole-home remodels", text: "Kitchens, baths, layouts, and system upgrades in one coordinated project." },
      { title: "Exterior & masonry", text: "Brick, stone, and exterior upgrades that improve curb appeal and durability." },
      { title: "Energy-efficient building", text: "Insulation, windows, and systems selected for North Texas heat." },
    ],
    process: [
      { title: "Discovery", text: "We discuss your goals, budget, lot, and timeline." },
      { title: "Design & selections", text: "Plans are finalized and finishes selected with clear allowances." },
      { title: "Pricing & contract", text: "A detailed estimate and schedule before any work begins." },
      { title: "Construction", text: "Supervised trades, inspections, and weekly progress updates." },
      { title: "Walkthrough & warranty", text: "Final walkthrough, punch list, and post-move-in support." },
    ],
    idealFor: [
      "Homeowners building a custom home",
      "Investors building duplexes or multifamily",
      "Families adding space or remodeling",
      "Developers needing a reliable residential builder",
    ],
    faqs: [
      { question: "Do you build custom homes in Dallas?", answer: "Yes. Correa General Contractors builds custom homes and duplexes across Dallas–Fort Worth, either from your architect's plans or through our design-build process, and manages permits, trades, inspections, and final walkthrough." },
      { question: "Do you build multifamily projects?", answer: "Yes. Our portfolio includes multifamily communities such as Westhouse Apartments in Keller, TX and The Cove in Odessa, TX, as well as smaller duplex projects like the Red Oak Duplex." },
      { question: "How is residential pricing structured?", answer: "We provide a detailed estimate with defined allowances for finishes and a contingency strategy, then document any change orders in writing before the work is done, so there are no surprises at the end." },
    ],
    relatedProjects: ["red-oak-duplex", "westhouse-apartment", "the-cove-at-odessa"],
    category: "market",
  },
  {
    slug: "design-build",
    title: "Design-Build",
    h1: "Design-Build Contractor in Dallas, TX",
    serviceType: "Design-build construction",
    seoTitle: "Design-Build Contractor in Dallas, TX",
    seoDescription:
      "Design-build construction in Dallas: one contract and one accountable team for design, engineering, permitting, and construction, with faster delivery and fewer surprises.",
    shortDescription:
      "One contract and one accountable team for design and construction, with faster delivery and fewer change orders.",
    heroImage: "/images/services/design-build.webp",
    answer:
      "Design-build is a project delivery method where one company is responsible for both design and construction under a single contract. With Correa General Contractors as your Dallas design-build contractor, designers and builders work together from day one, which typically shortens schedules, improves cost certainty, and reduces change orders.",
    intro: [
      "In traditional design-bid-build, the owner hires an architect, finishes the drawings, and only then gets builder pricing, often discovering the design is over budget. Design-build puts the builder at the table from the start, so cost and constructability shape the design instead of surprising you later.",
      "Our design-build team coordinates architects, engineers, and trades under one contract, giving you a single point of responsibility for the finished project.",
    ],
    included: [
      { title: "Programming & feasibility", text: "We define what you need and confirm it fits your site, code, and budget." },
      { title: "Design coordination", text: "Architectural and engineering design managed alongside live cost feedback." },
      { title: "Value engineering", text: "Alternatives that keep the design intent while lowering cost." },
      { title: "Early procurement", text: "Long-lead items released early to compress the schedule." },
      { title: "Permitting", text: "Permit documents prepared and managed by the same team." },
      { title: "Construction", text: "The team that designed it builds it, with no hand-off gaps." },
    ],
    process: [
      { title: "Discovery", text: "Goals, budget, site, and schedule defined." },
      { title: "Concept & budget", text: "Concept design with a target budget." },
      { title: "Design development", text: "Detailed design with ongoing cost checks." },
      { title: "Permit & procure", text: "Permit submittal and early material orders." },
      { title: "Build & deliver", text: "Construction, inspections, and handover." },
    ],
    idealFor: [
      "Owners who want speed and cost certainty",
      "Commercial build-outs with tight opening dates",
      "Custom homes where budget must guide design",
      "Owners who prefer a single point of responsibility",
    ],
    faqs: [
      { question: "What is the difference between design-build and design-bid-build?", answer: "In design-bid-build, design is completed first and then bid to contractors, so the owner manages two separate contracts. In design-build, one company handles design and construction under one contract, allowing overlapping phases, earlier pricing, and a single accountable party." },
      { question: "Is design-build faster?", answer: "Often, yes. Because design and construction planning overlap, permits can be pursued and long-lead materials ordered while design is being finalized, which can shorten the overall timeline compared with completing design before bidding." },
      { question: "Does design-build cost more?", answer: "Not necessarily. Builder input during design helps avoid over-budget designs and redesign, and value engineering happens before drawings are final. Many owners find design-build gives better cost certainty earlier in the process." },
    ],
    relatedProjects: ["red-oak-duplex"],
    category: "core",
  },
  {
    slug: "renovation-remodeling",
    title: "Renovation & Remodeling",
    h1: "Renovation & Remodeling Contractor in Dallas",
    serviceType: "Renovation and remodeling",
    seoTitle: "Remodeling Contractor in Dallas, TX",
    seoDescription:
      "Renovation and remodeling in Dallas for homes and commercial spaces: layout changes, structural and MEP upgrades, interior refreshes, and exterior improvements.",
    shortDescription:
      "Transform outdated homes and commercial spaces with layout changes, system upgrades, and modern finishes.",
    heroImage: "/images/services/renovation-remodeling.webp",
    answer:
      "Correa General Contractors renovates and remodels homes and commercial spaces in Dallas, from interior refreshes to full gut renovations with structural, plumbing, electrical, and HVAC upgrades. We handle permits, protect occupied areas, and phase the work to minimize disruption.",
    intro: [
      "Renovation is more complex than new construction: existing conditions behind walls, older systems, and occupied spaces all add risk. We investigate existing conditions early, price contingencies honestly, and plan the work so you can keep living or operating where possible.",
      "Whether you are modernizing an office, refreshing a retail space, or remodeling a home, you get the same disciplined planning and communication we bring to new construction.",
    ],
    included: [
      { title: "Interior remodels", text: "Kitchens, bathrooms, offices, and common areas updated with modern finishes." },
      { title: "Layout changes", text: "Walls moved or removed with proper structural engineering." },
      { title: "MEP modernization", text: "Electrical, plumbing, and HVAC upgrades to current code." },
      { title: "Structural upgrades", text: "Repairs and reinforcement coordinated with engineers." },
      { title: "Exterior improvements", text: "Masonry, siding, windows, and facade upgrades." },
      { title: "Occupied-space phasing", text: "Dust control, protection, and scheduling around your use." },
    ],
    process: [
      { title: "Site assessment", text: "We evaluate existing conditions and discuss goals." },
      { title: "Scope & estimate", text: "A clear scope, pricing, and contingency plan." },
      { title: "Permits & planning", text: "Permits secured and phasing plan agreed." },
      { title: "Renovation", text: "Demolition, rough-in, inspections, and finishes." },
      { title: "Final walkthrough", text: "Punch list completed and space returned to use." },
    ],
    idealFor: [
      "Homeowners updating kitchens, baths, or layouts",
      "Businesses refreshing offices or storefronts",
      "Landlords upgrading units between tenants",
      "Older buildings needing system upgrades",
    ],
    faqs: [
      { question: "Do I need a permit to remodel in Dallas?", answer: "Many remodels require a permit, especially work involving structural changes, electrical, plumbing, or mechanical systems. Requirements vary by scope, so confirm with the City of Dallas Development Services Department. We determine and obtain required permits for every project we build." },
      { question: "Can you renovate while we live or work in the space?", answer: "Often, yes. We phase work, isolate work areas with dust barriers, and schedule disruptive tasks to reduce the impact on occupants, though some scopes require temporarily vacating part of the space." },
      { question: "What if you find problems behind the walls?", answer: "We plan for it. Our estimates include a contingency strategy, and if hidden conditions are discovered we document them, explain the options and costs, and get your written approval before proceeding." },
    ],
    relatedProjects: ["red-oak-duplex"],
    category: "core",
  },
  {
    slug: "pre-construction-planning",
    title: "Pre-Construction Planning",
    h1: "Pre-Construction Planning & Estimating in Dallas",
    serviceType: "Pre-construction services",
    seoTitle: "Pre-Construction Services in Dallas, TX",
    seoDescription:
      "Pre-construction services in Dallas: budgeting, estimating, scheduling, constructability review, permit strategy, and procurement planning before you build.",
    shortDescription:
      "Budgeting, scheduling, permit strategy, and procurement planning that de-risk your project before construction starts.",
    heroImage: "/images/services/pre-construction-planning.webp",
    answer:
      "Pre-construction is the planning phase before building begins: defining scope, estimating cost, building a schedule, reviewing drawings for constructability, planning permits, and ordering long-lead materials. Correa General Contractors provides pre-construction services in Dallas so owners start construction with a reliable budget and timeline.",
    intro: [
      "Most cost overruns and delays are set in motion before the first shovel hits the ground: an incomplete scope, an unrealistic schedule, or a long-lead item nobody ordered. Pre-construction is where those risks are found and fixed cheaply.",
      "Our team reviews your drawings and goals, prices the work in detail, and builds a schedule that accounts for permitting, procurement, and trade availability in Dallas–Fort Worth.",
    ],
    included: [
      { title: "Conceptual & detailed estimates", text: "Budgets at every design stage, from concept to construction documents." },
      { title: "Constructability review", text: "Drawings checked for conflicts, gaps, and cost-saving alternatives." },
      { title: "Master schedule", text: "A realistic timeline including permits, procurement, and inspections." },
      { title: "Permit strategy", text: "Requirements identified and submittals planned early." },
      { title: "Procurement planning", text: "Long-lead equipment and materials identified and sequenced." },
      { title: "Risk register", text: "Site, weather, utility, and approval risks documented with mitigation plans." },
    ],
    process: [
      { title: "Document review", text: "Drawings, site info, and goals reviewed." },
      { title: "Budget", text: "Detailed estimate with allowances and contingency." },
      { title: "Schedule", text: "Critical path schedule built with lead times." },
      { title: "Risk & value review", text: "Risks mitigated and value options presented." },
      { title: "Ready to build", text: "Clear go/no-go decision with a reliable plan." },
    ],
    idealFor: [
      "Owners securing financing or approvals",
      "Projects with tight budgets or deadlines",
      "Developers comparing sites or concepts",
      "Teams wanting builder input during design",
    ],
    faqs: [
      { question: "What are pre-construction services?", answer: "Pre-construction services are the planning work a contractor performs before construction: scope definition, cost estimating, scheduling, constructability review, permit planning, procurement of long-lead items, and risk assessment. They give owners a reliable budget and timeline before committing to build." },
      { question: "Why is pre-construction important?", answer: "Changes are cheapest on paper. Finding scope gaps, design conflicts, and long-lead items during pre-construction prevents change orders and delays during construction, when fixes cost far more." },
      { question: "Can I hire you for pre-construction only?", answer: "Yes. Some owners engage us for budgeting and planning first, then decide on construction. Contact us to discuss a pre-construction agreement for your project." },
    ],
    relatedProjects: ["westhouse-apartment"],
    category: "core",
  },
  {
    slug: "project-consultation",
    title: "Project Consultation",
    h1: "Construction Project Consultation in Dallas",
    serviceType: "Construction consulting",
    seoTitle: "Construction Consulting in Dallas, TX",
    seoDescription:
      "Construction project consultation in Dallas: feasibility studies, budget and schedule reviews, contractor strategy, and risk mitigation from experienced builders.",
    shortDescription:
      "Expert guidance on feasibility, budgets, schedules, contractor strategy, and risk before you commit.",
    heroImage: "/images/services/project-consultation.webp",
    answer:
      "Construction project consultation gives owners an experienced builder's opinion before they commit money: is the project feasible, is the budget realistic, is the schedule achievable, and what are the risks? Correa General Contractors offers project consultation in Dallas for commercial and residential owners, investors, and developers.",
    intro: [
      "Not every project is ready for a construction contract. Sometimes you need an honest, experienced view of whether a site, budget, or design will work, and what it will really take to build it.",
      "Our consultations draw on 15+ years of building in Dallas–Fort Worth to help you make confident decisions early, when they cost the least.",
    ],
    included: [
      { title: "Feasibility review", text: "Site, scope, and budget checked for real-world buildability." },
      { title: "Budget benchmarking", text: "Your budget compared against current construction costs." },
      { title: "Schedule review", text: "Timelines checked against permitting and procurement realities." },
      { title: "Contractor & delivery strategy", text: "Guidance on design-build, bidding, and contract types." },
      { title: "Bid review", text: "Help comparing contractor proposals on scope, not just price." },
      { title: "Risk assessment", text: "A roadmap of risks with practical mitigation steps." },
    ],
    process: [
      { title: "Intake call", text: "We learn about your project and questions." },
      { title: "Document review", text: "We review plans, budgets, or bids you have." },
      { title: "Site visit", text: "If needed, we walk the property." },
      { title: "Recommendations", text: "Clear, written findings and next steps." },
    ],
    idealFor: [
      "Investors evaluating a property",
      "Owners with plans but no contractor yet",
      "Owners comparing multiple bids",
      "Projects that have stalled or gone over budget",
    ],
    faqs: [
      { question: "What is construction project consultation?", answer: "It is expert advice from an experienced builder before or during a project, covering feasibility, budget realism, schedule, contractor selection, and risk, so owners can make informed decisions before committing to a construction contract." },
      { question: "Can you review bids from other contractors?", answer: "Yes. We help owners compare bids line by line, identify scope gaps or exclusions, and understand why prices differ, so you choose based on value and completeness, not just the lowest number." },
      { question: "Is consultation available for small projects?", answer: "Yes. Consultation is useful for projects of any size. Contact us with a brief description and we will recommend the right level of review." },
    ],
    relatedProjects: [],
    category: "core",
  },
];

export function getServiceBySlug(slug: string) {
  return serviceDetails.find((service) => service.slug === slug);
}
