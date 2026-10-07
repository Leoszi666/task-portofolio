# Teguh Ilham Saputra — Portfolio

Single-page personal portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Stack

- Next.js 15 (App Router, fully static prerender)
- TypeScript, strict mode
- Tailwind CSS v4 — two-token palette (`--paper` / `--ink`) with the default palette disabled; all other values are ink at reduced opacity
- Inter 400/600 via `next/font`
- No dependencies beyond the Next.js/React base

## Getting started

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

## Project structure

- `app/` — layout, page, global styles (design tokens, motion rules, reduced-motion)
- `components/` — section components, `ui/` primitives (Button, Tag, SectionHeader), `icons.tsx` (inline SVGs, no icon font)
- `data/` — `site.ts` (all site copy, typed), `projects.ts` (project cards; empty = two placeholder shells render)
- `public/` — `me.jpg` (hero photo), `cv/Teguh-Ilham-Saputra-CV.pdf`. The navbar logo is an inline SVG component (`components/Logo.tsx`) using `currentColor`, so it follows the theme; `app/icon.svg` is the favicon.
- `docs/` — design rulebook (git-ignored, local only; never tracked)

## Content rules

All visible copy is locked and lives in `data/site.ts`. Missing values (e.g. LinkedIn URL) are `undefined` and the corresponding element renders nothing — no placeholders. Project cards are empty shells by design until real entries are added to `data/projects.ts`.

## Deploy

`npm run build` emits a fully static site; deployable to any Node host or Vercel. The CV download link (`/cv/Teguh-Ilham-Saputra-CV.pdf`) should be smoke-tested on the deployed URL.
