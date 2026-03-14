"use client";

import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren from "@/components/animation/StaggerChildren";
import { useState } from "react";
import { galleryCategories, galleryItems } from "@/lib/gallery-data";

const items = galleryItems;
const categories = galleryCategories;

export default function BeforeAfterShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? items
      : items.filter((i) => i.category === activeCategory);
  const isFiltered = activeCategory !== "All";

  return (
    <section className="py-16 lg:py-20 bg-bg-card">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-left mb-10">
          <SectionHeading
            align="left"
            label="Results"
            title="Results That Speak"
            subtitle="Real transformations — interior, exterior, and full details."
          />
        </div>

        <div className="flex gap-2 mb-6 md:mb-8 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible snap-x snap-mandatory md:snap-none">
          {categories.map((cat) => (
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

        <StaggerChildren
          className={`flex md:grid overflow-x-auto md:overflow-visible gap-4 md:gap-3 lg:gap-4 snap-x snap-mandatory md:snap-none pb-2 md:pb-0 ${
            isFiltered ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4"
          }`}
          stagger={0.06}
          variant="scale"
        >
          {filtered.map((item) => (
            <div
              key={`${item.src}-${item.label}`}
              className={`gallery-item-hover stagger-item flex-shrink-0 w-[82vw] md:w-auto snap-center overflow-hidden rounded-xl border border-border relative ${
                isFiltered ? "min-h-[200px] lg:min-h-[240px]" : `min-h-[200px] md:min-h-0 ${item.span} ${item.minH}`.trim()
              }`}
            >
              <Image
                src={item.src}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 767px) 82vw, (max-width: 1023px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-4">
                <span className="text-[10px] uppercase tracking-wider text-accent/90 font-semibold">
                  {item.category}
                </span>
                <p className="text-white text-base font-medium mt-1">{item.label}</p>
              </div>
            </div>
          ))}
        </StaggerChildren>

        <p className="text-left mt-10">
          <Link
            href="/gallery"
            className="inline-flex py-3 px-6 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
          >
            View full gallery
          </Link>
        </p>
      </div>
    </section>
  );
}
