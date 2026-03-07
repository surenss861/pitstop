import Link from "next/link";

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
}: ServiceCardProps) {
  return (
    <div
      className={`card-hover-lift rounded-xl bg-bg-card border border-border hover:border-accent/50 hover:shadow-[0_0_0_1px_rgba(201,162,39,0.2)] group relative overflow-hidden ${
        featured ? "p-8 lg:p-10 border-l-4 border-l-accent bg-gradient-to-br from-accent/[0.06] to-bg-card" : "p-6 lg:p-8"
      }`}
    >
      {featured && (
        <span className="absolute top-4 right-4 text-[10px] uppercase tracking-wider font-semibold text-accent/90">
          Most popular
        </span>
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
        <p className="text-[11px] text-accent/90 font-medium mb-3 tracking-tight">
          Best for: {bestFor}
        </p>
      )}
      {includes.length > 0 && (
        <ul className={`text-text-muted space-y-1.5 mb-6 tracking-tight ${featured ? "text-sm" : "text-sm"}`}>
          {includes.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-accent/80 font-bold">·</span>
              {item}
            </li>
          ))}
        </ul>
      )}
      {ctaHref && (
        <Link
          href={ctaHref}
          className={`inline-flex rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors ${featured ? "py-3 px-6 text-base" : "py-2.5 px-5 text-sm"}`}
        >
          {ctaText}
        </Link>
      )}
    </div>
  );
}
