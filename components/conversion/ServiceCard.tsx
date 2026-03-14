"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  icon?: string;
  tag?: string;
  bestFor?: string;
  includes?: string[];
  featured?: boolean;
  premiumLine?: string;
};

export default function ServiceCard({
  title,
  description,
  ctaText = "See details & pricing",
  ctaHref = "/services",
  icon,
  tag,
  bestFor,
  includes = [],
  featured = false,
  premiumLine,
}: ServiceCardProps) {
  const [isNarrow, setIsNarrow] = useState(false);
  useEffect(() => {
    const check = () => setIsNarrow(typeof window !== "undefined" && window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  const includesDisplay = isNarrow && includes.length > 2 ? includes.slice(0, 2) : includes;
  const showIncludesMore = isNarrow && includes.length > 2;

  return (
    <div
      className={`rounded-xl border group relative overflow-hidden ${
        featured
          ? "card-hover-lift p-8 lg:p-10 border-accent/30 bg-gradient-to-br from-accent/[0.08] via-bg-card to-bg-card shadow-[0_0_0_1px_rgba(201,162,39,0.1),inset_0_1px_0_rgba(255,255,255,0.03)] hover:border-accent/50"
          : "card-hover-lift p-6 lg:p-8 border-border bg-bg-card hover:border-accent/50 hover:shadow-[0_0_0_1px_rgba(201,162,39,0.2)]"
      }`}
    >
      {featured && (
        <>
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-3xl opacity-40" />
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-accent/[0.04] to-transparent" />
          </div>
          <span className="absolute top-4 right-4 text-[10px] uppercase tracking-wider font-semibold text-accent">
            Most popular
          </span>
        </>
      )}
      {tag && (
        <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-accent font-semibold mb-3">
          {tag}
        </span>
      )}
      {icon && (
        <div className={`rounded-xl bg-accent/15 flex items-center justify-center text-2xl ${featured ? "w-14 h-14 mb-5" : "w-12 h-12 mb-4"}`}>
          {icon}
        </div>
      )}
      <h3 className={`font-extrabold text-white tracking-tight ${featured ? "text-2xl lg:text-3xl mb-3" : "text-xl mb-2"}`}>
        {title}
      </h3>
      <p className="text-text-muted leading-relaxed tracking-tight mb-4 max-w-[32ch]" style={{ fontSize: featured ? "1rem" : "15px" }}>
        {description}
      </p>
      {bestFor && (
        <p className={`text-[11px] text-accent/90 font-medium mb-3 tracking-tight ${featured ? "px-3 py-1.5 rounded-lg bg-accent/5 border border-accent/10 inline-block" : ""}`}>
          Best for: {bestFor}
        </p>
      )}
      {featured && premiumLine && (
        <p className="text-sm font-semibold text-accent/95 mb-5 tracking-tight">{premiumLine}</p>
      )}
      {(includesDisplay.length > 0 || showIncludesMore) && (
        <ul className={`text-text-muted space-y-1.5 mb-4 md:mb-6 tracking-tight ${featured ? "text-sm" : "text-sm"}`}>
          {includesDisplay.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-accent/80 font-bold">·</span>
              {item}
            </li>
          ))}
          {showIncludesMore && (
            <li className="text-accent/80 text-xs font-medium">See details for full list</li>
          )}
        </ul>
      )}
      {ctaHref && (
        ctaHref.startsWith("http") ? (
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors ${featured ? "py-3 px-6 text-base" : "py-2.5 px-5 text-sm"}`}
          >
            {ctaText}
          </a>
        ) : (
          <Link
            href={ctaHref}
            className={`inline-flex rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors ${featured ? "py-3 px-6 text-base" : "py-2.5 px-5 text-sm"}`}
          >
            {ctaText}
          </Link>
        )
      )}
    </div>
  );
}
