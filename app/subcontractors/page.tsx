import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/homepage-sections";
import { BulletList, ContentSection, PageCta, PageHero } from "../components/inner-page-sections";
import { SubcontractorRegistrationForm } from "../components/forms";

export const metadata: Metadata = {
  title: "Subcontractor Registration | Correa Construction",
  description:
    "Register as a subcontractor with Correa Construction for upcoming residential and commercial projects in the Dallas-Fort Worth region.",
};

export default function SubcontractorsPage() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="SUBCONTRACTORS"
          title="Work With Correa Construction"
          description="We partner with skilled subcontractors committed to safety, quality, and schedule reliability."
        />
        <ContentSection title="Partner Requirements">
          <BulletList
            items={[
              "Current licenses and insurance",
              "Safety compliance and documentation",
              "Past project references",
              "Capacity for multi-phase coordination",
            ]}
          />
        </ContentSection>
        <ContentSection title="Trade Packages We Frequently Bid">
          <BulletList
            items={[
              "Concrete, structural framing, and masonry",
              "MEP: electrical, plumbing, and HVAC",
              "Drywall, painting, and finish trades",
              "Sitework, grading, and exterior packages",
            ]}
          />
        </ContentSection>
        <ContentSection title="Subcontractor Contact Desk">
          <BulletList
            items={[
              "Phone: +1 (555) 202-8811",
              "Email: trades@correabuild.com",
              "Address: 245 Harbor Street, Suite 18, Dallas, TX 75201",
              "Hours: Monday - Friday, 9:00 AM - 6:00 PM",
            ]}
          />
        </ContentSection>
        <SubcontractorRegistrationForm ctaLabel="Submit Subcontractor Profile" />
        <PageCta />
      </main>
      <SiteFooter />
    </div>
  );
}
