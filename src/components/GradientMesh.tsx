/**
 * Soft jade/cyan radial-gradient mesh + fractal-noise texture, restored from
 * the pre-AlphaHome hero design (git history: HeroSection.tsx @ 2104c3d).
 * Purely decorative background layer — renders behind content, never
 * intercepts pointer events.
 */
const GradientMesh = ({ fade = true }: { fade?: boolean }) => {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={
        fade
          ? {
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 72%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 0%, black 72%, transparent 100%)',
            }
          : undefined
      }
    >
      <div
        className="absolute inset-0 opacity-70 dark:hidden"
        style={{
          background: `
            radial-gradient(ellipse 70% 55% at 22% 28%, hsl(170 55% 55% / 0.32), transparent 60%),
            radial-gradient(ellipse 60% 50% at 78% 32%, hsl(155 45% 65% / 0.26), transparent 60%),
            radial-gradient(ellipse 80% 50% at 50% 78%, hsl(28 45% 70% / 0.22), transparent 65%),
            radial-gradient(ellipse 45% 40% at 88% 82%, hsl(180 35% 55% / 0.20), transparent 60%)
          `,
        }}
      />
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          background: `
            radial-gradient(ellipse 65% 50% at 28% 32%, hsl(170 60% 50% / 0.34), transparent 60%),
            radial-gradient(ellipse 55% 45% at 76% 70%, hsl(190 55% 45% / 0.26), transparent 60%),
            radial-gradient(ellipse 90% 60% at 50% 100%, hsl(155 35% 35% / 0.20), transparent 70%)
          `,
        }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.045] mix-blend-overlay dark:opacity-[0.06] dark:mix-blend-screen" aria-hidden="true">
        <filter id="meshNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#meshNoise)" />
      </svg>
    </div>
  );
};

export default GradientMesh;
