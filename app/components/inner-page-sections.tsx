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
    <section className="bg-[#1F2A30] py-20 text-white md:py-28">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <p className="text-sm font-semibold tracking-[0.3em] text-[#C2A57A]">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl leading-tight md:text-6xl">{title}</h1>
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
        <h2 className="text-3xl text-[#1F2A30] md:text-5xl">{title}</h2>
        <div className="mt-6 max-w-4xl space-y-4 text-base leading-8 text-[#6B7280] md:text-lg">
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
        <li key={item} className="rounded-xl border border-gray-200 px-4 py-3">
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
        <div className="rounded-3xl bg-[#F5F5F5] px-8 py-12 text-center">
          <h3 className="text-3xl text-[#1F2A30] md:text-4xl">
            Ready to discuss your project in Dallas?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-[#6B7280]">
            Get a detailed estimate and timeline from our team.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#C2A57A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ad9169]"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
