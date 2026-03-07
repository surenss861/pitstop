import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceAreaGrid from "@/components/conversion/ServiceAreaGrid";
import CTASection from "@/components/conversion/CTASection";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "PitStop Polish serves Toronto, East York, Danforth, Downtown, Leslieville, Riverdale, Scarborough, North York and surrounding areas. Mobile detailing at your location.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="py-16 text-center">
        <div className="max-w-[1100px] mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Service Areas</h1>
          <p className="text-text-muted max-w-[50ch] mx-auto mb-6">
            We bring mobile detailing to Toronto and surrounding neighbourhoods. If you're in the
            GTA and not sure, just ask — we'll confirm before you book.
          </p>
          <Link
            href="/contact"
            className="inline-flex py-3 px-6 rounded-lg bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <section className="py-12 bg-bg-card">
        <div className="max-w-[1100px] mx-auto px-4">
          <SectionHeading title="Areas We Serve" />
          <ServiceAreaGrid />
          <p className="text-center mt-10 text-text-muted">
            Don't see your area? <Link href="/contact" className="text-accent">Contact us</Link> —
            we may still be able to come to you.
          </p>
        </div>
      </section>

      <CTASection
        title="Book mobile detailing in your area"
        subtitle="Request a quote with your location and we'll confirm we can serve you."
      />
    </>
  );
}
