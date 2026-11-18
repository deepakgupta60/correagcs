import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components/homepage-sections";
import { PageHero } from "./components/inner-page-sections";

export default function NotFound() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <main id="main-content">
        <PageHero
          eyebrow="404"
          title="We couldn't find that page"
          description="The page may have moved. Try one of these popular pages instead."
        />
        <section className="w-full px-6 py-16 md:px-10 lg:px-14">
          <ul className="grid gap-4 md:grid-cols-3">
            {[
              ["Construction services", "/services"],
              ["Commercial construction", "/services/commercial"],
              ["Residential construction", "/services/residential"],
              ["Our projects", "/projects"],
              ["Construction blog", "/blog"],
              ["Contact us", "/contact-us"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="block rounded-2xl border border-[#dbe3ee] p-5 font-semibold text-[#1F2A30] hover:border-[#C2A57A]">
                  {label} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
