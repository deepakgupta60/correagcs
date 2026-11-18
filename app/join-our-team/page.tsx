import { CareerApplicationForm } from "../components/forms";
import { SiteFooter, SiteHeader } from "../components/homepage-sections";
import { CardGrid, FaqSection, PageHero } from "../components/inner-page-sections";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Construction Jobs in Dallas | Careers",
  description:
    "Construction jobs in Dallas–Fort Worth at Correa General Contractors: project engineer, site supervisor, estimator, and construction coordinator roles. Apply online.",
  path: "/join-our-team",
});

const roles = [
  { title: "Project Engineer", text: "Supports project managers with submittals, RFIs, schedules, and documentation on commercial and residential jobs." },
  { title: "Site Supervisor", text: "Runs the jobsite day to day: trade coordination, safety, quality checks, and inspections." },
  { title: "Estimator", text: "Prepares quantity takeoffs, trade pricing, and detailed estimates for bids and budgets." },
  { title: "Construction Coordinator", text: "Keeps procurement, scheduling, and communication with owners and subcontractors on track." },
];

const faqs = [
  { question: "Where are the jobs located?", answer: "Our office is in Dallas and our projects are across the Dallas–Fort Worth metroplex, so field roles work on jobsites throughout North Texas." },
  { question: "Can I apply if my role isn't listed?", answer: "Yes. Choose \"Other\" in the application and tell us about your experience. We keep strong applications on file for future openings." },
  { question: "What happens after I apply?", answer: "Our team reviews every application. If your experience matches an open role, we will contact you by phone or email to schedule a conversation." },
];

export default function JoinOurTeamPage() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <main id="main-content">
        <PageHero
          crumbs={[{ name: "Careers", path: "/join-our-team" }]}
          eyebrow="CAREERS"
          title="Construction Jobs in Dallas–Fort Worth"
          description="Build commercial, residential, and multifamily projects across North Texas with a team that values safety, craftsmanship, and growth."
        />
        <section className="py-14">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <h2 className="mb-8 text-3xl font-semibold text-[#1F2A30] md:text-4xl">Roles We Hire For</h2>
            <CardGrid items={roles} />
          </div>
        </section>
        <CareerApplicationForm ctaLabel="Apply Now" />
        <FaqSection faqs={faqs} title="Careers FAQs" />
      </main>
      <SiteFooter />
    </div>
  );
}
