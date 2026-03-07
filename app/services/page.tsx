import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/conversion/ServiceCard";
import CTASection from "@/components/conversion/CTASection";

export const metadata: Metadata = {
  title: "Mobile Detailing Services in Toronto",
  description:
    "Interior, exterior, and full mobile detailing in Toronto. Clear packages and pricing. We come to you — request a quote or call (647) 823-7338.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 text-center">
        <div className="max-w-[1100px] mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mobile Detailing Services in Toronto
          </h1>
          <p className="text-text-muted max-w-[50ch] mx-auto mb-6">
            Interior, exterior, and full-detail packages. Pricing depends on vehicle size and
            condition — request a quick quote or call for an estimate.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex py-3 px-6 rounded-lg bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors"
            >
              Get a Quote
            </Link>
            <a
              href="tel:+16478237338"
              className="inline-flex py-3 px-6 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
            >
              Call (647) 823-7338
            </a>
          </div>
        </div>
      </section>

      <section id="interior" className="py-12 bg-bg-card">
        <div className="max-w-[1100px] mx-auto px-4">
          <SectionHeading title="Interior Detailing" />
          <div className="p-6 rounded-xl bg-bg border border-border max-w-3xl">
            <h3 className="font-bold text-white mb-2">What's included</h3>
            <p className="text-text-muted text-sm mb-4">
              Deep clean of seats (fabric or leather), carpets and mats, dash and console, door
              panels and trim, windows. Vacuum, brush, and appropriate cleaners. Optional: leather
              conditioning, odor treatment, steam clean.
            </p>
            <h3 className="font-bold text-white mb-2">Who it's for</h3>
            <p className="text-text-muted text-sm mb-4">
              Daily drivers, family vehicles, rideshare drivers, anyone who wants a fresh interior.
            </p>
            <p className="text-text-muted text-sm mb-4">
              <strong className="text-white">Time:</strong> Typically 2–3 hours ·{" "}
              <strong className="text-white">Pricing:</strong> Depends on vehicle size and
              condition. <Link href="/contact" className="text-accent">Request a quote</Link> or
              call (647) 823-7338.
            </p>
            <Link
              href="/contact"
              className="inline-flex py-2 px-5 rounded-lg bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <section id="exterior" className="py-12">
        <div className="max-w-[1100px] mx-auto px-4">
          <SectionHeading title="Exterior Detailing" />
          <div className="p-6 rounded-xl bg-bg-card border border-border max-w-3xl">
            <h3 className="font-bold text-white mb-2">What's included</h3>
            <p className="text-text-muted text-sm mb-4">
              Wash, decontamination (clay if needed), polish to restore shine, and protection (wax
              or sealant). Wheels and tires cleaned and dressed. Windows streak-free.
            </p>
            <h3 className="font-bold text-white mb-2">Who it's for</h3>
            <p className="text-text-muted text-sm mb-4">
              Anyone who wants their paint to look sharp and stay protected.
            </p>
            <p className="text-text-muted text-sm mb-4">
              <strong className="text-white">Time:</strong> Typically 2–3 hours · Quote-based.{" "}
              <Link href="/contact" className="text-accent">Request a quote</Link> or call.
            </p>
            <Link
              href="/contact"
              className="inline-flex py-2 px-5 rounded-lg bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <section id="full" className="py-12 bg-bg-card">
        <div className="max-w-[1100px] mx-auto px-4">
          <SectionHeading title="Full Detailing" />
          <div className="p-6 rounded-xl bg-bg border border-border max-w-3xl">
            <h3 className="font-bold text-white mb-2">What's included</h3>
            <p className="text-text-muted text-sm mb-4">
              Everything from interior and exterior in one visit: full interior deep clean plus
              exterior wash, clay, polish, and protection.
            </p>
            <h3 className="font-bold text-white mb-2">Who it's for</h3>
            <p className="text-text-muted text-sm mb-4">
              Best for a full refresh — spring clean, before sale, or when you want the whole car
              looking and feeling new.
            </p>
            <p className="text-text-muted text-sm mb-4">
              <strong className="text-white">Time:</strong> Typically 4–6 hours · Quote-based.{" "}
              <Link href="/contact" className="text-accent">Request a quote</Link> or call (647)
              823-7338.
            </p>
            <Link
              href="/contact"
              className="inline-flex py-2 px-5 rounded-lg bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <section id="addons" className="py-12">
        <div className="max-w-[1100px] mx-auto px-4">
          <SectionHeading
            title="Add-ons & Paint Enhancement"
            subtitle="Add these to any package or book standalone."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard title="Headlight restoration" description="Restore cloudy or yellow headlights. Quote per vehicle." ctaHref="/contact" ctaText="Request quote" />
            <ServiceCard title="Leather conditioning" description="Clean and condition leather seats and trim." ctaHref="/contact" ctaText="Request quote" />
            <ServiceCard title="Paint correction" description="Remove light scratches and swirls for a deeper gloss." ctaHref="/contact" ctaText="Request quote" />
            <ServiceCard title="Other extras" description="Engine bay clean, pet hair removal, odor treatment, ceramic-style protection." ctaHref="/contact" ctaText="Ask when you quote" />
          </div>
          <p className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-flex py-3 px-6 rounded-lg bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors"
            >
              Request a Quote
            </Link>
          </p>
        </div>
      </section>

      <CTASection
        title="Ready to book?"
        subtitle="Get a quote or call — we'll come to you in Toronto and the surrounding areas."
      />
    </>
  );
}
