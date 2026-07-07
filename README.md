# sebastianhein.dev

Personal site for **Sebastian Hein** — autonomous on-chain + AI systems. Next.js 15 (App Router) + React 19, TypeScript, static export, deployed on Cloudflare Pages.

Design direction: **"mission control for one"** — a disciplined dark instrument-panel layout with one electric-teal accent. Content is the frozen truth from the private positioning doc.

## House rules (important)
- **Never** show raw backtest return %s. Lead with rigor + the self-catching verification culture.
- **Keep internal system/component names and real code off the public site** — describe capabilities and the public tech stack only.
- The AI layer is **LLM-orchestration + hand-rolled numpy/scipy stats**, not trained ML.

## Run locally
```bash
cd website
npm install
npm run dev        # http://localhost:3000
```

## Build & deploy
```bash
npm run build                                   # static export → out/
npx wrangler pages deploy out --project-name=sebastianhein-site --branch=main
```
Live at **https://sebastianhein.dev** (custom domain on Cloudflare Pages; DNS + SSL auto-managed).

## Structure
| Path | What |
|---|---|
| `app/layout.tsx` | Metadata, Open Graph, Twitter card, JSON-LD Person |
| `app/page.tsx` | All sections (server component) |
| `app/globals.css` | Design tokens (both themes) + all component styles |
| `app/components/ThemeToggle.tsx` | Light/dark toggle (overrides OS pref) |
| `public/og.png` | Share image |

## Optional future polish
- A subtle, non-revealing ambient hero visual (kept intentionally minimal for now).
- Self-hosted display/body fonts.
- A dynamic Open Graph image.
- Real social links once every account is finalized.
