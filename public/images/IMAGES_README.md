# PitStop Polish — Image map

**Live gallery + hero paths are defined in `lib/site-images.ts`** and point at canonical files like `gallery/gallery-8.jpg`, `gallery/gallery-image1.jpg`, etc. Those filenames match the actual photo content (interior vs exterior vs wheel).

You can still use semantic names (`exterior-bentley.jpg`, …) as optional copies for your own workflow; swapping those does not change the site until you update `site-images.ts` or repoint imports.

**Cropping:** See **CROPPING_GUIDE.md** in this folder for aspect ratio, orientation, and crop focus per file.

## Hero (`hero/`)

| File | Use for | Description |
|------|--------|-------------|
| `hero-bentley.jpg` | Homepage hero | **Black Bentley exterior**, front/3-quarter glossy — strongest luxury signal |
| `hero-mercedes.jpg` | Backup hero, Toronto hero | **Silver Mercedes coupe** exterior in driveway |

## Gallery (`gallery/`) — 12 curated

| File | Display label | Category |
|------|----------------|----------|
| `exterior-bentley.jpg` | Black Bentley exterior | Exterior |
| `interior-tesla-black.jpg` | Tesla interior | Interior |
| `detail-wheel-mercedes.jpg` | Mercedes wheel close-up | Wheels |
| `exterior-mercedes.jpg` | Silver Mercedes exterior | Exterior |
| `interior-tesla-white.jpg` | Tesla white interior | Interior |
| `detail-wheel-audi.jpg` | Audi wheel close-up | Wheels |
| `exterior-jeep.jpg` | Jeep Wrangler exterior | Exterior |
| `interior-defender-front.jpg` | Defender front interior | Interior |
| `exterior-porsche.jpg` | Red Porsche exterior | Exterior |
| `variety-bmw-x6.jpg` | BMW X6 rear | Full detail |
| `interior-alfa-red.jpg` | Alfa Romeo red interior | Interior |
| `variety-classic-turquoise.jpg` | Classic car | Full detail |

## Category rules (strict)

- **Interior** — cabin/seats/dash only. No wheel or exterior shots.
- **Exterior** — full-vehicle or strong 3/4 body. No cabin-only shots.
- **Wheels** — wheel/rim close-up only. No full-body shots.
- **Full detail** — whole-car finished result. Same exterior files can appear here.

Filters use these rules so labels always match the image.

## Before going live

- Crop or blur **license plates** and **house numbers**
- Crop tighter so the **car is the subject** (less driveway/house)
- Keep style consistent: glossy, clean, strong reflections

## Homepage proof strip

Uses: `interior-tesla-black.jpg`, `detail-wheel-mercedes.jpg`, `exterior-jeep.jpg` (from gallery).

## Services / Toronto / About

The same gallery files are referenced in `lib/site-images.ts` for interior grid, exterior grid, ceramic/correction, and about page. Replace the files above; no extra filenames needed.
