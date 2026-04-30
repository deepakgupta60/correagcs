import {
  AboutSection,
  CtaSection,
  FeaturedProjectsSection,
  HeroSection,
  JoinOurTeamSection,
  ProcessSection,
  ProjectTypeFocusSection,
  ServicesSection,
  SiteFooter,
  SiteHeader,
  StatsSection,
  ServiceAreasSection,
  WhyChooseUsSection,
} from "./components/homepage-sections";

export default function Home() {
  const stats = [
    { label: "Projects Completed", value: "25+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Completed Projects", value: "150+" },
    { label: "Years Experience", value: "10+" },
  ];

  const projectTypeCards = [
    {
      title: "Residential Builds",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Commercial Spaces",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Industrial Projects",
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Interior Renovation",
      image:
        "https://images.unsplash.com/photo-1600585154154-712e39fd45d8?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const featuredProjects = [
    {
      title: "Oceanfront Luxury Villa",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Westside Corporate Hub",
      image:
        "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Summit Logistics Complex",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const services = [
    {
      title: "General Contracting",
      description:
        "End-to-end management of planning, procurement, and build execution with transparent updates.",
      image:
        "https://images.unsplash.com/photo-1590725176485-88aa57f5f7f8?auto=format&fit=crop&w=1000&q=80",
      href: "/services/general-contracting",
    },
    {
      title: "Design-Build Delivery",
      description:
        "Integrated design and construction approach for faster delivery and aligned project outcomes.",
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80",
      href: "/services/design-build",
    },
    {
      title: "Renovation & Remodeling",
      description:
        "High-quality renovation services that modernize existing structures while preserving functionality.",
      image:
        "https://images.unsplash.com/photo-1604014056465-0ad23f16dfd8?auto=format&fit=crop&w=1000&q=80",
      href: "/services/renovation-remodeling",
    },
    {
      title: "Project Consultation",
      description:
        "Expert technical consultation, cost planning, and risk mitigation before the first brick is laid.",
      image:
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1000&q=80",
      href: "/services/project-consultation",
    },
    {
      title: "Pre-Construction Planning",
      description:
        "Scheduling, permitting coordination, feasibility checks, and procurement planning for smooth execution.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
      href: "/services",
    },
  ];

  return (
    <div className="bg-white">
      <SiteHeader />
      <main>
        <HeroSection />
        <StatsSection stats={stats} />
        <AboutSection />
        <ProjectTypeFocusSection cards={projectTypeCards} />
        <JoinOurTeamSection />
        <FeaturedProjectsSection projects={featuredProjects} />
        <ServicesSection services={services} />
        <ProcessSection />
        <WhyChooseUsSection />
        <ServiceAreasSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
