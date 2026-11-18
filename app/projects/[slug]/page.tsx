import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projectsData } from "../../components/project-data";
import { SiteFooter, SiteHeader } from "../../components/homepage-sections";
import { BulletList, PageCta, PageHero } from "../../components/inner-page-sections";
import { JsonLd, ORG_ID, pageMetadata } from "../../lib/seo";
import { absoluteUrl } from "../../lib/site";

type ProjectDetailProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return pageMetadata({
    title: `${project.title}, ${project.location} | Project`,
    description: `${project.category} project by Correa General Contractors in ${project.location}, completed ${project.date}. ${project.summary}`.slice(0, 158),
    path: `/projects/${project.slug}`,
    image: project.heroImage,
    imageAlt: `${project.title} in ${project.location}`,
  });
}

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const path = `/projects/${project.slug}`;
  const others = projectsData.filter((item) => item.slug !== project.slug);

  return (
    <div className="bg-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: project.description.join(" "),
          url: absoluteUrl(path),
          image: project.gallery.map((image) => absoluteUrl(image)),
          creator: { "@id": ORG_ID },
          locationCreated: { "@type": "Place", name: project.location },
          genre: project.category,
        }}
      />
      <SiteHeader />
      <main id="main-content">
        <PageHero
          eyebrow={`${project.category.toUpperCase()} PROJECT`}
          title={project.title}
          description={project.summary}
          crumbs={[
            { name: "Projects", path: "/projects" },
            { name: project.title, path },
          ]}
          image={project.heroImage}
          imageAlt={`${project.title} in ${project.location}`}
        />

        <section className="py-16 md:py-20">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="grid gap-6 lg:grid-cols-3">
              <dl className="space-y-3 rounded-2xl border border-[#dbe3ee] bg-[#f8fafc] p-5 text-sm text-[#334155] lg:col-span-1">
                <div><dt className="inline font-semibold text-[#1F2A30]">Location: </dt><dd className="inline">{project.location}</dd></div>
                <div><dt className="inline font-semibold text-[#1F2A30]">Completed: </dt><dd className="inline">{project.date}</dd></div>
                <div><dt className="inline font-semibold text-[#1F2A30]">Category: </dt><dd className="inline">{project.category}</dd></div>
                <Link href="/projects" className="inline-flex pt-2 text-sm font-semibold text-[#1F2A30] hover:text-[#C2A57A]">
                  ← Back to all projects
                </Link>
              </dl>
              <div className="overflow-hidden rounded-2xl border border-[#dbe3ee] lg:col-span-2">
                <div className="relative aspect-video">
                  <iframe
                    src={project.video}
                    title={`${project.title} project video`}
                    className="h-full w-full"
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            <article className="reveal-up mt-8 rounded-2xl border border-[#dbe3ee] bg-white p-6 shadow-[0_10px_24px_rgba(10,30,40,0.07)]">
              <h2 className="text-3xl font-semibold text-[#1F2A30]">Project Overview</h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-[#475569]">
                {project.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <h3 className="mt-8 text-xl font-semibold text-[#1F2A30]">Project Highlights</h3>
              <div className="mt-4">
                <BulletList items={project.highlights} />
              </div>
            </article>

            <section className="mt-10">
              <h2 className="reveal-up text-3xl font-semibold text-[#1F2A30]">Project Gallery</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {project.gallery.map((image, index) => (
                  <div key={image} className="reveal-up relative h-56 overflow-hidden rounded-2xl border border-[#dbe3ee]">
                    <Image
                      src={image}
                      alt={`${project.title}, ${project.location} – photo ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-[#1F2A30]">More Projects</h2>
              <ul className="mt-4 flex flex-wrap gap-3">
                {others.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/projects/${item.slug}`} className="inline-flex rounded-full border border-[#dbe3ee] px-4 py-2 text-sm font-semibold text-[#1F2A30] hover:border-[#C2A57A]">
                      {item.title} →
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services/residential" className="inline-flex rounded-full border border-[#dbe3ee] px-4 py-2 text-sm font-semibold text-[#1F2A30] hover:border-[#C2A57A]">
                    Residential construction services →
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </section>

        <PageCta title="Planning a similar project?" />
      </main>
      <SiteFooter />
    </div>
  );
}
