import Image from "next/image";
import Link from "next/link";
import type { Person } from "../lib/people";

function Initials({ name, size }: { name: string; size: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
  return (
    <div className={`flex ${size} shrink-0 items-center justify-center rounded-full bg-[#1F2A30] text-xl font-semibold text-[#C2A57A]`} aria-hidden="true">
      {initials}
    </div>
  );
}

export function PersonAvatar({ person, size = "h-16 w-16", px = 64 }: { person: Person; size?: string; px?: number }) {
  if (!person.photo) return <Initials name={person.name} size={size} />;
  return (
    <Image src={person.photo} alt={`${person.name}, ${person.jobTitle}`} width={px} height={px} className={`${size} shrink-0 rounded-full object-cover`} />
  );
}

/** "Meet Our Founder" block for /about-us. Renders nothing until real founder details exist. */
export function FounderSection({ person }: { person: Person }) {
  if (!person.name) return null;
  return (
    <section id="founder" className="bg-[#F5F7FA] py-14 md:py-16">
      <div className="grid w-full items-center gap-10 px-6 md:px-10 lg:grid-cols-12 lg:gap-14 lg:px-14">
        <div className="lg:col-span-4">
          {person.photo ? (
            <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl shadow-[0_18px_40px_rgba(10,30,40,0.15)]">
              <Image src={person.photo} alt={`${person.name}, ${person.jobTitle} of Correa General Contractors`} fill className="object-cover" sizes="(max-width: 1024px) 90vw, 33vw" />
            </div>
          ) : (
            <Initials name={person.name} size="mx-auto h-40 w-40 text-4xl" />
          )}
        </div>
        <div className="lg:col-span-8">
          <p className="text-sm font-semibold tracking-[0.28em] text-[#9a7f55]">MEET OUR FOUNDER</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1F2A30] md:text-4xl">{person.name}</h2>
          <p className="mt-1 text-lg text-[#64748B]">{person.jobTitle}, Correa General Contractors</p>
          <div className="mt-6 space-y-4 text-base leading-8 text-[#475569] md:text-lg">
            {person.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {person.expertise.length ? (
            <ul className="mt-6 flex flex-wrap gap-2">
              {person.expertise.map((item) => (
                <li key={item} className="rounded-full border border-[#dbe3ee] bg-white px-3 py-1 text-sm text-[#475569]">
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
          {person.linkedin ? (
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex text-sm font-semibold text-[#1F2A30] hover:text-[#C2A57A]">
              Connect on LinkedIn →
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/** Author box shown at the end of every article (E-E-A-T). */
export function AuthorBox({ person, href }: { person: Person; href: string }) {
  return (
    <aside aria-label="About the author" className="mt-12 flex flex-col gap-5 rounded-2xl border border-[#dbe3ee] bg-[#f8fafc] p-6 sm:flex-row">
      <PersonAvatar person={person} size="h-20 w-20" px={80} />
      <div>
        <p className="text-xs font-semibold tracking-[0.22em] text-[#9a7f55]">ABOUT THE AUTHOR</p>
        <p className="mt-1 text-xl font-semibold text-[#1F2A30]">
          <Link href={href} className="hover:text-[#C2A57A]">{person.name}</Link>
        </p>
        <p className="text-sm text-[#64748B]">{person.jobTitle}</p>
        <p className="mt-3 leading-7 text-[#475569]">{person.shortBio}</p>
        <Link href={href} className="mt-3 inline-flex text-sm font-semibold text-[#1F2A30] hover:text-[#C2A57A]">
          More articles by {person.name.split(" ")[0]} →
        </Link>
      </div>
    </aside>
  );
}
