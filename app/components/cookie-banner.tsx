"use client";

import { useEffect, useState } from "react";

const COOKIE_KEY = "correa_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasConsent = window.localStorage.getItem(COOKIE_KEY);
    if (!hasConsent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    window.localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] px-4 pb-4">
      <div className="mx-auto max-w-5xl rounded-2xl border border-[#dbe3ee] bg-white p-4 shadow-[0_14px_32px_rgba(10,30,40,0.18)] md:flex md:items-center md:justify-between md:gap-4">
        <p className="text-sm leading-6 text-[#334155]">
          We use cookies to improve site experience, analyze traffic, and personalize content. By continuing, you agree to our cookie use.
        </p>
        <button
          type="button"
          onClick={acceptCookies}
          className="mt-3 inline-flex items-center justify-center rounded-full bg-[#1F2A30] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#11181d] md:mt-0"
        >
          Accept Cookies
        </button>
      </div>
    </div>
  );
}