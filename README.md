# Teguh Ilham Saputra — Personal Portfolio

Personal portfolio website built as a single-page application for the BINUS University web development assignment.

**Live:** https://task-portofolio-ixvxsqa0g-leoszi.vercel.app

---

## Tech Stack

- [Next.js](https://nextjs.org) 15 (App Router, statically prerendered)
- TypeScript (strict)
- Tailwind CSS v4 (two-token palette: Ink `#111111` / Paper `#FAFAFA`, default palette disabled)
- Inter via `next/font` (400/600/700)
- Deployed on [Vercel](https://vercel.com)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

## Project Structure

```
app/          # Next.js App Router pages, layout, design tokens (globals.css), favicon
components/   # Navbar, Hero, About, Skills, ProjectGrid, ProjectCard, Contact, Footer + ui/ primitives
data/         # Content source of truth (site.ts, projects.ts)
public/cv/    # ATS-formatted CV (PDF)
docs/         # Design rulebook (not tracked in git)
```

## Features

- **Dark / light mode** — navbar toggle, system-preference default, persisted in `localStorage`, no flash on load (two-token variable swap)
- **Interactive hero** — oval grayscale photo, headline words scattered around it as section links, staggered entrance reveal + gentle float (all disabled under `prefers-reduced-motion`)
- **Sticky-deck project cards** — cards stack on scroll (pure CSS `position: sticky`); empty state renders "Coming soon" cards until projects are added in `data/projects.ts`
- **Sticky navbar with scroll-spy** — active section underlined via `IntersectionObserver`; mobile disclosure menu
- **Contact card panel** — Email, LinkedIn, GitHub link rows (`rel="noopener noreferrer"` on external links)
- **CV download** — ATS-formatted PDF (`public/cv/`)
- **Accessibility** — skip link, single `<h1>`, landmarks, visible focus rings, contrast ≥ 4.5:1, smooth-scroll navigation with `scroll-margin-top`
- **Smooth scroll navigation between sections**

## Editing Content

All copy is data-driven — no text is hardcoded in components:

- **`data/site.ts`** — name, hero words + link targets, bio, timeline, skills, contact links, nav links. Optional fields that are `undefined` render nothing.
- **`data/projects.ts`** — project cards. Real card = `{ media, category, title, description, stack, repoUrl, demoUrl? }`; a "coming soon" card is `{ placeholder: true }`; empty array = two coming-soon cards.

After content edits, redeploy (push to `main` redeploys on Vercel automatically, or `docker compose up --build -d` for the container).

## Docker

Multi-stage build on `node:22-alpine` (standalone output, non-root user):

```bash
docker compose up --build -d   # build + run on :3000
docker compose down            # stop
```

## Assignment

**Course:** Computer Science, BINUS University  
**NIM:** 2802405844  
**Submission:** Final Submission — Personal Website, Peer Review & ATS-Friendly CV
