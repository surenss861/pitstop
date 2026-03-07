type SectionHeadingProps = {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionHeading({
  label,
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {label && (
        <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">
          {label}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">{title}</h2>
      {subtitle && (
        <p className="text-text-muted max-w-[42ch] mx-auto text-lg leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
