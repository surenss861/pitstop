import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const paths = [
  {
    title: "My interior feels used and dirty",
    body: "Deep cleaning for seats, carpets, trim, mats, glass, and the high-contact areas that make the whole car feel used.",
    cta: "See Interior Services",
    href: "/services#interior",
  },
  {
    title: "My paint looks dull, swirled, or scratched",
    body: "Built for swirl marks, haze, oxidation, light scratching, and the kind of finish that no longer looks sharp in the sun.",
    cta: "See Paint Correction",
    href: "/services#correction",
  },
  {
    title: "I want long-term gloss and protection",
    body: "Ceramic and coating options for drivers who want better gloss retention, easier upkeep, and stronger surface protection.",
    cta: "See Ceramic Options",
    href: "/services#ceramic",
  },
  {
    title: "I want regular upkeep without thinking about it",
    body: "Monthly maintenance plans for drivers who want their car kept clean on a predictable schedule.",
    cta: "See Membership Plans",
    href: "/membership",
  },
];

export default function ServicesPathBlock() {
  return (
    <section className="py-12 md:py-16 bg-bg-card">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Start here"
          title="Not sure what your vehicle needs? Start with the result you want."
          subtitle="You don't need to know every detailing term. Start with the problem you want solved and we'll help you choose the right service before booking."
          align="center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
          {paths.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block p-5 md:p-6 rounded-xl border border-border bg-bg/50 hover:border-accent/40 transition-colors group"
            >
              <h3 className="font-bold text-white mb-2 group-hover:text-accent transition-colors text-sm md:text-base">
                {item.title}
              </h3>
              <p className="text-text-muted text-xs md:text-sm mb-4 leading-relaxed">{item.body}</p>
              <span className="text-accent font-semibold text-sm">{item.cta} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
