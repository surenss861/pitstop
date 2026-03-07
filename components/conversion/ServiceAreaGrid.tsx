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
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" aria-hidden />
        <p className="text-text-muted text-sm max-w-[28ch] text-center">
          We come to you. Same quality at home or work.
        </p>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" aria-hidden />
      </div>
      <StaggerChildren
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
        stagger={0.1}
        variant="up"
      >
        {groups.map((group, i) => (
          <div key={group.heading} className="stagger-item relative">
            {i > 0 && (
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-5" aria-hidden />
            )}
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
