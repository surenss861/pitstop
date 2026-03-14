"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Replace with Formspree or your backend endpoint
    setTimeout(() => {
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    }, 800);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block font-medium text-white mb-1">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3.5 rounded-lg bg-bg-card border border-border text-white placeholder:text-text-muted focus:outline-none focus:border-accent min-h-[48px]"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block font-medium text-white mb-1">Phone *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full px-4 py-3.5 rounded-lg bg-bg-card border border-border text-white placeholder:text-text-muted focus:outline-none focus:border-accent min-h-[48px]"
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-medium text-white mb-1">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3.5 rounded-lg bg-bg-card border border-border text-white placeholder:text-text-muted focus:outline-none focus:border-accent min-h-[48px]"
        />
      </div>
      <div>
        <label htmlFor="vehicle" className="block font-medium text-white mb-1">Vehicle type</label>
        <select
          id="vehicle"
          name="vehicle"
          className="w-full px-4 py-3 rounded-lg bg-bg-card border border-border text-white focus:outline-none focus:border-accent"
        >
          <option value="">Select…</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="truck">Truck</option>
          <option value="van">Van</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="service" className="block font-medium text-white mb-1">Service interested in</label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 rounded-lg bg-bg-card border border-border text-white focus:outline-none focus:border-accent"
        >
          <option value="">Select…</option>
          <option value="basic">Basic Detail</option>
          <option value="interior">Interior Detail</option>
          <option value="exterior">Exterior Detail</option>
          <option value="full">Full Detail</option>
          <option value="premium">Premium Detail</option>
          <option value="showroom">Showroom Detail</option>
          <option value="correction">Paint Correction</option>
          <option value="ceramic">Ceramic Coating</option>
          <option value="correction-ceramic">Paint Correction + Ceramic Coating</option>
          <option value="addons">Add-Ons / Specialty</option>
          <option value="membership">Membership Inquiry</option>
          <option value="not-sure">Not sure — recommend the right service</option>
        </select>
      </div>
      <div>
        <label htmlFor="condition" className="block font-medium text-white mb-1">Vehicle condition</label>
        <select
          id="condition"
          name="condition"
          className="w-full px-4 py-3 rounded-lg bg-bg-card border border-border text-white focus:outline-none focus:border-accent"
        >
          <option value="">Select…</option>
          <option value="light">Light — regularly maintained</option>
          <option value="medium">Medium — needs a good clean</option>
          <option value="heavy">Heavy — neglected / restoration level</option>
        </select>
      </div>
      <div>
        <label htmlFor="location" className="block font-medium text-white mb-1">Location / city *</label>
        <input
          type="text"
          id="location"
          name="location"
          required
          placeholder="e.g. Toronto, Mississauga, Oakville"
          className="w-full px-4 py-3 rounded-lg bg-bg-card border border-border text-white placeholder:text-text-muted focus:outline-none focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="preferred_date" className="block font-medium text-white mb-1">Preferred date</label>
        <input
          type="text"
          id="preferred_date"
          name="preferred_date"
          placeholder="e.g. Next week, flexible"
          className="w-full px-4 py-3 rounded-lg bg-bg-card border border-border text-white placeholder:text-text-muted focus:outline-none focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="location_type" className="block font-medium text-white mb-1">Where will we work?</label>
        <select
          id="location_type"
          name="location_type"
          className="w-full px-4 py-3 rounded-lg bg-bg-card border border-border text-white focus:outline-none focus:border-accent"
        >
          <option value="">Select…</option>
          <option value="driveway">Driveway</option>
          <option value="condo">Condo / underground parking</option>
          <option value="office">Office / workplace</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block font-medium text-white mb-1">Notes</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Anything we should know? For correction or coating quotes, photos help — you can attach below or send after submit."
          className="w-full px-4 py-3.5 rounded-lg bg-bg-card border border-border text-white placeholder:text-text-muted focus:outline-none focus:border-accent resize-y min-h-[100px]"
        />
      </div>
      <div>
        <label htmlFor="photos" className="block font-medium text-white mb-1">Photos (optional)</label>
        <input
          type="file"
          id="photos"
          name="photos"
          accept="image/*"
          multiple
          className="w-full px-4 py-3 rounded-lg bg-bg-card border border-border text-text-muted text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-accent/20 file:text-accent file:font-semibold file:cursor-pointer focus:outline-none focus:border-accent"
        />
        <p className="text-xs text-text-muted mt-1">Helpful for paint correction or ceramic coating quotes. Max size depends on your email provider.</p>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-4 px-6 rounded-lg bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors disabled:opacity-70"
      >
        {status === "idle" && "Request My Quote"}
        {status === "sending" && "Sending…"}
        {status === "sent" && "Request sent — we'll call you soon!"}
      </button>
    </form>
  );
}
