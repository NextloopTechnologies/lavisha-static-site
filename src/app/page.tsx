import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { CtaBand, SectionHeading } from "@/components/Sections";
import { claimStages, services } from "@/lib/content";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Hospital Cashless Claim Processing | Larisha Health Care" },
  description:
    "Outsource your hospital’s TPA desk. Larisha handles cashless pre-auth, TPA queries, enhancements, discharge and settlement — tracked live in one portal.",
  keywords: [
    "cashless claim processing",
    "hospital TPA desk outsourcing",
    "pre-authorization for hospitals",
    "health insurance claim management India",
    "mediclaim processing services",
    "TPA query management",
  ],
  alternates: { canonical: absoluteUrl("/") },
};

const painPoints = [
  { icon: "clock" as const, title: "Pre-auths stuck for hours", text: "Incomplete files mean the TPA bounces them back while the patient waits in admission." },
  { icon: "message" as const, title: "Queries lost in email and WhatsApp", text: "Nobody owns the reply, the deadline passes, and the claim is denied or delayed." },
  { icon: "rupee" as const, title: "Approved, but never fully paid", text: "Short-payments and deductions go unchallenged because no one reconciles settlements." },
];

const why = [
  { icon: "users" as const, title: "A dedicated claims team", text: "Trained claim executives who know what each TPA expects — not a generic BPO queue." },
  { icon: "file" as const, title: "Right documents, first time", text: "Structured checklists for ICPs, investigations, estimates and discharge papers cut avoidable queries." },
  { icon: "bell" as const, title: "You always know the status", text: "Live portal and instant notifications whenever a claim moves, a query lands or money is approved." },
  { icon: "lock" as const, title: "Built for patient privacy", text: "Role-based access for your staff, private document storage and a full audit trail of every action." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — text-first so the LCP element is server-rendered HTML, not an image */}
      <section className="relative overflow-hidden">
        <div className="container-x grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="eyebrow">Cashless claim processing · India</p>
            <h1 className="mt-4 text-[2.6rem] font-semibold leading-[1.05] sm:text-6xl">
              Your hospital’s insurance desk, <span className="text-gold-deep italic">handled end to end.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Larisha Health Care manages cashless health insurance claims for hospitals and nursing homes — from
              pre-authorization and TPA queries to enhancements, discharge approval and final settlement. You treat
              patients. We make sure you get paid.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Book a free demo <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/services" className="btn-ghost">
                Explore services
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-soft">
              {[`${site.claimsProcessed} claims processed`, `${site.tpaCount} TPAs & insurers`, "Same-day pre-auth filing", "Live claim tracking portal"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-sage" /> {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Static claim-tracker illustration (pure HTML/CSS) */}
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-gold-light/40 via-paper-deep to-transparent" />
            <div className="card shadow-[0_30px_60px_-30px_rgba(28,26,22,0.35)]">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">Claim · IPD-2481</p>
                  <p className="mt-1 font-display text-lg font-semibold">Ward 3 · Bed 12</p>
                </div>
                <span className="rounded-full bg-sage/10 px-3 py-1 text-xs font-bold text-sage">Approved</span>
              </div>
              <ol className="mt-5 space-y-4">
                {claimStages.slice(0, 5).map((s, i) => (
                  <li key={s.label} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        i < 4 ? "bg-gold text-ink" : "border-2 border-dashed border-line text-muted"
                      }`}
                    >
                      {i < 4 ? <Icon name="check" className="h-3.5 w-3.5" /> : i + 1}
                    </span>
                    <div className="flex-1">
                      <p className={`text-sm font-semibold ${i < 4 ? "" : "text-muted"}`}>{s.label}</p>
                      <div className="mt-2 h-1.5 rounded-full bg-paper-deep">
                        <div className="gold-rule h-1.5 rounded-full" style={{ width: i < 4 ? "100%" : "35%" }} />
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-6 rounded-xl bg-paper p-4 text-sm">
                <p className="font-semibold">TPA reply · 11:42 AM</p>
                <p className="mt-1 text-ink-soft">Enhancement approved. Revised authorised amount updated.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="border-y border-line bg-white">
        <div className="container-x py-16 sm:py-20">
          <SectionHeading
            eyebrow="The problem"
            title="Cashless claims shouldn’t cost you revenue, beds and goodwill"
            intro="Most hospitals run their TPA desk with one or two overworked staff juggling dozens of portals, inboxes and phone lines. Things slip."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {painPoints.map((p) => (
              <div key={p.title} className="rounded-2xl border border-line bg-paper p-6">
                <Icon name={p.icon} className="h-6 w-6 text-rust" />
                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-x py-16 sm:py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="Every step of the cashless claim, under one roof"
            intro="Pick the full lifecycle or just the stages your team struggles with."
          />
          <Link href="/services" className="btn-ghost shrink-0">
            All services
          </Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/services#${s.slug}`} className="card group transition-shadow hover:shadow-lg">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold-deep">
                <Icon name={s.icon} />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 line-clamp-3 leading-relaxed text-ink-soft">{s.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep">
                Learn more <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Process preview */}
      <section className="bg-ink text-paper">
        <div className="container-x py-16 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-light">How it works</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">From admission to settlement in six tracked stages</h2>
          </div>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-paper/10 sm:grid-cols-2 lg:grid-cols-3">
            {claimStages.map((s, i) => (
              <li key={s.label} className="bg-ink p-6 sm:p-8">
                <span className="font-display text-4xl text-gold-light">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-semibold">{s.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">{s.detail}</p>
              </li>
            ))}
          </ol>
          <Link href="/how-it-works" className="btn-gold mt-10">
            See the full process
          </Link>
        </div>
      </section>

      {/* Why Larisha */}
      <section className="container-x py-16 sm:py-24">
        <SectionHeading center eyebrow="Why Larisha" title="People who know claims, backed by software built for them" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {why.map((w) => (
            <div key={w.title} className="flex gap-5 rounded-2xl border border-line bg-white p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink text-gold-light">
                <Icon name={w.icon} />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{w.title}</h3>
                <p className="mt-1.5 leading-relaxed text-ink-soft">{w.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
