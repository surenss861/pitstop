"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type StaggerChildrenProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

export default function StaggerChildren({
  children,
  className = "",
  stagger = 0.1,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.querySelectorAll(".stagger-item");
    gsap.fromTo(
      children,
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
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
  }, [stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
