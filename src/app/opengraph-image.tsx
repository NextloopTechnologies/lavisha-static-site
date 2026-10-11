import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Larisha Health Care — cashless insurance claim processing for hospitals";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Statically generated at build time; used as the default share image for every page.
export default async function OgImage() {
  const logo = await readFile(join(process.cwd(), "public/images/logo-mark.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#1c1a16", padding: 72, color: "#fbf8f1" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ display: "flex", background: "#fff", borderRadius: 20, padding: 12 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} width={84} height={69} alt="" />
          </div>
          <div style={{ fontSize: 34, letterSpacing: 2, color: "#f2c94c" }}>LARISHA HEALTH CARE</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 700, maxWidth: 950 }}>Cashless insurance claims, handled end to end.</div>
          <div style={{ marginTop: 28, fontSize: 30, color: "rgba(251,248,241,0.7)" }}>Pre-auth · TPA queries · Enhancements · Discharge · Settlement</div>
        </div>
        <div style={{ height: 8, width: "100%", background: "linear-gradient(90deg, #c8961a, #f2c94c)", borderRadius: 4 }} />
      </div>
    ),
    size,
  );
}
