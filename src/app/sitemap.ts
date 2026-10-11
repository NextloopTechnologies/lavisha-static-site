import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/how-it-works", priority: 0.8 },
  { path: "/for-hospitals", priority: 0.8 },
  { path: "/about", priority: 0.6 },
  { path: "/faq", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({ url: absoluteUrl(r.path), lastModified, changeFrequency: "monthly", priority: r.priority }));
}
