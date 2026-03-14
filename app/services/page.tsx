import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/conversion/CTASection";
import ServicesAnchorNav from "@/components/conversion/ServicesAnchorNav";
import ServicesPathBlock from "@/components/services/ServicesPathBlock";
import {
  serviceSections,
  packageDetails,
} from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Mobile Detailing Services — Paint Correction, Ceramic Coating, Toronto",
  description:
    "Premium mobile detailing in Toronto: packages, paint correction, ceramic coating, interior & exterior care, restoration. We come to you — request a quote or call (647) 823-7338.",
};

const proofQuotes = [
  { quote: "Done at my driveway — so convenient.", forLabel: "For drivers who want the work done without losing half their day." },
  { quote: "Interior looked like new again.", forLabel: "For vehicles that need a full reset, not just a wipe-down." },
  { quote: "Paint looked way better than expected.", forLabel: "For drivers considering correction, polishing, or coating." },
];

const whyBookBullets = [
  "We come to your driveway, condo, or office",
  "Quote first — before the job starts",
  "No hidden upsell or rushed work",
  "Real detailing, correction, protection, and maintenance",
  "Serving Toronto and the GTA",
  "Built around repeat customers, not one-time shortcuts",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero — outcome-focused */}
      <section className="py-16 md:py-20 text-center">
        <div className="max-w-[800px] mx-auto px-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold mb-4">
            Services
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            Real detailing, paint correction, and ceramic protection — done at your location.
          </h1>
          <p className="text-text-muted text-lg md:text-xl mb-4 max-w-[52ch] mx-auto">
            From maintenance details to swirl removal, gloss restoration, and long-term protection, we help Toronto and GTA drivers get their vehicle looking right again — without losing a day at a shop.
          </p>
          <p className="text-sm text-text-muted mb-6">Toronto & GTA · Quote first · No hidden upsell · We come to you</p>
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
              Call Now
            </a>
          </div>
        </div>
      </section>

      <ServicesPathBlock />

      <ServicesAnchorNav />

      {/* Sections: packages get outcome cards; others get subtitle + supportCopy + item grid */}
      {serviceSections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`scroll-mt-32 ${index % 2 === 0 ? "py-14 md:py-16 bg-bg" : "py-14 md:py-16 bg-bg-card"}`}
        >
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
            <div className="mb-6 md:mb-8">
              <SectionHeading
                label={section.label}
                title={section.title}
                subtitle={section.subtitle}
                align="left"
              />
              {section.supportCopy && (
                <p className="text-text-muted text-sm md:text-base mt-4 max-w-[65ch] leading-relaxed">
                  {section.supportCopy}
                </p>
              )}
            </div>

            {section.id === "packages" ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {packageDetails.map((pkg) => (
                    <div
                      key={pkg.name}
                      className="p-5 md:p-6 rounded-xl border border-border bg-bg/50 hover:border-accent/40 transition-colors"
                    >
                      <h3 className="font-bold text-white text-base md:text-lg mb-2">{pkg.name}</h3>
                      <p className="text-text-muted text-sm mb-2 leading-relaxed">{pkg.outcome}</p>
                      <p className="text-accent/90 text-xs font-medium">
                        <span className="text-white/80">Best for: </span>
                        {pkg.bestFor}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-6">
                  <Link href="/contact" className="inline-flex py-2.5 px-5 rounded-lg border-2 border-accent text-accent font-semibold text-sm hover:bg-accent/10 transition-colors">
                    Request pricing for packages
                  </Link>
                </p>
              </>
            ) : (
              <>
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
                {section.id === "ceramic" && (
                  <p className="mt-6">
                    <Link href="/contact" className="inline-flex py-2.5 px-5 rounded-lg border-2 border-accent text-accent font-semibold text-sm hover:bg-accent/10 transition-colors">
                      Request a ceramic quote
                    </Link>
                  </p>
                )}
                {section.id === "correction" && (
                  <>
                    <p className="mt-4 text-sm text-text-muted">Not sure how much correction your paint needs? Send photos and get a quote before booking.</p>
                    <p className="mt-3">
                      <Link href="/contact" className="inline-flex py-2.5 px-5 rounded-lg border-2 border-accent text-accent font-semibold text-sm hover:bg-accent/10 transition-colors">
                        Get a correction quote
                      </Link>
                    </p>
                  </>
                )}
                {section.id === "addons" && (
                  <p className="mt-6">
                    <Link href="/contact" className="inline-flex py-2.5 px-5 rounded-lg border-2 border-accent text-accent font-semibold text-sm hover:bg-accent/10 transition-colors">
                      Request an add-ons quote
                    </Link>
                  </p>
                )}
              </>
            )}
          </div>
        </section>
      ))}

      {/* Mid-page conversion block */}
      <section className="py-12 bg-bg border-t border-white/5">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-center">
          <p className="text-white font-semibold text-lg mb-2">Not sure what level of service your vehicle needs?</p>
          <p className="text-text-muted text-sm md:text-base mb-4 max-w-[50ch] mx-auto">Tell us your vehicle type, condition, and location. We'll recommend the right service before you book — whether that's a package, correction, protection, or maintenance detail.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex py-3.5 px-8 rounded-xl bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors">
              Request a Quote
            </Link>
            <a href="tel:+16478237338" className="inline-flex py-3.5 px-8 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors">
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Proof strip — mini testimonials */}
      <section className="py-12 md:py-16 bg-bg-card">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Real customer feedback"
            title="Why people book — and book again"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {proofQuotes.map((item, i) => (
              <div key={i} className="p-5 rounded-xl border border-border bg-bg/50 text-center">
                <blockquote className="text-white font-medium text-sm md:text-base italic mb-2">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <p className="text-text-muted text-xs">{item.forLabel}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-6">
            <Link href="/reviews" className="inline-flex py-2.5 px-5 rounded-lg border-2 border-accent text-accent font-semibold text-sm hover:bg-accent/10 transition-colors">
              See Reviews
            </Link>
          </p>
        </div>
      </section>

      {/* Why book PitStop Polish */}
      <section className="py-12 md:py-16 bg-bg">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl md:text-2xl font-extrabold text-white text-center mb-8">
            Why drivers choose PitStop Polish
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {whyBookBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-sm text-text-muted">
                <span className="text-accent mt-0.5 flex-shrink-0 font-bold">·</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Ready to book?"
        subtitle="Get a quote or call and we'll help you choose the right service for your vehicle, condition, and location. We come to you across Toronto and the GTA."
        microLine="Book with confidence — quote first, real results, no pressure."
      />
    </>
  );
}
