import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { FloatingActions } from "./components/floating-actions";
import { GsapAnimations } from "./components/gsap-animations";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Correa Construction",
    template: "%s | Correa Construction",
  },
  description:
    "Correa Construction delivers modern residential and commercial construction services in Dallas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GsapAnimations />
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
