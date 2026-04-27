"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Stat = {
  label: string;
  value: string;
};

type ImageCardData = {
  title: string;
  image: string;
};

type Service = {
  title: string;
  description: string;
  image: string;
  href: string;
};

type Project = {
  title: string;
  image: string;
};

const sectionContainerClass = "w-full px-6 py-20 md:px-10 lg:px-14";

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

function PrimaryButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-[#C2A57A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ad9169]"
    >
      {children}
    </Link>
  );
}

function SecondaryButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/80 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1f3a40]"
    >
      {children}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const forceScrolled = !isHome;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

  const whatWeDoLinks = [
    { label: "General Contracting", href: "/services/general-contracting" },
    { label: "Design Build", href: "/services/design-build" },
    { label: "Renovation & Remodeling", href: "/services/renovation-remodeling" },
    { label: "Project Consultation", href: "/services/project-consultation" },
  ];
  const whoWeAreLinks = [
    { label: "Overview", href: "/who-we-are" },
    { label: "Our Story", href: "/about-us" },
    { label: "Leadership", href: "/who-we-are" },
    { label: "Community", href: "/who-we-are" },
  ];
  const careersLinks = [
    { label: "Join Our Team", href: "/join-our-team" },
    { label: "Current Openings", href: "/join-our-team" },
  ];

  const toggleMobileSection = (key: string) => {
    setOpenMobileSection((prev) => (prev === key ? null : key));
  };

  return (
    <>
      <header
        className={`site-header fixed left-0 top-0 z-50 w-full border-b transition-colors duration-200 ${
          forceScrolled
            ? "site-header--scrolled border-[#d6d6d6] bg-[#f5f5f5]"
            : "border-transparent bg-transparent"
        }`}
        data-force-scrolled={forceScrolled ? "true" : "false"}
      >
        <div className="site-header-inner flex w-full items-center justify-between px-6 py-4 md:px-10 lg:px-14">
          <Link href="/" className="site-brand text-xl font-bold tracking-[0.06em] md:text-3xl">
            CORREA
          </Link>

          <nav className="hidden items-center gap-1 text-sm font-semibold tracking-wide lg:flex">
            <div className="group relative">
              <Link href="/who-we-are" className="site-nav-item px-4 py-2">
                Who We Are
              </Link>
              <div className="invisible absolute left-0 top-full z-40 mt-0 w-72 border border-[#d6d6d6] bg-white p-5 text-[#0f2f66] opacity-0 shadow-xl transition duration-150 group-hover:visible group-hover:opacity-100">
                <div className="grid gap-2">
                  {whoWeAreLinks.map((item) => (
                    <Link key={item.label} href={item.href} className="rounded px-2 py-1.5 hover:bg-[#f3f4f6]">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative">
              <Link href="/what-we-do" className="site-nav-item px-4 py-2">
                What We Do
              </Link>
              <div className="invisible absolute left-0 top-full z-40 mt-0 w-[36rem] border border-[#d6d6d6] bg-white p-5 text-[#0f2f66] opacity-0 shadow-xl transition duration-150 group-hover:visible group-hover:opacity-100">
                <div className="grid grid-cols-2 gap-2">
                  {whatWeDoLinks.map((item) => (
                    <Link key={item.label} href={item.href} className="rounded px-2 py-1.5 hover:bg-[#f3f4f6]">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative">
              <Link href="/join-our-team" className="site-nav-item px-4 py-2">
                Join Our Team
              </Link>
              <div className="invisible absolute left-0 top-full z-40 mt-0 w-64 border border-[#d6d6d6] bg-white p-4 text-[#0f2f66] opacity-0 shadow-xl transition duration-150 group-hover:visible group-hover:opacity-100">
                <div className="grid gap-2">
                  {careersLinks.map((item) => (
                    <Link key={item.label} href={item.href} className="rounded px-2 py-1.5 hover:bg-[#f3f4f6]">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/subcontractors" className="site-nav-item px-4 py-2">
              Subcontractors
            </Link>
            <Link href="/contact-us" className="site-nav-item px-4 py-2">
              Contact Us
            </Link>
          </nav>

          <div className="hidden lg:block">
            <PrimaryButton href="/contact-us">Get in Touch</PrimaryButton>
          </div>

          <button
            type="button"
            className="rounded p-1 text-3xl leading-none lg:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[80] bg-[#f4f4f4] text-[#0f2f66] lg:hidden">
          <div className="flex items-center justify-between border-b border-[#d6d6d6] px-6 py-5">
            <Link href="/" className="text-2xl font-bold tracking-[0.06em]" onClick={() => setMobileOpen(false)}>
              CORREA
            </Link>
            <button type="button" aria-label="Close menu" className="text-4xl leading-none" onClick={() => setMobileOpen(false)}>
              ×
            </button>
          </div>

          <div className="border-b border-[#d6d6d6] px-6 py-4">
            <input
              type="text"
              placeholder="Search by Keyword..."
              className="w-full rounded border border-[#d6d6d6] bg-white px-4 py-3 text-base outline-none"
            />
          </div>

          <div className="max-h-[calc(100vh-140px)] overflow-y-auto px-6 py-6">
            <div className="space-y-5">
              <div>
                <button type="button" className="flex w-full items-center justify-between text-left text-5xl font-bold leading-tight" onClick={() => toggleMobileSection("who")}>
                  <span>Who We Are</span>
                  <span className="text-2xl">{openMobileSection === "who" ? "−" : "+"}</span>
                </button>
                {openMobileSection === "who" ? (
                  <div className="mt-3 grid gap-2 text-2xl">
                    {whoWeAreLinks.map((item) => (
                      <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>

              <div>
                <button type="button" className="flex w-full items-center justify-between text-left text-5xl font-bold leading-tight" onClick={() => toggleMobileSection("what")}>
                  <span>What We Do</span>
                  <span className="text-2xl">{openMobileSection === "what" ? "−" : "+"}</span>
                </button>
                {openMobileSection === "what" ? (
                  <div className="mt-3 grid gap-2 text-2xl">
                    {whatWeDoLinks.map((item) => (
                      <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>

              <Link href="/join-our-team" className="block text-5xl font-bold leading-tight" onClick={() => setMobileOpen(false)}>
                Join Our Team
              </Link>
              <Link href="/subcontractors" className="block text-5xl font-bold leading-tight" onClick={() => setMobileOpen(false)}>
                Subcontractors
              </Link>
              <Link href="/contact-us" className="block text-5xl font-bold leading-tight" onClick={() => setMobileOpen(false)}>
                Contact Us
              </Link>
              <Link href="/" className="block pt-2 text-3xl font-semibold" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[76vh] items-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80"
      >
        <source
          src="https://videos.pexels.com/video-files/2421040/2421040-hd_1920_1080_24fps.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-[#161D22]/68" />
      <div className="relative z-10 w-full px-6 py-24 text-white md:px-10 lg:px-14">
        <div className="max-w-3xl space-y-6 reveal-up">
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Building Trust.
            <br />
            Delivering Excellence.
          </h1>
          <p className="max-w-2xl text-lg text-[#F5F5F5]/90">
            Commercial & Residential Construction built on trust and delivered
            with precision.
          </p>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton href="/contact">Get a Quote</PrimaryButton>
            <SecondaryButton href="/general-contractor-in-dallas">
              View Projects
            </SecondaryButton>
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
          <article
            key={stat.label}
            className="reveal-up border-r border-white/25 p-6 text-center last:border-r-0 md:p-8"
          >
            <p className="text-4xl font-semibold text-white">{stat.value}</p>
            <p className="mt-3 text-sm leading-6 text-white/85">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <SectionContainer id="about" className="reveal-up">
      <div className="grid gap-8 md:grid-cols-12 md:items-start">
        <div className="md:col-span-3">
          <p className="text-sm font-semibold tracking-[0.28em] text-[#C2A57A]">
            ABOUT US
          </p>
        </div>
        <div className="space-y-4 md:col-span-9">
          <h2 className="text-3xl leading-tight text-[#1F2A30] md:text-5xl">
            We build structures that stand the test of time and style.
          </h2>
          <p className="max-w-4xl text-base leading-8 text-[#6B7280] md:text-lg">
            With decades of field expertise, our team handles every stage of
            construction from planning to handover. We focus on safety, premium
            workmanship, and long-term durability while ensuring every client feels
            informed and confident during the entire build process.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}

function ZoomImageCard({ card }: { card: ImageCardData }) {
  return (
    <article className="group gsap-zoom-card relative overflow-hidden rounded-2xl reveal-up">
      <div className="relative h-72">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
          data-zoom-target
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-[#1F2A30]/35 transition group-hover:bg-[#1F2A30]/55" />
        <h3 className="absolute bottom-4 left-4 text-xl text-white">{card.title}</h3>
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
          <PrimaryButton href="/contact">Apply Now</PrimaryButton>
        </div>
        <div className="relative h-72 overflow-hidden rounded-2xl md:h-96">
          <Image
            src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80"
            alt="Construction team discussing plans"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </SectionContainer>
  );
}

export function FeaturedProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <SectionContainer id="projects">
      <h2 className="reveal-up mb-10 text-3xl text-[#1F2A30] md:text-5xl">Featured Projects</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="group gsap-zoom-card reveal-up overflow-hidden rounded-2xl">
            <div className="relative h-72">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
                data-zoom-target
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="border border-t-0 border-gray-200 p-5">
              <h3 className="text-xl text-[#1F2A30]">{project.title}</h3>
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
          <article
            key={service.title}
            className="gsap-zoom-card reveal-up overflow-hidden rounded-2xl border border-gray-200"
          >
            <div className="relative h-44">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                data-zoom-target
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
            </div>
            <div className="space-y-3 p-5">
              <h3 className="text-xl text-[#1F2A30]">{service.title}</h3>
              <p className="text-sm leading-7 text-[#6B7280]">{service.description}</p>
              <Link
                href={service.href}
                className="inline-flex text-sm font-semibold text-[#1F2A30] transition hover:text-[#C2A57A]"
              >
                Learn More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}

export function CtaSection() {
  return (
    <SectionContainer className="reveal-up py-24 text-center">
      <div className="rounded-3xl bg-[#f7f3ed] px-6 py-14">
        <h2 className="mx-auto max-w-3xl text-3xl text-[#1F2A30] md:text-5xl">
          Ready to start your next construction project?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[#6B7280]">
          Let our experts turn your ideas into a beautifully built reality.
        </p>
        <div className="mt-8">
          <PrimaryButton href="/contact">Get a Free Quote</PrimaryButton>
        </div>
      </div>
    </SectionContainer>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#161D22] text-white">
      <div className="grid w-full gap-10 px-6 py-16 md:grid-cols-3 md:px-10 lg:px-14">
        <div>
          <h3 className="text-2xl">About</h3>
          <p className="mt-4 text-sm leading-7 text-white/80">
            Correa Construction is dedicated to delivering modern, safe, and
            durable spaces for families and businesses.
          </p>
        </div>
        <div>
          <h3 className="text-2xl">Links</h3>
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
              <Link href="/contact" className="hover:text-[#C2A57A]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>+1 (555) 202-8811</li>
            <li>hello@correabuild.com</li>
            <li>245 Harbor Street, Suite 18, San Diego, CA</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
