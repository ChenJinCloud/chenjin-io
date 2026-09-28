import posthog from 'posthog-js';

// Client-side project token — PostHog documents this as a write-only key
// that is safe to ship in public apps (it cannot read data back).
const POSTHOG_KEY = 'phc_yEfJKBoGnfbhc5R6MuAGSbd8GME7hGCxwcuDmdLgRxES';
const POSTHOG_HOST = 'https://us.i.posthog.com';

let initialized = false;

/** Boots PostHog once. Pageviews are captured manually (see trackPageview)
 * because this is a client-side-routed SPA — the default autocapture only
 * fires on a hard page load. */
export const initAnalytics = () => {
  if (initialized || typeof window === 'undefined') return;
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    person_profiles: 'identified_only',
    capture_pageview: false,
    capture_pageleave: true,
  });
  initialized = true;
};

export const trackPageview = (path: string) => {
  if (!initialized) return;
  posthog.capture('$pageview', {
    $current_url: `${window.location.origin}${path}`,
  });
};

export const trackEvent = (name: string, properties?: Record<string, unknown>) => {
  if (!initialized) return;
  posthog.capture(name, properties);
};

/** Convenience wrapper for the outbound-link clicks the site's measurement
 * plan cares about most: which projects, tools, and contact channels people
 * actually follow through to. */
export const trackOutboundClick = (destination: string, context: Record<string, unknown> = {}) => {
  trackEvent('outbound_link_click', { destination, ...context });
};
