type ReviewCardProps = {
  quote: string;
  author?: string;
  featured?: boolean;
};

export default function ReviewCard({
  quote,
  author = "— Google review",
  featured = false,
}: ReviewCardProps) {
  return (
    <div
      className={`rounded-2xl border transition-colors hover:border-accent/30 ${
        featured
          ? "p-10 lg:p-16 border-accent/10 bg-gradient-to-b from-accent/[0.06] to-bg-elevated shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]"
          : "p-4 lg:p-5 border-border/80 bg-bg-elevated/80 card-hover-lift"
      }`}
    >
      <div className={`text-accent tracking-wider ${featured ? "mb-6 text-lg" : "mb-2 text-sm"}`}>★★★★★</div>
      <blockquote
        className={`text-white/95 m-0 ${featured ? "text-xl lg:text-2xl leading-relaxed font-medium max-w-[26ch]" : "text-sm"} ${
          featured ? "italic" : ""
        }`}
      >
        {featured && (
          <span className="text-5xl lg:text-6xl text-accent/25 font-serif leading-none align-top mr-2">"</span>
        )}
        {quote}
        {featured && (
          <span className="text-5xl lg:text-6xl text-accent/25 font-serif leading-none align-bottom ml-1">"</span>
        )}
      </blockquote>
      <p className={`text-text-muted mt-5 ${featured ? "text-xs uppercase tracking-wider text-accent/80" : "text-sm"}`}>
        {author}
      </p>
    </div>
  );
}
