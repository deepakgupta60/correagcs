import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/homepage-sections";
import { BulletList, ContentSection, PageHero } from "../components/inner-page-sections";

export const metadata: Metadata = {
  title: "Join Our Team",
  description:
    "Join the Correa Construction team in Dallas. Explore career opportunities in project execution, field operations, and planning.",
};

export default function JoinOurTeamPage() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="CAREERS"
          title="Join Our Team"
          description="Build meaningful projects with a team that values craftsmanship, collaboration, and growth."
        />
        <ContentSection title="Current Opportunities">
          <BulletList
            items={[
              "Project Engineer",
              "Site Supervisor",
              "Estimator",
              "Construction Coordinator",
            ]}
          />
        </ContentSection>
      </main>
      <SiteFooter />
    </div>
  );
}
