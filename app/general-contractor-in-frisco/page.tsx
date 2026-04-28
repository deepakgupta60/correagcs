import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/homepage-sections";
import { BulletList, ContentSection, PageCta, PageHero } from "../components/inner-page-sections";

export const metadata: Metadata = {
  title: "General Contractor in Frisco | Correa Construction",
  description:
    "Correa Construction is a dependable general contractor in Frisco for commercial interiors, residential builds, renovations, and full project management.",
};

export default function GeneralContractorFriscoPage() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="FRISCO GENERAL CONTRACTOR"
          title="Experienced General Contractor in Frisco, TX"
          description="From pre-construction strategy to final delivery, Correa Construction supports Frisco projects with structured planning, expert coordination, and premium craftsmanship."
        />
        <ContentSection title="General Contracting Expertise in Frisco">
          <BulletList
            items={[
              "Pre-construction planning and value engineering",
              "Subcontractor management and schedule coordination",
              "Quality assurance, safety compliance, and reporting",
              "Budget alignment and milestone-based delivery",
            ]}
          />
        </ContentSection>
        <ContentSection title="Build With Confidence">
          <p>
            We bring a process-first construction model that gives owners clear timelines, clear communication, and a
            dependable build partner across every project phase.
          </p>
        </ContentSection>
        <PageCta />
      </main>
      <SiteFooter />
    </div>
  );
}
