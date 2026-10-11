import Link from "next/link";
import type { ReactNode } from "react";
import { breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

/** Inner-page hero with visible breadcrumbs plus matching BreadcrumbList JSON-LD. */
export function PageHeader({
  eyebrow,
  title,
  intro,
  crumb,
  path,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  crumb: string;
  path: string;
}) {
  return (
    <section className="border-b border-line bg-paper-deep/60">
      <JsonLd data={breadcrumbJsonLd([{ name: crumb, path }])} />
      <div className="container-x py-14 sm:py-20">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-ink">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink">
              {crumb}
            </li>
          </ol>
        </nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.1] sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{intro}</p>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, intro, center = false }: { eyebrow: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-ink-soft">{intro}</p>}
    </div>
  );
}

export function CtaBand({
  title = "Stop chasing TPAs. Start getting paid on time.",
  text = "Tell us about your hospital and current claim volume. We’ll walk you through the process and the portal in a 30-minute call.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-x py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-12 text-paper sm:px-12 sm:py-16">
        <div className="gold-rule absolute inset-x-0 top-0 h-1" aria-hidden="true" />
        <div className="grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-xl text-paper/75">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link href="/contact" className="btn-gold">
              Book a free demo
            </Link>
            <Link href="/how-it-works" className="btn border border-paper/25 text-paper hover:border-paper">
              See the process
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
