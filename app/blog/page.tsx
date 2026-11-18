import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../components/blog-data";
import { SiteFooter, SiteHeader } from "../components/homepage-sections";
import { PageCta, PageHero } from "../components/inner-page-sections";
import { AUTHOR } from "../lib/people";
import { JsonLd, ORG_ID, pageMetadata } from "../lib/seo";
import { absoluteUrl } from "../lib/site";

export const metadata = pageMetadata({
  title: "Construction Blog & Guides for Dallas Owners",
  description:
    "Practical construction guides for Dallas–Fort Worth owners: budgeting, permits, tenant improvements, design-build, timelines, and choosing a general contractor.",
  path: "/blog",
});

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });

export default function BlogPage() {
  return (
    <div className="bg-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Correa General Contractors Blog",
          url: absoluteUrl("/blog"),
          publisher: { "@id": ORG_ID },
          blogPost: blogPosts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            url: absoluteUrl(`/blog/${post.slug}`),
            datePublished: post.publishedAt,
            author: { "@type": "Person", name: AUTHOR.name, url: absoluteUrl(`/author/${AUTHOR.slug}`) },
            dateModified: post.updatedAt,
          })),
        }}
      />
      <SiteHeader />
      <main id="main-content">
        <PageHero
          eyebrow="INSIGHTS"
          title="Construction Guides for Dallas–Fort Worth Owners"
          description="Straightforward answers on budgets, permits, schedules, and contractor selection for Dallas–Fort Worth property owners, written by Deepak Gupta with the Correa General Contractors team."
          crumbs={[{ name: "Blog", path: "/blog" }]}
        />
        <section className="py-16 md:py-20">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {blogPosts.map((post) => (
                <article key={post.slug} className="reveal-up overflow-hidden rounded-2xl border border-[#dbe3ee] bg-white shadow-[0_12px_26px_rgba(10,30,40,0.09)]">
                  <div className="relative h-56">
                    <Image src={post.image} alt={post.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="space-y-3 p-6">
                    <p className="text-xs font-semibold tracking-[0.22em] text-[#9a7f55]">
                      <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time> · {post.readMinutes} min read
                    </p>
                    <p className="text-sm text-[#64748B]">
                      By <Link href={`/author/${AUTHOR.slug}`} className="font-semibold text-[#1F2A30] hover:text-[#C2A57A]">{AUTHOR.name}</Link>
                    </p>
                    <h2 className="text-2xl font-semibold text-[#1F2A30]">
                      <Link href={`/blog/${post.slug}`} className="hover:text-[#C2A57A]">{post.title}</Link>
                    </h2>
                    <p className="text-[#64748B]">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className="inline-flex text-sm font-semibold text-[#1F2A30] transition hover:text-[#C2A57A]" aria-label={`Read: ${post.title}`}>
                      Read the guide →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <PageCta />
      </main>
      <SiteFooter />
    </div>
  );
}
