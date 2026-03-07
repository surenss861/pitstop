# Vercel deployment – PitStop Polish

## Error: "No Next.js version detected"

If the build fails with:

```text
Warning: Could not identify Next.js version
Error: No Next.js version detected. Make sure your package.json has "next" in either "dependencies" or "devDependencies". Also check your Root Directory setting matches the directory of your package.json file.
```

**Cause:** Vercel is building from a directory that does **not** contain your Next.js app (the folder with `package.json` that has `"next"` in dependencies).

**Fix:**

1. On **GitHub**, open repo `surenss861/pitstop` and see where the Next app lives:
   - If `package.json` (with `"next"` inside) and `app/` are at the **repo root** → in Vercel set **Root Directory** to **blank**.
   - If they’re in a **subfolder** (e.g. `pitstoppolish`, `web`, `app`) → in Vercel set **Root Directory** to that folder name (e.g. `pitstoppolish`).

2. In Vercel: **Project → Settings → General → Root Directory**.
   - Either leave it **empty** (app at repo root), or set it to the **single folder** that contains `package.json` and `app/`.

3. Save and **Redeploy**.

Your local `package.json` has `"next": "14.2.5"` in `dependencies`; the same file must be the one Vercel uses (in the directory set as Root Directory).

---

## 404 NOT_FOUND after a successful build

Use this when the deploy succeeds but the site returns **404 NOT_FOUND**. It’s almost always a **Root Directory** or **Output Directory** setting.

## Repo structure (this project)

The Next.js app lives at the **root** of this repo:

```
pitstoppolish/          ← repo root (or your folder name)
  app/
    page.tsx            ← homepage
    layout.tsx
    ...
  public/
    tuner_car_wheel_free.glb
  package.json
  next.config.mjs
  tsconfig.json
  ...
```

## Vercel settings

### If this repo root IS the Next app (one folder = whole repo)

- **Root Directory:** leave **blank**
- **Framework Preset:** Next.js
- **Build Command:** (default)
- **Output Directory:** leave **default** (do not set a custom one)
- **Install Command:** (default)

### If this folder is inside a bigger repo (e.g. `my-repos/pitstoppolish/`)

- **Root Directory:** `pitstoppolish` (or whatever the folder name is that contains `app/`, `package.json`, `next.config.mjs`)
- **Output Directory:** default
- Everything else as above.

## Checklist

1. Root Directory = folder that contains `app/`, `package.json`, `next.config.mjs`, `public/`. Blank if that’s the repo root.
2. Do **not** set a custom Output Directory for normal Next.js.
3. Confirm `app/page.tsx` and `app/layout.tsx` exist (they do).
4. `public/tuner_car_wheel_free.glb` is present for the hero wheel.
5. After changing settings: **Redeploy** (Deployments → Redeploy, or push an empty commit).

## Sanity check before redeploy

```bash
npm run build
npm run start
```

Open http://localhost:3000. If the homepage loads in production mode, the app is fine and the 404 is Vercel config.
