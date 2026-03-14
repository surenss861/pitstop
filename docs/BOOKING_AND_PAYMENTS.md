# PitStop Polish — Booking & payments (Square)

Single reference for how booking and payments should work once Square is live.

**Env:** Copy `.env.example` to `.env.local` and fill in your values. Never commit `.env` or `.env.local`. Store **only** `NEXT_PUBLIC_BOOKING_URL` in Vercel/host env if you want "Book Now" to point to Square; keep `SQUARE_ACCESS_TOKEN` and other secrets server-side and **rotate the access token** in the Square Developer Console if it was ever exposed (e.g. in chat or logs).

---

## Recommended stack

| Need | Use |
|------|-----|
| Online booking | **Square Appointments** |
| Deposits, fixed packages, one-off payments | **Square Payment Links / Checkout** |
| Memberships (recurring) | **Square subscription checkout** |
| In-person tap at job site (later) | **Square Terminal** |

**Flow:** Website → booking or quote → Square Appointments or quote form → Square payment/deposit → confirmation → follow-up.

---

## Service / payment split

| Service type | Flow |
|--------------|------|
| **Basic, Interior, Exterior, Full Detail** | Direct booking (Square Appointments). |
| **Paint Correction, Ceramic Coating** | Quote/consultation first (contact form or call), then Square deposit/payment link once price is set. |
| **Memberships** | Choose plan on site → Square **subscription checkout** → confirm → internal follow-up. |
| On-site card tap (later) | Square Terminal. |

---

## CTAs when Square is live

- **Primary CTA:** **Book Now** → Square Appointments (or your Square booking page URL).
- **Secondary CTA:** **Get a Quote** → `/contact` (quote form).

For high-ticket (correction, coating), keep “Get a Quote” or “Request a quote” as the main action; after you qualify the job, send a Square payment link for deposit.

**Implementation:** When you have your Square Appointments booking URL, set it in env as `NEXT_PUBLIC_BOOKING_URL` and point the primary “Book Now” button to it site-wide (hero, CTASection, nav, sticky CTA). Leave “Get a Quote” linking to `/contact`.

---

## Square setup checklist

- [ ] Create Square Appointments account.
- [ ] Add bookable services (Full Detail, Interior, Exterior, Basic, etc.).
- [ ] Enable online booking and get booking URL.
- [ ] Enable **Reserve with Google** (via Square Appointments).
- [ ] Enable **Instagram / Facebook Book Now** (Square online booking site).
- [ ] Create **Square Payment Links** for deposits and fixed-price packages.
- [ ] Set up **Square subscription checkout** for membership plans (Essential, Premium Care, Showroom Club).
- [ ] (Later) Square Terminal for in-person payments at job site.

---

## On the website today

- **`/contact` is the quote page only** — headline “Request a Quote”, not “Contact & Book Now”. It is for paint correction, ceramic coating, memberships, custom jobs, and anything that needs pricing before booking. Standard details (Basic, Interior, Exterior, Full) go to Square when `NEXT_PUBLIC_BOOKING_URL` is set.
- **Contact/quote form** stays the main capture for “Get a Quote” and for correction/coating/membership inquiries.
- **Membership page** can link “Join [plan]” to Square subscription checkout once you have the links.
- No custom Square API integration required for launch: use Square-hosted booking page and payment links to get live fast.

---

## Optional later

- Custom booking UI that calls Square APIs.
- Webhooks for payment confirmation → email/SMS or CRM.
- Deposit-only logic per service (e.g. correction = 50% deposit via payment link).

*Ref: Square Checkout API, Reserve with Google, Instagram/Facebook booking via Square.*
