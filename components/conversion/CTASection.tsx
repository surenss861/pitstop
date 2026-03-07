import Link from "next/link";

type CTASectionProps = {
  title: string;
  subtitle?: string;
};

export default function CTASection({ title, subtitle }: CTASectionProps) {
  return (
    <section className="py-12">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="text-center p-10 rounded-xl bg-bg-card border border-border">
          <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
          {subtitle && <p className="text-text-muted mb-6">{subtitle}</p>}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex py-4 px-8 rounded-lg bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors"
            >
              Book Now
            </Link>
            <a
              href="tel:+16478237338"
              className="inline-flex py-4 px-8 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
            >
              Call (647) 823-7338
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
