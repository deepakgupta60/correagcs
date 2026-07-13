import type { MetadataRoute } from "next";
import { blogPosts } from "./components/blog-data";
import { projectsData } from "./components/project-data";

const BASE_URL = "https://correagcs.com";

const routes = [
  "",
  "/about-us",
  "/blog",
  "/contact",
  "/contact-us",
  "/build-with-us",
  "/join-our-team",
  "/projects",
  "/services",
  "/services/general-contracting",
  "/services/design-build",
  "/services/renovation-remodeling",
  "/services/project-consultation",
  "/services/commercial",
  "/services/residential",
  "/general-contractor-in-dallas",
  "/general-contractor-in-frisco",
  "/general-contractor-in-arlington",
  "/construction-company-in-denton",
  "/subcontractors",
  "/what-we-do",
  "/who-we-are",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);
  const projectRoutes = projectsData.map((project) => `/projects/${project.slug}`);
  const allRoutes = [...routes, ...blogRoutes, ...projectRoutes];

  return allRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
