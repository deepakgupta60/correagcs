import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./homepage-sections";
import { ServiceDetail } from "./service-data";

export function ServiceDetailPage({ service }: { service: ServiceDetail }) {
  return (
    <div className="bg-white">
      <SiteHeader />
      <main>
        <section className="relative min-h-[72vh] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            poster={service.heroImage}
          >
            <source src={service.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#161D22]/70" />
          <div className="relative z-10 w-full px-6 py-24 text-white md:px-10 lg:px-14">
            <p className="reveal-up text-sm font-semibold tracking-[0.28em] text-[#C2A57A]">
              SERVICES
            </p>
            <h1 className="reveal-up mt-4 max-w-4xl text-4xl leading-tight md:text-6xl">
              {service.title} in Dallas
            </h1>
            <p className="reveal-up mt-5 max-w-3xl text-lg text-white/85">
              {service.shortDescription}
            </p>
            <div className="reveal-up mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#C2A57A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ad9169]"
              >
                Get a Quote
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/75 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1F2A30]"
              >
                All Services
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full px-6 py-20 md:px-10 lg:px-14">
          <div className="grid gap-6 md:grid-cols-3">
            {service.gallery.map((image) => (
              <article
                key={image}
                className="gsap-zoom-card reveal-up overflow-hidden rounded-2xl"
              >
                <div className="relative h-72">
                  <Image
                    src={image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    data-zoom-target
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="w-full bg-[#F5F5F5] px-6 py-20 md:px-10 lg:px-14">
          <div className="reveal-up max-w-5xl">
            <h2 className="text-3xl text-[#1F2A30] md:text-5xl">
              Why choose our {service.title.toLowerCase()} service?
            </h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {service.points.map((point) => (
                <li
                  key={point}
                  className="rounded-xl border border-[#C2A57A]/35 bg-white px-5 py-4 text-[#6B7280]"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
