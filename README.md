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
| `/` | Personal profile and portrait, rotating topics, Chat and Contact |
| `/writing`, `/writing/[slug]`, `/writing/tag/[tag]` | Content — the core, continuously-updated species |
| `/projects`, `/projects/[slug]` | Evidence layer — shipped case studies, in-progress work, independent-product links |
| `/lab`, `/lab/[slug]` | Self-built, runnable tools |
| `/resources`, `/resources/stack`, `/resources/bookshelf`, `/resources/picks` | Curated third-party tools, books, reading — not original content |
| `/work-with-me` | The single commercial entry point |
| `/about` | Identity, timeline, method provenance (low-frequency, fixed page) |
| `/roadmap` | Build plan + reader request pool |
| `/chat` | Site-knowledge chat router (local rules today, no LLM/memory backend yet) |
| `/insforge` | Temporary noindex notice for the independent insforge.chenjin.io site |
| `/login`, `/app`, `/app/chat` | Authentication and protected workspace scaffold; authentication is not connected yet |
| `/account` | Placeholder for future comment/chat-history management (icon entry, not in nav) |
| `/newsletter`, `/privacy`, `/terms` | Supporting utility pages |

Legacy Vite-era paths (`/blog`, `/playbooks`, `/workbench`, `/stack`, `/experience/*`, and the pre-2026-04
`/tools /sources /tutorials /social /support`) all 301-redirect to their new homes via `next.config.mjs` —
`robots.txt` has allowed full crawling throughout, so these may still be indexed.

## Independent sub-sites

`sites/insforge` is a separate Next.js application for `insforge.chenjin.io`, with its own build and development port (8085). It is not included in the parent app build. The domain has not been deployed or bound yet. See its [README](sites/insforge/README.md).

`sites/growth` records the design and public configuration for Global Growth OS at `growth.chenjin.io`. Its independent application and deployment are not implemented. The parent `/projects/global-growth-os` page remains the project overview and personal retrospective entry. See its [README](sites/growth/README.md).

## Architecture baseline

See [ARCHITECTURE-V1.md](docs/architecture/ARCHITECTURE-V1.md) for the current modular architecture, public/private boundary, identity and CTA policy, topic collections, authentication/chat contracts, and InstaCloud release plan.

```sh
npm run check:architecture
```

This checks transitive client imports and runtime dependencies between controlled feature domains. Public article bodies are server-only; client pages receive published card projections. `/api/public/knowledge` is stateless rule-based search, not a persistent AI chat. `/app/*` fails closed until the session adapter is connected.

InstaCloud project: `chenjin-io`; development environment: `architecture-v1`. No application service or database has been deployed in this architecture phase. The Dockerfile builds Next standalone output; credentials and local agent files are excluded.

## Project docs

- [`SPEC.md`](./SPEC.md), [`ARCHITECTURE.md`](./ARCHITECTURE.md), [`ROADMAP.md`](./ROADMAP.md),
  [`CHANGELOG.md`](./CHANGELOG.md), [`DISCUSSION.md`](./DISCUSSION.md) — pre-migration docs, **not yet updated**
  for the Next.js migration and new IA. Treat their tech-stack and route descriptions as historical until refreshed.

## License

All rights reserved. Content and source may not be copied without permission.
