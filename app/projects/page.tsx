import { projectsData } from "../components/project-data";
import { ProjectsShowcase } from "../components/projects-showcase";
import { SiteFooter, SiteHeader } from "../components/homepage-sections";
import { PageCta, PageHero, HeroStats } from "../components/inner-page-sections";
import { JsonLd, pageMetadata } from "../lib/seo";
import { absoluteUrl } from "../lib/site";

export const metadata = pageMetadata({
  title: "Construction Projects & Portfolio",
  description:
    "See construction projects by Correa General Contractors, including multifamily communities in Keller and Odessa and a residential duplex in Red Oak, TX.",
  path: "/projects",
  image: "/projects/westhouse/4.jpeg",
});

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Construction projects by Correa General Contractors",
          url: absoluteUrl("/projects"),
          hasPart: projectsData.map((project) => ({
            "@type": "CreativeWork",
            name: project.title,
            url: absoluteUrl(`/projects/${project.slug}`),
            image: absoluteUrl(project.heroImage),
            locationCreated: { "@type": "Place", name: project.location },
          })),
        }}
      />
      <SiteHeader />
      <main id="main-content">
        <PageHero
          aside={<HeroStats />}
          eyebrow="OUR PROJECTS"
          title="Construction Projects Across Texas"
          description="Browse completed multifamily and residential projects built with precision craftsmanship. Open any project for the full photo gallery, video, and project details."
          crumbs={[{ name: "Projects", path: "/projects" }]}
          image="/projects/odessa/1.jpg"
        />
        <ProjectsShowcase projects={projectsData} />
        <PageCta title="Have a project like these?" />
      </main>
      <SiteFooter />
    </div>
  );
}
