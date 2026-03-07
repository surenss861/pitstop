import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  icon?: string;
};

export default function ServiceCard({
  title,
  description,
  ctaText = "See details & pricing",
  ctaHref = "/services",
  icon,
}: ServiceCardProps) {
  return (
    <div className="p-6 rounded-xl bg-bg-card border border-border hover:border-accent transition-colors group">
      {icon && (
        <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center text-2xl mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-text-muted text-sm mb-4">{description}</p>
      {ctaHref && (
        <Link
          href={ctaHref}
          className="inline-flex py-2 px-4 rounded-lg border-2 border-accent text-accent text-sm font-semibold hover:bg-accent/10 transition-colors"
        >
          {ctaText}
        </Link>
      )}
    </div>
  );
}
