"use client";

import { useEffect, useState } from "react";

const anchors = [
  { id: "packages", label: "Packages" },
  { id: "ceramic", label: "Ceramic" },
  { id: "correction", label: "Correction" },
  { id: "exterior", label: "Exterior" },
  { id: "interior", label: "Interior" },
  { id: "restoration", label: "Restoration" },
  { id: "addons", label: "Add-Ons" },
];

export default function ServicesAnchorNav() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    anchors.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="sticky top-[4.25rem] lg:top-[4.5rem] z-30 bg-bg/95 backdrop-blur-md border-b border-white/10 py-3 px-4 overflow-x-auto scrollbar-hide"
      aria-label="Jump to section"
    >
      <div className="max-w-[1100px] mx-auto flex gap-2 justify-center md:justify-start min-w-max md:min-w-0">
        {anchors.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
              activeId === id
                ? "bg-accent/20 text-accent border border-accent/30"
                : "text-text-muted hover:text-white border border-transparent hover:border-white/20"
            }`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
