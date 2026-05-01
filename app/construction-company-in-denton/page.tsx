import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/homepage-sections";
import { BulletList, ContentSection, PageCta, PageHero } from "../components/inner-page-sections";

export const metadata: Metadata = {
  title: "Construction Company in Denton | Correa General Contractors",
  description:
    "Looking for a trusted construction company in Denton? Correa General Contractors delivers residential and commercial projects with strong planning, safety, and quality control.",
};

export default function ConstructionCompanyDentonPage() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="DENTON CONSTRUCTION"
          title="Reliable Construction Company in Denton, TX"
          description="Correa General Contractors helps property owners and developers in Denton deliver successful residential and commercial builds from concept through closeout."
        />
        <ContentSection title="Denton Construction Services">
          <BulletList
            items={[
              "Ground-up residential and commercial construction",
              "Tenant improvements and space modernization",
              "Design-build coordination and permit planning",
              "Renovation and phased construction management",
            ]}
          />
        </ContentSection>
        <ContentSection title="Why Denton Clients Choose Correa General Contractors">
          <p>
            Our team combines local market understanding with disciplined scheduling, transparent cost controls, and
            reliable on-site communication to keep your project moving without surprises.
          </p>
        </ContentSection>
        <PageCta />
      </main>
      <SiteFooter />
    </div>
  );
}
