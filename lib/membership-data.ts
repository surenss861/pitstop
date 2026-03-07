/**
 * PitStop Polish — membership plans.
 * Single source for plans, rules, and condition clause. Protects margin with clear language.
 */

export type MembershipPlan = {
  id: string;
  name: string;
  price: number;
  period: string;
  bestFor: string;
  includes: string[];
  discount: string;
  featured?: boolean;
};

export const membershipPlans: MembershipPlan[] = [
  {
    id: "essential",
    name: "Essential Plan",
    price: 89,
    period: "mo",
    bestFor: "Regular monthly upkeep",
    includes: [
      "Exterior hand wash",
      "Interior vacuum",
      "Surface wipe down",
      "Glass cleaning",
      "Tire shine",
      "10% off full detail upgrades",
    ],
    discount: "10% off full detail upgrades",
    featured: false,
  },
  {
    id: "premium-care",
    name: "Premium Care Plan",
    price: 149,
    period: "mo",
    bestFor: "Consistent cleanliness and light protection",
    includes: [
      "Interior + exterior maintenance detail",
      "Spray wax protection",
      "Door jamb cleaning",
      "Interior vacuum + wipe down",
      "Glass cleaning",
      "Tire shine",
      "15% off premium upgrades",
    ],
    discount: "15% off premium upgrades",
    featured: true,
  },
  {
    id: "showroom-club",
    name: "Showroom Club",
    price: 249,
    period: "mo",
    bestFor: "Near-showroom maintenance year-round",
    includes: [
      "Premium maintenance detail",
      "Spray sealant protection",
      "Interior deep-clean maintenance",
      "Leather conditioning (if applicable)",
      "Engine bay wipe down every 3 months",
      "Glass cleaning · Tire shine · Door jamb cleaning",
      "20% off showroom detail / correction / protection upgrades",
    ],
    discount: "20% off showroom detail, correction & protection upgrades",
    featured: false,
  },
];

export const membershipRules: string[] = [
  "3-month minimum commitment required to activate member pricing and discounts",
  "Unused visits do not roll over",
  "Membership is vehicle-specific",
  "Priority booking included",
  "Excessive dirt, pet hair, stains, salt, smoke, or restoration-level work may require an extra charge",
];

/** Protects labor and margin. Show clearly on membership page. */
export const membershipConditionClause =
  "Membership plans are designed for regularly maintained vehicles. Vehicles requiring heavy restoration, excessive stain removal, pet hair removal, odor treatment, or salt removal may require an additional charge.";
