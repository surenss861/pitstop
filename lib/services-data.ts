/**
 * PitStop Polish — single source of truth for services.
 * Simplified packages: Showroom + In & Out (top); Interior / Exterior packages live in their sections;
 * Paint correction + ceramic as one area; before/after proof strip.
 */

export type ServiceItem = { name: string; description?: string };

export type ServiceSection = {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  supportCopy?: string;
  items: ServiceItem[];
  showCta?: boolean;
};

/** Top-of-page packages only: full Showroom + lighter In & Out */
export type TopPackage = {
  name: string;
  outcome: string;
  bestFor: string;
  featured?: boolean;
  ctaKind: "book" | "quote";
};

export const packagesTop: TopPackage[] = [
  {
    name: "Showroom Detail",
    outcome:
      "Our most complete interior and exterior detail — deep clean, refinement, and finish work for a true showroom-ready result in one visit.",
    bestFor: "Special occasions, resale prep, enthusiasts, and anyone who wants the full reset inside and out.",
    featured: true,
    ctaKind: "book",
  },
  {
    name: "In & Out",
    outcome:
      "Interior and exterior together, stepped down from Showroom: solid vacuum and wipe-down inside, proper wash and protection outside — faster and lighter than a full Showroom pass.",
    bestFor: "Regular upkeep, busy schedules, and vehicles that need a good refresh without the full deep dive.",
    featured: false,
    ctaKind: "book",
  },
];

/** Shown inside the Interior section only */
export const interiorSectionPackage: TopPackage = {
  name: "Interior Detail Package",
  outcome:
    "Focused on the cabin: vacuum, surfaces, glass, mats, seats and carpets (shampoo / extraction as needed), leather care, and odor-conscious cleaning where it matters.",
  bestFor: "Family cars, daily drivers, rideshare vehicles, and interiors that feel tired or grimy.",
  ctaKind: "book",
};

/** Shown inside the Exterior section only */
export const exteriorSectionPackage: TopPackage = {
  name: "Exterior Detail Package",
  outcome:
    "Wash, foam pre-wash, decontamination, wheels and tires, door jambs, trim dressing, and wax or sealant protection — no interior work.",
  bestFor: "Seasonal cleanup, dull paint, road film, and cars that need to look sharp outside only.",
  ctaKind: "book",
};

/** Single combined offering: quote-first */
export const paintCorrectionCeramicPackage: TopPackage = {
  name: "Paint Correction & Ceramic Coating",
  outcome:
    "Machine polishing and correction to improve clarity and gloss, then ceramic coating for lasting protection and easier washing. Quoted as one plan so prep and coating match your paint.",
  bestFor: "Swirls, haze, oxidation, and drivers who want corrected paint locked in with real protection.",
  ctaKind: "quote",
};

/** Before / after rows — swap image paths in /public/images/before-after/ when you have true pairs */
export type BeforeAfterPair = {
  title: string;
  caption: string;
  beforeSrc: string;
  afterSrc: string;
};

export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    title: "Interior transformation",
    caption: "Cabin reset: surfaces, seats, and driver area brought back to a clean, presentable finish.",
    beforeSrc: "/images/gallery/gallery-7.jpg",
    afterSrc: "/images/gallery/gallery-15.jpg",
  },
  {
    title: "Exterior gloss",
    caption: "Wash, decon, and finish work — replace these with your own before/after files anytime.",
    beforeSrc: "/images/gallery/gallery-4.jpg",
    afterSrc: "/images/gallery/gallery-image1.jpg",
  },
  {
    title: "Wheel & detail",
    caption: "Barrel, face, and tire dressed — true pairs live in /public/images/before-after/ when you add them.",
    beforeSrc: "/images/gallery/gallery-9.jpg",
    afterSrc: "/images/gallery/gallery-0.jpg",
  },
];

export const ceramicBenefits = ["Easier washes", "Better gloss retention", "Longer-term protection"];
export const ceramicBestFor =
  "Best for: drivers who plan to keep the vehicle, want easier upkeep, or care about long-term finish quality.";

export const correctionSolves = [
  "Swirl marks in sunlight",
  "Dull or hazy paint",
  "Light scratching",
  "Oxidation and loss of clarity",
];
export const correctionEmotionalLine =
  "Correction is for drivers who look at their paint and know it should look better than it does right now.";

export type ServiceCluster = { heading: string; items: string[] };
export const exteriorClusters: ServiceCluster[] = [
  { heading: "Wash & decontaminate", items: ["Hand Wash", "Foam Cannon Pre-Wash", "Bug Removal", "Tar Removal", "Iron Fallout Removal", "Clay Bar Treatment", "Paint Decontamination"] },
  { heading: "Wheels, tires, and lower body", items: ["Wheel & Rim Deep Cleaning", "Brake Dust Removal", "Tire Dressing", "Wheel Well Cleaning", "Door Jamb Cleaning"] },
  { heading: "Finish & presentation", items: ["Exterior Trim Dressing", "Exterior Trim Restoration", "Chrome & Metal Polishing", "Exterior Window Cleaning", "Exterior Wax Application"] },
];

export const interiorClusters: ServiceCluster[] = [
  { heading: "Core reset", items: ["Full Interior Vacuum", "Interior Surface Wipe Down", "Dashboard & Console Cleaning", "Interior Glass Cleaning", "Interior Sanitizing"] },
  { heading: "Deep cleaning", items: ["Carpet Shampooing", "Fabric Seat Shampoo", "Hot Water Extraction", "Steam Cleaning", "Floor Mat Deep Cleaning"] },
  { heading: "Material care", items: ["Leather Cleaning", "Leather Conditioning", "Headliner Cleaning", "Interior Plastic & Trim Protection"] },
];

export const restorationIntro =
  "These are the high-impact fixes that make a vehicle feel noticeably better without requiring a full overhaul.";

export const addonsIntro =
  "Popular add-ons customers pair with Showroom, In & Out, correction, and coating work.";

export const addonsOrdered = [
  "Headlight Restoration",
  "Engine Bay Detailing",
  "Pet Hair Removal",
  "Odor Removal",
  "Leather Conditioning",
  "Trim Restoration",
  "Wheel Coating",
  "Glass Coating",
  "Paint Correction Upgrade",
  "Ceramic Coating Upgrade",
];

/** Combined paint correction + ceramic menu (short list; quote for specifics) */
export const paintProtectionItems: ServiceItem[] = [
  { name: "1-Stage Paint Enhancement" },
  { name: "2-Stage Paint Correction" },
  { name: "3-Stage Paint Correction" },
  { name: "Machine Polishing & Refinement" },
  { name: "Swirl & Scratch Reduction" },
  { name: "Oxidation Removal" },
  { name: "Ceramic Paint Coating (multi-year options)" },
  { name: "Graphene Coating" },
  { name: "Ceramic Wheel Coating" },
  { name: "Glass / Windshield Ceramic Coating" },
  { name: "Trim Ceramic Coating" },
  { name: "Paint Protection Film (PPF)" },
];

export const serviceSections: ServiceSection[] = [
  {
    id: "packages",
    label: "Packages",
    title: "Core packages",
    subtitle:
      "Showroom Detail is the full inside-and-out experience. In & Out is the lighter both-sides option. Interior-only and exterior-only packages are in those sections below.",
    showCta: true,
    items: [{ name: "Showroom Detail" }, { name: "In & Out" }],
  },
  {
    id: "before-after",
    label: "Before & after",
    title: "Real transformation proof",
    subtitle:
      "Examples of the kind of results we deliver. Drop your own true before/after files into the site when ready — we can point this section at /images/before-after/ for perfect pairs.",
    items: [],
  },
  {
    id: "paint-protection",
    label: "Correction & coating",
    title: "Paint correction & ceramic coating",
    subtitle:
      "One workflow: assess the paint, correct what’s needed, then protect with ceramic so it stays easier to maintain.",
    supportCopy:
      "We quote correction and coating together so the prep matches the protection. Not sure what your paint needs? Send photos and we’ll recommend the right stage before you book.",
    showCta: true,
    items: paintProtectionItems,
  },
  {
    id: "exterior",
    label: "Exterior",
    title: "Exterior detailing services",
    subtitle: "Everything we do on the outside — wash through wax — when you book an exterior package or add exterior work.",
    supportCopy:
      "This is the task list behind the Exterior Detail Package. No interior work here — that stays in the Interior section.",
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
    subtitle: "Everything we do inside the cabin — behind the Interior Detail Package.",
    supportCopy:
      "Interior-only work stays here. Exterior tasks are listed only under Exterior.",
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
    supportCopy: restorationIntro,
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

export type HomepageServiceCard = {
  id: string;
  title: string;
  description: string;
  tag: string;
  href: string;
  ctaKind: "book" | "quote";
  featured?: boolean;
  premiumLine?: string;
  includes?: string[];
  ctaText?: string;
};

export const homepageServiceCards: HomepageServiceCard[] = [
  {
    id: "showroom",
    title: "Showroom Detail",
    description: "Full interior + exterior — our most complete reset in one visit.",
    tag: "Package",
    href: "/services#packages",
    ctaKind: "book",
    featured: true,
    premiumLine: "Inside and out, top tier.",
    includes: ["Deep interior", "Full exterior", "Showroom-ready finish"],
    ctaText: "See Packages",
  },
  {
    id: "inout",
    title: "In & Out",
    description: "Lighter interior and exterior together — great for upkeep between Showroom visits.",
    tag: "Package",
    href: "/services#packages",
    ctaKind: "book",
    includes: ["Interior refresh", "Exterior wash & protect", "One visit"],
    ctaText: "See Packages",
  },
  {
    id: "interior",
    title: "Interior Package",
    description: "Cabin-only deep clean: seats, carpets, trim, glass, and odor-conscious care.",
    tag: "Interior",
    href: "/services#interior",
    ctaKind: "book",
    includes: ["Vacuum & shampoo", "Leather care", "Glass & trim"],
    ctaText: "See Interior",
  },
  {
    id: "exterior",
    title: "Exterior Package",
    description: "Wash, decon, wheels, trim, and wax — outside only.",
    tag: "Exterior",
    href: "/services#exterior",
    ctaKind: "book",
    includes: ["Foam wash", "Clay & decon", "Wax protection"],
    ctaText: "See Exterior",
  },
  {
    id: "correction-ceramic",
    title: "Correction & Ceramic",
    description: "Machine polishing plus ceramic protection — quoted as one plan.",
    tag: "Protection",
    href: "/services#paint-protection",
    ctaKind: "quote",
    includes: ["Paint correction", "Ceramic coating", "Quoted together"],
    ctaText: "Get a Quote",
  },
  {
    id: "addons",
    title: "Add-Ons & Specialty",
    description: "Headlights, engine bay, odor, pet hair, coatings, and more.",
    tag: "Specialty",
    href: "/services#addons",
    ctaKind: "quote",
    ctaText: "See Add-Ons",
    includes: ["Headlights", "Engine bay", "Odor / pet hair"],
  },
];
