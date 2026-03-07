import StaggerChildren from "@/components/animation/StaggerChildren";
import { serviceAreaGroups } from "@/lib/service-areas-data";

export default function ServiceAreaGrid() {
  return (
    <div>
      <p className="text-text-muted text-sm text-center mb-4 md:mb-6 max-w-[36ch] mx-auto">
        We come to you. Same quality at home or work — Toronto and GTA.
      </p>
      <StaggerChildren
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10"
        stagger={0.08}
        variant="up"
      >
        {serviceAreaGroups.map((group, i) => (
          <div key={group.heading} className="stagger-item">
            <h3 className="text-[11px] uppercase tracking-wider text-accent font-semibold mb-2 md:mb-3">
              {group.heading}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.areas.map((area) => (
                <span
                  key={area}
                  className="px-3.5 py-2 rounded-lg bg-bg-card border border-border text-sm text-white/90 hover:border-accent/40 transition-colors"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        ))}
      </StaggerChildren>
    </div>
  );
}
