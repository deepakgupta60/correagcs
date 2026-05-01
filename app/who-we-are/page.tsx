import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/homepage-sections";
import { ContentSection, PageCta, PageHero } from "../components/inner-page-sections";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Learn who we are at Correa General Contractors, our leadership values, and our client-first construction philosophy in Dallas.",
};

export default function WhoWeArePage() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="WHO WE ARE"
          title="A Construction Partner Built on Trust"
          description="Correa General Contractors delivers dependable project outcomes through transparent communication and precision execution."
        />
        <ContentSection title="Our Leadership & Culture">
          <p>
            Our team combines practical field experience with modern project
            management. We emphasize planning, accountability, and client
            collaboration in every phase.
          </p>
        </ContentSection>
        <PageCta />
      </main>
      <SiteFooter />
    </div>
  );
}
