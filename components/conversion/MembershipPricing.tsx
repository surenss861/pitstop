import Link from "next/link";
import { membershipPlans } from "@/lib/membership-data";

export default function MembershipPricing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {membershipPlans.map((plan) => (
        <div
          key={plan.id}
          className={`rounded-xl border overflow-hidden flex flex-col ${
            plan.featured
              ? "border-accent/40 bg-gradient-to-b from-accent/[0.08] to-bg-card shadow-[0_0_0_1px_rgba(201,162,39,0.15)] md:scale-[1.02]"
              : "border-border bg-bg-card hover:border-accent/30"
          }`}
        >
          {plan.featured && (
            <div className="bg-accent/15 border-b border-accent/20 px-4 py-2 text-center">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-accent">
                Most popular
              </span>
            </div>
          )}
          <div className="p-6 lg:p-8 flex-1 flex flex-col">
            <h3 className="text-xl font-extrabold text-white tracking-tight mb-1">
              {plan.name}
            </h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-3xl lg:text-4xl font-extrabold text-accent">
                ${plan.price}
              </span>
              <span className="text-text-muted text-sm font-medium">/{plan.period}</span>
            </div>
            <p className="text-text-muted text-sm mb-6 leading-relaxed">
              {plan.bestFor}
            </p>
            <ul className="space-y-2.5 mb-6 flex-1">
              {plan.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/90">
                  <span className="text-accent mt-0.5 flex-shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact?ref=membership"
              className="mt-auto inline-flex justify-center py-3.5 px-6 rounded-xl font-semibold text-sm transition-colors border-2 border-accent text-accent hover:bg-accent/10"
            >
              Request to join
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
