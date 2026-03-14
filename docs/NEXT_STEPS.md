# Next steps — PitStop Polish

The site is now a real conversion system. The **smartest next order** is:

1. **Replace proof imagery** (biggest lever) — see `docs/PROOF_ASSETS.md`
2. **GTA city pages** (SEO + local conversion) — ✅ done at `/[city]` (e.g. `/mississauga`) with local FAQ
3. **Dedicated mobile conversion pass** — ✅ tightened hero/CTA spacing, path cards, contact form, city chips scroll

---

## 1. Real proof assets

**Why:** Without real photos, the site stays “good website.” With real proof, it feels like a premium detailing brand.

**Replace generic imagery with:**

| Location | Replace with |
|----------|---------------|
| **Hero** | Polished hood reflection, or wheel/tire finish close-up, or gloss detail at driveway |
| **Homepage results** | Real before/after pairs; interior reset; exterior gloss; wheel finish |
| **Gallery** | Same: interior resets, exterior gloss, wheel close-ups, paint correction, ceramic finish, driveway/condo context |
| **Services page** | Optional proof blocks per section: correction result, coating result, interior/exterior |
| **Toronto / GTA pages** | Driveway, condo, or office service context when available |

**Asset checklist:**

- [ ] Hero: one strong “premium detail” image (hood reflection, wheel, or gloss)
- [ ] Gallery: before/after pairs (interior, exterior, full detail)
- [ ] Gallery: wheel & tire finish close-ups
- [ ] Gallery: paint correction / gloss proof
- [ ] Gallery: ceramic coating finish shots
- [ ] Gallery: driveway or condo/office context (optional)
- [ ] Update `lib/gallery-data.ts` and hero env (`NEXT_PUBLIC_HERO_IMAGE`) when assets are ready

---

## 2. GTA city pages

**Why:** Widens search coverage (“mobile detailing Mississauga”, etc.) without cluttering the main site.

**Pages:** Mississauga, Oakville, Vaughan, Markham, Brampton, Pickering, King City.

**Template (from Toronto):** Localized hero, same use cases (driveway, condo, office), trust block, services strip, service area mention, local CTA. Optional: short local FAQ per city later.

**URLs:** `/mobile-detailing-gta/mississauga`, `/mobile-detailing-gta/oakville`, … (Toronto remains `/mobile-detailing-toronto`). Linked from the Service Areas page (“Mobile detailing by city”).

---

## 3. Mobile conversion pass

**Why:** Many bookings will come from mobile; experience should be intentional, not just responsive.

**Focus:**

- Tighter hero (shorter copy, stronger crop)
- Shorter copy blocks on key sections
- Faster service selection (path block + CTAs)
- Fewer reviews visible at once on mobile
- Better mobile gallery (swipe, proof-first)
- Stronger sticky CTA (Call / Get Quote)
- Less scroll fatigue (collapse or shorten secondary sections)

---

*Last updated: conversion pass + GTA city pages.*
