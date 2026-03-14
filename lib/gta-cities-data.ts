/**
 * PitStop Polish — GTA city pages.
 * One entry per city; used by shared CityLandingPage for SEO and local conversion.
 * Title/description use plan format: "Mobile Detailing [City] | Paint Correction & Ceramic Coating | PitStop Polish"
 */

export type GtaCityConfig = {
  slug: string;
  name: string;
  /** Page title (plan format: Mobile Detailing [City] | Paint Correction & Ceramic Coating | PitStop Polish) */
  title: string;
  /** Meta description */
  description: string;
  /** Hero eyebrow (e.g. "Mississauga") */
  eyebrow: string;
  /** Hero headline */
  headline: string;
  /** Hero subcopy */
  subcopy: string;
  /** Trust section title */
  trustTitle: string;
  /** Services section title */
  servicesTitle: string;
  /** Service area section subtitle */
  areaSubtitle: string;
  /** Final CTA title */
  ctaTitle: string;
  /** Final CTA subtitle */
  ctaSubtitle: string;
};

/** Local FAQ shared across GTA city pages. Use [City] in answers for replacement. */
export const gtaCityFaq: { question: string; answer: string }[] = [
  { question: "Do you come to condos in [City]?", answer: "Yes. Where building rules allow, we work in visitor parking, underground parking, or building-access areas in [City] and across the GTA. Tell us your setup when you request a quote." },
  { question: "Do you work in underground parking?", answer: "Yes, where the building or property allows. We bring our own equipment and power. Confirm your building’s rules and we’ll work around them." },
  { question: "Do you service driveways and office lots in [City]?", answer: "Yes. We come to your home driveway, office parking lot, or other approved location in [City] and nearby GTA areas. Same quality wherever you are." },
  { question: "Do I need to provide water or power?", answer: "No. We’re fully mobile and bring what we need. If you have a tap or outlet we can use, it can help for some jobs, but it’s not required." },
  { question: "Can I book ceramic coating or correction in [City]?", answer: "Yes. We offer paint correction and ceramic coating at your location across [City] and the GTA. Request a quote and we’ll recommend the right level of service." },
];

/** Valid city slugs for root-level /[city] routes. */
export const gtaCitySlugs = ["mississauga", "oakville", "vaughan", "markham", "brampton", "pickering", "king-city"] as const;

export type GtaCitySlug = (typeof gtaCitySlugs)[number];

export function isGtaCitySlug(slug: string): slug is GtaCitySlug {
  return gtaCitySlugs.includes(slug as GtaCitySlug);
}

export const gtaCityConfigs: GtaCityConfig[] = [
  {
    slug: "mississauga",
    name: "Mississauga",
    title: "Mobile Detailing Mississauga | Paint Correction & Ceramic Coating | PitStop Polish",
    description:
      "Premium mobile detailing, paint correction, and ceramic coating in Mississauga. We come to your driveway, condo, office, or approved parking across Mississauga and nearby GTA areas.",
    eyebrow: "Mississauga",
    headline: "Mobile detailing that comes to you — Mississauga",
    subcopy:
      "Premium interior, exterior, paint correction, and ceramic coating at your driveway, condo, or office. Not a cheap wash — real detailing with real results.",
    trustTitle: "Why Mississauga drivers choose PitStop Polish",
    servicesTitle: "What we offer in Mississauga",
    areaSubtitle: "We serve Mississauga and the greater GTA. Same quality, we come to you.",
    ctaTitle: "Book Mississauga mobile detailing",
    ctaSubtitle: "Get a quote or call. We'll confirm your area and come to you — driveway, condo, or office.",
  },
  {
    slug: "oakville",
    name: "Oakville",
    title: "Mobile Detailing Oakville | Paint Correction & Ceramic Coating | PitStop Polish",
    description:
      "Premium mobile detailing, paint correction, and ceramic coating in Oakville. We come to your driveway, condo, office, or approved parking across Oakville and nearby GTA areas.",
    eyebrow: "Oakville",
    headline: "Mobile detailing that comes to you — Oakville",
    subcopy:
      "Premium interior, exterior, paint correction, and ceramic coating at your driveway, condo, or office. Not a cheap wash — real detailing with real results.",
    trustTitle: "Why Oakville drivers choose PitStop Polish",
    servicesTitle: "What we offer in Oakville",
    areaSubtitle: "We serve Oakville and the greater GTA. Same quality, we come to you.",
    ctaTitle: "Book Oakville mobile detailing",
    ctaSubtitle: "Get a quote or call. We'll confirm your area and come to you — driveway, condo, or office.",
  },
  {
    slug: "vaughan",
    name: "Vaughan",
    title: "Mobile Detailing Vaughan | Paint Correction & Ceramic Coating | PitStop Polish",
    description:
      "Premium mobile detailing, paint correction, and ceramic coating in Vaughan. We come to your driveway, condo, office, or approved parking across Vaughan and nearby GTA areas.",
    eyebrow: "Vaughan",
    headline: "Mobile detailing that comes to you — Vaughan",
    subcopy:
      "Premium interior, exterior, paint correction, and ceramic coating at your driveway, condo, or office. Not a cheap wash — real detailing with real results.",
    trustTitle: "Why Vaughan drivers choose PitStop Polish",
    servicesTitle: "What we offer in Vaughan",
    areaSubtitle: "We serve Vaughan and the greater GTA. Same quality, we come to you.",
    ctaTitle: "Book Vaughan mobile detailing",
    ctaSubtitle: "Get a quote or call. We'll confirm your area and come to you — driveway, condo, or office.",
  },
  {
    slug: "markham",
    name: "Markham",
    title: "Mobile Detailing Markham | Paint Correction & Ceramic Coating | PitStop Polish",
    description:
      "Premium mobile detailing, paint correction, and ceramic coating in Markham. We come to your driveway, condo, office, or approved parking across Markham and nearby GTA areas.",
    eyebrow: "Markham",
    headline: "Mobile detailing that comes to you — Markham",
    subcopy:
      "Premium interior, exterior, paint correction, and ceramic coating at your driveway, condo, or office. Not a cheap wash — real detailing with real results.",
    trustTitle: "Why Markham drivers choose PitStop Polish",
    servicesTitle: "What we offer in Markham",
    areaSubtitle: "We serve Markham and the greater GTA. Same quality, we come to you.",
    ctaTitle: "Book Markham mobile detailing",
    ctaSubtitle: "Get a quote or call. We'll confirm your area and come to you — driveway, condo, or office.",
  },
  {
    slug: "brampton",
    name: "Brampton",
    title: "Mobile Detailing Brampton | Paint Correction & Ceramic Coating | PitStop Polish",
    description:
      "Premium mobile detailing, paint correction, and ceramic coating in Brampton. We come to your driveway, condo, office, or approved parking across Brampton and nearby GTA areas.",
    eyebrow: "Brampton",
    headline: "Mobile detailing that comes to you — Brampton",
    subcopy:
      "Premium interior, exterior, paint correction, and ceramic coating at your driveway, condo, or office. Not a cheap wash — real detailing with real results.",
    trustTitle: "Why Brampton drivers choose PitStop Polish",
    servicesTitle: "What we offer in Brampton",
    areaSubtitle: "We serve Brampton and the greater GTA. Same quality, we come to you.",
    ctaTitle: "Book Brampton mobile detailing",
    ctaSubtitle: "Get a quote or call. We'll confirm your area and come to you — driveway, condo, or office.",
  },
  {
    slug: "pickering",
    name: "Pickering",
    title: "Mobile Detailing Pickering | Paint Correction & Ceramic Coating | PitStop Polish",
    description:
      "Premium mobile detailing, paint correction, and ceramic coating in Pickering. We come to your driveway, condo, office, or approved parking across Pickering and nearby GTA areas.",
    eyebrow: "Pickering",
    headline: "Mobile detailing that comes to you — Pickering",
    subcopy:
      "Premium interior, exterior, paint correction, and ceramic coating at your driveway, condo, or office. Not a cheap wash — real detailing with real results.",
    trustTitle: "Why Pickering drivers choose PitStop Polish",
    servicesTitle: "What we offer in Pickering",
    areaSubtitle: "We serve Pickering and the greater GTA. Same quality, we come to you.",
    ctaTitle: "Book Pickering mobile detailing",
    ctaSubtitle: "Get a quote or call. We'll confirm your area and come to you — driveway, condo, or office.",
  },
  {
    slug: "king-city",
    name: "King City",
    title: "Mobile Detailing King City | Paint Correction & Ceramic Coating | PitStop Polish",
    description:
      "Premium mobile detailing, paint correction, and ceramic coating in King City. We come to your driveway, condo, office, or approved parking across King City and nearby GTA areas.",
    eyebrow: "King City",
    headline: "Mobile detailing that comes to you — King City",
    subcopy:
      "Premium interior, exterior, paint correction, and ceramic coating at your driveway, condo, or office. Not a cheap wash — real detailing with real results.",
    trustTitle: "Why King City drivers choose PitStop Polish",
    servicesTitle: "What we offer in King City",
    areaSubtitle: "We serve King City and the greater GTA. Same quality, we come to you.",
    ctaTitle: "Book King City mobile detailing",
    ctaSubtitle: "Get a quote or call. We'll confirm your area and come to you — driveway, condo, or office.",
  },
];
