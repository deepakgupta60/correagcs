"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function GsapAnimations() {
  useEffect(() => {
    const cleanupHoverListeners: Array<() => void> = [];

    const ctx = gsap.context(() => {
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
              start: "top 85%",
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

        if (forceScrolled) {
          header.classList.add("site-header--scrolled");
          gsap.set(header, {
            backgroundColor: "rgba(245, 245, 245, 0.98)",
            borderBottomColor: "rgba(214, 214, 214, 1)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          });
          return;
        }

        ScrollTrigger.create({
          start: 24,
          onEnter: () => {
            header.classList.add("site-header--scrolled");
            gsap.to(header, {
              backgroundColor: "rgba(245, 245, 245, 0.98)",
              borderBottomColor: "rgba(214, 214, 214, 1)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              duration: 0.25,
              overwrite: "auto",
            });
            gsap.to(headerInner, {
              paddingTop: 10,
              paddingBottom: 10,
              duration: 0.25,
              overwrite: "auto",
            });
          },
          onLeaveBack: () => {
            header.classList.remove("site-header--scrolled");
            gsap.to(header, {
              backgroundColor: "rgba(0,0,0,0)",
              borderBottomColor: "rgba(194, 165, 122, 0)",
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
          },
        });
      }
    });

    return () => {
      cleanupHoverListeners.forEach((cleanup) => cleanup());
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
