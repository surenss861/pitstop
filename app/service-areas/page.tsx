import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceAreaGrid from "@/components/conversion/ServiceAreaGrid";
import CTASection from "@/components/conversion/CTASection";

export const metadata: Metadata = {
  title: "Service Areas — Toronto & GTA",
  description:
    "PitStop Polish serves Toronto (Downtown, Annex, King West, Danforth, Leslieville, Riverdale, Beaches) and GTA cities: Mississauga, Oakville, Brampton, Vaughan, Markham, Pickering, King City. Mobile detailing at your location.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="py-16 text-center">
        <div className="max-w-[1100px] mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Toronto & GTA Service Areas</h1>
          <p className="text-text-muted max-w-[52ch] mx-auto mb-6">
            Primary market: Toronto. Expanded GTA: Mississauga, Oakville, Brampton, Vaughan, Markham, Pickering, King City. We come to you — if you're not sure we serve your area, just ask when you request a quote.
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
          <SectionHeading
            title="Where We Come to You"
            subtitle="Toronto neighbourhoods and GTA cities. Same quality at home or work."
          />
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
