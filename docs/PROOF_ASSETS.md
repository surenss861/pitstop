# PitStop Polish — Proof asset spec

**Goal:** Replace generic imagery with detailing-proof assets so the site feels like a premium local service brand.

---

## Asset rules

**Use images that communicate:**
- Gloss and finish quality
- Correction (paint clarity, swirl removal)
- Surface care (trim, leather, glass)
- Wheel/tire detail
- Interior reset
- Coating/protection result
- Real mobile service context (driveway, condo, office)

**Do not use:**
- Scenic car wallpaper
- Dealership-style wide car photos
- Generic sports car imagery
- Car culture/tuner visuals unless they show detailing result quality

**Image treatment:** Consistent darker grading, controlled highlights, avoid oversaturated blue/orange edits. Tight crops beat wide environmental photos. Use macro/detail crops wherever possible.

---

## Hero candidates (3–5 options)

Best subjects:
- Polished black hood reflection
- Wheel/tire shine close-up
- Leather/interior detail with controlled lighting
- Hand + microfiber on paint
- Elegant before/after crop
- Premium driveway service shot

**Deploy:** Set `NEXT_PUBLIC_HERO_IMAGE` or replace default in `components/home/Hero.tsx`.

---

## Gallery / results (12–18 images)

| Category | Count | Notes |
|----------|--------|------|
| Interior reset | 3 | Seats, dash, carpets, trim |
| Exterior gloss / corrected paint | 3 | Reflection, clarity |
| Wheel & tire finish | 2 | Close-up, dressed |
| Trim restoration | 2 | Black trim, plastics |
| Driveway / condo / office context | 2 | Real service location |
| Before/after pairs | 2 | Side-by-side or sequential |
| Correction / coating proof | 2 | Gloss, beading, clarity |

**Deploy:** Update `lib/gallery-data.ts` — replace `src`, adjust `label` and `category` as needed.

---

## Service proof (1–2 images per)

- **Full Detail** — interior + exterior result
- **Paint Correction** — before/after or gloss shot
- **Ceramic Coating** — beading or reflection
- **Interior Detail** — cabin reset
- **Exterior Detail** — wash + protection result

**Deploy:** Add optional proof blocks to `app/services/page.tsx` or keep in gallery and link.

---

## Deployment order

1. Replace homepage hero image
2. Replace homepage gallery preview imagery
3. Replace gallery page imagery
4. Add one proof image block to Services page (optional)
5. Add one credibility/proof image to About or Toronto page (optional)

---

*See also: `docs/NEXT_STEPS.md` for roadmap.*
