import { blogPosts } from "../components/blog-data";
import { locationPages } from "../components/location-data";
import { projectsData } from "../components/project-data";
import { serviceDetails } from "../components/service-data";
import { AUTHOR, FOUNDER } from "../lib/people";
import { SITE, absoluteUrl } from "../lib/site";

export const dynamic = "force-static";

/**
 * /llms-full.txt: the site's full text content in one plain-text file, so AI
 * assistants and answer engines can read everything in one request (GEO).
 * Companion to /llms.txt (the short index). See https://llmstxt.org
 */
export function GET() {
  const out: string[] = [];
  const h = (level: number, text: string) => out.push("", `${"#".repeat(level)} ${text}`, "");
  const faqs = (items: { question: string; answer: string }[]) =>
    items.forEach((faq) => out.push(`**Q: ${faq.question}**`, `A: ${faq.answer}`, ""));

  out.push(
    `# ${SITE.name}: full site content`,
    "",
    `> ${SITE.name} is a commercial and residential general contractor in Dallas, Texas, with ${SITE.stats.years} years of experience and ${SITE.stats.projects} completed projects across the Dallas–Fort Worth metroplex.`,
    "",
    `Source: ${SITE.url} · Short index: ${absoluteUrl("/llms.txt")}`,
  );

  h(2, "Company facts");
  out.push(
    `- Legal/brand name: ${SITE.name}`,
    `- Business type: General contractor (commercial and residential construction)`,
    `- Founder & President: ${FOUNDER.name}`,
    `- Address: ${SITE.addressLine}, USA`,
    `- Phone: ${SITE.phone}`,
    `- Email: ${SITE.email}`,
    `- Hours: ${SITE.hours.label}`,
    `- Service area: ${SITE.serviceAreas.join(", ")} and the wider Dallas–Fort Worth metroplex`,
    `- Experience: ${SITE.stats.years} years · Completed projects: ${SITE.stats.projects} · Core trades managed: ${SITE.stats.trades}`,
    `- Google Maps: ${SITE.mapsUrl}`,
    `- Social: ${Object.values(SITE.social).join(" · ")}`,
    `- Request an estimate: ${absoluteUrl("/contact-us")}`,
  );

  h(2, "Founder");
  out.push(`${FOUNDER.name}, ${FOUNDER.jobTitle}`, "", ...FOUNDER.bio.flatMap((p) => [p, ""]));

  h(2, "Services");
  serviceDetails.forEach((service) => {
    h(3, `${service.h1} (${absoluteUrl(`/services/${service.slug}`)})`);
    out.push(service.answer, "", ...service.intro.flatMap((p) => [p, ""]));
    out.push("What's included:", ...service.included.map((item) => `- ${item.title}: ${item.text}`), "");
    out.push("Process:", ...service.process.map((step, i) => `${i + 1}. ${step.title}: ${step.text}`), "");
    out.push("Ideal for:", ...service.idealFor.map((item) => `- ${item}`), "");
    faqs(service.faqs);
  });

  h(2, "Service areas");
  locationPages.forEach((location) => {
    h(3, `${location.h1} (${absoluteUrl(location.path)})`);
    out.push(location.answer, "", ...location.intro.flatMap((p) => [p, ""]));
    out.push(`Nearby communities served: ${location.nearby.join(", ")}`, "");
    faqs(location.faqs);
  });

  h(2, "Projects");
  projectsData.forEach((project) => {
    h(3, `${project.title}, ${project.location} (${absoluteUrl(`/projects/${project.slug}`)})`);
    out.push(`Category: ${project.category} · Completed: ${project.date}`, "", ...project.description.flatMap((p) => [p, ""]));
    out.push(...project.highlights.map((item) => `- ${item}`), "");
  });

  h(2, `Construction guides (by ${AUTHOR.name})`);
  blogPosts.forEach((post) => {
    h(3, `${post.title} (${absoluteUrl(`/blog/${post.slug}`)})`);
    out.push(`Published ${post.publishedAt} · Updated ${post.updatedAt} · Author: ${AUTHOR.name}`, "");
    out.push("Key takeaways:", ...post.keyTakeaways.map((item) => `- ${item}`), "");
    post.sections.forEach((section) => {
      out.push(`#### ${section.heading}`, "", ...section.paragraphs.flatMap((p) => [p, ""]));
      if (section.bullets?.length) out.push(...section.bullets.map((b) => `- ${b}`), "");
    });
    faqs(post.faqs);
  });

  return new Response(out.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
