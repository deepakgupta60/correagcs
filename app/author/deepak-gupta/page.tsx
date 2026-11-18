import Link from "next/link";
import { blogPosts } from "../../components/blog-data";
import { SiteFooter, SiteHeader } from "../../components/homepage-sections";
import { PageCta, PageHero } from "../../components/inner-page-sections";
import { PersonAvatar } from "../../components/person-card";
import { AUTHOR } from "../../lib/people";
import { JsonLd, pageMetadata, personSchema } from "../../lib/seo";
import { absoluteUrl } from "../../lib/site";

const path = `/author/${AUTHOR.slug}`;

export const metadata = pageMetadata({
  title: `${AUTHOR.name} | Author`,
  description: `${AUTHOR.name} writes construction guides for Dallas–Fort Worth property owners at Correa General Contractors: budgets, permits, tenant improvements, and contractor selection.`,
  path,
});

export default function AuthorPage() {
  return (
    <div className="bg-white">
      <JsonLd
        data={[
          personSchema(AUTHOR, path),
          {
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            url: absoluteUrl(path),
            mainEntity: { "@id": `${absoluteUrl(path)}#person` },
          },
        ]}
      />
      <SiteHeader />
      <main id="main-content">
        <PageHero
          eyebrow="AUTHOR"
          title={AUTHOR.name}
          description={AUTHOR.jobTitle}
          crumbs={[
            { name: "Blog", path: "/blog" },
            { name: AUTHOR.name, path },
          ]}
        />
        <section className="py-14">
          <div className="grid w-full gap-10 px-6 md:px-10 lg:grid-cols-12 lg:px-14">
            <div className="lg:col-span-4">
              <PersonAvatar person={AUTHOR} size="h-32 w-32" px={128} />
              <h2 className="mt-6 text-xl font-semibold text-[#1F2A30]">Writes about</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {AUTHOR.expertise.map((topic) => (
                  <li key={topic} className="rounded-full border border-[#dbe3ee] px-3 py-1 text-sm text-[#475569]">
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 text-lg leading-8 text-[#475569] lg:col-span-8">
              {AUTHOR.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <h2 className="pt-6 text-2xl font-semibold text-[#1F2A30]">Articles by {AUTHOR.name}</h2>
              <ul className="space-y-3">
                {blogPosts.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="font-semibold text-[#1F2A30] hover:text-[#C2A57A]">
                      {post.title} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <PageCta />
      </main>
      <SiteFooter />
    </div>
  );
}
