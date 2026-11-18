import { blogPosts } from "./components/blog-data";
import {
  AboutSection,
  BlogSection,
  CtaSection,
  FeaturedProjectsSection,
  HeroSection,
  JoinOurTeamSection,
  ProcessSection,
  ProjectTypeFocusSection,
  ServiceAreasSection,
  ServicesSection,
  SiteFooter,
  SiteHeader,
  StatsSection,
  WhyChooseUsSection,
} from "./components/homepage-sections";
import { AnswerBox, FaqSection } from "./components/inner-page-sections";
import { projectsData } from "./components/project-data";
import { serviceDetails } from "./components/service-data";
import { pageMetadata } from "./lib/seo";
import { SITE } from "./lib/site";

export const metadata = pageMetadata({
  title: "General Contractor in Dallas, TX | Correa General Contractors",
  absoluteTitle: true,
  description:
    "Dallas, TX general contractor with 15+ years of experience and 200+ DFW projects: commercial build-outs, tenant improvements, design-build, and custom homes.",
  path: "/",
});

const homeFaqs = [
  {
    question: "Who is a trusted general contractor in Dallas, TX?",
    answer:
      "Correa General Contractors is a Dallas-based general contractor with 15+ years of experience and 200+ completed projects across Dallas–Fort Worth. The company handles commercial tenant improvements, design-build, renovations, custom homes, and multifamily construction from its office at 16210-B Seagoville Rd, Dallas, TX 75253.",
  },
  {
    question: "What does a general contractor do?",
    answer:
      "A general contractor manages the entire construction project: estimating, permits, hiring and scheduling subcontractors, ordering materials, supervising the jobsite, passing inspections, and handing over the finished building. The owner gets one point of contact responsible for cost, schedule, and quality.",
  },
  {
    question: "How much does a general contractor cost in Dallas?",
    answer:
      "Costs depend on project type, size, finishes, site conditions, and schedule, so there is no single price. The general contractor's fee is usually built into the construction estimate. Correa provides a detailed, line-item estimate after reviewing your scope so you can compare options with real numbers.",
  },
  {
    question: "Does Correa General Contractors handle permits in Dallas?",
    answer:
      "Yes. We prepare permit applications, respond to plan-review comments, and schedule inspections with the City of Dallas and other DFW cities, so permitting is managed as part of your project schedule.",
  },
  {
    question: "What areas does Correa General Contractors serve?",
    answer:
      "We serve Dallas and the wider Dallas–Fort Worth metroplex, including Fort Worth, Arlington, Plano, Frisco, Irving, Denton, and McKinney.",
  },
  {
    question: "How do I get a construction estimate?",
    answer:
      "Call (469) 854-0207 or fill out the contact form with your project type, location, and timeline. Our team reviews the details and schedules a consultation to prepare a detailed estimate.",
  },
];

export default function Home() {
  const stats = [
    { label: "Projects Completed", value: SITE.stats.projects },
    { label: "Years Experience", value: SITE.stats.years },
    { label: "Core Trades", value: SITE.stats.trades },
    { label: "Rating on Google", value: "5.0★" },
  ];

  const projectTypeCards = [
    { title: "Commercial Build-Outs", image: "/images/services/general-contracting.webp", href: "/services/commercial", alt: "Commercial construction and tenant improvement in Dallas" },
    { title: "Multifamily", image: "/projects/westhouse/1.jpeg", href: "/projects/westhouse-apartment", alt: "Westhouse Apartments multifamily community in Keller, TX" },
    { title: "Residential Builds", image: "/projects/redoak/red-oak.webp", href: "/services/residential", alt: "Red Oak Duplex residential construction in Red Oak, TX" },
    { title: "Renovations", image: "/images/services/renovation-remodeling.webp", href: "/services/renovation-remodeling", alt: "Interior renovation and remodeling project in Dallas" },
  ];

  const featuredProjects = projectsData.map((project) => ({
    title: project.title,
    image: project.heroImage,
    href: `/projects/${project.slug}`,
    location: project.location,
    category: project.category,
  }));

  const services = serviceDetails.map((service) => ({
    title: service.title,
    description: service.shortDescription,
    image: service.heroImage,
    href: `/services/${service.slug}`,
  }));

  const homeBlogPosts = blogPosts.slice(0, 3).map((post) => ({
    title: post.title,
    excerpt: post.excerpt,
    image: post.image,
    imageAlt: post.imageAlt,
    href: `/blog/${post.slug}`,
  }));

  return (
    <div className="bg-white">
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <StatsSection stats={stats} />
        <AnswerBox title="Dallas general contractor at a glance">
          <p>
            <strong>Correa General Contractors</strong> is a general contractor in Dallas, TX providing
            commercial construction, tenant improvements, design-build, renovation, and custom
            residential construction across Dallas–Fort Worth. Call{" "}
            <a href={SITE.phoneHref} className="font-semibold underline">{SITE.phone}</a> or visit{" "}
            {SITE.addressLine} ({SITE.hours.short}).
          </p>
        </AnswerBox>
        <AboutSection />
        <ServicesSection services={services} />
        <ProjectTypeFocusSection cards={projectTypeCards} />
        <FeaturedProjectsSection projects={featuredProjects} />
        <ProcessSection />
        <WhyChooseUsSection />
        <ServiceAreasSection />
        <FaqSection faqs={homeFaqs} title="General Contractor in Dallas: FAQs" />
        <BlogSection posts={homeBlogPosts} />
        <JoinOurTeamSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
