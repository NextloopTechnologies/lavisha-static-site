import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

/** Per-page metadata with canonical URL and matching Open Graph / Twitter tags. */
export function pageMetadata({ title, description, path, keywords }: PageMeta): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${title} | ${site.name}`,
      description,
      siteName: site.name,
      locale: site.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: absoluteUrl("/images/logo-full.png"),
    image: absoluteUrl("/opengraph-image"),
    description: site.shortDescription,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: { "@type": "Country", name: "India" },
    knowsAbout: [
      "Cashless health insurance claims",
      "Pre-authorization",
      "TPA query management",
      "Claim enhancement",
      "Discharge approval",
      "Claim settlement and reconciliation",
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
