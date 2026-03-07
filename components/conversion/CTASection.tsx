import Link from "next/link";

type CTASectionProps = {
  title?: string;
  subtitle?: string;
};

export default function CTASection({
  title = "Ready to get your car detailed without leaving home?",
  subtitle = "We come to you anywhere across Toronto. Book now or call for a quick quote.",
}: CTASectionProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-card to-bg pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(201,162,39,0.1),transparent_60%)] pointer-events-none" />
      <div className="relative max-w-[1100px] mx-auto px-4">
        <div className="text-center p-12 lg:p-20 rounded-2xl bg-bg-card/90 border border-border">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 max-w-[30ch] mx-auto leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-text-muted text-lg mb-10 max-w-[40ch] mx-auto">{subtitle}</p>
          )}
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Link
              href="/contact"
              className="btn-primary-hero inline-flex py-4 px-10 rounded-xl bg-accent text-bg font-semibold hover:bg-accent-hover transition-all shadow-[0_0_0_0_rgba(201,162,39,0.3)] hover:shadow-[0_0_32px_4px_rgba(201,162,39,0.2)]"
            >
              Book Now
            </Link>
            <a
              href="tel:+16478237338"
              className="inline-flex py-4 px-10 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
            >
              Call (647) 823-7338
            </a>
          </div>
          <p className="text-text-muted text-sm">
            <span className="text-accent font-medium">★★★★★</span> 5.0 · 13 reviews · Toronto
          </p>
        </div>
      </div>
    </section>
  );
}
