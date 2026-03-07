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
    <div className="flex flex-wrap gap-3 justify-center">
      {areas.map((area) => (
        <span
          key={area}
          className="px-4 py-2 rounded-lg bg-bg-card border border-border text-sm text-white/90"
        >
          {area}
        </span>
      ))}
    </div>
  );
}
