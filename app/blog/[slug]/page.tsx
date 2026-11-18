import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "../../components/blog-data";
import { SiteFooter, SiteHeader } from "../../components/homepage-sections";
import { Breadcrumbs, FaqSection, PageCta } from "../../components/inner-page-sections";
import { getServiceBySlug } from "../../components/service-data";
import { AuthorBox } from "../../components/person-card";
import { AUTHOR } from "../../lib/people";
import { JsonLd, ORG_ID, WEBSITE_ID, pageMetadata } from "../../lib/seo";
import { SITE, absoluteUrl } from "../../lib/site";

type BlogDetailProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return pageMetadata({
    title: post.seoTitle,
    description: post.seoDescription,
    path: `/blog/${post.slug}`,
    image: post.image,
    imageAlt: post.imageAlt,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
  });
}

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });

const slugify = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const authorPath = `/author/${AUTHOR.slug}`;
  const services = post.relatedServices.map(getServiceBySlug).filter((service) => service !== undefined);
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <div className="bg-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.seoDescription,
          image: [post.image],
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
          mainEntityOfPage: absoluteUrl(path),
          url: absoluteUrl(path),
          author: {
            "@type": "Person",
            "@id": `${absoluteUrl(authorPath)}#person`,
            name: AUTHOR.name,
            jobTitle: AUTHOR.jobTitle,
            url: absoluteUrl(authorPath),
            worksFor: { "@id": ORG_ID, name: SITE.name },
          },
          publisher: { "@id": ORG_ID },
          isPartOf: { "@id": WEBSITE_ID },
          inLanguage: "en-US",
          about: services.map((service) => service.title),
        }}
      />
      <SiteHeader />
      <main id="main-content">
        <section className="bg-gradient-to-r from-[#11181d] via-[#1F2A30] to-[#24343d] pb-20 pt-32 text-white md:pb-24 md:pt-40">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <Breadcrumbs
              crumbs={[
                { name: "Blog", path: "/blog" },
                { name: post.title, path },
              ]}
            />
            <p className="mt-6 text-sm font-semibold tracking-[0.28em] text-[#C2A57A]">CONSTRUCTION GUIDE</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">{post.title}</h1>
            <p className="mt-5 max-w-3xl text-lg text-white/85">{post.excerpt}</p>
            <p className="mt-5 text-sm text-white/80">
              By{" "}
              <Link href={authorPath} rel="author" className="font-semibold text-white underline decoration-[#C2A57A] underline-offset-4 hover:text-[#C2A57A]">
                {AUTHOR.name}
              </Link>{" "}
              · Published <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time> · Updated{" "}
              <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time> · {post.readMinutes} min read
            </p>
          </div>
        </section>

        <div className="w-full px-6 py-14 md:px-10 lg:px-14">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_280px]">
            <article className="min-w-0">
              <div className="relative h-72 overflow-hidden rounded-2xl md:h-96">
                <Image src={post.image} alt={post.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 800px" priority />
              </div>

              <section aria-labelledby="key-takeaways" className="mt-8 rounded-2xl border-l-4 border-[#C2A57A] bg-[#f7f3ed] p-6">
                <h2 id="key-takeaways" className="text-xl font-semibold text-[#1F2A30]">Quick answer: key takeaways</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-[#334155]">
                  {post.keyTakeaways.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <div className="mt-10 space-y-10 text-base leading-8 text-[#475569] md:text-lg">
                {post.sections.map((section) => (
                  <section key={section.heading} id={slugify(section.heading)} className="scroll-mt-28">
                    <h2 className="text-2xl font-semibold text-[#1F2A30] md:text-3xl">{section.heading}</h2>
                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {section.bullets?.length ? (
                      <ul className="mt-4 list-disc space-y-2 pl-6">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </div>

              <div className="mt-12 rounded-2xl bg-[#1F2A30] p-6 text-white">
                <h2 className="text-2xl font-semibold">Need a general contractor in Dallas?</h2>
                <p className="mt-2 text-white/85">
                  {SITE.name} has {SITE.stats.years} years of experience and {SITE.stats.projects} completed projects across Dallas–Fort Worth.
                  Call <a href={SITE.phoneHref} className="font-semibold underline">{SITE.phone}</a> or{" "}
                  <Link href="/contact-us" className="font-semibold underline">request a free estimate</Link>.
                </p>
              </div>

              <AuthorBox person={AUTHOR} href={authorPath} />

              <p className="mt-6 text-sm leading-6 text-[#64748B]">
                <strong className="text-[#1F2A30]">Editorial note:</strong>{" "}This guide is general information for
                Dallas–Fort Worth property owners, based on our team&apos;s project experience. Codes, permit
                requirements, fees, and timelines change and vary by city. Confirm current requirements with the
                relevant city department before you build. Last reviewed{" "}
                <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time>.
              </p>
            </article>

            <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
              <nav aria-label="Table of contents" className="rounded-2xl border border-[#dbe3ee] p-5">
                <p className="text-xs font-semibold tracking-[0.22em] text-[#9a7f55]">IN THIS GUIDE</p>
                <ol className="mt-3 space-y-2 text-sm">
                  {post.sections.map((section) => (
                    <li key={section.heading}>
                      <a href={`#${slugify(section.heading)}`} className="text-[#334155] hover:text-[#C2A57A]">
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
              {services.length ? (
                <div className="rounded-2xl border border-[#dbe3ee] p-5">
                  <p className="text-xs font-semibold tracking-[0.22em] text-[#9a7f55]">RELATED SERVICES</p>
                  <ul className="mt-3 space-y-2 text-sm">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link href={`/services/${service.slug}`} className="font-semibold text-[#1F2A30] hover:text-[#C2A57A]">
                          {service.title} in Dallas →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </aside>
          </div>
        </div>

        <FaqSection faqs={post.faqs} />

        <section className="py-14">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <h2 className="text-2xl font-semibold text-[#1F2A30]">More Construction Guides</h2>
            <ul className="mt-4 grid gap-3 md:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/blog/${item.slug}`} className="block rounded-2xl border border-[#dbe3ee] p-5 font-semibold text-[#1F2A30] hover:border-[#C2A57A]">
                    {item.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <PageCta />
      </main>
      <SiteFooter />
    </div>
  );
}
