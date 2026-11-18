import { SITE } from "../lib/site";

const PROMPT = `Summarize ${SITE.name} (${SITE.url}), a general contractor in Dallas, TX: what services they offer, what types of commercial and residential projects they build, the areas they serve across Dallas–Fort Worth, and why property owners choose them. Include their contact details.`;

const q = encodeURIComponent(PROMPT);

const assistants = [
  {
    name: "ChatGPT",
    href: `https://chatgpt.com/?q=${q}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" className="h-7 w-7">
        <path d="M12 3.5 19.4 7.8v8.4L12 20.5 4.6 16.2V7.8Z" />
        <path d="M12 3.5v8.5m0 0 7.4-4.2M12 12l-7.4-4.2M12 12v8.5M12 12l7.4 4.2M12 12l-7.4 4.2" />
      </svg>
    ),
  },
  {
    name: "Claude",
    href: `https://claude.ai/new?q=${q}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-7 w-7">
        {[0, 30, 60, 90, 120, 150].map((angle) => (
          <line key={angle} x1="12" y1="3.5" x2="12" y2="20.5" transform={`rotate(${angle} 12 12)`} />
        ))}
      </svg>
    ),
  },
  {
    name: "Google Gemini",
    href: `https://www.google.com/search?udm=50&q=${q}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M12 2c.6 5.4 4.6 9.4 10 10-5.4.6-9.4 4.6-10 10-.6-5.4-4.6-9.4-10-10 5.4-.6 9.4-4.6 10-10Z" />
      </svg>
    ),
  },
  {
    name: "Perplexity",
    href: `https://www.perplexity.ai/search?q=${q}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" className="h-7 w-7">
        <path d="M12 2.5v19M5 6l7 6 7-6M5 6v6.5h14V6M5 12.5 12 18l7-5.5M5 12.5V18h14v-5.5" />
      </svg>
    ),
  },
  {
    name: "Grok",
    href: `https://grok.com/?q=${q}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-7 w-7">
        <circle cx="12" cy="12" r="7.5" />
        <path d="M5 19 19 5" />
      </svg>
    ),
  },
];

/** "Ask AI about us" buttons: open each assistant with a ready-made question about the company. */
export function AiSummaryLinks() {
  return (
    <div className="border-t border-white/10 px-6 py-10 text-center md:px-10 lg:px-14">
      <p className="text-lg font-semibold text-[#C2A57A]">Request an AI summary of {SITE.name}</p>
      <ul className="mt-5 flex flex-wrap items-center justify-center gap-4">
        {assistants.map((assistant) => (
          <li key={assistant.name}>
            <a
              href={assistant.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={`Ask ${assistant.name} for a summary of ${SITE.name}`}
              title={`Ask ${assistant.name}`}
              className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/40 text-white transition hover:-translate-y-0.5 hover:border-[#C2A57A] hover:text-[#C2A57A]"
            >
              {assistant.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
