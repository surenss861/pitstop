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
    <section className="py-16 lg:py-20 bg-bg">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <Reveal variant="scale">
          <p className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold text-center mb-2">
            Process
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-10 tracking-tight">
            How It Works
          </h2>
        </Reveal>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-8 left-[calc(15%+1.5rem)] right-[calc(15%+1.5rem)] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
            aria-hidden
          />
          <StaggerChildren
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5"
            stagger={0.1}
            variant="up"
          >
            {steps.map((step) => (
              <div key={step.num} className="stagger-item relative flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/20 text-accent font-bold flex items-center justify-center text-base md:text-lg border border-accent/30">
                  {step.num}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white text-base mb-1">{step.title}</h3>
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
