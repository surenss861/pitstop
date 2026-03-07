import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import MembershipPricing from "@/components/conversion/MembershipPricing";
import CTASection from "@/components/conversion/CTASection";
import {
  membershipRules,
  membershipConditionClause,
} from "@/lib/membership-data";

export const metadata: Metadata = {
  title: "Membership Plans — PitStop Polish",
  description:
    "Essential, Premium Care, and Showroom Club memberships. Predictable monthly care, priority booking, member discounts. 3-month minimum. Toronto & GTA. Request to join.",
};

export default function MembershipPage() {
  return (
    <>
      <section className="py-16 md:py-20 text-center">
        <div className="max-w-[700px] mx-auto px-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold mb-4">
            Membership
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            Repeat care. Predictable pricing. Priority booking.
          </h1>
          <p className="text-text-muted text-lg mb-6 max-w-[50ch] mx-auto">
            Turn one-off details into monthly maintenance. Members get scheduled visits, member-only discounts on upgrades, and priority booking — so your car stays clean and protected year-round.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact?ref=membership"
              className="inline-flex py-3.5 px-8 rounded-xl bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors"
            >
              Request to join
            </Link>
            <a
              href="tel:+16478237338"
              className="inline-flex py-3.5 px-8 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
            >
              Call to ask about plans
            </a>
          </div>
        </div>
      </section>

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

      <section className="py-14 md:py-16 bg-bg-card">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl md:text-2xl font-extrabold text-white mb-6 text-center tracking-tight">
            How it works
          </h2>
          <ul className="space-y-3 mb-10">
            {membershipRules.map((rule) => (
              <li key={rule} className="flex items-start gap-3 text-text-muted text-sm md:text-base">
                <span className="text-accent font-bold flex-shrink-0 mt-0.5">·</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
          <div className="p-5 rounded-xl border border-amber-500/20 bg-amber-500/5">
            <p className="text-sm text-amber-200/90 leading-relaxed m-0">
              {membershipConditionClause}
            </p>
          </div>
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
