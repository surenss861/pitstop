"use client";

import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren from "@/components/animation/StaggerChildren";
import { useState } from "react";

const categories = ["All", "Interior", "Exterior", "Wheels", "Full detail"];

// Detailing-proof: gloss, interior, finish, restoration — not generic car shots
const items = [
  {
    src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
    label: "Interior deep clean",
    category: "Interior",
    span: "col-span-2 row-span-2" as const,
    minH: "min-h-[260px] lg:min-h-[340px]",
  },
  {
    src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&q=80",
    label: "Exterior gloss & protection",
    category: "Exterior",
    span: "" as const,
    minH: "min-h-[140px] lg:min-h-[165px]",
  },
  {
    src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80",
    label: "Wheel & tire finish",
    category: "Wheels",
    span: "" as const,
    minH: "min-h-[140px] lg:min-h-[165px]",
  },
  {
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    label: "Paint reflection & correction",
    category: "Exterior",
    span: "col-span-2" as const,
    minH: "min-h-[110px] lg:min-h-[130px]",
  },
  {
    src: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80",
    label: "Trim & interior reset",
    category: "Interior",
    span: "col-span-2" as const,
    minH: "min-h-[110px] lg:min-h-[130px]",
  },
  {
    src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
    label: "Full detail — your location",
    category: "Full detail",
    span: "col-span-2" as const,
    minH: "min-h-[110px] lg:min-h-[130px]",
  },
];

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

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
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
          className={`grid gap-3 lg:gap-4 ${isFiltered ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-2 lg:grid-cols-4"}`}
          stagger={0.06}
          variant="scale"
        >
          {filtered.map((item) => (
            <div
              key={`${item.src}-${item.label}`}
              className={`gallery-item-hover stagger-item overflow-hidden rounded-xl border border-border relative ${
                isFiltered ? "min-h-[200px] lg:min-h-[240px]" : `${item.span} ${item.minH}`
              }`}
            >
              <Image
                src={item.src}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 lg:p-4">
                <span className="text-[10px] uppercase tracking-wider text-accent/90 font-semibold">
                  {item.category}
                </span>
                <p className="text-white text-sm font-medium mt-0.5">{item.label}</p>
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
