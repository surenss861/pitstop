"use client";

import Link from "next/link";
import { primaryCtaHref, primaryCtaLabel } from "@/lib/booking";

export default function MobileStickyCTA() {
  const isExternal = primaryCtaHref.startsWith("http");
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 flex gap-3 p-3 bg-bg/95 backdrop-blur-md border-t border-white/10 md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href="tel:+16478237338"
        className="flex-1 py-3.5 px-4 rounded-xl bg-accent text-bg font-semibold text-center hover:bg-accent-hover transition-colors shadow-lg"
        aria-label="Call (647) 823-7338"
      >
        Call
      </a>
      {isExternal ? (
        <a
          href={primaryCtaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3.5 px-4 rounded-xl border-2 border-accent text-accent font-semibold text-center hover:bg-accent/10 transition-colors"
        >
          {primaryCtaLabel}
        </a>
      ) : (
        <Link
          href={primaryCtaHref}
          className="flex-1 py-3.5 px-4 rounded-xl border-2 border-accent text-accent font-semibold text-center hover:bg-accent/10 transition-colors"
        >
          {primaryCtaLabel}
        </Link>
      )}
    </div>
  );
}
