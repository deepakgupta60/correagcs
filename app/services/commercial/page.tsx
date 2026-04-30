import type { Metadata } from "next";
import {
  BulletList,
  ContentSection,
  PageCta,
  PageHero,
} from "../../components/inner-page-sections";
import { SiteFooter, SiteHeader } from "../../components/homepage-sections";

export const metadata: Metadata = {
  title: "Commercial Construction Services | Correa Construction",
  description:
    "Commercial construction by Correa Construction for offices, retail, and mixed-use spaces in Dallas-Fort Worth.",
};

export default function CommercialServicesPage() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="SERVICES"
          title="Commercial Construction"
          description="High-performance construction delivery for office, retail, hospitality, and industrial projects."
        />
        <ContentSection title="What We Deliver">
          <BulletList
            items={[
              "Ground-up commercial buildings",
              "Tenant improvement and fit-outs",
              "Retail and office renovations",
              "Pre-construction planning and cost control",
              "Code and permit coordination",
              "Schedule-driven project management",
            ]}
          />
        </ContentSection>
        <ContentSection title="Why Choose Correa for Commercial Projects">
          <p>
            We align design intent, budget, and timeline through disciplined site
            operations and transparent communication. Our team keeps stakeholders
            updated at every milestone from mobilization to final turnover.
          </p>
        </ContentSection>
        <PageCta />
      </main>
      <SiteFooter />
    </div>
  );
}
