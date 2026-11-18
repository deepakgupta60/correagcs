"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const BOT_UA = /bot|crawl|spider|slurp|lighthouse|pagespeed|headless|preview/i;

/**
 * Scroll animations that can never leave a section blank:
 * - Hero text is never hidden (it is the LCP element, so it must paint immediately).
 * - Elements already on screen at load are never hidden.
 * - Crawlers, reduced-motion users, and headless browsers get no entrance animations.
 * - A failsafe reveals anything still hidden after a few seconds.
 */
export function GsapAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isBot = BOT_UA.test(navigator.userAgent) || navigator.webdriver;
    const cleanups: Array<() => void> = [];

    const ctx = gsap.context(() => {
      const heroMedia = document.querySelector<HTMLElement>("#home img, #home video");
      if (heroMedia && !reduceMotion) {
        gsap.fromTo(heroMedia, { scale: 1.06 }, { scale: 1, duration: 1.4, ease: "power2.out" });
      }

      if (!reduceMotion && !isBot) {
        const fold = window.innerHeight * 0.92;
        const pending = gsap.utils
          .toArray<HTMLElement>(".reveal-up")
          .filter((element) => element.getBoundingClientRect().top > fold);

        pending.forEach((element) => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 32 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: { trigger: element, start: "top 94%", once: true },
            },
          );
        });

        // Failsafe: never leave content invisible (stalled tab, fast scroll, odd browsers).
        const failsafe = window.setTimeout(() => {
          pending.forEach((element) => {
            if (Number(getComputedStyle(element).opacity) < 1 && element.getBoundingClientRect().top < window.innerHeight) {
              gsap.set(element, { opacity: 1, y: 0 });
            }
          });
        }, 2500);
        const onScrollEnd = () => {
          pending.forEach((element) => {
            if (element.getBoundingClientRect().bottom < 0) gsap.set(element, { opacity: 1, y: 0 });
          });
        };
        window.addEventListener("scrollend", onScrollEnd);
        cleanups.push(() => window.clearTimeout(failsafe));
        cleanups.push(() => window.removeEventListener("scrollend", onScrollEnd));
      }

      if (!reduceMotion) {
        gsap.utils.toArray<HTMLElement>(".gsap-zoom-card").forEach((card) => {
          const media = card.querySelector<HTMLElement>("[data-zoom-target]");
          if (!media) return;
          const zoomIn = () => gsap.to(media, { scale: 1.08, duration: 0.45, ease: "power2.out", overwrite: "auto" });
          const zoomOut = () => gsap.to(media, { scale: 1, duration: 0.45, ease: "power2.out", overwrite: "auto" });
          card.addEventListener("mouseenter", zoomIn);
          card.addEventListener("mouseleave", zoomOut);
          cleanups.push(() => {
            card.removeEventListener("mouseenter", zoomIn);
            card.removeEventListener("mouseleave", zoomOut);
          });
        });
      }
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

  return null;
}
