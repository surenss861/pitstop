/**
 * PitStop Polish — GTA city pages.
 * One entry per city; used by shared CityLandingPage for SEO and local conversion.
 */

export type GtaCityConfig = {
  slug: string;
  name: string;
  /** Page title (e.g. "Mobile Detailing Mississauga — We Come to You") */
  title: string;
  /** Meta description */
  description: string;
  /** Hero eyebrow (e.g. "Mississauga") */
  eyebrow: string;
  /** Hero headline */
  headline: string;
  /** Hero subcopy */
  subcopy: string;
  /** Trust section title (e.g. "Why Mississauga drivers choose PitStop Polish") */
  trustTitle: string;
  /** Services section title (e.g. "What we offer in Mississauga") */
  servicesTitle: string;
  /** Service area section subtitle */
  areaSubtitle: string;
  /** Final CTA title */
  ctaTitle: string;
  /** Final CTA subtitle */
  ctaSubtitle: string;
};

export const gtaCityConfigs: GtaCityConfig[] = [
  {
    slug: "mississauga",
    name: "Mississauga",
    title: "Mobile Detailing Mississauga — We Come to You",
    description:
      "Premium mobile detailing in Mississauga. Driveway, condo, office. Interior, exterior, paint correction, ceramic coating. 5-star rated. Book or call (647) 823-7338.",
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
    title: "Mobile Detailing Oakville — We Come to You",
    description:
      "Premium mobile detailing in Oakville. Driveway, condo, office. Interior, exterior, paint correction, ceramic coating. 5-star rated. Book or call (647) 823-7338.",
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
    title: "Mobile Detailing Vaughan — We Come to You",
    description:
      "Premium mobile detailing in Vaughan. Driveway, condo, office. Interior, exterior, paint correction, ceramic coating. 5-star rated. Book or call (647) 823-7338.",
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
    title: "Mobile Detailing Markham — We Come to You",
    description:
      "Premium mobile detailing in Markham. Driveway, condo, office. Interior, exterior, paint correction, ceramic coating. 5-star rated. Book or call (647) 823-7338.",
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
    title: "Mobile Detailing Brampton — We Come to You",
    description:
      "Premium mobile detailing in Brampton. Driveway, condo, office. Interior, exterior, paint correction, ceramic coating. 5-star rated. Book or call (647) 823-7338.",
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
    title: "Mobile Detailing Pickering — We Come to You",
    description:
      "Premium mobile detailing in Pickering. Driveway, condo, office. Interior, exterior, paint correction, ceramic coating. 5-star rated. Book or call (647) 823-7338.",
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
    title: "Mobile Detailing King City — We Come to You",
    description:
      "Premium mobile detailing in King City and the GTA. Driveway, condo, office. Interior, exterior, paint correction, ceramic coating. 5-star rated. Book or call (647) 823-7338.",
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
