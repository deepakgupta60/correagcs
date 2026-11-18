"use client";

import { useSyncExternalStore } from "react";

const COOKIE_KEY = "correa_cookie_consent";
const listeners = new Set<() => void>();

function readConsent() {
  try {
    return window.localStorage.getItem(COOKIE_KEY);
  } catch {
    return "unavailable";
  }
}

function writeConsent(value: "accepted" | "declined") {
  try {
    window.localStorage.setItem(COOKIE_KEY, value);
  } catch {
    // Storage blocked: just hide the banner for this page view.
  }
  const w = window as Window & { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: "cookie_consent", consent: value });
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function CookieBanner() {
  // Server snapshot = "pending" so nothing renders during SSR (no layout shift / hydration mismatch).
  const consent = useSyncExternalStore(subscribe, readConsent, () => "pending");

  if (consent !== null) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] px-4 pb-4" role="region" aria-label="Cookie consent">
      <div className="mx-auto max-w-5xl rounded-2xl border border-[#dbe3ee] bg-white p-4 shadow-[0_14px_32px_rgba(10,30,40,0.18)] md:flex md:items-center md:justify-between md:gap-4">
        <p className="text-sm leading-6 text-[#334155]">
          We use cookies to analyze traffic and improve your experience on our site.
        </p>
        <div className="mt-3 flex shrink-0 gap-2 md:mt-0">
          <button
            type="button"
            onClick={() => writeConsent("declined")}
            className="inline-flex items-center justify-center rounded-full border border-[#1F2A30] px-5 py-2 text-sm font-semibold text-[#1F2A30] transition hover:bg-[#f1f5f9]"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => writeConsent("accepted")}
            className="inline-flex items-center justify-center rounded-full bg-[#1F2A30] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#11181d]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
