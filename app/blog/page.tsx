import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../components/blog-data";
import { SiteFooter, SiteHeader } from "../components/homepage-sections";
import { PageCta, PageHero } from "../components/inner-page-sections";

export const metadata: Metadata = {
  title: "Construction Blog | Correa Construction",
  description:
    "Read practical construction insights, planning tips, budgeting guidance, and project best practices from Correa Construction.",
};

export default function BlogPage() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="INSIGHTS"
          title="Correa Construction Blog"
          description="Actionable guides and construction insights for owners, partners, and teams planning projects in Dallas-Fort Worth."
        />
        <section className="py-16 md:py-20">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="grid gap-6 md:grid-cols-2">
              {blogPosts.map((post) => (
                <article key={post.title} className="reveal-up overflow-hidden rounded-2xl border border-[#dbe3ee] bg-white shadow-[0_12px_26px_rgba(10,30,40,0.09)]">
                  <div className="relative h-56">
                    <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                  <div className="space-y-3 p-6">
                    <p className="text-xs font-semibold tracking-[0.22em] text-[#C2A57A]">{post.date}</p>
                    <h2 className="text-2xl font-semibold text-[#1F2A30]">{post.title}</h2>
                    <p className="text-[#64748B]">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className="inline-flex text-sm font-semibold text-[#1F2A30] transition hover:text-[#C2A57A]">
                      Read Full Article →
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
