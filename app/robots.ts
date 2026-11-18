import type { MetadataRoute } from "next";
import { SITE } from "./lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Search engines and AI answer engines are all welcome (SEO + AEO + GEO).
      { userAgent: "*", allow: "/" },
      {
        userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Bingbot", "Applebot"],
        allow: "/",
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
