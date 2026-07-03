# chenjin.io Personal Site Structure Audit

Date: 2026-07-03
Scope: homepage, blog, stack, work-with-me, code structure, routing, content model, build/lint health.

## Evidence

- 06-home-desktop-viewport.png: valid desktop homepage viewport.
- 07-blog-desktop-viewport.png: valid blog list viewport.
- 08-stack-desktop-viewport.png: valid stack page viewport.
- 09-work-with-me-desktop-viewport.png: valid work-with-me viewport.
- 10-home-mobile-viewport.png: captured under viewport override, but visual duplication appears to be a capture artifact; DOM width metrics did not confirm horizontal overflow.
- 01-05 full-page screenshots were rejected as visual audit evidence because the capture stitched repeated fixed/animated hero regions.

## Summary Judgment

The current site is directionally right for a personal operating-system style website: it combines identity, writing, tools, projects, and collaboration. The strongest fit is not a simple resume site. It should become a public workbench and trust router: visitors should quickly understand what Chen Jin thinks about, what she builds, what proof exists, and what action to take next.

The current implementation has enough foundation to continue, but the information architecture is ahead of the content and behind the current personal positioning. It mixes several site models at once: portfolio, blog, tools map, consulting page, roadmap, chat interface, and recommendation directory. The next optimization should reduce competing entry points and make the visitor path explicit.

## Findings

1. Homepage first viewport is visually calm and distinctive, but too low on actionable orientation. It communicates the brand line, not the visitor paths.
2. Hero chat input creates a strong product promise, but both HeroSection and FloatingChat still have TODO backend behavior. This can reduce trust if presented as primary interaction.
3. Navigation has many hidden or secondary paths. At some viewport widths the visible page gives little sense that Blog, Stack, Work With Me, Playbooks, and Roadmap exist.
4. The site has several unfinished trust surfaces: placeholder QR codes, hash links, TBD dates, coming-soon pages, and incomplete experience detail.
5. Blog content is already the strongest evidence layer, but the list page lacks filtering, featured grouping, or a clear editorial taxonomy for new readers.
6. Stack page has useful personal differentiation, but it is implemented as large in-page data and reads partly like a tool directory rather than proof of workflow.
7. Work With Me page has service categories but lacks evidence, scope boundaries, pricing/format hints, or qualification guidance.
8. Project docs have drifted from implementation. SPEC still references routes like /tools, /sources, /tutorials, /social, /support while code uses /stack, /playbooks, /work-with-me, and /roadmap.
9. Content and copy are split across centralized i18n, page-local conditionals, and hardcoded page data. This is okay for early work but will become brittle as the site grows.
10. ESLint currently scans .vite-cache even though .gitignore ignores it, causing dependency-cache lint failures. Business-code lint errors also remain in shadcn UI and tailwind config.

## Recommended Direction

Primary site model: Public Workbench + Proof Hub.

Recommended top-level IA:

- Home: positioning, proof highlights, current focus, selected paths.
- Writing: essays and notes, with topic filters.
- Projects: shipped artifacts, experiments, research projects, case studies.
- Workbench: tools, workflows, templates, stack.
- Work With Me: collaboration, consulting, sponsorship.
- About: story, timeline, operating principles, links.

Defer or hide until ready:

- Roadmap voting.
- Login modal.
- Primary chat interface.
- Donation QR cards.
- Empty experience detail pages.

## Implementation Priorities

1. Replace hero chat as primary CTA with 2-3 real paths: Read my latest work, See projects, Work with me. Keep chat as secondary or experimental.
2. Consolidate homepage sections around proof: latest writing, featured project, current workbench, collaboration path.
3. Move content metadata to a cleaner content model: markdown frontmatter or JSON/TS content indexes by domain.
4. Split large pages such as Stack and JikeBestIn2025 into data files plus smaller components.
5. Update ARCHITECTURE.md and SPEC.md to reflect the current route model.
6. Fix lint hygiene: ignore .vite-cache in eslint config; resolve empty interface and require import errors.
7. Add lightweight site QA: build, lint, route smoke test, and responsive screenshot check.

## Verification

- npm run build: passes.
- npm run lint: fails.
- Browser screenshots captured in this folder.
