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
      className={`rounded-xl border bg-bg-elevated transition-colors hover:border-accent/30 ${
        featured ? "p-6 lg:p-8 border-accent/20" : "p-5 border-border"
      }`}
    >
      <div className="text-accent tracking-wider mb-3">★★★★★</div>
      <blockquote
        className={`text-white/95 m-0 italic ${featured ? "text-base lg:text-lg leading-relaxed" : "text-sm"}`}
      >
        {quote}
      </blockquote>
      <p className="text-text-muted text-sm mt-4">{author}</p>
    </div>
  );
}
