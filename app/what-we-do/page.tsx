import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/homepage-sections";
import { ContentSection, PageCta, PageHero } from "../components/inner-page-sections";
import Link from "next/link";
import { serviceDetails } from "../components/service-data";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Explore what Correa Construction does: general contracting, design build, renovation, and project consultation in Dallas.",
};

export default function WhatWeDoPage() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="WHAT WE DO"
          title="Complete Construction Services for Dallas Projects"
          description="From planning to completion, we handle technical, operational, and execution needs under one dependable team."
        />
        <ContentSection title="Service Expertise">
          <div className="grid gap-3 md:grid-cols-2">
            {serviceDetails.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-xl border border-[#6B7280]/20 px-4 py-3 text-[#1F2A30] transition hover:border-[#C2A57A]/40 hover:bg-[#F5F5F5]"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </ContentSection>
        <PageCta />
      </main>
      <SiteFooter />
    </div>
  );
}
