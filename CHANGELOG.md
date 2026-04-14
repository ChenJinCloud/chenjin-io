# Changelog

All notable changes to chenjin.io are documented in this file.

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
