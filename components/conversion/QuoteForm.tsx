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
          className="w-full px-4 py-3 rounded-lg bg-bg-card border border-border text-white placeholder:text-text-muted focus:outline-none focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block font-medium text-white mb-1">Phone *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full px-4 py-3 rounded-lg bg-bg-card border border-border text-white placeholder:text-text-muted focus:outline-none focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-medium text-white mb-1">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg bg-bg-card border border-border text-white placeholder:text-text-muted focus:outline-none focus:border-accent"
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
          <option value="interior">Interior detail</option>
          <option value="exterior">Exterior detail</option>
          <option value="full">Full detail</option>
          <option value="quote">Not sure / Quote me</option>
        </select>
      </div>
      <div>
        <label htmlFor="location" className="block font-medium text-white mb-1">Location (area or address) *</label>
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
        <label htmlFor="message" className="block font-medium text-white mb-1">Message / Vehicle condition</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Anything we should know?"
          className="w-full px-4 py-3 rounded-lg bg-bg-card border border-border text-white placeholder:text-text-muted focus:outline-none focus:border-accent resize-y"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-4 px-6 rounded-lg bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors disabled:opacity-70"
      >
        {status === "idle" && "Send request"}
        {status === "sending" && "Sending…"}
        {status === "sent" && "Request sent — we'll call you soon!"}
      </button>
    </form>
  );
}
