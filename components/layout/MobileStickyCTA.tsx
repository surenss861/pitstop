"use client";

import Link from "next/link";

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex gap-3 p-3 bg-bg/98 backdrop-blur border-t border-border md:hidden">
      <a
        href="tel:+16478237338"
        className="flex-1 py-3 px-4 rounded-lg bg-accent text-bg font-semibold text-center hover:bg-accent-hover transition-colors"
      >
        Call
      </a>
      <Link
        href="/contact"
        className="flex-1 py-3 px-4 rounded-lg border-2 border-accent text-accent font-semibold text-center hover:bg-accent/10 transition-colors"
      >
        Get Quote
      </Link>
    </div>
  );
}
