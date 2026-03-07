type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <div className={`text-center mb-10 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h2>
      {subtitle && <p className="text-text-muted max-w-[40ch] mx-auto">{subtitle}</p>}
    </div>
  );
}
