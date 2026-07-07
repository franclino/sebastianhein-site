# sebastianhein.dev

Personal site for **Sebastian Hein** — autonomous on-chain + AI systems. Next.js 15 (App Router) + React 19, TypeScript, zero-config, deployable free.

Design direction: **"mission control for one"** — a disciplined dark instrument-panel layout with one electric-teal accent and a single kinetic centerpiece (the data-pulse "starmap" hero). Content is the frozen truth from `../07_Brand-and-Positioning-Canonical.md`. **Never** add raw backtest return %s.

## Run locally
```bash
cd website
npm install
npm run dev        # http://localhost:3000
```

## Build / verify
```bash
npm run build      # must pass clean
npm run start      # serve the production build
```

## Deploy (free)
- **Vercel** (easiest): push to GitHub → import at vercel.com → zero config. Add domain `sebastianhein.dev`.
- **Cloudflare Pages**: connect repo, framework preset "Next.js". Also free.

## Structure
| Path | What |
|---|---|
| `app/layout.tsx` | Metadata, Open Graph, Twitter card, JSON-LD Person |
| `app/page.tsx` | All sections (server component) |
| `app/globals.css` | Design tokens (both themes) + all component styles |
| `app/components/Starmap.tsx` | Client canvas hero — data-pulse stand-in |
| `app/components/ThemeToggle.tsx` | Light/dark toggle (overrides OS pref) |
| `public/og.png` | Share image + reduced-motion hero poster |

## Grade-A upgrade path (staged, not blocking v1)
This v1 ships the **approved look** on a minimal, fast, free stack. To reach the full "grade-A" target from `../11_Website-Build-Plan.md`:

1. **Real starmap hero** — replace `Starmap.tsx`'s lightweight canvas with a React Three Fiber scene ported from the real Three.js app (`viz_server.py` in the capitalMagic repo). Feed it a **bundled snapshot of `scripts/visualizer/mindmap.json`** (node/edge data) so it animates without depending on the Tailscale-only Pi. Add a render-tier hook (desktop full / mobile reduced / reduced-motion → `public/og.png` poster).
   - `npm i three @react-three/fiber @react-three/drei`
2. **Scroll choreography** — add GSAP + ScrollTrigger + Lenis for the pinned hero and the scroll-scrubbed "system" walkthrough. Wire Lenis from the GSAP ticker (`autoRaf:false`, `lagSmoothing(0)`).
   - `npm i gsap lenis`
3. **Type** — self-host TASA Orbiter (display) + Inter (body) via `next/font/local`; swap the system stack in `globals.css`.
4. **Media** — compress the Blender cinematic (AV1/H.265 + WebM, poster, play-on-intersection) into a "System" interstitial.
5. **OG image** — generate a dynamic 1200×630 card via `next/og` (ImageResponse) instead of the static PNG.

## Placeholders to finalize
- Contract addresses in the Proof section (real Arbiscan links).
- Real `hello@sebastianhein.dev`, `cal.com/sebastianhein`, and social URLs once accounts exist.
