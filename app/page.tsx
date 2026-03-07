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
  {
    icon: "🚗",
    title: "No drop-off. No wasted time.",
    text: "We come to your driveway, condo, or office. Full detail at your location — you don't have to go anywhere.",
  },
  {
    icon: "✨",
    title: "Clean finishes that actually show",
    text: "Interior resets and exterior shine. Real care in every corner. Our reviews back it up.",
  },
  {
    icon: "📍",
    title: "Done right at your location",
    text: "Toronto and surrounding areas. Same quality whether you're at home or work.",
  },
  {
    icon: "💰",
    title: "Pricing that matches the quality",
    text: "Honest rates for the result you get. No hidden fees, no upsell pressure.",
  },
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

      <section className="py-20 bg-bg-card">
        <div className="max-w-[1100px] mx-auto px-4">
          <Reveal>
            <SectionHeading
              label="Why PitStop Polish"
              title="Why People Choose Us"
              subtitle="We come to you. We do quality work. People already trust us. Booking is easy."
            />
          </Reveal>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="stagger-item p-6 lg:p-8 rounded-xl bg-bg border border-border hover:border-accent/40 transition-all text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center text-2xl mx-auto mb-5">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                <p className="text-text-muted leading-relaxed m-0">{card.text}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1100px] mx-auto px-4">
          <Reveal>
            <SectionHeading
              label="Services"
              title="What We Offer"
              subtitle="Interior, exterior, full detail, and add-ons. Clear packages for every need."
            />
          </Reveal>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="stagger-item">
              <ServiceCard
                title="Interior Detail"
                description="Deep clean seats, carpets, dash, and trim. Perfect for daily drivers and rideshare vehicles."
                ctaHref="/services#interior"
                tag="Interior reset"
              />
            </div>
            <div className="stagger-item">
              <ServiceCard
                title="Exterior Detail"
                description="Wash, clay, polish, and protect. Restore shine and defend your paint."
                ctaHref="/services#exterior"
                tag="Exterior shine"
              />
            </div>
            <div className="stagger-item">
              <ServiceCard
                title="Full Detail"
                description="Interior + exterior in one visit. The complete reset."
                ctaHref="/services#full"
                tag="Full detail"
              />
            </div>
            <div className="stagger-item">
              <ServiceCard
                title="Add-ons & Paint Enhancement"
                description="Headlight restoration, leather conditioning, paint correction, and more."
                ctaText="See options"
                ctaHref="/services#addons"
                tag="Add-ons"
              />
            </div>
          </StaggerChildren>
        </div>
      </section>

      <section className="py-20 bg-bg-card">
        <div className="max-w-[1100px] mx-auto px-4">
          <Reveal>
            <SectionHeading
              label="Reviews"
              title="What Toronto Drivers Say"
              subtitle="Real feedback from real customers. 5.0 on Google."
            />
          </Reveal>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <span className="text-accent text-2xl tracking-wider">★★★★★</span>
            <span className="text-white font-semibold">5.0</span>
            <span className="text-text-muted">·</span>
            <span className="text-text-muted">13 Google Reviews</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-3">
              <ReviewCard quote={reviewQuotes[0]} featured />
            </div>
            <ReviewCard quote={reviewQuotes[1]} />
            <ReviewCard quote={reviewQuotes[2]} />
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
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

      <Reveal>
        <BeforeAfterShowcase />
      </Reveal>

      <HowItWorks />

      <section className="py-20">
        <div className="max-w-[1100px] mx-auto px-4">
          <Reveal>
            <SectionHeading
              label="Service area"
              title="We Serve Toronto & Surrounding Areas"
              subtitle="Local proof. We come to you."
            />
          </Reveal>
          <ServiceAreaGrid />
          <p className="text-center mt-8">
            <Link href="/service-areas" className="text-text-muted hover:text-accent text-sm">
              Full service areas
            </Link>
          </p>
        </div>
      </section>

      <section className="py-20 bg-bg-card">
        <div className="max-w-[1100px] mx-auto px-4">
          <Reveal>
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
