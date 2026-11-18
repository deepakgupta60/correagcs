import { blogPosts } from "../components/blog-data";
import { locationPages } from "../components/location-data";
import { projectsData } from "../components/project-data";
import { serviceDetails } from "../components/service-data";
import { SITE, absoluteUrl } from "../lib/site";

export const dynamic = "force-static";

/**
 * /llms.txt: a plain-text summary for AI assistants and answer engines (GEO).
 * See https://llmstxt.org
 */
export function GET() {
  const lines = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.name} is a commercial and residential general contractor in Dallas, Texas, with ${SITE.stats.years} years of experience and ${SITE.stats.projects} completed projects across the Dallas–Fort Worth metroplex.`,
    "",
    "## Key facts",
    `- Business type: General contractor (commercial and residential construction)`,
    `- Address: ${SITE.addressLine}, USA`,
    `- Phone: ${SITE.phone}`,
    `- Email: ${SITE.email}`,
    `- Hours: ${SITE.hours.label}`,
    `- Service area: ${SITE.serviceAreas.join(", ")} and the Dallas–Fort Worth metroplex`,
    `- Google Maps: ${SITE.mapsUrl}`,
    "",
    "## Services",
    ...serviceDetails.map((service) => `- [${service.title}](${absoluteUrl(`/services/${service.slug}`)}): ${service.shortDescription}`),
    "",
    "## Service areas",
    `- [General Contractor in Dallas](${SITE.url})`,
    ...locationPages.map((location) => `- [${location.linkLabel}](${absoluteUrl(location.path)})`),
    "",
    "## Projects",
    ...projectsData.map((project) => `- [${project.title}](${absoluteUrl(`/projects/${project.slug}`)}): ${project.category}, ${project.location}, ${project.date}`),
    "",
    "## Guides",
    ...blogPosts.map((post) => `- [${post.title}](${absoluteUrl(`/blog/${post.slug}`)}): ${post.excerpt}`),
    "",
    "## Contact",
    `- [Request a free estimate](${absoluteUrl("/contact-us")})`,
    `- [About the company](${absoluteUrl("/about-us")})`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
