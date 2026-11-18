import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/homepage-sections";
import {
  AnswerBox,
  CardGrid,
  ContentSection,
  FaqSection,
  PageCta,
  PageHero, HeroStats } from "../components/inner-page-sections";
import { FounderSection } from "../components/person-card";
import { FOUNDER } from "../lib/people";
import { JsonLd, ORG_ID, pageMetadata, personSchema } from "../lib/seo";
import { SITE, absoluteUrl } from "../lib/site";

export const metadata = pageMetadata({
  title: "About Us | Dallas General Contractor",
  description:
    "Meet Correa General Contractors, a Dallas general contractor with 15+ years of experience and 200+ completed commercial and residential projects across DFW.",
  path: "/about-us",
  image: "/projects/odessa/8.webp",
});

const facts: [string, string][] = [
  ["Company name", SITE.name],
  ["Type", "Commercial & residential general contractor"],
  ["Headquarters", SITE.addressLine],
  ["Phone", SITE.phone],
  ["Email", SITE.email],
  ["Office hours", SITE.hours.label],
  ["Experience", `${SITE.stats.years} years`],
  ["Completed projects", SITE.stats.projects],
  ["Service area", `Dallas–Fort Worth: ${SITE.serviceAreas.join(", ")}`],
];

const values = [
  { title: "One project manager", text: "A dedicated project manager is your single point of contact from kickoff to handover." },
  { title: "Weekly owner updates", text: "Progress, schedule snapshots, and upcoming decisions every week, with no chasing for answers." },
  { title: "Line-item budgets", text: "Detailed estimates with defined allowances and contingency, so you know where every dollar goes." },
  { title: "Written change orders", text: "No surprise costs: every change is priced and approved in writing before work proceeds." },
  { title: "Permits & inspections handled", text: "We prepare submittals, answer plan-review comments, and schedule city inspections." },
  { title: "Closeout & warranty support", text: "Complete closeout documents, warranties, and support after you move in." },
];

const faqs = [
  { question: "Where is Correa General Contractors located?", answer: `Our office is at ${SITE.addressLine}. We serve the entire Dallas–Fort Worth metroplex, and our office hours are ${SITE.hours.label}.` },
  { question: "How long has Correa been in business?", answer: "Our team brings more than 15 years of construction experience and has completed over 200 projects, including commercial build-outs, custom residential, duplexes, and multifamily communities." },
  { question: "What makes Correa different from other Dallas contractors?", answer: "Every project gets a dedicated project manager, weekly progress updates, line-item budgets, and written change-order approvals. Owners always know where the schedule and budget stand." },
];

export default function AboutUsPage() {
  return (
    <div className="bg-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: `About ${SITE.name}`,
          url: absoluteUrl("/about-us"),
          mainEntity: { "@id": ORG_ID },
        }}
      />
      {FOUNDER.name ? (
        <JsonLd
          data={{
            ...personSchema(FOUNDER, "/about-us"),
            "@id": `${absoluteUrl("/about-us")}#founder`,
            sameAs: FOUNDER.linkedin ? [FOUNDER.linkedin] : undefined,
          }}
        />
      ) : null}
      <SiteHeader />
      <main id="main-content">
        <PageHero
          aside={<HeroStats />}
          eyebrow="ABOUT CORREA"
          title="A Dallas General Contractor Built on Trust"
          description="Correa General Contractors builds durable commercial and residential spaces across Dallas–Fort Worth through transparent communication, careful planning, and precise execution."
          crumbs={[{ name: "About Us", path: "/about-us" }]}
          image="/projects/odessa/8.webp"
        />
        <AnswerBox title="About Correa in brief">
          <p>
            {SITE.name} is a commercial and residential general contractor headquartered in Dallas, Texas.
            With {SITE.stats.years} years of experience and {SITE.stats.projects} completed projects, the
            company provides general contracting, design-build, tenant improvements, renovation, custom
            homes, and multifamily construction throughout Dallas–Fort Worth.
          </p>
        </AnswerBox>

        <FounderSection person={FOUNDER} />

        <ContentSection title="What We Build">
          <p>
            We are a general contractor, which means we take responsibility for the whole project: pricing,
            permits, subcontractors, scheduling, safety, inspections, and handover. Owners work with one
            accountable team instead of coordinating trades themselves.
          </p>
          <ul className="grid gap-3 md:grid-cols-2">
            {[
              ["Commercial build-outs & tenant improvements", "/services/commercial"],
              ["Custom homes, duplexes & additions", "/services/residential"],
              ["Multifamily communities", "/projects/westhouse-apartment"],
              ["Design-build projects", "/services/design-build"],
              ["Renovation & remodeling", "/services/renovation-remodeling"],
              ["Pre-construction & consulting", "/services/pre-construction-planning"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="block rounded-xl border border-[#dbe3ee] bg-[#f8fafc] px-4 py-3 font-semibold text-[#1F2A30] hover:border-[#C2A57A]">
                  {label} →
                </Link>
              </li>
            ))}
          </ul>
          <p>
            Recent work includes{" "}
            <Link href="/projects/westhouse-apartment" className="font-semibold text-[#1F2A30] underline">Westhouse Apartments</Link> in Keller,{" "}
            <Link href="/projects/the-cove-at-odessa" className="font-semibold text-[#1F2A30] underline">The Cove at Odessa</Link>, and the{" "}
            <Link href="/projects/red-oak-duplex" className="font-semibold text-[#1F2A30] underline">Red Oak Duplex</Link>.
          </p>
        </ContentSection>

        <section className="py-14 md:py-16">
          <div className="grid w-full gap-10 px-6 md:px-10 lg:grid-cols-2 lg:px-14">
            <div>
              <h2 className="text-3xl font-semibold text-[#1F2A30] md:text-4xl">Company Facts</h2>
              <dl className="mt-6 divide-y divide-[#e2e8f0] rounded-2xl border border-[#dbe3ee]">
                {facts.map(([term, value]) => (
                  <div key={term} className="grid gap-1 p-4 sm:grid-cols-[180px_1fr]">
                    <dt className="font-semibold text-[#1F2A30]">{term}</dt>
                    <dd className="text-[#475569]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative min-h-80 overflow-hidden rounded-2xl">
              <Image src="/projects/westhouse/3.jpeg" alt="Westhouse Apartments by Correa General Contractors" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </section>

        <section className="py-14 md:py-16">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <h2 className="mb-8 text-3xl font-semibold text-[#1F2A30] md:text-4xl">How We Work on Every Project</h2>
            <CardGrid items={values} />
          </div>
        </section>

        <FaqSection faqs={faqs} title="About Correa: FAQs" />
        <PageCta />
      </main>
      <SiteFooter />
    </div>
  );
}
