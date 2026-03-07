"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const HERO_IMAGE_URL = process.env.NEXT_PUBLIC_HERO_IMAGE || "";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(headlineRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
      .fromTo(subRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.35")
      .fromTo(trustRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45 }, "-=0.3")
      .fromTo(ctaRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.25");
    if (visualRef.current) {
      tl.fromTo(visualRef.current, { opacity: 0, scale: 0.98 }, { opacity: 1, scale: 1, duration: 0.6 }, "-=0.6");
    }
  }, []);

  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden lg:min-h-[80vh]">
      {/* Soft gradient behind headline for depth */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-bg via-bg to-accent/5 lg:from-transparent lg:via-transparent lg:to-accent/[0.07]" aria-hidden />

      <div className="relative z-10 max-w-[1100px] mx-auto w-full px-4 py-14 lg:py-20 lg:grid lg:grid-cols-[1fr,1fr] lg:gap-12 lg:items-center">
        <div className="max-w-xl">
          <h1
            ref={headlineRef}
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.15] tracking-tight mb-5"
          >
            Mobile Detailing in Toronto That Comes to You
          </h1>
          <p
            ref={subRef}
            className="text-lg md:text-xl text-text-muted leading-relaxed mb-6 max-w-[32rem]"
          >
            Interior and exterior detailing done at your driveway, condo, or location — with real
            attention to detail and local 5-star service.
          </p>

          {/* Trust strip — badge styling */}
          <div
            ref={trustRef}
            className="flex flex-wrap items-center gap-2 text-sm mb-8"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium">
              <span className="tracking-wider">★★★★★</span> 5.0
            </span>
            <span className="text-text-muted">13 Google Reviews</span>
            <span className="text-border">·</span>
            <span className="text-text-muted">Toronto</span>
          </div>

          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group inline-flex py-4 px-8 rounded-xl bg-accent text-bg font-semibold hover:bg-accent-hover transition-all duration-200 shadow-[0_0_0_0_rgba(201,162,39,0.4)] hover:shadow-[0_0_24px_2px_rgba(201,162,39,0.25)]"
            >
              Book Now
            </Link>
            <a
              href="tel:+16478237338"
              className="inline-flex py-4 px-8 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
            >
              Call (647) 823-7338
            </a>
          </div>
        </div>

        {/* Hero visual — photo or premium placeholder */}
        <div
          ref={visualRef}
          className="relative mt-12 lg:mt-0 min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] w-full rounded-2xl overflow-hidden border border-border/80 bg-bg-card"
        >
          {HERO_IMAGE_URL ? (
            <Image
              src={HERO_IMAGE_URL}
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 1023px) 100vw, 50vw"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-2xl">
                ✨
              </div>
              <p className="text-text-muted text-sm max-w-[240px]">
                Add a hero image: glossy car, wheel detail, or before/after. Use{" "}
                <code className="text-accent/90 text-xs">NEXT_PUBLIC_HERO_IMAGE</code> or drop an image in <code className="text-accent/90 text-xs">public/</code>.
              </p>
            </div>
          )}

          {/* Floating trust pill over image */}
          <div className="absolute bottom-4 left-4 right-4 lg:right-auto lg:left-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-bg/90 backdrop-blur border border-white/10 text-white text-sm font-medium">
              <span className="text-accent">★★★★★</span> 5.0 · 13 reviews
            </span>
            <span className="hidden sm:inline-flex items-center px-3 py-2 rounded-lg bg-bg/90 backdrop-blur border border-white/10 text-text-muted text-sm">
              Mobile Detailing Toronto
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
