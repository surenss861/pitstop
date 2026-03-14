import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/conversion/CTASection";

export const metadata: Metadata = {
  title: "About PitStop Polish — Toronto Mobile Detailing",
  description:
    "Who we are and why we do mobile detailing in Toronto. Real operator, real standards. Convenience without sacrificing quality. We come to you.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-16 md:py-20 text-center">
        <div className="max-w-[720px] mx-auto px-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold mb-4">
            About
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            About PitStop Polish
          </h1>
          <p className="text-text-muted text-lg max-w-[48ch] mx-auto">
            Professional mobile detailing in Toronto — real operator, real work, real standards. We come to you.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-bg-card">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 space-y-12">
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Who we are</h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed m-0">
              PitStop Polish is a Toronto-based mobile detailing business built around one idea: bring quality detailing to your doorstep. No drop-off, no waiting at a shop — we come to your driveway, condo, or office with everything we need to do the job right.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Why this business exists</h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed m-0">
              Your time matters. We'd rather spend ours coming to you so you can keep your day. Whether you're at home, work, or somewhere in between, we show up, do the work, and leave you with a cleaner car. That's the whole point.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Why mobile</h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed m-0">
              Convenience without sacrificing quality. Our customers choose us because they get real attention to detail — interior and exterior, paint correction, ceramic coating when they want it — at a fair price, without the hassle of driving somewhere. Done right in your own driveway.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">The standard we work to</h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed m-0">
              No shortcuts, no fake promises. What you see in our gallery and read in our reviews is what we aim for every time. We're committed to doing the job right: interior deep clean, exterior wash and protect, correction and coating when that's what you're after.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">What we don't do</h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed m-0">
              We don't do rush jobs or cut corners. We don't upsell you into services you don't need. We don't show up unprepared. We quote before the job, we show up with the right equipment, and we leave your vehicle in better shape than we found it.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Why trust us with your vehicle</h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed m-0">
              Local Toronto focus — we serve this city and the GTA because we're here, and we care about the results. Real reviews, real before/after proof, and a straightforward way to book. You get a quote first, we confirm your area, and we come to you. Simple.
            </p>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex justify-center py-3.5 px-8 rounded-xl bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors"
            >
              Book or get a quote
            </Link>
            <Link
              href="/services"
              className="inline-flex justify-center py-3.5 px-8 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
            >
              See our services
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to book?"
        subtitle="Get a quote or call. We'll come to you across Toronto and the GTA."
      />
    </>
  );
}
