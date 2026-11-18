/**
 * People shown on the site (E-E-A-T: real, named people behind the content).
 * Only put TRUE, verifiable facts here.
 */

export type Person = {
  slug: string;
  name: string;
  jobTitle: string;
  shortBio: string;
  bio: string[];
  /** Path under /public, e.g. "/images/team/founder.jpg". Leave "" until a real photo exists. */
  photo: string;
  linkedin?: string;
  expertise: string[];
};

export const AUTHOR: Person = {
  slug: "deepak-gupta",
  name: "Deepak Gupta",
  jobTitle: "Writer, Correa General Contractors",
  shortBio:
    "Deepak Gupta writes Correa General Contractors' construction guides for property owners in Dallas–Fort Worth, working with the company's project team on budgets, permits, and schedules.",
  bio: [
    "Deepak Gupta writes the construction guides published on the Correa General Contractors blog. His articles turn the questions Dallas–Fort Worth owners ask our team every day into plain-English answers: how to budget a build, what the permit process looks like, how long projects really take, and how to choose a contractor.",
    "Every guide is written from the experience of Correa's field and project management team, which has completed 200+ commercial and residential projects over 15+ years. Where rules, fees, or timelines vary by city, the articles say so and point readers to the official source.",
  ],
  photo: "",
  expertise: [
    "Construction budgeting",
    "Dallas building permits",
    "Commercial tenant improvements",
    "Design-build delivery",
    "Contractor selection",
  ],
};

/**
 * FOUNDER: fill in real details to show the "Meet Our Founder" section on /about-us.
 * The section stays hidden while `name` is empty.
 */
export const FOUNDER: Person = {
  slug: "humberto-correa",
  name: "Humberto Correa",
  jobTitle: "Founder & President",
  shortBio:
    "Humberto Correa is the founder and President of Correa General Contractors and President & CEO of Correa Masonry & Stucco LLC.",
  bio: [
    "Humberto Correa founded Correa General Contractors to give Dallas–Fort Worth property owners one accountable partner for commercial and residential construction, from budgeting and permits through final handover.",
    "Humberto also serves as President & CEO of Correa Masonry & Stucco LLC, a commercial masonry and stucco contractor working on projects across Texas. That hands-on masonry background shows in the company's multifamily work, including the brick, cast stone, and architectural stone exteriors at Westhouse Apartments in Keller and The Cove at Odessa.",
  ],
  // Add a real headshot at public/images/team/humberto-correa.jpg, then set: "/images/team/humberto-correa.jpg"
  photo: "",
  linkedin: "https://www.linkedin.com/in/humberto-correa/",
  expertise: [
    "General contracting",
    "Commercial masonry & stucco",
    "Multifamily construction",
    "Commercial construction",
  ],
};
