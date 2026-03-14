import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/conversion/ServiceCard";
import ServiceAreaGrid from "@/components/conversion/ServiceAreaGrid";
import CTASection from "@/components/conversion/CTASection";

export const metadata: Metadata = {
  title: "Mobile Detailing Toronto — We Come to You",
  description:
    "Premium mobile detailing in Toronto. Driveway, condo, office, underground parking. Interior, exterior, paint correction, ceramic coating. 5-star rated. Book or call (647) 823-7338.",
};

const useCases = [
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

export default function MobileDetailingTorontoPage() {
  return (
    <>
      {/* Local hero — Toronto-specific convenience */}
      <section className="py-16 md:py-20 text-center">
        <div className="max-w-[720px] mx-auto px-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold mb-4">
            Toronto
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            Mobile detailing that comes to you — Toronto & GTA
          </h1>
          <p className="text-text-muted text-lg mb-4 max-w-[52ch] mx-auto">
            Premium interior, exterior, paint correction, and ceramic coating at your driveway, condo, office, or underground parking. Not a cheap wash — real detailing with real results.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-text-muted mb-6">
            <span className="text-accent text-xl tracking-wider">★★★★★</span>
            <span className="font-semibold text-white">5.0</span>
            <span>Google</span>
            <span>·</span>
            <span>13 reviews</span>
            <span>·</span>
            <span>Toronto & GTA</span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex py-3.5 px-8 rounded-xl bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors"
            >
              Get a quote
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

      {/* Where we come — condo, driveway, office */}
      <section className="py-14 md:py-16 bg-bg-card">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Convenience"
            title="Where we come to you"
            subtitle="Same quality whether you're at home, work, or in a condo. We bring everything we need."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-border bg-bg/50 text-center"
              >
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm m-0 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Toronto drivers choose us — trust points */}
      <section className="py-14 md:py-16 bg-bg">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Trust"
            title="Why Toronto drivers choose PitStop Polish"
            subtitle="Local, mobile, and built for people who want more than a quick wash."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-border bg-bg-card text-center">
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-2xl mx-auto mb-4">📍</div>
              <h3 className="font-bold text-white mb-2">We come to you</h3>
              <p className="text-text-muted text-sm m-0">
                Toronto neighbourhoods and GTA cities. Driveway, condo, or office — we bring the detail to your location.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-bg-card text-center">
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-2xl mx-auto mb-4">✨</div>
              <h3 className="font-bold text-white mb-2">Premium, not cheap wash</h3>
              <p className="text-text-muted text-sm m-0">
                Interior, exterior, paint correction, ceramic coating. Real standards. Our reviews back it up.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-bg-card text-center">
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-2xl mx-auto mb-4">💰</div>
              <h3 className="font-bold text-white mb-2">Fair pricing</h3>
              <p className="text-text-muted text-sm m-0">
                Quote before any job. No hidden fees. Member plans available for ongoing care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Toronto — internal links */}
      <section className="py-14 md:py-16 bg-bg-card">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Services"
            title="What we offer in Toronto"
            subtitle="All mobile — at your place. Packages, correction, protection, and add-ons."
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard
              title="Full Detail"
              description="Interior + exterior in one visit. The complete reset at your location."
              ctaHref="/services#packages"
              ctaText="See packages"
            />
            <ServiceCard
              title="Paint Correction & Ceramic Coating"
              description="Restore clarity and protect with pro-grade correction and coating. We come to you."
              ctaHref="/services#ceramic"
              ctaText="See protection"
            />
            <ServiceCard
              title="Interior & Exterior"
              description="Deep clean inside and out. Seats, carpets, wash, polish, protect."
              ctaHref="/services#interior"
              ctaText="See services"
            />
            <ServiceCard
              title="Membership plans"
              description="Monthly maintenance, priority booking, member-only savings. Toronto & GTA."
              ctaHref="/membership"
              ctaText="View plans"
            />
          </div>
          <p className="mt-6">
            <Link href="/services" className="text-accent font-medium hover:underline">
              Full service menu →
            </Link>
          </p>
        </div>
      </section>

      {/* Service areas — Toronto + GTA */}
      <section className="py-14 md:py-16 bg-bg">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Toronto & GTA service areas"
            subtitle="Primary: Toronto. Expanded: Mississauga, Oakville, Brampton, Vaughan, Markham, Pickering, King City."
            align="left"
          />
          <ServiceAreaGrid />
          <p className="mt-6">
            <Link
              href="/service-areas"
              className="inline-flex py-2.5 px-5 rounded-lg border-2 border-accent text-accent font-semibold text-sm hover:bg-accent/10 transition-colors"
            >
              View full service areas
            </Link>
          </p>
        </div>
      </section>

      <CTASection
        title="Book Toronto mobile detailing"
        subtitle="Get a quote or call. We'll confirm your area and come to you — driveway, condo, or office."
      />
    </>
  );
}
