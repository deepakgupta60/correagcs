import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/homepage-sections";
import { BulletList, ContentSection, PageHero } from "../components/inner-page-sections";

export const metadata: Metadata = {
  title: "Subcontractors",
  description:
    "Subcontractor partnership opportunities with Correa Construction in Dallas. Learn requirements and collaboration process.",
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
      </main>
      <SiteFooter />
    </div>
  );
}
