# The Mini Agency — Portfolio Site

Boutique creative media production agency portfolio. React + Vite + Tailwind. Static, zero backend.

---

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

Build for production:

```bash
npm run build
```

Output goes to `dist/`.

---

## Deploy (free, no domain needed)

### Option 1 — Vercel (recommended, easiest)

1. Push this folder to a new GitHub repo.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Vercel auto-detects Vite. Click **Deploy**.
4. Done — you'll get `theminiagency.vercel.app` (or rename it in project settings).

Or from the CLI:

```bash
npm i -g vercel
vercel
```

### Option 2 — Netlify (drag and drop)

1. Run `npm run build`.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag the `dist/` folder onto the page.
4. Done — you'll get a `theminiagency.netlify.app` subdomain (rename in site settings).

### Option 3 — GitHub Pages

1. Push to a GitHub repo named `theminiagency`.
2. Install the gh-pages helper:

   ```bash
   npm i -D gh-pages
   ```

3. Add to `package.json` scripts:

   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

4. Run:

   ```bash
   npm run deploy
   ```

5. In the repo on GitHub: **Settings → Pages → Source: gh-pages branch**.
6. Site goes live at `https://<your-username>.github.io/theminiagency/`.

   > For GitHub Pages in a sub-path, set `base: '/theminiagency/'` in `vite.config.js`.

---

## Dropping in real assets

- Put images in `public/work/` (e.g. `public/work/green-hero.jpg`).
- In `src/App.jsx`, inside the `Work` component, swap the placeholder `<div>` inside each `<figure>` for:

  ```jsx
  <img src={`/work/${slug}.jpg`} alt={w.t} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
  ```

- For a hero background video, uncomment the `<video>` tag in the `Hero` component and drop `hero.mp4` into `public/`.
- Replace `public/favicon.svg` and add an `og-image.jpg` (1200×630) to `public/` for social share previews.

---

## Editing content

All copy, services, pillars, works, and clients live as arrays at the top of `src/App.jsx`. Edit inline — no CMS needed.

---

## Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- Google Fonts: Archivo Black (display), Inter (body), Instrument Serif (italic accents)
- CSS-only scroll reveals via IntersectionObserver
- No external animation libraries, no backend

---

**The Mini Agency** · Mumbai · Nagpur
contact@theminiagency.com
