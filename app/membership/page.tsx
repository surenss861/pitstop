import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import MembershipPricing from "@/components/conversion/MembershipPricing";
import CTASection from "@/components/conversion/CTASection";
import {
  membershipPerks,
  membershipRules,
  membershipFaq,
  membershipUpsellHeadline,
  membershipUpsellCopy,
} from "@/lib/membership-data";

export const metadata: Metadata = {
  title: "Membership Plans — PitStop Polish",
  description:
    "Essential, Premium Care, and Showroom Club. Monthly maintenance plans: priority booking, member-only savings, locked-in value. 3-month minimum. Toronto & GTA.",
};

export default function MembershipPage() {
  return (
    <>
      {/* Hero — maintenance membership positioning */}
      <section className="py-16 md:py-20 text-center">
        <div className="max-w-[700px] mx-auto px-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold mb-4">
            Membership
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            Keep your vehicle clean year-round — without rebooking every time.
          </h1>
          <p className="text-text-muted text-lg mb-4 max-w-[52ch] mx-auto">
            Monthly maintenance for drivers across Toronto and the GTA who want easier upkeep, predictable pricing, and priority booking.
          </p>
          <p className="text-sm text-text-muted mb-6">Vehicle-specific · 3-month minimum · Member pricing on upgrades</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact?ref=membership"
              className="inline-flex py-3.5 px-8 rounded-xl bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors"
            >
              Request to Join
            </Link>
            <a
              href="tel:+16478237338"
              className="inline-flex py-3.5 px-8 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
            >
              Call About Plans
            </a>
          </div>
        </div>
      </section>

      {/* 3-card pricing grid */}
      <section className="py-14 md:py-16 bg-bg">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Plans"
            title="Choose Your Plan"
            subtitle="Three tiers. Same quality. Vehicle-specific. 3-month minimum to activate."
            align="center"
          />
          <MembershipPricing />
        </div>
      </section>

      {/* Every membership includes — perks row */}
      <section className="py-10 md:py-12 bg-bg-card border-y border-white/5">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-lg md:text-xl font-extrabold text-white mb-6 tracking-tight">
            Every membership includes
          </h2>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm md:text-base text-text-muted">
            {membershipPerks.map((perk) => (
              <li key={perk} className="flex items-center gap-2">
                <span className="text-accent">·</span>
                <span>{perk}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Membership details — rules (clear, not scary) */}
      <section className="py-14 md:py-16 bg-bg">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl md:text-2xl font-extrabold text-white mb-6 text-center tracking-tight">
            Membership details
          </h2>
          <ul className="space-y-3 mb-10">
            {membershipRules.map((rule) => (
              <li key={rule} className="flex items-start gap-3 text-text-muted text-sm md:text-base">
                <span className="text-accent font-bold flex-shrink-0 mt-0.5">·</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>

          {/* Upsell block — tie to higher-ticket work */}
          <div className="p-5 rounded-xl border border-accent/20 bg-accent/5 mb-10">
            <h3 className="text-white font-bold text-base mb-2">
              {membershipUpsellHeadline}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed m-0">
              {membershipUpsellCopy}
            </p>
          </div>

          {/* FAQ */}
          <h2 className="text-lg font-extrabold text-white mb-4 text-center tracking-tight">
            Membership FAQ
          </h2>
          <dl className="space-y-5">
            {membershipFaq.map((item) => (
              <div key={item.question}>
                <dt className="text-white font-semibold text-sm md:text-base mb-1">
                  {item.question}
                </dt>
                <dd className="text-text-muted text-sm leading-relaxed m-0 pl-0">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
          <p className="text-center mt-8 text-text-muted text-sm">
            Questions? <Link href="/contact" className="text-accent font-medium">Contact us</Link> or call{" "}
            <a href="tel:+16478237338" className="text-accent font-medium">(647) 823-7338</a>.
          </p>
        </div>
      </section>

      <CTASection
        title="Ready to become a member?"
        subtitle="Request to join with your vehicle and location. We'll confirm your plan and get you on the schedule."
      />
    </>
  );
}
