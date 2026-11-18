import { blogPosts } from "../components/blog-data";
import { AUTHOR } from "../lib/people";
import { SITE, absoluteUrl } from "../lib/site";

export const dynamic = "force-static";

const esc = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const rfc822 = (iso: string) => new Date(`${iso}T12:00:00Z`).toUTCString();

/** /feed.xml: RSS 2.0 feed of the blog, for feed readers, Google Discover and AI crawlers. */
export function GET() {
  const latest = blogPosts.reduce((max, post) => (post.updatedAt > max ? post.updatedAt : max), blogPosts[0].updatedAt);

  const items = blogPosts
    .map((post) => {
      const url = absoluteUrl(`/blog/${post.slug}`);
      return `    <item>
      <title>${esc(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${esc(post.seoDescription)}</description>
      <dc:creator>${esc(AUTHOR.name)}</dc:creator>
      <pubDate>${rfc822(post.publishedAt)}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${esc(SITE.name)} Blog</title>
    <link>${absoluteUrl("/blog")}</link>
    <atom:link href="${absoluteUrl("/feed.xml")}" rel="self" type="application/rss+xml" />
    <description>Construction guides for Dallas–Fort Worth property owners: budgets, permits, tenant improvements, design-build, and choosing a general contractor.</description>
    <language>en-us</language>
    <lastBuildDate>${rfc822(latest)}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
