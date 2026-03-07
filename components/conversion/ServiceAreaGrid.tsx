const areas = [
  "Toronto",
  "East York",
  "Danforth",
  "Downtown Toronto",
  "Leslieville",
  "Riverdale",
  "Scarborough",
  "North York",
  "Etobicoke",
  "York",
  "Annex",
  "Bloor West",
  "High Park",
  "Beaches",
];

export default function ServiceAreaGrid() {
  return (
    <div>
      <p className="text-text-muted text-center mb-6 max-w-[32ch] mx-auto">
        Serving Toronto and nearby neighborhoods. We come to you.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        {areas.map((area) => (
          <span
            key={area}
            className="px-4 py-2.5 rounded-xl bg-bg-card border border-border text-sm text-white/90 hover:border-accent/40 transition-colors"
          >
            {area}
          </span>
        ))}
      </div>
    </div>
  );
}
