import Hero from "@/components/home/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/conversion/ServiceCard";
import ReviewCard from "@/components/conversion/ReviewCard";
import HowItWorks from "@/components/conversion/HowItWorks";
import ServiceAreaGrid from "@/components/conversion/ServiceAreaGrid";
import FAQAccordion from "@/components/conversion/FAQAccordion";
import CTASection from "@/components/conversion/CTASection";
import BeforeAfterShowcase from "@/components/home/BeforeAfterShowcase";
import Reveal from "@/components/animation/Reveal";
import StaggerChildren from "@/components/animation/StaggerChildren";
import Link from "next/link";

const whyStatement =
  "We come to you. We do quality work. People already trust us. Booking is easy.";
const whyMiniQuote = "Done at my driveway — so convenient. Quality was top notch.";
const whyProof = [
  { label: "We come to you", line: "No drop-off. Your driveway, condo, or office." },
  { label: "Quality that shows", line: "Interior and exterior, real care in every corner." },
  { label: "Toronto & GTA", line: "Same standard at home or work." },
  { label: "Honest pricing", line: "No hidden fees. No upsell pressure." },
];

const reviewQuotes = [
  "Done at my driveway — so convenient. Quality was top notch and pricing was fair. Will book again.",
  "Attention to detail that actually shows. Interior looked like new. Highly recommend.",
  "Great pricing for the quality. Mobile service made it easy — they came to me. 5 stars.",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Why */}
      <section className="py-16 lg:py-20 bg-bg-card">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <Reveal variant="scale">
            <SectionHeading
              align="left"
              label="Why PitStop Polish"
              title="Why People Choose Us"
            />
          </Reveal>
          <StaggerChildren
            className="grid grid-cols-1 lg:grid-cols-[0.88fr,1fr] gap-12 lg:gap-16 items-start"
            stagger={0.12}
            variant="lateral"
          >
            <div className="stagger-item space-y-6 p-6 lg:p-8 rounded-2xl border border-white/5 bg-bg/50">
              <p className="text-lg lg:text-xl text-white/95 leading-snug max-w-[32ch] font-medium">
                {whyStatement}
              </p>
              <div className="inline-flex items-center gap-4 px-6 py-4 rounded-xl bg-accent/10 border border-accent/30">
                <span className="text-4xl font-extrabold text-accent leading-none">5.0</span>
                <div>
                  <span className="block text-sm font-semibold text-white">Google</span>
                  <span className="text-xs text-text-muted">13 reviews</span>
                </div>
              </div>
              <blockquote className="border-l-2 border-accent pl-4 mt-1 text-base text-white/90 italic max-w-[28ch] leading-relaxed">
                &ldquo;{whyMiniQuote}&rdquo;
                <cite className="not-italic text-accent/90 text-xs font-medium mt-2 block uppercase tracking-wider">Google review · Toronto</cite>
              </blockquote>
            </div>
            <div className="stagger-item space-y-5">
              <div className="hidden lg:flex items-center gap-4" aria-hidden>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent/80 font-semibold">5-star Google rated</span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
              </div>
              <ul className="space-y-5">
              {whyProof.map(({ label, line }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <p className="text-sm font-bold text-white mb-1">{label}</p>
                    <p className="text-text-muted text-sm leading-relaxed m-0">{line}</p>
                  </div>
                </li>
              ))}
              </ul>
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <Reveal variant="scale">
            <div className="text-left mb-12">
              <SectionHeading
                align="left"
                label="Services"
                title="What We Offer"
                subtitle="Packages, correction, protection, and care — at your location. Premium mobile detailing in Toronto."
              />
            </div>
          </Reveal>
          <StaggerChildren
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            stagger={0.08}
            variant="scale"
          >
            <div className="stagger-item md:col-span-2 lg:col-span-2">
              <ServiceCard
                title="Full Detail"
                description="Interior + exterior in one visit. The complete reset."
                bestFor="Full transformation at your location"
                includes={["Everything in Interior + Exterior", "One visit"]}
                ctaHref="/services#full"
                tag="Package"
                featured
                premiumLine="One visit. Full reset."
              />
            </div>
            <div className="stagger-item">
              <ServiceCard
                title="Interior Detail"
                description="Deep clean seats, carpets, dash, and trim."
                bestFor="Daily drivers, family cars, rideshare"
                includes={["Vacuum & extraction", "Seat & carpet deep clean", "Dash & trim"]}
                ctaHref="/services#interior"
                tag="Interior"
              />
            </div>
            <div className="stagger-item">
              <ServiceCard
                title="Exterior Detail"
                description="Wash, clay, polish, and protect. Restore shine and defend your paint."
                bestFor="Showroom finish at your driveway"
                includes={["Wash & dry", "Clay bar", "Polish & protection"]}
                ctaHref="/services#exterior"
                tag="Exterior"
              />
            </div>
            <div className="stagger-item">
              <ServiceCard
                title="Paint Correction"
                description="Remove swirls and scratches. Restore clarity and gloss — not just a wash."
                bestFor="Serious shine and paint care"
                includes={["1–3 stage correction", "Machine polish", "Scratch & swirl removal"]}
                ctaHref="/services#correction"
                tag="Correction"
              />
            </div>
            <div className="stagger-item">
              <ServiceCard
                title="Ceramic Coating"
                description="Long-term paint protection. Ceramic, graphene, wheel and glass coating."
                bestFor="Maximum protection and gloss"
                includes={["Paint coating", "Wheel & glass options", "1–5 year options"]}
                ctaHref="/services#ceramic"
                tag="Protection"
              />
            </div>
            <div className="stagger-item">
              <ServiceCard
                title="Add-Ons & Specialty"
                description="Headlight restoration, leather, odor removal, engine bay, and more."
                bestFor="Extra care where you need it"
                includes={["Headlight restoration", "Leather conditioning", "Odor / pet hair"]}
                ctaText="See options"
                ctaHref="/services#addons"
                tag="Add-ons"
              />
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 lg:py-20 bg-bg-card">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <Reveal variant="lateral">
            <div className="text-left mb-10">
              <SectionHeading
                align="left"
                label="Reviews"
                title="What Toronto Drivers Say"
                subtitle="Real feedback from real customers. 5.0 on Google."
              />
            </div>
          </Reveal>
          <div className="flex flex-wrap items-center gap-2 mb-10">
            <span className="text-accent text-2xl tracking-wider">★★★★★</span>
            <span className="text-white font-semibold">5.0</span>
            <span className="text-text-muted">·</span>
            <span className="text-text-muted">13 Google Reviews</span>
          </div>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.12} variant="lateral">
            <div className="md:col-span-3 stagger-item">
              <ReviewCard quote={reviewQuotes[0]} author="Driveway detail customer · Google review · Toronto" featured />
            </div>
            <div className="stagger-item">
              <ReviewCard quote={reviewQuotes[1]} />
            </div>
            <div className="stagger-item hidden md:block">
              <ReviewCard quote={reviewQuotes[2]} />
            </div>
          </StaggerChildren>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href="/reviews"
              className="inline-flex py-3 px-6 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
            >
              Read more reviews
            </Link>
            <a
              href="https://www.google.com/maps?cid=0x89d4cdaa61cd7613:0xf0845188efaf56c6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex py-3 px-6 rounded-xl text-text-muted hover:text-accent transition-colors"
            >
              See us on Google
            </a>
          </div>
        </div>
      </section>

      <Reveal variant="scale">
        <BeforeAfterShowcase />
      </Reveal>

      <HowItWorks />

      {/* Service areas — compressed */}
      <section className="py-10 md:py-14 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <Reveal variant="scale">
            <div className="text-left mb-6 md:mb-8">
              <SectionHeading
                align="left"
                label="Service area"
                title="We Serve Toronto & Surrounding Areas"
                subtitle="Local proof. We come to you."
              />
            </div>
          </Reveal>
          <ServiceAreaGrid />
          <p className="text-left mt-4 md:mt-6">
            <Link href="/service-areas" className="text-text-muted hover:text-accent text-sm font-medium">
              View full service areas
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-bg-card">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <Reveal variant="scale">
            <SectionHeading
              label="FAQ"
              title="Common Questions"
              subtitle="Quick answers before you book."
            />
          </Reveal>
          <FAQAccordion />
          <p className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-flex py-3 px-6 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
            >
              All FAQs
            </Link>
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
