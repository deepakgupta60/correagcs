import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, blogPosts } from "../../components/blog-data";
import { SiteFooter, SiteHeader } from "../../components/homepage-sections";
import { PageCta } from "../../components/inner-page-sections";

type BlogDetailProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found | Correa Construction",
      description: "The requested blog article could not be found.",
    };
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      images: [post.image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.seoDescription,
      images: [post.image],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="bg-white">
      <SiteHeader />
      <main>
        <section className="bg-gradient-to-r from-[#11181d] via-[#1F2A30] to-[#24343d] py-24 text-white md:py-32">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <p className="text-sm font-semibold tracking-[0.28em] text-[#C2A57A]">BLOG ARTICLE</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">{post.title}</h1>
            <p className="mt-5 text-sm text-white/75">{post.date}</p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[#dbe3ee]">
              <div className="relative h-72 md:h-96">
                <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 1024px" priority />
              </div>
            </div>
            <article className="reveal-up mx-auto mt-8 max-w-4xl rounded-2xl border border-[#dbe3ee] bg-white p-6 text-[#475569] shadow-[0_10px_24px_rgba(10,30,40,0.07)] md:p-8">
              <p className="text-lg leading-8">{post.excerpt}</p>
              <div className="mt-6 space-y-5 text-base leading-8">
                {post.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/blog" className="inline-flex text-sm font-semibold text-[#1F2A30] transition hover:text-[#C2A57A]">
                  ← Back to Blog
                </Link>
              </div>
            </article>
          </div>
        </section>
        <PageCta />
      </main>
      <SiteFooter />
    </div>
  );
}
