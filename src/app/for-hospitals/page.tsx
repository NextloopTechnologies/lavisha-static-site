import Link from "next/link";
import { Icon, type IconName } from "@/components/Icon";
import { CtaBand, PageHeader, SectionHeading } from "@/components/Sections";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Claims Management for Hospitals",
  description:
    "Helping hospitals, nursing homes and day-care centres get faster cashless approvals, fewer TPA queries and fuller settlements — with a live claims portal.",
  path: "/for-hospitals",
  keywords: [
    "claims management for hospitals",
    "nursing home insurance desk",
    "hospital revenue cycle management India",
    "TPA desk for hospitals",
    "cashless hospital claim software",
  ],
});

const audiences = [
  { title: "Multi-specialty hospitals", text: "High admission volumes across many TPAs. We add capacity without adding headcount, and give management one view of every open claim." },
  { title: "Nursing homes & small hospitals", text: "No full-time insurance staff? We become your cashless desk, so you can accept insured patients with confidence." },
  { title: "Day-care & surgical centres", text: "Short stays need fast pre-auths. We file the moment the case is scheduled so approvals are ready before the patient arrives." },
];

const outcomes: { icon: IconName; title: string; text: string }[] = [
  { icon: "clock", title: "Faster approvals", text: "Complete files and quick query replies mean fewer back-and-forths with the TPA." },
  { icon: "door", title: "Quicker discharges", text: "Final approval pushed as soon as papers are ready — beds free up sooner." },
  { icon: "rupee", title: "Better recovery", text: "Deductions and short-payments are tracked and challenged, not written off." },
  { icon: "users", title: "Happier patients", text: "Families get clear updates and fewer surprises at the billing counter." },
];

const portal: { icon: IconName; title: string; text: string }[] = [
  { icon: "chart", title: "Live dashboard", text: "Every claim by status — pending, sent to TPA, queried, approved, enhancement, discharged, settled." },
  { icon: "file", title: "Organised documents", text: "ICPs, investigations, estimates, discharge and settlement papers stored against each patient." },
  { icon: "message", title: "Claim conversations", text: "Notes, queries and TPA replies in one thread per claim — no more searching inboxes." },
  { icon: "bell", title: "Instant notifications", text: "Know the moment a query is raised or an approval comes through." },
  { icon: "users", title: "Role-based access", text: "Separate views for hospital desk staff and hospital managers overseeing several units." },
  { icon: "lock", title: "Audit trail", text: "Every status change and upload is logged with who did it and when." },
];

export default function ForHospitalsPage() {
  return (
    <>
      <PageHeader
        crumb="For hospitals"
        path="/for-hospitals"
        eyebrow="For hospitals"
        title="Built for the people who run the insurance desk — and the people who answer for it"
        intro={`Whether you handle five cashless admissions a week or fifty a day, Larisha gives your desk expert backup across ${site.tpaCount} TPAs and gives management real visibility into money that’s owed.`}
      />

      <section className="container-x py-16 sm:py-20">
        <SectionHeading eyebrow="Who we serve" title="Right-sized for every kind of facility" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {audiences.map((a) => (
            <div key={a.title} className="card">
              <h3 className="text-xl font-semibold">{a.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="container-x py-16 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-light">What changes</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">The results hospitals care about</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((o) => (
              <div key={o.title}>
                <Icon name={o.icon} className="h-7 w-7 text-gold-light" />
                <h3 className="mt-4 text-lg font-semibold">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="The Larisha portal"
            title="Every claim, document and TPA reply in one secure place"
            intro="Included with every engagement. Works on desktop and mobile — nothing to install."
          />
          <a href={site.portalUrl} className="btn-ghost shrink-0">
            Existing client? Log in
          </a>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portal.map((p) => (
            <div key={p.title} className="flex gap-4 rounded-2xl border border-line bg-white p-6">
              <Icon name={p.icon} className="mt-0.5 h-6 w-6 shrink-0 text-gold-deep" />
              <div>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">
          Questions about data handling? See our <Link href="/faq" className="font-semibold text-gold-deep underline underline-offset-4">FAQ</Link>.
        </p>
      </section>

      <CtaBand />
    </>
  );
}
