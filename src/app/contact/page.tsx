import { Icon } from "@/components/Icon";
import { PageHeader } from "@/components/Sections";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { Suspense } from "react";
import { submitEnquiry } from "./actions";
import { FormStatus } from "./FormStatus";

export const metadata = pageMetadata({
  title: "Contact Us — Book a Free Demo",
  description:
    "Talk to Larisha Health Care about outsourcing your hospital’s cashless claims. Book a free 30-minute demo of our process and claims portal.",
  path: "/contact",
  keywords: ["contact Larisha Health Care", "hospital claims outsourcing demo", "cashless claim processing enquiry"],
});

const input =
  "mt-1.5 block w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-muted/70 focus:border-gold-deep focus:outline-none focus:ring-2 focus:ring-gold/30";
const label = "text-sm font-semibold";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumb="Contact"
        path="/contact"
        eyebrow="Contact"
        title="Let’s get your claims moving"
        intro="Tell us a little about your hospital. We’ll get back within one working day to schedule a free 30-minute walkthrough of our process and portal."
      />

      <section className="container-x grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr]">
        <form id="enquiry" action={submitEnquiry} className="card scroll-mt-24 space-y-5">
          <h2 className="text-2xl font-semibold">Request a demo</h2>
          <Suspense fallback={null}>
            <FormStatus />
          </Suspense>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={label}>
                Your name <span className="text-rust">*</span>
              </label>
              <input id="name" name="name" required minLength={2} maxLength={100} autoComplete="name" className={input} />
            </div>
            <div>
              <label htmlFor="hospital" className={label}>
                Hospital / nursing home <span className="text-rust">*</span>
              </label>
              <input id="hospital" name="hospital" required minLength={2} maxLength={150} autoComplete="organization" className={input} />
            </div>
            <div>
              <label htmlFor="phone" className={label}>
                Phone <span className="text-rust">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                inputMode="tel"
                pattern="[+\d][\d\s\-]{7,}"
                maxLength={20}
                autoComplete="tel"
                placeholder="+91"
                className={input}
              />
            </div>
            <div>
              <label htmlFor="email" className={label}>
                Email
              </label>
              <input id="email" name="email" type="email" maxLength={150} autoComplete="email" className={input} />
            </div>
            <div>
              <label htmlFor="city" className={label}>
                City
              </label>
              <input id="city" name="city" maxLength={80} autoComplete="address-level2" className={input} />
            </div>
            <div>
              <label htmlFor="volume" className={label}>
                Cashless admissions / month
              </label>
              <select id="volume" name="volume" className={input} defaultValue="">
                <option value="" disabled>
                  Select a range
                </option>
                <option>Under 25</option>
                <option>25 – 100</option>
                <option>100 – 300</option>
                <option>300+</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="message" className={label}>
              What’s your biggest claims challenge?
            </label>
            <textarea id="message" name="message" rows={4} maxLength={2000} className={input} />
          </div>
          {/* Honeypot for bots — hidden from people and assistive tech */}
          <div aria-hidden="true" className="hidden">
            <label htmlFor="company_website">Website</label>
            <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
          </div>
          <button type="submit" className="btn-primary w-full sm:w-auto">
            Send enquiry <Icon name="arrow" className="h-4 w-4" />
          </button>
          <p className="text-xs text-muted">We’ll only use these details to respond to your enquiry. Please don’t include patient information.</p>
        </form>

        <aside className="space-y-5">
          <div className="rounded-2xl bg-ink p-7 text-paper">
            <h2 className="text-xl font-semibold">Talk to us directly</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <Icon name="phone" className="h-5 w-5 shrink-0 text-gold-light" />
                <a href={`tel:${site.phone}`} className="hover:underline">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="mail" className="h-5 w-5 shrink-0 text-gold-light" />
                <a href={`mailto:${site.email}`} className="hover:underline">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="pin" className="h-5 w-5 shrink-0 text-gold-light" />
                <address className="not-italic">
                  {site.address.street}
                  <br />
                  {site.address.locality}, {site.address.region} {site.address.postalCode}
                </address>
              </li>
              <li className="flex gap-3">
                <Icon name="clock" className="h-5 w-5 shrink-0 text-gold-light" />
                {site.hours}
              </li>
            </ul>
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold">Already a client?</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">Log in to the Larisha portal to track claims, upload documents and reply to queries.</p>
            <a href={site.portalUrl} className="btn-ghost mt-4">
              Go to portal
            </a>
          </div>
        </aside>
      </section>
    </>
  );
}
