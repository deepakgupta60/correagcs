"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export function GsapAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanupHoverListeners: Array<() => void> = [];
    const cleanupHeaderListeners: Array<() => void> = [];

    const ctx = gsap.context(() => {
      const hero = document.querySelector<HTMLElement>("#home");
      if (hero) {
        const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
        heroTimeline.fromTo(
          hero.querySelectorAll("h1, p, .inline-flex, .rounded-full"),
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 },
        );

        const heroVideo = hero.querySelector("video");
        if (heroVideo) {
          gsap.fromTo(heroVideo, { scale: 1.08 }, { scale: 1, duration: 1.4, ease: "power2.out" });
        }
      }

      gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 42 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".gsap-zoom-card").forEach((card) => {
        const media = card.querySelector<HTMLElement>("[data-zoom-target]");
        if (!media) return;

        const zoomIn = () => {
          gsap.to(media, {
            scale: 1.08,
            duration: 0.45,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        const zoomOut = () => {
          gsap.to(media, {
            scale: 1,
            duration: 0.45,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        card.addEventListener("mouseenter", zoomIn);
        card.addEventListener("mouseleave", zoomOut);
        cleanupHoverListeners.push(() => {
          card.removeEventListener("mouseenter", zoomIn);
          card.removeEventListener("mouseleave", zoomOut);
        });
      });

      const header = document.querySelector<HTMLElement>(".site-header");
      const headerInner = document.querySelector<HTMLElement>(".site-header-inner");

      if (header && headerInner) {
        const forceScrolled = header.dataset.forceScrolled === "true";
        header.classList.remove("site-header--hovered");
        const headerSurface = {
          backgroundColor: "rgba(255, 255, 255, 0.98)",
          borderBottomColor: "rgba(214, 214, 214, 1)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        };

        if (forceScrolled) {
          header.classList.add("site-header--scrolled");
          gsap.set(header, headerSurface);
          gsap.set(headerInner, { paddingTop: 10, paddingBottom: 10 });
          return;
        }

        const setScrolledHeader = () => {
          header.classList.add("site-header--scrolled");
          gsap.to(header, { ...headerSurface, duration: 0.25, overwrite: "auto" });
          gsap.to(headerInner, {
            paddingTop: 10,
            paddingBottom: 10,
            duration: 0.25,
            overwrite: "auto",
          });
        };

        const setTransparentHeader = () => {
          header.classList.remove("site-header--scrolled");
          header.classList.remove("site-header--hovered");
          gsap.to(header, {
            backgroundColor: "rgba(0,0,0,0)",
            borderBottomColor: "rgba(255,255,255,0)",
            boxShadow: "0 0 0 rgba(0,0,0,0)",
            duration: 0.25,
            overwrite: "auto",
          });
          gsap.to(headerInner, {
            paddingTop: 16,
            paddingBottom: 16,
            duration: 0.25,
            overwrite: "auto",
          });
        };

        const setHoveredHeader = () => {
          header.classList.add("site-header--hovered");
          gsap.to(header, { ...headerSurface, duration: 0.2, overwrite: "auto" });
        };

        const clearHoveredHeader = () => {
          header.classList.remove("site-header--hovered");
          if (window.scrollY <= 12) {
            setTransparentHeader();
          }
        };

        const onScroll = () => {
          if (window.scrollY > 12) {
            setScrolledHeader();
          } else {
            if (!header.classList.contains("site-header--hovered")) {
              setTransparentHeader();
            }
          }
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        header.addEventListener("mouseenter", setHoveredHeader);
        header.addEventListener("mouseleave", clearHoveredHeader);
        cleanupHeaderListeners.push(() => window.removeEventListener("scroll", onScroll));
        cleanupHeaderListeners.push(() => header.removeEventListener("mouseenter", setHoveredHeader));
        cleanupHeaderListeners.push(() => header.removeEventListener("mouseleave", clearHoveredHeader));
      }
    });

    return () => {
      cleanupHeaderListeners.forEach((cleanup) => cleanup());
      cleanupHoverListeners.forEach((cleanup) => cleanup());
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

  return null;
}
