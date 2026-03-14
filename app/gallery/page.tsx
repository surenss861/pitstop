import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryShowcase from "@/components/gallery/GalleryShowcase";
import CTASection from "@/components/conversion/CTASection";

export const metadata: Metadata = {
  title: "Gallery — Before & After Detailing Results | PitStop Polish",
  description:
    "Before and after mobile detailing results. Interior, exterior, wheels, paint correction, full detail. Real proof from real jobs — Toronto & GTA.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Proof-first hero */}
      <section className="py-16 md:py-20 text-center">
        <div className="max-w-[720px] mx-auto px-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold mb-4">
            Gallery
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            Real results — not stock photos
          </h1>
          <p className="text-text-muted text-lg mb-8 max-w-[52ch] mx-auto">
            Interior resets, exterior gloss, wheel finish, paint correction, and full-detail transformations. Evidence from real jobs at customer locations across Toronto and the GTA.
          </p>
          <Link
            href="/contact"
            className="inline-flex py-3.5 px-8 rounded-xl bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors"
          >
            Get results like these
          </Link>
        </div>
      </section>

      {/* Featured results — filter + grid/swipe */}
      <section className="py-14 md:py-16 bg-bg-card">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Proof"
            title="Before & after — by category"
            subtitle="Interior, exterior, wheels, correction, full detail. Filter below. Swipe on mobile."
            align="left"
          />
          <GalleryShowcase />
          <p className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex py-3 px-6 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
            >
              Book a detail
            </Link>
          </p>
        </div>
      </section>

      <section className="py-12 bg-bg">
        <div className="max-w-[700px] mx-auto px-4 text-center">
          <h2 className="text-lg font-bold text-white mb-2">Real proof converts</h2>
          <p className="text-text-muted text-sm mb-4">
            As you complete jobs, replace generic images with real before/after shots of interiors, wheels, gloss, trim, and correction work.
          </p>
          <Link href="/services" className="inline-flex py-2.5 px-6 rounded-xl border-2 border-accent text-accent font-semibold text-sm hover:bg-accent/10 transition-colors">
            See Our Services
          </Link>
        </div>
      </section>

      <CTASection
        title="Like what you see?"
        subtitle="Book a detail and get results like these at your location. We come to you."
      />
    </>
  );
}
