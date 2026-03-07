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

const whyCards = [
  { icon: "🚗", title: "We Come to You", text: "Driveway, condo, or office — we bring the full detail to your location. No drop-off, no wait." },
  { icon: "✨", title: "Interior & Exterior", text: "Full interior resets and exterior shine. One package or à la carte — your choice." },
  { icon: "🔍", title: "Attention to Detail", text: "Real care in every corner. Our reviews say it — the finish shows." },
  { icon: "💰", title: "Great Pricing", text: "Honest pricing for the quality you get. No hidden fees, no upsell pressure." },
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

      <section className="py-16 bg-bg-card">
        <div className="max-w-[1100px] mx-auto px-4">
          <Reveal>
            <SectionHeading
              title="Why People Choose PitStop Polish"
              subtitle="We come to you. We do quality work. People already trust us. Booking is easy."
            />
          </Reveal>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="stagger-item p-6 rounded-xl bg-bg border border-border hover:border-accent transition-colors text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center text-2xl mx-auto mb-4">
                  {card.icon}
                </div>
                <h3 className="font-bold text-white mb-2">{card.title}</h3>
                <p className="text-text-muted text-sm m-0">{card.text}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1100px] mx-auto px-4">
          <Reveal>
            <SectionHeading title="What We Offer" />
          </Reveal>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="stagger-item">
              <ServiceCard
                title="Interior Detail"
                description="Deep clean seats, carpets, dash, and trim. Perfect for daily drivers and rideshare vehicles."
                ctaHref="/services#interior"
              />
            </div>
            <div className="stagger-item">
              <ServiceCard
                title="Exterior Detail"
                description="Wash, clay, polish, and protect. Restore shine and defend your paint."
                ctaHref="/services#exterior"
              />
            </div>
            <div className="stagger-item">
              <ServiceCard
                title="Full Detail"
                description="Interior + exterior in one visit. The complete reset."
                ctaHref="/services#full"
              />
            </div>
            <div className="stagger-item">
              <ServiceCard
                title="Add-ons & Paint Enhancement"
                description="Headlight restoration, leather conditioning, paint correction, and more."
                ctaText="See options"
                ctaHref="/services#addons"
              />
            </div>
          </StaggerChildren>
        </div>
      </section>

      <section className="py-16 bg-bg-card">
        <div className="max-w-[1100px] mx-auto px-4">
          <Reveal>
            <SectionHeading title="What Toronto Drivers Say" />
          </Reveal>
          <p className="text-center text-text-muted mb-8">
            ★★★★★ 5.0 · 13 Google Reviews · Trusted by Toronto drivers
          </p>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewQuotes.map((quote) => (
              <div key={quote.slice(0, 20)} className="stagger-item">
                <ReviewCard quote={quote} />
              </div>
            ))}
          </StaggerChildren>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link
              href="/reviews"
              className="inline-flex py-2 px-5 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
            >
              Read more reviews
            </Link>
            <a
              href="https://www.google.com/maps?cid=0x89d4cdaa61cd7613:0xf0845188efaf56c6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex py-2 px-5 rounded-lg text-text-muted hover:text-accent transition-colors"
            >
              See us on Google
            </a>
          </div>
        </div>
      </section>

      <Reveal>
        <BeforeAfterShowcase />
      </Reveal>

      <HowItWorks />

      <section className="py-16">
        <div className="max-w-[1100px] mx-auto px-4">
          <Reveal>
            <SectionHeading title="We Serve Toronto & Surrounding Areas" />
          </Reveal>
          <ServiceAreaGrid />
          <p className="text-center mt-8">
            <Link href="/service-areas" className="text-text-muted hover:text-accent text-sm">
              Full service areas
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 bg-bg-card">
        <div className="max-w-[1100px] mx-auto px-4">
          <Reveal>
            <SectionHeading title="Common Questions" />
          </Reveal>
          <FAQAccordion />
          <p className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-flex py-2 px-5 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
            >
              All FAQs
            </Link>
          </p>
        </div>
      </section>

      <CTASection
        title="Ready to get your car detailed without leaving home?"
        subtitle="Book now or call for a quick quote. We'll come to you."
      />
    </>
  );
}
