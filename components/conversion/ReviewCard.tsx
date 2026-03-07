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
      className={`rounded-xl border transition-colors hover:border-accent/30 card-hover-lift ${
        featured
          ? "p-6 lg:p-10 border-accent/25 bg-gradient-to-b from-accent/[0.06] to-bg-elevated"
          : "p-5 border-border bg-bg-elevated"
      }`}
    >
      <div className="text-accent tracking-wider mb-3">★★★★★</div>
      <blockquote
        className={`text-white/95 m-0 ${featured ? "text-lg lg:text-xl leading-relaxed" : "text-sm"} ${
          featured ? "italic" : ""
        }`}
      >
        {featured && (
          <span className="text-4xl lg:text-5xl text-accent/40 font-serif leading-none align-top mr-1">"</span>
        )}
        {quote}
        {featured && (
          <span className="text-4xl lg:text-5xl text-accent/40 font-serif leading-none align-bottom ml-0.5">"</span>
        )}
      </blockquote>
      <p className="text-text-muted text-sm mt-4">{author}</p>
    </div>
  );
}
