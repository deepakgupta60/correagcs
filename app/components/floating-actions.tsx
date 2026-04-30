"use client";

import { useEffect, useState } from "react";

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 320);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-6 right-4 z-[70] flex flex-col gap-3">
      <a
        href="tel:+15552028811"
        aria-label="Call now"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C2A57A] text-white shadow-lg transition hover:bg-[#ad9169]"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.56 3.57.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.19 2.45.56 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2z" />
        </svg>
      </a>
      {showScrollTop ? (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1F2A30] text-white shadow-lg transition hover:bg-[#161D22]"
        >
          ↑
        </button>
      ) : null}
    </div>
  );
}
