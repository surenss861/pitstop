import Link from "next/link";
import { membershipPlans, membershipPerks } from "@/lib/membership-data";

export default function MembershipTeaser() {
  return (
    <section className="py-16 lg:py-20 bg-bg-card">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <p className="text-[11px] uppercase tracking-[0.22em] text-accent font-semibold mb-3 text-center">
          Membership
        </p>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-3 tracking-tight">
          Monthly memberships for drivers who want their car consistently clean
        </h2>
        <p className="text-text-muted text-center mb-10 max-w-[48ch] mx-auto">
          Priority booking, member-only savings, and monthly maintenance plans built for Toronto and GTA drivers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {membershipPlans.map((plan) => (
            <Link
              key={plan.id}
              href={`/membership#${plan.id}`}
              className="block p-5 rounded-xl border border-border bg-bg/50 hover:border-accent/40 transition-colors text-center"
            >
              <p className="font-bold text-white mb-1">{plan.name}</p>
              <p className="text-accent text-xl font-extrabold">${plan.price}<span className="text-text-muted text-sm font-medium">/mo</span></p>
              <p className="text-text-muted text-xs mt-2">{plan.valueLine}</p>
            </Link>
          ))}
        </div>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-text-muted mb-8">
          {membershipPerks.slice(0, 4).map((perk) => (
            <li key={perk} className="flex items-center gap-2">
              <span className="text-accent">·</span>
              <span>{perk}</span>
            </li>
          ))}
        </ul>
        <p className="text-center">
          <Link
            href="/membership"
            className="inline-flex py-3.5 px-8 rounded-xl bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors"
          >
            View membership plans
          </Link>
        </p>
      </div>
    </section>
  );
}
