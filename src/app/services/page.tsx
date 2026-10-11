import { Icon } from "@/components/Icon";
import { CtaBand, PageHeader, SectionHeading } from "@/components/Sections";
import { services } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Cashless Claim Services for Hospitals",
  description:
    "Pre-authorization filing, TPA query resolution, enhancements, discharge approvals and settlement reconciliation for hospitals — plus a live claims portal.",
  path: "/services",
  keywords: [
    "pre-authorization services",
    "TPA query resolution",
    "claim enhancement request",
    "discharge approval TPA",
    "insurance claim settlement reconciliation",
    "hospital billing insurance desk",
  ],
});

const models = [
  {
    title: "Full desk outsourcing",
    text: "We run your entire cashless desk — every admission, every TPA, every stage to settlement. Ideal for hospitals without a dedicated insurance team.",
  },
  {
    title: "Stage-wise support",
    text: "Keep your in-house desk and hand us the stages that hurt most — usually query handling and settlement follow-up.",
  },
  {
    title: "Portal-only",
    text: "Already have claim executives? Give them the Larisha portal to organise documents, conversations and reporting in one place.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        crumb="Services"
        path="/services"
        eyebrow="Services"
        title="Cashless claim services that cover the whole lifecycle"
        intro={`From the moment a patient is admitted to the day the settlement lands in your account, Larisha handles the paperwork, the TPA follow-ups and the reconciliation — across ${site.tpaCount} TPAs and insurers.`}
      />

      <section className="container-x py-16 sm:py-20">
        <div className="space-y-6">
          {services.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="card grid scroll-mt-24 gap-6 md:grid-cols-[auto_1.3fr_1fr] md:items-start md:gap-10"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold-deep">
                <Icon name={s.icon} className="h-7 w-7" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted">Service {String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-1 text-2xl font-semibold sm:text-3xl">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-ink-soft">{s.summary}</p>
              </div>
              <ul className="space-y-3 rounded-xl bg-paper p-5">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="container-x py-16 sm:py-20">
          <SectionHeading
            eyebrow="Engagement models"
            title="Work with us the way your hospital works"
            intro="Every hospital’s desk is different. Choose how much you want to hand over — you can change it later."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {models.map((m, i) => (
              <div key={m.title} className={`rounded-2xl p-7 ${i === 0 ? "bg-ink text-paper" : "border border-line bg-paper"}`}>
                <h3 className="text-xl font-semibold">{m.title}</h3>
                <p className={`mt-3 leading-relaxed ${i === 0 ? "text-paper/75" : "text-ink-soft"}`}>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Not sure which model fits?" text="Share your monthly cashless admissions and current pain points — we’ll recommend a setup in one call." />
    </>
  );
}
