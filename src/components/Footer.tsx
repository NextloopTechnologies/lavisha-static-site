import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";

const services = [
  "Pre-authorization filing",
  "TPA query resolution",
  "Enhancement requests",
  "Discharge approvals",
  "Settlement & reconciliation",
];

export function Footer() {
  return (
    <footer className="bg-ink text-paper/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="mb-4 inline-flex rounded-xl bg-white p-2">
            <Image src="/images/logo-mark.png" alt="" width={48} height={40} className="h-10 w-12" />
          </div>
          <p className="font-display text-xl text-paper">{site.legalName}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            Cashless insurance claim processing for hospitals and nursing homes across India.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-gold-light">Company</p>
          <ul className="space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="hover:text-paper">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-gold-light">Services</p>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s}>
                <Link href="/services" className="hover:text-paper">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <address className="not-italic">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-gold-light">Reach us</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`tel:${site.phone}`} className="hover:text-paper">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-paper">
                {site.email}
              </a>
            </li>
            <li>
              {site.address.locality}, {site.address.region}
            </li>
            <li>{site.hours}</li>
          </ul>
        </address>
      </div>
      <div className="border-t border-paper/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-paper/60 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>Larisha is a claims-processing service provider, not an insurer or TPA.</p>
        </div>
      </div>
    </footer>
  );
}
