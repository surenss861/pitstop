"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";

// Premium fallback: glossy black car detail (Unsplash). Override with NEXT_PUBLIC_HERO_IMAGE.
const DEFAULT_HERO_IMAGE =
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=85";
const HERO_IMAGE_URL = process.env.NEXT_PUBLIC_HERO_IMAGE || DEFAULT_HERO_IMAGE;

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
    <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden lg:min-h-[90vh]">
      {/* Atmosphere: warm radial, amber glow, light wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/98 to-bg" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_70%_50%,rgba(201,162,39,0.08)_0%,transparent_55%)]"
          aria-hidden
        />
        <div
          className="absolute bottom-0 right-0 w-[70%] h-[60%] bg-[radial-gradient(ellipse_at_bottom_right,rgba(201,162,39,0.06)_0%,transparent_50%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-100"
          style={{ background: "linear-gradient(to bottom right, rgba(255,255,255,0.02) 0%, transparent 40%, transparent 100%)" }}
          aria-hidden
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto w-full px-4 py-12 lg:py-16 lg:grid lg:grid-cols-[0.92fr,1.08fr] lg:gap-14 lg:items-center">
        <div className="max-w-[28rem]">
          <h1 className="text-3xl md:text-4xl lg:text-[2.9rem] xl:text-[3.4rem] font-extrabold text-white leading-[1.08] tracking-tighter mb-6">
            <span ref={line1Ref} className="block">
              Mobile detailing
            </span>
            <span ref={line2Ref} className="block text-accent">
              that comes to you.
            </span>
            <span ref={line3Ref} className="block mt-1 text-white/95">
              Done right in Toronto.
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

        {/* Editorial panel: taller, bleeds, edge fade, floating badges */}
        <div
          ref={visualRef}
          className="relative mt-14 lg:mt-0 w-full lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[58%] lg:max-w-[720px] min-h-[340px] sm:min-h-[400px] lg:min-h-[min(78vh,680px)]"
        >
          <div
            ref={maskRef}
            className="absolute inset-0 overflow-hidden rounded-2xl lg:rounded-l-2xl lg:rounded-r-3xl"
            style={{ clipPath: "inset(0 0 0 0)" }}
          >
            <Image
              src={HERO_IMAGE_URL}
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 1023px) 100vw, 58vw"
              priority
            />
            {/* Edge fade + dark overlay for depth */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden
            >
              <div className="absolute inset-0 bg-gradient-to-r from-bg/90 via-bg/20 to-transparent lg:from-bg/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent lg:w-32" />
            </div>
          </div>

          {/* Floating trust + tag */}
          <div className="absolute bottom-6 left-6 right-6 lg:left-8 lg:right-auto lg:max-w-[240px] flex flex-col gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-bg/90 backdrop-blur-md border border-white/10 text-white text-sm font-semibold shadow-xl">
              <span className="text-accent">★★★★★</span> 5.0 · 13 reviews
            </span>
            <span className="inline-flex items-center px-4 py-2.5 rounded-xl bg-bg/80 backdrop-blur-md border border-white/10 text-text-muted text-xs font-medium">
              Mobile Detailing Toronto
            </span>
          </div>
        </div>
      </div>
    </section>
  );