import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/75">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} — home`}>
          <Image
            src="/images/logo-mark.png"
            alt=""
            width={40}
            height={33}
            preload
            className="h-[33px] w-10"
          />
          <span className="font-display text-lg font-semibold leading-none tracking-tight">
            Larisha<span className="text-gold-deep"> Health Care</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-paper-deep hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={site.portalUrl} className="hidden text-sm font-semibold text-ink-soft hover:text-ink md:inline">
            Portal login
          </a>
          <Link href="/contact" className="btn-primary hidden sm:inline-flex">
            Book a demo
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
