import type { Metadata } from "next";
import { projectsData } from "../components/project-data";
import { ProjectsShowcase } from "../components/projects-showcase";
import { SiteFooter, SiteHeader } from "../components/homepage-sections";
import { PageCta, PageHero } from "../components/inner-page-sections";

export const metadata: Metadata = {
  title: "Construction Projects | Correa Construction",
  description:
    "Explore Correa Construction projects across residential, commercial, and industrial categories with project details and delivery highlights.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="OUR PROJECTS"
          title="Built Projects with Real-World Impact"
          description="Browse multiple completed projects. Hover on a project to preview details, then open its full page for photos, video, timeline, and ownership details."
        />
        <ProjectsShowcase projects={projectsData} />
        <PageCta />
      </main>
      <SiteFooter />
    </div>
  );
}
