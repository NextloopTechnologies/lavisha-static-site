"use server";

import { redirect } from "next/navigation";

const MAX = { name: 100, hospital: 150, phone: 20, email: 150, city: 80, volume: 40, message: 2000 };

function field(form: FormData, key: keyof typeof MAX) {
  return String(form.get(key) ?? "").trim().slice(0, MAX[key]);
}

export async function submitEnquiry(form: FormData) {
  // Honeypot: real users never see or fill this field.
  if (String(form.get("company_website") ?? "")) redirect("/contact/thank-you");

  const lead = {
    name: field(form, "name"),
    hospital: field(form, "hospital"),
    phone: field(form, "phone"),
    email: field(form, "email"),
    city: field(form, "city"),
    volume: field(form, "volume"),
    message: field(form, "message"),
  };

  const valid =
    lead.name.length >= 2 &&
    lead.hospital.length >= 2 &&
    /^[+\d][\d\s-]{7,}$/.test(lead.phone) &&
    (!lead.email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email));
  if (!valid) redirect("/contact?status=invalid#enquiry");

  if (!(await deliverLead(lead))) redirect("/contact?status=error#enquiry");

  redirect("/contact/thank-you");
}

// Server-to-server POST to the claims backend (POST /v1/leads). The key never reaches the browser.
async function deliverLead(lead: Record<string, string>): Promise<boolean> {
  const apiUrl = process.env.LEADS_API_URL;
  const apiKey = process.env.LEADS_API_KEY;
  if (!apiUrl || !apiKey) {
    console.error("[enquiry] LEADS_API_URL / LEADS_API_KEY not set — lead not delivered");
    return false;
  }

  try {
    const res = await fetch(`${apiUrl.replace(/\/$/, "")}/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-leads-key": apiKey },
      body: JSON.stringify(lead),
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) console.error("[enquiry] backend rejected lead", res.status, await res.text().catch(() => ""));
    return res.ok;
  } catch (error) {
    console.error("[enquiry] backend unreachable", error);
    return false;
  }
}
