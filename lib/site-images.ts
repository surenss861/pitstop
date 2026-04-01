/**
 * PitStop Polish — page-by-page image map.
 * Gallery uses canonical files under public/images/gallery/gallery-*.jpg (verified content).
 * Categories are strict: Interior = cabin, Exterior = full vehicle, Wheels = wheel close-up, Full detail = whole-car result only.
 */

/** Canonical gallery assets (content verified; semantic name copies are optional for manual asset swaps) */
const g = (name: string) => `/images/gallery/${name}`;

export type GalleryCategory = "Interior" | "Exterior" | "Wheels" | "Full detail";

/** Homepage hero — Black Bentley (gallery-image1) */
export const heroImage = g("gallery-image1.jpg");
export const heroImageBackup = g("gallery-8.jpg");

/** Toronto / local — Silver Mercedes SL in driveway */
export const torontoHeroImage = g("gallery-8.jpg");

/** Homepage proof: dark luxury interior, wheel, Jeep SUV */
export const homepageProofStrip = [
  { src: g("gallery-15.jpg"), label: "Interior reset" },
  { src: g("gallery-0.jpg"), label: "Wheel finish / detail work" },
  { src: g("gallery-13.jpg"), label: "Exterior finish / SUVs" },
] as const;

/**
 * 12 gallery slots — src matches actual photo content.
 * Order tuned for “All” view: luxury hook → interior → wheel → flow.
 */
export const galleryImageMap: ReadonlyArray<{
  src: string;
  label: string;
  category: GalleryCategory;
  categories: readonly GalleryCategory[];
}> = [
  {
    src: g("gallery-image1.jpg"),
    label: "Luxury exterior finish",
    category: "Exterior",
    categories: ["Exterior", "Full detail"],
  },
  {
    src: g("gallery-15.jpg"),
    label: "Luxury SUV interior",
    category: "Interior",
    categories: ["Interior"],
  },
  {
    src: g("gallery-0.jpg"),
    label: "Wheel finish",
    category: "Wheels",
    categories: ["Wheels"],
  },
  {
    src: g("gallery-8.jpg"),
    label: "Exterior gloss & protection",
    category: "Exterior",
    categories: ["Exterior", "Full detail"],
  },
  {
    src: g("gallery-2.jpg"),
    label: "Interior reset",
    category: "Interior",
    categories: ["Interior"],
  },
  {
    src: g("gallery-9.jpg"),
    label: "Wheel & rim clean",
    category: "Wheels",
    categories: ["Wheels"],
  },
  {
    src: g("gallery-13.jpg"),
    label: "SUV exterior detail",
    category: "Exterior",
    categories: ["Exterior", "Full detail"],
  },
  {
    src: g("gallery-7.jpg"),
    label: "Performance interior clean",
    category: "Interior",
    categories: ["Interior"],
  },
  {
    src: g("gallery-11.jpg"),
    label: "Sports car exterior finish",
    category: "Exterior",
    categories: ["Exterior", "Full detail"],
  },
  {
    src: g("gallery-16.jpg"),
    label: "Premium SUV finish",
    category: "Exterior",
    categories: ["Exterior", "Full detail"],
  },
  {
    src: g("gallery-6.jpg"),
    label: "Leather interior detail",
    category: "Interior",
    categories: ["Interior"],
  },
  {
    src: g("gallery-14.jpg"),
    label: "Classic car detail",
    category: "Exterior",
    categories: ["Exterior", "Full detail"],
  },
];

/** Services page — interior grid */
export const servicesInteriorImages = [
  g("gallery-15.jpg"),
  g("gallery-2.jpg"),
  g("gallery-7.jpg"),
  g("gallery-6.jpg"),
];

/** Services page — exterior grid */
export const servicesExteriorImages = [
  g("gallery-image1.jpg"),
  g("gallery-8.jpg"),
  g("gallery-13.jpg"),
  g("gallery-11.jpg"),
];

/** Ceramic / correction vibe */
export const servicesCeramicImages = [
  g("gallery-image1.jpg"),
  g("gallery-11.jpg"),
  g("gallery-9.jpg"),
];

/** Add-ons / detail */
export const servicesDetailImages = [g("gallery-0.jpg"), g("gallery-9.jpg")];

/** About page */
export const aboutImages = [g("gallery-13.jpg"), g("gallery-16.jpg"), g("gallery-7.jpg")];

/** Video poster */
export const videoPosterImage = g("gallery-8.jpg");
