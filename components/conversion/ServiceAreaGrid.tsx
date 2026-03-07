import StaggerChildren from "@/components/animation/StaggerChildren";

const groups: { heading: string; areas: string[] }[] = [
  { heading: "Toronto Core", areas: ["Downtown Toronto", "Annex", "Liberty Village", "King West"] },
  { heading: "East End", areas: ["East York", "Danforth", "Leslieville", "Riverdale", "Beaches"] },
  { heading: "West End", areas: ["Bloor West", "High Park", "Junction", "Parkdale"] },
  { heading: "Midtown & North", areas: ["North York", "Scarborough", "Etobicoke", "York", "Midtown"] },
];

export default function ServiceAreaGrid() {
  return (
    <div>
      <p className="text-text-muted text-sm text-center mb-6 max-w-[28ch] mx-auto">
        We come to you. Same quality at home or work.
      </p>
      <StaggerChildren
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        stagger={0.08}
        variant="up"
      >
        {groups.map((group, i) => (
          <div key={group.heading} className="stagger-item relative">
            {i > 0 && (
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-border/60 -translate-x-4" aria-hidden />
            )}
            <h3 className="text-[11px] uppercase tracking-wider text-accent font-semibold mb-3">
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
