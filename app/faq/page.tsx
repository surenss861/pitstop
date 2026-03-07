import { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/conversion/FAQAccordion";
import CTASection from "@/components/conversion/CTASection";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about PitStop Polish mobile detailing: location, time, water/electricity, pricing, service areas, and what's included.",
};

const faqItems = [
  {
    question: "Do you come to me?",
    answer:
      "Yes. We're fully mobile and come to your driveway, condo, or location in the Toronto area. You don't need to go anywhere.",
  },
  {
    question: "How long does detailing take?",
    answer:
      "It depends on the package. Interior or exterior alone is typically 2–3 hours. A full detail (interior + exterior) can be 4–6 hours. We'll give you a better estimate when you request a quote.",
  },
  {
    question: "Do you need water or electricity?",
    answer:
      "We bring what we need. If you have a tap or outlet available, we can use it; otherwise we're set up to work without. We'll confirm when you book.",
  },
  {
    question: "What's included in a full detail?",
    answer:
      "Full detail = interior deep clean (seats, carpets, dash, trim, windows) plus exterior wash, decontamination (clay if needed), polish, and protection (wax/sealant). Wheels and tires are included.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on vehicle size and condition. We don't list fixed prices because every car is different. Request a quick quote or call (647) 823-7338 for an estimate.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Toronto and surrounding neighbourhoods including East York, Danforth, Downtown, Leslieville, Riverdale, Scarborough, North York, Etobicoke, and more. See our Service Areas page for the full list. If you're not sure, just ask when you request a quote.",
  },
  {
    question: "How do I book?",
    answer:
      "Use our contact form to request a quote (include vehicle type, service, and location) or call (647) 823-7338. We'll confirm availability and price, then schedule your detail.",
  },
  {
    question: "Do you do interior only or exterior only?",
    answer:
      "Yes. You can book interior detailing only, exterior only, or a full detail. We also offer add-ons like headlight restoration, leather conditioning, and paint correction.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="py-16 text-center">
        <div className="max-w-[1100px] mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">FAQ</h1>
          <p className="text-text-muted max-w-[50ch] mx-auto">
            Common questions about our mobile detailing service in Toronto. Don't see your
            question? <Link href="/contact" className="text-accent">Contact us</Link> or call (647)
            823-7338.
          </p>
        </div>
      </section>

      <section className="py-12 bg-bg-card">
        <div className="max-w-[1100px] mx-auto px-4">
          <FAQAccordion items={faqItems} />
          <p className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-flex py-3 px-6 rounded-lg bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors"
            >
              Get a Quote
            </Link>
          </p>
        </div>
      </section>

      <CTASection
        title="Ready to book?"
        subtitle="Request a quote or call — we'll come to you."
      />
    </>
  );
}
