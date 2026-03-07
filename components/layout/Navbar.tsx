"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/mobile-detailing-toronto", label: "Toronto" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-[1100px] mx-auto px-4 flex items-center justify-between h-16 lg:h-18">
          <Link href="/" className="font-bold text-lg text-white tracking-tight">
            PitStop <span className="text-accent">Polish</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative after:absolute after:left-0 after:bottom-[-2px] after:h-px after:bg-accent after:transition-transform after:origin-right ${
                  pathname === link.href
                    ? "text-white after:w-full"
                    : "text-text-muted hover:text-white after:w-0 hover:after:w-full after:origin-left"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl text-bg font-semibold text-sm bg-accent hover:bg-accent-hover transition-colors"
            >
              Book Now
            </Link>
          </nav>

          <a
            href="tel:+16478237338"
            className="hidden md:inline-flex px-5 py-2.5 rounded-xl text-bg font-semibold text-sm bg-accent hover:bg-accent-hover transition-colors"
            aria-label="Call us"
          >
            Call (647) 823-7338
          </a>

          <button
            type="button"
            className="md:hidden p-2 text-white"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[100] bg-bg flex flex-col p-8 transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex justify-end">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="p-2 text-white"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-4 mt-4" aria-label="Mobile menu">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg text-white py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+16478237338"
            className="mt-4 py-3 px-4 rounded-xl bg-accent text-bg font-semibold text-center"
            onClick={() => setMobileOpen(false)}
          >
            Call (647) 823-7338
          </a>
          <Link
            href="/contact"
            className="py-3 px-4 rounded-xl border-2 border-accent text-accent font-semibold text-center"
            onClick={() => setMobileOpen(false)}
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </>
  );
}
