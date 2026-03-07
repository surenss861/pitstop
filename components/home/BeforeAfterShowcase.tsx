import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren from "@/components/animation/StaggerChildren";

const categories = ["Interior", "Exterior", "Wheels", "Full detail", "Before/after"];

const items = [
  { label: "Interior reset — SUV", category: "Interior" },
  { label: "Seat & carpet deep clean", category: "Interior" },
  { label: "Exterior gloss — sedan", category: "Exterior" },
  { label: "Wheel & tire finish", category: "Wheels" },
  { label: "Full detail — before/after", category: "Full detail" },
  { label: "Mobile driveway detail — Toronto", category: "Full detail" },
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

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-text-muted border border-border hover:border-accent/40 hover:text-accent transition-colors"
            >
              {cat}
            </span>
          ))}
        </div>

        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4" stagger={0.08} variant="scale">
          <div className="gallery-item-hover stagger-item col-span-2 row-span-2 rounded-xl bg-bg-card border border-border overflow-hidden min-h-[240px] lg:min-h-[320px] flex flex-col items-center justify-center p-6 text-center relative group">
            <span className="text-text-muted text-sm font-medium">{items[0].label}</span>
            <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-wider text-accent/80">{items[0].category}</span>
          </div>
          <div className="gallery-item-hover stagger-item rounded-xl bg-bg-card border border-border min-h-[120px] lg:min-h-[155px] flex items-center justify-center p-4 text-center overflow-hidden">
            <span className="text-text-muted text-sm">{items[1].label}</span>
          </div>
          <div className="gallery-item-hover stagger-item rounded-xl bg-bg-card border border-border min-h-[120px] lg:min-h-[155px] flex items-center justify-center p-4 text-center overflow-hidden">
            <span className="text-text-muted text-sm">{items[2].label}</span>
          </div>
          <div className="gallery-item-hover stagger-item col-span-2 rounded-xl bg-bg-card border border-border min-h-[100px] lg:min-h-[120px] flex items-center justify-center p-4 text-center overflow-hidden">
            <span className="text-text-muted text-sm">{items[3].label}</span>
          </div>
          <div className="gallery-item-hover stagger-item col-span-2 rounded-xl bg-bg-card border border-border min-h-[100px] lg:min-h-[120px] flex items-center justify-center p-4 text-center overflow-hidden">
            <span className="text-text-muted text-sm">{items[4].label}</span>
          </div>
          <div className="gallery-item-hover stagger-item col-span-2 rounded-xl bg-bg-card border border-border min-h-[100px] lg:min-h-[120px] flex items-center justify-center p-4 text-center overflow-hidden">
            <span className="text-text-muted text-sm">{items[5].label}</span>
          </div>
        </StaggerChildren>

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
