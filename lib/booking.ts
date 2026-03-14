/**
 * Booking and quote URLs for CTAs.
 * When NEXT_PUBLIC_BOOKING_URL is set (Square Appointments), "Book Now" links there.
 * Otherwise primary CTA stays "Get a Quote" → /contact.
 */

export const bookingUrl: string | null =
  typeof process !== "undefined" && process.env.NEXT_PUBLIC_BOOKING_URL
    ? process.env.NEXT_PUBLIC_BOOKING_URL
    : null;

export const quoteUrl = "/contact";

/** Primary CTA href: Square booking when configured, else quote form */
export const primaryCtaHref = bookingUrl ?? quoteUrl;

/** Primary CTA label: "Book Now" when Square URL is set, else "Get a Quote" */
export const primaryCtaLabel = bookingUrl ? "Book Now" : "Get a Quote";

/** Secondary CTA: when Square is set, show Get a Quote; else show Call Now */
export const secondaryCtaHref = bookingUrl ? quoteUrl : "tel:+16478237338";
export const secondaryCtaLabel = bookingUrl ? "Get a Quote" : "Call Now";
