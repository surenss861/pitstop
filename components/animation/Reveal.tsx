"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealVariant = "default" | "scale" | "lateral";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
};

const variantFrom = {
  default: { y: 36, opacity: 0 },
  scale: { scale: 0.96, opacity: 0 },
  lateral: { x: -32, opacity: 0 },
};

const variantTo = {
  default: { y: 0, opacity: 1 },
  scale: { scale: 1, opacity: 1 },
  lateral: { x: 0, opacity: 1 },
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "default",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      variantFrom[variant],
      {
        ...variantTo[variant],
        duration: 0.6,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [delay, variant]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
