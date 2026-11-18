import { SubcontractorRegistrationForm } from "../components/forms";
import { SiteFooter, SiteHeader } from "../components/homepage-sections";
import { BulletList, ContentSection, FaqSection, PageHero } from "../components/inner-page-sections";
import { pageMetadata } from "../lib/seo";
import { SITE } from "../lib/site";

export const metadata = pageMetadata({
  title: "Subcontractor Registration | Dallas Bids",
  description:
    "Register as a subcontractor with Correa General Contractors for commercial and residential bids in Dallas–Fort Worth: concrete, framing, masonry, MEP, finishes, sitework.",
  path: "/subcontractors",
});

const faqs = [
  { question: "What do I need to bid with Correa General Contractors?", answer: "Current insurance, any state or local licenses your trade requires, safety documentation, and recent project references. We review these when we prequalify subcontractors for a bid package." },
  { question: "Which trades do you hire?", answer: "We regularly bid concrete, structural framing, masonry, electrical, plumbing, HVAC, drywall, painting, flooring, finish carpentry, sitework, and exterior packages on commercial and residential projects." },
  { question: "How will I hear about bid opportunities?", answer: `Once registered, our estimating team contacts you when a project matches your trade and service area. You can also reach us at ${SITE.phone} or ${SITE.email}.` },
];

export default function SubcontractorsPage() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <main id="main-content">
        <PageHero
          crumbs={[{ name: "Subcontractors", path: "/subcontractors" }]}
          eyebrow="SUBCONTRACTORS"
          title="Bid With Correa General Contractors"
          description="We work with reliable trade partners across Dallas–Fort Worth. Register once and we'll contact you when a project matches your trade."
        />
        <SubcontractorRegistrationForm ctaLabel="Register My Company" />
        <ContentSection title="Trades We Bid">
          <BulletList
            items={[
              "Concrete, structural framing, and masonry",
              "Electrical, plumbing, and HVAC",
              "Drywall, painting, flooring, and finishes",
              "Sitework, grading, and exterior packages",
            ]}
          />
          <p>
            To prequalify, have your insurance certificate, any required licenses, safety documentation, and
            recent project references ready.
          </p>
        </ContentSection>
        <FaqSection faqs={faqs} title="Subcontractor FAQs" />
      </main>
      <SiteFooter />
    </div>
  );
}
