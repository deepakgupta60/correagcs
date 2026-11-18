import Link from "next/link";
import { SiteFooter, SiteHeader } from "./homepage-sections";
import {
  AnswerBox,
  BulletList,
  ContentSection,
  FaqSection,
  HeroCtas,
  PageCta,
  PageHero, HeroStats } from "./inner-page-sections";
import { projectsData } from "./project-data";
import type { LocationPageData } from "./location-data";
import { JsonLd, pageMetadata, serviceSchema } from "../lib/seo";
import { SITE } from "../lib/site";
import Image from "next/image";

export function locationMetadata(page: LocationPageData) {
  return pageMetadata({
    title: page.seoTitle,
    description: page.seoDescription,
    path: page.path,
    image: page.heroImage,
    imageAlt: `${page.h1} – Correa General Contractors`,
  });
}

export function LocationPage({ page }: { page: LocationPageData }) {
  return (
    <div className="bg-white">
      <JsonLd
        data={serviceSchema({
          name: page.h1,
          description: page.seoDescription,
          path: page.path,
          serviceType: "General contracting",
          areas: [page.city, ...page.nearby],
        })}
      />
      <SiteHeader />
      <main id="main-content">
        <PageHero
          aside={<HeroStats />}
          eyebrow={page.eyebrow}
          title={page.h1}
          description={page.intro[0]}
          crumbs={[{ name: page.linkLabel, path: page.path }]}
          image={page.heroImage}
        >
          <HeroCtas />
        </PageHero>
        <AnswerBox>
          <p>{page.answer}</p>
        </AnswerBox>
        <ContentSection title={`Why ${page.city} Owners Choose Correa`}>
          {page.intro.slice(1).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <BulletList items={page.localNotes} />
        </ContentSection>
        <section className="py-14 md:py-16">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <h2 className="text-3xl font-semibold text-[#1F2A30] md:text-4xl">
              Construction Services in {page.city}, TX
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {page.services.map((service) => (
                <Link key={service.href} href={service.href} className="reveal-up rounded-2xl border border-[#dbe3ee] bg-white p-6 shadow-[0_10px_24px_rgba(10,30,40,0.06)] transition hover:border-[#C2A57A]">
                  <h3 className="text-xl font-semibold text-[#1F2A30]">{service.title} →</h3>
                  <p className="mt-2 leading-7 text-[#64748B]">{service.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="py-14 md:py-16">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <h2 className="text-3xl font-semibold text-[#1F2A30] md:text-4xl">Recent North Texas Projects</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {projectsData.map((project) => (
                <Link key={project.slug} href={`/projects/${project.slug}`} className="group reveal-up overflow-hidden rounded-2xl border border-[#dbe3ee]">
                  <div className="relative h-52">
                    <Image src={project.heroImage} alt={`${project.title} in ${project.location}`} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold tracking-[0.2em] text-[#C2A57A]">{project.location.toUpperCase()}</p>
                    <h3 className="mt-1 text-lg font-semibold text-[#1F2A30]">{project.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <ContentSection title={`Areas We Serve Near ${page.city}`}>
          <p>
            From our office at {SITE.addressLine}, we serve {page.city} and nearby communities including{" "}
            {page.nearby.join(", ")}, along with Dallas and the rest of the DFW metroplex.
          </p>
        </ContentSection>
        <FaqSection faqs={page.faqs} title={`${page.city} Construction FAQs`} />
        <PageCta title={`Planning a project in ${page.city}?`} />
      </main>
      <SiteFooter />
    </div>
  );
}
