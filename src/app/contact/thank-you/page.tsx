import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="container-x flex flex-col items-center py-24 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sage/10 text-sage">
        <Icon name="check" className="h-8 w-8" />
      </span>
      <h1 className="mt-6 text-4xl font-semibold">Thanks — we’ve got your enquiry</h1>
      <p className="mt-4 max-w-lg text-lg text-ink-soft">
        Someone from our team will reach out within one working day to schedule your demo.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/how-it-works" className="btn-primary">
          See how it works
        </Link>
        <Link href="/" className="btn-ghost">
          Back to home
        </Link>
      </div>
    </section>
  );
}
