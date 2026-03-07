const steps = [
  { num: 1, title: "Request a quote or call", text: "Tell us your vehicle and service. We'll confirm availability and price." },
  { num: 2, title: "Pick your service", text: "Interior, exterior, full detail, or add-ons. We'll match the right package." },
  { num: 3, title: "We come to your location", text: "Driveway, condo, or office. You don't have to go anywhere." },
  { num: 4, title: "Drive a cleaner car", text: "Done. Enjoy the results and book again whenever you're ready." },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-bg-card">
      <div className="max-w-[1100px] mx-auto px-4">
        <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold text-center mb-3">
          Process
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-14">
          How It Works
        </h2>

        <div className="relative">
          {/* Subtle connector line on desktop */}
          <div
            className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
            style={{ width: "calc(100% - 4rem)", margin: "0 2rem" }}
            aria-hidden
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-bg font-bold flex items-center justify-center text-lg shadow-lg shadow-accent/20">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                  <p className="text-text-muted leading-relaxed m-0">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
