import { JsonLd } from "@/components/JsonLd";
import { CtaBand, PageHeader } from "@/components/Sections";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Cashless Claim Processing FAQs",
  description:
    "Answers on outsourcing hospital cashless claims: pre-authorization, TPA queries, enhancements, settlement, pricing, onboarding and data security.",
  path: "/faq",
  keywords: ["cashless claim FAQ", "what is pre-authorization", "TPA query meaning", "claim enhancement meaning", "hospital claim outsourcing cost"],
});

const groups: { heading: string; items: { q: string; a: string }[] }[] = [
  {
    heading: "About the service",
    items: [
      {
        q: "What does Larisha Health Care do?",
        a: "We process cashless health insurance claims on behalf of hospitals and nursing homes — preparing and filing pre-authorization requests, replying to TPA queries, filing enhancements, submitting discharge papers for final approval, and following up until the claim is settled and reconciled.",
      },
      {
        q: "Are you an insurance company or a TPA?",
        a: "No. Larisha is an independent service provider that works for the hospital. Insurers and TPAs decide on claims; our job is to make sure your submissions are complete, accurate and followed up on time.",
      },
      {
        q: "Which TPAs and insurers do you work with?",
        a: `Our team handles claims with ${site.tpaCount} TPAs and the major health insurers operating in India. If your hospital is empanelled with a TPA, we can process claims with it.`,
      },
      {
        q: "Can we outsource only part of the process?",
        a: "Yes. Many hospitals keep their in-house desk and hand us query handling, enhancements or settlement follow-up. You can also use only the claims portal with your own staff.",
      },
    ],
  },
  {
    heading: "Claims, explained",
    items: [
      {
        q: "What is pre-authorization in a cashless claim?",
        a: "Pre-authorization is the hospital’s request to the insurer or TPA to approve cashless treatment for an insured patient. It includes the initial case papers, clinical notes, investigation reports and a cost estimate. Treatment proceeds on a cashless basis once it is approved.",
      },
      {
        q: "What is a TPA query?",
        a: "A query is a request from the TPA for more information or documents before it approves a claim — for example a missing report or clarification on the diagnosis. Slow or incomplete replies are one of the most common reasons approvals are delayed.",
      },
      {
        q: "What is an enhancement?",
        a: "If treatment costs grow beyond the initially approved amount — because of a longer stay or a change in treatment — the hospital files an enhancement request with a revised estimate and supporting notes so the authorised amount is increased.",
      },
      {
        q: "Why track settlement if the claim is already approved?",
        a: "Final payment can differ from the approved amount because of deductions. We match each settlement letter against the bill and flag short-payments so they can be queried and recovered.",
      },
    ],
  },
  {
    heading: "Getting started & security",
    items: [
      {
        q: "How long does onboarding take?",
        a: "Usually a few days. After a discovery call we set up portal access for your team, agree document checklists and start taking new admissions. There is no software to install.",
      },
      {
        q: "How is pricing structured?",
        a: "Pricing depends on your claim volume and which stages you hand over. Book a demo and we’ll share a proposal tailored to your hospital.",
      },
      {
        q: "How do you keep patient data secure?",
        a: "Documents are stored privately and served only to authorised users through time-limited links. Access is role-based, so each user sees only what their role requires, and every action on a claim is recorded in an audit trail.",
      },
      {
        q: "Will we still be able to see our claims?",
        a: "Always. Your desk staff and managers get their own portal logins with live status, all documents, the full conversation history for every claim and exportable Excel reports.",
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: groups.flatMap((g) =>
    g.items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
  ),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <PageHeader
        crumb="FAQ"
        path="/faq"
        eyebrow="FAQ"
        title="Questions hospitals ask us"
        intro="Everything you need to know about cashless claims and working with Larisha. Can’t find your answer? Get in touch."
      />

      <section className="container-x grid gap-12 py-16 sm:py-20 lg:grid-cols-[14rem_1fr]">
        <nav aria-label="FAQ sections" className="hidden lg:block">
          <ul className="sticky top-24 space-y-2 text-sm">
            {groups.map((g, i) => (
              <li key={g.heading}>
                <a href={`#faq-${i}`} className="text-ink-soft hover:text-ink">
                  {g.heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-12">
          {groups.map((g, gi) => (
            <div key={g.heading} id={`faq-${gi}`} className="scroll-mt-24">
              <h2 className="mb-5 text-2xl font-semibold">{g.heading}</h2>
              <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
                {g.items.map((item, ii) => (
                  <details key={item.q} className="group" open={gi === 0 && ii === 0}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-semibold [&::-webkit-details-marker]:hidden">
                      <h3 className="text-base">{item.q}</h3>
                      <span
                        aria-hidden="true"
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-paper text-gold-deep transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="px-6 pb-6 leading-relaxed text-ink-soft">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Still have questions?" text="Talk to our team — we’ll answer anything about your hospital’s claims setup." />
    </>
  );
}
