import Hero from "@/components/home/Hero";
import ServicePathBlock from "@/components/home/ServicePathBlock";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/conversion/ServiceCard";
import ReviewCard from "@/components/conversion/ReviewCard";
import { homepageServiceCards } from "@/lib/services-data";
import HowItWorks from "@/components/conversion/HowItWorks";
import ServiceAreaGrid from "@/components/conversion/ServiceAreaGrid";
import FAQAccordion from "@/components/conversion/FAQAccordion";
import CTASection from "@/components/conversion/CTASection";
import BeforeAfterShowcase from "@/components/home/BeforeAfterShowcase";
import VideoShowcase from "@/components/home/VideoShowcase";
import MembershipTeaser from "@/components/home/MembershipTeaser";
import Reveal from "@/components/animation/Reveal";
import StaggerChildren from "@/components/animation/StaggerChildren";
import Link from "next/link";
import { gtaCityConfigs } from "@/lib/gta-cities-data";
import { bookingUrl } from "@/lib/booking";

const whyStatement =
  "We come to you. We do the job right. People book us again for a reason.";
const whyMiniQuote = "Done at my driveway — so convenient. Quality was top notch.";
const whyProof = [
  { label: "We come to you", line: "Driveway, condo, office, and approved underground parking." },
  { label: "Quality that shows", line: "Interior, exterior, correction, and protection with real attention to detail." },
  { label: "Toronto & GTA", line: "Toronto, Mississauga, Oakville, Vaughan, Markham, Brampton, Pickering, King City." },
  { label: "Quote-first pricing", line: "Clear recommendations before the job starts." },
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

      <Reveal variant="scale">
        <ServicePathBlock />
      </Reveal>

      {/* Why */}
      <section className="py-16 lg:py-20 bg-bg">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <Reveal variant="scale">
            <SectionHeading
              align="left"
              label="Why PitStop Polish"
              title="Why drivers book with us"
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
          <p className="text-left mt-8">
            <Link href="/reviews" className="inline-flex py-2.5 px-6 rounded-xl border-2 border-accent text-accent font-semibold text-sm hover:bg-accent/10 transition-colors">
              See Reviews
            </Link>
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20 bg-bg-card">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <Reveal variant="scale">
            <div className="text-left mb-12">
              <SectionHeading
                align="left"
                label="Services"
                title="Packages, correction, protection, and care"
                subtitle="From maintenance details to paint correction and ceramic coating — built for drivers who want more than a basic wash."
              />
            </div>
          </Reveal>
          <StaggerChildren
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            stagger={0.08}
            variant="scale"
          >
            {homepageServiceCards.map((card) => {
              const isBook = card.ctaKind === "book" && bookingUrl;
              const ctaHref = (isBook && bookingUrl) ? bookingUrl : "/contact";
              const ctaText = isBook ? "Book Now" : "Get a Quote";
              return (
              <div
                key={card.id}
                className={`stagger-item ${card.featured ? "md:col-span-2 lg:col-span-2" : ""}`}
              >
                <ServiceCard
                  title={card.title}
                  description={card.description}
                  bestFor={card.featured ? "Full transformation at your location" : undefined}
                  includes={card.includes ?? []}
                  ctaHref={ctaHref}
                  ctaText={ctaText}
                  tag={card.tag}
                  featured={card.featured}
                  premiumLine={card.premiumLine}
                />
              </div>
            );
            })}
          </StaggerChildren>
          <p className="text-left mt-8">
            <Link href="/services" className="text-accent font-medium hover:underline">View All Services →</Link>
          </p>
        </div>
      </section>

      <Reveal variant="scale">
        <MembershipTeaser />
      </Reveal>

      {/* Reviews preview */}
      <section className="py-16 lg:py-20 bg-bg">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <Reveal variant="lateral">
            <div className="text-left mb-10">
              <SectionHeading
                align="left"
                label="Reviews"
                title="What Toronto drivers say"
                subtitle="Convenience, quality, pricing, and repeat bookings — from real customers."
              />
            </div>
          </Reveal>
          <div className="flex flex-wrap items-center gap-2 mb-10">
            <span className="text-accent text-2xl tracking-wider">★★★★★</span>
            <span className="text-white font-semibold">5.0</span>
            <span className="text-text-muted">·</span>
            <span className="text-text-muted">13 Google Reviews</span>
          </div>
          <div className="max-w-[900px] mb-10">
            <ReviewCard quote={reviewQuotes[0]} author="Driveway detail customer · Google review · Toronto" featured />
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/reviews" className="inline-flex py-3 px-6 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors">
              See Reviews
            </Link>
            <Link href="/contact" className="inline-flex py-3 px-6 rounded-xl bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <Reveal variant="scale">
        <BeforeAfterShowcase />
      </Reveal>

      <VideoShowcase />

      <HowItWorks />

      {/* Service areas — compressed */}
      <section className="py-10 md:py-14 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <Reveal variant="scale">
            <div className="text-left mb-6 md:mb-8">
              <SectionHeading
                align="left"
                label="Service area"
                title="Toronto & GTA Service Areas"
                subtitle="Primary: Toronto. Expanded: Mississauga, Oakville, Brampton, Vaughan, Markham, Pickering, King City."
              />
            </div>
          </Reveal>
          <ServiceAreaGrid />
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-text-muted text-sm mb-3">Mobile detailing by city — we come to you.</p>
            <div className="flex gap-2 overflow-x-auto pb-1 md:flex-wrap scrollbar-hide snap-x snap-mandatory md:snap-none">
              <Link href="/mobile-detailing-toronto" className="flex-shrink-0 snap-start px-3 py-1.5 rounded-lg bg-bg-card border border-border text-sm text-white/90 hover:border-accent/40 transition-colors">
                Toronto
              </Link>
              {gtaCityConfigs.map((c) => (
                <Link key={c.slug} href={`/${c.slug}`} className="flex-shrink-0 snap-start px-3 py-1.5 rounded-lg bg-bg-card border border-border text-sm text-white/90 hover:border-accent/40 transition-colors">
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
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
