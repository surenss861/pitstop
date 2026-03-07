/**
 * PitStop Polish — service area structure.
 * Primary: Toronto (neighborhoods). Expanded: GTA cities.
 * Single source for grid, copy, metadata, and future location pages.
 */

export type ServiceAreaGroup = { heading: string; areas: string[] };

/** Toronto Core = neighborhoods. Greater Toronto Area = cities (secondary market). */
export const serviceAreaGroups: ServiceAreaGroup[] = [
  {
    heading: "Toronto Core",
    areas: [
      "Downtown Toronto",
      "Annex",
      "King West",
      "Liberty Village",
      "Danforth",
      "Leslieville",
      "Riverdale",
      "Beaches",
    ],
  },
  {
    heading: "Greater Toronto Area",
    areas: [
      "Mississauga",
      "Oakville",
      "Brampton",
      "Vaughan",
      "Markham",
      "Pickering",
      "King City",
    ],
  },
];

/** GTA cities in order — for copy and SEO. */
export const gtaCities = [
  "Mississauga",
  "Oakville",
  "Brampton",
  "Vaughan",
  "Markham",
  "Pickering",
  "King City",
] as const;

/** Trust / CTA copy: full coverage line. */
export const serviceAreaCopy =
  "We come to you across Toronto, Mississauga, Oakville, Brampton, Vaughan, Markham, Pickering, King City, and the greater GTA.";

/** Shorter line for tight spaces. */
export const serviceAreaCopyShort =
  "Toronto, Mississauga, Oakville, Vaughan, Markham, Brampton, Pickering, King City, and the greater GTA.";
