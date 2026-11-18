import Image from "next/image";
import Link from "next/link";
import { SITE } from "../lib/site";
import { AiSummaryLinks } from "./ai-summary";
import { FeaturedProjectsScroller, HeroVideo } from "./client-widgets";
import { locationPages } from "./location-data";
import { servicesQuickLinks } from "../lib/nav";

export { SiteHeader } from "./site-header";

type Stat = { label: string; value: string };
type ImageCardData = { title: string; image: string; href: string; alt: string };
type Service = { title: string; description: string; image: string; href: string };
type Project = { title: string; image: string; href: string; location: string; category: string };
type BlogPost = { title: string; excerpt: string; image: string; imageAlt: string; href: string };

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

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#11181d]">
      <HeroVideo src="/projects.mp4" poster="/projects/westhouse/4.jpeg" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#11181d]/90 via-[#1f2a30]/75 to-[#1f2a30]/50" />
      <div className="relative z-10 w-full px-6 pt-32 md:px-10 md:pt-28 lg:px-14">
        <div className="max-w-3xl space-y-6">
          <p className="inline-flex rounded-full border border-white/35 bg-white/10 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-white/95">
            COMMERCIAL & RESIDENTIAL · DALLAS–FORT WORTH
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Trusted General Contractor in Dallas, TX
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-white/90">
            Correa General Contractors builds commercial tenant improvements, design-build projects,
            and custom residential construction across Dallas–Fort Worth, with {SITE.stats.years} years
            of experience, {SITE.stats.projects} completed projects, and one accountable team from
            permit to handover.
          </p>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton href="/contact-us">Get a Free Estimate</PrimaryButton>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center rounded-full border border-white/80 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#1F2A30]"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsSection({ stats }: { stats: Stat[] }) {
  return (
    <section className="bg-[#C2A57A]" aria-label="Company statistics">
      <div className="grid w-full grid-cols-2 px-6 py-6 md:grid-cols-4 md:px-10 lg:px-6">
        {stats.map((stat) => (
          <div key={stat.label} className="reveal-up border-r border-white/30 p-4 text-center last:border-r-0 md:p-6">
            <p className="text-4xl font-bold text-white">{stat.value}</p>
            <p className="mt-2 text-sm font-medium text-white">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Entity-defining intro paragraph: who, what, where. Strong signal for Google and AI answers. */
export function AboutSection() {
  return (
    <SectionContainer id="about">
      <div className="reveal-up grid gap-8 rounded-3xl border border-[#dbe3ee] bg-white p-8 shadow-[0_14px_38px_rgba(16,35,55,0.08)] md:grid-cols-12 md:p-12">
        <div className="space-y-4 md:col-span-7">
          <p className="text-sm font-semibold tracking-[0.28em] text-[#C2A57A]">ABOUT CORREA</p>
          <h2 className="text-3xl leading-tight text-[#1F2A30] md:text-5xl">
            A Dallas general contractor for commercial and residential construction
          </h2>
          <p className="text-base leading-8 text-[#475569] md:text-lg">
            Correa General Contractors is a full-service general contractor based in Dallas, Texas.
            We manage construction from early budgeting and permits through subcontractor
            coordination, inspections, and final handover for business owners, developers,
            property managers, and homeowners throughout the Dallas–Fort Worth metroplex.
          </p>
          <p className="text-base leading-8 text-[#475569] md:text-lg">
            Our work includes commercial tenant improvements and office build-outs, design-build
            delivery, renovations, custom homes, duplexes, and multifamily communities. Every project
            gets a dedicated project manager, weekly progress updates, and written change-order
            approvals, so there are no surprises on cost or schedule.
          </p>
          <Link href="/about-us" className="inline-flex text-sm font-semibold text-[#1F2A30] hover:text-[#C2A57A]">
            More about our company →
          </Link>
        </div>
        <dl className="grid content-start gap-3 self-start rounded-2xl bg-[#f8fafc] p-6 text-sm md:col-span-5">
          {[
            ["Company", SITE.name],
            ["Headquarters", SITE.addressLine],
            ["Phone", SITE.phone],
            ["Hours", SITE.hours.short],
            ["Service area", "Dallas–Fort Worth, TX"],
            ["Specialties", "Commercial TI, design-build, custom residential, multifamily"],
          ].map(([term, value]) => (
            <div key={term} className="grid grid-cols-[120px_1fr] gap-2 border-b border-[#e2e8f0] pb-2 last:border-b-0">
              <dt className="font-semibold text-[#1F2A30]">{term}</dt>
              <dd className="text-[#475569]">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </SectionContainer>
  );
}

function ZoomImageCard({ card }: { card: ImageCardData }) {
  return (
    <Link href={card.href} className="group gsap-zoom-card reveal-up relative block overflow-hidden rounded-2xl shadow-[0_10px_24px_rgba(10,30,40,0.12)]">
      <div className="relative h-72">
        <Image src={card.image} alt={card.alt} fill className="object-cover transition duration-500 group-hover:scale-110" data-zoom-target sizes="(max-width: 768px) 100vw, 25vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11181d]/80 via-[#11181d]/20 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">{card.title} →</h3>
      </div>
    </Link>
  );
}

export function ProjectTypeFocusSection({ cards }: { cards: ImageCardData[] }) {
  return (
    <SectionContainer>
      <div className="mb-10">
        <p className="text-sm font-semibold tracking-[0.28em] text-[#C2A57A]">WHAT WE BUILD</p>
        <h2 className="mt-3 text-3xl text-[#1F2A30] md:text-5xl">Project Types We Build in DFW</h2>
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
    <SectionContainer className="max-w-none bg-[#1F2A30] text-white" id="careers">
      <div className="grid w-full gap-10 lg:grid-cols-2 lg:items-center reveal-up">
        <div className="space-y-6">
          <p className="text-sm tracking-[0.28em] text-[#C2A57A]">CAREERS</p>
          <h2 className="text-3xl leading-tight md:text-5xl">Join Our Team</h2>
          <p className="text-white/85">
            Work on high-impact commercial and residential projects across Dallas–Fort Worth with a team
            that values craftsmanship, safety, and people-first leadership.
          </p>
          <PrimaryButton href="/join-our-team">See Open Roles</PrimaryButton>
        </div>
        <div className="relative h-72 overflow-hidden rounded-2xl md:h-96">
          <Image src="/projects/odessa/3.jpg" alt="Correa General Contractors multifamily jobsite in Texas" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </div>
    </SectionContainer>
  );
}

export function FeaturedProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <SectionContainer id="projects">
      <FeaturedProjectsScroller projects={projects} />
      <Link href="/projects" className="mt-6 inline-flex text-sm font-semibold text-[#1F2A30] hover:text-[#C2A57A]">
        View all projects →
      </Link>
    </SectionContainer>
  );
}

export function ServicesSection({ services }: { services: Service[] }) {
  return (
    <SectionContainer id="services">
      <p className="text-sm font-semibold tracking-[0.28em] text-[#C2A57A]">OUR SERVICES</p>
      <h2 className="reveal-up mb-10 mt-3 text-3xl text-[#1F2A30] md:text-5xl">Construction Services in Dallas</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service) => (
          <article key={service.title} className="gsap-zoom-card reveal-up w-full overflow-hidden md:w-[calc(50%-12px)] xl:w-[calc(25%-18px)] rounded-2xl border border-[#dbe3ee] bg-white shadow-[0_12px_26px_rgba(10,30,40,0.09)]">
            <div className="relative h-44">
              <Image src={service.image} alt={`${service.title} by Correa General Contractors in Dallas`} fill className="object-cover" data-zoom-target sizes="(max-width: 1024px) 100vw, 33vw" />
            </div>
            <div className="space-y-3 p-5">
              <h3 className="text-xl font-semibold text-[#1F2A30]">{service.title}</h3>
              <p className="text-sm leading-7 text-[#64748B]">{service.description}</p>
              <Link href={service.href} className="inline-flex text-sm font-semibold text-[#1F2A30] transition hover:text-[#C2A57A]">
                Learn more about {service.title.toLowerCase()} →
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
    { title: "Build & Quality Control", text: "Daily site supervision, milestone tracking, and quality checks keep the project clean and predictable." },
    { title: "Handover & Post-Support", text: "You receive complete closeout documents with warranty support and post-completion guidance." },
  ];

  return (
    <SectionContainer className="bg-[#eef3f8]">
      <div className="mb-8 reveal-up">
        <p className="text-sm font-semibold tracking-[0.28em] text-[#C2A57A]">OUR PROCESS</p>
        <h2 className="mt-3 text-3xl text-[#1F2A30] md:text-5xl">How We Keep Every Build Stress-Free</h2>
      </div>
      <ol className="grid gap-5 md:grid-cols-2">
        {steps.map((step, index) => (
          <li key={step.title} className="reveal-up rounded-2xl border border-[#dae4ef] bg-white p-6">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#C2A57A]">STEP {index + 1}</p>
            <h3 className="mt-2 text-2xl text-[#1F2A30]">{step.title}</h3>
            <p className="mt-3 leading-7 text-[#64748B]">{step.text}</p>
          </li>
        ))}
      </ol>
    </SectionContainer>
  );
}

export function WhyChooseUsSection() {
  const points = [
    { title: "One accountable project manager", text: "A single point of contact from kickoff to handover, with weekly progress updates." },
    { title: "Local Dallas permitting experience", text: "We know how City of Dallas and surrounding DFW permit and inspection processes affect schedules." },
    { title: "Transparent budgets", text: "Line-item estimates, defined allowances, and written change-order approvals: no hidden costs." },
    { title: "Safety-first jobsites", text: "Supervised trades, daily site checks, and quality inspections at every milestone." },
  ];

  return (
    <SectionContainer>
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <div className="reveal-up">
          <p className="text-sm font-semibold tracking-[0.28em] text-[#C2A57A]">WHY CORREA</p>
          <h2 className="mt-3 text-3xl leading-tight text-[#1F2A30] md:text-5xl">
            Why Dallas Owners Choose Correa General Contractors
          </h2>
          <p className="mt-4 max-w-xl leading-8 text-[#64748B]">
            Choosing a general contractor in Dallas comes down to communication, planning, and
            follow-through. We combine {SITE.stats.years} years of field experience with disciplined
            project management across {SITE.stats.trades} core trades.
          </p>
          <div className="mt-6">
            <PrimaryButton href="/contact-us">Schedule a Project Call</PrimaryButton>
          </div>
        </div>
        <div className="grid gap-4">
          {points.map((point) => (
            <div key={point.title} className="reveal-up rounded-2xl border border-[#dbe3ee] bg-white p-5">
              <h3 className="font-semibold text-[#1F2A30]">{point.title}</h3>
              <p className="mt-1 text-[#64748B]">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

export function ServiceAreasSection() {
  return (
    <SectionContainer className="bg-[#1F2A30] text-white">
      <div className="reveal-up text-center">
        <p className="text-sm font-semibold tracking-[0.28em] text-[#C2A57A]">SERVICE AREAS</p>
        <h2 className="mt-4 text-3xl md:text-5xl">Serving Dallas and the Entire DFW Metroplex</h2>
        <p className="mx-auto mt-4 max-w-3xl text-white/85">
          Based in Dallas at {SITE.addressLine}, we build across {SITE.serviceAreas.join(", ")}, and surrounding North Texas communities.
        </p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {locationPages.map((city) => (
          <Link key={city.path} href={city.path} className="reveal-up rounded-2xl border border-white/20 bg-white/5 px-5 py-4 text-lg transition hover:bg-white/10">
            {city.linkLabel} →
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
          Get a practical roadmap, accurate costing, and a trusted general contractor in Dallas.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton href="/contact-us">Get a Free Estimate</PrimaryButton>
          <a href={SITE.phoneHref} className="inline-flex items-center justify-center rounded-full border border-[#1F2A30] px-6 py-3 text-sm font-semibold text-[#1F2A30] transition hover:bg-[#1F2A30] hover:text-white">
            Call {SITE.phone}
          </a>
          <Link href="/subcontractors" className="inline-flex items-center justify-center rounded-full border border-[#1F2A30] px-6 py-3 text-sm font-semibold text-[#1F2A30] transition hover:bg-[#1F2A30] hover:text-white">
            Subcontractor Registration
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
        <h2 className="reveal-up text-3xl text-[#1F2A30] md:text-5xl">Construction Guides for Dallas Owners</h2>
        <Link href="/blog" className="reveal-up shrink-0 text-sm font-semibold text-[#1F2A30] hover:text-[#C2A57A]">
          View all articles →
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="reveal-up overflow-hidden rounded-2xl border border-[#dbe3ee] bg-white shadow-[0_12px_26px_rgba(10,30,40,0.09)]">
            <div className="relative h-52">
              <Image src={post.image} alt={post.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="space-y-3 p-5">
              <h3 className="text-xl font-semibold text-[#1F2A30]">
                <Link href={post.href} className="hover:text-[#C2A57A]">{post.title}</Link>
              </h3>
              <p className="text-sm leading-7 text-[#64748B]">{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#11181d] text-white">
      <div className="grid w-full gap-10 px-6 py-16 md:grid-cols-2 md:px-10 lg:grid-cols-4 lg:px-14">
        <div>
          <Image src="/white.png" alt={SITE.name} width={170} height={29} className="object-contain" />
          <p className="mt-4 text-sm leading-7 text-white/80">
            {SITE.name} is a Dallas, TX general contractor for commercial and residential construction
            across Dallas–Fort Worth.
          </p>
          <ul className="mt-4 flex flex-wrap gap-3 text-sm">
            {(
              [
                ["Facebook", SITE.social.facebook],
                ["Instagram", SITE.social.instagram],
                ["LinkedIn", SITE.social.linkedin],
                ["YouTube", SITE.social.youtube],
              ] as const
            ).map(([label, href]) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-3 py-1 hover:border-[#C2A57A] hover:text-[#C2A57A]">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://www.google.com/preferences/source?q=https://correagcs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block transition-transform hover:scale-105"
          >
            <Image src="/google-badge-gcs.png" alt="Add Correa General Contractors as a preferred source on Google" width={192} height={54} className="h-auto w-48 object-contain" />
          </a>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Services</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link href="/services/commercial" className="hover:text-[#C2A57A]">Commercial Construction</Link></li>
            <li><Link href="/services/residential" className="hover:text-[#C2A57A]">Residential Construction</Link></li>
            {servicesQuickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-[#C2A57A]">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Company</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link href="/about-us" className="hover:text-[#C2A57A]">About Us</Link></li>
            <li><Link href="/projects" className="hover:text-[#C2A57A]">Projects</Link></li>
            <li><Link href="/blog" className="hover:text-[#C2A57A]">Blog</Link></li>
            <li><Link href="/join-our-team" className="hover:text-[#C2A57A]">Careers</Link></li>
            <li><Link href="/subcontractors" className="hover:text-[#C2A57A]">Subcontractor Registration</Link></li>
            <li><Link href="/build-with-us" className="hover:text-[#C2A57A]">Partnerships</Link></li>
          </ul>
          <h2 className="mt-6 text-xl font-semibold">Service Areas</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {locationPages.map((city) => (
              <li key={city.path}>
                <Link href={city.path} className="hover:text-[#C2A57A]">{city.linkLabel}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Contact</h2>
          <address className="mt-4 space-y-2 text-sm not-italic text-white/80">
            <p className="font-semibold text-white">{SITE.name}</p>
            <p>
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#C2A57A]">
                {SITE.address.street}
                <br />
                {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
              </a>
            </p>
            <p><a href={SITE.phoneHref} className="hover:text-[#C2A57A]">{SITE.phone}</a></p>
            <p><a href={`mailto:${SITE.email}`} className="hover:text-[#C2A57A]">{SITE.email}</a></p>
            <p>{SITE.hours.short}</p>
          </address>
          <Link href="/contact-us" className="mt-5 inline-flex rounded-full bg-[#C2A57A] px-5 py-2 text-sm font-semibold text-[#1F2A30] hover:bg-[#d5ba92]">
            Get a Free Estimate
          </Link>
        </div>
      </div>

      <AiSummaryLinks />

      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/70 md:px-10 lg:px-14">
        © {year} {SITE.name}. All rights reserved. · General contractor in Dallas, TX
      </div>
    </footer>
  );
}
