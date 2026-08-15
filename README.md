# Raman Ola — Personal Portfolio

Premium monochrome digital experience for Raman Ola (AI Specialist).

Graphics-first. Then product. Then writing.  
The site itself is part of the proof of work.

---

## Run locally

```bash
cd raman-ola-portfolio
npm install
npm run dev
```

Open http://localhost:3000

---

## Add your real assets

### 1. Profile picture (required)
```
public/profile.png
```
Used in the About section (circular) and as the special “Entering workspace” transition when someone clicks **See my work**.

### 2. Graphics (auto-renders, any filenames)
Drop images into these folders. They appear automatically, each in its own glass frame with atmospheric particles:

```
public/work/graphics/altiq-ai/
public/work/graphics/chainlift/
public/work/graphics/aethreon-iq/
public/work/graphics/others/
```

Order on the page is fixed:  
**ALTIQ AI → CHAINLIFT → AETHREON IQ → OTHERS**

Supported: `.png` `.jpg` `.jpeg` `.webp` `.gif` `.avif`  
Original aspect ratios are preserved. No cropping, no stretching.

### 3. Website screenshots
```
public/work/websites/altiq-ai/screenshot.png
public/work/websites/axiomcloud-ai/screenshot.png
public/work/websites/aethreon-intelligence/screenshot.png
public/work/websites/uncle-ubong/screenshot.png
```

### 4. Favicon
Already generated: `public/favicon.svg` (monochrome, matches the brand).

---

## Key features

- Strict black / ash / near-white palette only
- Glassmorphism + cinematic dust particles
- Special PFP zoom transition into the work pages
- Auto-discovery of graphics (no manual cards)
- Fully responsive + accessible focus states
- Reduced-motion friendly
- No emojis
- No invented content

---

## Structure

```
src/
  app/
    page.tsx          → Home (opening, about, capabilities, who I work with, CTA, contact)
    graphics/         → Full graphics archive
    websites/         → Product & portfolio cards
    writing/          → Editorial writing archive
  components/         → Navigation, GlassFrame, ParticleField, Button, PfpTransition, Footer
  data/projects.ts    → Structured project + writing data
  lib/graphics.ts     → Filesystem discovery for graphics folders
```

---

## Deploy

Works on Vercel, Netlify, or any Node host that supports Next.js.

```bash
npm run build
npm start
```

---

Built as a demonstration of the same standards applied to client work.
