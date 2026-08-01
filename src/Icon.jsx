/* =============================================================
   SLICE v26 — inline SVG icon set

   Replaces the Font Awesome CDN stylesheet (~350 KB of CSS plus two
   webfont files, render-blocking, third-party) with ~6 KB of inline
   SVG that ships in the JS bundle.

   Drawn as thin engraved linework rather than solid glyphs, so the
   icons sit correctly alongside the vintage plates and rules.

   SIZING: every icon is 1em square and strokes with currentColor, so
   the existing CSS — which sizes icons with `font-size` and colours
   them with `color` — keeps working untouched.

   Adding an icon: add a key below, then use <Icon name="your-key" />.
   ============================================================= */

const P = {
  /* ---------- events ---------- */
  code: (
    <>
      <path d="M9 7.5 4 12l5 4.5" />
      <path d="M15 7.5 20 12l-5 4.5" />
      <path d="M13.4 5.5 10.6 18.5" />
    </>
  ),
  'file-invoice': (
    <>
      <path d="M6 2.75h8l4 4v14.5H6z" />
      <path d="M14 2.75v4h4" />
      <path d="M9 11.5h6M9 14.75h6M9 18h3.5" />
    </>
  ),
  bomb: (
    <>
      <circle cx="10.2" cy="14.8" r="6.4" />
      <path d="M14.9 10.2l1.6-1.6" />
      <path d="M16 7.4l1.5-1.5 2.6 2.6-1.5 1.5z" />
      <path d="M20.4 9.4c1.3-1.5-.7-2.8.7-4.3" />
      <path d="M6.3 13.4a4.9 4.9 0 0 1 3.2-2.7" />
    </>
  ),
  key: (
    <>
      <circle cx="8.2" cy="8.4" r="4.3" />
      <circle cx="8.2" cy="8.4" r="1.3" />
      <path d="M11.3 11.5 20 20.2" />
      <path d="m17.4 18.1 1.9-1.9M15.3 16l1.7-1.7" />
    </>
  ),
  'circle-nodes': (
    <>
      <circle cx="12" cy="12.5" r="2.4" />
      <circle cx="4.8" cy="6.2" r="2" />
      <circle cx="19.2" cy="7" r="2" />
      <circle cx="12" cy="20" r="2" />
      <path d="m6.3 7.6 3.9 3.4M17.6 8.5l-3.8 2.6M12 14.9V18" />
    </>
  ),
  'satellite-dish': (
    <>
      <ellipse cx="10.6" cy="9.8" rx="7.2" ry="4.8" transform="rotate(-30 10.6 9.8)" />
      <ellipse cx="10.6" cy="9.8" rx="3.4" ry="2.2" transform="rotate(-30 10.6 9.8)" />
      <path d="m12.4 6.2 1.9-4.1" />
      <circle cx="14.7" cy="1.6" r="1.3" />
      <path d="M12.6 13.1 15 21" />
      <path d="M11 21h6" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 2.4c3.7 3.3 5.3 8 5.3 11.8H6.7C6.7 10.4 8.3 5.7 12 2.4Z" />
      <circle cx="12" cy="9.6" r="2.1" />
      <path d="m6.7 14.2-2.4 4.1 4.2-1.2M17.3 14.2l2.4 4.1-4.2-1.2" />
      <path d="M9.6 14.2v3h4.8v-3" />
      <path d="M12 18.6v3" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.6 8.4-5 1.9-1.9 5 5-1.9z" />
      <circle cx="12" cy="12" r=".9" />
    </>
  ),
  'screwdriver-wrench': (
    <>
      <path d="M6.2 2.8 3 6l3.3 3.3 2-.6.6-2z" />
      <path d="m8.9 8.7 6.4 6.4" />
      <path d="M20.6 14.4a4.3 4.3 0 0 1-5.7 5.7l-2.5 2.5-2.6-2.6 2.5-2.5a4.3 4.3 0 0 1 5.7-5.7l-2.4 2.4 2.6 2.6z" />
    </>
  ),
  dice: (
    <>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="3" />
      <circle cx="8.2" cy="8.2" r="1.15" fill="currentColor" strokeWidth="0" />
      <circle cx="15.8" cy="8.2" r="1.15" fill="currentColor" strokeWidth="0" />
      <circle cx="12" cy="12" r="1.15" fill="currentColor" strokeWidth="0" />
      <circle cx="8.2" cy="15.8" r="1.15" fill="currentColor" strokeWidth="0" />
      <circle cx="15.8" cy="15.8" r="1.15" fill="currentColor" strokeWidth="0" />
    </>
  ),
  brain: (
    <>
      <path d="M11.2 4.1a2.7 2.7 0 0 0-4.7 1.4 2.6 2.6 0 0 0-2.3 3.7 2.7 2.7 0 0 0 .5 4.1 2.7 2.7 0 0 0 1.6 3.8 2.7 2.7 0 0 0 4.9 1.4z" />
      <path d="M12.8 4.1a2.7 2.7 0 0 1 4.7 1.4 2.6 2.6 0 0 1 2.3 3.7 2.7 2.7 0 0 1-.5 4.1 2.7 2.7 0 0 1-1.6 3.8 2.7 2.7 0 0 1-4.9 1.4z" />
      <path d="M12 4.1v14.7" />
      <path d="M8.6 8.6h2.1M13.3 11.4h2.3M9 13.6h1.8" strokeWidth="1.1" />
    </>
  ),
  microchip: (
    <>
      <rect x="6.6" y="6.6" width="10.8" height="10.8" rx="1.4" />
      <rect x="10" y="10" width="4" height="4" rx=".6" strokeWidth="1.1" />
      <path d="M9.2 6.6V3.4M12 6.6V3.4M14.8 6.6V3.4M9.2 17.4v3.2M12 17.4v3.2M14.8 17.4v3.2M6.6 9.2H3.4M6.6 12H3.4M6.6 14.8H3.4M17.4 9.2h3.2M17.4 12h3.2M17.4 14.8h3.2" strokeWidth="1.2" />
    </>
  ),
  'network-wired': (
    <>
      <rect x="8.6" y="2.6" width="6.8" height="4.6" rx="1" />
      <rect x="1.8" y="16.8" width="6.4" height="4.6" rx="1" />
      <rect x="15.8" y="16.8" width="6.4" height="4.6" rx="1" />
      <path d="M12 7.2v4M5 16.8v-2.6h14v2.6M12 11.2v3" />
    </>
  ),
  'user-tie': (
    <>
      <circle cx="12" cy="6.6" r="4" />
      <path d="M4.8 21.4c0-4 3.2-7.2 7.2-7.2s7.2 3.2 7.2 7.2" />
      <path d="m10.6 10.8 1.4 1.6 1.4-1.6" />
      <path d="m12 12.4-1 3.4 1 4 1-4z" strokeWidth="1.1" />
    </>
  ),
  trophy: (
    <>
      <path d="M7.6 3.4h8.8v6.2a4.4 4.4 0 0 1-8.8 0z" />
      <path d="M7.6 4.8H4.4v1.6a3.6 3.6 0 0 0 3.2 3.6" />
      <path d="M16.4 4.8h3.2v1.6a3.6 3.6 0 0 1-3.2 3.6" />
      <path d="M12 14v3.4M8.2 20.6h7.6M9.6 17.4h4.8" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="8.6" r="5.8" />
      <circle cx="12" cy="8.6" r="2.4" strokeWidth="1.1" />
      <path d="m8.4 13.6-2 7.8 5.6-2.8 5.6 2.8-2-7.8" />
    </>
  ),
  'calendar-days': (
    <>
      <rect x="3.2" y="4.8" width="17.6" height="16" rx="2" />
      <path d="M3.2 9.6h17.6M8 2.6v4.4M16 2.6v4.4" />
      <path d="M7.4 13h2.2M14.4 13h2.2M7.4 16.8h2.2M14.4 16.8h2.2" strokeWidth="1.2" />
    </>
  ),
  'calendar-check': (
    <>
      <rect x="3.2" y="4.8" width="17.6" height="16" rx="2" />
      <path d="M3.2 9.6h17.6M8 2.6v4.4M16 2.6v4.4" />
      <path d="m8.4 14.8 2.4 2.4 4.8-4.8" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.6V12l3.6 2.4" />
    </>
  ),
  'location-dot': (
    <>
      <path d="M12 21.6s-7-7.4-7-12a7 7 0 0 1 14 0c0 4.6-7 12-7 12Z" />
      <circle cx="12" cy="9.4" r="2.7" />
    </>
  ),
  'pen-to-square': (
    <>
      <path d="M19.4 12.4v7a2 2 0 0 1-2 2H4.6a2 2 0 0 1-2-2V6.6a2 2 0 0 1 2-2h7" />
      <path d="M17.6 2.8 21.2 6.4 12.4 15.2l-4.2.6.6-4.2z" />
      <path d="m16 4.4 3.6 3.6" strokeWidth="1.1" />
    </>
  ),
  play: (
    <>
      <path d="M7.4 4.6 19.6 12 7.4 19.4z" />
    </>
  ),
  'circle-check': (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m7.8 12.2 2.9 2.9 5.5-5.9" />
    </>
  ),
  xmark: (
    <>
      <path d="M5.6 5.6 18.4 18.4M18.4 5.6 5.6 18.4" />
    </>
  ),
  bars: (
    <>
      <path d="M3.6 6.4h16.8M3.6 12h16.8M3.6 17.6h16.8" />
    </>
  ),
  'compass-drafting': (
    <>
      <circle cx="12" cy="4.4" r="2" />
      <path d="m11 6.2-5.6 12.4M13 6.2l5.6 12.4" />
      <path d="M5.4 18.6 3.4 21.4M18.6 18.6l2 2.8" />
      <path d="M8.4 12.6a7 7 0 0 0 7.2 0" strokeWidth="1.1" />
    </>
  ),

  /* ---------- social ---------- */
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.05" fill="currentColor" strokeWidth="0" />
    </>
  ),
  'linkedin-in': (
    <>
      <path d="M4.4 9.4v11" />
      <circle cx="4.4" cy="4.6" r="2" />
      <path d="M10.6 20.4v-11" />
      <path d="M10.6 14.2c0-3 2.1-4.4 4.3-4.4 2.4 0 4.1 1.7 4.1 4.8v5.8" />
    </>
  ),
  youtube: (
    <>
      <rect x="2" y="4.8" width="20" height="14.4" rx="4.4" />
      <path d="m10 8.9 5.6 3.1-5.6 3.1z" />
    </>
  ),
};

export function Icon({ name, className = '', title }) {
  const glyph = P[name];
  if (!glyph) {
    if (import.meta.env?.DEV) console.warn(`<Icon>: unknown icon "${name}"`);
    return null;
  }
  return (
    <svg
      className={`icon ${className}`.trim()}
      viewBox="0 0 24 24"
      role={title ? 'img' : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {glyph}
    </svg>
  );
}

export const ICON_NAMES = Object.keys(P);
