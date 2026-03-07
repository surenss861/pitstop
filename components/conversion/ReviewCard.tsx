type ReviewCardProps = {
  quote: string;
  author?: string;
};

export default function ReviewCard({ quote, author = "— Google review" }: ReviewCardProps) {
  return (
    <div className="p-5 rounded-xl bg-bg-elevated border border-border">
      <div className="text-accent tracking-wider mb-2">★★★★★</div>
      <blockquote className="text-white/95 text-sm italic m-0">{quote}</blockquote>
      <p className="text-text-muted text-sm mt-3">{author}</p>
    </div>
  );
}
