import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-gradient-to-r from-[#11181d] via-[#1F2A30] to-[#24343d] py-24 text-white md:py-32">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <p className="text-sm font-semibold tracking-[0.3em] text-[#C2A57A]">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg text-white/80">{description}</p>
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
    <section className="py-16 md:py-20">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <h2 className="text-3xl font-semibold text-[#1F2A30] md:text-5xl">{title}</h2>
        <div className="mt-6 max-w-4xl space-y-4 rounded-2xl border border-[#dbe3ee] bg-white p-6 text-base leading-8 text-[#6B7280] shadow-[0_10px_24px_rgba(10,30,40,0.07)] md:text-lg">
          {children}
        </div>
      </div>
    </section>
  );
}

export function BulletList({ items }: { items: string[] }) {
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

export function PageCta() {
  return (
    <section className="pb-20">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <div className="reveal-up rounded-3xl bg-gradient-to-br from-[#f7f3ed] to-[#eaf1f9] px-8 py-12 text-center">
          <h3 className="text-3xl text-[#1F2A30] md:text-4xl">
            Ready to discuss your project?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-[#6B7280]">
            Get in touch with our team for scope review, budget clarity, and next steps.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-[#C2A57A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ad9169]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
