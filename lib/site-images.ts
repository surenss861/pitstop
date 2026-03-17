/**
 * PitStop Polish — page-by-page image map.
 * Single source of truth for hero, gallery, proof strip, and services.
 * Drop your best shot into each path (see public/images/IMAGES_README.md).
 */

const hero = (name: string) => `/images/hero/${name}`;
const gallery = (name: string) => `/images/gallery/${name}`;

/** Homepage hero — best: Black Bentley exterior; backup: Silver Mercedes */
export const heroImage = hero("hero-bentley.jpg");
export const heroImageBackup = hero("hero-mercedes.jpg");

/** Toronto / local landing hero — Silver Mercedes or BMW X6 (driveway vibe) */
export const torontoHeroImage = hero("hero-mercedes.jpg");

/** Homepage proof strip (3 images): interior, wheel, exterior variety */
export const homepageProofStrip = [
  { src: gallery("interior-tesla-black.jpg"), label: "Interior detail" },
  { src: gallery("detail-wheel-mercedes.jpg"), label: "Wheel & finish" },
  { src: gallery("exterior-jeep.jpg"), label: "Exterior — SUV" },
] as const;

/** Gallery: 12 curated images in display order (Row 1 → Row 4) */
export const galleryImageMap = [
  { src: gallery("exterior-bentley.jpg"), label: "Black Bentley exterior", category: "Exterior" as const },
  { src: gallery("interior-tesla-black.jpg"), label: "Tesla interior", category: "Interior" as const },
  { src: gallery("detail-wheel-mercedes.jpg"), label: "Mercedes wheel close-up", category: "Wheels" as const },
  { src: gallery("exterior-mercedes.jpg"), label: "Silver Mercedes exterior", category: "Exterior" as const },
  { src: gallery("interior-tesla-white.jpg"), label: "Tesla white interior", category: "Interior" as const },
  { src: gallery("detail-wheel-audi.jpg"), label: "Audi wheel close-up", category: "Wheels" as const },
  { src: gallery("exterior-jeep.jpg"), label: "Jeep Wrangler exterior", category: "Exterior" as const },
  { src: gallery("interior-defender-front.jpg"), label: "Defender front interior", category: "Interior" as const },
  { src: gallery("exterior-porsche.jpg"), label: "Red Porsche exterior", category: "Exterior" as const },
  { src: gallery("variety-bmw-x6.jpg"), label: "BMW X6 rear", category: "Full detail" as const },
  { src: gallery("interior-alfa-red.jpg"), label: "Alfa Romeo red interior", category: "Interior" as const },
  { src: gallery("variety-classic-turquoise.jpg"), label: "Classic car", category: "Full detail" as const },
] as const;

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
