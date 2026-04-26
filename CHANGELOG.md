# Changelog

All notable changes to chenjin.io are documented in this file.

## [Unreleased] — feat/hero-merged (2026-04-22)

### Hero — ChatGPT-style Capsule Input

**Hero Input Box**
- ChatGPT-like capsule textarea as primary CTA
- Single line default, auto-grow on typing/pill focus
- Replaced wide hero chat with narrower input matching subtitle width on big screens
- Re-centered hero content vertically on 27" 2560 / 4K 3840 displays
- Wider chat input on 2xl/3xl breakpoints

### Navigation — Floating Capsule Layout

**Nav Redesign**
- Floating capsule layout: logo left / center pill nav / toggles right
- Base44-style sizing with xl-only home anchors for breathing at 1024-1279px
- Clean spacing and sizing for production polish

### Phase 2B — Hero Merged

**Hero Theme Merge**
- Merged hero: light=v1 / dark=v2 with soft transition
- Activated nav with final sizing and layout

### Works — Activate Cards Layout

**WorksSection Rewrite**
- Replaced static 2-column card grid with scroll-driven activate cards layout
- IntersectionObserver-based card activation: cards scroll into a narrow viewport band to trigger the active state
- Sticky preview panel (right side on desktop) with type-specific browser mockups:
  - **Project**: dashboard-style mockup (stats cards + bar chart)
  - **Blog**: article-style mockup (header image + title + body text)
  - **Tutorial**: code editor mockup (tabs + syntax-highlighted code lines)
  - **Resource**: map/grid mockup (toolbar + grid layout)
- Trigger cards with exact Atoms design tokens: border-radius 32px, padding 20px 24px, type-colored accent pills
- Browser mockups with Atoms-style title bar (traffic light dots), aspect-ratio 770/648, border-radius 16px
- AnimatePresence mode="wait" for smooth crossfade between preview panels
- Step dots indicator with type-colored active dot + counter (e.g. "01 / 04")
- Mobile: single-column card list without sticky preview
- Type → accent color mapping replaces Chinese classical color gradient system

### Contact — Social Info Update

**ContactSection Social Links**
- Updated WeChat from generic to specific: `c13286566252`
- WeChat 公众号 split into two: `陈今AI` + `MetaxisGrove`
- 即刻 updated to specific name: `陈今`
- EN + ZH both updated

### Files Changed
- `src/components/HeroSection.tsx` — capsule input, narrow width, 2xl/3xl responsive
- `src/components/Navigation.tsx` — floating capsule layout, base44 sizing
- `src/components/WorksSection.tsx` — complete rewrite: scroll-driven activate cards + sticky preview panels + browser mockups
- `src/lib/i18n.ts` — contact social links updated + works items structure changed

### Deleted Components
- `src/components/AIChatButton.tsx` — placeholder, never used
- `src/components/ExperienceSection.tsx` — replaced by JourneySection + Experience page
- `src/components/SkillsSection.tsx` — old component, not used on homepage

---

## [Unreleased] - 2026-04-15 (afternoon)

### IA Refactor (self-as-SaaS) — three-cut landing

**Cut 1 — Homepage trim** (`382abb5`)
- Removed ExploreSection from homepage (subpage discovery moves to top nav only)
- Removed #explore anchor from Navigation homeNavItems
- Renumbered section labels: Trust 05 to 04, Contact 06 to 05
- Upgraded Contact section copy from "Let's connect" to "Let's work together",
  reframed as sponsor/collaboration CTA (EN + ZH)
- Homepage runs 5 sections: Hero, About(01), Works(02), Journey(03), Trust(04), Work With Me(05)

**Cut 2 — New URL structure** (`5c1f180`)
- NEW: `src/pages/Playbooks.tsx` — thematic structured output
  (AI Coding 101, AI Growth 101, Vibe Coding log)
- NEW: `src/pages/Stack.tsx` — merged Tools + Sources
  (Tools I Build / Tools I Use / Sources I Follow) with Dialog preserved
- NEW: `src/pages/WorkWithMe.tsx` — sponsor + engagement hub
  (1v1 consulting, growth engagement, content licensing, speaking)
- NEW: `src/pages/Experience.tsx` — career timeline list page
  backed by journey data
- `src/App.tsx` — replaced /tools, /sources, /tutorials, /support, /social
  with /playbooks, /stack, /work-with-me, /experience
- `src/components/Navigation.tsx` — pageNavItems trimmed 7 to 5:
  Playbooks / Blog / Stack / Work with me / Roadmap

**Cut 3 — Cleanup** (`4984b81`)
- Deleted orphaned files: Tools.tsx, Sources.tsx, Tutorials.tsx, Support.tsx,
  SocialMedia.tsx, ExploreSection.tsx
- `src/components/FloatingChat.tsx` — conditional mount on /, /work-with-me,
  /roadmap only; reading pages (blog, playbooks, stack, experience) no
  longer show the floating chat to avoid reader interruption
- `src/lib/i18n.ts` — removed stale nav.explore key and explore block (EN + ZH)

### Sprint A — Cleanup pass (`819691a`)
- `README.md` — replaced Lovable template with real project documentation
- `ROADMAP.md` — rescheduled sprint from missed 4/9-4/15 to 4/15-5/1
  polish cadence; added four 2026-04-15 decision entries
- `vite.config.ts` — removed lovable-tagger plugin
- `package.json` — removed lovable-tagger devDependency; renamed package
  from `vite_react_shadcn_ts` to `chenjin-io`
- `public/favicon.ico` — deleted (Lovable's pink heart fallback)

---

## [Unreleased] - 2026-04-15

### Repo Migration & Brand Cleanup

**Repository**
- Migrated from `ChenJinCloud/chenjinai` to `ChenJinCloud/chenjin-io`
- Fresh git history: prior Lovable auto-commits discarded
- Full Phase 1+2A work (previously uncommitted on old remote) landed as initial commit
- Rationale: decouple from Lovable two-way sync, resolve 3-month local/remote divergence, align repo name with domain

**Favicon & Social**
- NEW: `public/favicon.svg` — dark teal `#395F5F` background with white serif italic "CJ"
- NEW: `public/og-image.svg` — 1200×630 placeholder card with "Turn chaos into clarity." tagline
- `index.html` — added explicit `<link rel="icon" type="image/svg+xml">`; replaced `og:image` and `twitter:image` from Lovable default to local `/og-image.svg`
- Replaces Lovable's default pink-heart favicon that browsers fell back to via `/favicon.ico`
- `public/favicon.ico` retained as fallback (explicit SVG link takes precedence)

**Docs**
- NEW: `DISCUSSION.md` — decision log capturing repo migration rationale, brand cleanup trace, 10 decisions with reasons, and open follow-ups
- `noindex, nofollow` meta tag kept intentionally (soft-launch mode, SEO gated until Phase 5)

---

## [Unreleased] - 2026-04-09

### Roadmap Page & Login Modal

**Roadmap (`/roadmap`)**
- NEW: `src/pages/Roadmap.tsx` — feature request board with upvote voting
- 5 mock items with status badges (Open / Planned / In Progress / Completed)
- One-vote-per-person-per-option toggle voting (chevron up button)
- Status filter tabs: All / Open / Planned / In Progress / Completed
- Submit request form: title + description + category selector (Feature / Content / Improvement / Other)
- Items sorted by vote count descending
- Full EN + ZH bilingual support

**Login Modal (UI mockup)**
- NEW: `src/components/LoginModal.tsx` — login dialog (no backend)
- Email login: input + "Continue with Email" button
- WeChat login: WeChat SVG icon + button
- Triggers toast "Login coming soon" on any action
- Opens when unauthenticated user tries to vote or submit

**Routing & Navigation**
- `src/App.tsx` — added `/roadmap` route
- `src/components/Navigation.tsx` — added "Roadmap / 路线图" to page nav items

**i18n**
- `src/lib/i18n.ts` — added `roadmap.*` and `login.*` translation keys (EN + ZH)

---

## [Unreleased] - 2026-04-08

### Full Landing Page Redesign (8 Sections)

**Section 1 — Hero**
- H1: "Turn chaos into clarity" / "化混沌为清晰"
- Rotating text animation (Framer Motion AnimatePresence, 2.5s cycle): AI toolkit / growth playbook / fresh perspective / build process / learning path
- Rotating keyword typography: Playfair Display italic bold
- Subtle teal gradient mesh background
- Removed "Read the Blog" / "Explore Tools" CTA buttons
- Removed description line (moved to About section)
- **Chat input box** as Hero's primary CTA — Claude-style textarea with:
  - Guide text: "Let's talk — what are you working on? Let's figure it out together."
  - File upload (paperclip icon)
  - Enter to send, Shift+Enter for newline
  - 4 quick topic pills below: Career → AI / Self-discovery / AI Coding / Product Growth
  - Prominent accent border + shadow styling

**Section 2 — About (01)**
- Two-column layout: text left (3 paragraphs), photo placeholder right
- New long-form bio content (EN + ZH)
- Hero description relocated here as italic accent intro line above bio

**Section 3 — Popular Works (02)**
- 2-column card grid with 4 featured items (Project, Blog, Tutorial, Resource)
- Type badges, status indicators, hover lift effect
- Mid-page email subscribe CTA

**Section 4 — Journey (03)**
- 2x2 card grid (Atoms-inspired)
- Large rounded cards (`rounded-3xl`), hover scale 1.02 + shadow
- Top gradient light edge on hover, expanding divider animation
- Period as pill badge, role as dominant visual
- Cubic-bezier `(0.22, 1, 0.36, 1)` easing (Base44-style)
- ⚠️ Needs further iteration — design language not fully captured

**Section 5 — Explore (04)**
- Layered interactive cards with gradient background on hover
- Icon in rounded square container, arrow slides in on hover
- Same `rounded-3xl` + scale + shadow system as Journey
- ⚠️ Needs further iteration — design language not fully captured

**Section 6 — Testimonials & Partners (05)**
- 3-column testimonial cards with large teal quotation marks
- Partner/association row below (InsForge, Atoms.dev, YC-backed)

**Section 7 — Contact (06)**
- Centered layout with email mailto link
- 6 social platform links (Twitter, LinkedIn, GitHub, WeChat, 即刻, YouTube)

**Section 8 — Footer**
- Minimal: copyright left, brand tagline right (italic Playfair)

### Floating Chat Button
- NEW: `FloatingChat.tsx` — right-bottom floating accent bubble
- Click to expand full chat panel (same features as Hero chat: textarea, upload, topics)
- Auto-hides on home page while Hero chat input is in viewport
- Auto-shows after scrolling past Hero, and on all other pages
- Panel opens with spring animation, closes on X or clicking outside
- Added to `App.tsx` — available globally across all routes

### Navigation
- Added mobile hamburger menu with animated lines → X transition
- Full-screen mobile overlay with all nav links
- Background blur header (`bg-background/80 backdrop-blur-md`)
- Updated home nav: About, Works, Journey, Explore, Contact

### VI Color System — Chinese Classical Colors (中国传统色)
- 7:3:1 color ratio
- **70% base**: 月白 `hsl(150,38%,95%)` / 玄墨 `hsl(200,10%,10%)`
- **30% text**: 青黛 `hsl(180,25%,18%)` / 素月 `hsl(150,15%,85%)`
- **10% accent**: 翠涛 `hsl(170,50%,37%)` / 天水碧 `hsl(170,42%,60%)`
- Supporting: 薄荷 (secondary), 碧山 (muted), 胭脂 (destructive)

### Typography
- Body font changed from Inter → DM Sans (warmer, pairs better with Playfair Display)
- Playfair Display retained for headings + italic bold rotating keywords

### i18n
- Complete bilingual content for all 8 sections (EN + ZH)
- New nav keys: works, journey, explore
- Section labels: 01–06 numbering system
- Chat UI strings: chatGuide, chatPlaceholder, chatSend, chatUpload, chatTopics

### Experience
- Added InsForge Growth Lead (2026.02–present) to work items

### Files Changed
- `src/App.tsx` — Added FloatingChat globally
- `src/pages/Index.tsx` — 8-section layout
- `src/components/HeroSection.tsx` — Chat input as primary CTA, no buttons
- `src/components/AboutSection.tsx` — Two-column with photo + hero description
- `src/components/WorksSection.tsx` — NEW: Featured work cards + email CTA
- `src/components/JourneySection.tsx` — NEW: Card-based journey
- `src/components/ExploreSection.tsx` — NEW: Interactive site section cards
- `src/components/TrustSection.tsx` — NEW: Testimonials + partners
- `src/components/ContactSection.tsx` — Centered, 6 social links
- `src/components/FloatingChat.tsx` — NEW: Global floating chat button + panel
- `src/components/Navigation.tsx` — Hamburger menu, blur header
- `src/components/Footer.tsx` — Brand tagline
- `src/lib/i18n.ts` — Full rewrite with all section content + chat strings
- `src/index.css` — DM Sans font, Chinese classical color variables
- `tailwind.config.ts` — DM Sans as default sans font
