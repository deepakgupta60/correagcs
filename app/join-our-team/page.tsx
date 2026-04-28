import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/homepage-sections";
import { BulletList, ContentSection, PageCta, PageHero } from "../components/inner-page-sections";
import { CareerApplicationForm } from "../components/forms";

export const metadata: Metadata = {
  title: "Construction Careers in Dallas | Correa Construction",
  description:
    "Apply for construction careers at Correa Construction in Dallas-Fort Worth, including roles in project management, field operations, and estimating.",
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
        <ContentSection title="Why Build Your Career With Us">
          <BulletList
            items={[
              "Consistent pipeline of residential and commercial projects",
              "Mentorship and leadership growth opportunities",
              "Safety-first culture with modern project workflows",
              "Team-driven environment that values ownership",
            ]}
          />
        </ContentSection>
        <CareerApplicationForm ctaLabel="Apply Now" />
        <PageCta />
      </main>
      <SiteFooter />
    </div>
  );
}
