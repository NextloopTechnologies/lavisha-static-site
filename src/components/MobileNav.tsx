"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { nav, site } from "@/lib/site";

// <details> keeps the menu usable before hydration; JS only closes it after navigation.
export function MobileNav() {
  const ref = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (ref.current) ref.current.open = false;
  }, [pathname]);

  return (
    <details ref={ref} className="group relative lg:hidden">
      <summary
        className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-ink/15 [&::-webkit-details-marker]:hidden"
        aria-label="Open menu"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
          <path className="group-open:hidden" d="M4 7h16M4 12h16M4 17h16" />
          <path className="hidden group-open:block" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </summary>
      <nav
        aria-label="Mobile"
        className="absolute right-0 top-14 w-[min(18rem,calc(100vw-2rem))] rounded-2xl border border-line bg-white p-2 shadow-xl"
      >
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="block rounded-xl px-4 py-3 text-base font-medium hover:bg-paper">
            {item.label}
          </Link>
        ))}
        <a href={site.portalUrl} className="block rounded-xl px-4 py-3 text-base font-medium hover:bg-paper">
          Portal login
        </a>
        <Link href="/contact" className="btn-primary mt-2 w-full">
          Book a demo
        </Link>
      </nav>
    </details>
  );
}
