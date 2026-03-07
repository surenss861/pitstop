"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const DEFAULT_HERO_IMAGE =
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=85";
const HERO_IMAGE_URL = process.env.NEXT_PUBLIC_HERO_IMAGE || DEFAULT_HERO_IMAGE;

export default function Hero() {
  const navRef = useRef<HTMLElement | null>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const statRef = useRef<HTMLDivElement>(null);
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
    tl.fromTo(eyebrowRef.current, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, "-=0.2")
      .fromTo(line1Ref.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.35")
      .fromTo(line2Ref.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.4")
      .fromTo(line3Ref.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.4")
      .fromTo(subRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45 }, "-=0.3")
      .fromTo(trustRef.current, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, "-=0.35")
      .fromTo(statRef.current, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, "-=0.3")
      .fromTo(ctaRef.current, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45 }, "-=0.3");

    if (visualRef.current && maskRef.current) {
      tl.fromTo(
        maskRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 1, ease: "power3.inOut" },
        "-=0.8"
      );
    }
  }, []);

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden lg:min-h-[95vh]">
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/98 to-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_75%_45%,rgba(201,162,39,0.07)_0%,transparent_55%)]" />
        <div className="absolute bottom-0 right-0 w-[80%] h-[55%] bg-[radial-gradient(ellipse_at_bottom_right,rgba(201,162,39,0.05)_0%,transparent_50%)]" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom right, rgba(255,255,255,0.025) 0%, transparent 45%, transparent 100%)" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="lg:grid lg:grid-cols-[minmax(0,0.45fr)_minmax(0,1fr)] lg:gap-12 xl:gap-16 lg:items-center">
          {/* Left: copy only */}
          <div className="max-w-[30rem]">
            <p
              ref={eyebrowRef}
              className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold mb-5"
            >
              Mobile Detailing Toronto
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-extrabold text-white leading-[1.06] tracking-tighter mb-5">
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
            <p ref={subRef} className="text-base text-text-muted leading-relaxed mb-6 max-w-[28ch] tracking-tight">
              Interior and exterior at your driveway or location. Real attention to detail, local 5-star service.
            </p>

            <div ref={trustRef} className="flex flex-wrap items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-accent/10 border border-accent/25 text-accent font-semibold text-sm">
                <span className="tracking-wider">★★★★★</span> 5.0
              </span>
              <span className="text-text-muted text-sm">13 Google Reviews</span>
              <span className="text-border">·</span>
              <span className="text-text-muted text-sm">Toronto</span>
            </div>

            <div ref={statRef} className="flex items-center gap-6 mb-8 text-xs text-text-muted tracking-tight">
              <span><strong className="text-white font-semibold">5.0</strong> rating</span>
              <span><strong className="text-white font-semibold">Toronto</strong> & GTA</span>
              <span><strong className="text-white font-semibold">Mobile</strong> — we come to you</span>
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

          {/* Right: campaign panel — bleeds, no box */}
          <div
            ref={visualRef}
            className="relative mt-12 lg:mt-0 w-full lg:min-h-[min(82vh,720px)] flex items-center"
          >
            <div
              ref={maskRef}
              className="absolute inset-0 lg:inset-y-0 lg:left-0 lg:right-[-5vw] xl:right-[-8vw] overflow-hidden rounded-xl lg:rounded-none lg:rounded-l-2xl"
              style={{ clipPath: "inset(0 0 0 0)" }}
            >
              <Image
                src={HERO_IMAGE_URL}
                alt=""
                fill
                className="object-cover object-center lg:object-[70%_50%]"
                sizes="(max-width: 1023px) 100vw, 65vw"
                priority
              />
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/30 to-transparent lg:from-bg/85 lg:via-bg/25" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
                <div className="absolute left-0 top-0 bottom-0 w-32 lg:w-40 bg-gradient-to-r from-bg to-transparent" />
              </div>
            </div>

            {/* Floating chips only */}
            <div className="absolute bottom-6 left-6 right-6 sm:left-8 sm:right-auto sm:max-w-[220px] flex flex-col gap-3 z-10">
              <span className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-bg/90 backdrop-blur-md border border-white/10 text-white text-sm font-semibold shadow-xl">
                <span className="text-accent">★★★★★</span> 5.0 · 13 reviews
              </span>
              <span className="inline-flex items-center px-4 py-2.5 rounded-xl bg-bg/80 backdrop-blur-md border border-white/10 text-text-muted text-xs font-medium">
                Mobile Detailing Toronto
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );