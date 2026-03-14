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
            Professional mobile detailing in Toronto — built around real work, real care, and real standards.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-bg-card">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 space-y-12">
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Who we are</h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed m-0">
              PitStop Polish is a Toronto-based mobile detailing business built around one simple idea: bring quality detailing to the customer instead of forcing the customer to lose time at a shop.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Why this business exists</h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed m-0">
              Your time matters. The goal is simple: show up prepared, do the work properly, and leave you with a cleaner, better-protected vehicle without wasting your day.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Why mobile detailing</h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed m-0">
              Convenience only matters if quality is still there. That's why the focus is not just washing cars — it's interior care, exterior finish, correction, and protection done properly at your location.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">The standard we work to</h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed m-0">
              No rush jobs. No fake luxury. No careless work. What you see in the gallery and reviews is the level we aim for every time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">What we don't do</h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed m-0">
              We do not push unnecessary upsells, show up unprepared, or pretend every vehicle needs the most expensive package. We quote first and recommend the right level of work.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Why trust us with your vehicle</h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed m-0">
              Local Toronto & GTA focus, real reviews, real proof, quote-first pricing, and service built around your location.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-accent/20 bg-accent/5">
            <h3 className="text-white font-bold text-sm mb-3">How we work</h3>
            <ul className="text-text-muted text-sm space-y-2 m-0">
              <li>Quote first</li>
              <li>Arrive prepared</li>
              <li>Confirm area before booking</li>
              <li>Real detailing, not rushed work</li>
              <li>Focus on results and repeat customers</li>
            </ul>
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
