import type { Metadata } from "next";
import { FOUNDER } from "./people";
import { SITE, absoluteUrl } from "./site";

type PageMetaInput = {
  /** Page title WITHOUT the brand suffix (the root layout template appends it). */
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  /** Use when the title should not get the "| Correa General Contractors" suffix. */
  absoluteTitle?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  image = SITE.defaultOgImage,
  imageAlt,
  type = "website",
  publishedTime,
  modifiedTime,
  absoluteTitle = false,
}: PageMetaInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE.name}`;
  const images = [{ url: image, alt: imageAlt ?? title }];

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
      types: { "application/rss+xml": [{ url: "/feed.xml", title: `${SITE.name} Blog` }] },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE.name,
      locale: "en_US",
      type,
      images,
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

/** Renders a JSON-LD script tag (escaped per Next.js JSON-LD guidance). */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export const ORG_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": ORG_ID,
    name: SITE.name,
    alternateName: "Correa GCS",
    url: SITE.url,
    logo: absoluteUrl(SITE.logo),
    image: [
      absoluteUrl("/projects/westhouse/4.jpeg"),
      absoluteUrl("/projects/odessa/8.webp"),
      absoluteUrl("/projects/redoak/red-oak.webp"),
    ],
    description:
      "Correa General Contractors is a commercial and residential general contractor in Dallas, TX with 15+ years of experience and 200+ completed projects across Dallas–Fort Worth, offering general contracting, design-build, renovation and remodeling, pre-construction planning, and project consultation.",
    telephone: SITE.phoneE164,
    email: SITE.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    hasMap: SITE.mapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: SITE.hours.days,
        opens: SITE.hours.opens,
        closes: SITE.hours.closes,
      },
    ],
    areaServed: SITE.serviceAreas.map((name) => ({
      "@type": "City",
      name,
      containedInPlace: { "@type": "State", name: "Texas" },
    })),
    sameAs: [...Object.values(SITE.social), SITE.mapsUrl],
    ...(FOUNDER.name
      ? { founder: { "@type": "Person", "@id": `${SITE.url}/about-us#founder`, name: FOUNDER.name, jobTitle: FOUNDER.jobTitle } }
      : {}),
    knowsAbout: [
      "General contracting",
      "Commercial construction",
      "Commercial tenant improvements",
      "Office and retail build-outs",
      "Residential construction",
      "Custom home building",
      "Multifamily construction",
      "Design-build delivery",
      "Renovation and remodeling",
      "Pre-construction planning",
      "Construction cost estimating",
      "City of Dallas building permits",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction services",
      itemListElement: [
        "General Contracting",
        "Design-Build",
        "Renovation & Remodeling",
        "Pre-Construction Planning",
        "Project Consultation",
        "Commercial Construction",
        "Residential Construction",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };
}

export function personSchema(person: {
  slug: string;
  name: string;
  jobTitle: string;
  shortBio: string;
  photo: string;
  linkedin?: string;
  expertise: string[];
}, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${absoluteUrl(path)}#person`,
    name: person.name,
    jobTitle: person.jobTitle,
    description: person.shortBio,
    url: absoluteUrl(path),
    ...(person.photo ? { image: absoluteUrl(person.photo) } : {}),
    ...(person.linkedin ? { sameAs: [person.linkedin] } : {}),
    knowsAbout: person.expertise,
    worksFor: { "@id": ORG_ID },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  const all = [{ name: "Home", path: "/" }, ...crumbs];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export type Faq = { question: string; answer: string };

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
  areas = SITE.serviceAreas,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  areas?: readonly string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    serviceType,
    description,
    url: absoluteUrl(path),
    provider: { "@id": ORG_ID },
    areaServed: areas.map((city) => ({ "@type": "City", name: `${city}, TX` })),
  };
}
