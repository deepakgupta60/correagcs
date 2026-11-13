import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { CookieBanner } from "./components/cookie-banner";
import { FloatingActions } from "./components/floating-actions";
import { GsapAnimations } from "./components/gsap-animations";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://correagcs.com"),
  title: {
    default: "General Contractor in Dallas, TX | Correa General Contractors",
    template: "%s | Correa General Contractors Dallas",
  },
  description:
    "Trusted General Contractor in Dallas, TX with 15+ years of experience and 200+ completed DFW projects. Specializing in commercial tenant improvements, design-build, and custom residential construction"
    ,
  applicationName: "Correa General Contractors",
  keywords: [
    "general contractor in dallas",
    "general contractor Dallas TX",
    "Dallas construction company",
    "commercial tenant improvement Dallas",
    "residential construction Dallas",
    "commercial construction Dallas",
    "design build contractor DFW",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "General Contractor in Dallas, TX | Commercial & Residential | Correa",
    description:
      "Trusted Dallas-Fort Worth general contractors for commercial for builds, tenant improvements, and custom residential construction",
    type: "website",
    locale: "en_US",
    siteName: "Correa General Contractors",
  },
  twitter: {
    card: "summary_large_image",
    title: "General Contractor in Dallas, TX | Correa General Contractors",
    description:
      "Full-service commercial and residential general contracting across Dallas-Fort Worth.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet":-1,
      "max-image-preview": "large",
      "max-video-preview": -1,
  },
},
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://correagcs.com/#organization",
  name: "Correa General Contractors",
  url: "https://correagcs.com",
  logo: "https://correagcs.com/logo.png",
  description: "Correa General Contractors is a full-service commercial and residential general contractor in Dallas, TX with 15+ years of experience and 200+ complted projects across the Dallas-Fort Worth metroplex.",
  telephone: "+1-469-854-0207",
  email: "info@correagcs.com",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "16210-B Seagoville Rd",
    addressLocality: "Dallas",
    addressRegion: "TX",
    postalCode: "75253",
    addressCountry: "US",
  },
  geo:{
    "@type": "GeoCoordinates",
    latitude: 32.6789,
    longitude: -96.6354 
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      opens: "08:00",
      closes: "17:00"
    }
  ],
  areaServed: [
    {"@type": "City", name: "Dallas"},
    {"@type": "City", name: "Frisco"},
    {"@type": "City", name: "Denton"},
    {"@type": "City", name: "Arlington"},
    {"@type": "City", name: "Plano"},
    {"@type": "City", name: "Irving"},
    {"@type": "City", name: "Fort Worth"},
    {"@type": "City", name: "McKinney"},
  ],
  knowsAbout: [
    "General Contracting",
    "Commercial Construction",
    "Commercial tenant improvements",
    "Residential Construction Home Building",
    "Design-Build Delivery",
    "Pre-Construction Planning",
    "City of Dallas Building Permitting",
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)

{
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" type="image/png" href="/fav.ico" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-W9BVMMLJ');
      `,
          }}
        />
        <meta
          name="google-site-verification"
          content="zxOkPhnyasM6TEigOI_i9KSHrluhNIT4utA0wotqJBc"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W9BVMMLJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <GsapAnimations />
        {children}
        <CookieBanner />
        <FloatingActions />
      </body>
    </html>
  );
}
