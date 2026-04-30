import type { Metadata } from "next";
import {
  PageHero,
  ContentSection,
  BulletList,
  PageCta,
} from "../components/inner-page-sections";
import { ContactInquiryForm } from "../components/forms";
import { SiteFooter, SiteHeader } from "../components/homepage-sections";

export const metadata: Metadata = {
  title: "Contact Correa Construction | Dallas",
  description:
    "Contact Correa Construction for residential and commercial projects in Dallas. Request a quote and consultation today.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="CONTACT US"
          title="Let’s Plan Your Next Construction Project"
          description="Speak with our team about your project scope, location, timeline, and budget."
        />
        <ContentSection title="Reach Our Team">
          <BulletList
            items={[
              "Phone: +1 (555) 202-8811",
              "Email: hello@correabuild.com",
              "Office: 245 Harbor Street, Suite 18, Dallas, TX",
              "Hours: Monday - Friday, 9:00 AM to 6:00 PM",
            ]}
          />
        </ContentSection>
        <ContentSection title="Request a Free Consultation">
          <p>
            Share your project details and we will get back with a tailored estimate
            and next-step plan. We handle both residential and commercial builds.
          </p>
        </ContentSection>
        <ContentSection title="Choose Your Estimate Type">
          <BulletList
            items={[
              "Get Estimate: Complete scope + budget + timeline discussion",
              "Quick Estimate: Fast budget range for early decision-making",
              "Bid Support: Documentation and scope alignment for owners",
              "Pre-Construction Review: Risks, sequencing, and permit guidance",
            ]}
          />
        </ContentSection>
        <ContactInquiryForm ctaLabel="Send My Project Request" />
        <PageCta />
      </main>
      <SiteFooter />
    </div>
  );
}
