/**
 * PitStop Polish — gallery / results proof.
 * Strict category mapping: Interior = cabin only, Exterior = full vehicle, Wheels = wheel close-up, Full detail = whole-car result.
 * Each item can appear in multiple filters via categories[] (e.g. Bentley in Exterior + Full detail).
 */

import { galleryImageMap } from "@/lib/site-images";

export const galleryCategories = ["All", "Interior", "Exterior", "Wheels", "Full detail"] as const;

export type GalleryItem = {
  src: string;
  label: string;
  /** Primary category for display in "All" view */
  category: string;
  /** All filters this image appears in — filter shows item if categories includes active tab */
  categories: readonly string[];
  span?: string;
  minH?: string;
};

/** Layout: row 1 featured (first item large), then grid */
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
  categories: item.categories,
  span: layout[i]?.span ?? "",
  minH: layout[i]?.minH ?? "min-h-[140px] lg:min-h-[165px]",
}));
