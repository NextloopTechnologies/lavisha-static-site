import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, PageHeader, SectionHeading } from "@/components/Sections";
import { claimStages } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "How Cashless Claim Processing Works",
  description:
    "How Larisha processes a cashless hospital claim in six tracked stages — documents, pre-auth, TPA queries, enhancements, discharge and settlement.",
  path: "/how-it-works",
  keywords: [
    "cashless claim process",
    "how pre-authorization works",
    "TPA claim process steps",
    "hospital claim settlement process",
  ],
});

const stageDocs = [
  ["ICP / initial case papers", "Clinic papers", "Policy & ID copies"],
  ["Pre-auth form", "Past & current investigations", "Treatment estimate"],
  ["Query reply letter", "Additional reports requested by the TPA"],
  ["Enhancement estimate", "Updated clinical notes"],
  ["Discharge summary", "Final bill", "Other discharge papers"],
  ["Settlement letter", "Reconciliation & deduction notes"],
];

const onboarding = [
  { title: "Discovery call", text: "We learn your admission volume, empanelled TPAs and where claims get stuck today." },
  { title: "Portal setup", text: "We create accounts for your hospital desk and managers, with the right access for each role." },
  { title: "Process handover", text: "We agree document checklists and turnaround times, then start taking new admissions." },
  { title: "Weekly review", text: "Regular reports on approvals, pending queries and unsettled amounts — and what we’re doing about them." },
];

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How a cashless hospital insurance claim is processed",
  step: claimStages.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.label, text: s.detail })),
};

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd data={howToJsonLd} />
      <PageHeader
        crumb="How it works"
        path="/how-it-works"
        eyebrow="The process"
        title="One claim, six stages, zero guesswork"
        intro="Every cashless claim moves through the same lifecycle. Here’s exactly what happens at each stage, who does what, and what you see in the portal."
      />

      <section className="container-x py-16 sm:py-20">
        <ol className="relative space-y-6 before:absolute before:bottom-6 before:left-[1.4rem] before:top-6 before:w-px before:bg-line sm:before:left-[1.65rem]">
          {claimStages.map((s, i) => (
            <li key={s.label} className="relative grid gap-4 pl-16 sm:pl-20">
              <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full bg-gold font-display text-lg font-semibold text-ink ring-8 ring-paper sm:h-[3.3rem] sm:w-[3.3rem]">
                {i + 1}
              </span>
              <div className="card">
                <h2 className="text-2xl font-semibold">{s.label}</h2>
                <p className="mt-2 leading-relaxed text-ink-soft">{s.detail}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {stageDocs[i].map((d) => (
                    <span key={d} className="inline-flex items-center gap-1.5 rounded-full bg-paper px-3 py-1.5 text-xs font-semibold text-ink-soft">
                      <Icon name="file" className="h-3.5 w-3.5 text-gold-deep" /> {d}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-line bg-white">
        <div className="container-x py-16 sm:py-20">
          <SectionHeading eyebrow="Getting started" title="Live in days, not months" intro="No software to install. No disruption to your billing team." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {onboarding.map((o, i) => (
              <div key={o.title} className="rounded-2xl border border-line bg-paper p-6">
                <p className="font-display text-3xl text-gold-deep">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-lg font-semibold">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
