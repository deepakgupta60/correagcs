import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { CookieBanner } from "./components/cookie-banner";
import { FloatingActions } from "./components/floating-actions";
import { GsapAnimations } from "./components/gsap-animations";
import { JsonLd, organizationSchema, websiteSchema } from "./lib/seo";
import { SITE } from "./lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const GTM_ID = "GTM-W9BVMMLJ";

export const viewport: Viewport = {
  themeColor: "#1F2A30",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "General Contractor in Dallas, TX | Correa General Contractors",
    template: `%s | ${SITE.name}`,
  },
  description:
    "Correa General Contractors is a Dallas, TX general contractor with 15+ years of experience and 200+ DFW projects. Commercial build-outs, design-build, and custom residential construction.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Construction",
  alternates: {
    canonical: "./",
    types: {
      "application/rss+xml": [{ url: "/feed.xml", title: "Correa General Contractors Blog" }],
    },
  },
  openGraph: {
    title: "General Contractor in Dallas, TX | Correa General Contractors",
    description:
      "Trusted Dallas–Fort Worth general contractor for commercial build-outs, tenant improvements, design-build, and custom residential construction.",
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    url: "/",
    images: [{ url: SITE.defaultOgImage, alt: "Multifamily project built in North Texas by Correa General Contractors" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "General Contractor in Dallas, TX | Correa General Contractors",
    description:
      "Full-service commercial and residential general contracting across Dallas–Fort Worth.",
    images: [SITE.defaultOgImage],
  },
  icons: {
    icon: [
      { url: "/fav.ico" },
      { url: "/fav.png", type: "image/png", sizes: "300x300" },
    ],
    apple: "/fav.png",
  },
  verification: {
    google: "zxOkPhnyasM6TEigOI_i9KSHrluhNIT4utA0wotqJBc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-US"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <GoogleTagManager gtmId={GTM_ID} />
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-[#1F2A30]"
        >
          Skip to content
        </a>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <GsapAnimations />
        {children}
        <CookieBanner />
        <FloatingActions />
      </body>
    </html>
  );
}
