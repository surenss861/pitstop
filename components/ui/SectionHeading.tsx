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
        <p className="text-[11px] uppercase tracking-[0.22em] text-accent font-semibold mb-3">
          {label}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-3 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted max-w-[42ch] mx-auto text-lg leading-relaxed tracking-tight">
          {subtitle}
        </p>
      )}
    </div>
  );
}
