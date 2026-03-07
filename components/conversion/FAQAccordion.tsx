"use client";

import { useState } from "react";
import { serviceAreaCopy } from "@/lib/service-areas-data";

type FAQItem = { question: string; answer: string };

const defaultFaqs: FAQItem[] = [
  {
    question: "Do you come to me?",
    answer:
      "Yes. We're fully mobile and come to your driveway, condo, or location in the Toronto area and across the GTA.",
  },
  {
    question: "How long does detailing take?",
    answer:
      "Depends on the package. Interior or exterior alone is typically 2–3 hours; a full detail can be 4–6 hours.",
  },
  {
    question: "Do you need water or electricity?",
    answer:
      "We bring what we need. If you have a tap or outlet, we can use it; otherwise we're set up to work without.",
  },
  {
    question: "What's included in a full detail?",
    answer:
      "Full detail = interior deep clean (seats, carpets, dash, trim) plus exterior wash, clay, polish, and protection.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on vehicle size and condition. Request a quick quote or call (647) 823-7338 for an estimate.",
  },
  {
    question: "What areas do you serve?",
    answer:
      `${serviceAreaCopy} See our Service Areas page for the full list.`,
  },
];

type FAQAccordionProps = { items?: FAQItem[] };

export default function FAQAccordion({ items = defaultFaqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-2xl mx-auto">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`border-b border-border transition-colors ${
              isOpen ? "border-accent/20 bg-accent/[0.04]" : "hover:border-border/80"
            }`}
          >
            <button
              type="button"
              className="w-full min-h-[48px] py-4 md:py-5 px-4 flex justify-between items-center gap-4 text-left font-semibold text-white hover:text-accent transition-colors"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              {item.question}
              <span
                className="text-accent text-xl flex-shrink-0 w-10 h-10 md:w-9 md:h-9 flex items-center justify-center rounded-full border border-accent/30 transition-all duration-300 min-w-[2.5rem]"
                aria-hidden
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                isOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="pb-5 px-4 md:px-1 text-text-muted leading-relaxed max-w-[65ch]">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
