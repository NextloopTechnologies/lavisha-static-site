import Image from "next/image";
import { CtaBand, PageHeader, SectionHeading } from "@/components/Sections";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Us — Hospital Claims Specialists",
  description:
    "Larisha Health Care Pvt Ltd helps Indian hospitals process cashless insurance claims faster, more accurately and with full transparency.",
  path: "/about",
  keywords: ["Larisha Health Care", "Larisha Health Care Pvt Ltd", "hospital claims processing company India"],
});

const values = [
  { title: "Ownership", text: "Every claim has a named owner on our team until the money is in your account." },
  { title: "Transparency", text: "You see what we see — every document, every TPA reply, every status change." },
  { title: "Accuracy", text: "We’d rather file once, correctly, than file fast and fight queries for a week." },
  { title: "Care", text: "Behind each file is a patient and a family. We never forget that." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumb="About"
        path="/about"
        eyebrow="About us"
        title="We exist so hospitals can focus on patients, not paperwork"
        intro={`${site.legalName} is a healthcare services company that specialises in one thing: getting cashless insurance claims approved and settled for the hospitals we work with.`}
      />

      <section className="container-x grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.3fr_1fr]">
        <div className="prose-body max-w-2xl">
          <h2 className="mb-5 text-3xl font-semibold leading-tight">Our story</h2>
          <p>
            Cashless treatment has made healthcare more accessible for millions of insured families in India. But for
            hospitals, it created a new full-time job: preparing pre-authorization files, answering TPA queries,
            chasing enhancements and following every claim through to settlement — often across a dozen different
            TPAs, each with its own forms and expectations.
          </p>
          <p>
            We saw hospital desks stretched thin, approvals delayed over a missing report, and approved amounts quietly
            reduced at settlement with nobody checking. Larisha was founded to fix that — by combining experienced claim
            executives with a purpose-built portal that keeps every claim, document and conversation in one place.
          </p>
          <p>
            Today we act as the insurance desk for hospitals and nursing homes. We have processed {site.claimsProcessed}{" "}
            claims with {site.tpaCount} TPAs and insurers, so their teams can focus on what they do best: caring for patients.
          </p>
        </div>
        <div className="flex justify-center rounded-3xl border border-line bg-white p-10">
          <Image
            src="/images/logo-wordmark.png"
            alt={`${site.legalName} logo`}
            width={490}
            height={170}
            sizes="(min-width: 1024px) 400px, 90vw"
            className="h-auto w-full max-w-sm"
          />
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="container-x py-16 sm:py-20">
          <SectionHeading eyebrow="What we stand for" title="The values behind every claim we touch" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-line bg-paper p-6">
                <div className="gold-rule mb-5 h-1 w-10 rounded-full" />
                <h3 className="text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow">Our role</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight">What we are — and what we’re not</h2>
          </div>
          <div className="prose-body">
            <p>
              Larisha is an independent claims-processing partner that works on behalf of hospitals. We are not an
              insurance company or a Third Party Administrator (TPA), and we don’t decide whether a claim is approved.
            </p>
            <p>
              What we do is make sure every claim your hospital submits is complete, accurate and followed up on time —
              which is what gives it the best chance of being approved and paid in full.
            </p>
          </div>
        </div>
      </section>

      <CtaBand title="Let’s talk about your claims desk" />
    </>
  );
}
