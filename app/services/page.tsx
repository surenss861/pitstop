import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/conversion/CTASection";
import ServicesAnchorNav from "@/components/conversion/ServicesAnchorNav";
import ServicesPathBlock from "@/components/services/ServicesPathBlock";
import {
  serviceSections,
  packageDetails,
  ceramicBenefits,
  ceramicBestFor,
  correctionSolves,
  correctionEmotionalLine,
  exteriorClusters,
  interiorClusters,
  addonsIntro,
  addonsOrdered,
} from "@/lib/services-data";
import { primaryCtaHref, primaryCtaLabel, secondaryCtaHref, secondaryCtaLabel, bookingUrl } from "@/lib/booking";

export const metadata: Metadata = {
  title: "Mobile Detailing Services — Paint Correction, Ceramic Coating, Toronto",
  description:
    "Premium mobile detailing in Toronto: packages, paint correction, ceramic coating, interior & exterior care, restoration. We come to you — request a quote or call (647) 823-7338.",
};

const featuredQuote = {
  quote: "Done at my driveway — so convenient.",
  forLabel: "For drivers who want the work done without losing half their day.",
};
const supportingQuotes = [
  { quote: "Interior looked like new again.", forLabel: "For vehicles that need a full reset, not just a wipe-down." },
  { quote: "Paint looked way better than expected.", forLabel: "For drivers considering correction, polishing, or coating." },
];

const whyBookPillars = [
  { heading: "We come to you", body: "Driveway, condo, or office. No shop drop-off, no wasted day." },
  { heading: "Quote first", body: "No guessing, no hidden upsell, no pressure before the job starts." },
  { heading: "Real care", body: "Detailing, correction, protection, and maintenance done with actual attention to the result." },
];

export default function ServicesPage() {
  const packagesFeatured = packageDetails.filter((p) => p.layout === "featured");
  const packagesSecondary = packageDetails.filter((p) => p.layout === "secondary");
  const packagesRow2 = packageDetails.filter((p) => p.layout === "row2");
  const packagesRow3 = packageDetails.filter((p) => p.layout === "row3");

  return (
    <>
      {/* Hero — sharper, with buyer chips */}
      <section className="py-16 md:py-20 text-center">
        <div className="max-w-[800px] mx-auto px-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold mb-4">Services</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            Real detailing, correction, and protection — without dropping your car at a shop.
          </h1>
          <p className="text-text-muted text-lg md:text-xl mb-4 max-w-[52ch] mx-auto">
            We come to your driveway, condo, or office across Toronto and the GTA. From interior resets to paint correction and ceramic coating, we help your vehicle look right again — with quote-first pricing and no hidden upsell.
          </p>
          <p className="text-sm text-text-muted mb-6">Toronto & GTA · Quote first · No hidden upsell · We come to you</p>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            {primaryCtaHref.startsWith("http") ? (
              <a href={primaryCtaHref} target="_blank" rel="noopener noreferrer" className="inline-flex py-3.5 px-8 rounded-xl bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors">
                {primaryCtaLabel}
              </a>
            ) : (
              <Link href={primaryCtaHref} className="inline-flex py-3.5 px-8 rounded-xl bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors">
                {primaryCtaLabel}
              </Link>
            )}
            {secondaryCtaHref.startsWith("http") || secondaryCtaHref.startsWith("tel") ? (
              <a href={secondaryCtaHref} {...(secondaryCtaHref.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="inline-flex py-3.5 px-8 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors">
                {secondaryCtaLabel}
              </a>
            ) : (
              <Link href={secondaryCtaHref} className="inline-flex py-3.5 px-8 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors">
                {secondaryCtaLabel}
              </Link>
            )}
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="px-3 py-1.5 rounded-full bg-bg-card border border-border text-text-muted text-xs font-medium">Daily drivers</span>
            <span className="px-3 py-1.5 rounded-full bg-bg-card border border-border text-text-muted text-xs font-medium">Family vehicles</span>
            <span className="px-3 py-1.5 rounded-full bg-bg-card border border-border text-text-muted text-xs font-medium">Luxury / enthusiast cars</span>
          </div>
        </div>
      </section>

      <ServicesPathBlock />
      <ServicesAnchorNav />

      {/* Sections — packages use hierarchy; ceramic/correction get extra blocks; exterior/interior use clusters */}
      {serviceSections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`scroll-mt-32 ${index % 2 === 0 ? "py-14 md:py-16 bg-bg" : "py-14 md:py-16 bg-bg-card"}`}
        >
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
            <div className="mb-6 md:mb-8">
              <SectionHeading label={section.label} title={section.title} subtitle={section.subtitle} align="left" />
              {section.supportCopy && section.id !== "ceramic" && section.id !== "correction" && (
                <p className="text-text-muted text-sm md:text-base mt-4 max-w-[65ch] leading-relaxed">{section.supportCopy}</p>
              )}
            </div>

            {/* Packages: hierarchical layout */}
            {section.id === "packages" && (
              <>
                <div className="space-y-4 md:space-y-6">
                  {/* Row 1: Featured Full Detail + Interior + Exterior */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                    {packagesFeatured.map((pkg) => {
                      const isBook = pkg.ctaKind === "book" && bookingUrl;
                      const pkgHref = (isBook && bookingUrl) ? bookingUrl : "/contact";
                      const pkgCta = isBook ? "Book Now" : "Get a Quote";
                      return (
                        <div key={pkg.name} className="lg:col-span-2 p-6 md:p-8 rounded-2xl border-2 border-accent/30 bg-accent/5 hover:border-accent/50 transition-colors flex flex-col">
                          <p className="text-[10px] uppercase tracking-wider text-accent font-semibold mb-2">Most popular</p>
                          <h3 className="font-bold text-white text-xl md:text-2xl mb-2">{pkg.name}</h3>
                          <p className="text-text-muted text-sm md:text-base mb-2 leading-relaxed">{pkg.outcome}</p>
                          <p className="text-accent/90 text-xs font-medium mb-4"><span className="text-white/80">Best for: </span>{pkg.bestFor}</p>
                          {pkgHref.startsWith("http") ? (
                            <a href={pkgHref} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex py-2.5 px-5 rounded-lg border-2 border-accent text-accent font-semibold text-sm hover:bg-accent/10 transition-colors w-fit">
                              {pkgCta}
                            </a>
                          ) : (
                            <Link href={pkgHref} className="mt-auto inline-flex py-2.5 px-5 rounded-lg border-2 border-accent text-accent font-semibold text-sm hover:bg-accent/10 transition-colors w-fit">
                              {pkgCta}
                            </Link>
                          )}
                        </div>
                      );
                    })}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                      {packagesSecondary.map((pkg) => {
                        const isBook = pkg.ctaKind === "book" && bookingUrl;
                        const pkgHref = (isBook && bookingUrl) ? bookingUrl : "/contact";
                        const pkgCta = isBook ? "Book Now" : "Get a Quote";
                        return (
                          <div key={pkg.name} className="p-4 md:p-5 rounded-xl border border-border bg-bg/50 hover:border-accent/40 transition-colors flex flex-col">
                            <h3 className="font-bold text-white text-base mb-1.5">{pkg.name}</h3>
                            <p className="text-text-muted text-xs mb-1 leading-relaxed">{pkg.outcome}</p>
                            <p className="text-accent/90 text-xs font-medium mb-3"><span className="text-white/80">Best for: </span>{pkg.bestFor}</p>
                            {pkgHref.startsWith("http") ? (
                              <a href={pkgHref} target="_blank" rel="noopener noreferrer" className="mt-auto text-accent font-semibold text-sm hover:underline w-fit">
                                {pkgCta} →
                              </a>
                            ) : (
                              <Link href={pkgHref} className="mt-auto text-accent font-semibold text-sm hover:underline w-fit">
                                {pkgCta} →
                              </Link>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/* Row 2: Basic, Premium, Showroom */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {packagesRow2.map((pkg) => {
                      const isBook = pkg.ctaKind === "book" && bookingUrl;
                      const pkgHref = (isBook && bookingUrl) ? bookingUrl : "/contact";
                      const pkgCta = isBook ? "Book Now" : "Get a Quote";
                      return (
                        <div key={pkg.name} className="p-4 md:p-5 rounded-xl border border-border bg-bg/50 hover:border-accent/40 transition-colors flex flex-col">
                          <h3 className="font-bold text-white text-base mb-1.5">{pkg.name}</h3>
                          <p className="text-text-muted text-xs mb-1 leading-relaxed">{pkg.outcome}</p>
                          <p className="text-accent/90 text-xs font-medium mb-3"><span className="text-white/80">Best for: </span>{pkg.bestFor}</p>
                          {pkgHref.startsWith("http") ? (
                            <a href={pkgHref} target="_blank" rel="noopener noreferrer" className="mt-auto text-accent font-semibold text-sm hover:underline w-fit">
                              {pkgCta} →
                            </a>
                          ) : (
                            <Link href={pkgHref} className="mt-auto text-accent font-semibold text-sm hover:underline w-fit">
                              {pkgCta} →
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  {/* Row 3: Correction, Ceramic, Sale Prep */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {packagesRow3.map((pkg) => {
                      const isBook = pkg.ctaKind === "book" && bookingUrl;
                      const pkgHref = (isBook && bookingUrl) ? bookingUrl : "/contact";
                      const pkgCta = isBook ? "Book Now" : "Get a Quote";
                      return (
                        <div key={pkg.name} className="p-4 md:p-5 rounded-xl border border-border bg-bg/50 hover:border-accent/40 transition-colors flex flex-col">
                          <h3 className="font-bold text-white text-base mb-1.5">{pkg.name}</h3>
                          <p className="text-text-muted text-xs mb-1 leading-relaxed">{pkg.outcome}</p>
                          <p className="text-accent/90 text-xs font-medium mb-3"><span className="text-white/80">Best for: </span>{pkg.bestFor}</p>
                          {pkgHref.startsWith("http") ? (
                            <a href={pkgHref} target="_blank" rel="noopener noreferrer" className="mt-auto text-accent font-semibold text-sm hover:underline w-fit">
                              {pkgCta} →
                            </a>
                          ) : (
                            <Link href={pkgHref} className="mt-auto text-accent font-semibold text-sm hover:underline w-fit">
                              {pkgCta} →
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}

            {/* Ceramic: benefits strip + best-for + grid */}
            {section.id === "ceramic" && (
              <>
                <div className="flex flex-wrap gap-3 mb-4">
                  {ceramicBenefits.map((b) => (
                    <span key={b} className="px-4 py-2 rounded-lg bg-accent/10 border border-accent/20 text-accent font-semibold text-sm">
                      {b}
                    </span>
                  ))}
                </div>
                <p className="text-text-muted text-sm mb-6 max-w-[60ch]">{ceramicBestFor}</p>
                {section.supportCopy && <p className="text-text-muted text-sm mb-6 max-w-[65ch] leading-relaxed">{section.supportCopy}</p>}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {section.items.map((item) => (
                    <div key={item.name} className="px-4 py-3 rounded-xl border border-border bg-bg/50 hover:border-accent/40 transition-colors">
                      <span className="text-white font-medium text-sm md:text-base">{item.name}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6">
                  <Link href="/contact" className="inline-flex py-2.5 px-5 rounded-lg border-2 border-accent text-accent font-semibold text-sm hover:bg-accent/10 transition-colors">
                    Request a Ceramic Quote
                  </Link>
                </p>
              </>
            )}

            {/* Correction: what it solves + emotional line + grid */}
            {section.id === "correction" && (
              <>
                {section.supportCopy && <p className="text-text-muted text-sm mb-4 max-w-[65ch] leading-relaxed">{section.supportCopy}</p>}
                <div className="mb-4">
                  <p className="text-white font-semibold text-sm mb-2">What correction actually solves</p>
                  <ul className="flex flex-wrap gap-2">
                    {correctionSolves.map((s) => (
                      <li key={s} className="px-3 py-1.5 rounded-lg bg-bg-card border border-border text-text-muted text-xs">{s}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-accent/90 text-sm font-medium mb-6 italic max-w-[50ch]">{correctionEmotionalLine}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {section.items.map((item) => (
                    <div key={item.name} className="px-4 py-3 rounded-xl border border-border bg-bg/50 hover:border-accent/40 transition-colors">
                      <span className="text-white font-medium text-sm md:text-base">{item.name}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-text-muted">Not sure how much correction your paint needs? Send photos and get a quote before booking.</p>
                <p className="mt-3">
                  <Link href="/contact" className="inline-flex py-2.5 px-5 rounded-lg border-2 border-accent text-accent font-semibold text-sm hover:bg-accent/10 transition-colors">
                    Get a Correction Quote
                  </Link>
                </p>
              </>
            )}

            {/* Exterior: clusters */}
            {section.id === "exterior" && (
              <div className="space-y-8">
                {exteriorClusters.map((cluster) => (
                  <div key={cluster.heading}>
                    <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">{cluster.heading}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {cluster.items.map((name) => (
                        <div key={name} className="px-4 py-3 rounded-xl border border-border bg-bg/50 hover:border-accent/40 transition-colors">
                          <span className="text-white font-medium text-sm md:text-base">{name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Interior: clusters */}
            {section.id === "interior" && (
              <div className="space-y-8">
                {interiorClusters.map((cluster) => (
                  <div key={cluster.heading}>
                    <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">{cluster.heading}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {cluster.items.map((name) => (
                        <div key={name} className="px-4 py-3 rounded-xl border border-border bg-bg/50 hover:border-accent/40 transition-colors">
                          <span className="text-white font-medium text-sm md:text-base">{name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Restoration: standard grid with updated supportCopy */}
            {section.id === "restoration" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {section.items.map((item) => (
                  <div key={item.name} className="px-4 py-3 rounded-xl border border-border bg-bg/50 hover:border-accent/40 transition-colors">
                    <span className="text-white font-medium text-sm md:text-base">{item.name}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Add-ons: intro + demand-ordered list */}
            {section.id === "addons" && (
              <>
                <p className="text-text-muted text-sm mb-6 max-w-[60ch]">{addonsIntro}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {addonsOrdered.map((name) => (
                    <div key={name} className="px-4 py-3 rounded-xl border border-border bg-bg/50 hover:border-accent/40 transition-colors">
                      <span className="text-white font-medium text-sm md:text-base">{name}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6">
                  <Link href="/contact" className="inline-flex py-2.5 px-5 rounded-lg border-2 border-accent text-accent font-semibold text-sm hover:bg-accent/10 transition-colors">
                    Request an Add-On Quote
                  </Link>
                </p>
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
            {primaryCtaHref.startsWith("http") ? (
              <a href={primaryCtaHref} target="_blank" rel="noopener noreferrer" className="inline-flex py-3.5 px-8 rounded-xl bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors">{primaryCtaLabel}</a>
            ) : (
              <Link href={primaryCtaHref} className="inline-flex py-3.5 px-8 rounded-xl bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors">{primaryCtaLabel}</Link>
            )}
            {secondaryCtaHref.startsWith("http") || secondaryCtaHref.startsWith("tel") ? (
              <a href={secondaryCtaHref} {...(secondaryCtaHref.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="inline-flex py-3.5 px-8 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors">{secondaryCtaLabel}</a>
            ) : (
              <Link href={secondaryCtaHref} className="inline-flex py-3.5 px-8 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors">{secondaryCtaLabel}</Link>
            )}
          </div>
        </div>
      </section>

      {/* Proof strip — one featured, two supporting */}
      <section className="py-12 md:py-16 bg-bg-card">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <SectionHeading label="Real customer feedback" title="Why people book — and book again" align="center" />
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            <div className="lg:col-span-2 p-6 md:p-8 rounded-2xl border-2 border-accent/25 bg-accent/5 flex flex-col justify-center">
              <blockquote className="text-white font-semibold text-lg md:text-xl italic mb-2">&ldquo;{featuredQuote.quote}&rdquo;</blockquote>
              <p className="text-text-muted text-sm">{featuredQuote.forLabel}</p>
            </div>
            <div className="flex flex-col gap-4">
              {supportingQuotes.map((item, i) => (
                <div key={i} className="p-4 md:p-5 rounded-xl border border-border bg-bg/50 flex-1 flex flex-col justify-center">
                  <blockquote className="text-white font-medium text-sm italic mb-1">&ldquo;{item.quote}&rdquo;</blockquote>
                  <p className="text-text-muted text-xs">{item.forLabel}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center mt-6">
            <Link href="/reviews" className="inline-flex py-2.5 px-5 rounded-lg border-2 border-accent text-accent font-semibold text-sm hover:bg-accent/10 transition-colors">
              See Reviews
            </Link>
          </p>
        </div>
      </section>

      {/* Why book — 3 pillars */}
      <section className="py-12 md:py-16 bg-bg">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl md:text-2xl font-extrabold text-white text-center mb-8">Why drivers choose PitStop Polish</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {whyBookPillars.map((pillar) => (
              <div key={pillar.heading} className="p-5 md:p-6 rounded-xl border border-border bg-bg-card text-center">
                <h3 className="font-bold text-accent text-base md:text-lg mb-2">{pillar.heading}</h3>
                <p className="text-text-muted text-sm leading-relaxed m-0">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to book the right service for your vehicle?"
        subtitle="Tell us your vehicle type, condition, and location. We'll recommend the right package, correction, coating, or add-on before you book."
        microLine="Book with confidence — quote first, real results, no pressure."
      />
    </>
  );
}
