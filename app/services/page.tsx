import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/conversion/CTASection";
import { serviceSections } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Mobile Detailing Services — Paint Correction, Ceramic Coating, Toronto",
  description:
    "Premium mobile detailing in Toronto: packages, paint correction, ceramic coating, interior & exterior care, restoration. We come to you — request a quote or call (647) 823-7338.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero — premium positioning */}
      <section className="py-16 md:py-20 text-center">
        <div className="max-w-[800px] mx-auto px-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold mb-4">
            Services
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            Mobile Detailing · Paint Correction · Ceramic Coating
          </h1>
          <p className="text-text-muted text-lg md:text-xl mb-2 max-w-[50ch] mx-auto">
            Premium vehicle protection and care at your location. Not just a car wash — packages, correction, and protection that show.
          </p>
          <p className="text-text-muted text-base mb-8">
            We come to you across Toronto and the GTA. Quote-based pricing — vehicle size and condition.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex py-3.5 px-8 rounded-xl bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors"
            >
              Get a Quote
            </Link>
            <a
              href="tel:+16478237338"
              className="inline-flex py-3.5 px-8 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
            >
              Call (647) 823-7338
            </a>
          </div>
        </div>
      </section>

      {/* Full service structure — order: Packages → Ceramic → Correction → Exterior → Interior → Restoration → Add-Ons */}
      {serviceSections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={index % 2 === 0 ? "py-14 md:py-16 bg-bg" : "py-14 md:py-16 bg-bg-card"}
        >
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
            <div className="mb-8">
              <SectionHeading
                label={section.label}
                title={section.title}
                subtitle={section.subtitle}
                align="left"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="px-4 py-3 rounded-xl border border-border bg-bg/50 hover:border-accent/40 transition-colors"
                >
                  <span className="text-white font-medium text-sm md:text-base">{item.name}</span>
                  {item.description && (
                    <p className="text-text-muted text-xs mt-1">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
            {(section.id === "packages" || section.id === "ceramic" || section.id === "addons") && (
              <p className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex py-2.5 px-5 rounded-lg border-2 border-accent text-accent font-semibold text-sm hover:bg-accent/10 transition-colors"
                >
                  Request a quote for {section.label.toLowerCase()}
                </Link>
              </p>
            )}
          </div>
        </section>
      ))}

      <CTASection
        title="Ready to book?"
        subtitle="Get a quote or call — we'll come to you in Toronto and the surrounding areas. Paint correction, ceramic coating, full detail, and more."
      />
    </>
  );
}
