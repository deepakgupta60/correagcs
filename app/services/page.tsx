import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/homepage-sections";
import { serviceDetails } from "../components/service-data";

export const metadata: Metadata = {
  title: "Construction Services in Dallas | Correa Construction",
  description:
    "Explore Correa Construction services in Dallas including general contracting, design-build, renovation, and project consultation.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <main>
        <section className="relative min-h-[66vh] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            poster="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
          >
            <source
              src="https://videos.pexels.com/video-files/2421040/2421040-hd_1920_1080_24fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-[#161D22]/72" />
          <div className="relative z-10 w-full px-6 py-24 text-white md:px-10 lg:px-14">
            <p className="reveal-up text-sm font-semibold tracking-[0.3em] text-[#C2A57A]">
              WHAT WE DO
            </p>
            <h1 className="reveal-up mt-4 max-w-4xl text-4xl md:text-6xl">
              Construction Services Built for Performance
            </h1>
            <p className="reveal-up mt-5 max-w-3xl text-lg text-white/85">
              Explore our specialized services with dedicated SEO pages for each
              core offering in Dallas.
            </p>
          </div>
        </section>

        <section className="w-full px-6 py-20 md:px-10 lg:px-14">
          <div className="mb-8 grid gap-4 md:grid-cols-2">
            <Link
              href="/services/commercial"
              className="reveal-up rounded-2xl border border-[#1F2A30]/20 bg-[#1F2A30] px-6 py-5 text-white transition hover:bg-[#2a3941]"
            >
              <p className="text-xs font-semibold tracking-[0.24em] text-[#C2A57A]">CATEGORY</p>
              <h2 className="mt-2 text-2xl font-semibold">Commercial Services</h2>
            </Link>
            <Link
              href="/services/residential"
              className="reveal-up rounded-2xl border border-[#1F2A30]/20 bg-white px-6 py-5 text-[#1F2A30] transition hover:bg-[#f8fafc]"
            >
              <p className="text-xs font-semibold tracking-[0.24em] text-[#C2A57A]">CATEGORY</p>
              <h2 className="mt-2 text-2xl font-semibold">Residential Services</h2>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {serviceDetails.map((service) => (
              <article
                key={service.slug}
                className="gsap-zoom-card reveal-up overflow-hidden rounded-2xl border border-[#6B7280]/20"
              >
                <div className="relative h-64">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    className="object-cover"
                    data-zoom-target
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <h2 className="text-2xl text-[#1F2A30]">{service.title}</h2>
                  <p className="text-[#6B7280]">{service.shortDescription}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex text-sm font-semibold text-[#1F2A30] transition hover:text-[#C2A57A]"
                  >
                    Explore Service →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
