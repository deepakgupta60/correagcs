"use client";

import Image from "next/image";
import Link from "next/link";
import type { ProjectItem } from "./project-data";

export function ProjectsShowcase({ projects }: { projects: ProjectItem[] }) {
  return (
    <section className="py-16 md:py-20">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <div className="mb-8 reveal-up">
          <p className="text-sm font-semibold tracking-[0.24em] text-[#C2A57A]">ALL PROJECTS</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#1F2A30] md:text-5xl">
            Explore All Completed Projects
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.slug} className="group gsap-zoom-card reveal-up overflow-hidden rounded-2xl border border-[#dbe3ee] bg-white shadow-[0_12px_26px_rgba(10,30,40,0.09)]">
              <div className="relative h-64">
                <Image src={project.heroImage} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-105" data-zoom-target sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="space-y-3 p-5">
                <p className="text-xs font-semibold tracking-[0.22em] text-[#C2A57A]">{project.category}</p>
                <h3 className="text-2xl font-semibold text-[#1F2A30]">{project.title}</h3>
                <p className="text-sm leading-7 text-[#64748B]">{project.summary}</p>
                <div className="grid gap-1 text-sm text-[#334155]">
                  <p><span className="font-semibold text-[#1F2A30]">Location:</span> {project.location}</p>
                  <p><span className="font-semibold text-[#1F2A30]">Date:</span> {project.date}</p>
                  <p><span className="font-semibold text-[#1F2A30]">Owner:</span> {project.owner}</p>
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center justify-center rounded-full bg-[#1F2A30] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#11181d]"
                >
                  View Project Details
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 grid gap-3 rounded-2xl border border-[#dbe3ee] bg-[#f8fafc] p-5 text-sm text-[#475569] md:grid-cols-3">
          <p><span className="font-semibold text-[#1F2A30]">Hover support:</span> Cards include motion focus and image zoom.</p>
          <p><span className="font-semibold text-[#1F2A30]">Detail pages:</span> Each card opens full gallery, video, and project info.</p>
          <p><span className="font-semibold text-[#1F2A30]">Mobile ready:</span> Grid automatically stacks for small screens.</p>
        </div>
      </div>
    </section>
  );
}
