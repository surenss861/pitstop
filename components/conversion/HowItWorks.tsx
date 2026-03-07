import Reveal from "@/components/animation/Reveal";
import StaggerChildren from "@/components/animation/StaggerChildren";

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
        <Reveal variant="scale">
          <p className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold text-center mb-3">
            Process
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-14">
            How It Works
          </h2>
        </Reveal>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-8 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent"
            aria-hidden
          />
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6" stagger={0.12} variant="up">
            {steps.map((step) => (
              <div key={step.num} className="stagger-item relative flex gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent text-bg font-bold flex items-center justify-center text-xl shadow-lg shadow-accent/25 border-2 border-accent/20">
                  {step.num}
                </div>
                <div>
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
