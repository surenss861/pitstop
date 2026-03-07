import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ReviewCard from "@/components/conversion/ReviewCard";
import CTASection from "@/components/conversion/CTASection";

export const metadata: Metadata = {
  title: "PitStop Polish Reviews",
  description:
    "Read what Toronto drivers say about PitStop Polish. 5.0 Google rating, 13 reviews. Convenience, quality, pricing, and attention to detail.",
};

const reviewsByTheme = {
  convenience: [
    "Done at my driveway — so convenient. Quality was top notch and pricing was fair. Will book again.",
    "They came to my place. No need to drive anywhere. Service was excellent and the car looked amazing.",
  ],
  quality: [
    "Attention to detail that actually shows. Interior looked like new. Highly recommend.",
    "Really impressed with the finish. They didn't cut corners. Car looked better than I expected.",
  ],
  pricing: [
    "Great pricing for the quality. Mobile service made it easy — they came to me. 5 stars.",
    "Fair price and no upsell. Got exactly what I asked for. Will use again.",
  ],
};

export default function ReviewsPage() {
  return (
    <>
      <section className="py-16 text-center">
        <div className="max-w-[1100px] mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Toronto Drivers Say
          </h1>
          <p className="text-text-muted max-w-[50ch] mx-auto mb-4">
            Trusted by Toronto drivers. Real reviews from Google — convenience, quality, pricing,
            and attention to detail.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-text-muted mb-6">
            <span className="text-accent tracking-wider">★★★★★</span>
            <span>5.0 Google Rating</span>
            <span>·</span>
            <span>13 Reviews</span>
          </div>
          <a
            href="https://www.google.com/maps?cid=0x89d4cdaa61cd7613:0xf0845188efaf56c6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex py-2 px-5 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
          >
            See us on Google
          </a>
        </div>
      </section>

      <section className="py-12 bg-bg-card">
        <div className="max-w-[1100px] mx-auto px-4">
          <SectionHeading title="Convenience" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviewsByTheme.convenience.map((quote) => (
              <ReviewCard key={quote.slice(0, 24)} quote={quote} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[1100px] mx-auto px-4">
          <SectionHeading title="Quality & Attention to Detail" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviewsByTheme.quality.map((quote) => (
              <ReviewCard key={quote.slice(0, 24)} quote={quote} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-bg-card">
        <div className="max-w-[1100px] mx-auto px-4">
          <SectionHeading title="Pricing & Value" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviewsByTheme.pricing.map((quote) => (
              <ReviewCard key={quote.slice(0, 24)} quote={quote} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="See why customers love PitStop Polish"
        subtitle="Book now or call for a quote. We come to you."
      />
    </>
  );
}
