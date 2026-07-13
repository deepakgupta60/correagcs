import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHero,
  ContentSection,
  BulletList,
  PageCta,
} from "../components/inner-page-sections";
import { ContactInquiryForm } from "../components/forms";
import { SiteFooter, SiteHeader } from "../components/homepage-sections";

export const metadata: Metadata = {
  title: "Contact Correa General Contractors | Dallas",
  description:
    "Contact Correa General Contractors for residential and commercial projects in Dallas. Request a quote and consultation today.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="CONTACT"
          title="Start the Conversation"
          description="This page is for quick contact and inquiry submission. For full address details, map, and socials, visit our Get in Touch page."
        />
        <section className="py-16">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="/contact-us" className="reveal-up rounded-2xl border border-[#dbe3ee] bg-white p-6 text-[#1F2A30] shadow-[0_10px_24px_rgba(10,30,40,0.07)] transition hover:-translate-y-0.5">
                <p className="text-xs font-semibold tracking-[0.24em] text-[#C2A57A]">FULL CONTACT PAGE</p>
                <h2 className="mt-2 text-2xl font-semibold">Get in Touch</h2>
                <p className="mt-2 text-sm text-[#64748B]">View address, phone, social links, and embedded Google map.</p>
              </Link>
              <Link href="/build-with-us" className="reveal-up rounded-2xl border border-[#dbe3ee] bg-white p-6 text-[#1F2A30] shadow-[0_10px_24px_rgba(10,30,40,0.07)] transition hover:-translate-y-0.5">
                <p className="text-xs font-semibold tracking-[0.24em] text-[#C2A57A]">PARTNERSHIP</p>
                <h2 className="mt-2 text-2xl font-semibold">Build With Us</h2>
                <p className="mt-2 text-sm text-[#64748B]">Submit collaboration requests for projects, vendors, and partnerships.</p>
              </Link>
            </div>
          </div>
        </section>
        <ContentSection title="Reach Our Team">
          <BulletList
            items={[
              "Phone: +1 (469) 854-0207",
              "Email: hello@correagcs.com",
              "Office: 16210 - B, Seagoville Rd, Dallas, TX 75253, USA",
              "Hours: Monday - Friday, 9:00 AM to 6:00 PM",
            ]}
          />
        </ContentSection>
        <ContentSection title="Request a Free Consultation">
          <p>
            Share your project details and we will get back with a tailored estimate
            and next-step plan. We handle both residential and commercial builds.
          </p>
        </ContentSection>
        <ContentSection title="Choose Your Estimate Type">
          <BulletList
            items={[
              "Get Estimate: Complete scope + budget + timeline discussion",
              "Early Estimate: Fast budget range for early decision-making",
              "Bid Support: Documentation and scope alignment for owners",
              "Pre-Construction Review: Risks, sequencing, and permit guidance",
            ]}
          />
        </ContentSection>
        <ContactInquiryForm ctaLabel="Send My Project Request" />
        <PageCta />
      </main>
      <SiteFooter />
    </div>
  );
}
