import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/conversion/CTASection";

export const metadata: Metadata = {
  title: "About PitStop Polish",
  description:
    "PitStop Polish — professional mobile detailing in Toronto. Real operator, real standards. We come to you with quality interior and exterior detailing.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-16 text-center">
        <div className="max-w-[1100px] mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">About PitStop Polish</h1>
          <p className="text-text-muted max-w-[50ch] mx-auto">
            Professional mobile detailing in Toronto — real operator, real work, real standards.
          </p>
        </div>
      </section>

      <section className="py-12 bg-bg-card">
        <div className="max-w-[720px] mx-auto px-4">
          <div className="p-6 rounded-xl bg-bg border border-border space-y-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Who We Are</h2>
              <p className="text-text-muted text-sm m-0">
                PitStop Polish is a Toronto-based mobile detailing business built around one idea:
                bring quality detailing to your doorstep. No drop-off, no waiting at a shop — we
                come to your driveway, condo, or location with everything we need to do the job
                right.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-2">What Makes Us Different</h2>
              <p className="text-text-muted text-sm m-0">
                We focus on <strong className="text-white">convenience without sacrificing quality</strong>.
                Our customers choose us because they get real attention to detail — interior and
                exterior — at a fair price, without the hassle of driving somewhere. The reviews
                say it: done right in your own driveway.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Why Mobile Detailing</h2>
              <p className="text-text-muted text-sm m-0">
                Your time matters. We'd rather spend ours coming to you so you can keep your day.
                Whether you're at home, work, or somewhere in between, we show up, do the work, and
                leave you with a cleaner car. That's the whole point.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Our Commitment</h2>
              <p className="text-text-muted text-sm m-0">
                We're committed to doing the job right. No shortcuts, no fake promises. What you
                see in our gallery and read in our reviews is what we aim for every time. Local
                Toronto focus — we serve this city and the surrounding areas because we're here,
                and we care about the results.
              </p>
            </div>
            <p className="pt-4">
              <Link
                href="/contact"
                className="inline-flex py-2 px-5 rounded-lg bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors"
              >
                Book or Get a Quote
              </Link>
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to book?"
        subtitle="Get a quote or call. We'll come to you."
      />
    </>
  );
}
