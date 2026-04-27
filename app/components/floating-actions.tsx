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
        ☎
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
