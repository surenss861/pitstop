import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ReviewCard from "@/components/conversion/ReviewCard";
import CTASection from "@/components/conversion/CTASection";

export const metadata: Metadata = {
  title: "Reviews — PitStop Polish | Toronto Mobile Detailing",
  description:
    "What Toronto drivers say about PitStop Polish. 5.0 Google. Convenience, quality, value, attention to detail. Real reviews from real customers.",
};

const featuredReview = {
  quote:
    "Done at my driveway — so convenient. Quality was top notch and pricing was fair. Will book again.",
  author: "Driveway detail customer · Google review · Toronto",
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
  value: [
    "Great pricing for the quality. Mobile service made it easy — they came to me. 5 stars.",
    "Fair price and no upsell. Got exactly what I asked for. Will use again.",
  ],
  attentionToDetail: [
    "You can tell they care. Every corner was clean. Not a rush job.",
    "Interior looked like new. Exterior had a real shine. Will be back.",
  ],
};

export default function ReviewsPage() {
  return (
    <>
      {/* Hero — trust page positioning */}
      <section className="py-16 md:py-20 text-center">
        <div className="max-w-[720px] mx-auto px-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold mb-4">
            Reviews
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            What Toronto drivers say about PitStop Polish
          </h1>
          <p className="text-text-muted text-lg mb-8 max-w-[48ch] mx-auto">
            Real feedback from real customers. Convenience, quality, pricing, and attention to detail — that's what shows up in our reviews.
          </p>
          {/* Google rating block */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 rounded-2xl border border-accent/20 bg-accent/5 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-accent text-3xl tracking-wider">★★★★★</span>
              <span className="text-2xl font-extrabold text-white">5.0</span>
            </div>
            <div className="text-left sm:text-center">
              <p className="text-white font-semibold">Google</p>
              <p className="text-text-muted text-sm">13 reviews · Toronto & GTA</p>
            </div>
            <a
              href="https://www.google.com/maps?cid=0x89d4cdaa61cd7613:0xf0845188efaf56c6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex py-2.5 px-6 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors text-sm"
            >
              See us on Google
            </a>
          </div>
        </div>
      </section>

      {/* Featured testimonial */}
      <section className="py-12 bg-bg-card">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <p className="text-[11px] uppercase tracking-wider text-accent font-semibold mb-4 text-center">
            A common reason people book again
          </p>
          <ReviewCard
            quote={featuredReview.quote}
            author={featuredReview.author}
            featured
          />
        </div>
      </section>

      {/* Themed sections */}
      <section className="py-14 md:py-16 bg-bg">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Convenience"
            subtitle="We come to you. No drop-off, no waiting — that's what customers notice first."
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {reviewsByTheme.convenience.map((quote) => (
              <ReviewCard key={quote.slice(0, 30)} quote={quote} author="Google review" />
            ))}
          </div>
          <div className="text-center">
            <Link href="/contact" className="inline-flex py-2.5 px-6 rounded-xl border-2 border-accent text-accent font-semibold text-sm hover:bg-accent/10 transition-colors">
              Get a quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-bg-card">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Quality & attention to detail"
            subtitle="Real results. Interior, exterior, and finish that customers actually mention."
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {reviewsByTheme.quality.map((quote) => (
              <ReviewCard key={quote.slice(0, 30)} quote={quote} author="Google review" />
            ))}
          </div>
          <div className="text-center">
            <Link href="/services" className="inline-flex py-2.5 px-6 rounded-xl border-2 border-accent text-accent font-semibold text-sm hover:bg-accent/10 transition-colors">
              See our services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-bg">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Pricing & value"
            subtitle="Fair pricing and no upsell pressure. That's what our reviews say."
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {reviewsByTheme.value.map((quote) => (
              <ReviewCard key={quote.slice(0, 30)} quote={quote} author="Google review" />
            ))}
          </div>
          <div className="text-center">
            <Link href="/contact" className="inline-flex py-2.5 px-6 rounded-xl bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors text-sm">
              Request a quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-bg-card">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Attention to detail & repeat customers"
            subtitle="Customers who notice the details — and come back."
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviewsByTheme.attentionToDetail.map((quote) => (
              <ReviewCard key={quote.slice(0, 30)} quote={quote} author="Google review" />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="See why customers choose PitStop Polish"
        subtitle="Book now or call for a quote. We come to you across Toronto and the GTA."
      />
    </>
  );
}
