import type { Metadata } from "next";
import {
  PageHero,
  ContentSection,
  BulletList,
  PageCta,
} from "../components/inner-page-sections";
import { SiteFooter, SiteHeader } from "../components/homepage-sections";

export const metadata: Metadata = {
  title: "About Us | Correa General Contractors",
  description:
    "Learn about Correa General Contractors, our mission, team values, and commitment to high-quality construction in Dallas.",
};

export default function AboutUsPage() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="ABOUT CORREA"
          title="Building with Integrity, Precision, and Care"
          description="Correa General Contractors is committed to creating durable spaces that reflect craftsmanship, functionality, and modern design."
        />
        <ContentSection title="Our Story">
          <p>
            We started with a simple goal: deliver construction projects that clients
            can trust from day one. Today, we continue that mission with a dedicated
            team focused on reliability, quality, and long-term value.
          </p>
          <p>
            As a general contractor, we understand that owners need clarity before
            construction starts. That is why we invest heavily in pre-construction,
            trade coordination, and practical scheduling so decisions remain easy and
            site progress stays predictable.
          </p>
        </ContentSection>
        <ContentSection title="Our Core Values">
          <BulletList
            items={[
              "Transparent communication at every stage",
              "Safety and compliance on every site",
              "Detail-oriented workmanship",
              "Strong client partnerships",
              "Reliable trade and vendor management",
              "Accurate estimating with budget discipline",
            ]}
          />
        </ContentSection>
        <ContentSection title="How We Deliver Better Outcomes">
          <BulletList
            items={[
              "Dedicated project manager as single point of contact",
              "Weekly owner updates with schedule snapshots",
              "Subcontractor quality checks at each milestone",
              "Permit, inspection, and compliance support",
              "Change order transparency with written approvals",
              "Closeout package and post-handover support",
            ]}
          />
        </ContentSection>
        <ContentSection title="Get Estimate Options">
          <p>
            Need pricing quickly? Choose either a full estimate review call or a
            quick estimate based on scope, location, and target timeline. We guide
            you on cost ranges, constructability risks, and next steps.
          </p>
        </ContentSection>
        <PageCta />
      </main>
      <SiteFooter />
    </div>
  );
}
