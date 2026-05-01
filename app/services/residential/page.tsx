import type { Metadata } from "next";
import {
  BulletList,
  ContentSection,
  PageCta,
  PageHero,
} from "../../components/inner-page-sections";
import { SiteFooter, SiteHeader } from "../../components/homepage-sections";

export const metadata: Metadata = {
  title: "Residential Construction Services | Correa General Contractors",
  description:
    "Residential construction and renovation by Correa General Contractors for custom homes and modern living spaces across Dallas-Fort Worth.",
};

export default function ResidentialServicesPage() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="SERVICES"
          title="Residential Construction"
          description="Custom residential builds, remodels, and upgrades designed around your lifestyle."
        />
        <ContentSection title="Our Residential Expertise">
          <BulletList
            items={[
              "Custom home construction",
              "Whole-home remodeling",
              "Kitchen and bathroom upgrades",
              "Structural expansions and additions",
              "Interior finish and detail work",
              "Project planning with milestone updates",
            ]}
          />
        </ContentSection>
        <ContentSection title="Your Home, Built Right">
          <p>
            Our residential process combines thoughtful planning with precise
            craftsmanship so your home remains beautiful, durable, and functional
            for years. We prioritize cleanliness, timelines, and communication.
          </p>
        </ContentSection>
        <PageCta />
      </main>
      <SiteFooter />
    </div>
  );
}
