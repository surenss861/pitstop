import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const items = [
  { label: "Interior reset — SUV", aspect: "tall" as const },
  { label: "Seat & carpet deep clean", aspect: "square" as const },
  { label: "Exterior gloss — sedan", aspect: "square" as const },
  { label: "Wheel & tire finish", aspect: "wide" as const },
  { label: "Full detail — before/after", aspect: "wide" as const },
  { label: "Mobile driveway detail — Toronto", aspect: "tall" as const },
];

export default function BeforeAfterShowcase() {
  return (
    <section className="py-20">
      <div className="max-w-[1100px] mx-auto px-4">
        <SectionHeading
          label="Results"
          title="Results That Speak"
          subtitle="Real transformations — interior resets, exterior shine, and full details."
        />

        {/* Editorial grid: one large feature, mixed aspect ratios */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          <div className="col-span-2 row-span-2 rounded-xl bg-bg-card border border-border overflow-hidden min-h-[240px] lg:min-h-[320px] flex flex-col items-center justify-center p-6 text-center">
            <span className="text-text-muted text-sm font-medium">{items[0].label}</span>
          </div>
          <div className="rounded-xl bg-bg-card border border-border min-h-[120px] lg:min-h-[155px] flex items-center justify-center p-4 text-center">
            <span className="text-text-muted text-sm">{items[1].label}</span>
          </div>
          <div className="rounded-xl bg-bg-card border border-border min-h-[120px] lg:min-h-[155px] flex items-center justify-center p-4 text-center">
            <span className="text-text-muted text-sm">{items[2].label}</span>
          </div>
          <div className="col-span-2 rounded-xl bg-bg-card border border-border min-h-[100px] lg:min-h-[120px] flex items-center justify-center p-4 text-center">
            <span className="text-text-muted text-sm">{items[3].label}</span>
          </div>
          <div className="col-span-2 rounded-xl bg-bg-card border border-border min-h-[100px] lg:min-h-[120px] flex items-center justify-center p-4 text-center">
            <span className="text-text-muted text-sm">{items[4].label}</span>
          </div>
          <div className="col-span-2 rounded-xl bg-bg-card border border-border min-h-[100px] lg:min-h-[120px] flex items-center justify-center p-4 text-center">
            <span className="text-text-muted text-sm">{items[5].label}</span>
          </div>
        </div>

        <p className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-flex py-3 px-6 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
          >
            View full gallery
          </Link>
        </p>
      </div>
    </section>
  );
}
