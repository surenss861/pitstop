import Link from "next/link";
import type { TopPackage } from "@/lib/services-data";
import { bookingUrl } from "@/lib/booking";

export default function SectionPackageCard({ pkg }: { pkg: TopPackage }) {
  const isBook = pkg.ctaKind === "book" && bookingUrl;
  const href = isBook && bookingUrl ? bookingUrl : "/contact";
  const cta = isBook ? "Book Now" : "Get a Quote";
  return (
    <div className="mb-8 p-5 md:p-6 rounded-2xl border-2 border-accent/25 bg-accent/5">
      <p className="text-[10px] uppercase tracking-wider text-accent font-semibold mb-2">Package</p>
      <h3 className="font-bold text-white text-lg md:text-xl mb-2">{pkg.name}</h3>
      <p className="text-text-muted text-sm md:text-base mb-2 leading-relaxed">{pkg.outcome}</p>
      <p className="text-accent/90 text-xs font-medium mb-4">
        <span className="text-white/80">Best for: </span>
        {pkg.bestFor}
      </p>
      {href.startsWith("http") ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex py-2.5 px-5 rounded-lg border-2 border-accent text-accent font-semibold text-sm hover:bg-accent/10 transition-colors"
        >
          {cta}
        </a>
      ) : (
        <Link href={href} className="inline-flex py-2.5 px-5 rounded-lg border-2 border-accent text-accent font-semibold text-sm hover:bg-accent/10 transition-colors">
          {cta}
        </Link>
      )}
    </div>
  );
}
