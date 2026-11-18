export type BlogSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type BlogFaq = { question: string; answer: string };
export type BlogPost = {
  slug: string;
  title: string; // H1
  excerpt: string; // 1-2 sentences
  image: string;
  imageAlt: string;
  publishedAt: string; // ISO "YYYY-MM-DD"
  updatedAt: string; // ISO "YYYY-MM-DD"
  readMinutes: number;
  seoTitle: string; // <= 58 chars, no brand suffix
  seoDescription: string; // 140-158 chars
  keyTakeaways: string[];
  sections: BlogSection[];
  faqs: BlogFaq[];
  relatedServices: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "dallas-building-permit-process-guide",
    title: "The Dallas Building Permit Process: What Owners Should Expect",
    excerpt:
      "A plain-English overview of how building permits generally work in Dallas, from drawings and plan review to inspections and final sign-off, and how to keep permitting from stalling your schedule.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
    imageAlt:
      "Construction workers reviewing plans on an active Dallas building site before a scheduled inspection",
    publishedAt: "2026-11-10",
    updatedAt: "2026-11-18",
    readMinutes: 6,
    seoTitle: "Dallas Building Permit Process: An Owner's Guide",
    seoDescription:
      "What to expect from the Dallas building permit process: drawings, plan review, revisions, inspections, and final approval, plus tips to avoid common delays.",
    keyTakeaways: [
      "Most new construction, additions, structural changes, and many commercial interior build-outs in Dallas require a building permit before work begins.",
      "The typical sequence is: prepare drawings, confirm zoning, submit for plan review, respond to comments, receive the permit, pass inspections, and obtain final approval or a certificate of occupancy.",
      "Review times, fees, and submittal requirements change, so confirm current rules directly with the City of Dallas Development Services Department.",
      "Complete, coordinated drawings are the single biggest factor an owner can control to reduce permitting delays.",
    ],
    sections: [
      {
        heading: "When do you need a building permit in Dallas?",
        paragraphs: [
          "As a general rule, work that changes a building's structure, use, footprint, or life-safety systems needs a permit. That usually includes new buildings, additions, structural alterations, commercial tenant finish-outs, changes of occupancy, and most electrical, plumbing, and mechanical work beyond simple repairs. Purely cosmetic work such as painting or replacing finishes often does not, but the line is not always obvious.",
          "Because the exact list of permitted and exempt work is set by the city and updated over time, the safest approach is to check with the City of Dallas Development Services Department before you finalize scope. If your project is in Frisco, Plano, Irving, Arlington, Fort Worth, McKinney, Denton, or another DFW city, each has its own building department and its own requirements.",
        ],
      },
      {
        heading: "What are the main steps in the permit process?",
        paragraphs: [
          "While details differ by project type, most Dallas permits follow a similar path. Understanding the sequence helps you plan your schedule realistically instead of assuming permits will appear on a fixed date.",
        ],
        bullets: [
          "Due diligence: confirm zoning, allowed use, setbacks, parking, and any overlay or historic district requirements for the property.",
          "Drawings: have a design professional prepare plans appropriate to the scope, which for commercial work often means architectural, structural, and MEP drawings.",
          "Submittal: submit the application and drawings through the city's current intake process, typically online.",
          "Plan review: city reviewers check the plans against adopted building, fire, energy, and accessibility codes.",
          "Comments and resubmittal: reviewers may return comments that the design team must address before approval.",
          "Permit issuance: once approved and fees are paid, the permit is issued and work can begin.",
          "Inspections: city inspectors visit at defined stages, such as foundation, framing, rough-in, and final.",
          "Final approval: the project passes final inspection and, where required, receives a certificate of occupancy.",
        ],
      },
      {
        heading: "How long does a Dallas building permit take?",
        paragraphs: [
          "There is no single answer. Review time depends on the project's size and complexity, how complete the submittal is, how many review disciplines are involved, how many rounds of comments are needed, and the city's workload at the time. A simple residential permit and a multi-tenant commercial building are on very different tracks.",
          "Rather than relying on a number you heard from a neighbor or found online, ask the Development Services Department about current review expectations for your project type, and build a buffer into your schedule. Your general contractor should treat permitting as a tracked schedule item with its own milestones, not an afterthought.",
        ],
      },
      {
        heading: "What causes permit delays, and how can owners avoid them?",
        paragraphs: [
          "Most delays are not caused by the city being slow. They come from incomplete or uncoordinated submittals that trigger extra review cycles. Each resubmittal adds time, so getting the first submittal right pays off.",
        ],
        bullets: [
          "Missing drawings or details that reviewers need to verify code compliance.",
          "Conflicts between architectural, structural, and MEP sheets.",
          "Zoning or use questions that were not resolved before design was finished.",
          "Accessibility gaps, especially in commercial and multifamily work.",
          "Scope changes made after submittal that require revised drawings.",
          "Slow responses to reviewer comments from the design team.",
        ],
      },
      {
        heading: "What happens during inspections?",
        paragraphs: [
          "Inspections confirm that the work built in the field matches the approved plans and code. They happen in a defined order, and later work usually cannot be covered up until earlier inspections pass. For example, wall cavities are inspected before insulation and drywall go in.",
          "A failed inspection means correcting the work and scheduling a re-inspection, which can ripple through the schedule. Experienced contractors reduce this risk with their own internal quality checks before calling for a city inspection. Commercial projects may also involve fire department inspections and, in Texas, accessibility review under the Texas Accessibility Standards depending on the project; ask your design team which apply to you.",
        ],
      },
      {
        heading: "How does a general contractor help with permitting?",
        paragraphs: [
          "A good general contractor in Dallas coordinates the permit process alongside the design team: reviewing drawings for constructability and completeness before submittal, tracking review status, helping answer comments, scheduling inspections, and keeping the owner informed. Trade permits for electrical, plumbing, and mechanical work are typically pulled by the licensed trade contractors themselves.",
          "At Correa General Contractors, we treat permitting as part of pre-construction planning, so approvals, procurement, and mobilization are sequenced together. That way an approved permit leads directly into productive work rather than a scramble to line up crews and materials.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need a permit for a commercial interior remodel in Dallas?",
        answer:
          "In most cases, yes. Commercial interior remodels and tenant finish-outs that change walls, layout, exits, or electrical, plumbing, or mechanical systems generally require a building permit in Dallas. Purely cosmetic updates may not. Because requirements change and depend on scope and occupancy, confirm with the City of Dallas Development Services Department before starting work.",
      },
      {
        question: "Who pulls the building permit, the owner or the contractor?",
        answer:
          "On most commercial and many residential projects, the general contractor applies for the building permit on the owner's behalf, while licensed electrical, plumbing, and mechanical contractors pull their own trade permits. Some owner-builder situations allow homeowners to pull permits themselves. Check the city's current rules, and make sure your contract clearly states who is responsible for permits.",
      },
      {
        question: "How can I speed up my Dallas permit approval?",
        answer:
          "Submit complete, coordinated drawings the first time. Confirm zoning and use before design is finished, have your contractor review plans for gaps before submittal, respond quickly and thoroughly to reviewer comments, and avoid changing scope mid-review. These steps reduce resubmittal cycles, which are the most common source of permitting delays for owners.",
      },
      {
        question: "What is a certificate of occupancy?",
        answer:
          "A certificate of occupancy is the city's approval that a building or space is suitable for its intended use after passing required inspections. It is commonly needed for new commercial buildings, tenant spaces, and changes of use before the space can be legally occupied. Whether your project needs one depends on scope, so verify with your local building department.",
      },
    ],
    relatedServices: ["pre-construction-planning", "general-contracting", "commercial"],
  },
  {
    slug: "design-build-vs-design-bid-build",
    title: "Design-Build vs Design-Bid-Build: Which Is Right for Your DFW Project?",
    excerpt:
      "Compare the two most common project delivery methods for Dallas-Fort Worth owners, including how each affects cost certainty, schedule, risk, and your level of control.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    imageAlt:
      "Architectural drawings and drafting tools on a table during a design-build planning session",
    publishedAt: "2026-10-22",
    updatedAt: "2026-11-18",
    readMinutes: 6,
    seoTitle: "Design-Build vs Design-Bid-Build for DFW Owners",
    seoDescription:
      "Design-build vs design-bid-build compared for Dallas-Fort Worth owners: how each method affects cost, schedule, risk, and control, and how to choose.",
    keyTakeaways: [
      "In design-build, one team is responsible for both design and construction under a single contract; in design-bid-build, the owner hires a designer first and then bids the finished drawings to contractors.",
      "Design-build usually allows overlapping design and construction, which can shorten overall schedules and reduce disputes between designer and builder.",
      "Design-bid-build gives owners a competitive price on a completed design and more direct control over design decisions, but typically takes longer.",
      "The right choice depends on your priorities for speed, cost certainty, design control, and how defined your scope is at the start.",
    ],
    sections: [
      {
        heading: "What is design-build?",
        paragraphs: [
          "Design-build is a project delivery method where the owner contracts with a single entity that handles both design and construction. The design professionals and the builder work as one team from the start, so cost, constructability, and schedule are considered while the design is still being developed.",
          "Because there is one point of responsibility, the owner does not have to referee disagreements between an architect and a contractor. If a drawing has a gap or an error, it is the design-build team's job to resolve it.",
        ],
      },
      {
        heading: "What is design-bid-build?",
        paragraphs: [
          "Design-bid-build is the traditional approach. The owner first hires an architect or engineer to complete the design. The finished construction documents are then put out to bid, and the owner signs a separate contract with the selected general contractor to build it.",
          "This method is familiar, well understood, and common for public projects. It gives owners a clear, competitive comparison of prices on the same set of drawings. The trade-off is that the phases happen in sequence, and the builder has little input on the design before it is finalized.",
        ],
      },
      {
        heading: "How do the two methods compare?",
        paragraphs: [
          "Neither method is better in every case. The differences show up in a few predictable areas that matter to most Dallas-Fort Worth owners.",
        ],
        bullets: [
          "Contracts: design-build uses one contract for design and construction; design-bid-build uses separate contracts for designer and contractor.",
          "Schedule: design-build can overlap design, permitting, and early construction; design-bid-build completes design before bidding and building.",
          "Cost input: design-build brings real-time pricing into design decisions; design-bid-build reveals construction cost after the design is done.",
          "Owner control: design-bid-build gives the owner a designer who works solely for them; in design-build, the owner sets requirements and approves design, but the team is unified.",
          "Responsibility: design-build has a single point of accountability; design-bid-build can lead to disputes over whether a problem is a design issue or a construction issue.",
          "Price competition: design-bid-build compares bids on identical drawings; design-build usually selects a team based on qualifications, approach, and preliminary pricing.",
        ],
      },
      {
        heading: "When does design-build make sense?",
        paragraphs: [
          "Design-build tends to work well when speed matters, when the owner wants budget feedback throughout design, and when the owner prefers one accountable partner. In DFW, that often includes tenant improvements with lease-driven deadlines, owner-occupied office and retail buildings, light commercial projects, and custom residential work where the owner values a coordinated process.",
          "It is also a strong fit when the scope is still evolving. Because the builder is involved early, the team can test options against real costs and lead times before committing to a design that may be over budget.",
          "Owners choosing design-build should still define their requirements clearly at the outset: program, quality expectations, budget range, and key dates. A written set of owner requirements gives the design-build team a target and gives the owner a benchmark for approving each design milestone.",
        ],
      },
      {
        heading: "When is design-bid-build a better fit?",
        paragraphs: [
          "Design-bid-build is often preferred when an owner wants maximum control over design details, already has a trusted architect, or is required to use competitive bidding, as many public entities are. It can also suit projects where the scope is well defined and the schedule has room for sequential phases.",
          "The key risk to manage is the gap between design intent and construction cost. If bids come in over budget, the owner may need to redesign and rebid, which costs time. Bringing in a contractor for pre-construction review before bidding can help reduce that risk.",
        ],
      },
      {
        heading: "How should DFW owners choose a delivery method?",
        paragraphs: [
          "Start with your priorities. Rank speed, cost certainty, design control, and simplicity of management. Then consider how well defined your scope is and whether any funding or procurement rules require competitive bids.",
          "Correa General Contractors works under both models. We offer design-build for owners who want one coordinated team, and we also build from owner-provided drawings as a general contractor. Either way, involving a contractor during pre-construction planning tends to improve budget accuracy and schedule reliability.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is design-build cheaper than design-bid-build?",
        answer:
          "Not automatically. Design-build can reduce total project cost by catching budget and constructability issues during design and shortening the schedule, but design-bid-build provides direct price competition on a finished design. The real cost difference depends on scope clarity, market conditions, and how well each process is managed. Compare total cost and time, not just the construction price.",
      },
      {
        question: "Is design-build faster?",
        answer:
          "Often, yes. Because one team manages design and construction together, early work like site preparation, permitting, and long-lead procurement can begin before every drawing is finished. Design-bid-build completes design and bidding first, so phases run in sequence. Actual time savings depend on the project, permit timelines, and how quickly the owner makes decisions.",
      },
      {
        question: "Do I lose control of the design with design-build?",
        answer:
          "Not if the process is set up well. In design-build, the owner defines requirements, budget, and priorities, and approves design milestones. What changes is that the designer and builder work for one contract instead of two. Owners who want an independent design advocate sometimes hire their own consultant to review submittals on their behalf.",
      },
      {
        question: "Which delivery method is best for a Dallas tenant improvement?",
        answer:
          "Many Dallas tenant improvement projects suit design-build because lease dates create firm deadlines and early cost feedback helps tenants stay within their improvement allowance. However, if the landlord requires a specific architect or competitive bids, design-bid-build may be the better path. Review your lease requirements before choosing a delivery method.",
      },
    ],
    relatedServices: ["design-build", "general-contracting", "pre-construction-planning"],
  },
  {
    slug: "commercial-tenant-improvement-dallas-guide",
    title: "Commercial Tenant Improvements in Dallas: A Step-by-Step Guide",
    excerpt:
      "How the commercial tenant improvement (TI) and finish-out process works in Dallas, from lease review and space planning to permits, construction, and move-in.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    imageAlt:
      "Newly finished open-plan office interior after a commercial tenant improvement build-out",
    publishedAt: "2026-10-06",
    updatedAt: "2026-11-18",
    readMinutes: 6,
    seoTitle: "Commercial Tenant Improvement in Dallas: TI Guide",
    seoDescription:
      "A step-by-step guide to commercial tenant improvements in Dallas: lease terms, TI allowances, space planning, permits, construction, and a smooth move-in.",
    keyTakeaways: [
      "A tenant improvement (TI), also called a finish-out or build-out, is construction that customizes a commercial space for a specific tenant's use.",
      "Review the lease work letter first: it defines the TI allowance, who manages construction, landlord approvals, and building rules.",
      "The typical TI sequence is lease review, site survey, space planning, design and pricing, permitting, construction, inspections, and move-in.",
      "Most TI delays come from late decisions, long-lead items, and incomplete permit drawings, not the construction work itself.",
    ],
    sections: [
      {
        heading: "What is a commercial tenant improvement?",
        paragraphs: [
          "A tenant improvement is the interior construction needed to make a leased commercial space work for a particular business. It can range from new paint, flooring, and lighting in a second-generation office to a full build-out of a raw shell space with new walls, ceilings, restrooms, HVAC distribution, and electrical service.",
          "In Dallas and across DFW, common TI projects include office build-outs, retail finish-outs, medical and professional suites, restaurants, and light industrial or flex spaces. Each type has different code, systems, and landlord requirements, so the scope should be defined early.",
        ],
      },
      {
        heading: "What should you check in the lease before design starts?",
        paragraphs: [
          "The lease, and especially its work letter or construction exhibit, shapes the whole TI project. Read it with your broker and contractor before committing to a design.",
        ],
        bullets: [
          "TI allowance: how much the landlord contributes, what it can be used for, and how and when it is paid.",
          "Construction management: whether the landlord or the tenant hires and manages the contractor.",
          "Approvals: landlord review of drawings, contractors, and insurance before work begins.",
          "Building standards: required finishes, ceiling systems, lighting, and MEP specifications.",
          "Base building condition: what the landlord delivers, such as HVAC capacity, electrical service, restrooms, and fire sprinkler mains.",
          "Dates: rent commencement, possession, and any penalty or free-rent period tied to completion.",
        ],
      },
      {
        heading: "What are the steps in a Dallas TI project?",
        paragraphs: [
          "Although every space is different, most Dallas TI projects move through the same phases. Owners and tenants who understand the sequence make decisions at the right time and avoid paying for rework.",
        ],
        bullets: [
          "Site survey: verify existing conditions, dimensions, and building systems.",
          "Space planning: test layouts against headcount, workflow, and code requirements like exits and accessibility.",
          "Design and pricing: develop drawings while the contractor provides budget feedback and flags long-lead items.",
          "Permitting: submit permit drawings to the City of Dallas, or the relevant DFW city, and respond to review comments.",
          "Procurement: order doors, hardware, light fixtures, HVAC equipment, and specialty items early.",
          "Construction: demolition, framing, MEP rough-in, inspections, drywall, ceilings, finishes, and fixtures.",
          "Closeout: final inspections, any required certificate of occupancy, punch list, and move-in coordination.",
        ],
      },
      {
        heading: "How long does a tenant finish-out take?",
        paragraphs: [
          "Timelines vary widely with size, complexity, and how much of the space is reused. A light refresh of an existing office is much faster than a restaurant or medical suite in a shell space. Permit review, landlord approvals, and lead times for equipment and materials often affect the schedule more than the construction duration itself.",
          "Because rent commencement is frequently tied to a fixed date, build your schedule backward from move-in and include realistic buffers for permitting and procurement. Confirm current review expectations with the City of Dallas Development Services Department rather than assuming a standard duration.",
        ],
      },
      {
        heading: "What drives tenant improvement costs?",
        paragraphs: [
          "TI costs depend far more on the specifics of the space than on a rule-of-thumb number. The major drivers are the starting condition of the space, the amount of demolition, how much of the existing HVAC, electrical, plumbing, and sprinkler systems can be reused, the number of restrooms and wet areas, finish levels, and specialty requirements such as kitchens, labs, or server rooms.",
          "Two practical ways to control cost are to reuse existing walls and systems where layouts allow, and to get contractor pricing during design instead of after. That lets you compare options while there is still time to change them and keeps the project closer to your TI allowance.",
        ],
      },
      {
        heading: "How do you choose a contractor for a Dallas TI?",
        paragraphs: [
          "Look for a general contractor in Dallas with recent commercial interior experience, a clear process for working with landlords and property managers, and the ability to work in occupied buildings with after-hours or noise restrictions. Ask how they handle permit coordination, long-lead procurement, and closeout documentation the landlord will require.",
          "Correa General Contractors delivers office and retail build-outs and other tenant improvements across Dallas-Fort Worth, often starting with pre-construction planning so pricing, permits, and procurement line up with your lease dates.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is a TI allowance?",
        answer:
          "A TI allowance is money the landlord agrees to contribute toward building out a tenant's space, defined in the lease. It may cover construction, design, and permit costs, depending on the lease terms. Costs above the allowance are usually paid by the tenant. Read the work letter carefully to understand what qualifies and how the allowance is disbursed.",
      },
      {
        question: "Does a tenant finish-out in Dallas require a permit?",
        answer:
          "Most tenant finish-outs that add or move walls, change exits, or alter electrical, plumbing, mechanical, or fire protection systems require a building permit in Dallas. A change in how the space is used may also require a certificate of occupancy. Requirements depend on scope and occupancy, so confirm with the City of Dallas Development Services Department.",
      },
      {
        question: "Who hires the contractor for a tenant improvement?",
        answer:
          "It depends on the lease. In a landlord-managed build-out, the landlord hires the contractor and delivers a finished space. In a tenant-managed build-out, the tenant hires its own contractor, subject to landlord approval, and is reimbursed through the TI allowance. Each approach shifts control, cost risk, and responsibility differently, so negotiate it before signing.",
      },
      {
        question: "How can I avoid delays on a commercial build-out?",
        answer:
          "Involve your contractor before the design is final, make layout and finish decisions on schedule, order long-lead items such as HVAC equipment, light fixtures, and door hardware early, and submit complete permit drawings. Also get landlord approvals and building rules in writing upfront. These steps address the most common causes of tenant improvement delays.",
      },
    ],
    relatedServices: ["commercial", "renovation-remodeling", "pre-construction-planning", "design-build"],
  },
  {
    slug: "construction-budget-planning-guide",
    title: "How to Plan a Construction Budget Without Surprises",
    excerpt:
      "Learn how to structure a construction budget for design, permits, procurement, labor, contingency, and closeout so your Dallas-Fort Worth project stays on track financially.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
    imageAlt:
      "Project owner reviewing a construction budget spreadsheet with a calculator and notes",
    publishedAt: "2026-05-19",
    updatedAt: "2026-11-18",
    readMinutes: 5,
    seoTitle: "Construction Budget Planning Guide for DFW Owners",
    seoDescription:
      "Plan a construction budget without surprises: define scope, organize cost categories, set a contingency, and use milestone reviews to control costs in DFW.",
    keyTakeaways: [
      "A reliable construction budget starts with a clearly defined scope; unclear scope is the leading cause of unstable estimates and change orders.",
      "Organize the budget into hard costs, soft costs, owner costs, and contingency so nothing is left out.",
      "Hold a contingency sized to the project's risk and complexity, and track how it is used.",
      "Review the budget at defined milestones, such as before procurement, during construction, and before handover.",
    ],
    sections: [
      {
        heading: "Why does scope come before the budget?",
        paragraphs: [
          "Every estimate is only as good as the scope behind it. If the scope says 'renovate the office,' every contractor will price a different project. If it lists rooms, finishes, systems, and quality expectations, estimates become comparable and far more reliable.",
          "Before asking for pricing, write down what must be included, what is optional, and what is out of scope. Identify the decisions that are still open, such as finish levels or equipment selections, and assign allowances to them so the budget reflects reality rather than optimism.",
        ],
      },
      {
        heading: "What cost categories should a construction budget include?",
        paragraphs: [
          "Many budgets go wrong because they include only the construction contract. A complete budget captures everything the owner will spend to get from idea to occupancy.",
        ],
        bullets: [
          "Hard costs: site work, foundations, structure, building envelope, MEP systems, interior finishes, and general conditions such as supervision and site management.",
          "Soft costs: architecture and engineering, surveys, geotechnical reports, permits and plan review fees, testing, insurance, and legal.",
          "Owner costs: furniture, fixtures, IT and security systems, signage, moving, and temporary space if needed.",
          "Contingency: a reserve for unknowns, both for design changes and for conditions discovered during construction.",
          "Financing and carrying costs: interest, taxes, and other costs that accrue while the project is underway.",
        ],
      },
      {
        heading: "How much contingency should you carry?",
        paragraphs: [
          "There is no universal percentage. Contingency should reflect risk. A new building on a well-documented site carries different uncertainty than a renovation of an older structure where walls, ceilings, and utilities have not been opened up yet.",
          "In Dallas-Fort Worth, local conditions are worth considering. Expansive clay soils common in the region can influence foundation design, and spring storms and summer heat can affect certain activities. Discuss these risks with your design team and contractor and size your contingency to match. Track contingency use openly so you know how much remains at each stage.",
        ],
      },
      {
        heading: "How do you keep costs under control during construction?",
        paragraphs: [
          "Budget control is a process, not a single estimate. Milestone reviews give owners a regular chance to compare committed costs with the plan and make decisions before problems grow.",
        ],
        bullets: [
          "Before procurement: confirm pricing on major packages and long-lead items against the budget.",
          "At buyout: compare subcontract and supplier commitments to the original estimate.",
          "During construction: review change orders, contingency use, and forecast to complete on a regular schedule.",
          "Before handover: reconcile remaining costs, allowances, and retainage before final payment.",
        ],
      },
      {
        heading: "How should change orders be handled?",
        paragraphs: [
          "Change orders are normal, but unmanaged change orders are how budgets slip. Require that every change is priced and approved in writing before the work is done, with its schedule impact stated. Group small changes where possible and keep a running log so the cumulative effect is visible.",
          "Many change orders trace back to decisions made late. Making finish and equipment selections on schedule, and involving the contractor during design, prevents a large share of them.",
          "It also helps to separate changes by cause. Owner-requested changes, design corrections, and unforeseen site conditions are funded and negotiated differently, and tracking them separately shows where the budget pressure is really coming from. That information is valuable for the rest of the project and for planning the next one.",
        ],
      },
      {
        heading: "What pricing structure is best for budget certainty?",
        paragraphs: [
          "The contract type affects how risk is shared. A fixed or lump-sum price gives the owner a set number for a defined scope, but it depends on complete drawings and can lead to change orders if scope is unclear. Cost-plus contracts pay actual costs plus a fee and offer transparency, and a guaranteed maximum price adds a ceiling to that arrangement.",
          "There is no single right answer. Owners with complete drawings and stable scope often prefer a fixed price, while owners who want to start early or expect design to evolve may prefer an open-book approach with a guaranteed maximum. Discuss the options with your contractor and, on significant projects, your attorney.",
        ],
      },
      {
        heading: "How can a general contractor help with budget planning?",
        paragraphs: [
          "Bringing a contractor in during pre-construction gives you real-world pricing, lead-time information, and constructability feedback while design changes are still inexpensive. It also helps identify value engineering options that preserve the design intent.",
          "At Correa General Contractors, we share budget updates with owners at regular intervals and walk through committed costs, changes, and contingency, so decisions are made with current numbers rather than assumptions.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the difference between hard costs and soft costs?",
        answer:
          "Hard costs are the physical construction expenses: labor, materials, equipment, and subcontracted work to build the project. Soft costs are everything else needed to deliver it, such as design and engineering fees, permits, surveys, testing, insurance, and legal costs. Owners should budget for both, because soft costs are often underestimated or left out of early budgets.",
      },
      {
        question: "How accurate is an early construction estimate?",
        answer:
          "Early estimates are based on limited information, so they carry more uncertainty than estimates prepared from complete drawings. Accuracy improves as design develops, scope is defined, and subcontractor pricing is collected. Treat early numbers as ranges, carry appropriate contingency, and update the budget at each design milestone rather than locking in a figure too soon.",
      },
      {
        question: "What causes construction budgets to go over?",
        answer:
          "The most common causes are unclear scope, late owner decisions, unforeseen existing conditions, missing soft costs, and unmanaged change orders. Material price changes and long lead times can also play a role. A defined scope, a realistic contingency, early contractor involvement, and regular milestone reviews address most of these risks before they become overruns.",
      },
    ],
    relatedServices: ["pre-construction-planning", "project-consultation", "general-contracting"],
  },
  {
    slug: "residential-vs-commercial-construction-timelines",
    title: "Residential vs Commercial Construction Timelines: What Changes?",
    excerpt:
      "Compare how permits, procurement, trade sequencing, and inspections differ between residential and commercial projects so your Dallas-Fort Worth schedule stays realistic.",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Bright finished residential living space representing a completed home construction project",
    publishedAt: "2026-05-06",
    updatedAt: "2026-11-18",
    readMinutes: 5,
    seoTitle: "Residential vs Commercial Construction Timelines",
    seoDescription:
      "How residential and commercial construction timelines differ in design, permitting, procurement, trade sequencing, and inspections, plus tips for DFW.",
    keyTakeaways: [
      "Commercial projects usually take longer than comparable residential work because of more detailed design, broader code review, and longer procurement for specialized systems.",
      "Residential schedules are most often affected by owner selections and scope changes during construction.",
      "Commercial schedules depend heavily on coordination between MEP, fire protection, and interior trades.",
      "In both types, realistic lead times, early permitting, and regular coordination meetings are the keys to an accurate schedule.",
    ],
    sections: [
      {
        heading: "Why do commercial projects typically take longer?",
        paragraphs: [
          "Commercial buildings serve the public and often larger numbers of occupants, so they are designed and reviewed against a wider set of requirements, including fire protection, accessibility, energy, and occupancy-specific rules. That means more drawings, more consultants, and more review disciplines.",
          "Commercial systems are also more complex. Rooftop HVAC units, switchgear, fire alarm and sprinkler systems, elevators, and storefront glazing can have long manufacturing lead times. When those items are on the critical path, procurement can drive the schedule as much as construction does.",
        ],
      },
      {
        heading: "What slows down residential projects?",
        paragraphs: [
          "Residential design can move quickly, but homeowner decisions often shape the timeline. Changing a layout after framing, upgrading finishes mid-project, or waiting on cabinet, tile, or fixture selections can all add time.",
          "Custom homes and major remodels also depend on site conditions. In North Texas, foundation design on expansive clay soils and weather during concrete and roofing work can affect sequencing. Multifamily projects sit between the two categories, combining residential finishes with commercial-style coordination and code review.",
        ],
      },
      {
        heading: "How does permitting differ between residential and commercial?",
        paragraphs: [
          "Both require permits for most structural, additions, and systems work, but commercial submittals are usually larger and are reviewed by more disciplines. Commercial projects may also involve fire department review, accessibility requirements such as the Texas Accessibility Standards, and a certificate of occupancy before the space can be used.",
          "Review durations change with workload and project complexity, so confirm current expectations with the City of Dallas Development Services Department or the building department in Frisco, Plano, Fort Worth, or wherever your project is located, and plan a buffer.",
        ],
      },
      {
        heading: "How is trade sequencing different?",
        paragraphs: [
          "Residential sequencing is relatively linear: foundation, framing, rough-in, insulation, drywall, finishes. A delay in one trade affects the next, but the number of interdependencies is manageable.",
          "Commercial sequencing involves more trades working in parallel and more coordination. Ductwork, sprinkler piping, electrical conduit, data cabling, and ceiling grid all compete for the same space above the ceiling. Coordination drawings and frequent meetings help prevent clashes that cause rework.",
        ],
        bullets: [
          "Residential: fewer trades, more owner-driven decisions, simpler inspections.",
          "Commercial: more trades in parallel, more consultants, more inspections and testing.",
          "Both: inspections must pass before work is covered, so failed inspections ripple forward.",
        ],
      },
      {
        heading: "What happens at the end of each type of project?",
        paragraphs: [
          "Closeout is often underestimated in both categories. For a home, it typically includes final inspections, a punch list walk-through with the owner, cleaning, and handing over warranties and appliance manuals. Small items can take longer than expected if selections were late or materials are back-ordered.",
          "Commercial closeout usually involves more steps: final building and fire inspections, any required certificate of occupancy, testing and balancing of HVAC systems, fire alarm and sprinkler acceptance, as-built drawings, operation and maintenance manuals, and owner training on building systems. Landlords and lenders may also require their own closeout documents before releasing funds or allowing occupancy.",
          "Planning for closeout from the start, including who collects documents and when final inspections can realistically be scheduled, keeps the last few weeks of a project from stretching into months.",
        ],
      },
      {
        heading: "How can owners build a realistic schedule?",
        paragraphs: [
          "Start with long-lead items and permitting, then build the construction sequence around them. Make finish and equipment decisions before construction, not during it, and hold regular coordination meetings with the design team and contractor.",
          "Correa General Contractors builds both residential and commercial projects across Dallas-Fort Worth, and we create schedules from real procurement lead times and permit expectations rather than generic durations. That helps owners plan move-ins, lease dates, and financing with fewer surprises.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is commercial construction always slower than residential?",
        answer:
          "Not always, but usually for projects of similar size. Commercial work tends to require more detailed design, broader code review, more inspections, and longer lead times for specialized equipment. A small commercial interior refresh can be faster than a large custom home. Scope, complexity, permitting, and decision speed matter more than the label alone.",
      },
      {
        question: "What are long-lead items in construction?",
        answer:
          "Long-lead items are materials or equipment that take a long time to manufacture or deliver, so they must be ordered well before they are needed on site. Common examples include HVAC units, electrical switchgear, custom windows and storefronts, elevators, and specialty fixtures. Identifying and ordering them early during pre-construction protects the schedule.",
      },
      {
        question: "How can I keep a home building or remodel project on schedule?",
        answer:
          "Finalize your layout and selections before construction begins, respond quickly to contractor questions, and avoid mid-project scope changes. Ask your contractor for a written schedule with key decision dates and order long-lead items early. Regular check-ins help catch issues while they are still small and easy to resolve.",
      },
      {
        question: "Where does multifamily construction fit on the timeline spectrum?",
        answer:
          "Multifamily projects fall between residential and commercial. Units use residential-style finishes, but the buildings are typically reviewed under commercial codes, with more fire protection, accessibility, and inspection requirements. They also involve repetitive trade sequencing across many units, so procurement planning and consistent quality checks have a large effect on the overall schedule.",
      },
    ],
    relatedServices: ["residential", "commercial", "pre-construction-planning"],
  },
  {
    slug: "pre-construction-checklist-dallas-owners",
    title: "Pre-Construction Checklist for Dallas Project Owners",
    excerpt:
      "A practical checklist covering site due diligence, scope, budget, permits, risk review, and contractor selection before construction starts in Dallas-Fort Worth.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Project team working through a pre-construction checklist with laptops and planning documents",
    publishedAt: "2026-04-21",
    updatedAt: "2026-11-18",
    readMinutes: 5,
    seoTitle: "Pre-Construction Checklist for Dallas Owners",
    seoDescription:
      "Use this pre-construction checklist for Dallas projects to confirm zoning, define scope, set a budget, plan permits, review risks, and choose a builder.",
    keyTakeaways: [
      "Pre-construction is the planning phase before work begins, where scope, budget, schedule, permits, and risks are defined.",
      "Confirm zoning, allowed use, and permit requirements early, since approval issues can delay a project more than field work.",
      "Freeze scope and priorities, separating must-haves from optional items, before final pricing and procurement.",
      "Write down key risks, such as site conditions, utilities, lead times, and weather, along with a plan for each.",
    ],
    sections: [
      {
        heading: "What is pre-construction and why does it matter?",
        paragraphs: [
          "Pre-construction is everything that happens between deciding to build and mobilizing on site. It includes due diligence, design development, budgeting, scheduling, permitting, procurement planning, and risk review. Decisions made here shape most of a project's cost and schedule outcome.",
          "Changes are cheapest on paper. Moving a wall in a drawing costs very little; moving it after framing and electrical rough-in costs time and money. A thorough pre-construction phase moves decisions earlier, when they are least expensive.",
        ],
      },
      {
        heading: "Site and regulatory due diligence",
        paragraphs: [
          "Start by confirming what the property allows. In Dallas, zoning, permitted uses, setbacks, parking, and any planned development or historic overlay rules can shape the design. Similar questions apply in Irving, Plano, Arlington, and other DFW cities, each with its own requirements.",
        ],
        bullets: [
          "Confirm zoning and allowed use with the City of Dallas or the relevant city.",
          "For existing buildings, review available as-built drawings and walk the space to note visible conditions.",
          "Obtain a survey and, for new construction or additions, a geotechnical report.",
          "Locate existing utilities and confirm available capacity for water, sewer, power, and gas.",
          "Check for easements, deed restrictions, or HOA and landlord rules.",
          "Identify which permits and approvals the project will need.",
        ],
      },
      {
        heading: "Scope, budget, and schedule",
        paragraphs: [
          "Define the project in writing: spaces, functions, quality level, and must-have versus optional items. Then build a budget that covers hard costs, soft costs, owner costs, and contingency, and a schedule that starts from permitting and long-lead procurement.",
          "Freezing scope does not mean every detail is final. It means the big decisions, such as layout, systems, and quality level, are settled before pricing is locked and materials are ordered. Changes after that point should go through a formal change process so their cost and schedule impact is clear before anyone approves them.",
        ],
        bullets: [
          "Write a scope document with priorities ranked.",
          "Set a total project budget, not just a construction number.",
          "Set allowances for decisions not yet made.",
          "Identify long-lead equipment and materials.",
          "Set target dates for design milestones, permit submittal, and owner selections.",
        ],
      },
      {
        heading: "Risk review: what could go wrong?",
        paragraphs: [
          "A written risk review turns vague worries into specific plans. List the risks, rate how likely and how costly each one is, and agree on who handles it.",
          "Common risks in North Texas include soil conditions that influence foundations, utility conflicts, severe spring weather, summer heat affecting crews and certain materials, and permit review timing. Renovations add the risk of hidden conditions behind walls and ceilings. Investigate what you can before construction, and carry contingency for what you cannot.",
        ],
      },
      {
        heading: "Permitting and procurement plan",
        paragraphs: [
          "Permitting and procurement are the two activities most likely to control your start date, so plan them together. A permit without materials on order leads to idle time, and materials on order without a permit can sit in storage.",
        ],
        bullets: [
          "Confirm submittal requirements and current review expectations with the City of Dallas Development Services Department.",
          "Have your contractor review drawings for completeness before submittal to reduce comment cycles.",
          "List long-lead items, such as HVAC equipment, electrical gear, windows, and doors, with order-by dates.",
          "Decide who is responsible for permits and inspections and write it into the contract.",
          "Plan site logistics: access, staging, parking, temporary utilities, and any neighbor or tenant notifications.",
        ],
      },
      {
        heading: "Choosing your project team and contract",
        paragraphs: [
          "Decide on a delivery method, such as design-bid-build or design-build, and select your design team and contractor accordingly. Make sure the contract clearly states scope, price structure, schedule, change order process, payment terms, insurance, and warranty.",
          "Bringing a general contractor in during pre-construction gives you real pricing and constructability input before the design is final. Correa General Contractors offers pre-construction planning for Dallas-Fort Worth owners so that permits, procurement, and mobilization are sequenced together from day one.",
        ],
      },
    ],
    faqs: [
      {
        question: "What happens during pre-construction?",
        answer:
          "During pre-construction, the owner, design team, and contractor define scope, develop and review drawings, prepare budgets and schedules, identify long-lead items, plan permitting, and review risks. The goal is to make key decisions before work begins, when changes are least expensive, so construction proceeds with fewer surprises, delays, and change orders.",
      },
      {
        question: "When should I hire a general contractor for pre-construction?",
        answer:
          "Ideally, bring a contractor in during early design, before drawings are finished. Early involvement provides realistic pricing, lead-time information, and constructability feedback while design changes are still inexpensive. Waiting until drawings are complete can reveal budget problems late, which may force redesign and delay permitting and the overall project schedule.",
      },
      {
        question: "What documents should I have before construction starts in Dallas?",
        answer:
          "Typically you should have approved permit drawings and the issued building permit, a signed construction contract, a defined scope and budget, a baseline schedule, required surveys or geotechnical reports, insurance certificates, and any landlord, HOA, or lender approvals. Exact requirements vary by project, so confirm permit needs with the City of Dallas Development Services Department.",
      },
      {
        question: "How long should pre-construction take?",
        answer:
          "It depends on the project's size, how far design has progressed, and how quickly decisions are made. A small remodel may need only a short planning period, while a new commercial building can require months of design, pricing, and permitting. Rather than targeting a fixed duration, focus on completing scope, budget, permits, and procurement plans before mobilizing.",
      },
    ],
    relatedServices: ["pre-construction-planning", "project-consultation", "general-contracting"],
  },
  {
    slug: "how-to-select-the-right-general-contractor",
    title: "How to Choose a General Contractor in Dallas",
    excerpt:
      "A practical framework for evaluating Dallas general contractors on experience, planning process, communication, pricing transparency, and project delivery.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "General contractor and project owner walking an active commercial construction site in Dallas",
    publishedAt: "2026-04-08",
    updatedAt: "2026-11-18",
    readMinutes: 6,
    seoTitle: "How to Choose a General Contractor in Dallas",
    seoDescription:
      "How to choose a general contractor in Dallas: compare relevant experience, insurance, pre-construction process, communication, bids, and contract terms.",
    keyTakeaways: [
      "Choose a general contractor based on relevant experience, planning process, and communication, not the lowest bid alone.",
      "Verify insurance, any required local registrations, and that licensed trades will handle electrical, plumbing, and HVAC work.",
      "Compare bids line by line for scope, exclusions, allowances, and schedule, since a low number may simply leave things out.",
      "Ask for references from similar projects and question them about schedule reliability, transparency, and how problems were handled.",
    ],
    sections: [
      {
        heading: "What does a general contractor do?",
        paragraphs: [
          "A general contractor manages the construction of a project from start to finish. That includes planning and scheduling, hiring and coordinating subcontractors, procuring materials, managing permits and inspections, overseeing quality and safety, controlling costs, and handing over a completed project.",
          "For owners, the general contractor is the single point of responsibility for getting the work built as designed, on schedule, and within the agreed price. Choosing the right one is one of the most important decisions on any project.",
        ],
      },
      {
        heading: "How do you check a contractor's qualifications in Texas?",
        paragraphs: [
          "Texas does not issue a single statewide license for general contractors, so owners need to verify qualifications in other ways. Licensed trades such as electricians, plumbers, and HVAC contractors are regulated at the state level, and some cities require contractors to register before pulling permits. Check current requirements with your city.",
        ],
        bullets: [
          "Request certificates of general liability and workers' compensation insurance, and confirm they are current.",
          "Ask whether the contractor is registered where your project is located, if the city requires it.",
          "Confirm that electrical, plumbing, and mechanical work will be performed by properly licensed trade contractors.",
          "Ask about bonding capacity if your project or lender requires payment and performance bonds.",
          "Look up the company's business registration and online reviews.",
        ],
      },
      {
        heading: "What experience should a Dallas general contractor have?",
        paragraphs: [
          "Look for experience that matches your project type and size. A contractor who builds custom homes may not be the best fit for a restaurant finish-out, and a large commercial builder may not prioritize a small remodel. Ask to see recent projects similar to yours, ideally in Dallas-Fort Worth, where the contractor knows local permitting, inspectors, subcontractors, and conditions such as expansive clay soils.",
          "Ask who will actually run your project. The project manager and superintendent assigned to your job matter as much as the company's portfolio.",
        ],
      },
      {
        heading: "How should you compare bids?",
        paragraphs: [
          "The lowest bid is not always the lowest final cost. Bids can differ because one contractor included items another excluded, used lower allowances, or assumed a different schedule. Line up bids against the same scope and ask each contractor to clarify gaps.",
        ],
        bullets: [
          "Compare inclusions, exclusions, and assumptions side by side.",
          "Check allowances for finishes and fixtures against realistic selections.",
          "Review proposed schedules and how they account for permitting and lead times.",
          "Ask how change orders are priced and approved.",
          "Understand fees, general conditions, and contingency in each proposal.",
        ],
      },
      {
        heading: "What questions should you ask before hiring?",
        paragraphs: [
          "Interviews reveal how a contractor communicates and solves problems, which often predicts how the project will go. Useful questions include: How do you handle pre-construction and budgeting? How often will I get updates, and in what format? How do you manage subcontractor quality? What happens when you find an unexpected condition? How do you handle punch lists, closeout documents, and warranty requests?",
          "When calling references, ask specifically whether the project finished on schedule and on budget, how changes were communicated, and whether they would hire the contractor again.",
        ],
      },
      {
        heading: "What should be in the construction contract?",
        paragraphs: [
          "A clear contract protects both parties. It should define scope by reference to drawings and specifications, price structure (such as fixed price or cost-plus with a guaranteed maximum), schedule, payment terms and retainage, the change order process, insurance, warranty, and dispute resolution. Have an attorney review the contract on significant projects.",
          "Correa General Contractors has more than 15 years of experience and over 200 completed commercial and residential projects across Dallas-Fort Worth. Whoever you hire as your general contractor in Dallas, look for the same things we hold ourselves to: clear planning before construction starts, transparent pricing, and steady communication through closeout.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do general contractors need a license in Texas?",
        answer:
          "Texas does not have a statewide license for general contractors. However, trades such as electrical, plumbing, and HVAC are licensed by the state, and some cities, including in the Dallas area, may require contractor registration before permits are issued. Owners should verify insurance, any local registration, and that licensed trades will perform regulated work.",
      },
      {
        question: "Should I always choose the lowest bid?",
        answer:
          "No. The lowest bid may exclude scope, carry unrealistic allowances, or assume a schedule that is not achievable, which can lead to change orders and delays later. Compare bids line by line against the same scope, and weigh experience, planning process, communication, and references alongside price to judge the true value of each proposal.",
      },
      {
        question: "How many contractor bids should I get?",
        answer:
          "Many owners collect at least three bids to compare pricing and approach, but the quality of each bid matters more than the count. Give every contractor the same drawings, scope, and schedule expectations so proposals are comparable. For design-build or negotiated projects, owners often select a contractor based on qualifications first and then develop pricing together.",
      },
      {
        question: "What questions should I ask a general contractor in Dallas?",
        answer:
          "Ask about experience with similar projects in Dallas-Fort Worth, who will manage your job day to day, how they handle budgeting and pre-construction, how often they report progress, how change orders are priced and approved, how they manage subcontractor quality, and what warranty and closeout support they provide. Then confirm the answers with references.",
      },
    ],
    relatedServices: ["general-contracting", "project-consultation", "commercial", "residential"],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
