# Begench Garahanov — Personal Website

The source for [garahanov.vercel.app](https://garahanov.vercel.app), a
professional portfolio covering my experience, education, research, and
selected writing.

## Content

- Technical Expert experience at Apple Japan
- Master’s research in Policy Sciences at Waseda University
- Engineering and international-relations background
- Conference paper and selected projects

Public biographical claims are maintained in `lib/content.ts`. Journal entries
are Markdown files under `content/events`.

## Development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Before publishing:

```bash
npm run check
```

## Stack

Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, and
Markdown content rendered with Remark. The production site is deployed on
Vercel.
