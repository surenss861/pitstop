/**
 * PitStop Polish — gallery / results proof.
 * Uses local assets from public/images/gallery (from imagesandvids).
 */

export const galleryCategories = ["All", "Interior", "Exterior", "Wheels", "Full detail"] as const;

export type GalleryItem = {
  src: string;
  label: string;
  category: string;
  span?: string;
  minH?: string;
};

const img = (name: string) => `/images/gallery/${name}`;

export const galleryItems: GalleryItem[] = [
  {
    src: img("gallery-0.jpg"),
    label: "Interior deep clean",
    category: "Interior",
    span: "col-span-2 row-span-2",
    minH: "min-h-[260px] lg:min-h-[340px]",
  },
  {
    src: img("gallery-8.jpg"),
    label: "Exterior gloss & protection",
    category: "Exterior",
    span: "",
    minH: "min-h-[140px] lg:min-h-[165px]",
  },
  {
    src: img("gallery-5.jpg"),
    label: "Wheel & tire finish",
    category: "Wheels",
    span: "",
    minH: "min-h-[140px] lg:min-h-[165px]",
  },
  {
    src: img("gallery-9.jpg"),
    label: "Paint reflection & correction",
    category: "Exterior",
    span: "col-span-2",
    minH: "min-h-[110px] lg:min-h-[130px]",
  },
  {
    src: img("gallery-2.jpg"),
    label: "Trim & interior reset",
    category: "Interior",
    span: "col-span-2",
    minH: "min-h-[110px] lg:min-h-[130px]",
  },
  {
    src: img("gallery-image1.jpg"),
    label: "Full detail — your location",
    category: "Full detail",
    span: "col-span-2",
    minH: "min-h-[110px] lg:min-h-[130px]",
  },
  {
    src: img("gallery-3.jpg"),
    label: "Interior detail",
    category: "Interior",
    span: "",
    minH: "min-h-[140px] lg:min-h-[165px]",
  },
  {
    src: img("gallery-4.jpg"),
    label: "Dashboard & surfaces",
    category: "Interior",
    span: "",
    minH: "min-h-[140px] lg:min-h-[165px]",
  },
  {
    src: img("gallery-6.jpg"),
    label: "Exterior wash & finish",
    category: "Exterior",
    span: "",
    minH: "min-h-[140px] lg:min-h-[165px]",
  },
  {
    src: img("gallery-7.jpg"),
    label: "Paint care",
    category: "Exterior",
    span: "",
    minH: "min-h-[140px] lg:min-h-[165px]",
  },
  {
    src: img("gallery-11.jpg"),
    label: "Wheels & rims",
    category: "Wheels",
    span: "",
    minH: "min-h-[140px] lg:min-h-[165px]",
  },
  {
    src: img("gallery-12.jpg"),
    label: "Full detail result",
    category: "Full detail",
    span: "",
    minH: "min-h-[140px] lg:min-h-[165px]",
  },
];
