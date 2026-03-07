"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const HERO_IMAGE_URL = process.env.NEXT_PUBLIC_HERO_IMAGE || "";

export default function Hero() {
  const navRef = useRef<HTMLElement | null>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof document === "undefined") return;
    navRef.current = document.querySelector("header");
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (navRef.current) {
      tl.fromTo(navRef.current, { y: -12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
    }
    tl.fromTo(line1Ref.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55 }, "-=0.3")
      .fromTo(line2Ref.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.4")
      .fromTo(line3Ref.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.4")
      .fromTo(subRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.3")
      .fromTo(trustRef.current, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45 }, "-=0.35")
      .fromTo(ctaRef.current, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.3");

    if (visualRef.current && maskRef.current) {
      tl.fromTo(
        maskRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 0.9, ease: "power3.inOut" },
        "-=0.7"
      );
    }
  }, []);

  return (
    <section className="relative min-h-[75vh] flex flex-col justify-center overflow-hidden lg:min-h-[88vh]">
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-bg via-bg/95 to-bg lg:via-transparent"
        aria-hidden
      />

      <div className="relative z-10 max-w-[1200px] mx-auto w-full px-4 py-12 lg:py-16 lg:grid lg:grid-cols-[0.95fr,1.05fr] lg:gap-16 lg:items-center">
        <div className="max-w-[28rem]">
          <h1 className="text-3xl md:text-4xl lg:text-[2.9rem] xl:text-[3.4rem] font-extrabold text-white leading-[1.08] tracking-tighter mb-6">
            <span ref={line1Ref} className="block">
              Mobile detailing
            </span>
            <span ref={line2Ref} className="block text-accent">
              that comes to you.
            </span>
            <span ref={line3Ref} className="block mt-1 text-white/95">
              Done right across Toronto.
            </span>
          </h1>
          <p
            ref={subRef}
            className="text-base md:text-lg text-text-muted leading-relaxed mb-6 max-w-[26rem] tracking-tight"
          >
            Interior and exterior detailing at your driveway, condo, or location — real attention to
            detail and local 5-star service.
          </p>

          <div ref={trustRef} className="flex flex-wrap items-center gap-2 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-accent/10 border border-accent/25 text-accent font-semibold text-sm">
              <span className="tracking-wider">★★★★★</span> 5.0
            </span>
            <span className="text-text-muted text-sm">13 Google Reviews</span>
            <span className="text-border">·</span>
            <span className="text-text-muted text-sm">Toronto</span>
          </div>

          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="btn-primary-hero inline-flex py-4 px-8 rounded-xl bg-accent text-bg font-semibold hover:bg-accent-hover transition-all duration-300"
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

        <div
          ref={visualRef}
          className="relative mt-14 lg:mt-0 min-h-[320px] sm:min-h-[380px] lg:min-h-[min(65vh,520px)] w-full rounded-2xl overflow-hidden"
        >
          <div
            ref={maskRef}
            className="absolute inset-0 rounded-2xl overflow-hidden"
            style={{ clipPath: "inset(0 0 0 0)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-accent/10 pointer-events-none" />
            {HERO_IMAGE_URL ? (
              <Image
                src={HERO_IMAGE_URL}
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 1023px) 100vw, 55vw"
                priority
              />
            ) : (
              <div className="absolute inset-0 bg-bg-card flex flex-col items-center justify-center gap-4 p-8 text-center border border-border rounded-2xl">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center text-3xl">
                  ✨
                </div>
                <p className="text-text-muted text-sm max-w-[260px]">
                  Add a premium hero image: glossy car, wheel detail, or before/after. Set{" "}
                  <code className="text-accent/90 text-xs">NEXT_PUBLIC_HERO_IMAGE</code> or add to{" "}
                  <code className="text-accent/90 text-xs">public/</code>.
                </p>
              </div>
            )}
          </div>

          <div className="absolute bottom-5 left-5 right-5 lg:right-auto lg:max-w-[220px] flex flex-col gap-2">
            <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-bg/95 backdrop-blur-sm border border-white/10 text-white text-sm font-medium shadow-lg">
              <span className="text-accent">★★★★★</span> 5.0 · 13 reviews
            </span>
            <span className="inline-flex items-center px-4 py-2 rounded-xl bg-bg/90 backdrop-blur-sm border border-white/10 text-text-muted text-xs font-medium">
              Mobile Detailing Toronto
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
