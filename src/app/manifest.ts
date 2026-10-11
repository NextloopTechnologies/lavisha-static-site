import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.legalName,
    short_name: "Larisha",
    description: site.shortDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#fbf8f1",
    theme_color: "#fbf8f1",
    icons: [{ src: "/icon.png", sizes: "256x256", type: "image/png" }],
  };
}
