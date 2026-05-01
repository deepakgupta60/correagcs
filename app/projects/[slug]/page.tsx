import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projectsData } from "../../components/project-data";
import { SiteFooter, SiteHeader } from "../../components/homepage-sections";
import { PageCta } from "../../components/inner-page-sections";

type ProjectDetailProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Correa Construction",
      description: "The requested project detail page could not be found.",
    };
  }

  return {
    title: `${project.title} Project | Correa Construction`,
    description: `${project.summary} Location: ${project.location}. Owner: ${project.owner}.`,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} Project | Correa Construction`,
      description: project.summary,
      images: [project.heroImage],
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div className="bg-white">
      <SiteHeader />
      <main>
        <section className="bg-gradient-to-r from-[#11181d] via-[#1F2A30] to-[#24343d] py-24 text-white md:py-32">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <p className="text-sm font-semibold tracking-[0.28em] text-[#C2A57A]">PROJECT DETAIL</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">{project.title}</h1>
            <p className="mt-5 max-w-3xl text-lg text-white/80">{project.summary}</p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="space-y-3 rounded-2xl border border-[#dbe3ee] bg-[#f8fafc] p-5 text-sm text-[#334155] lg:col-span-1">
                <p><span className="font-semibold text-[#1F2A30]">Location:</span> {project.location}</p>
                <p><span className="font-semibold text-[#1F2A30]">Date:</span> {project.date}</p>
                <p><span className="font-semibold text-[#1F2A30]">Owner:</span> {project.owner}</p>
                <p><span className="font-semibold text-[#1F2A30]">Category:</span> {project.category}</p>
                <Link href="/projects" className="inline-flex pt-2 text-sm font-semibold text-[#1F2A30] hover:text-[#C2A57A]">
                  ← Back to Projects
                </Link>
              </div>
              <div className="overflow-hidden rounded-2xl border border-[#dbe3ee] lg:col-span-2">
                <div className="relative h-72 md:h-[26rem]">
                  <Image src={project.heroImage} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" priority />
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-5">
              <article className="reveal-up rounded-2xl border border-[#dbe3ee] bg-white p-6 shadow-[0_10px_24px_rgba(10,30,40,0.07)] lg:col-span-3">
                <h2 className="text-3xl font-semibold text-[#1F2A30]">Project Overview</h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-[#64748B]">
                  {project.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
              <article className="reveal-up rounded-2xl border border-[#dbe3ee] bg-white p-6 shadow-[0_10px_24px_rgba(10,30,40,0.07)] lg:col-span-2">
                <h2 className="text-2xl font-semibold text-[#1F2A30]">Project Video</h2>
                <video controls className="mt-4 h-56 w-full rounded-xl object-cover" poster="/black.png">
                  <source src={project.video} type="video/mp4" />
                </video>
              </article>
            </div>

            <section className="mt-10">
              <h2 className="reveal-up text-3xl font-semibold text-[#1F2A30]">Project Gallery</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {project.gallery.map((image) => (
                  <div key={image} className="reveal-up relative h-56 overflow-hidden rounded-2xl border border-[#dbe3ee]">
                    <Image src={image} alt={`${project.title} gallery`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>

        <PageCta />
      </main>
      <SiteFooter />
    </div>
  );
}
