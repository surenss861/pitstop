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

      {/* Why: left-aligned, split, statement + stat + proof with labels */}
      <section className="py-20 lg:py-24 bg-bg-card">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <Reveal variant="scale">
            <SectionHeading
              align="left"
              label="Why PitStop Polish"
              title="Why People Choose Us"
            />
          </Reveal>
          <StaggerChildren
            className="grid grid-cols-1 lg:grid-cols-[0.88fr,1fr] gap-12 lg:gap-20 items-start"
            stagger={0.12}
            variant="lateral"
          >
            <div className="stagger-item space-y-6">
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-[32ch]">
                {whyStatement}
              </p>
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-accent/10 border border-accent/25">
                <span className="text-2xl font-extrabold text-accent">5.0</span>
                <span className="text-sm text-text-muted">Google · 13 reviews</span>
              </div>
              <blockquote className="border-l-2 border-accent/50 pl-4 text-sm text-text-muted italic max-w-[28ch]">
                &ldquo;{whyMiniQuote}&rdquo; <cite className="not-italic text-accent/90 text-xs mt-1 block">— Google review · Toronto</cite>
              </blockquote>
            </div>
            <ul className="stagger-item space-y-6">
              {whyProof.map(({ label, line }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2.5" />
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">{label}</p>
                    <p className="text-text-muted leading-relaxed m-0">{line}</p>
                  </div>
                </li>
              ))}
            </ul>
          </StaggerChildren>
        </div>
      </section>

      {/* Services: left-aligned, featured Full Detail + asymmetric grid */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <Reveal variant="scale">
            <div className="text-left mb-12">
              <SectionHeading
                align="left"
                label="Services"
                title="What We Offer"
                subtitle="Interior, exterior, full detail, and add-ons. Clear packages for every need."
              />
            </div>
          </Reveal>
          <StaggerChildren
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            stagger={0.1}
            variant="scale"
          >
            <div className="stagger-item md:col-span-2">
              <ServiceCard
                title="Full Detail"
                description="Interior + exterior in one visit. The complete reset."
                bestFor="Full transformation at your location"
                includes={["Everything in Interior + Exterior", "One visit"]}
                ctaHref="/services#full"
                tag="Full detail"
                featured
              />
            </div>
            <div className="stagger-item">
              <ServiceCard
                title="Interior Detail"
                description="Deep clean seats, carpets, dash, and trim."
                bestFor="Daily drivers, family cars, rideshare vehicles"
                includes={["Vacuum & extraction", "Seat & carpet deep clean", "Dash & trim wipe-down"]}
                ctaHref="/services#interior"
                tag="Interior reset"
              />
            </div>
            <div className="stagger-item">
              <ServiceCard
                title="Exterior Detail"
                description="Wash, clay, polish, and protect. Restore shine and defend your paint."
                bestFor="Anyone wanting a showroom finish"
                includes={["Wash & dry", "Clay bar", "Polish & protection"]}
                ctaHref="/services#exterior"
                tag="Exterior shine"
              />
            </div>
            <div className="stagger-item">
              <ServiceCard
                title="Add-ons & Paint Enhancement"
                description="Headlight restoration, leather conditioning, paint correction, and more."
                bestFor="Extra care where you need it"
                includes={["Headlight restoration", "Leather conditioning", "Paint correction"]}
                ctaText="See options"
                ctaHref="/services#addons"
                tag="Add-ons"
              />
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Reviews: left-aligned, editorial featured quote */}
      <section className="py-20 lg:py-24 bg-bg-card">
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
            <div className="stagger-item">
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

      {/* Service areas: left-aligned, with line motif */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <Reveal variant="scale">
            <div className="text-left mb-12">
              <SectionHeading
                align="left"
                label="Service area"
                title="We Serve Toronto & Surrounding Areas"
                subtitle="Local proof. We come to you."
              />
            </div>
          </Reveal>
          <ServiceAreaGrid />
          <p className="text-left mt-8">
            <Link href="/service-areas" className="text-text-muted hover:text-accent text-sm font-medium">
              Full service areas
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ: centered */}
      <section className="py-20 lg:py-24 bg-bg-card">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <Reveal variant="scale">
            <SectionHeading
              label="FAQ"
              title="Common Questions"
              subtitle="Quick answers before you book."
            />
          </Reveal>
          <FAQAccordion />
          <p className="text-center mt-10">
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
