const steps = [
  { num: 1, title: "Request a quote or call", text: "Tell us your vehicle and service. We'll confirm availability and price." },
  { num: 2, title: "Pick your service", text: "Interior, exterior, full detail, or add-ons. We'll match the right package." },
  { num: 3, title: "We come to your location", text: "Driveway, condo, or office. You don't have to go anywhere." },
  { num: 4, title: "Drive a cleaner car", text: "Done. Enjoy the results and book again whenever you're ready." },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-bg-card">
      <div className="max-w-[1100px] mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-bg font-bold flex items-center justify-center text-lg">
                {step.num}
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">{step.title}</h3>
                <p className="text-text-muted text-sm m-0">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
