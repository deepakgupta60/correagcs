import type { Metadata } from "next";
import { BuildWithUsForm } from "../components/forms";
import { SiteFooter, SiteHeader } from "../components/homepage-sections";
import { BulletList, ContentSection, PageCta, PageHero } from "../components/inner-page-sections";

export const metadata: Metadata = {
  title: "Build With Us | Correa General Contractors",
  description:
    "Partner with Correa General Contractors as a client, vendor, investor, or strategic collaborator. Submit your details through our Build With Us form.",
};

export default function BuildWithUsPage() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="BUILD WITH US"
          title="Partnerships That Build Real Value"
          description="Whether you are a project owner, consultant, vendor, or strategic partner, we are ready to collaborate with clear communication and execution."
        />
        <ContentSection title="Who Can Partner With Us">
          <BulletList
            items={[
              "Project owners planning residential or commercial developments",
              "Vendors and suppliers for materials and equipment",
              "Design and engineering professionals",
              "Investment and land development partners",
            ]}
          />
        </ContentSection>
        <ContentSection title="Why Teams Prefer Working With Correa">
          <BulletList
            items={[
              "Transparent planning and milestone-level accountability",
              "Practical budgeting with risk visibility from day one",
              "Faster coordination between design, procurement, and execution",
              "Long-term collaboration mindset, not one-time transactions",
            ]}
          />
        </ContentSection>
        <BuildWithUsForm ctaLabel="Submit Partnership Request" />
        <PageCta />
      </main>
      <SiteFooter />
    </div>
  );
}
