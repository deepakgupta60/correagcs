import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../../components/blog-data";
import { SiteFooter, SiteHeader } from "../../components/homepage-sections";
import {
  AnswerBox,
  BulletList,
  CardGrid,
  ContentSection,
  FaqSection,
  HeroCtas,
  PageCta,
  PageHero,
  ProcessSteps, HeroStats } from "../../components/inner-page-sections";
import { projectsData } from "../../components/project-data";
import { getServiceBySlug, serviceDetails } from "../../components/service-data";
import { JsonLd, pageMetadata, serviceSchema } from "../../lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
    image: service.heroImage,
    imageAlt: `${service.title} in Dallas by Correa General Contractors`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const path = `/services/${service.slug}`;
  const projects = projectsData.filter((project) => service.relatedProjects.includes(project.slug));
  const guides = blogPosts.filter((post) => post.relatedServices.includes(service.slug)).slice(0, 3);
  const otherServices = serviceDetails.filter((item) => item.slug !== service.slug);

  return (
    <div className="bg-white">
      <JsonLd
        data={serviceSchema({
          name: service.h1,
          description: service.seoDescription,
          path,
          serviceType: service.serviceType,
        })}
      />
      <SiteHeader />
      <main id="main-content">
        <PageHero
          aside={<HeroStats />}
          eyebrow="SERVICES"
          title={service.h1}
          description={service.shortDescription}
          crumbs={[
            { name: "Services", path: "/services" },
            { name: service.title, path },
          ]}
          image={service.heroImage}
        >
          <HeroCtas />
        </PageHero>

        <AnswerBox>
          <p>{service.answer}</p>
        </AnswerBox>

        <ContentSection title={`${service.title} With One Accountable Team`}>
          {service.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </ContentSection>

        <section className="py-14 md:py-16">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <h2 className="mb-8 text-3xl font-semibold text-[#1F2A30] md:text-4xl">
              What Our {service.title} Service Includes
            </h2>
            <CardGrid items={service.included} />
          </div>
        </section>

        <section className="bg-[#eef3f8] py-14 md:py-16">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <h2 className="mb-8 text-3xl font-semibold text-[#1F2A30] md:text-4xl">Our Process</h2>
            <ProcessSteps steps={service.process} />
          </div>
        </section>

        <ContentSection title="Who This Service Is For">
          <BulletList items={service.idealFor} />
        </ContentSection>

        {projects.length ? (
          <section className="py-14 md:py-16">
            <div className="w-full px-6 md:px-10 lg:px-14">
              <h2 className="text-3xl font-semibold text-[#1F2A30] md:text-4xl">Related Projects</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {projects.map((project) => (
                  <Link key={project.slug} href={`/projects/${project.slug}`} className="group reveal-up overflow-hidden rounded-2xl border border-[#dbe3ee]">
                    <div className="relative h-56">
                      <Image src={project.heroImage} alt={`${project.title}, ${project.location}`} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-semibold tracking-[0.2em] text-[#C2A57A]">{project.category.toUpperCase()} · {project.location}</p>
                      <h3 className="mt-1 text-lg font-semibold text-[#1F2A30]">{project.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <FaqSection faqs={service.faqs} title={`${service.title} FAQs`} />

        <section className="py-14 md:py-16">
          <div className="grid w-full gap-10 px-6 md:px-10 lg:grid-cols-2 lg:px-14">
            {guides.length ? (
              <div>
                <h2 className="text-2xl font-semibold text-[#1F2A30]">Helpful Guides</h2>
                <ul className="mt-4 space-y-3">
                  {guides.map((post) => (
                    <li key={post.slug}>
                      <Link href={`/blog/${post.slug}`} className="font-semibold text-[#1F2A30] hover:text-[#C2A57A]">
                        {post.title} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div>
              <h2 className="text-2xl font-semibold text-[#1F2A30]">Other Services</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {otherServices.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/services/${item.slug}`} className="text-[#475569] hover:text-[#C2A57A]">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <PageCta title={`Talk to a Dallas ${service.title.toLowerCase()} expert`} />
      </main>
      <SiteFooter />
    </div>
  );
}
