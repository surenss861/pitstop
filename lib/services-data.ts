/**
 * PitStop Polish — single source of truth for services.
 * Drives: homepage cards, services page sections, nav anchors, metadata.
 * Order: Packages → Ceramic → Correction → Exterior → Interior → Restoration → Add-Ons
 */

export type ServiceItem = { name: string; description?: string };

export type ServiceSection = {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  /** Paragraph under subtitle — why this matters, who it's for */
  supportCopy?: string;
  items: ServiceItem[];
  showCta?: boolean;
};

/** Package-level copy for sales framing: outcome + best-for */
export type PackageDetail = {
  name: string;
  outcome: string;
  bestFor: string;
};

export const packageDetails: PackageDetail[] = [
  { name: "Basic Detail", outcome: "A quick refresh for vehicles that need regular maintenance, not a full restoration.", bestFor: "Routine upkeep, light dirt, and in-between visits" },
  { name: "Interior Detail", outcome: "Deep cleaning for seats, carpets, trim, mats, glass, and everyday buildup.", bestFor: "Family vehicles, daily drivers, rideshare use, and neglected interiors" },
  { name: "Exterior Detail", outcome: "A proper exterior clean, decontamination, and finish protection — not just a quick wash.", bestFor: "Dull paint, seasonal cleanup, and vehicles that need gloss brought back" },
  { name: "Full Detail", outcome: "Interior and exterior care in one visit for a full vehicle reset.", bestFor: "Drivers who want the car feeling clean, sharp, and fully refreshed again" },
  { name: "Premium Detail", outcome: "A stronger reset with deeper cleaning and added finish care.", bestFor: "Vehicles that need more than maintenance but not full correction" },
  { name: "Showroom Detail", outcome: "A higher-level detail for drivers who want the cleanest, sharpest version of the vehicle possible.", bestFor: "Special occasions, resale prep, enthusiast care, and full presentation" },
  { name: "Paint Correction Package", outcome: "Correction and polishing work to improve clarity, reduce swirls, and restore gloss before protection is applied.", bestFor: "Faded paint, visible swirls, oxidation, and drivers who want a sharper finish" },
  { name: "Ceramic Coating Package", outcome: "Paint prep, refinement, and long-term protection in one package.", bestFor: "Drivers who want easier upkeep, better gloss retention, and stronger long-term protection" },
  { name: "Sale Prep Detail", outcome: "Focused detailing to help your vehicle show better before sale or trade-in.", bestFor: "Resale, dealer trade-in prep, and getting the car presentation-ready" },
];

export const serviceSections: ServiceSection[] = [
  {
    id: "packages",
    label: "Packages",
    title: "Popular packages",
    subtitle: "Start with the level of work your vehicle actually needs. Whether you need a quick reset or a full transformation, we'll help you choose the right package before the job begins.",
    showCta: true,
    items: [
      { name: "Basic Detail" },
      { name: "Interior Detail" },
      { name: "Exterior Detail" },
      { name: "Full Detail" },
      { name: "Premium Detail" },
      { name: "Showroom Detail" },
      { name: "Paint Correction Package" },
      { name: "Ceramic Coating Package" },
      { name: "Sale Prep Detail" },
    ],
  },
  {
    id: "ceramic",
    label: "Protection",
    title: "Ceramic coatings and paint protection",
    subtitle: "For drivers who want easier maintenance, stronger gloss retention, and longer-term surface protection against weather, road grime, and everyday use.",
    supportCopy: "Ceramic protection works best when the paint has been properly cleaned, refined, and prepped first. If you're not sure what level of prep your vehicle needs, send photos and we'll quote the right approach.",
    showCta: true,
    items: [
      { name: "Ceramic Paint Coating" },
      { name: "Graphene Coating" },
      { name: "1-Year Ceramic Coating" },
      { name: "3-Year Ceramic Coating" },
      { name: "5-Year Ceramic Coating" },
      { name: "Paint Protection Film (PPF)" },
      { name: "Ceramic Wheel Coating" },
      { name: "Glass / Windshield Ceramic Coating" },
      { name: "Trim Ceramic Coating" },
      { name: "Interior Ceramic Coating" },
      { name: "Leather Protection Coating" },
      { name: "Fabric Protection Coating" },
      { name: "Paint Sealant Protection" },
      { name: "Exterior Wax Protection" },
    ],
  },
  {
    id: "correction",
    label: "Correction",
    title: "Paint correction and polishing",
    subtitle: "Built for vehicles with swirl marks, dull paint, haze, oxidation, and light defects that take away from the finish.",
    supportCopy: "Correction isn't just about making paint shiny. It's about improving clarity, reducing visible defects, and bringing gloss back before protection is applied.",
    items: [
      { name: "1-Stage Paint Enhancement" },
      { name: "2-Stage Paint Correction" },
      { name: "3-Stage Paint Correction" },
      { name: "Machine Polishing" },
      { name: "Paint Refinement Polish" },
      { name: "High-Gloss Finishing Polish" },
      { name: "Scratch Removal" },
      { name: "Swirl Mark Removal" },
      { name: "Oxidation Removal" },
      { name: "Wet Sanding" },
      { name: "Buffing & Paint Leveling" },
      { name: "Paint Clarity Restoration" },
    ],
  },
  {
    id: "exterior",
    label: "Exterior",
    title: "Exterior detailing services",
    subtitle: "Core exterior care for vehicles that need more than a basic wash. Clean paint, decontaminated surfaces, properly cleaned wheels, and finish protection applied the right way.",
    supportCopy: "This is where gloss starts. Exterior detailing removes buildup, contamination, and surface mess so the vehicle looks cleaner and presents better.",
    items: [
      { name: "Hand Wash" },
      { name: "Foam Cannon Pre-Wash" },
      { name: "Bug Removal" },
      { name: "Tar Removal" },
      { name: "Iron Fallout Removal" },
      { name: "Clay Bar Treatment" },
      { name: "Paint Decontamination" },
      { name: "Wheel & Rim Deep Cleaning" },
      { name: "Brake Dust Removal" },
      { name: "Tire Dressing" },
      { name: "Wheel Well Cleaning" },
      { name: "Door Jamb Cleaning" },
      { name: "Exterior Trim Dressing" },
      { name: "Exterior Trim Restoration" },
      { name: "Chrome & Metal Polishing" },
      { name: "Exterior Window Cleaning" },
      { name: "Exterior Wax Application" },
    ],
  },
  {
    id: "interior",
    label: "Interior",
    title: "Interior detailing services",
    subtitle: "For interiors that feel dusty, stained, used, neglected, or just not good to sit in anymore.",
    supportCopy: "From daily-driver buildup and family mess to rideshare wear and seasonal grime, interior detailing is one of the fastest ways to make a vehicle feel right again.",
    items: [
      { name: "Full Interior Vacuum" },
      { name: "Interior Surface Wipe Down" },
      { name: "Dashboard & Console Cleaning" },
      { name: "Carpet Shampooing" },
      { name: "Fabric Seat Shampoo" },
      { name: "Hot Water Extraction" },
      { name: "Steam Cleaning" },
      { name: "Leather Cleaning" },
      { name: "Leather Conditioning" },
      { name: "Headliner Cleaning" },
      { name: "Floor Mat Deep Cleaning" },
      { name: "Interior Plastic & Trim Protection" },
      { name: "Interior Glass Cleaning" },
      { name: "Interior Sanitizing" },
    ],
  },
  {
    id: "restoration",
    label: "Restoration",
    title: "Restoration and specialty services",
    subtitle: "Targeted services for the parts of the vehicle that make it feel older, rougher, or more neglected than it should.",
    supportCopy: "These are the fixes and focused upgrades that go beyond maintenance and make a visible difference.",
    items: [
      { name: "Headlight Restoration" },
      { name: "Black Trim Restoration" },
      { name: "Leather Restoration" },
      { name: "Scratch Repair" },
      { name: "Paint Touch-Ups" },
      { name: "Engine Bay Detailing" },
      { name: "Odor Removal" },
      { name: "Ozone Treatment" },
      { name: "Smoke Smell Removal" },
      { name: "Pet Hair Removal" },
      { name: "Salt Stain Removal" },
      { name: "Tree Sap Removal" },
      { name: "Water Spot Removal" },
      { name: "Windshield Water Repellent Treatment" },
    ],
  },
  {
    id: "addons",
    label: "Add-ons",
    title: "Add-ons and extras",
    subtitle: "Small upgrades that improve the finish, comfort, and long-term condition of the vehicle.",
    showCta: true,
    items: [
      { name: "Headlight Restoration" },
      { name: "Leather Conditioning" },
      { name: "Paint Correction Upgrade" },
      { name: "Ceramic Coating Upgrade" },
      { name: "Engine Bay Detailing" },
      { name: "Odor Removal" },
      { name: "Pet Hair Removal" },
      { name: "Trim Restoration" },
      { name: "Wheel Coating" },
      { name: "Glass Coating" },
    ],
  },
];

/** Homepage: 6 premium service cards. Deep-link to /services#anchor */
export type HomepageServiceCard = {
  id: string;
  title: string;
  description: string;
  tag: string;
  href: string;
  featured?: boolean;
  /** Short premium line (featured card only) */
  premiumLine?: string;
  /** Bullets for includes (optional, shown on card) */
  includes?: string[];
  /** Override CTA label (e.g. "See options") */
  ctaText?: string;
};

export const homepageServiceCards: HomepageServiceCard[] = [
  {
    id: "full",
    title: "Full Detail",
    description: "Interior + exterior, one visit. The best place to start when your vehicle needs a full reset.",
    tag: "Package",
    href: "/services#packages",
    featured: true,
    premiumLine: "One visit. Full reset.",
    includes: ["Everything in Interior + Exterior", "One visit"],
    ctaText: "See Full Detail",
  },
  {
    id: "interior",
    title: "Interior Detail",
    description: "Vacuum, wipe down, extraction, stain-focused cleaning, trim and glass care.",
    tag: "Interior",
    href: "/services#interior",
    includes: ["Vacuum & extraction", "Seat & carpet deep clean", "Dash & trim"],
    ctaText: "See Interior Services",
  },
  {
    id: "exterior",
    title: "Exterior Detail",
    description: "Wash, decontamination, clay, gloss boost, trim and wheel care.",
    tag: "Exterior",
    href: "/services#exterior",
    includes: ["Wash & dry", "Clay bar", "Polish & protection"],
    ctaText: "See Exterior Services",
  },
  {
    id: "correction",
    title: "Paint Correction",
    description: "1-stage to 3-stage machine polishing for swirl marks, scratches, oxidation, and gloss.",
    tag: "Correction",
    href: "/services#correction",
    includes: ["1–3 stage correction", "Machine polish", "Scratch & swirl removal"],
    ctaText: "See Correction",
  },
  {
    id: "ceramic",
    title: "Ceramic Coating",
    description: "Paint, wheel, and glass protection with 1-year, 3-year, and 5-year options.",
    tag: "Protection",
    href: "/services#ceramic",
    includes: ["Paint coating", "Wheel & glass options", "1–5 year options"],
    ctaText: "See Coating Options",
  },
  {
    id: "addons",
    title: "Add-Ons & Specialty",
    description: "Headlights, leather, odor removal, pet hair, engine bay, trim, and more.",
    tag: "Specialty",
    href: "/services#addons",
    ctaText: "See Add-Ons",
    includes: ["Headlight restoration", "Leather conditioning", "Odor / pet hair"],
  },
];
