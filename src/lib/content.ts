import type { IconName } from "@/components/Icon";

export const services: {
  slug: string;
  icon: IconName;
  title: string;
  summary: string;
  points: string[];
}[] = [
  {
    slug: "pre-authorization",
    icon: "shield",
    title: "Pre-authorization filing",
    summary:
      "We prepare and submit cashless pre-auth requests the same day a patient is admitted — with the ICP, clinical notes, investigations and estimate a TPA needs to approve on the first pass.",
    points: [
      "Policy and eligibility check before filing",
      "Complete document set: ICP, clinic papers, past & current investigations, diagnostics",
      "Planned and emergency admissions",
    ],
  },
  {
    slug: "query-resolution",
    icon: "message",
    title: "TPA query resolution",
    summary:
      "When a TPA raises a query, our team drafts the reply, collects missing papers from your ward or doctor, and responds within hours — not days — so approvals don’t stall.",
    points: [
      "Every query logged with its full reply thread",
      "Doctor and ward follow-ups handled by us",
      "Escalation when a TPA goes silent",
    ],
  },
  {
    slug: "enhancements",
    icon: "trend",
    title: "Enhancement requests",
    summary:
      "Length of stay or treatment plan changed? We file enhancement estimates with supporting notes so the approved amount keeps pace with the actual bill.",
    points: [
      "Revised estimates with clinical justification",
      "Multiple enhancements per admission tracked separately",
      "Reduces last-minute patient out-of-pocket surprises",
    ],
  },
  {
    slug: "discharge",
    icon: "door",
    title: "Discharge & final approval",
    summary:
      "We submit the discharge summary and final bill the moment they’re ready and push for final approval, so beds are freed faster and families aren’t kept waiting at the billing counter.",
    points: [
      "Discharge summary and final bill submission",
      "Deduction review before you accept",
      "Faster bed turnover",
    ],
  },
  {
    slug: "settlement",
    icon: "rupee",
    title: "Settlement & reconciliation",
    summary:
      "Approval is not payment. We follow every claim through to the settlement letter, match it against what was billed and flag short-payments for recovery.",
    points: [
      "Settlement letter capture and matching",
      "Short-payment and deduction tracking",
      "Ageing reports on unsettled claims",
    ],
  },
  {
    slug: "portal-reporting",
    icon: "chart",
    title: "Claims portal & reporting",
    summary:
      "Your team sees every claim, document and TPA conversation in one secure portal — with live status, notifications and Excel reports for your accounts department.",
    points: [
      "Live status for every patient claim",
      "Instant notifications on queries and approvals",
      "Exportable Excel reports",
    ],
  },
];

export const claimStages = [
  { label: "Admission & documents", detail: "Your desk uploads the patient’s ICP, clinic papers and investigations to the portal." },
  { label: "Pre-auth sent to TPA", detail: "Our team checks the file, builds the request and submits it to the TPA or insurer." },
  { label: "Queries answered", detail: "Any TPA query is replied to with the right documents, usually within hours." },
  { label: "Approval & enhancements", detail: "Initial approval is tracked; enhancements are filed as treatment evolves." },
  { label: "Discharge approval", detail: "Discharge summary and final bill go in for final authorisation." },
  { label: "Settled & reconciled", detail: "We follow up until the settlement letter arrives and reconcile it against your bill." },
];
