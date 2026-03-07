import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  icon?: string;
  tag?: string;
};

export default function ServiceCard({
  title,
  description,
  ctaText = "See details & pricing",
  ctaHref = "/services",
  icon,
  tag,
}: ServiceCardProps) {
  return (
    <div className="p-6 lg:p-8 rounded-xl bg-bg-card border border-border hover:border-accent/50 hover:shadow-[0_0_0_1px_rgba(201,162,39,0.15)] transition-all duration-200 group">
      {tag && (
        <span className="inline-block text-xs uppercase tracking-wider text-accent font-medium mb-3">
          {tag}
        </span>
      )}
      {icon && (
        <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-2xl mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-text-muted leading-relaxed mb-5">{description}</p>
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
