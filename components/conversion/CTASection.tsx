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
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-card to-bg pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_100%,rgba(201,162,39,0.12),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_20%,rgba(201,162,39,0.06),transparent_50%)] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23c9a227' fill-opacity='1' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E\")" }}
        aria-hidden
      />
      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white mb-5 leading-tight tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-text-muted text-lg md:text-xl mb-10 leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="btn-primary-hero inline-flex py-5 px-12 rounded-xl bg-accent text-bg font-semibold text-lg hover:bg-accent-hover transition-all shadow-[0_0_0_0_rgba(201,162,39,0.3)] hover:shadow-[0_0_28px_6px_rgba(201,162,39,0.25)]"
            >
              Book Now
            </Link>
            <a
              href="tel:+16478237338"
              className="inline-flex py-5 px-12 rounded-xl border-2 border-accent text-accent font-semibold text-lg hover:bg-accent/10 transition-colors"
            >
              Call (647) 823-7338
            </a>
          </div>
          <p className="text-text-muted text-base">
            <span className="text-accent font-semibold">★★★★★</span> 5.0 · 13 reviews · Toronto
          </p>
        </div>
      </div>
    </section>
  );
}
