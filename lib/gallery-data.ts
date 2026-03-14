/**
 * PitStop Polish — gallery / results proof.
 * Evidence-focused: interior, exterior, wheels, correction, full detail.
 * Replace srcs with your own before/after assets when ready.
 */

export const galleryCategories = ["All", "Interior", "Exterior", "Wheels", "Full detail"] as const;

export type GalleryItem = {
  src: string;
  label: string;
  category: string;
  span?: string;
  minH?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
    label: "Interior deep clean",
    category: "Interior",
    span: "col-span-2 row-span-2",
    minH: "min-h-[260px] lg:min-h-[340px]",
  },
  {
    src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&q=80",
    label: "Exterior gloss & protection",
    category: "Exterior",
    span: "",
    minH: "min-h-[140px] lg:min-h-[165px]",
  },
  {
    src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80",
    label: "Wheel & tire finish",
    category: "Wheels",
    span: "",
    minH: "min-h-[140px] lg:min-h-[165px]",
  },
  {
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    label: "Paint reflection & correction",
    category: "Exterior",
    span: "col-span-2",
    minH: "min-h-[110px] lg:min-h-[130px]",
  },
  {
    src: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80",
    label: "Trim & interior reset",
    category: "Interior",
    span: "col-span-2",
    minH: "min-h-[110px] lg:min-h-[130px]",
  },
  {
    src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
    label: "Full detail — your location",
    category: "Full detail",
    span: "col-span-2",
    minH: "min-h-[110px] lg:min-h-[130px]",
  },
];
