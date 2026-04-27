import type { Metadata } from "next";
import {
  PageHero,
  ContentSection,
  BulletList,
  PageCta,
} from "../components/inner-page-sections";
import { SiteFooter, SiteHeader } from "../components/homepage-sections";

export const metadata: Metadata = {
  title: "About Us | Correa Construction",
  description:
    "Learn about Correa Construction, our mission, team values, and commitment to high-quality construction in Dallas.",
};

export default function AboutUsPage() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="ABOUT CORREA"
          title="Building with Integrity, Precision, and Care"
          description="Correa Construction is committed to creating durable spaces that reflect craftsmanship, functionality, and modern design."
        />
        <ContentSection title="Our Story">
          <p>
            We started with a simple goal: deliver construction projects that clients
            can trust from day one. Today, we continue that mission with a dedicated
            team focused on reliability, quality, and long-term value.
          </p>
        </ContentSection>
        <ContentSection title="Our Core Values">
          <BulletList
            items={[
              "Transparent communication at every stage",
              "Safety and compliance on every site",
              "Detail-oriented workmanship",
              "Strong client partnerships",
            ]}
          />
        </ContentSection>
        <PageCta />
      </main>
      <SiteFooter />
    </div>
  );
}
