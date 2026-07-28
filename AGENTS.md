<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# garahanov — personal site notes

## Stack
Next.js 16 (App Router) + React 19 + Tailwind CSS 4 + Framer Motion 12 + Lucide React.
Markdown via gray-matter + remark, rendered **server-side** in `lib/events.ts`.

## Design system: Midnight Observatory
- Obsidian `#050505` / `#0B0C10`, Ivory `#F5F5F0`, Graphite `#8A8A8E`.
- Accents: Focus Blue `#0A84FF`, Quiet Amber `#FF9F0A`, Emerald `#32D74B`.
- Glassmorphism: `bg-white/5 backdrop-blur-2xl border border-white/10`.
- Motion: `FADE = 1.2`, `ease: "easeOut"`, staggered, `whileInView` with
  `viewport={{ once: true, margin: "-50px" }}`. No springs, no bounces.
- `components/Starfield.tsx` is the visual signature — canvas stars with a
  very slow twinkle. Honors `prefers-reduced-motion`, pauses when tab hidden.

## Key conventions
- `metadata` exports only work in **Server Components**. Pages needing both
  metadata and Framer Motion use either a `layout.tsx` (about, cv,
  publications) or a server `page.tsx` + `*-client.tsx` pair (projects,
  events).
- `min-h-dvh` not `min-h-screen`. Safe-area utils: `qg-pl-safe`, `qg-pr-safe`,
  `qg-pt-safe`, `qg-pb-safe`. `qg-tap` = 44pt touch target.
- Shared date formatting and category colors live in `lib/format.ts` — don't
  duplicate them in components.
- All decorative icons need `aria-hidden="true"`. Global `:focus-visible`
  ring is defined in `globals.css`.

## Adding an event / journal entry
Create `content/events/<slug>.md`:
```markdown
---
title: "Title"
date: "2026-07-28"
location: "Tokyo, Japan"
category: "personal"   # career | research | reflection | personal
tags: ["tag1", "tag2"]
excerpt: "One-line summary."
image: "/events/photo.jpg"   # optional; file must exist in public/events/
---
Body in markdown.
```
Reading time, word count, prev/next links, sitemap entry, and BlogPosting
JSON-LD are all generated automatically.

## Build / deploy
- Build: `node node_modules/next/dist/bin/next build`
  (the `npx`/`.bin` shims are broken under Node 26 on this machine).
- Deploy: `vercel --yes --prod`. Project `garahanov` under the `nihongotest`
  team. Production alias: https://garahanov.vercel.app
- `vercel.json` locks the Next.js framework preset — without it Vercel falls
  back to the previous Jekyll settings and the build fails.
