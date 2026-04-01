import { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "@/components/conversion/QuoteForm";
import { bookingUrl } from "@/lib/booking";

export const metadata: Metadata = {
  title: "Request a Quote | PitStop Polish",
  description:
    "Get pricing for paint correction, ceramic coating, memberships, or custom detailing in Toronto and the GTA. Tell us your vehicle and location — we'll quote before booking. Call (647) 823-7338.",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-16 text-center">
        <div className="max-w-[1100px] mx-auto px-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold mb-4">
            Quote
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Request a Quote
          </h1>
          <p className="text-text-muted text-base md:text-lg max-w-[52ch] mx-auto">
            Tell us your vehicle type, condition, service interest, and location. We'll recommend the right service and send pricing before anything is booked.
          </p>
          <p className="text-sm text-text-muted mt-4 max-w-[44ch] mx-auto">
            Quote first · No hidden upsell · We only use your info for your request
          </p>
          {bookingUrl && (
            <p className="text-sm text-text-muted mt-3 max-w-[48ch] mx-auto">
              For standard packages (Showroom, In & Out, interior or exterior packages), you can also <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">book directly online</a>.
            </p>
          )}
          <p className="mt-3 md:hidden">
            <a href="tel:+16478237338" className="text-accent font-semibold text-sm">Call or text for fastest quote →</a>
          </p>
        </div>
      </section>

      <section className="py-12 bg-bg-card">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Get in touch</h2>
              <p className="text-text-muted text-sm mb-4">
                <strong className="text-white">Phone</strong>
                <br />
                <a href="tel:+16478237338" className="text-accent font-medium">
                  (647) 823-7338
                </a>
              </p>
              <p className="text-text-muted text-sm mb-4">
                <strong className="text-white">Service areas</strong>
                <br />
                Toronto (Downtown, Annex, King West, Danforth, Leslieville, Riverdale, Beaches), plus Mississauga, Oakville, Brampton, Vaughan, Markham, Pickering, King City. <Link href="/service-areas" className="text-accent">See full list</Link>.
              </p>
              <div className="p-4 rounded-xl border border-border bg-bg/50 mb-4">
                <p className="text-white font-semibold text-sm mb-1">Best for</p>
                <p className="text-text-muted text-sm m-0">
                  Paint correction, ceramic coating, memberships, custom detailing, and vehicles that need pricing before booking.
                </p>
              </div>
              <p className="text-text-muted text-sm mb-4">
                <strong className="text-white">Google</strong>
                <br />
                <a
                  href="https://www.google.com/maps?cid=0x89d4cdaa61cd7613:0xf0845188efaf56c6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent"
                >
                  Find us on Google Maps
                </a>{" "}
                · Leave a review
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Request a quote</h2>
              <p className="text-text-muted text-sm mb-6">
                One form. We'll review your vehicle, condition, and location, then send the right pricing and next step. For standard maintenance details, you can also book directly online.
              </p>
              <QuoteForm />
              <p className="text-sm text-text-muted mt-4">
                Want the fastest answer? <a href="tel:+16478237338" className="text-accent font-medium">Call now at (647) 823-7338.</a>
              </p>
              <p className="text-sm text-text-muted mt-3">
                Want easier upkeep after your detail? <Link href="/membership" className="text-accent font-medium">Ask about monthly memberships.</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
