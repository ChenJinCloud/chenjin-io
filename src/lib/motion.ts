/**
 * Shared framer-motion tokens. Before this file existed, duration (9 distinct
 * values), ease curves (2 distinct arrays) and viewport thresholds (2 distinct
 * objects) were hand-typed at every call site across ~19 files. Components
 * should reference these instead of writing new literals.
 */

/** The site's single easing curve. Everything that isn't a linear/instant
 * transition should use this. */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Named duration tiers, in seconds. Pick the closest semantic match rather
 * than introducing a new number. */
export const DURATION = {
  /** Micro state changes: toggles, small opacity flips. */
  instant: 0.2,
  /** Small UI transitions: popovers, mobile menu, dropdown. */
  fast: 0.25,
  /** Per-item stagger reveal inside a list or grid. */
  stagger: 0.45,
  /** Standard section/element fade-in. */
  base: 0.6,
  /** Larger structural reveals (nav shell, big cards). */
  slow: 0.7,
  /** Hero-scale, page-defining reveals. */
  hero: 0.8,
} as const;

/** Standard whileInView trigger threshold — fires once, slightly before the
 * element reaches the viewport edge. */
export const VIEWPORT = { once: true, margin: '-100px' } as const;

/** The most common entrance pattern in the codebase: fade up from 20px. */
export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
} as const;

/** Delay for the i-th item in a staggered list. */
export const stagger = (index: number, step = 0.05, base = 0) => base + index * step;
