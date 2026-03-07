type SectionHeadingProps = {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
};

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isLeft = align === "left";
  return (
    <div
      className={`mb-12 ${isLeft ? "text-left" : "text-center"} ${className}`}
    >
      {label && (
        <p className="text-[11px] uppercase tracking-[0.22em] text-accent font-semibold mb-3">
          {label}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-3 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-text-muted text-lg leading-relaxed tracking-tight ${
            isLeft ? "max-w-[42ch]" : "max-w-[42ch] mx-auto"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
