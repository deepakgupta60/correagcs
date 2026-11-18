"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, servicesQuickLinks } from "../lib/nav";
import { SITE } from "../lib/site";


const ctaClass =
  "inline-flex items-center justify-center rounded-full bg-[#C2A57A] px-6 py-3 text-sm font-semibold tracking-wide text-[#1F2A30] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d5ba92]";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    if (!mobileOpen) return () => {
      document.body.style.overflow = "";
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full px-3 pt-3 md:px-6">
        <div
          className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 shadow-[0_16px_40px_rgba(10,20,25,0.12)] transition-all duration-300 md:px-7 ${
            scrolled ? "border-[#dbe3ee] bg-white/95 backdrop-blur-xl" : "border-white/70 bg-white/90 backdrop-blur-lg"
          }`}
        >
          <Link href="/" className="flex items-center gap-2" aria-label={`${SITE.name} – home`}>
            <Image src="/black.png" alt={SITE.name} width={205} height={35} priority className="h-auto w-[148px] object-contain sm:w-[205px]" />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            <div className="group relative">
              <Link
                href="/services"
                aria-haspopup="true"
                className="rounded-full px-4 py-2 text-sm font-semibold tracking-wide text-[#1F2A30] transition-all duration-300 hover:bg-[#eef3f8]"
              >
                Services
              </Link>
              <div className="invisible absolute left-0 top-full z-40 mt-2 w-72 rounded-2xl border border-[#dbe3ee] bg-white p-3 opacity-0 shadow-2xl transition duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <Link href="/services/commercial" className="block rounded-xl px-3 py-2 text-sm font-semibold text-[#1F2A30] transition hover:bg-[#eef3f8]">
                  Commercial Construction
                </Link>
                <Link href="/services/residential" className="block rounded-xl px-3 py-2 text-sm font-semibold text-[#1F2A30] transition hover:bg-[#eef3f8]">
                  Residential Construction
                </Link>
                <div className="my-2 border-t border-[#e2e8f0]" />
                {servicesQuickLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="block rounded-xl px-3 py-2 text-sm text-[#475569] transition hover:bg-[#eef3f8] hover:text-[#1F2A30]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full px-4 py-2 text-sm font-semibold tracking-wide text-[#1F2A30] transition-all duration-300 hover:bg-[#eef3f8]">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={SITE.phoneHref} className="text-sm font-semibold text-[#1F2A30] hover:text-[#C2A57A]">
              {SITE.phone}
            </a>
            <Link href="/contact-us" className={ctaClass}>
              Get a Free Estimate
            </Link>
          </div>

          <button
            type="button"
            className="relative z-[121] rounded-lg border border-[#cbd5e1] p-2 text-[#1F2A30] lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            ☰
          </button>
        </div>
      </header>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[120] bg-[#11181d]/95 p-4 text-white lg:hidden" onClick={close}>
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="mx-auto flex h-full max-w-xl flex-col rounded-2xl border border-white/15 bg-[#1F2A30] p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <Image src="/white.png" alt={SITE.name} width={178} height={30} className="h-auto w-[150px] object-contain sm:w-[178px]" />
              <button type="button" aria-label="Close navigation menu" className="rounded-lg border border-white/20 px-3 py-1 text-2xl" onClick={close}>
                ×
              </button>
            </div>

            <nav aria-label="Mobile" className="mt-6 flex-1 overflow-y-auto">
              <div className="space-y-3">
                <Link href="/services" onClick={close} className="block rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-lg font-semibold transition hover:bg-white/10">
                  Services
                </Link>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={close} className="block rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-lg font-semibold transition hover:bg-white/10">
                    {link.label}
                  </Link>
                ))}
              </div>

              <p className="mt-8 text-xs font-semibold tracking-[0.26em] text-[#C2A57A]">SERVICES</p>
              <div className="mt-3 grid gap-2">
                {[{ label: "Commercial Construction", href: "/services/commercial" }, { label: "Residential Construction", href: "/services/residential" }, ...servicesQuickLinks].map((item) => (
                  <Link key={item.href} href={item.href} onClick={close} className="rounded-lg px-2 py-2 text-white/85 transition hover:bg-white/10 hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="grid gap-2 pt-4">
              <a href={SITE.phoneHref} className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold">
                Call {SITE.phone}
              </a>
              <Link href="/contact-us" onClick={close} className={ctaClass}>
                Get a Free Estimate
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
