import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/conversion/ServiceCard";
import ServiceAreaGrid from "@/components/conversion/ServiceAreaGrid";
import CTASection from "@/components/conversion/CTASection";

export const metadata: Metadata = {
  title: "Mobile Detailing Toronto",
  description:
    "Toronto mobile detailing that comes to you. Interior & exterior detailing at your driveway or location. 5-star rated. Book or call (647) 823-7338.",
};

export default function MobileDetailingTorontoPage() {
  return (
    <>
      <section className="py-16 text-center">
        <div className="max-w-[1100px] mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mobile Detailing Toronto
          </h1>
          <p className="text-text-muted max-w-[50ch] mx-auto mb-4">
            Professional mobile detailing that comes to you — driveway, condo, or office. Interior
            and exterior done right in Toronto with real attention to detail and local 5-star
            service.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-text-muted mb-6">
            <span className="text-accent tracking-wider">★★★★★</span>
            <span>5.0 Google</span>
            <span>·</span>
            <span>13 Reviews</span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex py-3 px-6 rounded-lg bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors"
            >
              Book Now
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

      <section className="py-12 bg-bg-card">
        <div className="max-w-[1100px] mx-auto px-4">
          <SectionHeading title="Why Toronto Drivers Choose PitStop Polish" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-bg border border-border text-center">
              <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center text-2xl mx-auto mb-4">📍</div>
              <h3 className="font-bold text-white mb-2">We come to you</h3>
              <p className="text-text-muted text-sm m-0">
                Toronto and GTA — Mississauga, Oakville, Brampton, Vaughan, Markham, Pickering, King City. We bring the detail to your location.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-bg border border-border text-center">
              <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center text-2xl mx-auto mb-4">✨</div>
              <h3 className="font-bold text-white mb-2">Quality that shows</h3>
              <p className="text-text-muted text-sm m-0">
                Interior and exterior packages with real attention to detail. Our reviews back it
                up.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-bg border border-border text-center">
              <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center text-2xl mx-auto mb-4">💰</div>
              <h3 className="font-bold text-white mb-2">Fair pricing</h3>
              <p className="text-text-muted text-sm m-0">
                Great pricing for the quality. Request a quote — no hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[1100px] mx-auto px-4">
          <SectionHeading
            title="Services in Toronto"
            subtitle="Interior, exterior, full details, and add-ons. All mobile — at your place."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard title="Interior Detailing" description="Deep clean of seats, carpets, dash, trim. Perfect for daily drivers and rideshare." ctaHref="/services#interior" ctaText="Details & quote" />
            <ServiceCard title="Exterior Detailing" description="Wash, clay, polish, protect. Restore shine and defend your paint." ctaHref="/services#exterior" ctaText="Details & quote" />
            <ServiceCard title="Full Detail" description="Interior + exterior in one visit. The complete reset." ctaHref="/services#full" ctaText="Details & quote" />
            <ServiceCard title="Add-ons" description="Headlight restoration, leather conditioning, paint correction, and more." ctaHref="/services#addons" ctaText="Options" />
          </div>
        </div>
      </section>

      <section className="py-12 bg-bg-card">
        <div className="max-w-[1100px] mx-auto px-4">
          <SectionHeading title="Toronto & GTA Service Areas" subtitle="Toronto neighbourhoods and GTA cities. Same quality at home or work." />
          <ServiceAreaGrid />
          <p className="text-center mt-8">
            <Link
              href="/service-areas"
              className="inline-flex py-2 px-5 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
            >
              Full service areas
            </Link>
          </p>
        </div>
      </section>

      <CTASection
        title="Book Toronto mobile detailing"
        subtitle="Get a quote or call. We'll come to your location."
      />
    </>
  );
}
