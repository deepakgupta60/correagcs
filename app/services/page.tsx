import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/homepage-sections";
import { AnswerBox, FaqSection, HeroCtas, PageCta, PageHero, HeroStats } from "../components/inner-page-sections";
import { serviceDetails } from "../components/service-data";
import { JsonLd, pageMetadata } from "../lib/seo";
import { absoluteUrl } from "../lib/site";

export const metadata = pageMetadata({
  title: "Construction Services in Dallas, TX",
  description:
    "Commercial and residential construction services in Dallas: general contracting, tenant improvements, design-build, renovation, pre-construction, and consultation.",
  path: "/services",
  image: "/projects/westhouse/1.jpeg",
});

const faqs = [
  { question: "What construction services does Correa General Contractors offer?", answer: "We offer general contracting, commercial construction and tenant improvements, residential construction and custom homes, design-build, renovation and remodeling, pre-construction planning, and project consultation for owners across Dallas–Fort Worth." },
  { question: "Do you work on both commercial and residential projects?", answer: "Yes. Our portfolio includes commercial build-outs as well as residential duplexes and large multifamily communities, so we support business owners, tenants, developers, and homeowners." },
  { question: "Which areas do you serve?", answer: "We are based in Dallas and serve the Dallas–Fort Worth metroplex, including Fort Worth, Arlington, Plano, Frisco, Irving, Denton, and McKinney." },
];

export default function ServicesPage() {
  const market = serviceDetails.filter((service) => service.category === "market");
  const core = serviceDetails.filter((service) => service.category === "core");

  return (
    <div className="bg-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Construction services by Correa General Contractors",
          itemListElement: serviceDetails.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: service.title,
            url: absoluteUrl(`/services/${service.slug}`),
          })),
        }}
      />
      <SiteHeader />
      <main id="main-content">
        <PageHero
          aside={<HeroStats />}
          eyebrow="OUR SERVICES"
          title="Construction Services in Dallas, TX"
          description="From pre-construction budgets to final handover, Correa General Contractors delivers commercial and residential construction across Dallas–Fort Worth with one accountable team."
          crumbs={[{ name: "Services", path: "/services" }]}
          image="/projects/westhouse/1.jpeg"
        >
          <HeroCtas />
        </PageHero>

        <AnswerBox>
          <p>
            Correa General Contractors provides general contracting, commercial construction and tenant
            improvements, residential and custom home construction, design-build, renovation and
            remodeling, pre-construction planning, and project consultation throughout Dallas–Fort Worth.
          </p>
        </AnswerBox>

        <section className="w-full px-6 py-16 md:px-10 lg:px-14">
          <h2 className="text-3xl font-semibold text-[#1F2A30] md:text-4xl">Commercial & Residential Construction</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {market.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group gsap-zoom-card reveal-up overflow-hidden rounded-2xl bg-[#1F2A30] text-white">
                <div className="relative h-64">
                  <Image src={service.heroImage} alt={`${service.title} in Dallas`} fill className="object-cover opacity-85" data-zoom-target sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold">{service.title} →</h3>
                  <p className="mt-2 text-white/85">{service.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>

          <h2 className="mt-16 text-3xl font-semibold text-[#1F2A30] md:text-4xl">How We Deliver Your Project</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {core.map((service) => (
              <article key={service.slug} className="gsap-zoom-card reveal-up w-full overflow-hidden md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-2xl border border-[#6B7280]/20">
                <div className="relative h-52">
                  <Image src={service.heroImage} alt={`${service.title} services in Dallas`} fill className="object-cover" data-zoom-target sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="space-y-3 p-6">
                  <h3 className="text-2xl text-[#1F2A30]">{service.title}</h3>
                  <p className="text-[#64748B]">{service.shortDescription}</p>
                  <Link href={`/services/${service.slug}`} className="inline-flex text-sm font-semibold text-[#1F2A30] transition hover:text-[#C2A57A]">
                    Explore {service.title.toLowerCase()} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
        <FaqSection faqs={faqs} />
        <PageCta />
      </main>
      <SiteFooter />
    </div>
  );
}
