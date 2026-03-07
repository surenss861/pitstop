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
      <p className="text-text-muted text-center mb-8 max-w-[36ch] mx-auto text-base">
        We come to you. Same quality whether you're at home or work.
      </p>
      <StaggerChildren
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        stagger={0.1}
        variant="up"
      >
        {groups.map((group) => (
          <div key={group.heading} className="stagger-item">
            <h3 className="text-xs uppercase tracking-wider text-accent font-semibold mb-4">
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
