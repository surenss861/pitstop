/**
 * PitStop Polish — gallery / results proof.
 * 12 curated images from site-images (semantic filenames); see public/images/IMAGES_README.md.
 */

import { galleryImageMap } from "@/lib/site-images";

export const galleryCategories = ["All", "Interior", "Exterior", "Wheels", "Full detail"] as const;

export type GalleryItem = {
  src: string;
  label: string;
  category: string;
  span?: string;
  minH?: string;
};

/** Layout: row 1 featured (first item large), then 2+2+3+3 for variety */
const layout = [
  { span: "col-span-2 row-span-2", minH: "min-h-[260px] lg:min-h-[340px]" },
  { span: "", minH: "min-h-[140px] lg:min-h-[165px]" },
  { span: "", minH: "min-h-[140px] lg:min-h-[165px]" },
  { span: "", minH: "min-h-[140px] lg:min-h-[165px]" },
  { span: "", minH: "min-h-[140px] lg:min-h-[165px]" },
  { span: "", minH: "min-h-[140px] lg:min-h-[165px]" },
  { span: "col-span-2", minH: "min-h-[110px] lg:min-h-[130px]" },
  { span: "", minH: "min-h-[140px] lg:min-h-[165px]" },
  { span: "", minH: "min-h-[140px] lg:min-h-[165px]" },
  { span: "", minH: "min-h-[140px] lg:min-h-[165px]" },
  { span: "", minH: "min-h-[140px] lg:min-h-[165px]" },
  { span: "", minH: "min-h-[140px] lg:min-h-[165px]" },
];

export const galleryItems: GalleryItem[] = galleryImageMap.map((item, i) => ({
  src: item.src,
  label: item.label,
  category: item.category,
  span: layout[i]?.span ?? "",
  minH: layout[i]?.minH ?? "min-h-[140px] lg:min-h-[165px]",
}));
