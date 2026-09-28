# chenjin.io

Personal site for Chen Jin (陈今) — positioned around one identity statement: turning ambiguous growth, content,
collaboration, and AI-workflow problems into executable systems, backed by real practice.

Information architecture follows a four-species content model — every new piece of output is either **content**
(`/writing`), a **self-built tool** (`/lab`), a **curated resource list** (`/resources`), or big enough to be an
**independent product** (external domain, linked from `/projects`). New topics only ever add a tag or a sub-page;
they never add a new top-level nav item.

## Tech stack

- **Next.js 15** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** (trimmed to the components actually in use) + a Chinese-traditional-color design
  system (月白 / 青黛 / 翠涛 / 胭脂 semantic tokens in `src/app/globals.css`)
- **next/font** for Playfair Display (serif/display) + DM Sans (sans)
- **Framer Motion** for animation
- **next/link** + **next/navigation** for routing (migrated off React Router in the Vite → Next.js migration)
- **i18n**: runtime EN / ZH switching via React Context (`LanguageContext`) — full bilingual routing (`/en` prefix)
  is a planned next phase, not yet implemented
- **PostHog** for SPA-style pageview + outbound-click analytics

## Local development

```sh
npm install
npm run dev
```

Dev server runs on `http://localhost:8080`.

```sh
npm run build   # next build — includes TypeScript typecheck + ESLint
npm run start   # serve the production build
```

## Routes

| URL | Purpose |
|-----|---------|
| `/` | Hero, one-line identity statement, primary CTA into `/writing` |
| `/writing`, `/writing/[slug]`, `/writing/tag/[tag]` | Content — the core, continuously-updated species |
| `/projects`, `/projects/[slug]` | Evidence layer — shipped case studies, in-progress work, independent-product links |
| `/lab`, `/lab/[slug]` | Self-built, runnable tools |
| `/resources`, `/resources/stack`, `/resources/bookshelf`, `/resources/picks` | Curated third-party tools, books, reading — not original content |
| `/work-with-me` | The single commercial entry point |
| `/about` | Identity, timeline, method provenance (low-frequency, fixed page) |
| `/roadmap` | Build plan + reader request pool |
| `/chat` | Site-knowledge chat router (local rules today, no LLM/memory backend yet) |
| `/account` | Placeholder for future comment/chat-history management (icon entry, not in nav) |
| `/newsletter`, `/privacy`, `/terms` | Supporting utility pages |

Legacy Vite-era paths (`/blog`, `/playbooks`, `/workbench`, `/stack`, `/experience/*`, and the pre-2026-04
`/tools /sources /tutorials /social /support`) all 301-redirect to their new homes via `next.config.mjs` —
`robots.txt` has allowed full crawling throughout, so these may still be indexed.

## Project docs

- [`SPEC.md`](./SPEC.md), [`ARCHITECTURE.md`](./ARCHITECTURE.md), [`ROADMAP.md`](./ROADMAP.md),
  [`CHANGELOG.md`](./CHANGELOG.md), [`DISCUSSION.md`](./DISCUSSION.md) — pre-migration docs, **not yet updated**
  for the Next.js migration and new IA. Treat their tech-stack and route descriptions as historical until refreshed.

## License

All rights reserved. Content and source may not be copied without permission.
