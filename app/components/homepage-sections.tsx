"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Stat = { label: string; value: string };
type ImageCardData = { title: string; image: string };
type Service = { title: string; description: string; image: string; href: string };
type Project = { title: string; image: string; href: string };
type BlogPost = { title: string; excerpt: string; image: string; href: string };

const sectionContainerClass = "w-full px-6 py-20 md:px-10 lg:px-14";
const navLinks = [
  // { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about-us" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/build-with-us" },
];
const servicesQuickLinks = [
  { label: "General Contracting", href: "/services/general-contracting" },
  { label: "Design Build", href: "/services/design-build" },
  { label: "Renovation", href: "/services/renovation-remodeling" },
  { label: "Consultation", href: "/services/project-consultation" },
  { label: "Commercial Construction", href: "/services/commercial" },
  { label: "Residential Construction", href: "/services/residential" },
];

function SectionContainer({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`${sectionContainerClass} ${className}`.trim()}>
      {children}
    </section>
  );
}

function PrimaryButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-[#C2A57A] px-6 py-3 text-sm font-semibold tracking-wide text-[#1F2A30] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d5ba92]"
    >
      {children}
    </Link>
  );
}

function SecondaryButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/80 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#1F2A30]"
    >
      {children}
    </Link>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full px-3 pt-3 md:px-6">
        <div
          className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 shadow-[0_16px_40px_rgba(10,20,25,0.12)] transition-all duration-300 md:px-7 ${
            scrolled ? "border-[#dbe3ee] bg-white/95 backdrop-blur-xl" : "border-white/70 bg-white/90 backdrop-blur-lg"
          }`}
        >
          <Link href="/" className="flex items-center gap-2">
            <Image src="/black.png" alt="Correa General Contractors" width={205} height={46} priority className="h-auto w-[148px] sm:w-[205px] object-contain" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            <div className="group relative">
              <Link href="/services" className="rounded-full px-4 py-2 text-sm font-semibold tracking-wide text-[#1F2A30] transition-all duration-300 hover:bg-[#eef3f8] hover:text-[#1F2A30]">
                Services
              </Link>
              <div className="invisible absolute left-0 top-full z-40 mt-2 w-72 rounded-2xl border border-[#dbe3ee] bg-white p-3 opacity-0 shadow-2xl transition duration-200 group-hover:visible group-hover:opacity-100">
                <Link href="/services/commercial" className="block rounded-xl px-3 py-2 text-sm font-semibold text-[#1F2A30] transition hover:bg-[#eef3f8]">
                  Commercial
                </Link>
                <Link href="/services/residential" className="block rounded-xl px-3 py-2 text-sm font-semibold text-[#1F2A30] transition hover:bg-[#eef3f8]">
                  Residential
                </Link>
                <div className="my-2 border-t border-[#e2e8f0]" />
                {servicesQuickLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="block rounded-xl px-3 py-2 text-sm text-[#475569] transition hover:bg-[#eef3f8] hover:text-[#1F2A30]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full px-4 py-2 text-sm font-semibold tracking-wide text-[#1F2A30] transition-all duration-300 hover:bg-[#eef3f8] hover:text-[#1F2A30]">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <PrimaryButton href="/contact-us">Get in Touch</PrimaryButton>
          </div>

          <button type="button" className="relative z-[121] rounded-lg border border-[#cbd5e1] p-2 text-[#1F2A30] lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open navigation menu">
            ☰
          </button>
        </div>
      </header>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[120] bg-[#11181d]/95 p-4 text-white lg:hidden" onClick={() => setMobileOpen(false)}>
          <div className="mx-auto flex h-full max-w-xl flex-col rounded-2xl border border-white/15 bg-[#1F2A30] p-5" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <Image src="/white.png" alt="Correa General Contractors" width={178} height={40} className="h-auto w-[150px] sm:w-[178px] object-contain" />
              <button type="button" className="rounded-lg border border-white/20 px-3 py-1 text-2xl" onClick={() => setMobileOpen(false)}>
                ×
              </button>
            </div>

            <div className="mt-6 flex-1 overflow-y-auto">
              <div className="space-y-3">
                <Link href="/services" onClick={() => setMobileOpen(false)} className="block rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-lg font-semibold transition hover:bg-white/10">
                  Services
                </Link>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-lg font-semibold transition hover:bg-white/10">
                    {link.label}
                  </Link>
                ))}
              </div>

              <p className="mt-8 text-xs font-semibold tracking-[0.26em] text-[#C2A57A]">TOP SERVICES</p>
              <div className="mt-3 grid gap-2">
                {servicesQuickLinks.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="rounded-lg px-2 py-2 text-white/85 transition hover:bg-white/10 hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid gap-2">
              <PrimaryButton href="/contact-us">Get in Touch</PrimaryButton>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[90vh] items-center overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover" poster="/black.png">
        <source src="/project.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-[#11181d]/88 via-[#1f2a30]/72 to-[#1f2a30]/48" />
      <div className="relative z-10 w-full px-6 pt-32 md:px-10 md:pt-28 lg:px-14">
        <div className="max-w-3xl space-y-6 reveal-up">
          <p className="inline-flex rounded-full border border-white/35 bg-white/10 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-white/95">
            COMMERCIAL & RESIDENTIAL CONSTRUCTION
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Building Trust.
            <br />
            Delivering Excellence.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-white/85">
            Correa General Contractors delivers premium builds with clear communication,
            strong planning, and flawless site execution from start to finish.
          </p>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton href="/contact-us">Get in Touch</PrimaryButton>
            <SecondaryButton href="/services">View Services</SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsSection({ stats }: { stats: Stat[] }) {
  return (
    <section className="bg-[#C2A57A]">
      <div className="grid w-full grid-cols-2 px-6 py-10 md:grid-cols-4 md:px-10 lg:px-14">
        {stats.map((stat) => (
          <article key={stat.label} className="reveal-up border-r border-white/30 p-4 text-center last:border-r-0 md:p-6">
            <p className="text-4xl font-bold text-white">{stat.value}</p>
            <p className="mt-2 text-sm font-medium text-white/85">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <SectionContainer id="about">
      <div className="reveal-up grid gap-8 rounded-3xl border border-[#dbe3ee] bg-white p-8 shadow-[0_14px_38px_rgba(16,35,55,0.08)] md:grid-cols-12 md:p-12">
        <div className="md:col-span-3">
          <p className="text-sm font-semibold tracking-[0.28em] text-[#C2A57A]">ABOUT US</p>
        </div>
        <div className="space-y-4 md:col-span-9">
          <h2 className="text-3xl leading-tight text-[#1F2A30] md:text-5xl">
            We design and construct spaces built for modern life.
          </h2>
          <p className="max-w-4xl text-base leading-8 text-[#64748B] md:text-lg">
            From early planning and permits to final handover, our team keeps your
            project smooth, transparent, and on schedule. We combine practical site
            leadership with quality craftsmanship to deliver long-lasting results.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}

function ZoomImageCard({ card }: { card: ImageCardData }) {
  return (
    <article className="group gsap-zoom-card relative overflow-hidden rounded-2xl reveal-up shadow-[0_10px_24px_rgba(10,30,40,0.12)]">
      <div className="relative h-72">
        <Image src={card.image} alt={card.title} fill className="object-cover transition duration-500 group-hover:scale-110" data-zoom-target sizes="(max-width: 768px) 100vw, 25vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11181d]/75 via-[#11181d]/20 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">{card.title}</h3>
      </div>
    </article>
  );
}

export function ProjectTypeFocusSection({ cards }: { cards: ImageCardData[] }) {
  return (
    <SectionContainer>
      <div className="mb-10 flex items-end justify-between gap-6">
        <h2 className="text-3xl text-[#1F2A30] md:text-5xl">Project Type Focus</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <ZoomImageCard key={card.title} card={card} />
        ))}
      </div>
    </SectionContainer>
  );
}

export function JoinOurTeamSection() {
  return (
    <SectionContainer className="max-w-none bg-[#1F2A30] text-white" id="contact">
      <div className="grid w-full gap-10 lg:grid-cols-2 lg:items-center reveal-up">
        <div className="space-y-6 ">
          <p className="text-sm tracking-[0.28em] text-[#C2A57A]">CAREERS</p>
          <h2 className="text-3xl leading-tight md:text-5xl">Join Our Team</h2>
          <p className="text-white/80">
            Work on high-impact projects with a team that values craftsmanship,
            innovation, and people-first leadership.
          </p>
          <PrimaryButton href="/join-our-team">Apply Now</PrimaryButton>
        </div>
        <div className="relative h-72 overflow-hidden rounded-2xl md:h-96">
          <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80" alt="Construction team discussing plans" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </div>
    </SectionContainer>
  );
}

export function FeaturedProjectsSection({ projects }: { projects: Project[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollProjects = (direction: "left" | "right") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const amount = Math.round(scroller.clientWidth * 0.9);
    scroller.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <SectionContainer id="projects">
      <div className="mb-6 flex items-center justify-between gap-3">
        <h2 className="reveal-up text-3xl text-[#1F2A30] md:text-5xl">Featured Projects</h2>
        <div className="reveal-up flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollProjects("left")}
            aria-label="Previous projects"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#dbe3ee] text-[#1F2A30] transition hover:bg-[#eef3f8]"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollProjects("right")}
            aria-label="Next projects"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#dbe3ee] text-[#1F2A30] transition hover:bg-[#eef3f8]"
          >
            →
          </button>
        </div>
      </div>
      <div ref={scrollerRef} className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {projects.map((project) => (
          <article key={project.title} className="group gsap-zoom-card reveal-up min-w-[88%] snap-start overflow-hidden rounded-2xl border border-[#dbe3ee] bg-white shadow-[0_12px_26px_rgba(10,30,40,0.09)] sm:min-w-[65%] lg:min-w-[32%]">
            <div className="relative h-64">
              <Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-110" data-zoom-target sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-[#1F2A30]">{project.title}</h3>
              <Link href={project.href} className="mt-2 inline-flex text-sm font-semibold text-[#1F2A30] transition hover:text-[#C2A57A]">
                View Project →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}

export function ServicesSection({ services }: { services: Service[] }) {
  return (
    <SectionContainer id="services">
      <h2 className="reveal-up mb-10 text-3xl text-[#1F2A30] md:text-5xl">Our Services</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <article key={service.title} className="gsap-zoom-card reveal-up overflow-hidden rounded-2xl border border-[#dbe3ee] bg-white shadow-[0_12px_26px_rgba(10,30,40,0.09)]">
            <div className="relative h-44">
              <Image src={service.image} alt={service.title} fill className="object-cover" data-zoom-target sizes="(max-width: 1024px) 100vw, 25vw" />
            </div>
            <div className="space-y-3 p-5">
              <h3 className="text-xl font-semibold text-[#1F2A30]">{service.title}</h3>
              <p className="text-sm leading-7 text-[#64748B]">{service.description}</p>
              <Link href={service.href} className="inline-flex text-sm font-semibold text-[#1F2A30] transition hover:text-[#C2A57A]">
                Learn More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}

export function ProcessSection() {
  const steps = [
    { title: "Discovery & Budget Strategy", text: "We align your vision with real timelines, permitting pathways, and accurate cost forecasting." },
    { title: "Design & Pre-Construction", text: "We coordinate drawings, procurement, and sequencing to avoid expensive delays." },
    { title: "Build & Quality Control", text: "Daily site reporting, milestone tracking, and quality checks keep the project clean and predictable." },
    { title: "Handover & Post-Support", text: "You receive complete closeout documents with warranty support and post-completion guidance." },
  ];

  return (
    <SectionContainer className="bg-[#eef3f8]">
      <div className="mb-8 reveal-up">
        <p className="text-sm font-semibold tracking-[0.28em] text-[#C2A57A]">OUR PROCESS</p>
        <h2 className="mt-3 text-3xl text-[#1F2A30] md:text-5xl">How We Keep Every Build Stress Free</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {steps.map((step, index) => (
          <article key={step.title} className="reveal-up rounded-2xl border border-[#dae4ef] bg-white p-6">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#C2A57A]">STEP {index + 1}</p>
            <h3 className="mt-2 text-2xl text-[#1F2A30]">{step.title}</h3>
            <p className="mt-3 leading-7 text-[#64748B]">{step.text}</p>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}

export function WhyChooseUsSection() {
  const points = [
    "Dedicated project manager and real-time communication from kickoff to handover",
    "Licensed and safety-first execution across residential and commercial scopes",
    "Detailed milestone planning with procurement clarity to reduce delays",
    "Transparent budgeting and change-order tracking with no hidden surprises",
  ];

  return (
    <SectionContainer>
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <div className="reveal-up">
          <p className="text-sm font-semibold tracking-[0.28em] text-[#C2A57A]">WHY CORREA</p>
          <h2 className="mt-3 text-3xl leading-tight text-[#1F2A30] md:text-5xl">
            Built for Clients Who Want Speed, Clarity, and Craftsmanship
          </h2>
          <p className="mt-4 max-w-xl leading-8 text-[#64748B]">
            We are a full-service construction team serving Dallas-Fort Worth with
            dependable planning, sharp on-site management, and quality finishes.
          </p>
          <div className="mt-6">
            <PrimaryButton href="/contact-us">Schedule a Project Call</PrimaryButton>
          </div>
        </div>
        <div className="grid gap-4">
          {points.map((point) => (
            <div key={point} className="reveal-up rounded-2xl border border-[#dbe3ee] bg-white p-5">
              <p className="text-[#1F2A30]">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

export function ServiceAreasSection() {
  const cities = [
    { label: "General Contractor in Dallas", href: "/general-contractor-in-dallas" },
    { label: "Construction Company in Denton", href: "/construction-company-in-denton" },
    { label: "General Contractor in Frisco", href: "/general-contractor-in-frisco" },
    { label: "General Contractor in Arlington", href: "/general-contractor-in-arlington" },
  ];

  return (
    <SectionContainer className="bg-[#1F2A30] text-white">
      <div className="reveal-up text-center">
        <p className="text-sm font-semibold tracking-[0.28em] text-[#C2A57A]">SERVICE AREAS</p>
        <h2 className="mt-4 text-3xl md:text-5xl">Local Expertise Across DFW</h2>
        <p className="mx-auto mt-4 max-w-3xl text-white/80">
          Explore city-specific construction solutions with local permitting and planning support.
        </p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {cities.map((city) => (
          <Link key={city.href} href={city.href} className="reveal-up rounded-2xl border border-white/20 bg-white/5 px-5 py-4 text-lg transition hover:bg-white/10">
            {city.label} →
          </Link>
        ))}
      </div>
    </SectionContainer>
  );
}

export function CtaSection() {
  return (
    <SectionContainer className="reveal-up py-24 text-center">
      <div className="rounded-3xl bg-gradient-to-br from-[#f7f3ed] to-[#eaf1f9] px-6 py-14">
        <h2 className="mx-auto max-w-3xl text-3xl text-[#1F2A30] md:text-5xl">
          Ready to Start Your Next Construction Project?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[#64748B]">
          Get a practical roadmap, accurate costing, and a trusted construction partner.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton href="/contact-us">Get in Touch</PrimaryButton>
          <Link href="/subcontractors" className="inline-flex items-center justify-center rounded-full border border-[#1F2A30] px-6 py-3 text-sm font-semibold text-[#1F2A30] transition hover:bg-[#1F2A30] hover:text-white">
            Subcontractor Registration
          </Link>
          <Link href="/blog" className="inline-flex items-center justify-center rounded-full border border-[#1F2A30] px-6 py-3 text-sm font-semibold text-[#1F2A30] transition hover:bg-[#1F2A30] hover:text-white">
            Read Blog
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}

export function BlogSection({ posts }: { posts: BlogPost[] }) {
  return (
    <SectionContainer id="blog">
      <div className="mb-10 flex items-end justify-between gap-4">
        <h2 className="reveal-up text-3xl text-[#1F2A30] md:text-5xl">Latest from Our Blog</h2>
        <Link href="/blog" className="reveal-up text-sm font-semibold text-[#1F2A30] hover:text-[#C2A57A]">
          View All Articles →
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="reveal-up overflow-hidden rounded-2xl border border-[#dbe3ee] bg-white shadow-[0_12px_26px_rgba(10,30,40,0.09)]">
            <div className="relative h-52">
              <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="space-y-3 p-5">
              <h3 className="text-xl font-semibold text-[#1F2A30]">{post.title}</h3>
              <p className="text-sm leading-7 text-[#64748B]">{post.excerpt}</p>
              <Link href={post.href} className="inline-flex text-sm font-semibold text-[#1F2A30] transition hover:text-[#C2A57A]">
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}



export function SiteFooter() {
  return (
    <footer className="bg-[#11181d] text-white">
      <div className="grid w-full gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-10 lg:px-14">
        
        {/* Column 1 */}
        <div>
          <Image
            src="/white.png"
            alt="Correa General Contractors"
            width={170}
            height={36}
            className="object-contain"
          />

          <p className="mt-4 text-sm leading-7 text-white/80">
            Correa General Contractors for residential and commercial projects
            across Dallas-Fort Worth.
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link
              href="https://www.facebook.com/correageneralcontractors/"
              className="rounded-full border border-white/20 px-3 py-1 hover:border-[#C2A57A] hover:text-[#C2A57A]"
            >
              Facebook
            </Link>

            <Link
              href="https://www.instagram.com/correageneralcontractors/"
              className="rounded-full border border-white/20 px-3 py-1 hover:border-[#C2A57A] hover:text-[#C2A57A]"
            >
              Instagram
            </Link>

            <Link
              href="https://www.linkedin.com/company/correa-general-contractors"
              className="rounded-full border border-white/20 px-3 py-1 hover:border-[#C2A57A] hover:text-[#C2A57A]"
            >
              LinkedIn
            </Link>

            <Link
              href="https://www.youtube.com/channel/UCxnOdSW1oTBPt2io6mPbwOQ"
              className="rounded-full border border-white/20 px-3 py-1 hover:border-[#C2A57A] hover:text-[#C2A57A]"
            >
              YouTube
            </Link>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-2xl font-semibold">Quick Links</h3>

          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <Link href="/" className="hover:text-[#C2A57A]">
                Home
              </Link>
            </li>

            <li>
              <Link href="/services" className="hover:text-[#C2A57A]">
                Services
              </Link>
            </li>

            <li>
              <Link href="/about-us" className="hover:text-[#C2A57A]">
                About
              </Link>
            </li>

            <li>
              <Link href="/contact-us" className="hover:text-[#C2A57A]">
                Get in Touch
              </Link>
            </li>

            <li>
              <Link href="/build-with-us" className="hover:text-[#C2A57A]">
                Contacts
              </Link>
            </li>

            <li>
              <Link href="/blog" className="hover:text-[#C2A57A]">
                Blog
              </Link>
            </li>

            <li>
              <Link href="/subcontractors" className="hover:text-[#C2A57A]">
                Subcontractors
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-2xl font-semibold">Contact</h3>

          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>+1 (469) 345-9287</li>
            <li>hello@correabuild.com</li>
            <li>16210 - B, Seagoville Rd, Dallas, TX 75253, USA</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-2xl font-semibold">Support</h3>

          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>Mon - Fri: 9:00 AM - 6:00 PM</li>

            <li>
              <Link href="/contact-us" className="hover:text-[#C2A57A]">
                Book a Consultation
              </Link>
            </li>

            <li>
              <Link href="/subcontractors" className="hover:text-[#C2A57A]">
                Trade Registration
              </Link>
            </li>

            <li>
              <Link href="/build-with-us" className="hover:text-[#C2A57A]">
                Partnership Request
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/60 md:px-10 lg:px-14">
        © {new Date().getFullYear()} Correa General Contractors. All rights
        reserved.
      </div>
    </footer>
  );
}