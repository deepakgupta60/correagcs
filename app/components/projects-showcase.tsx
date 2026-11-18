import Image from "next/image";
import Link from "next/link";
import type { ProjectItem } from "./project-data";

export function ProjectsShowcase({ projects }: { projects: ProjectItem[] }) {
  return (
    <section className="py-16 md:py-20">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <div className="mb-8 reveal-up">
          <p className="text-sm font-semibold tracking-[0.24em] text-[#C2A57A]">PORTFOLIO</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#1F2A30] md:text-5xl">Completed Texas Projects</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.slug} className="group gsap-zoom-card reveal-up overflow-hidden rounded-2xl border border-[#dbe3ee] bg-white shadow-[0_12px_26px_rgba(10,30,40,0.09)]">
              <div className="relative h-64">
                <Image src={project.heroImage} alt={`${project.title} – ${project.category} project in ${project.location}`} fill className="object-cover transition duration-500 group-hover:scale-105" data-zoom-target sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="space-y-3 p-5">
                <p className="text-xs font-semibold tracking-[0.22em] text-[#C2A57A]">{project.category.toUpperCase()}</p>
                <h3 className="text-2xl font-semibold text-[#1F2A30]">{project.title}</h3>
                <p className="text-sm leading-7 text-[#64748B]">{project.summary}</p>
                <dl className="grid gap-1 text-sm text-[#334155]">
                  <div><dt className="inline font-semibold text-[#1F2A30]">Location: </dt><dd className="inline">{project.location}</dd></div>
                  <div><dt className="inline font-semibold text-[#1F2A30]">Completed: </dt><dd className="inline">{project.date}</dd></div>
                </dl>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center justify-center rounded-full bg-[#1F2A30] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#11181d]"
                >
                  View {project.title}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
