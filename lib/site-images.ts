/**
 * PitStop Polish — page-by-page image map.
 * Single source of truth for hero, gallery, proof strip, and services.
 * Category mapping is strict: Interior = cabin only, Exterior = full vehicle, Wheels = wheel close-up, Full detail = whole-car result.
 * See public/images/IMAGES_README.md and CROPPING_GUIDE.md.
 */

const hero = (name: string) => `/images/hero/${name}`;
const gallery = (name: string) => `/images/gallery/${name}`;

export type GalleryCategory = "Interior" | "Exterior" | "Wheels" | "Full detail";

/** Homepage hero — best: Black Bentley exterior; backup: Silver Mercedes */
export const heroImage = hero("hero-bentley.jpg");
export const heroImageBackup = hero("hero-mercedes.jpg");

/** Toronto / local landing hero — Silver Mercedes (driveway vibe) */
export const torontoHeroImage = hero("hero-mercedes.jpg");

/** Homepage proof strip: interior, wheel, exterior — strict labels */
export const homepageProofStrip = [
  { src: gallery("interior-tesla-black.jpg"), label: "Interior reset" },
  { src: gallery("detail-wheel-mercedes.jpg"), label: "Wheel finish / detail work" },
  { src: gallery("exterior-jeep.jpg"), label: "Exterior finish / SUVs" },
] as const;

/**
 * Gallery: 12 curated images. Each item has one primary category (for "All" view) and
 * a categories array so it can appear in multiple filters (e.g. Bentley in Exterior + Full detail).
 * Labels match content — no wheel under Interior, no interior under Exterior.
 */
export const galleryImageMap: ReadonlyArray<{
  src: string;
  label: string;
  category: GalleryCategory;
  categories: readonly GalleryCategory[];
}> = [
  {
    src: gallery("exterior-bentley.jpg"),
    label: "Luxury exterior finish",
    category: "Exterior",
    categories: ["Exterior", "Full detail"],
  },
  {
    src: gallery("interior-tesla-black.jpg"),
    label: "Interior deep clean",
    category: "Interior",
    categories: ["Interior"],
  },
  {
    src: gallery("detail-wheel-mercedes.jpg"),
    label: "Wheel finish",
    category: "Wheels",
    categories: ["Wheels"],
  },
  {
    src: gallery("exterior-mercedes.jpg"),
    label: "Exterior gloss & protection",
    category: "Exterior",
    categories: ["Exterior", "Full detail"],
  },
  {
    src: gallery("interior-tesla-white.jpg"),
    label: "Interior reset",
    category: "Interior",
    categories: ["Interior"],
  },
  {
    src: gallery("detail-wheel-audi.jpg"),
    label: "Wheel & rim clean",
    category: "Wheels",
    categories: ["Wheels"],
  },
  {
    src: gallery("exterior-jeep.jpg"),
    label: "SUV exterior detail",
    category: "Exterior",
    categories: ["Exterior", "Full detail"],
  },
  {
    src: gallery("interior-defender-front.jpg"),
    label: "SUV interior clean",
    category: "Interior",
    categories: ["Interior"],
  },
  {
    src: gallery("exterior-porsche.jpg"),
    label: "Sports car exterior finish",
    category: "Exterior",
    categories: ["Exterior", "Full detail"],
  },
  {
    src: gallery("variety-bmw-x6.jpg"),
    label: "Premium SUV finish",
    category: "Full detail",
    categories: ["Exterior", "Full detail"],
  },
  {
    src: gallery("interior-alfa-red.jpg"),
    label: "Leather interior detail",
    category: "Interior",
    categories: ["Interior"],
  },
  {
    src: gallery("variety-classic-turquoise.jpg"),
    label: "Classic car detail",
    category: "Full detail",
    categories: ["Exterior", "Full detail"],
  },
];

/** Services page — interior section (4-image grid) */
export const servicesInteriorImages = [
  gallery("interior-tesla-black.jpg"),
  gallery("interior-tesla-white.jpg"),
  gallery("interior-defender-front.jpg"),
  gallery("interior-alfa-red.jpg"),
];

/** Services page — exterior section (4-image grid) */
export const servicesExteriorImages = [
  gallery("exterior-bentley.jpg"),
  gallery("exterior-mercedes.jpg"),
  gallery("exterior-jeep.jpg"),
  gallery("exterior-porsche.jpg"),
];

/** Ceramic / correction vibe */
export const servicesCeramicImages = [
  gallery("exterior-bentley.jpg"),
  gallery("exterior-porsche.jpg"),
  gallery("detail-wheel-audi.jpg"),
];

/** Add-ons / detail close-up */
export const servicesDetailImages = [
  gallery("detail-wheel-mercedes.jpg"),
  gallery("detail-wheel-audi.jpg"),
];

/** About page — real, local vibe */
export const aboutImages = [
  gallery("exterior-jeep.jpg"),
  gallery("variety-bmw-x6.jpg"),
  gallery("interior-defender-front.jpg"),
];

/** Video poster (e.g. for VideoShowcase) */
export const videoPosterImage = gallery("exterior-mercedes.jpg");
