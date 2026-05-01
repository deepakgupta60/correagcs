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
  metadataBase: new URL("https://correaconstruction.com"),
  title: {
    default: "Correa Construction",
    template: "%s | Correa Construction",
  },
  description:
    "Correa General Contractors delivers residential and commercial construction services in Dallas-Fort Worth with transparent planning and quality execution.",
  applicationName: "Correa Construction",
  keywords: [
    "Dallas construction company",
    "general contractor Dallas",
    "residential construction Dallas",
    "commercial construction Dallas",
    "design build contractor",
  ],
  openGraph: {
    title: "Correa Construction",
    description:
      "Trusted Dallas-Fort Worth construction partner for residential and commercial projects.",
    type: "website",
    locale: "en_US",
    siteName: "Correa Construction",
  },
  twitter: {
    card: "summary_large_image",
    title: "Correa Construction",
    description:
      "Residential and commercial construction services across Dallas-Fort Worth.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GsapAnimations />
        {children}
        <CookieBanner />
        <FloatingActions />
      </body>
    </html>
  );
}
