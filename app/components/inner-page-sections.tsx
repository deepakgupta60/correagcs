import Image from "next/image";
import Link from "next/link";
import { JsonLd, breadcrumbSchema, faqSchema, type Crumb, type Faq } from "../lib/seo";
import { SITE } from "../lib/site";

export function Breadcrumbs({ crumbs, dark = true }: { crumbs: Crumb[]; dark?: boolean }) {
  const all = [{ name: "Home", path: "/" }, ...crumbs];
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <nav aria-label="Breadcrumb" className={`text-sm ${dark ? "text-white/70" : "text-[#64748B]"}`}>
        <ol className="flex flex-wrap items-center gap-1">
          {all.map((crumb, index) => {
            const last = index === all.length - 1;
            return (
              <li key={crumb.path} className="flex items-center gap-1">
                {last ? (
                  <span aria-current="page" className={dark ? "text-white" : "text-[#1F2A30]"}>
                    {crumb.name}
                  </span>
                ) : (
                  <>
                    <Link href={crumb.path} className="hover:text-[#C2A57A]">
                      {crumb.name}
                    </Link>
                    <span aria-hidden="true">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  image = "/projects/westhouse/7.jpeg",
  imageAlt = "",
  aside,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  crumbs?: Crumb[];
  image?: string;
  imageAlt?: string;
  /** Optional right-column content (desktop) so wide screens never show an empty half. */
  aside?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[#11181d] pb-20 pt-32 text-white md:pb-24 md:pt-40">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#11181d]/92 via-[#1F2A30]/80 to-[#1F2A30]/45" />
      <div className="relative z-10 grid w-full items-end gap-10 px-6 md:px-10 lg:grid-cols-12 lg:px-14">
        <div className={aside ? "lg:col-span-7" : "lg:col-span-9"}>
          {crumbs ? <Breadcrumbs crumbs={crumbs} /> : null}
          <p className="mt-6 text-sm font-semibold tracking-[0.3em] text-[#C2A57A]">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg text-white/85">{description}</p>
          {children}
        </div>
        {aside ? <div className="lg:col-span-5">{aside}</div> : null}
      </div>
    </section>
  );
}

/** Glass card for the hero's right column: the fastest ways to reach the team. */
export function HeroContactCard() {
  return (
    <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
      <p className="text-xs font-semibold tracking-[0.24em] text-[#C2A57A]">TALK TO OUR TEAM</p>
      <ul className="mt-4 space-y-4">
        <li>
          <p className="text-sm text-white/70">Call</p>
          <a href={SITE.phoneHref} className="text-2xl font-semibold hover:text-[#C2A57A]">{SITE.phone}</a>
        </li>
        <li>
          <p className="text-sm text-white/70">Email</p>
          <a href={`mailto:${SITE.email}`} className="text-lg font-semibold hover:text-[#C2A57A]">{SITE.email}</a>
        </li>
        <li>
          <p className="text-sm text-white/70">Office</p>
          <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-[#C2A57A]">{SITE.addressLine}</a>
        </li>
        <li>
          <p className="text-sm text-white/70">Hours</p>
          <p className="font-semibold">{SITE.hours.short}</p>
        </li>
      </ul>
    </div>
  );
}

/** Hero right-column stat panel for service, location and listing pages. */
export function HeroStats() {
  const stats = [
    [SITE.stats.projects, "Projects completed"],
    [SITE.stats.years, "Years of experience"],
    [SITE.stats.trades, "Core trades managed"],
    ["5.0★", "Rating on Google"],
  ];
  return (
    <dl className="grid grid-cols-2 gap-3">
      {stats.map(([value, label]) => (
        <div key={label} className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
          <dt className="sr-only">{label}</dt>
          <dd className="text-3xl font-bold text-white">{value}</dd>
          <dd className="mt-1 text-sm text-white/75">{label}</dd>
        </div>
      ))}
    </dl>
  );
}

export function HeroCtas() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <Link
        href="/contact-us"
        className="inline-flex items-center justify-center rounded-full bg-[#C2A57A] px-6 py-3 text-sm font-semibold text-[#1F2A30] transition hover:bg-[#d5ba92]"
      >
        Get a Free Estimate
      </Link>
      <a
        href={SITE.phoneHref}
        className="inline-flex items-center justify-center rounded-full border border-white/75 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1F2A30]"
      >
        Call {SITE.phone}
      </a>
    </div>
  );
}

/** A short, direct answer block. Answer engines and AI overviews quote these. */
export function AnswerBox({ title = "Quick answer", children }: { title?: string; children: React.ReactNode }) {
  return (
    <section className="px-6 pt-12 md:px-10 lg:px-14">
      <div className="grid gap-3 rounded-2xl border-l-4 border-[#C2A57A] bg-[#f7f3ed] p-6 text-base leading-8 text-[#1F2A30] md:p-8 md:text-lg lg:grid-cols-12 lg:gap-8">
        <p className="text-xs font-semibold tracking-[0.24em] text-[#9a7f55] lg:col-span-3 lg:pt-2">{title.toUpperCase()}</p>
        <div className="lg:col-span-9">{children}</div>
      </div>
    </section>
  );
}

export function ContentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-12 md:py-14">
      <div className="grid w-full gap-6 px-6 md:px-10 lg:grid-cols-12 lg:gap-12 lg:px-14">
        <h2 className="text-3xl font-semibold leading-tight text-[#1F2A30] md:text-4xl lg:col-span-4">{title}</h2>
        <div className="space-y-4 text-base leading-8 text-[#475569] md:text-lg lg:col-span-8">
          {children}
        </div>
      </div>
    </section>
  );
}

export function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-3 text-[#161D22] md:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="rounded-xl border border-[#dbe3ee] bg-[#f8fafc] px-4 py-3">
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Column count chosen from the item count so the last row is never half empty. */
export function gridCols(count: number) {
  if (count % 3 === 0) return "md:grid-cols-2 lg:grid-cols-3";
  if (count % 4 === 0) return "md:grid-cols-2 xl:grid-cols-4";
  if (count === 5) return "md:grid-cols-2 lg:grid-cols-5";
  if (count === 2) return "md:grid-cols-2";
  return "md:grid-cols-2 lg:grid-cols-3";
}

export function CardGrid({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className={`grid gap-4 ${gridCols(items.length)}`}>
      {items.map((item) => (
        <article key={item.title} className="reveal-up rounded-2xl border border-[#dbe3ee] bg-white p-6 shadow-[0_10px_24px_rgba(10,30,40,0.06)]">
          <h3 className="text-xl font-semibold text-[#1F2A30]">{item.title}</h3>
          <p className="mt-2 leading-7 text-[#64748B]">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export function ProcessSteps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className={`grid gap-4 ${gridCols(steps.length)}`}>
      {steps.map((step, index) => (
        <li key={step.title} className="reveal-up rounded-2xl border border-[#dae4ef] bg-white p-5">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#C2A57A]">STEP {index + 1}</p>
          <h3 className="mt-2 text-lg font-semibold text-[#1F2A30]">{step.title}</h3>
          <p className="mt-2 text-sm leading-6 text-[#64748B]">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function FaqSection({ faqs, title = "Frequently Asked Questions" }: { faqs: Faq[]; title?: string }) {
  if (!faqs.length) return null;
  return (
    <section className="bg-[#F5F7FA] py-16 md:py-20">
      <JsonLd data={faqSchema(faqs)} />
      <div className="grid w-full gap-8 px-6 md:px-10 lg:grid-cols-12 lg:gap-12 lg:px-14">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-semibold leading-tight text-[#1F2A30] md:text-4xl">{title}</h2>
          <p className="mt-4 text-[#64748B]">
            Have another question? Call{" "}
            <a href={SITE.phoneHref} className="font-semibold text-[#1F2A30] underline hover:text-[#C2A57A]">
              {SITE.phone}
            </a>
            .
          </p>
        </div>
        <div className="space-y-3 lg:col-span-8">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-[#dbe3ee] bg-white p-5 open:shadow-[0_10px_24px_rgba(10,30,40,0.06)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-[#1F2A30]">
                <h3>{faq.question}</h3>
                <span aria-hidden="true" className="text-2xl text-[#C2A57A] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 leading-8 text-[#475569]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PageCta({
  title = "Ready to discuss your project?",
  text = "Tell us about your project and get a clear scope review, budget guidance, and next steps from our Dallas team.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="py-20">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <div className="reveal-up rounded-3xl bg-gradient-to-br from-[#f7f3ed] to-[#eaf1f9] px-8 py-12 text-center">
          <h2 className="text-3xl text-[#1F2A30] md:text-4xl">{title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#64748B]">{text}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-[#C2A57A] px-6 py-3 text-sm font-semibold text-[#1F2A30] transition hover:bg-[#d5ba92]"
            >
              Get a Free Estimate
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center rounded-full border border-[#1F2A30] px-6 py-3 text-sm font-semibold text-[#1F2A30] transition hover:bg-[#1F2A30] hover:text-white"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
