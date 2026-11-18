import type { MetadataRoute } from "next";
import { blogPosts } from "./components/blog-data";
import { locationPages } from "./components/location-data";
import { projectsData } from "./components/project-data";
import { serviceDetails } from "./components/service-data";
import { SITE, absoluteUrl } from "./lib/site";

// Bump this when the content of static pages meaningfully changes.
const SITE_UPDATED = "2026-11-18";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: string; priority: number; images?: string[] }[] = [
    { path: "/", priority: 1, images: [SITE.defaultOgImage] },
    { path: "/services", priority: 0.9 },
    { path: "/about-us", priority: 0.7 },
    { path: "/contact-us", priority: 0.8 },
    { path: "/projects", priority: 0.8 },
    { path: "/blog", priority: 0.7 },
    { path: "/author/deepak-gupta", priority: 0.4 },
    { path: "/build-with-us", priority: 0.4 },
    { path: "/join-our-team", priority: 0.4 },
    { path: "/subcontractors", priority: 0.4 },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly" as const,
      priority: route.priority,
      ...(route.images ? { images: route.images.map((image) => absoluteUrl(image)) } : {}),
    })),
    ...serviceDetails.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}`),
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.9,
      images: [absoluteUrl(service.heroImage)],
    })),
    ...locationPages.map((location) => ({
      url: absoluteUrl(location.path),
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...projectsData.map((project) => ({
      url: absoluteUrl(`/projects/${project.slug}`),
      lastModified: SITE_UPDATED,
      changeFrequency: "yearly" as const,
      priority: 0.6,
      images: project.gallery.map((image) => absoluteUrl(image)),
    })),
    ...blogPosts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
