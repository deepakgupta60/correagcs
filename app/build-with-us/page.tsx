import { BuildWithUsForm } from "../components/forms";
import { SiteFooter, SiteHeader } from "../components/homepage-sections";
import { CardGrid, FaqSection, PageHero } from "../components/inner-page-sections";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Build With Us | Construction Partnerships",
  description:
    "Partner with Correa General Contractors in Dallas as a project owner, supplier, architect, engineer, or developer. Send a short partnership request today.",
  path: "/build-with-us",
});

const partners = [
  { title: "Project owners & developers", text: "Commercial, residential, and multifamily projects that need a general contractor or design-build partner." },
  { title: "Architects & engineers", text: "Design teams looking for builder input on budget and constructability during design." },
  { title: "Suppliers & vendors", text: "Material and equipment suppliers serving Dallas–Fort Worth jobsites." },
  { title: "Investors & landowners", text: "Partners evaluating sites or development opportunities who need realistic cost and schedule input." },
];

const faqs = [
  { question: "What happens after I submit a partnership request?", answer: "Our team reviews your details and contacts you to understand your goals, project type, and timeline, then recommends next steps such as a meeting, a site visit, or a budget review." },
  { question: "Do you partner with architects on design-build projects?", answer: "Yes. We work with outside architects and engineers on design-build and negotiated projects, giving live cost and constructability feedback while drawings are developed." },
  { question: "I'm a subcontractor. Is this the right form?", answer: "Trade contractors should use our subcontractor registration page instead, so your trade, service area, and contact details reach our estimating team." },
];

export default function BuildWithUsPage() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <main id="main-content">
        <PageHero
          crumbs={[{ name: "Build With Us", path: "/build-with-us" }]}
          eyebrow="BUILD WITH US"
          title="Partner With a Dallas General Contractor"
          description="Owners, design professionals, suppliers, and investors: tell us what you're working on and we'll find the right way to work together."
        />
        <BuildWithUsForm ctaLabel="Send Partnership Request" />
        <section className="pb-14">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <h2 className="mb-8 text-3xl font-semibold text-[#1F2A30] md:text-4xl">Who We Partner With</h2>
            <CardGrid items={partners} />
          </div>
        </section>
        <FaqSection faqs={faqs} title="Partnership FAQs" />
      </main>
      <SiteFooter />
    </div>
  );
}
