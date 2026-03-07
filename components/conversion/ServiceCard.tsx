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
}: ServiceCardProps) {
  return (
    <div className="card-hover-lift p-6 lg:p-8 rounded-xl bg-bg-card border border-border hover:border-accent/50 hover:shadow-[0_0_0_1px_rgba(201,162,39,0.15)] group">
      {tag && (
        <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-accent font-semibold mb-3">
          {tag}
        </span>
      )}
      {icon && (
        <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-2xl mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-extrabold text-white mb-2 tracking-tight">{title}</h3>
      <p className="text-text-muted text-[15px] leading-relaxed mb-4 tracking-tight">{description}</p>
      {bestFor && (
        <p className="text-[11px] text-accent/90 font-medium mb-3 tracking-tight">
          Best for: {bestFor}
        </p>
      )}
      {includes.length > 0 && (
        <ul className="text-sm text-text-muted space-y-1.5 mb-5 tracking-tight">
          {includes.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-accent/80">·</span>
              {item}
            </li>
          ))}
        </ul>
      )}
      {ctaHref && (
        <Link
          href={ctaHref}
          className="inline-flex py-2.5 px-5 rounded-lg border-2 border-accent text-accent text-sm font-semibold hover:bg-accent/10 transition-colors"
        >
          {ctaText}
        </Link>
      )}
    </div>
  );
}
