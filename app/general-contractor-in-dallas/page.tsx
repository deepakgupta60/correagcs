import type { Metadata } from "next";
import {
  PageHero,
  ContentSection,
  BulletList,
  PageCta,
} from "../components/inner-page-sections";
import { SiteFooter, SiteHeader } from "../components/homepage-sections";

export const metadata: Metadata = {
  title: "General Contractor in Dallas | Correa General Contractors",
  description:
    "Correa General Contractors is a trusted general contractor in Dallas for residential and commercial construction projects.",
};

export default function GeneralContractorDallasPage() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="DALLAS CONSTRUCTION"
          title="Trusted General Contractor in Dallas"
          description="From planning and permitting to execution and final delivery, Correa General Contractors provides complete general contracting services across Dallas."
        />
        <ContentSection title="Why Dallas Clients Choose Us">
          <p>
            We combine engineering precision, transparent communication, and strong
            project management to deliver exceptional results across every phase of
            construction.
          </p>
          <BulletList
            items={[
              "Local code and permit expertise",
              "Clear project timelines and budget tracking",
              "Residential and commercial build capabilities",
              "Safety-first execution with quality control",
            ]}
          />
        </ContentSection>
        <ContentSection title="Our General Contracting Process">
          <p>
            Every project begins with consultation and scope planning, followed by
            pre-construction, scheduling, procurement, and on-site execution.
            We maintain proactive updates so your team always knows the next step.
          </p>
        </ContentSection>
        <PageCta />
      </main>
      <SiteFooter />
    </div>
  );
}
