"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Set to a path (e.g. "/hero-wheel.jpg") to use a photo instead of 3D. Leave empty for wheel GLB.
const HERO_IMAGE_URL = process.env.NEXT_PUBLIC_HERO_IMAGE || "";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-bg flex items-center justify-center">
      <div className="w-24 h-24 rounded-full border-2 border-accent/30 border-t-accent animate-spin" />
    </div>
  ),
});

export default function Hero() {
  const [reduceMotion, setReduceMotion] = useState(true);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
    const mq = window.matchMedia("(max-width: 1023px)");
    setMobile(mq.matches);
    const handler = () => setMobile(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const usePhotoHero = Boolean(HERO_IMAGE_URL);

  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden lg:min-h-[85vh]">
      <div className="relative z-10 max-w-[1100px] mx-auto w-full px-4 py-12 lg:py-16 lg:grid lg:grid-cols-[1fr,1fr] lg:gap-8 lg:items-center">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Mobile Detailing in Toronto That Comes to You
          </h1>
          <p className="text-lg text-text-muted mb-6">
            Interior and exterior detailing done at your driveway, condo, or location — with real
            attention to detail and local 5-star service.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-sm text-text-muted mb-8">
            <span className="text-accent tracking-wider">★★★★★</span>
            <span>5.0 Google Rating</span>
            <span>·</span>
            <span>13 Reviews</span>
            <span>·</span>
            <span>Toronto Mobile Detailing</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex py-4 px-8 rounded-lg bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors"
            >
              Book Now
            </Link>
            <a
              href="tel:+16478237338"
              className="inline-flex py-4 px-8 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
            >
              Call (647) 823-7338
            </a>
          </div>
        </div>

        <div className="relative mt-10 lg:mt-0 min-h-[300px] sm:min-h-[360px] lg:min-h-[480px] w-full flex items-stretch">
          <div className="absolute inset-0 w-full h-full min-h-[300px] lg:min-h-[480px] lg:left-1/4 lg:right-0">
            {usePhotoHero ? (
              <Image
                src={HERO_IMAGE_URL}
                alt=""
                fill
                className="object-cover object-left"
                sizes="(max-width: 1023px) 100vw, 50vw"
                priority
              />
            ) : (
              <HeroScene mobile={mobile} reduceMotion={reduceMotion} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
