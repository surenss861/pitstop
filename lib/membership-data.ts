/**
 * PitStop Polish — membership plans.
 * Maintenance membership (not unlimited cleaning). Protects margin with clear rules.
 */

export type MembershipPlan = {
  id: string;
  name: string;
  price: number;
  period: string;
  bestFor: string;
  includes: string[];
  valueLine: string;
  ctaLabel: string;
  featured?: boolean;
};

export const membershipPlans: MembershipPlan[] = [
  {
    id: "essential",
    name: "Essential Plan",
    price: 89,
    period: "month",
    bestFor:
      "Drivers who want a clean, maintained vehicle every month without overpaying for a full reset.",
    includes: [
      "1 monthly exterior hand wash",
      "Interior vacuum",
      "Interior surface wipe down",
      "Interior + exterior glass cleaning",
      "Tire shine",
      "10% off full detail upgrades",
    ],
    valueLine: "$120+ in monthly service value",
    ctaLabel: "Join Essential",
    featured: false,
  },
  {
    id: "premium-care",
    name: "Premium Care Plan",
    price: 149,
    period: "month",
    bestFor:
      "Drivers who want their vehicle consistently clean inside and out, with light protection built in.",
    includes: [
      "1 monthly interior + exterior maintenance detail",
      "Spray wax protection",
      "Interior vacuum + wipe down",
      "Door jamb cleaning",
      "Interior + exterior glass cleaning",
      "Tire shine",
      "15% off premium detail upgrades",
    ],
    valueLine: "$200+ in monthly service value",
    ctaLabel: "Join Premium Care",
    featured: true,
  },
  {
    id: "showroom-club",
    name: "Showroom Club",
    price: 249,
    period: "month",
    bestFor:
      "Drivers who want their vehicle maintained to a near-showroom standard year-round.",
    includes: [
      "1 monthly premium maintenance detail",
      "Spray sealant protection",
      "Interior deep-clean maintenance",
      "Leather conditioning (if applicable)",
      "Interior + exterior glass cleaning",
      "Tire shine",
      "Door jamb cleaning",
      "Engine bay wipe down every 3 months",
      "20% off showroom detail, paint correction, or ceramic coating upgrades",
    ],
    valueLine: "$350+ in monthly service value",
    ctaLabel: "Join Showroom Club",
    featured: false,
  },
];

/** "Every membership includes" — perks row under the cards */
export const membershipPerks: string[] = [
  "Priority booking",
  "Member-only upgrade pricing",
  "Easy monthly upkeep",
  "Locked-in value",
  "Vehicle-specific care",
];

/** Membership details — shown clearly, not in a scary way */
export const membershipRules: string[] = [
  "3-month minimum commitment required",
  "Membership is vehicle-specific",
  "Unused visits do not roll over",
  "Plans are designed for regularly maintained vehicles",
  "Excessive pet hair, stains, salt buildup, smoke odor, or restoration-level cleaning may require an additional charge",
  "Upgrade services can be added at discounted member pricing",
];

/** Short FAQ for membership section (3–4 questions max) */
export type MembershipFaqItem = { question: string; answer: string };

export const membershipFaq: MembershipFaqItem[] = [
  {
    question: "Do unused visits roll over?",
    answer:
      "No. Membership visits are use-it-that-month visits and do not roll over.",
  },
  {
    question: "Is the membership tied to one vehicle?",
    answer: "Yes. Memberships are vehicle-specific.",
  },
  {
    question: "What if my vehicle needs heavy restoration-level cleaning?",
    answer:
      "Membership plans are designed for regularly maintained vehicles. Heavy pet hair, stains, salt, smoke, or restoration-level work may require an additional charge.",
  },
  {
    question: "Can I upgrade to bigger services?",
    answer:
      "Yes. Members get discounted pricing on full details, showroom details, paint correction, ceramic coating, and other upgrades.",
  },
];

/** Upsell block — tie memberships to higher-ticket work */
export const membershipUpsellHeadline = "Want longer-lasting protection?";
export const membershipUpsellCopy =
  "Members can upgrade into paint correction, ceramic coating, wheel coating, glass coating, and other premium services at discounted rates.";
