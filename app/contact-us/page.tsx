import type { Metadata } from "next";
import Link from "next/link";
import { ContactInquiryForm } from "../components/forms";
import { SiteFooter, SiteHeader } from "../components/homepage-sections";
import { PageCta, PageHero } from "../components/inner-page-sections";

export const metadata: Metadata = {
  title: "Get in Touch | Correa Construction",
  description:
    "Contact Correa Construction for residential and commercial projects. Reach us by phone, email, or office visit and request a consultation.",
};

const contactCards = [
  {
    title: "Phone",
    value: "+1 (555) 202-8811",
    href: "tel:+15552028811",
  },
  {
    title: "Email",
    value: "hello@correabuild.com",
    href: "mailto:hello@correabuild.com",
  },
  {
    title: "Office",
    value: "245 Harbor Street, Suite 18, Dallas, TX 75201",
    href: "https://maps.google.com/?q=245+Harbor+Street+Suite+18+Dallas+TX+75201",
  },
];

export default function ContactUsPage() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="GET IN TOUCH"
          title="Let's Build Something Great Together"
          description="Share your project goals and connect with our team for planning, budget, scheduling, and execution support."
        />
        <section className="py-16 md:py-20">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="grid gap-5 md:grid-cols-3">
              {contactCards.map((card) => (
                <article key={card.title} className="reveal-up rounded-2xl border border-[#dbe3ee] bg-white p-6 shadow-[0_10px_24px_rgba(10,30,40,0.07)]">
                  <p className="text-xs font-semibold tracking-[0.22em] text-[#C2A57A]">{card.title}</p>
                  <Link href={card.href} className="mt-3 block text-lg font-semibold text-[#1F2A30] hover:text-[#C2A57A]">
                    {card.value}
                  </Link>
                </article>
              ))}
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <article className="reveal-up rounded-2xl border border-[#dbe3ee] bg-white p-6 shadow-[0_10px_24px_rgba(10,30,40,0.07)]">
                <p className="text-xs font-semibold tracking-[0.22em] text-[#C2A57A]">Social Media</p>
                <div className="mt-3 grid gap-2 text-sm">
                  <Link href="https://www.facebook.com" className="font-semibold text-[#1F2A30] hover:text-[#C2A57A]">Facebook</Link>
                  <Link href="https://www.instagram.com" className="font-semibold text-[#1F2A30] hover:text-[#C2A57A]">Instagram</Link>
                  <Link href="https://www.linkedin.com" className="font-semibold text-[#1F2A30] hover:text-[#C2A57A]">LinkedIn</Link>
                </div>
              </article>
              <article className="reveal-up rounded-2xl border border-[#dbe3ee] bg-white p-6 shadow-[0_10px_24px_rgba(10,30,40,0.07)] md:col-span-2">
                <p className="text-xs font-semibold tracking-[0.22em] text-[#C2A57A]">Google Map</p>
                <div className="mt-3 overflow-hidden rounded-xl border border-[#dbe3ee]">
                  <iframe
                    title="Correa Construction Office Location"
                    src="https://maps.google.com/maps?q=245%20Harbor%20Street%20Suite%2018%20Dallas%20TX%2075201&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="h-72 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </article>
            </div>
            <div className="reveal-up mt-8 rounded-2xl border border-[#dbe3ee] bg-[#f8fafc] p-6 text-[#475569]">
              <p className="text-sm leading-7">
                Business Hours: Monday - Friday, 9:00 AM - 6:00 PM. For urgent site requirements, call us directly and our project desk will coordinate immediate support.
              </p>
            </div>
          </div>
        </section>
        <ContactInquiryForm ctaLabel="Send Inquiry" />
        <PageCta />
      </main>
      <SiteFooter />
    </div>
  );
}
