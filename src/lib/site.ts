// Single source of truth for business details used across pages, metadata and JSON-LD.

export const site = {
  name: "Larisha Health Care",
  legalName: "Larisha Health Care Pvt Ltd",
  shortDescription:
    "End-to-end cashless insurance claim processing for hospitals — pre-authorization, TPA queries, enhancements, discharge and settlement, handled by specialists and tracked in one portal.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://larishahealthcare.com").replace(/\/$/, ""),
  locale: "en_IN",
  phone: "+91-9021553809",
  phoneDisplay: "+91 90215 53809",
  email: "support@laraisha.com",
  address: {
    street: "Flat No. B-1206, Survey No. 282, Gini Bellina, Porwal Road, Lohogaon",
    locality: "Pune",
    region: "Maharashtra",
    postalCode: "411047",
    country: "IN",
  },
  hours: "Mon–Sat, 9 AM – 8 PM IST",
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
