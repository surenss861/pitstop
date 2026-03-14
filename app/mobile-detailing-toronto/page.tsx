import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/conversion/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Mobile Detailing Toronto — Driveway, Condo, Office | PitStop Polish",
  description:
    "Premium mobile detailing in Toronto and the GTA. Interior, exterior, paint correction, and ceramic coating at your driveway, condo, office, or underground parking. Get a quote or call (647) 823-7338.",
};

const convenienceCards = [
  {
    title: "Driveway",
    body: "We set up at your home. No drop-off, no waiting — you get your car back clean at your door.",
  },
  {
    title: "Condo & underground",
    body: "We work in visitor parking or your building's garage. Same quality, same equipment.",
  },
  {
    title: "Office & work",
    body: "Leave your car with us at work. Pick it up clean when you're done.",
  },
];

const trustCards = [
  {
    title: "We come to you",
    body: "Toronto neighbourhoods and GTA cities. Driveway, condo, or office — we bring the detail to your location.",
    icon: "📍",
  },
  {
    title: "Premium, not cheap wash",
    body: "Interior, exterior, paint correction, ceramic coating. Real standards. Our reviews back it up.",
    icon: "✨",
  },
  {
    title: "Fair pricing",
    body: "Quote before any job. No hidden fees. Member plans available for ongoing care.",
    icon: "💰",
  },
];

const proofQuotes = [
  { quote: "Done at my driveway — so convenient.", forLabel: "Convenience" },
  { quote: "Interior looked like new again.", forLabel: "Full reset" },
  { quote: "Paint looked way better than expected.", forLabel: "Correction & protection" },
];

const offerCards = [
  {
    title: "Full Detail",
    body: "Interior + exterior in one visit. The complete reset at your location.",
    cta: "See packages",
    href: "/services#packages",
  },
  {
    title: "Paint Correction & Ceramic Coating",
    body: "Restore clarity and protect with pro-grade correction and coating. We come to you.",
    cta: "See protection",
    href: "/services#ceramic",
  },
  {
    title: "Interior & Exterior",
    body: "Deep clean inside and out. Seats, carpets, wash, polish, protect.",
    cta: "See services",
    href: "/services",
  },
  {
    title: "Membership plans",
    body: "Monthly maintenance, priority booking, member-only savings. Toronto & GTA.",
    cta: "View plans",
    href: "/membership",
  },
];

const torontoCore = [
  "Downtown Toronto",
  "Annex",
  "King West",
  "Liberty Village",
  "Leslieville",
  "Riverdale",
  "Beaches",
  "Danforth",
];

const gtaAreas = [
  "Mississauga",
  "Oakville",
  "Brampton",
  "Vaughan",
  "Markham",
  "Pickering",
  "King City",
];

export default function MobileDetailingTorontoPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20 text-center">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold mb-4">
            Toronto
          </p>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-5">
            Mobile detailing that comes to you — Toronto & GTA
          </h1>

          <p className="text-text-muted text-base md:text-xl leading-relaxed max-w-[52ch] mx-auto mb-6">
            Premium interior, exterior, paint correction, and ceramic coating at
            your driveway, condo, office, or underground parking. Not a cheap
            wash — real detailing with real results.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-text-muted mb-6">
            <span className="text-accent">★★★★★</span>
            <span className="font-semibold text-white">5.0</span>
            <span>Google</span>
            <span className="text-white/30">•</span>
            <span>13 reviews</span>
            <span className="text-white/30">•</span>
            <span>Toronto & GTA</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-accent text-bg font-semibold px-8 py-3.5 hover:bg-accent-hover transition-colors"
            >
              Get a quote
            </Link>
            <a
              href="tel:+16478237338"
              className="inline-flex items-center justify-center rounded-xl border-2 border-accent text-accent font-semibold px-8 py-3.5 hover:bg-accent/10 transition-colors"
            >
              Call (647) 823-7338
            </a>
          </div>
        </div>
      </section>

      {/* Where we come to you */}
      <section className="py-14 md:py-16 bg-bg-card">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Convenience"
            title="Where we come to you"
            subtitle="Same quality whether you're at home, work, or in a condo. We bring everything we need."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            {convenienceCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-border bg-bg/60 px-6 py-7 text-center"
              >
                <h3 className="text-white font-bold text-lg mb-3">{card.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Toronto drivers choose */}
      <section className="py-14 md:py-16 bg-bg">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Trust"
            title="Why Toronto drivers choose PitStop Polish"
            subtitle="Local, mobile, and built for people who want more than a quick wash."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            {trustCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-border bg-bg-card px-6 py-8 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/12 border border-accent/15 flex items-center justify-center text-xl">
                  {card.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{card.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <section className="py-12 md:py-14 bg-bg-card border-y border-white/5">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold mb-4 text-center">
            Real feedback
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {proofQuotes.map((item, i) => (
              <div key={i} className="rounded-xl border border-border bg-bg/50 px-5 py-5 text-center">
                <blockquote className="text-white font-medium text-sm md:text-base italic mb-1">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <p className="text-text-muted text-xs">{item.forLabel}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-5">
            <Link href="/reviews" className="text-accent font-semibold text-sm hover:underline">
              See Reviews →
            </Link>
          </p>
        </div>
      </section>

      {/* What we offer in Toronto */}
      <section className="py-14 md:py-16 bg-bg">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="max-w-[620px] mb-8">
            <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold mb-4">
              Services
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              What we offer in Toronto
            </h2>
            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              All mobile — at your place. Packages, correction, protection, and
              add-ons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {offerCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-border bg-bg/55 px-7 py-7"
              >
                <h3 className="text-white font-bold text-2xl mb-3">{card.title}</h3>
                <p className="text-text-muted text-base leading-relaxed mb-6 max-w-[34ch]">
                  {card.body}
                </p>
                <Link
                  href={card.href}
                  className="inline-flex items-center justify-center rounded-xl border-2 border-accent text-accent font-semibold px-5 py-2.5 hover:bg-accent/10 transition-colors"
                >
                  {card.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover transition-colors"
            >
              Full service menu →
            </Link>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-14 md:py-16 bg-bg-card">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="max-w-[680px] mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Toronto & GTA service areas
            </h2>
            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              Primary: Toronto. Expanded: Mississauga, Oakville, Brampton,
              Vaughan, Markham, Pickering, King City.
            </p>
          </div>

          <div className="text-center text-sm text-text-muted mb-8 max-w-[420px] mx-auto">
            We come to you. Same quality at home or work — Toronto and GTA.
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold mb-4">
                Toronto core
              </p>
              <div className="flex flex-wrap gap-3">
                {torontoCore.map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 rounded-xl border border-border bg-bg-card text-white text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold mb-4">
                Greater Toronto Area
              </p>
              <div className="flex flex-wrap gap-3">
                {gtaAreas.map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 rounded-xl border border-border bg-bg-card text-white text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/service-areas"
              className="inline-flex items-center justify-center rounded-xl border-2 border-accent text-accent font-semibold px-6 py-3 hover:bg-accent/10 transition-colors"
            >
              View full service areas
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Book Toronto mobile detailing"
        subtitle="Tell us your vehicle type, condition, and location. We'll quote the right service before booking and come to you anywhere across Toronto and the GTA."
        microLine="Quote first — real detailing at your location."
      />
    </>
  );
}
