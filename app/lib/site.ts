/**
 * Single source of truth for business facts (NAP, hours, links).
 * Keep these EXACTLY in sync with the Google Business Profile —
 * consistent name/address/phone/hours is a core local-SEO ranking signal.
 */
export const SITE = {
  name: "Correa General Contractors",
  shortName: "Correa",
  url: "https://correagcs.com",
  phone: "+1 (469) 854-0207",
  phoneHref: "tel:+14698540207",
  phoneE164: "+1-469-854-0207",
  email: "info@correagcs.com",
  address: {
    street: "16210-B Seagoville Rd",
    city: "Dallas",
    region: "TX",
    postalCode: "75253",
    country: "US",
  },
  addressLine: "16210-B Seagoville Rd, Dallas, TX 75253",
  geo: { latitude: 32.6747, longitude: -96.5781 },
  hours: {
    label: "Monday – Friday, 9:00 AM – 6:00 PM",
    short: "Mon – Fri: 9:00 AM – 6:00 PM",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  mapsUrl: "https://maps.app.goo.gl/mT7yTxvdR9j9nouZA",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.2018139111156!2d-96.57809642434148!3d32.67468037370647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864eb1a99f94a2e1%3A0x9f68fe725d258912!2sCorrea%20General%20Contractors!5e1!3m2!1sen!2sus!4v1787585921309!5m2!1sen!2sus",
  logo: "/black.png",
  defaultOgImage: "/projects/westhouse/4.jpeg",
  social: {
    facebook: "https://www.facebook.com/correageneralcontractors/",
    instagram: "https://www.instagram.com/correageneralcontractors/",
    linkedin: "https://www.linkedin.com/company/correa-general-contractors",
    youtube: "https://www.youtube.com/channel/UCxnOdSW1oTBPt2io6mPbwOQ",
  },
  stats: {
    years: "15+",
    projects: "200+",
    trades: "20+",
  },
  serviceAreas: [
    "Dallas",
    "Fort Worth",
    "Arlington",
    "Plano",
    "Frisco",
    "Irving",
    "Denton",
    "McKinney",
  ],
} as const;

export const absoluteUrl = (path = "/") =>
  path.startsWith("http") ? path : `${SITE.url}${path === "/" ? "" : path}`;
