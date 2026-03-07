"use client";

import { useState } from "react";

type FAQItem = { question: string; answer: string };

const defaultFaqs: FAQItem[] = [
  {
    question: "Do you come to me?",
    answer:
      "Yes. We're fully mobile and come to your driveway, condo, or location in the Toronto area.",
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
      "Toronto and surrounding neighbourhoods including East York, Danforth, Downtown, Leslieville, Riverdale, Scarborough, North York. See our Service Areas page for the full list.",
  },
];

type FAQAccordionProps = {
  items?: FAQItem[];
};

export default function FAQAccordion({ items = defaultFaqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-2xl mx-auto space-y-0">
      {items.map((item, i) => (
        <div
          key={i}
          className="border-b border-border"
        >
          <button
            type="button"
            className="w-full py-4 flex justify-between items-center gap-4 text-left font-semibold text-white hover:text-accent transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            {item.question}
            <span className="text-accent text-xl flex-shrink-0">
              {openIndex === i ? "−" : "+"}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="pb-4 text-text-muted text-sm">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
