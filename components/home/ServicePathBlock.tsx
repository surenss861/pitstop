import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const paths = [
  {
    title: "Need a full reset?",
    body: "Interior + exterior in one visit.",
    cta: "See Full Detail",
    href: "/services#packages",
  },
  {
    title: "Need paint restored?",
    body: "Swirl reduction, gloss improvement, machine polish.",
    cta: "See Paint Correction",
    href: "/services#correction",
  },
  {
    title: "Need long-term protection?",
    body: "Ceramic coating for paint, wheels, and glass.",
    cta: "See Ceramic Options",
    href: "/services#ceramic",
  },
  {
    title: "Need regular upkeep?",
    body: "Monthly memberships for consistently clean vehicles.",
    cta: "See Memberships",
    href: "/membership",
  },
];

export default function ServicePathBlock() {
  return (
    <section className="py-16 lg:py-20 bg-bg-card">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Start here"
          title="Choose the kind of care your vehicle needs"
          subtitle="Not every car needs the same service. Pick the right starting point and we'll quote the right level of work."
          align="center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {paths.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block p-6 rounded-xl border border-border bg-bg/50 hover:border-accent/40 transition-colors group"
            >
              <h3 className="font-bold text-white mb-2 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-text-muted text-sm mb-4">{item.body}</p>
              <span className="text-accent font-semibold text-sm">
                {item.cta} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
