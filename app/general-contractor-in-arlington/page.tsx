import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/homepage-sections";
import { BulletList, ContentSection, PageCta, PageHero } from "../components/inner-page-sections";

export const metadata: Metadata = {
  title: "General Contractor in Arlington | Correa General Contractors",
  description:
    "Need a general contractor in Arlington? Correa General Contractors provides full-service construction management for residential and commercial projects with predictable execution.",
};

export default function GeneralContractorArlingtonPage() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="ARLINGTON CONSTRUCTION"
          title="Top-Rated General Contractor in Arlington, TX"
          description="Correa General Contractors partners with businesses, developers, and homeowners in Arlington for efficient project planning, build execution, and successful project handover."
        />
        <ContentSection title="Our Arlington Construction Capabilities">
          <BulletList
            items={[
              "Commercial build-outs and office renovations",
              "Residential custom homes and additions",
              "Renovation, remodeling, and structural upgrades",
              "Project consultation, planning, and risk mitigation",
            ]}
          />
        </ContentSection>
        <ContentSection title="A Better Construction Experience">
          <p>
            With proactive planning, consistent field oversight, and detail-focused workmanship, we help Arlington
            clients reduce friction and maximize long-term project value.
          </p>
        </ContentSection>
        <PageCta />
      </main>
      <SiteFooter />
    </div>
  );
}
