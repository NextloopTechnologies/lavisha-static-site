import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="container-x py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl font-semibold">This page has been discharged</h1>
      <p className="mx-auto mt-4 max-w-md text-lg text-ink-soft">The page you’re looking for doesn’t exist or has moved.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="btn-primary">
          Go home
        </Link>
        <Link href="/contact" className="btn-ghost">
          Contact us
        </Link>
      </div>
    </section>
  );
}
