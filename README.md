# Mohamed Ali — Portfolio

Personal portfolio site for **Mohamed Ali (Abo Malek)**, Founder of AI Solutions — Automation & AI Specialist. Showcases capabilities, project case studies, and track record across the Gulf, the Arab world, and Egypt.

**Live site:** [aisolutions-n8n.com](https://aisolutions-n8n.com)

> This is the personal/founder-voice property, intentionally separate from the AI Solutions company site (`aisolutions22.cloud`). Keeping the two voices distinct is a deliberate brand decision — see [Architecture Decisions](#architecture-decisions).

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 5.4.19 |
| Routing | react-router-dom |
| Styling | Tailwind CSS + shadcn/ui (Radix primitives) |
| Animation | Framer Motion |
| Forms | react-hook-form + zod |
| Data fetching | TanStack Query |
| Build tool | Vite |
| Package manager | bun |

## Hosting & Deployment

This project is **not** hosted on Lovable's own domain infrastructure (the workspace is on the Lite/Free plan, which does not support custom domains). Instead:

```
Lovable (build/edit) → GitHub (this repo) → Cloudflare Workers (Git integration) → aisolutions-n8n.com
```

- **Repo:** `Aisolutions22/moh-ali-portfolio`
- **Deploy target:** Cloudflare Workers, project name `moh-ali-portfolio`
- **Trigger:** every push to `main` triggers an automatic build + deploy via Cloudflare's Git integration (no manual deploy step required)
- **Domain:** `aisolutions-n8n.com`, DNS fully managed on Cloudflare (Nameservers pointed from Hostinger registrar)
- **`www` handling:** `www.aisolutions-n8n.com` is not a separate custom domain — it's handled via a Cloudflare Redirect Rule (301, wildcard match) to the root domain, backed by a placeholder proxied `A` record (`192.0.2.1`, discard-only).

### Required config file: `wrangler.jsonc`

Cloudflare's build auto-detection requires Vite 6+; this project runs Vite 5.4.19. `wrangler.jsonc` at the repo root bypasses auto-detection with an explicit static-assets config:

```jsonc
{
  "name": "moh-ali-portfolio",
  "compatibility_date": "2026-07-30",
  "assets": { "directory": "./dist", "not_found_handling": "single-page-application" }
}
```

The **Build command** must also be set explicitly to `npm run build` in the Worker's build settings — without it, Cloudflare skips straight to `wrangler deploy` and fails because `dist/` doesn't exist yet.

## Local Development

```bash
bun install
bun run dev
```

Build for production:

```bash
bun run build
```

Output goes to `dist/`.

## Project Structure

```
src/
├── components/       # Section-level components (Hero, Capabilities, Stats, etc.)
├── pages/            # Route-level page components
├── lib/
│   ├── content.ts    # Centralized site content (if applicable)
│   └── projects.ts   # Centralized project/case-study data — single source of truth
├── routes/           # Route definitions
└── styles.css        # Design tokens (CSS variables) — no hardcoded hex allowed
```

## Projects / Case Studies System

Individual project case studies live at `/projects` (index) and `/projects/:slug` (detail), sourced from a single data file rather than duplicated across components. Each project page has its own SEO metadata (title, description, Open Graph image) since these pages are shared directly with prospective clients as standalone links.

**Content rule:** case-study text here is written from a first-person, founder perspective — distinct from the company site's client-facing framing of the same projects — to avoid duplicate-content SEO issues across the two properties.

## Design System

| Token | Value | Usage |
|---|---|---|
| Background | `#FFFFFF` | Base background |
| Dark graphite | `#14181C` | Primary text / dark sections |
| Accent (signature orange) | `#E8590C` | CTAs, highlights, active states |
| "Manual process" gray | `#8A8680` | Pre-automation state indicator |

**Fonts:** Almarai (headings, Arabic) · IBM Plex Sans Arabic (body, Arabic) · IBM Plex Mono (stats/numbers) · English sections use the site's standard English stack (not IBM Plex Sans Arabic).

All colors must be referenced via CSS variables in `styles.css` — no hardcoded hex values in components.

## Performance Guidelines

This project prioritizes lightweight interaction over decorative motion:

- Prefer simple modal/popup patterns over heavy inline expand/accordion animations
- No continuous/looping background animations inside interactive cards
- Respect `prefers-reduced-motion` for all animations
- Keep hover effects cheap (opacity/box-shadow transitions, not animation loops)

## Architecture Decisions

- **Personal vs. company voice:** deliberately separated from `aisolutions22.cloud` to keep both brands clear and undiluted.
- **No external links to company site:** all project/case-study content is self-hosted within this domain rather than linking out to `ai-solutions-22.lovable.app`, to preserve visitor trust and SEO authority.
- **Prompts for AI-assisted edits (Lovable) are written in English**, since site content is English-first and Arabic-language prompts have previously caused Arabic text to leak into English sections.

## Contact

Founder: Mohamed Ali (Abo Malek) — AI Solutions
