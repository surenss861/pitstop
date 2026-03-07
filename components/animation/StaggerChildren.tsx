"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type StaggerVariant = "up" | "scale" | "lateral";

type StaggerChildrenProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  variant?: StaggerVariant;
};

const staggerFrom = {
  up: { y: 28, opacity: 0 },
  scale: { scale: 0.92, opacity: 0 },
  lateral: { x: 24, opacity: 0 },
};

const staggerTo = {
  up: { y: 0, opacity: 1 },
  scale: { scale: 1, opacity: 1 },
  lateral: { x: 0, opacity: 1 },
};

export default function StaggerChildren({
  children,
  className = "",
  stagger = 0.1,
  variant = "up",
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const childEls = el.querySelectorAll(".stagger-item");
    gsap.fromTo(
      childEls,
      staggerFrom[variant],
      {
        ...staggerTo[variant],
        duration: 0.5,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [stagger, variant]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
