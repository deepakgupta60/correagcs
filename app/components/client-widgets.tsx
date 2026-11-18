"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Project = { title: string; image: string; href: string; location: string; category: string };

export function FeaturedProjectsScroller({ projects }: { projects: Project[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollProjects = (direction: "left" | "right") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const amount = Math.round(scroller.clientWidth * 0.9);
    scroller.scrollBy({ left: direction === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <>
      <div className="mb-6 flex items-center justify-between gap-3">
        <h2 className="reveal-up text-3xl text-[#1F2A30] md:text-5xl">Featured Projects</h2>
        <div className="reveal-up flex items-center gap-2">
          <button type="button" onClick={() => scrollProjects("left")} aria-label="Previous projects" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#dbe3ee] text-[#1F2A30] transition hover:bg-[#eef3f8]">
            ←
          </button>
          <button type="button" onClick={() => scrollProjects("right")} aria-label="Next projects" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#dbe3ee] text-[#1F2A30] transition hover:bg-[#eef3f8]">
            →
          </button>
        </div>
      </div>
      <div ref={scrollerRef} className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {projects.map((project) => (
          <article key={project.title} className="group gsap-zoom-card reveal-up min-w-[88%] snap-start overflow-hidden rounded-2xl border border-[#dbe3ee] bg-white shadow-[0_12px_26px_rgba(10,30,40,0.09)] sm:min-w-[65%] lg:min-w-[32%]">
            <div className="relative h-64">
              <Image src={project.image} alt={`${project.title} – ${project.category} project in ${project.location}`} fill className="object-cover transition duration-500 group-hover:scale-110" data-zoom-target sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#C2A57A]">{project.category.toUpperCase()} · {project.location}</p>
              <h3 className="mt-1 text-xl font-semibold text-[#1F2A30]">{project.title}</h3>
              <Link href={project.href} className="mt-2 inline-flex text-sm font-semibold text-[#1F2A30] transition hover:text-[#C2A57A]">
                View project →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

/**
 * Background hero video that only loads on larger screens with no
 * reduced-motion / data-saver preference. Phones get the poster image only,
 * which keeps mobile LCP fast.
 */
export function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 768px)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (!wide || calm || saveData) return;
    const id = window.setTimeout(() => setEnabled(true), 0);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <>
      <Image src={poster} alt="" fill priority sizes="100vw" className="object-cover" aria-hidden="true" />
      {enabled ? (
        <video autoPlay loop muted playsInline preload="none" poster={poster} className="absolute inset-0 h-full w-full object-cover" aria-hidden="true">
          <source src={src} type="video/mp4" />
        </video>
      ) : null}
    </>
  );
}
