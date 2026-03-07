import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/conversion/CTASection";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Before and after mobile detailing results. Interior resets, exterior shine, full details — Toronto. See the quality before you book.",
};

const interiorLabels = [
  "Full interior reset — SUV",
  "Seat & carpet deep clean",
  "Dashboard & trim detail",
  "Interior — sedan",
];
const exteriorLabels = [
  "Exterior gloss finish — sedan",
  "Wheel & tire detail",
  "Paint correction result",
  "Full exterior — Toronto",
];
const beforeAfterLabels = [
  "Before/after interior",
  "Before/after exterior",
  "Full detail transformation",
  "Mobile driveway detail — Toronto",
];

function GalleryGrid({ labels }: { labels: string[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {labels.map((label) => (
        <div
          key={label}
          className="aspect-[4/3] rounded-lg bg-bg-card border border-border flex items-center justify-center text-text-muted text-sm text-center px-2"
        >
          {label}
        </div>
      ))}
    </div>
  );
}

export default function GalleryPage() {
  return (
    <>
      <section className="py-16 text-center">
        <div className="max-w-[1100px] mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Gallery</h1>
          <p className="text-text-muted max-w-[50ch] mx-auto mb-6">
            Real results — interior resets, exterior shine, and full-detail transformations. Add
            your own before/after photos here to build trust.
          </p>
          <Link
            href="/contact"
            className="inline-flex py-3 px-6 rounded-lg bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors"
          >
            Book a Detail
          </Link>
        </div>
      </section>

      <section className="py-12 bg-bg-card">
        <div className="max-w-[1100px] mx-auto px-4">
          <SectionHeading title="Interior Results" />
          <GalleryGrid labels={interiorLabels} />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[1100px] mx-auto px-4">
          <SectionHeading title="Exterior Shine" />
          <GalleryGrid labels={exteriorLabels} />
        </div>
      </section>

      <section className="py-12 bg-bg-card">
        <div className="max-w-[1100px] mx-auto px-4">
          <SectionHeading title="Before & After" />
          <GalleryGrid labels={beforeAfterLabels} />
        </div>
      </section>

      <CTASection
        title="Like what you see?"
        subtitle="Book a detail and get results like these at your location."
      />
    </>
  );
}
