import { ContactInquiryForm } from "../components/forms";
import { SiteFooter, SiteHeader } from "../components/homepage-sections";
import { FaqSection, PageHero, HeroContactCard } from "../components/inner-page-sections";
import { JsonLd, ORG_ID, pageMetadata } from "../lib/seo";
import { SITE, absoluteUrl } from "../lib/site";

export const metadata = pageMetadata({
  title: "Contact Us | Free Construction Estimate in Dallas",
  description:
    "Contact Correa General Contractors in Dallas, TX. Call (469) 854-0207, email info@correagcs.com, or request a free estimate for your commercial or residential project.",
  path: "/contact-us",
});

const faqs = [
  { question: "How quickly will you respond to my inquiry?", answer: "We review every inquiry during business hours and follow up to schedule a consultation. For time-sensitive site needs, call us directly at (469) 854-0207." },
  { question: "What information should I include?", answer: "Share your project type (commercial or residential), the property address or city, approximate size, target timeline, and any drawings you have. The more detail, the more useful our first conversation will be." },
  { question: "Is the estimate free?", answer: "Yes. Initial consultations and project estimates are free. For larger projects that need detailed pre-construction work, we will discuss the scope of a pre-construction agreement up front." },
];

export default function ContactUsPage() {
  return (
    <div className="bg-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: `Contact ${SITE.name}`,
          url: absoluteUrl("/contact-us"),
          about: { "@id": ORG_ID },
        }}
      />
      <SiteHeader />
      <main id="main-content">
        <PageHero
          aside={<HeroContactCard />}
          eyebrow="CONTACT US"
          title="Get a Free Construction Estimate in Dallas"
          description="Tell us about your commercial or residential project and our team will follow up with next steps, budget guidance, and a consultation."
          crumbs={[{ name: "Contact Us", path: "/contact-us" }]}
        />

        <ContactInquiryForm ctaLabel="Send My Project Request" />

        <section className="pb-16">
          <div className="grid w-full gap-5 px-6 md:grid-cols-3 md:px-10 lg:px-14">
            <div className="reveal-up space-y-5 rounded-2xl border border-[#dbe3ee] bg-white p-6">
              <div>
                <h2 className="text-xs font-semibold tracking-[0.22em] text-[#9a7f55]">BUSINESS HOURS</h2>
                <p className="mt-2 text-[#1F2A30]">{SITE.hours.label}</p>
              </div>
              <div>
                <h2 className="text-xs font-semibold tracking-[0.22em] text-[#9a7f55]">ADDRESS</h2>
                <address className="mt-2 not-italic text-[#1F2A30]">
                  {SITE.name}
                  <br />
                  {SITE.address.street}
                  <br />
                  {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
                </address>
              </div>
              <div>
                <h2 className="text-xs font-semibold tracking-[0.22em] text-[#9a7f55]">FOLLOW US</h2>
                <ul className="mt-2 grid gap-1 text-sm">
                  {Object.entries(SITE.social).map(([name, href]) => (
                    <li key={name}>
                      <a href={href} target="_blank" rel="noopener noreferrer" className="font-semibold capitalize text-[#1F2A30] hover:text-[#C2A57A]">
                        {name === "linkedin" ? "LinkedIn" : name === "youtube" ? "YouTube" : name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="reveal-up overflow-hidden rounded-2xl border border-[#dbe3ee] md:col-span-2">
              <iframe
                title="Map to Correa General Contractors office in Dallas"
                src={SITE.mapEmbedUrl}
                className="h-full min-h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <FaqSection faqs={faqs} title="Contact FAQs" />
      </main>
      <SiteFooter />
    </div>
  );
}
