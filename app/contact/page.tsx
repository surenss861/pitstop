import { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "@/components/conversion/QuoteForm";

export const metadata: Metadata = {
  title: "Contact & Book Now",
  description:
    "Book mobile detailing or get a quote. Call (647) 823-7338 or use our form. We serve Toronto, Mississauga, Oakville, Brampton, Vaughan, Markham, Pickering, King City, and the GTA.",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-16 text-center">
        <div className="max-w-[1100px] mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact & Book Now
          </h1>
          <p className="text-text-muted max-w-[50ch] mx-auto">
            Request a quote or call us. We'll confirm availability and price, then come to your
            location across Toronto and the GTA.
          </p>
          <p className="text-sm text-text-muted mt-4 max-w-[44ch] mx-auto">
            Quote before job · No spam · We only use your info for your request · Service area confirmed when you book
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
                One form — we'll get back with availability and pricing. Quote before any job; we only use your info for your request.
              </p>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
