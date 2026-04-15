# chenjin.io

Personal website for Chen Jin — growth lead, independent builder, and someone mapping the path from chaos to clarity in public.

Positioned as **self-as-SaaS**: the site is the product surface for my writing, playbooks, stack, and collaboration offers.

## Tech stack

- **Vite 5** + **React 18** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** + custom Chinese-traditional-color design system
- **Framer Motion** for animations
- **React Router** for client-side routing
- **i18n**: runtime EN / ZH switching via React Context

## Local development

```sh
npm install
npm run dev
```

Dev server runs on `http://localhost:8080` (falls back to 8081+ if occupied).

## Routes

| URL | Purpose |
|-----|---------|
| `/` | Landing — Hero / About / Works / Journey / Trust / Work With Me |
| `/playbooks` | Structured thematic playbooks (AI Coding 101, AI Growth 101, …) |
| `/blog` | Standalone essays and insight posts |
| `/stack` | Tools I build, tools I use, sources I follow |
| `/work-with-me` | Sponsor / 1v1 consulting / growth engagement / speaking |
| `/roadmap` | Public roadmap with feature voting |
| `/experience` | Career timeline list |
| `/experience/:id` | Single-stop detail page |

## Project docs

- [`SPEC.md`](./SPEC.md) — full specification
- [`ARCHITECTURE.md`](./ARCHITECTURE.md) — component and file layout
- [`ROADMAP.md`](./ROADMAP.md) — sprint plan and phases
- [`CHANGELOG.md`](./CHANGELOG.md) — release notes
- [`DISCUSSION.md`](./DISCUSSION.md) — decision log and session notes

## License

All rights reserved. Content and source may not be copied without permission.
