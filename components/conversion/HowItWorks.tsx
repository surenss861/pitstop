import Reveal from "@/components/animation/Reveal";
import StaggerChildren from "@/components/animation/StaggerChildren";

const steps = [
  { num: 1, title: "Request a quote or call", text: "Tell us your vehicle and service. We'll confirm availability and price.", icon: "📋" },
  { num: 2, title: "Pick your service", text: "Interior, exterior, full detail, or add-ons. We'll match the right package.", icon: "✨" },
  { num: 3, title: "We come to your location", text: "Driveway, condo, or office. You don't have to go anywhere.", icon: "📍" },
  { num: 4, title: "Drive a cleaner car", text: "Done. Enjoy the results and book again whenever you're ready.", icon: "🚗" },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <Reveal variant="scale">
          <p className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold text-center mb-3">
            Process
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white text-center mb-16 tracking-tight">
            How It Works
          </h2>
        </Reveal>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-10 left-[calc(12%+2rem)] right-[calc(12%+2rem)] h-[3px] rounded-full bg-gradient-to-r from-transparent via-accent/50 to-transparent"
            aria-hidden
          />
          <StaggerChildren
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
            stagger={0.12}
            variant="up"
          >
            {steps.map((step) => (
              <div key={step.num} className="stagger-item relative flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent text-bg font-extrabold flex items-center justify-center text-2xl shadow-lg shadow-accent/30 border-2 border-accent/30">
                  {step.num}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-2xl mb-2 opacity-80" aria-hidden>{step.icon}</div>
                  <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                  <p className="text-text-muted leading-relaxed m-0 text-sm">{step.text}</p>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
