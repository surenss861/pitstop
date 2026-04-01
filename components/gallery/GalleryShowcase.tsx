"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { galleryCategories, galleryItems } from "@/lib/gallery-data";

export default function GalleryShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((i) => i.categories.includes(activeCategory));
  const isFiltered = activeCategory !== "All";
  /** When filtered, show tab name as category label; otherwise primary category */
  const getCategoryLabel = (item: (typeof galleryItems)[0]) =>
    isFiltered ? activeCategory : item.category;

  return (
    <div className="space-y-8">
      <div className="flex gap-2 overflow-x-auto pb-1 md:flex-wrap snap-x snap-mandatory md:snap-none">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`flex-shrink-0 snap-start px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-accent/20 border border-accent/40 text-accent"
                : "border border-border text-text-muted hover:border-accent/40 hover:text-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        className={`flex md:grid overflow-x-auto md:overflow-visible gap-4 md:gap-3 lg:gap-4 snap-x snap-mandatory md:snap-none pb-2 md:pb-0 ${
          isFiltered ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4"
        }`}
      >
        {filtered.map((item) => (
          <div
            key={`${item.src}-${item.label}-${item.categories.join(",")}`}
            className={`flex-shrink-0 w-[82vw] md:w-auto snap-center overflow-hidden rounded-xl border border-border relative min-h-[220px] ${isFiltered ? "lg:min-h-[260px]" : `${item.span || ""} ${item.minH || ""}`.trim()}`}
          >
            <Image
              src={item.src}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 767px) 82vw, (max-width: 1023px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="text-[10px] uppercase tracking-wider text-accent/90 font-semibold">
                {getCategoryLabel(item)}
              </span>
              <p className="text-white text-base font-medium mt-1">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
