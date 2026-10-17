const BASE = "/images/";

/**
 * Central registry of the real Netron Lighting Industries photographs.
 *
 * Keys are named after what each photograph actually shows. The names were
 * verified by on-device vision analysis (text recognition + image
 * classification + face detection) — see src/assets/asset-manifest.json for the
 * evidence behind each one. The copies in public/images use safe, URL-friendly
 * names (photo-01 … photo-19); the original company filenames are preserved in
 * the manifest and were never modified.
 */
export const ASSETS = {
  logo: `${BASE}logo.png`,
  logoSquare: `${BASE}logo-512.png`,

  // Products
  ledBulb: `${BASE}photo-07.jpeg`,
  ledBulbLit: `${BASE}photo-08.jpeg`,
  downlight7w: `${BASE}photo-16.jpeg`,
  chandrayaanPackaging: `${BASE}photo-19.jpeg`,
  ariaFan: `${BASE}photo-04.jpeg`,
  etoileFan: `${BASE}photo-05.jpeg`,
  zephyrFan: `${BASE}photo-06.jpeg`,
  amareFan: `${BASE}photo-02.jpeg`,
  suzexFan: `${BASE}photo-09.jpeg`,
  suzexFanDisplay: `${BASE}photo-10.jpeg`,
  solarPanel: `${BASE}photo-17.jpeg`,

  // Brand & team
  brandBoard: `${BASE}photo-01.jpeg`,
  signboard: `${BASE}photo-18.jpeg`,
  founder: `${BASE}photo-03.jpeg`,

  // Additional photographs
  ceilingFanA: `${BASE}photo-11.jpeg`,
  ceilingFanB: `${BASE}photo-12.jpeg`,
  ceilingFanC: `${BASE}photo-13.jpeg`,
  ceilingFanD: `${BASE}photo-15.jpeg`,
} as const;

export type AssetKey = keyof typeof ASSETS;
