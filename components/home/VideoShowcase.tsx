"use client";

import Link from "next/link";

/** One MP4 from public/videos — real work at customer location */
const VIDEO_SRC = "/videos/detail-work.mp4";

export default function VideoShowcase() {
  return (
    <section className="py-14 md:py-16 bg-bg">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold mb-2">
          Proof
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          See us in action
        </h2>
        <p className="text-text-muted text-sm mb-6 max-w-[42ch]">
          Real detailing at your location — driveway, condo, or office.
        </p>
        <div className="rounded-xl overflow-hidden border border-border bg-bg-card">
          <video
            src={VIDEO_SRC}
            controls
            playsInline
            className="w-full aspect-video object-cover"
            poster="/images/gallery/gallery-8.jpg"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="mt-4 text-center">
          <Link
            href="/gallery"
            className="inline-flex py-2.5 px-5 rounded-lg border border-accent text-accent font-semibold text-sm hover:bg-accent/10 transition-colors"
          >
            View gallery
          </Link>
        </p>
      </div>
    </section>
  );
}
