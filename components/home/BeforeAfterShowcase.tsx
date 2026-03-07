import Link from "next/link";

const placeholders = [
  { label: "Interior — before/after" },
  { label: "Seat & carpet clean" },
  { label: "Exterior gloss" },
  { label: "Wheels & tires" },
  { label: "Full detail — SUV" },
  { label: "Mobile driveway detail" },
];

export default function BeforeAfterShowcase() {
  return (
    <section className="py-16">
      <div className="max-w-[1100px] mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
          Results That Speak
        </h2>
        <p className="text-text-muted text-center mb-10">
          Real transformations — interior resets, exterior shine, and full details.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {placeholders.map((item) => (
            <div
              key={item.label}
              className="aspect-[4/3] rounded-lg bg-bg-card border border-border flex items-center justify-center text-text-muted text-sm text-center px-2"
            >
              {item.label}
            </div>
          ))}
        </div>
        <p className="text-center mt-8">
          <Link
            href="/gallery"
            className="inline-flex py-2 px-5 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
          >
            View full gallery
          </Link>
        </p>
      </div>
    </section>
  );
}
