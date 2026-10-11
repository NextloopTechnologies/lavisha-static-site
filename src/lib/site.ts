// Single source of truth for business details used across pages, metadata and JSON-LD.
// TODO: replace every value marked TODO with the real details before going live.

export const site = {
  name: "Larisha Health Care",
  legalName: "Larisha Health Care Pvt Ltd",
  shortDescription:
    "End-to-end cashless insurance claim processing for hospitals — pre-authorization, TPA queries, enhancements, discharge and settlement, handled by specialists and tracked in one portal.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://larishahealthcare.com").replace(/\/$/, ""),
  locale: "en_IN",
  // TODO: real contact details
  phone: "+91-00000-00000",
  phoneDisplay: "+91 00000 00000",
  email: "hello@example.com",
  address: {
    street: "TODO street address",
    locality: "TODO city",
    region: "TODO state",
    postalCode: "000000",
    country: "IN",
  },
  hours: "Mon–Sat, 9:00 AM – 8:00 PM IST",
  portalUrl: "https://app.larishahealthcare.com/login",
  tpaCount: "20+",
  claimsProcessed: "1,000+",
} as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/for-hospitals", label: "For hospitals" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
] as const;

export function absoluteUrl(path = "/") {
  return `${site.url}${path === "/" ? "" : path}`;
}
