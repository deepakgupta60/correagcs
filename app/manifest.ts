import type { MetadataRoute } from "next";
import { SITE } from "./lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: "Correa GC",
    description:
      "Commercial and residential general contractor in Dallas, TX serving Dallas–Fort Worth.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1F2A30",
    categories: ["business", "construction"],
    icons: [
      { src: "/fav.ico", sizes: "any", type: "image/x-icon" },
      { src: "/fav.png", sizes: "300x300", type: "image/png", purpose: "any" },
    ],
  };
}
