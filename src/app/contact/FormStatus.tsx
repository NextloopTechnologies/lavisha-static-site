"use client";

import { useSearchParams } from "next/navigation";
import { site } from "@/lib/site";

// Reads ?status= after a failed submit. Client-side so /contact stays statically prerendered.
export function FormStatus() {
  const status = useSearchParams().get("status");
  if (status !== "invalid" && status !== "error") return null;

  return (
    <p role="alert" className="rounded-xl border border-rust/30 bg-rust/5 px-4 py-3 text-sm text-rust">
      {status === "invalid"
        ? "Please check your name, hospital and phone number, then try again."
        : `We couldn’t send your enquiry just now. Please try again, or call us on ${site.phoneDisplay}.`}
    </p>
  );
}
